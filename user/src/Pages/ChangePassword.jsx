import React, { useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function ChangePassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState({
    email: location.state,
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await axios.post("https://equiprentals-backend.onrender.com/user/changePassword", data);
      toast.success("Password Reset Successfully!!", {
        onClose: () => navigate("/login"),
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
                  <h1 data-aos="fade-up">Reset Password</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Reset Password</li>
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
                      New Password
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form_control"
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                      value={data.newPassword}
                      onChange={(e) =>
                        setData({ ...data, newPassword: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form_group">
                    <label>
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form_control"
                      name="confirmPassword"
                      value={data.confirmPassword}
                      placeholder="Confirm Password"
                      onChange={(e) =>
                        setData({ ...data, confirmPassword: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form_group">
                    <button type="submit" className="main-btn">
                      Change Password
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

export default ChangePassword;
