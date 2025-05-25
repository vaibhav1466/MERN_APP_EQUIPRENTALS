const connectDB = require("../../db/dbConnect");

async function GetAllActiveProducts(req, res) {
  try {
    const db = await connectDB();
    const productsCollection = db.collection("products");

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const products = await productsCollection
      .aggregate([
        {
          $match: {
            p_status: "active",
          },
        },
        {
          $lookup: {
            from: "vendors",
            localField: "vendor_id",
            foreignField: "_id",
            as: "vendorDetails",
          },
        },
        {
          $unwind: {
            path: "$vendorDetails",
            preserveNullAndEmptyArrays: true,
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
            vendorName: { $ifNull: ["$vendorDetails.name", null] },
            vendorPhone: { $ifNull: ["$vendorDetails.phone", null] },
            categoryName: { $ifNull: ["$categoryDetails.cat_name", null] },
            createdAt: 1,
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      products,
      message:
        "Active products with vendor and category details fetched successfully",
    });
  } catch (error) {
    console.error("GetAllActiveProducts: ", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { GetAllActiveProducts };
