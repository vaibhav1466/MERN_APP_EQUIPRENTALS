const connectDB = require("../../db/dbConnect");

async function GetDashboardCounts(req, res) {
  try {
    const user = req.session.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized User!" });
    }

    const db = await connectDB();
    const usersCollection = db.collection("users");
    const vendorsCollection = db.collection("vendors");
    const productsCollection = db.collection("products");
    const bookingsCollection = db.collection("booking");

    // Count total users
    const totalUsers = await usersCollection.countDocuments();

    // Count total vendors
    const totalVendors = await vendorsCollection.countDocuments();

    // Count total active products
    const totalActiveProducts = await productsCollection.countDocuments({
      p_status: "active",
    });

    // Count total bookings
    const totalBookings = await bookingsCollection.countDocuments();

    return res.status(200).json({
      success: true,
      message: "Dashboard counts fetched successfully",
      data: {
        totalUsers,
        totalVendors,
        totalActiveProducts,
        totalBookings,
      },
    });
  } catch (error) {
    console.error("GetDashboardCounts.js: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
}

module.exports = { GetDashboardCounts };
