const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function GetBookingHistoryWithProducts(req, res) {
  try {
    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }
    const user_id = user.session._id;

    const db = await connectDB();
    const bookingCollection = db.collection("booking");
    const cartCollection = db.collection("cart");
    const productsCollection = db.collection("products");

    // Find all bookings of the user
    const userBookings = await bookingCollection
      .find({ user_id: ObjectId.createFromHexString(user_id) })
      .project({
        _id: 1,
        booking_date: 1,
        start_date: 1,
        end_date: 1,
        total_amount: 1,
        payment_mode: 1,
      })
      .toArray();

    const bookingIds = userBookings.map((b) => b._id);

    if (bookingIds.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No booking history found!" });
    }

    // Fetch all cart items linked to those bookings
    const bookedItems = await cartCollection
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
            from: "booking",
            localField: "booking_id",
            foreignField: "_id",
            as: "booking_details",
          },
        },
        { $unwind: "$booking_details" },
        {
          $project: {
            _id: 1,
            product_id: 1,
            booking_id: 1,
            cart_status: 1,
            p_qty: 1,
            product_details: 1,
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

    if (bookedItems.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No booked products found!" });
    }

    return res.status(200).json({
      success: true,
      message: "Booked products fetched successfully!",
      data: bookedItems,
    });
  } catch (error) {
    console.error("GetIndividualBookedProducts API Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { GetBookingHistoryWithProducts };
