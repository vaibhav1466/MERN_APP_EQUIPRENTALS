const connectDB = require("../../db/dbConnect");

async function UserSignup(req, res) {
    try {
        const db = await connectDB();
        const userCollection = db.collection("users");

        const { name, email, phone, address, password } = req.body;
        const idProof = req.files['idProof'][0].filename;

        // Check if required fields are present
        if (!name || !email || !phone || !address || !password || !idProof) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        // Check if user already exists
        const userExist = await userCollection.findOne({
            $or: [{ phone }, { email }] // Check if either phone or email exists
        });

        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "phone or email already exists"
            });
        }

        // Insert user details
        await userCollection.insertOne({
            name,
            email,
            phone,
            address,
            password,
            idProof,
            status: "active"
        });

        return res.status(200).json({ success: true, message: "Signed up Successfully" });
    } catch (error) {
        console.error("UserSignup.js: ", error);
        return res.status(500).json({ success: false, error: "Signup Failed" });
    }
}

module.exports = { UserSignup };