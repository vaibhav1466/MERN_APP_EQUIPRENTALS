import React, { useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    cpassword: "",
    idProof: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setData({
      ...data,
      idProof: e.target.files[0],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    if (!data.name.trim()) tempErrors.name = "Username is required";
    if (!data.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      tempErrors.email = "Email is invalid";

    if (!data.phone.trim()) tempErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(data.phone))
      tempErrors.phone = "Phone must be 10 digits";

    if (!data.address.trim()) tempErrors.address = "Address is required";
    if (!data.idProof) tempErrors.idProof = "ID Proof is required";

    if (!data.password) tempErrors.password = "Password is required";
    else if (!passwordRegex.test(data.password)) {
      tempErrors.password =
        "Password must have at least 1 uppercase letter, 1 number, 1 symbol, and be 6+ characters";
    }

    if (!data.cpassword) tempErrors.cpassword = "Confirm Password is required";
    else if (data.password !== data.cpassword)
      tempErrors.cpassword = "Passwords do not match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      await axios.post("https://equiprentals-backend.onrender.com/user/signup", formData);
      toast.success("Signup Successfully!!", {
        onClose: () => navigate("/login"),
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
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
                  <h1>User Signup</h1>
                  <ul className="breadcrumbs-link d-flex justify-content-center">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">Signup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="user-area-section pt-120 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="user-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Username */}
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label>
                          Username <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={data.name}
                          onChange={handleChange}
                          className="form_control mb-0 mb-0"
                          required
                        />
                        {errors.name && (
                          <small className="text-danger">{errors.name}</small>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label>
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                          className="form_control mb-0 mb-0"
                          required
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label>
                          Phone <span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={data.phone}
                          onChange={handleChange}
                          className="form_control mb-0 mb-0"
                          required
                        />
                        {errors.phone && (
                          <small className="text-danger">{errors.phone}</small>
                        )}
                      </div>
                    </div>

                    {/* Address */}
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label>
                          Address <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="address"
                          rows="3"
                          value={data.address}
                          onChange={handleChange}
                          className="form_control mb-0 mb-0"
                          required
                        />
                        {errors.address && (
                          <small className="text-danger">
                            {errors.address}
                          </small>
                        )}
                      </div>
                    </div>

                    {/* ID Proof */}
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label>
                          ID Proof <span className="text-danger">*</span>
                        </label>
                        <input
                          type="file"
                          name="idProof"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="form_control mb-0 mb-0"
                          required
                        />
                        {errors.idProof && (
                          <small className="text-danger">
                            {errors.idProof}
                          </small>
                        )}
                      </div>
                    </div>

                    {/* Password */}
                    <div className="col-lg-6">
                      <div
                        className="form_group"
                        style={{ position: "relative" }}
                      >
                        <label>
                          Password <span className="text-danger">*</span>
                        </label>
                        <div className="d-flex align-items-center position-relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            className="form_control mb-0"
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
                              top: "50%",
                              right: "15px",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                              color: "#999",
                            }}
                          ></i>
                        </div>
                        {errors.password && (
                          <small className="text-danger">
                            {errors.password}
                          </small>
                        )}
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="col-lg-6">
                      <div
                        className="form_group"
                        style={{ position: "relative" }}
                      >
                        <label>
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="d-flex align-items-center position-relative pb-0 mb-0">
                          <input
                            type={showCPassword ? "text" : "password"}
                            name="cpassword"
                            value={data.cpassword}
                            onChange={handleChange}
                            className="form_control mb-0"
                            style={{ paddingRight: "40px" }}
                            required
                          />
                          <i
                            className={`fa ${
                              showCPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                            onClick={() => setShowCPassword(!showCPassword)}
                            style={{
                              position: "absolute",
                              right: "15px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                              color: "#999",
                            }}
                          ></i>
                        </div>
                        {errors.cpassword && (
                          <small className="text-danger">
                            {errors.cpassword}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="form_text">
                      <p>
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our{" "}
                        <a href="/#" className="text-primary">
                          privacy policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>

                  <div className="form_group">
                    <button type="submit" className="main-btn">
                      Signup
                    </button>
                  </div>

                  <p className="text-center mt-20">
                    Already have an account?{" "}
                    <strong>
                      <Link to="/vendor/login">Login</Link>
                    </strong>
                  </p>
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

export default Signup;
