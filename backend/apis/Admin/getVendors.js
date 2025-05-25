const connectDB = require("../../db/dbConnect");
const { ObjectId } = require("mongodb");

async function GetVendors(req, res) {
  try {
    const db = await connectDB();
    const vendorsCollection = db.collection("vendors");
    const productsCollection = db.collection("products");

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const vendors = await vendorsCollection
      .find({}, { projection: { password: 0 } })
      .toArray();

    if (vendors.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Vendors not found" });
    }

    // Add product count for each vendor
    const vendorsWithProductCount = await Promise.all(
      vendors.map(async (vendor) => {
        const productCount = await productsCollection.countDocuments({
          vendor_id: new ObjectId(vendor._id),
          p_status: "active",
        });
        return { ...vendor, productCount };
      })
    );

    res.status(200).json({
      vendors: vendorsWithProductCount,
      success: true,
      message: "Vendors fetched successfully with product counts",
    });
  } catch (error) {
    console.log("GetVendors.js: ", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { GetVendors };
