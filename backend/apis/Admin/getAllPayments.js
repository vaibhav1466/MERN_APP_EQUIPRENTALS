const connectDB = require("../../db/dbConnect");

async function GetAllPayments(req, res) {
  try {
    const db = await connectDB();
    const paymentCollection = db.collection("payment");

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const payments = await paymentCollection
      .aggregate([
        {
          $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "_id",
            as: "userDetails",
          },
        },
        {
          $unwind: {
            path: "$userDetails",
            preserveNullAndEmptyArrays: true, // if user not found, keep null
          },
        },
        {
          $project: {
            amount: 1,
            transaction_id: 1,
            payment_status: 1,
            datetime: 1,
            booking_id: 1,
            userName: { $ifNull: ["$userDetails.name", null] },
            userPhone: { $ifNull: ["$userDetails.phone", null] },
          },
        },
        { $sort: { datetime: -1 } },
      ])
      .toArray();

    if (payments.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No payment records found" });
    }

    res.status(200).json({
      success: true,
      payments,
      message: "All payment data with user details fetched successfully",
    });
  } catch (error) {
    console.error("GetAllPayments: ", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { GetAllPayments };
