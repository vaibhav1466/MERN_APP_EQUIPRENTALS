const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function DeleteProduct(req, res) {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");

    const { product_id } = req.body;
    const user = req.session.user;

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized access!" });
    }

    const vendor_id = user.session._id;

    if (!ObjectId.isValid(vendor_id) || !ObjectId.isValid(product_id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid vendor or product ID" });
    }

    // Update product status only if product belongs to the vendor
    const result = await productCollection.updateOne(
      {
        _id: ObjectId.createFromHexString(product_id),
        vendor_id: ObjectId.createFromHexString(vendor_id),
      },
      {
        $set: { p_status: "deleted" },
      }
    );

    if (result.modifiedCount > 0) {
      return res.status(200).json({
        success: true,
        message: `Product deleted successfully!`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Product not found or unauthorized access",
      });
    }
  } catch (error) {
    console.error("DeleteProduct API Error: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { DeleteProduct };
