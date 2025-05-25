const { ObjectId } = require("mongodb");
const connectDB = require("../db/dbConnect");

async function GetCategoryWiseProducts(req, res) {
  try {
    const { cat_id } = req.query;

    if (!cat_id) {
      return res
        .status(400)
        .json({ success: false, message: "Product ID is required!" });
    }

    if (!ObjectId.isValid(cat_id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    }

    const db = await connectDB();
    const productsCollection = db.collection("products");

    const product = await productsCollection
      .aggregate([
        {
          $match: {
            cat_id: ObjectId.createFromHexString(cat_id),
            p_status: "active",
          },
        },
        {
          $lookup: {
            from: "category",
            localField: "cat_id",
            foreignField: "_id",
            as: "categoryDetails",
          },
        },
        {
          $unwind: {
            path: "$categoryDetails",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: 1,
            p_name: 1,
            p_price: 1,
            p_desc: 1,
            p_imgs: 1,
            p_status: 1,
            p_qty: 1,
            deposit: 1,
            vendor_id: 1,
            category_name: "$categoryDetails.cat_name",
          },
        },
      ])
      .toArray();

    if (!product.length) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      products: product,
      success: true,
      message: "Products fetched successfully",
    });
  } catch (error) {
    console.log("GetCategoryWiseProducts.js: ", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { GetCategoryWiseProducts };
