const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function CancelBooking(req, res) {
  try {
    const { bookingId } = req.body;
    const user = req.session.user;

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    if (!bookingId) {
      return res
        .status(400)
        .json({ success: false, message: "Booking ID is required!" });
    }

    const db = await connectDB();
    const bookingCollection = db.collection("booking");
    const paymentCollection = db.collection("payment");
    const cartCollection = db.collection("cart");
    const productCollection = db.collection("products");

    // Find the booking
    const booking = await bookingCollection.findOne({
      _id: ObjectId.createFromHexString(bookingId),
      user_id: ObjectId.createFromHexString(user.session._id),
      status: "success", // Only allow canceling active bookings
    });

    if (!booking) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Booking not found or already canceled!",
        });
    }

    // Check if current time is more than 24 hours before start date
    const now = new Date();
    const startDate = new Date(booking.start_date);
    const hoursDifference = (startDate - now) / (1000 * 60 * 60);

    if (hoursDifference <= 24) {
      return res.status(400).json({
        success: false,
        message: "Cannot cancel booking within 24 hours of start time!",
      });
    }

    // Start transaction
    const session = db.client.startSession();
    session.startTransaction();

    try {
      // 1. Update booking status
      const updateBooking = await bookingCollection.updateOne(
        { _id: ObjectId.createFromHexString(bookingId) },
        { $set: { status: "canceled" } },
        { session }
      );

      if (updateBooking.modifiedCount === 0) {
        throw new Error("Failed to update booking status");
      }

      // 2. Update payment status to "refunded"
      const updatePayment = await paymentCollection.updateOne(
        { booking_id: ObjectId.createFromHexString(bookingId) },
        { $set: { payment_status: "refunded" } },
        { session }
      );

      // 3. Get all cart items for this booking
      const cartItems = await cartCollection
        .find({
          booking_id: ObjectId.createFromHexString(bookingId),
        })
        .toArray();

      // 4. Restore product quantities
      for (const item of cartItems) {
        await productCollection.updateOne(
          { _id: item.p_id },
          { $inc: { p_qty: item.p_qty || 1 } },
          { session }
        );
      }

      // 5. Update cart status
      await cartCollection.updateMany(
        { booking_id: ObjectId.createFromHexString(bookingId) },
        { $set: { cart_status: "canceled" } },
        { session }
      );

      await session.commitTransaction();
      session.endSession();

      return res.status(200).json({
        success: true,
        message: "Booking canceled successfully! Refund will be processed.",
      });
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  } catch (error) {
    console.error("CancelBooking API Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}

module.exports = { CancelBooking };
