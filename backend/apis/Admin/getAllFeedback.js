const connectDB = require("../../db/dbConnect");

async function GetAllFeedback(req, res) {
  try {
    const db = await connectDB();
    const feedbackCollection = db.collection("feedback");

    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const feedbacks = await feedbackCollection
      .aggregate([
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "userDetails",
          },
        },
        {
          $unwind: {
            path: "$userDetails",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            rating: 1,
            comment: 1,
            datetime: 1,
            userName: { $ifNull: ["$userDetails.name", null] },
            userPhone: { $ifNull: ["$userDetails.phone", null] },
          },
        },
        { $sort: { datetime: -1 } },
      ])
      .toArray();

    if (feedbacks.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No feedback records found" });
    }

    res.status(200).json({
      success: true,
      feedbacks,
      message: "All feedback data with user details fetched successfully",
    });
  } catch (error) {
    console.error("GetAllFeedback: ", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { GetAllFeedback };
