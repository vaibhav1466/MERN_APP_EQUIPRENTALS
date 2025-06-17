import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import checkSession from "../auth/authService";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    rating: 2.5,
    comment: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const chechAuth = await checkSession();
      const loggedIn = chechAuth.isAuth;
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      toast.error("Please login first!");
      return;
    }
    try {
      await axios.post("https://equiprentals-backend.onrender.com/user/addFeedback", data);
      toast.success("Feedback sent successfully!", {
        onClose: () => navigate("/"),
      });
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <>
      {/* <div className="preloader">
        <div className="lds-ellipsis">
          <span />
          <span />
          <span />
        </div>
      </div> */}
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
                  <h1 data-aos="fade-up">Contact Us</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-area pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="information-list-item">
                <div className="information-item mb-50" data-aos="fade-up">
                  <div className="icon">
                    <i className="fas fa-home" />
                  </div>
                  <div className="info">
                    <p> House - 44, Road - 03, Sector - 11, Uttara, Dhaka</p>
                  </div>
                </div>
                <div className="information-item mb-50" data-aos="fade-up">
                  <div className="icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div className="info">
                    <p>
                      <a href="tel:+12336892">+123 366 892</a>
                    </p>
                    <p>
                      <a href="tel:+12336892">+991 2336 255</a>
                    </p>
                  </div>
                </div>
                <div className="information-item mb-50" data-aos="fade-up">
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="info">
                    <p>
                      <a href="mailto:contact@example.com">
                        contact@example.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:inquiry@example.com">
                        inquiry@example.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-wrapper mb-50" data-aos="fade-up">
                <div className="section-title mb-30">
                  <span className="span">Contact us</span>
                  <h2>Need Information Contact Us</h2>
                </div>
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12 d-flex align-items-center justify-content-center">
                        <div className="form_group">
                          <Rating
                            name="rating"
                            value={data.rating}
                            onChange={handleChange}
                            size="large"
                            precision={0.5}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="comment"
                            className="form_control"
                            value={data.comment}
                            onChange={handleChange}
                            placeholder="Add Comments"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="main-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div className="back-to-top">
        <i className="fas fa-angle-up" />
      </div>
    </>
  );
}

export default Contact;
