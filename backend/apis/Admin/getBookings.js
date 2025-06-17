const connectDB = require("../../db/dbConnect");

async function GetBookings(req, res) {

    try {
        const db = await connectDB();
        const collection = db.collection("bookings");

        const user = req.session.user;
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized User!" });
        }

        const bookings = await collection.find({}).toArray();

        if (bookings.length === 0) {
            return res
                .status(400)
                .json({ success: false, message: "Bookings not found" });
        }

        res.status(200).json({
            bookings,
            success: true,
            message: "Bookings fetched successfully",
        });

    } catch (error) {
        console.log("GetBookings.js: ", error);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
}

module.exports = { GetBookings };