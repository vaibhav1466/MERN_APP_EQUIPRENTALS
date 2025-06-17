const connectDB = require("../db/dbConnect");

async function GetCategoriesWithProducts(req, res) {
  try {
    const db = await connectDB();
    const categoryCollection = db.collection("category");
    const productCollection = db.collection("products");

    // Fetch all categories
    const categories = await categoryCollection.find().toArray();

    // If no categories found
    if (categories.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No categories found" });
    }

    // Prepare the final response structure
    const categoryWithProducts = await Promise.all(
      categories.map(async (category) => {
        // Fetch active products for this category
        const products = await productCollection
          .find({
            cat_id: category._id, // Match category ID
            p_status: "active", // Only active products
          })
          .toArray();

        return {
          category_id: category._id,
          category_name: category.cat_name,
          products: products.map((product) => ({
            product_id: product._id,
            p_name: product.p_name,
            p_price: product.p_price,
            p_desc: product.p_desc,
            p_imgs: product.p_imgs,
            p_qty: product.p_qty,
            deposit: product.deposit,
            vendor_id: product.vendor_id,
          })),
        };
      })
    );

    // Send response with structured data
    return res.status(200).json({
      success: true,
      message: "Categories with active products fetched successfully!",
      data: categoryWithProducts,
    });
  } catch (error) {
    console.error("GetCategoriesWithProducts API Error: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}

module.exports = { GetCategoriesWithProducts };
