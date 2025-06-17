import React, { useState } from "react";
import Footer from "../Common/Footer";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import axios from "axios";
import { toast } from "react-toastify";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://equiprentals-backend.onrender.com/user/sendOtp", { email });
      toast.success("Email Sent Successfully!!", {
        onClose: () => navigate("/verifyOTP", { state: email }),
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "something went wrong!");
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
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="user-form">
                <form onSubmit={handleSubmit}>
                  <div className="form_group">
                    <label>
                      Email address
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form_control"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form_group">
                    <button type="submit" className="main-btn">
                      Send OTP
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

export default ForgetPassword;
