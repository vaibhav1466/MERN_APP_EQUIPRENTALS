const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function GetVendorBookingHistory(req, res) {
  try {
    const user = req.session.user;
    if (!user || !user.session) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized Vendor!" });
    }

    const vendor_id = user.session._id;

    const db = await connectDB();
    const productsCollection = db.collection("products");
    const cartCollection = db.collection("cart");

    // Get all product IDs for this vendor
    const vendorProducts = await productsCollection
      .find({ vendor_id: ObjectId.createFromHexString(vendor_id) })
      .project({ _id: 1 })
      .toArray();
    const productIds = vendorProducts.map((p) => p._id);

    if (productIds.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found for this vendor!",
      });
    }

    // Fetch booking history with user info and return comments
    const vendorBookingHistory = await cartCollection
      .aggregate([
        { $match: { p_id: { $in: productIds }, cart_status: "1" } },
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
          $lookup: {
            from: "users",
            localField: "booking_details.user_id",
            foreignField: "_id",
            as: "user_details",
          },
        },
        { $unwind: "$user_details" },
        {
          $lookup: {
            from: "payment",
            localField: "booking_id",
            foreignField: "booking_id",
            as: "payment_details",
          },
        },
        { $unwind: "$payment_details" },
        {
          $lookup: {
            from: "returnComments",
            let: {
              cartId: "$_id",
              bookingId: "$booking_id",
              productId: "$p_id",
              vendorId: ObjectId.createFromHexString(vendor_id),
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$cart_id", "$$cartId"] },
                      { $eq: ["$booking_id", "$$bookingId"] },
                      { $eq: ["$p_id", "$$productId"] },
                      { $eq: ["$vendor_id", "$$vendorId"] },
                    ],
                  },
                },
              },
              { $sort: { datetime: -1 } },
              { $limit: 1 },
            ],
            as: "return_comment",
          },
        },
        {
          $unwind: {
            path: "$return_comment",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: 1,
            p_qty: 1,
            booking_id: 1,
            product_details: 1,
            booking_details: {
              booking_date: 1,
              start_date: 1,
              end_date: 1,
              total_amount: 1,
              payment_mode: 1,
            },
            payment_details: {
              transaction_id: 1,
              amount: 1,
              payment_status: 1,
            },
            user_details: {
              name: 1,
              phone: 1,
            },
            return_comment: {
              $cond: {
                if: { $ifNull: ["$return_comment", false] },
                then: {
                  returnComments: "$return_comment.returnComments",
                  datetime: "$return_comment.datetime",
                },
                else: null,
              },
            },
          },
        },
        { $sort: { "booking_details.booking_date": -1 } },
      ])
      .toArray();

    if (vendorBookingHistory.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No bookings found for vendor's products!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Vendor product booking history fetched successfully!",
      data: vendorBookingHistory,
    });
  } catch (error) {
    console.error("GetVendorBookingHistory API Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { GetVendorBookingHistory };
