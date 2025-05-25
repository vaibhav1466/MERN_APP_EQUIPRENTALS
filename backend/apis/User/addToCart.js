const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function AddToCart(req, res) {
  try {
    const db = await connectDB();
    const cartCollection = db.collection("cart");
    const productCollection = db.collection("products");

    const { p_id, p_qty, vendor_id } = req.body;

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const user_id = user.session._id;
    // Check if required fields are present
    if (!p_id || !p_qty) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Fetch product details from products collection
    const product = await productCollection.findOne({
      _id: ObjectId.createFromHexString(p_id),
    });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const productPrice = product.p_price;
    const productDeposit = product.deposit || 0; // Get deposit amount, default to 0 if not set
    const totalAmount = productPrice * parseInt(p_qty); // Calculate total price
    const totalDeposit = productDeposit * parseInt(p_qty); // Calculate total deposit based on quantity

    // Check if the product already exists in the cart for the same user
    const existingCartItem = await cartCollection.findOne({
      user_id: ObjectId.createFromHexString(user_id),
      p_id: ObjectId.createFromHexString(p_id),
      cart_status: "0",
    });

    if (existingCartItem) {
      // If the product already exists, update the quantity, total amount, and deposit
      const updatedCart = await cartCollection.updateOne(
        {
          _id: existingCartItem._id,
          user_id: ObjectId.createFromHexString(user_id),
          p_id: ObjectId.createFromHexString(p_id),
        },
        {
          $set: {
            total_amount: parseFloat(totalAmount),
            p_qty: parseInt(p_qty),
            deposit: parseFloat(totalDeposit), // Update deposit based on new quantity
          },
        }
      );

      return res
        .status(200)
        .json({ success: true, message: "Cart item updated successfully" });
    } else {
      // Insert a new cart item with deposit information
      const result = await cartCollection.insertOne({
        booking_id: null,
        user_id: ObjectId.createFromHexString(user_id),
        vendor_id: ObjectId.createFromHexString(vendor_id),
        p_id: ObjectId.createFromHexString(p_id),
        total_amount: parseFloat(totalAmount),
        p_qty: parseInt(p_qty),
        deposit: parseFloat(totalDeposit), // Include deposit in the new cart item
        cart_status: "0",
      });

      if (!result.acknowledged) {
        return res
          .status(500)
          .json({ success: false, message: "Failed to add to cart" });
      }

      return res
        .status(201)
        .json({ success: true, message: "Product added to cart successfully" });
    }
  } catch (error) {
    console.error("AddToCart.js: ", error);
    return res
      .status(500)
      .json({ success: false, error: "Something went wrong" });
  }
}

module.exports = { AddToCart };
