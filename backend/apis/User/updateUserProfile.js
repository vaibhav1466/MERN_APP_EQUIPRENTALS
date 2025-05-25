const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function UpdateUserProfile(req, res) {
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");

    const { name, email, phone, address, password } = req.body;

    // Ensure user is authenticated via session
    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const userId = user.session._id;

    // Validate ObjectId
    if (!ObjectId.isValid(userId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user ID" });
    }

    // Find existing user
    const existingUser = await userCollection.findOne({
      _id: ObjectId.createFromHexString(userId),
    });

    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Check if email or phone already exists for another user
    const userExist = await userCollection.findOne({
      $or: [{ email }, { phone }],
      _id: { $ne: ObjectId.createFromHexString(userId) }, // Exclude current user
    });

    if (userExist) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Phone or Email already exists for another user!",
        });
    }

    // Update user details, keeping old values if not provided
    const updatedUser = {
      name: name || existingUser.name,
      email: email || existingUser.email,
      phone: phone || existingUser.phone,
      address: address || existingUser.address,
      password: password || existingUser.password,
    };

    const result = await userCollection.updateOne(
      { _id: ObjectId.createFromHexString(userId) },
      { $set: updatedUser }
    );

    // Update session with new user data

    const updatedUserWithId = { ...updatedUser, _id: userId };
    req.session.user = { session: updatedUserWithId, isAuth: true };

    if (result.modifiedCount === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No changes were made" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.error("UpdateUserProfile API Error: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { UpdateUserProfile };
