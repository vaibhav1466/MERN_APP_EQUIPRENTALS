const connectDB = require("../../db/dbConnect");

async function AdminLogin(req, res) {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Email and password required" });
        }

        const db = await connectDB();
        const collection = db.collection("admin");
        const user = await collection.findOne({ email, password });

        if (!user) {
            return res
                .status(401)
                .json({ success: false, message: "Invalid email or password" });
        }

        if (user.status === "inactive") {
            return res
                .status(401)
                .json({ success: false, message: "Your account is inactive" });
        }

        //session creation
        req.session.user = { session: user, isAuth: true };
        const userData = req.session.user;

        res.status(200).json({
            userData,
            role: "admin",
            success: true,
            message: "Login Successful",
        });
    } catch (error) {
        console.log("Adminlogin.js: ", error);
        res.status(500).json({ success: false, message: "AdminLogin Failed" });
    }
}

module.exports = { AdminLogin };