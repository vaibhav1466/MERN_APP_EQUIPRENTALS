const connectDB = require("../../db/dbConnect");
const { ObjectId } = require("mongodb");

async function DeleteCategory(req, res) {
  try {
    const db = await connectDB();
    const categoryCollection = db.collection("category");
    const { catId } = req.body;

    if (!catId) {
      return res
        .status(400)
        .json({ success: false, message: "Category ID is required!" });
    }

    // Check if the category exists
    const existingCategory = await categoryCollection.findOne({
      _id: new ObjectId(catId),
    });
    if (!existingCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    // Update status to 1 (inactive)
    const result = await categoryCollection.updateOne(
      { _id: new ObjectId(catId) },
      { $set: { status: "1" } }
    );

    if (result.modifiedCount > 0) {
      return res.status(200).json({
        success: true,
        message: "Category status updated to inactive!",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Category is already inactive or failed to update",
      });
    }
  } catch (error) {
    console.error("DeleteCategory API Error: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { DeleteCategory };
