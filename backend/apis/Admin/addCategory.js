const connectDB = require("../../db/dbConnect");

async function AddCategory(req, res) {
    try {
        const db = await connectDB();
        const categoryCollection = db.collection("category");
        const { cat_name } = req.body;

        if (!cat_name) {
            return res.status(400).json({ success: false, message: "All fields are required!" });
        }

        const existingCategory = await categoryCollection.findOne({ cat_name });

        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: "Same Category Already Exists!"
            });
        }

        const newCategory = {
            cat_name,
            status: "0"
        };

        const result = await categoryCollection.insertOne(newCategory);

        if (result.acknowledged) {
            return res.status(200).json({
                success: true,
                message: "Category Added Successfully!",
            });
        } else {
            throw new Error("Failed to add category");
        }

    } catch (error) {
        console.error("AddCategory API Error: ", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = { AddCategory };
