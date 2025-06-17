const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function AddReturnComments(req, res) {
  try {
    const db = await connectDB();
    const returnCommentCollection = db.collection("returnComments");
    const paymentsCollection = db.collection("payment");
    const bookingsCollection = db.collection("booking");
    const cartCollection = db.collection("cart");

    const { cart_id, booking_id, p_id, returnComments } = req.body;

    // Check if required fields are present
    if (!cart_id || !booking_id || !p_id || !returnComments) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }
    const vendor_id = user.session._id;

    // Get booking details
    const booking = await bookingsCollection.findOne({
      _id: ObjectId.createFromHexString(booking_id),
    });

    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    // Get cart item
    const cartItem = await cartCollection.findOne({
      _id: ObjectId.createFromHexString(cart_id),
      p_id: ObjectId.createFromHexString(p_id),
    });

    if (!cartItem) {
      return res
        .status(404)
        .json({ success: false, message: "Cart item not found" });
    }

    const depositAmount = cartItem.deposit || 0;

    // Insert return comments
    await returnCommentCollection.insertOne({
      cart_id: ObjectId.createFromHexString(cart_id),
      booking_id: ObjectId.createFromHexString(booking_id),
      p_id: ObjectId.createFromHexString(p_id),
      vendor_id: ObjectId.createFromHexString(vendor_id),
      returnComments,
      datetime: new Date(),
    });

    // Create payment record for refund
    await paymentsCollection.insertOne({
      booking_id: ObjectId.createFromHexString(booking_id),
      user_id: booking.user_id,
      amount: depositAmount,
      transaction_id: `REFUND-${Date.now()}-${Math.floor(
        Math.random() * 1000
      )}`,
      payment_status: "refund_initiated",
      payment_type: "deposit_refund",
      datetime: new Date(),
      vendor_id: ObjectId.createFromHexString(vendor_id),
      product_id: ObjectId.createFromHexString(p_id),
    });

    return res.status(200).json({
      success: true,
      message: "Return Comments Added and Refund Initiated Successfully",
    });
  } catch (error) {
    console.error("AddReturnComments.js: ", error);
    return res
      .status(500)
      .json({ success: false, error: "Something went wrong" });
  }
}

module.exports = { AddReturnComments };
