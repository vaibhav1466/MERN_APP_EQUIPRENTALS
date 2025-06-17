const connectDB = require("../../db/dbConnect");

async function GetAllBookingHistory(req, res) {
  try {
    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const db = await connectDB();
    const bookingCollection = db.collection("booking");
    const cartCollection = db.collection("cart");

    const allBookings = await bookingCollection
      .find({})
      .project({
        _id: 1,
        user_id: 1,
        booking_date: 1,
        start_date: 1,
        end_date: 1,
        total_amount: 1,
        payment_mode: 1,
      })
      .toArray();

    const bookingIds = allBookings.map((b) => b._id);

    if (bookingIds.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No booking history found!" });
    }

    const bookingData = await cartCollection
      .aggregate([
        { $match: { booking_id: { $in: bookingIds } } },
        {
          $lookup: {
            from: "products",
            localField: "p_id",
            foreignField: "_id",
            as: "product_details",
          },
        },
        { $unwind: "$product_details" },
        {
          $lookup: {
            from: "vendors",
            localField: "product_details.vendor_id",
            foreignField: "_id",
            as: "vendor_details",
          },
        },
        {
          $unwind: {
            path: "$vendor_details",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "booking",
            localField: "booking_id",
            foreignField: "_id",
            as: "booking_details",
          },
        },
        { $unwind: "$booking_details" },
        {
          $lookup: {
            from: "users",
            localField: "booking_details.user_id",
            foreignField: "_id",
            as: "user_details",
          },
        },
        {
          $unwind: {
            path: "$user_details",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            product_id: 1,
            productName: "$product_details.p_name",
            productPrice: "$product_details.p_price",
            booking_id: 1,
            cart_status: 1,
            p_qty: 1,
            vendorName: { $ifNull: ["$vendor_details.name", null] },
            vendorPhone: { $ifNull: ["$vendor_details.phone", null] },
            userName: { $ifNull: ["$user_details.name", null] },
            userPhone: { $ifNull: ["$user_details.phone", null] },
            booking_details: {
              booking_date: 1,
              start_date: 1,
              end_date: 1,
              total_amount: 1,
              status: 1,
              payment_mode: 1,
            },
          },
        },
        { $sort: { "booking_details.booking_date": -1 } },
      ])
      .toArray();

    if (bookingData.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No booking data found!" });
    }

    return res.status(200).json({
      success: true,
      message:
        "All booking history with product name, vendor & user details fetched successfully!",
      data: bookingData,
    });
  } catch (error) {
    console.error("GetAllBookingHistory API Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { GetAllBookingHistory };
