import React, { useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://equiprentals-backend.onrender.com/user/login", data);
      localStorage.setItem("role", "user");
      toast.success("Login Successfully!!", {
        autoClose: 1000,
        onClose: () => window.location.reload(),
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1000,
      });
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
                  <h1 data-aos="fade-up">User Login</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Login</li>
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
                      value={data.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form_group" style={{ position: "relative" }}>
                    <label>
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex align-items-center">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form_control"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        style={{ paddingRight: "40px" }}
                        required
                      />
                      <i
                        className={`fa ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          top: "54%",
                          right: "15px",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          color: "#999",
                        }}
                      ></i>
                    </div>
                  </div>
                  <div className="form_group">
                    <button type="submit" className="main-btn">
                      LOG IN
                    </button>
                    <Link to={"/forgotPassword"}>Lost your password?</Link>
                    <p className="text-center mt-20">
                      Did not have an account?{" "}
                      <strong>
                        <Link to="/signup">Sign Up</Link>
                      </strong>
                    </p>
                    <p className="text-center mt-20">
                      <strong>
                        <Link to="/vendor/signup"> Register as a vendor </Link>
                      </strong>
                    </p>
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

export default Login;
