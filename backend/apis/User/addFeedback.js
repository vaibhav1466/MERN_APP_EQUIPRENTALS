const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function AddFeedback(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("feedback");

        const { rating, comment } = req.body;

        const user = req.session.user;
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized User!" });
        }

        const userId = user.session._id;

        if (!rating || !comment) {
            return res
                .status(400)
                .json({ success: false, message: "Missing required fields!" });
        }

        await collection.insertOne({
            rating: parseFloat(rating),
            comment,
            userId: ObjectId.createFromHexString(userId),
            datetime: new Date(),
        });

        return res
            .status(200)
            .json({ success: true, message: "Feedback added Successful" });

    } catch (error) {
        console.error("AddFeedback.js: ", error);
        return res
            .status(500)
            .json({ success: false, error: "Something went wrong" });
    }
}

module.exports = { AddFeedback };
