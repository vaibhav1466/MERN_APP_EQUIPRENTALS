const connectDB = require("../../db/dbConnect");

async function GetUsers(req, res) {

    try {
        const db = await connectDB();
        const collection = db.collection("users");

        const user = req.session.user;
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized User!" });
        }

        const users = await collection.find({}, { projection: { password: 0 } }).toArray();

        if (users.length === 0) {
            return res
                .status(400)
                .json({ success: false, message: "Users not found" });
        }

        res.status(200).json({
            users,
            success: true,
            message: "Users fetched successfully",
        });

    } catch (error) {
        console.log("GetUsers.js: ", error);
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
}

module.exports = { GetUsers };
