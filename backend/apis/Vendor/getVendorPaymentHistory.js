const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function getVendorPaymentHistory(req, res) {
    try {
        const vendor = req.session.user;
        if (!vendor) {
            return res.status(401).json({ success: false, message: "Unauthorized Vendor!" });
        }
        const vendor_id = vendor.session._id;

        const db = await connectDB();
        const paymentCollection = db.collection("payment");
        const cartCollection = db.collection("cart");
        const userCollection = db.collection("user");
        const bookingCollection = db.collection("booking");
        const productCollection = db.collection("product");

        // Fetch all payments associated with this vendor via cart collection
        const vendorPayments = await cartCollection.aggregate([
            {
                $match: {
                    vendor_id: ObjectId.createFromHexString(vendor_id),
                    cart_status: "1" // Only booked carts
                }
            },
            {
                $lookup: {
                    from: "payment",
                    localField: "booking_id",
                    foreignField: "booking_id",
                    as: "payment_details"
                }
            },
            { $unwind: { path: "$payment_details", preserveNullAndEmptyArrays: true } },
            {
                $lookup: {
                    from: "booking",
                    localField: "booking_id",
                    foreignField: "_id",
                    as: "booking_details"
                }
            },
            { $unwind: { path: "$booking_details", preserveNullAndEmptyArrays: true } },
            {
                $lookup: {
                    from: "product",
                    localField: "product_id",
                    foreignField: "_id",
                    as: "product_details"
                }
            },
            { $unwind: { path: "$product_details", preserveNullAndEmptyArrays: true } },
            {
                $lookup: {
                    from: "user",
                    localField: "payment_details.user_id",
                    foreignField: "_id",
                    as: "user_details"
                }
            },
            { $unwind: { path: "$user_details", preserveNullAndEmptyArrays: true } },
            { $sort: { "payment_details.datetime": -1 } }
        ]).toArray();

        return res.status(200).json({
            success: true,
            message: "Vendor payment history fetched successfully!",
            data: vendorPayments
        });

    } catch (error) {
        console.error("getVendorPaymentHistory API Error:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = { getVendorPaymentHistory };
