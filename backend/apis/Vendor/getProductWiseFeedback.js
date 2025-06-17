const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function GetProductWiseFeedback(req, res) {
  try {
    const db = await connectDB();
    const feedbackCollection = db.collection("productFeedback");

    const { p_id } = req.body;

    if (!p_id) {
      return res
        .status(400)
        .json({ success: false, message: "Missing  Required Fields" });
    }

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }
    const vendor_id = user.session._id;

    const feedbacks = await feedbackCollection
      .aggregate([
        {
          $match: {
            vendor_id: ObjectId.createFromHexString(vendor_id),
            p_id: ObjectId.createFromHexString(p_id),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userInfo",
          },
        },
        { $unwind: "$userInfo" },
        {
          $project: {
            _id: 1,
            rating: 1,
            comment: 1,
            datetime: 1,
            userName: "$userInfo.name",
            userPhone: "$userInfo.phone",
          },
        },
        { $sort: { datetime: -1 } },
      ])
      .toArray();

    if (feedbacks.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No feedback found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Feedback fetched", data: feedbacks });
  } catch (error) {
    console.error("GetProductWiseFeedback.js: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { GetProductWiseFeedback };
