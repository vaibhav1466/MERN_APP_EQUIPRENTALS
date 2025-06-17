import React, { useState } from "react";
import Footer from "../../Common/Footer";
import OTPInput from "react-otp-input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../Common/Header";
import axios from "axios";
import { toast } from "react-toastify";

function VendorVerifyOTP() {
  const location = useLocation();
  const Email = location.state;
  const [Email_OTP, setEmail_OTP] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://equiprentals-backend.onrender.com/verifyOtp", {
        email: Email,
        otp: Email_OTP,
      });
      toast.success("OTP Verified Successfully!!", {
        onClose: () => navigate("/vendor/resetPassword", { state: Email }),
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Header />
      <section className="hero-area">
        <div
          className="breadcrumbs-area bg_cover"
          style={{
            backgroundImage: "url(assets/images/bg/breadcrumbs-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="page-title text-center">
                  <h1 data-aos="fade-up">Forgot Password</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Forgot Password</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="user-area-section pt-120 pb-130" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-">
              <div className="user-form">
                <form onSubmit={handleSubmit}>
                  <div className="form_group mb-5">
                    <label>
                      OTP Sent on your email.
                      <span className="text-danger">*</span>
                    </label>
                    <OTPInput
                      id="otp-input"
                      className="form-control"
                      value={Email_OTP}
                      inputType="text"
                      onChange={setEmail_OTP}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      inputStyle={{
                        borderRadius: "8px",
                        fontWeight: "400",
                        outline: "none",
                        width: "50px",
                        padding: "12px",
                        border: "1px solid black", // Updated to black border
                        lineHeight: "1",
                      }}
                      renderInput={(props) => <input {...props} />}
                    />
                  </div>

                  <div className="form_group">
                    <button type="submit" className="main-btn">
                      Verify OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="back-to-top">
        <i className="fas fa-angle-up" />
      </div>
    </>
  );
}

export default VendorVerifyOTP;
