import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-toastify";
import axios from "axios";
import checkSession from "../auth/authService";

function EquipmentDetails() {
  const [quantity, setQuantity] = useState(1);
  const [isLoggein, setIsLoggedIn] = useState(false);
  const role = localStorage.getItem("role");
  const sliderSettings = {
    dots: true, // Enables navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1,
    arrows: true, // Enables next/prev arrows
  };

  const location = useLocation();
  const productDetails = location.state;

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Decrease quantity (minimum value: 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();

    if (role && role === "vendor") {
      toast.error("Vendor cannot add product to cart");
      return;
    }
    if (quantity > productDetails.p_qty) {
      toast.error("Only " + productDetails.p_qty + " items available");
      return;
    }

    try {
      await axios.post("https://equiprentals-backend.onrender.com/user/addtocart", {
        p_id: productDetails._id,
        vendor_id: productDetails.vendor_id,
        p_qty: quantity,
      });
      toast.success("Product Added to Cart");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const authenticateUser = async () => {
    try {
      const checkAuth = await checkSession();
      if (checkAuth.isAuth) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

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
                  <h1 data-aos="fade-up">Product Details</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Product Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="equipment-details-section pt-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="equipment-gallery-box d-flex mb-40"
                data-aos="fade-up"
              >
                <div className="equipment-slider-warp">
                  <Slider
                    {...sliderSettings}
                    className="equipment-gallery-slider"
                  >
                    {productDetails?.p_imgs.map((image, index) => (
                      <div
                        className="single-gallery-item d-flex align-items-center justify-content-center"
                        key={index}
                      >
                        <a
                          href={`https://equiprentals-backend.onrender.com/images/products/${image}`}
                          className="img-popup"
                        >
                          <img
                            src={`https://equiprentals-backend.onrender.com/images/products/${image}`}
                            alt={`Equipment ${index + 1}`}
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                              height: "450px",
                              width: "100%",
                            }}
                          />
                        </a>
                      </div>
                    ))}
                  </Slider>
                </div>
                {/* <div className="equipment-gallery-arrow" /> */}
              </div>
              <div className="description-wrapper">
                <h3 className="title" data-aos="fade-up">
                  {productDetails.p_name}
                </h3>
                <div className="content-box" data-aos="fade-up">
                  <h4 className="title">Description</h4>
                  <p>{productDetails.p_desc}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="equipement-sidebar-info" data-aos="fade-up">
                <form>
                  <div className="booking-form">
                    <div className="price-info">
                      <h5>Price</h5>
                      <span>Starts Form</span>
                      <h5>Quantity Available: {productDetails.p_qty}</h5>
                      <h6 className="text-danger">Deposit: {productDetails.deposit}</h6>
                      <div className="price-tag">
                        <h4>₹ {productDetails.p_price}</h4>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <div className="container mb-5">
                        <div className="d-flex justify-content-between">
                          <h6 className="mt-2">Quantity: </h6>
                          <div
                            className="input-group ms-3"
                            style={{ maxWidth: 200 }}
                          >
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={decreaseQuantity}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              id="quantity"
                              className="form-control text-center"
                              value={quantity}
                              max={productDetails.p_qty}
                              disabled
                            />
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                              onClick={increaseQuantity}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* <div className="form_group">
                        <label htmlFor="date">From</label>
                        <input
                          type="date"
                          className="form_control"
                          min={new Date().toISOString().split("T")[0]}
                          name="date"
                        />
                      </div>
                      <div className="form_group">
                      <label htmlFor="date">To</label>
                        <input
                          type="date"
                          className="form_control"
                          min={new Date().toISOString().split("T")[0]}
                          name="date"
                        />
                      </div> 
                      <div className="form_group mb-5">
                        <p className="available-text">
                          <i className="fas fa-circle-xmark " />
                          Dates are available
                        </p>
                      </div>*/}
                      <div className="button text-center">
                        {isLoggein ? (
                          <button
                            className="main-btn"
                            type="button"
                            title="Booking"
                            onClick={handleAddToCart}
                          >
                            Add to Cart
                          </button>
                        ) : (
                          <Link
                            className="main-btn"
                            type="button"
                            title="Booking"
                            to={"/login"}
                          >
                            Login to Book
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
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

export default EquipmentDetails;
