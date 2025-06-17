const { ObjectId } = require("mongodb");
const connectDB = require("../db/dbConnect");

async function GetSingleProduct(req, res) {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");

    // Extract product ID from request params
    const { productId } = req.body;

    // Validate ObjectId
    if (!ObjectId.isValid(productId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid product ID" });
    }

    // Fetch product details along with category name using aggregation
    const productDetails = await productCollection
      .aggregate([
        {
          $match: { _id: ObjectId.createFromHexString(productId) }, // Match product by ID
        },
        {
          $lookup: {
            from: "category", // Join with category collection
            localField: "cat_id",
            foreignField: "_id",
            as: "categoryDetails",
          },
        },
        {
          $unwind: "$categoryDetails", // Convert category array to object
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
            category_name: "$categoryDetails.cat_name", // Extract category name
          },
        },
      ])
      .toArray();

    // If no product is found
    if (!productDetails.length) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Send response with product details
    return res.status(200).json({
      success: true,
      message: "Product details fetched successfully!",
      product: productDetails[0],
    });
  } catch (error) {
    console.error("GetSingleProduct API Error: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { GetSingleProduct };
