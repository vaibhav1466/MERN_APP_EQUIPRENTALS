import { ToastContainer } from "react-toastify";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import EquipmentList from "./Pages/EquipmentList";
import EquipmentDetails from "./Pages/EquipmentDetails";
import Shop from "./Pages/Shop";
import ShopDetails from "./Pages/ShopDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Categories from "./Pages/Categories";
import Contact from "./Pages/Contact";
import Faqs from "./Pages/Faqs";
import Error404 from "./Pages/404";
import ComingSoon from "./Pages/ComingSoon";
import { useEffect, useState } from "react";
import axios from "axios";
import checkSession from "./auth/authService";
import BookingHistory from "./Pages/BookingHistory";
import ViewPaymentHistory from "./Pages/ViewPaymentHistory";
import Profile from "./Pages/Profile";
import VendorSignup from "./Pages/vendor/Signup";
import VendorLogin from "./Pages/vendor/Login";
import AddProduct from "./Pages/vendor/AddProduct";
import ViewProducts from "./Pages/vendor/ViewProducts";
import EditProduct from "./Pages/vendor/EditProduct";
import VendorUpdateProfile from "./Pages/vendor/UpdateProfile";
import ViewBookingHistory from "./Pages/vendor/ViewBookingHistory";
import ViewVendorPaymentHistory from "./Pages/vendor/ViewPaymentHistory";
import GetProductFeedback from "./Pages/vendor/GetProductFeedback";
import ForgetPassword from "./Pages/ForgetPassword";
import VerifyOTP from "./Pages/VerifyOTP";
import ChangePassword from "./Pages/ChangePassword";
import VendorForgetPassword from "./Pages/vendor/VendorForgetPassword";
import VendorVerifyOTP from "./Pages/vendor/VendorVerifyOTP";
import VendorChangePassword from "./Pages/vendor/VendorChangePassword";
import OurTeam from "./Pages/OurTeam";
import Privacyandpolicy from "./Pages/PrivacyPolicy";
import Blogs from "./Pages/Blogs";
import Blogdetails4, { Blogdetails2, Blogdetails3 } from "./Pages/Blogdetails";
import Blogdetails from "./Pages/Blogdetails";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state
  axios.defaults.withCredentials = true;
  const role = localStorage.getItem("role");

  //for checking session
  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const checkAuth = await checkSession();
        if (checkAuth.isAuth) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false after authentication check
      }
    };
    if (!isAuthenticated) {
      authenticateUser(); // Check session only if user is not authenticated
    } else {
      setLoading(false); // Set loading to false immediately if user is authenticated
    }
  }, [isAuthenticated]);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <div className="lds-ellipsis">
            <span />
            <span />
            <span />
          </div>
        </div>
      ) : (
        <>
          <ToastContainer stacked={true} autoClose={1000} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!isAuthenticated ? <Signup /> : <Navigate to="/" />}
              />
              <Route
                path="/forgotPassword"
                element={
                  !isAuthenticated ? <ForgetPassword /> : <Navigate to="/" />
                }
              />
              <Route
                path="/verifyOTP"
                element={!isAuthenticated ? <VerifyOTP /> : <Navigate to="/" />}
              />
              <Route
                path="/resetPassword"
                element={
                  !isAuthenticated ? <ChangePassword /> : <Navigate to="/" />
                }
              />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shopDetails" element={<ShopDetails />} />
              <Route path="/products" element={<EquipmentList />} />
              <Route path="/products/:id" element={<EquipmentList />} />
              <Route path="/productsDetails" element={<EquipmentDetails />} />
              <Route
                path="/profile"
                element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
              />
              <Route
                path="/cart"
                element={isAuthenticated ? <Cart /> : <Navigate to="/" />}
              />
              <Route
                path="/bookings"
                element={
                  isAuthenticated ? <BookingHistory /> : <Navigate to="/" />
                }
              />
              <Route
                path="/paymentHistory"
                element={
                  isAuthenticated ? <ViewPaymentHistory /> : <Navigate to="/" />
                }
              />
              <Route
                path="/checkout"
                element={isAuthenticated ? <Checkout /> : <Navigate to="/" />}
              />
              <Route path="/categories" element={<Categories />} />
              <Route path="/ourTeam" element={<OurTeam />} />
              <Route path="/privacyandpolicy" element={<Privacyandpolicy />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/Blogdetails" element={<Blogdetails />} />
              
              <Route path="/Blogdetails2" element={<Blogdetails2 />} />
              <Route path="/Blogdetails3" element={<Blogdetails3 />} />
              <Route path="/Blogdetails4" element={<Blogdetails4 />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/error404" element={<Error404 />} />
              <Route path="/comingSoon" element={<ComingSoon />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error404 />} />

              {/* //! Vendor Routes */}
              <Route
                path="/vendor/login"
                element={
                  !isAuthenticated ? <VendorLogin /> : <Navigate to="/" />
                }
              />
              <Route
                path="/vendor/signup"
                element={
                  !isAuthenticated ? <VendorSignup /> : <Navigate to="/" />
                }
              />
              <Route
                path="/vendor/forgotPassword"
                element={
                  !isAuthenticated ? (
                    <VendorForgetPassword />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/vendor/verifyOTP"
                element={
                  !isAuthenticated ? <VendorVerifyOTP /> : <Navigate to="/" />
                }
              />
              <Route
                path="/vendor/resetPassword"
                element={
                  !isAuthenticated ? (
                    <VendorChangePassword />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/vendor/addProduct"
                element={
                  isAuthenticated && role && role === "vendor" ? (
                    <AddProduct />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/vendor/editProduct"
                element={
                  isAuthenticated && role && role === "vendor" ? (
                    <EditProduct />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/vendor/products"
                element={
                  isAuthenticated && role && role === "vendor" ? (
                    <ViewProducts />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/vendor/productsFeedback"
                element={
                  isAuthenticated && role && role === "vendor" ? (
                    <GetProductFeedback />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/vendor/bookings"
                element={
                  isAuthenticated && role && role === "vendor" ? (
                    <ViewBookingHistory />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/vendor/paymentHistory"
                element={
                  isAuthenticated && role && role === "vendor" ? (
                    <ViewVendorPaymentHistory />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/vendor/profile"
                element={
                  isAuthenticated && role && role === "vendor" ? (
                    <VendorUpdateProfile />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
