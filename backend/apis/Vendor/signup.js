const { ObjectId } = require("mongodb");
const connectDB = require("../../db/dbConnect");

async function VendorSignup(req, res) {
  try {
    const db = await connectDB();
    const vendorCollection = db.collection("vendors");

    const { name, email, phone, address, password } = req.body;
    const idProof = req.files["idProof"][0].filename;

    // Check if required fields are present
    if (!name || !email || !phone || !address || !password || !idProof) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    // Check if user already exists
    const userExist = await vendorCollection.findOne({
      $or: [{ phone }, { email }], // Check if either phone or email exists
    });

    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "phone or email already exists",
      });
    }

    // Insert user details
    await vendorCollection.insertOne({
      name,
      email,
      phone,
      address,
      password,
      idProof,
      status: "active",
    });

    return res
      .status(200)
      .json({ success: true, message: "Signed up Successfully" });
  } catch (error) {
    console.error("VendorSignup.js: ", error);
    return res.status(500).json({ success: false, error: "Signup Failed" });
  }
}

module.exports = { VendorSignup };
