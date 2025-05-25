const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function GetVendorActiveProducts(req, res) {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const vendorId = user.session._id;

    const products = await productCollection
      .aggregate([
        {
          $match: {
            vendor_id: ObjectId.createFromHexString(vendorId),
            p_status: "active",
          }, // Only active products
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
            vendor_id: 1,
            category_name: "$categoryDetails.cat_name", // Extract category name
            cat_id: "$categoryDetails._id", // Extract category name
          },
        },
      ])
      .toArray();

    // If no active products found
    if (products.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No active products found" });
    }

    // Send response with active products
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      products,
    });
  } catch (error) {
    console.error("GetVendorActiveProducts API Error: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { GetVendorActiveProducts };
