import Home from "./pages/home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Managebooking from "./pages/managebooking";
import Managefeedback from "./pages/manageFeedback&Complaint";
import Managepayment from "./pages/managePayment";
import Manageproduct from "./pages/manageProduct";
import Manageuser from "./pages/manageUser";
import Managevendor from "./pages/manageVendor";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import checkSession from "./auth/authService";
import { ToastContainer } from "react-toastify";
import ViewProductFeedback from "./pages/ViewProductFeedback";
import ForgetPassword from "./pages/ForgetPassword";
import VerifyOTP from "./pages/verifyOTP";
import ResetPassword from "./pages/ResetPassword";
import ViewCategories from "./pages/ViewCategories";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state
  axios.defaults.withCredentials = true;

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
      authenticateUser();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  return (
    <>
      <ToastContainer stacked={true} autoClose={1000} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={!isAuthenticated ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="/forgetpassword"
              element={
                !isAuthenticated ? <ForgetPassword /> : <Navigate to={"/"} />
              }
            />
            <Route
              path="/verifyOTP"
              element={!isAuthenticated ? <VerifyOTP /> : <Navigate to={"/"} />}
            />
            <Route
              path="/resetPassword"
              element={
                !isAuthenticated ? <ResetPassword /> : <Navigate to={"/"} />
              }
            />
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/Managevendor"
              element={
                isAuthenticated ? <Managevendor /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/ViewCategory"
              element={
                isAuthenticated ? (
                  <ViewCategories />
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            />
            <Route
              path="/Manageuser"
              element={
                isAuthenticated ? <Manageuser /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/Manageproduct"
              element={
                isAuthenticated ? <Manageproduct /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/ViewProductFeedback"
              element={
                isAuthenticated ? (
                  <ViewProductFeedback />
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            />
            <Route
              path="/Managebooking"
              element={
                isAuthenticated ? <Managebooking /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/Managepayment"
              element={
                isAuthenticated ? <Managepayment /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/Managefeedback"
              element={
                isAuthenticated ? (
                  <Managefeedback />
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
