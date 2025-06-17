const connectDB = require("../db/dbConnect");

async function GetCategory(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("category");

    const categories = await collection.find({ status: "0" }).toArray();

    if (categories.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Categories not found" });
    }

    res.status(200).json({
      categories,
      success: true,
      message: "Categories fetched Successfully",
    });
  } catch (error) {
    console.log("GetCategory.js: ", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { GetCategory };
