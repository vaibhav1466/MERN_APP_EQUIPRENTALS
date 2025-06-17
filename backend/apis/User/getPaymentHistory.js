const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function getPaymentHistory(req, res) {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized User!" });
        }
        const user_id = user.session._id;

        const db = await connectDB();
        const paymentCollection = db.collection("payment");

        const paymentHistory = await paymentCollection.aggregate([
            { $match: { user_id: ObjectId.createFromHexString(user_id) } },
            {
                $lookup: {
                    from: "booking",
                    localField: "booking_id",
                    foreignField: "_id",
                    as: "booking_details"
                }
            },
            { $unwind: { path: "$booking_details", preserveNullAndEmptyArrays: true } },
            { $sort: { datetime: -1 } } // ✅ Sorting by datetime field in descending order
        ]).toArray();

        return res.status(200).json({
            success: true,
            message: "Payment history fetched successfully!",
            data: paymentHistory
        });

    } catch (error) {
        console.error("getPaymentHistory API Error:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = { getPaymentHistory };
