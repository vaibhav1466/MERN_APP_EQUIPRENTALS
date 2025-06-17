const connectDB = require("../../db/dbConnect");

async function GetFeedbacks(req, res) {

    try {
        const db = await connectDB();
        const collection = db.collection("feedback");

        const user = req.session.user;
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized User!" });
        }

        const feedbacks = await collection.find({}).toArray();

        if (feedbacks.length === 0) {
            return res
                .status(400)
                .json({ success: false, message: "Feedbacks not found" });
        }

        res.status(200).json({
            feedbacks,
            success: true,
            message: "Feedbacks fetched successfully",
        });

    } catch (error) {
        console.log("GetFeedbacks.js: ", error);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
}

module.exports = { GetFeedbacks };
