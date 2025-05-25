const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function RemoveCartItem(req, res) {
  try {
    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }
    const user_id = ObjectId.createFromHexString(user.session._id);

    const { p_id } = req.body;

    // Check if required fields are present
    if (!p_id) {
      return res
        .status(400)
        .json({ success: false, message: "Product ID are required" });
    }

    const db = await connectDB();
    const cartCollection = db.collection("cart");

    // Check if the product exists in the cart
    const cartItem = await cartCollection.findOne({
      user_id,
      p_id: ObjectId.createFromHexString(p_id),
    });

    if (!cartItem) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found in cart" });
    }

    // Delete the product from the cart
    const deleteResult = await cartCollection.deleteOne({
      user_id,
      p_id: ObjectId.createFromHexString(p_id),
      booking_id: null,
    });
    console.log(deleteResult);

    if (!deleteResult.deletedCount) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Failed to remove product from cart",
        });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "Product removed from cart successfully",
      });
  } catch (error) {
    console.error("RemoveCartItem.js: ", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to remove product from cart" });
  }
}

module.exports = { RemoveCartItem };
