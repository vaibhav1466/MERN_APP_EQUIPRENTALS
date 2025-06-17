import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import checkSession from "../auth/authService";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.cpassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await axios.post("https://equiprentals-backend.onrender.com/user/updateProfile", data);
      toast.success("Profile Updated Successfully!!", {
        onClose: () => navigate("/"),
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        autoClose: 1000,
      });
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      const session = await checkSession();

      if (session.isAuth) {
        setData({
          name: session.sessionData.name || "",
          phone: session.sessionData.phone || "",
          email: session.sessionData.email || "",
          address: session.sessionData.address || "",
          password: "",
          cpassword: "",
        });
      } else {
        window.location.reload();
      }
    };

    fetchSession();
    // eslint-disable-next-line
  }, [navigate]);

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
                  <h1 data-aos="fade-up">Profile</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Profile</li>
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
                  <div className="row">
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
                          className="form_control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label>
                          Email address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form_control"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label>
                          Phone No <span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form_control"
                          name="phone"
                          value={data.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label>
                          Address <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form_control"
                          rows={"3"}
                          name="address"
                          value={data.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label>
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form_control"
                          name="password"
                          value={data.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <label>
                          Confirm Password
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form_control"
                          name="cpassword"
                          value={data.cpassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form_group">
                    <button type="submit" className="main-btn">
                      Update Profile
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

export default Profile;
