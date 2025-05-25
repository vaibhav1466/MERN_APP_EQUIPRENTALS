const express = require("express");
const cors = require("cors");
const session = require("express-session");
const connectDB = require("./db/dbConnect");
const { UserLogin } = require("./apis/User/login");
const { AdminLogin } = require("./apis/Admin/login");
const { upload, productUpload } = require("./multer/multer");
const { UserSignup } = require("./apis/User/signup");
const { VendorSignup } = require("./apis/Vendor/signup");
const { VendorLogin } = require("./apis/Vendor/login");
const { AddCategory } = require("./apis/Admin/addCategory");
const { GetCategory } = require("./apis/getCategory");
const { AddProduct } = require("./apis/Vendor/addProduct");
const { GetActiveProducts } = require("./apis/getActiveProduct");
const { GetSingleProduct } = require("./apis/getSingleProduct");
const {
  GetCategoriesWithProducts,
} = require("./apis/getCategoriesWithProducts");
const { GetUsers } = require("./apis/Admin/getUsers");
const { GetVendors } = require("./apis/Admin/getVendors");
const { GetFeedbacks } = require("./apis/Admin/getFeedback");
const { AddFeedback } = require("./apis/User/addFeedback");
const { GetBookings } = require("./apis/Admin/getBookings");
const Logout = require("./apis/logout");
const Session = require("./apis/session");
const { GetCategoryWiseProducts } = require("./apis/getCategoryWiseProducts");
const { AddToCart } = require("./apis/User/addToCart");
const { GetCartItems } = require("./apis/User/getCartItems");
const { RemoveCartItem } = require("./apis/User/removeCartItem");
const { GenOrderId } = require("./apis/User/genOrderId");
const { BookProduct } = require("./apis/User/bookProducts");
const {
  GetBookingHistoryWithProducts,
} = require("./apis/User/getBookingHistory");
const {
  GetVendorBookingHistory,
} = require("./apis/Vendor/getVendorBookingHistory");
const { getPaymentHistory } = require("./apis/User/getPaymentHistory");
const {
  getVendorPaymentHistory,
} = require("./apis/Vendor/getVendorPaymentHistory");
const { UpdateUserProfile } = require("./apis/User/updateUserProfile");
const { GetVendorActiveProducts } = require("./apis/Vendor/getVendorProducts");
const { EditProduct } = require("./apis/Vendor/editProduct");
const { DeleteProduct } = require("./apis/Vendor/deleteProduct");
const { UpdateVendorProfile } = require("./apis/Vendor/updateVendorProfile");
const { AddReturnComments } = require("./apis/Vendor/addReturnComment");
const { AddProductFeedback } = require("./apis/User/addProductFeedback");
const {
  GetProductWiseFeedback,
} = require("./apis/Vendor/getProductWiseFeedback");
const { verifyOTP } = require("./apis/verifyOtp");
const { sendUserOTP } = require("./apis/User/userSendOTP");
const { changeUserPassword } = require("./apis/User/changeUserPassword");
const { sendVendorOTP } = require("./apis/Vendor/sendVendorOTP");
const { changeVendorPassword } = require("./apis/Vendor/changeVendorPassword");
const { GetAllActiveProducts } = require("./apis/Admin/getProducts");
const { GetAllPayments } = require("./apis/Admin/getAllPayments");
const { GetAllFeedback } = require("./apis/Admin/getAllFeedback");
const { GetAllBookingHistory } = require("./apis/Admin/getAllBookingHistory");
const {
  GetProductWiseFeedbackAdmin,
} = require("./apis/Admin/getProductWiseFeedbackAdmin");
const { GetDashboardCounts } = require("./apis/Admin/getDashboardCounts");
const { UpdateUserStatus } = require("./apis/Admin/updateUserStatus");
const { UpdateVendorStatus } = require("./apis/Admin/updateVendorStatus");
const { sendAdminOTP } = require("./apis/Admin/userAdminOTP");
const { changeAdminPassword } = require("./apis/Admin/changeAdminPassword");
const { EditCategory } = require("./apis/Admin/editCategory");
const { DeleteCategory } = require("./apis/Admin/deleteCategory");
const { DeleteProductAdmin } = require("./apis/Admin/deleteProductAdmin");
const { DeleteFeedback } = require("./apis/Admin/DeleteFeedback");
const { CancelBooking } = require("./apis/User/cancelbooking");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003"],
    credentials: true,  
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

connectDB();

app.use("/images/products", express.static("images/products"));
app.use("/images/idProofs", express.static("images/idProofs"));

//!COMMON APIs
app.get("/logout", Logout);
app.get("/session", Session);
app.get("/getcategories", GetCategory);
app.get("/getproducts", GetActiveProducts);
app.post("/getSingleProducts", GetSingleProduct);
app.get("/getCategoriesWithProducts", GetCategoriesWithProducts);
app.get("/getCategoriesWiseProducts", GetCategoryWiseProducts);
app.post("/verifyOtp", verifyOTP);

//!USER APIs
app.post(
  "/user/signup",
  upload.fields([{ name: "idProof", maxCount: 1 }]),
  UserSignup
);
app.post("/user/updateProfile", UpdateUserProfile);
app.post("/user/login", UserLogin);
app.post("/user/addtocart", AddToCart);
app.get("/user/getCartItems", GetCartItems);
app.post("/user/removeCartItem", RemoveCartItem);
app.post("/user/addFeedback", AddFeedback);
app.post("/user/addProductFeedback", AddProductFeedback);
app.post("/user/generateOrderId", GenOrderId);
app.post("/user/bookProducts", BookProduct);
app.get("/user/getBookingHistory", GetBookingHistoryWithProducts);
app.get("/user/getPaymentHistory", getPaymentHistory);
app.post("/user/sendOtp", sendUserOTP);
app.post("/user/changePassword", changeUserPassword);
app.post("/user/cancelbooking", CancelBooking);


//!SERVICE PROVIDER APIs
app.post("/vendor/login", VendorLogin);
app.post(
  "/vendor/signup",
  upload.fields([{ name: "idProof", maxCount: 1 }]),
  VendorSignup
);
app.post("/vendor/updateProfile", UpdateVendorProfile);
app.post("/vendor/addProducts", productUpload.array("p_imgs", 3), AddProduct);
app.post("/vendor/editProduct", productUpload.array("p_imgs", 3), EditProduct);
app.post("/vendor/deleteProduct", DeleteProduct);
app.post("/vendor/addReturnComment", AddReturnComments);
app.post("/vendor/getProductWiseFeedback", GetProductWiseFeedback);
app.get("/vendor/getVendorProducts", GetVendorActiveProducts);
app.get("/vendor/getVendorBookingHistory", GetVendorBookingHistory);
app.get("/vendor/getVendorPaymentHistory", getVendorPaymentHistory);
app.post("/vendor/sendOtp", sendVendorOTP);
app.post("/vendor/changePassword", changeVendorPassword);

//!ADMIN APIs
app.post("/admin/login", AdminLogin);
app.post("/admin/addcategory", AddCategory);
app.post("/admin/editcategory", EditCategory);
app.post("/admin/deletecategory", DeleteCategory);
app.get("/admin/getUsers", GetUsers);
app.get("/admin/getVendors", GetVendors);
app.get("/admin/getFeedbacks", GetFeedbacks);
app.get("/admin/getBookings", GetBookings);
app.get("/admin/getAllProducts", GetAllActiveProducts);
app.get("/admin/getAllPayments", GetAllPayments);
app.get("/admin/getAllFeedback", GetAllFeedback);
app.get("/admin/getAllBookings", GetAllBookingHistory);
app.post("/admin/getProductFeedback", GetProductWiseFeedbackAdmin);
app.get("/admin/getDashboardCounts", GetDashboardCounts);
app.post("/admin/updateUserStatus", UpdateUserStatus);
app.post("/admin/updateVendorStatus", UpdateVendorStatus);
app.post("/admin/sendOtp", sendAdminOTP);
app.post("/admin/changePassword", changeAdminPassword);
app.post("/admin/deleteProduct", DeleteProductAdmin);
app.post("/admin/deletefeedback", DeleteFeedback);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!`));
