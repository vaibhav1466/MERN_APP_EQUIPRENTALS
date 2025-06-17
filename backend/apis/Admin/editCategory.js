const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function EditCategory(req, res) {
  try {
    const db = await connectDB();
    const categoryCollection = db.collection("category");
    const { catId, cat_name } = req.body;

    if (!catId || !cat_name) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!" });
    }

    // Check if the category exists
    const existingCategory = await categoryCollection.findOne({
      _id: ObjectId.createFromHexString(catId),
    });
    if (!existingCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found!",
      });
    }

    // Check if another category with the same name already exists
    const duplicateCategory = await categoryCollection.findOne({
      cat_name,
      _id: { $ne: ObjectId.createFromHexString(catId) },
    });

    if (duplicateCategory) {
      return res.status(400).json({
        success: false,
        message: "Another category with this name already exists!",
      });
    }

    const updatedCategory = {
      cat_name,
      status: existingCategory.status, // Keep the existing status
    };

    const result = await categoryCollection.updateOne(
      { _id: ObjectId.createFromHexString(catId) },
      { $set: updatedCategory }
    );

    if (result.modifiedCount > 0) {
      return res.status(200).json({
        success: true,
        message: "Category updated successfully!",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "No changes made or failed to update category",
      });
    }
  } catch (error) {
    console.error("EditCategory API Error: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { EditCategory };
