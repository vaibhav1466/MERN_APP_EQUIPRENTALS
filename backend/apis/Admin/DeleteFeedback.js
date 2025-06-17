const connectDB = require("../../db/dbConnect");
const { ObjectId } = require("mongodb");

async function DeleteFeedback(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("feedback");

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const { feedbackId } = req.body;

    if (!feedbackId) {
      return res
        .status(400)
        .json({ success: false, message: "Feedback ID is required!" });
    }

    // Check if feedback exists
    const existingFeedback = await collection.findOne({
      _id: ObjectId.createFromHexString(feedbackId),
    });
    if (!existingFeedback) {
      return res
        .status(404)
        .json({ success: false, message: "Feedback not found!" });
    }

    const result = await collection.deleteOne({
      _id: ObjectId.createFromHexString(feedbackId),
    });

    if (result.deletedCount === 1) {
      return res.status(200).json({
        success: true,
        message: "Feedback deleted successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to delete feedback",
      });
    }
  } catch (error) {
    console.log("DeleteFeedback.js: ", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { DeleteFeedback };
