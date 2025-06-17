const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function GetProductWiseFeedbackAdmin(req, res) {
  try {
    const db = await connectDB();
    const feedbackCollection = db.collection("productFeedback");

    const { p_id } = req.body;

    if (!p_id) {
      return res
        .status(400)
        .json({ success: false, message: "Missing Required Fields" });
    }

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const feedbacks = await feedbackCollection
      .aggregate([
        {
          $match: {
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
          $lookup: {
            from: "products",
            localField: "p_id",
            foreignField: "_id",
            as: "productInfo",
          },
        },
        { $unwind: "$productInfo" },
        {
          $lookup: {
            from: "vendors",
            localField: "productInfo.vendor_id",
            foreignField: "_id",
            as: "vendorInfo",
          },
        },
        {
          $unwind: {
            path: "$vendorInfo",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: 1,
            rating: 1,
            comment: 1,
            datetime: 1,
            userName: "$userInfo.name",
            userPhone: "$userInfo.phone",
            vendorName: { $ifNull: ["$vendorInfo.name", null] },
            vendorPhone: { $ifNull: ["$vendorInfo.phone", null] },
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

    return res.status(200).json({
      success: true,
      message: "Feedback with vendor details fetched successfully",
      data: feedbacks,
    });
  } catch (error) {
    console.error("GetProductWiseFeedbackAdmin.js: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { GetProductWiseFeedbackAdmin };
