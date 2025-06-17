const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function AddProduct(req, res) {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");

    const { cat_id, p_name, p_price, p_desc, p_qty, deposit } = req.body;
    const p_imgs = req.files.map((files) => files.filename);

    const user = req.session.user;

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized access!" });
    }

    const vendor_id = user.session._id;

    if (!ObjectId.isValid(vendor_id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid vendor id" });
    }

    if (
      !cat_id ||
      !p_name ||
      !p_price ||
      !p_desc ||
      !p_imgs ||
      !p_qty ||
      !deposit
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!" });
    }

    if (req.files.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No images selected!" });
    }

    const existingProduct = await productCollection.findOne({
      p_name,
      p_status: "active",
    });

    if (existingProduct) {
      return res.status(400).json({
        success: false,
        message: "Same Service Already Exists!",
      });
    }

    if (!ObjectId.isValid(cat_id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid category id" });
    }

    const newProduct = {
      cat_id: ObjectId.createFromHexString(cat_id),
      vendor_id: ObjectId.createFromHexString(vendor_id),
      p_name,
      p_price: parseFloat(p_price),
      p_desc,
      p_imgs,
      p_qty: parseInt(p_qty),
      deposit: parseInt(deposit),
      p_status: "active",
    };

    const result = await productCollection.insertOne(newProduct);

    if (result.acknowledged) {
      return res.status(200).json({
        success: true,
        message: "Product Added Successfully!",
      });
    } else {
      throw new Error("Failed to add service");
    }
  } catch (error) {
    console.error("AddProduct API Error: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { AddProduct };
