const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function GetCartItems(req, res) {
  try {
    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }
    const user_id = ObjectId.createFromHexString(user.session._id);

    const db = await connectDB();
    const cartCollection = db.collection("cart");
    const productCollection = db.collection("products");

    // Fetch cart items for the user
    const cartItems = await cartCollection
      .find({ user_id, cart_status: "0" })
      .toArray();

    if (cartItems.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "Cart is empty", cart: [] });
    }

    // Fetch product details for each cart item along with vendor_id
    const cartDetails = await Promise.all(
      cartItems.map(async (cartItem) => {
        const product = await productCollection.findOne({ _id: cartItem.p_id });

        if (!product) return null;

        return {
          cart_id: cartItem._id,
          booking_id: cartItem.booking_id,
          user_id: cartItem.user_id,
          p_id: cartItem.p_id,
          vendor_id: product.vendor_id, // ✅ Added vendor_id
          p_name: product.p_name,
          p_image: product.p_image,
          p_price: product.p_price,
          p_qty: cartItem.p_qty,
          deposit: cartItem.deposit,
          total_amount: cartItem.total_amount,
          cart_status: cartItem.cart_status,
        };
      })
    );

    const filteredCartDetails = cartDetails.filter((item) => item !== null);

    return res.status(200).json({ success: true, cart: filteredCartDetails });
  } catch (error) {
    console.error("GetCartItems.js: ", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to fetch cart details" });
  }
}

module.exports = { GetCartItems };
