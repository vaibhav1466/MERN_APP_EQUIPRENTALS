const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function EditProduct(req, res) {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");

    const { product_id, cat_id, p_name, p_price, p_desc, deposit } = req.body;
    const newImages =
      req.files.length > 0 ? req.files.map((file) => file.filename) : null;

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

    // Fetch existing product
    const existingProduct = await productCollection.findOne({
      _id: ObjectId.createFromHexString(product_id),
      vendor_id: ObjectId.createFromHexString(vendor_id),
    });

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found or unauthorized access",
      });
    }

    const updatedProduct = {
      cat_id: cat_id
        ? ObjectId.createFromHexString(cat_id)
        : existingProduct.cat_id,
      p_name: p_name || existingProduct.p_name,
      p_price: p_price ? parseFloat(p_price) : existingProduct.p_price,
      p_desc: p_desc || existingProduct.p_desc,
      p_imgs: newImages || existingProduct.p_imgs,
      deposit: deposit ? parseFloat(deposit) : existingProduct.deposit,
    };

    const result = await productCollection.updateOne(
      { _id: ObjectId.createFromHexString(product_id) },
      { $set: updatedProduct }
    );

    if (result.modifiedCount > 0) {
      return res.status(200).json({
        success: true,
        message: "Product updated successfully!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "No changes were made, product data is already up to date.",
      });
    }
  } catch (error) {
    console.error("EditProduct API Error: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { EditProduct };
