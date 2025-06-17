const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function AddProductFeedback(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("productFeedback");

    const { cart_id, booking_id, p_id, vendor_id, rating, comment } = req.body;

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const userId = user.session._id;

    if (!cart_id || !booking_id || !p_id || !vendor_id || !rating || !comment) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields!" });
    }

    const feedbackExist = await collection.findOne({
      cart_id: ObjectId.createFromHexString(cart_id),
      booking_id: ObjectId.createFromHexString(booking_id),
      p_id: ObjectId.createFromHexString(p_id),
      userId: ObjectId.createFromHexString(userId),
    });

    if (feedbackExist) {
      return res
        .status(400)
        .json({ success: false, message: "Feedback already exists!" });
    }

    await collection.insertOne({
      cart_id: ObjectId.createFromHexString(cart_id),
      booking_id: ObjectId.createFromHexString(booking_id),
      p_id: ObjectId.createFromHexString(p_id),
      vendor_id: ObjectId.createFromHexString(vendor_id),
      userId: ObjectId.createFromHexString(userId),
      rating: parseFloat(rating),
      comment,
      datetime: new Date(),
    });

    return res
      .status(200)
      .json({ success: true, message: "Feedback added Successful" });
  } catch (error) {
    console.error("AddProductFeedback.js: ", error);
    return res
      .status(500)
      .json({ success: false, error: "Something went wrong" });
  }
}

module.exports = { AddProductFeedback };
