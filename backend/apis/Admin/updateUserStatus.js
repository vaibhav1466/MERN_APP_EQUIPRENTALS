const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function UpdateUserStatus(req, res) {
  try {
    const { userId, status } = req.body;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is required" });
    }

    const db = await connectDB();
    const userCollection = db.collection("users");

    const result = await userCollection.updateOne(
      { _id: ObjectId.createFromHexString(userId) },
      { $set: { status: status } }
    );

    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found or already blocked" });
    }

    return res
      .status(200)
      .json({ success: true, message: "User blocked successfully" });
  } catch (error) {
    console.error("UpdateUserStatus API Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { UpdateUserStatus };
