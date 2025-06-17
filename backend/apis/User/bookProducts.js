const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");
const crypto = require("crypto");

async function BookProduct(req, res) {
  let session = null;
  try {
    const { total_amount, payment_mode, start_date, end_date, deposit_amount } =
      req.body;

    if (
      !total_amount ||
      !payment_mode ||
      !start_date ||
      !end_date ||
      !deposit_amount
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!" });
    }

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const user_id = user.session._id;
    const bookingDate = new Date();
    const transaction_id = crypto.randomBytes(5).toString("hex");

    const db = await connectDB();
    const bookingCollection = db.collection("booking");
    const paymentCollection = db.collection("payment");
    const cartCollection = db.collection("cart");
    const productCollection = db.collection("products"); // 🔥 Add product collection

    session = db.client.startSession();
    session.startTransaction();

    const bookingData = {
      user_id: ObjectId.createFromHexString(user_id),
      start_date: new Date(start_date),
      end_date: new Date(end_date),
      booking_date: bookingDate,
      total_amount: parseFloat(total_amount),
      deposit_amount: parseFloat(deposit_amount),
      payment_mode,
      status: "success",
      returnComment: null,
    };

    const bookingResult = await bookingCollection.insertOne(bookingData, {
      session,
    });
    if (!bookingResult.acknowledged) {
      throw new Error("Booking Failed!");
    }

    const paymentData = {
      booking_id: bookingResult.insertedId,
      user_id: ObjectId.createFromHexString(user_id),
      amount: parseFloat(total_amount),
      transaction_id,
      payment_status: "success",
      datetime: new Date(),
    };

    const paymentResult = await paymentCollection.insertOne(paymentData, {
      session,
    });
    if (!paymentResult.acknowledged) {
      throw new Error("Payment Failed!");
    }

    // 🔥 Fetch all cart items to know which products to update
    const cartItems = await cartCollection
      .find({
        user_id: ObjectId.createFromHexString(user_id),
        cart_status: "0",
      })
      .toArray();

    for (const item of cartItems) {
      const productId = item.p_id; // Ensure this field exists in your cart schema
      const itemQty = item.p_qty || 1;

      // 🔥 Decrease quantity from the product
      const productUpdate = await productCollection.updateOne(
        { _id: productId, p_qty: { $gte: itemQty } },
        { $inc: { p_qty: -itemQty } },
        { session }
      );

      if (!productUpdate.matchedCount) {
        throw new Error(
          `Product ${productId} is out of stock or doesn't have enough quantity`
        );
      }
    }

    // 🔥 Update cart items
    const cartUpdateResult = await cartCollection.updateMany(
      { user_id: ObjectId.createFromHexString(user_id), cart_status: "0" },
      { $set: { booking_id: bookingResult.insertedId, cart_status: "1" } },
      { session }
    );

    if (!cartUpdateResult.acknowledged) {
      throw new Error("Cart update failed!");
    }

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      success: true,
      message: "Order booked successfully!",
      booking_id: bookingResult.insertedId,
      payment_id: paymentResult.insertedId,
    });
  } catch (error) {
    if (session) {
      await session.abortTransaction();
      session.endSession();
    }
    console.error("BookProduct API Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}

module.exports = { BookProduct };
