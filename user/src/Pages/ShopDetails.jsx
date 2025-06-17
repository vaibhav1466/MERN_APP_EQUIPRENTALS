import React, { useEffect, useRef, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ShopDetails() {
  const bigSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(bigSliderRef.current);
    setNav2(thumbSliderRef.current);
  }, []);

  const bigSliderSettings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    asNavFor: nav2,
  };

  const thumbSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: nav1,
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
                  <h1 data-aos="fade-up">Shop Details</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Shop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products-details-section pt-130 pb-50">
        <div className="container">
          <div className="products-details-wrapper mb-60">
            <div className="row">
              <div className="col-lg-6">
                <div className="products-gallery-wrap" data-aos="fade-up">
                  <Slider {...bigSliderSettings} ref={bigSliderRef}>
                    {[
                      "assets/images/shop/product-details-01.jpg",
                      "assets/images/shop/product-details-02.jpg",
                      "assets/images/shop/product-details-03.jpg",
                    ].map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`Product ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>

                  {/* Thumbnail Slider */}
                  <Slider {...thumbSliderSettings} ref={thumbSliderRef}>
                    {[
                      "assets/images/shop/details-thumb-01.jpg",
                      "assets/images/shop/details-thumb-02.jpg",
                      "assets/images/shop/details-thumb-03.jpg",
                    ].map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-info" data-aos="fade-up">
                  <h2>Smart Man Jacket</h2>
                  <ul className="rating">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <span className="price">
                    $89.00 <span className="pre-price">$120</span>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing is
                    Industrial thingsed do eiusmod tempor incididunt ut labore
                    doloremagna aliqua. Uts up enim ad minim veniam quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ecommodo
                    consequat. Duis aute irure dolor in reprehend voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident.
                  </p>
                  <div className="button mb-20">
                    <Link
                      to={"/cart"}
                      target="_self"
                      title="Add to cart"
                      className="main-btn"
                    >
                      Add To Cart
                    </Link>
                    <a
                      href="checkout.html"
                      target="_self"
                      title="Order Now"
                      className="main-btn"
                    >
                      Order Now
                    </a>
                  </div>
                  <ul className="social-link mb-20">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://pinterest.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                  <ul className="product-tags">
                    <li>
                      <span>Category:</span>
                      <a href="shop.html" target="_self" title="Accessories">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="description-wrapper" data-aos="fade-up">
                <div className="description-tabs">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#description"
                        title="Description"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#reviews"
                        title="Reviews"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content mt-30">
                  <div id="description" className="tab-pane fade show active">
                    <div className="description-content-box">
                      <p>
                        Sorem ipsum dolor sit amet consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur xcepteur sint occaecat cupidatat
                        non proident, sunt.
                      </p>
                    </div>
                  </div>
                  <div id="reviews" className="tab-pane fade">
                    <div className="shop-review-area">
                      <h4 className="title">Restaurant Website</h4>
                      <div className="shop-review-user d-flex">
                        <div className="thumb">
                          <img src="assets/images/person.png" alt="Thumb" />
                        </div>
                        <div className="content">
                          <ul className="rating">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                          <span className="date">
                            <span>User</span> 27-09-2021
                          </span>
                          <p>Great product with great features</p>
                        </div>
                      </div>
                      <div className="shop-review-form">
                        <form>
                          <div className="form_group">
                            <label>Comment *</label>
                            <textarea
                              className="form_control"
                              placeholder="Comment"
                              name="comment"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form_group">
                            <label>Rating *</label>
                            <ul className="rating mb-20">
                              <li>
                                <span className="fas fa-star" />
                              </li>
                              <li>
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                              </li>
                              <li>
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                              </li>
                              <li>
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                              </li>
                              <li>
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                                <span className="fas fa-star" />
                              </li>
                            </ul>
                          </div>
                          <div className="form_group">
                            <button className="main-btn">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
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

export default ShopDetails;
