import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

function Shop() {
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
                  <h1 data-aos="fade-up">Our Shop</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">shop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products-area pt-130 pb-80">
        <div className="container">
          <div className="product-filter mb-20" data-aos="fade-up">
            <form>
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-3 col-md-4">
                  <div className="form_group">
                    <input
                      type="search"
                      placeholder="Product Search"
                      className="form_control"
                      required
                    />
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="form_group">
                    <select className="wide">
                      <option value={"01"}>Most Viewed</option>
                      <option value={"02"}>Newest Product</option>
                      <option value={"03"}>Oldest Product</option>
                      <option value={"04"}>High to Low</option>
                      <option value={"05"}>Low to High</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="sidebar-widget-area">
                <div
                  className="widget product-categories mb-50"
                  data-aos="fade-up"
                >
                  <h4 className="widget-title">Category</h4>
                  <ul className="widget-nav">
                    <li>
                      <a href="shop.html" target="_self" title="Link">
                        All
                      </a>
                    </li>
                    <li>
                      <a href="shop.html" target="_self" title="Link">
                        Accessories
                      </a>
                    </li>
                    <li>
                      <a href="shop.html" target="_self" title="Link">
                        Pants
                      </a>
                    </li>
                    <li>
                      <a href="shop.html" target="_self" title="Link">
                        Shoes
                      </a>
                    </li>
                    <li>
                      <a href="shop.html" target="_self" title="Link">
                        Shirts
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget filter-products mb-50"
                  data-aos="fade-up"
                >
                  <h4 className="widget-title">Filter Products</h4>
                  <ul className="filter-products-list">
                    <li>
                      <div className="single-method d-flex">
                        <input type="radio" id="cat1" name="radio" />
                        <label htmlFor="cat1">
                          <span>Show All</span>
                        </label>
                      </div>
                      <div className="single-method d-flex">
                        <input
                          type="radio"
                          id="cat2"
                          name="radio"
                          defaultChecked
                        />
                        <label htmlFor="cat2">
                          <span>4 Star and higher</span>
                        </label>
                      </div>
                      <div className="single-method d-flex">
                        <input type="radio" id="cat3" name="radio" />
                        <label htmlFor="cat3">
                          <span>3 Star and higher</span>
                        </label>
                      </div>
                      <div className="single-method d-flex">
                        <input
                          type="radio"
                          id="cat4"
                          name="radio"
                          defaultChecked
                        />
                        <label htmlFor="cat4">
                          <span>2 Star and higher</span>
                        </label>
                      </div>
                      <div className="single-method d-flex">
                        <input type="radio" id="cat5" name="radio" />
                        <label htmlFor="cat5">
                          <span>1 Star and higher</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget price-range-widget mb-50"
                  data-aos="fade-up"
                >
                  <h4 className="widget-title">Price Range</h4>
                  <div id="slider-range" className="mb-20" />
                  <div className="price-number d-flex">
                    <span className="text">Range from</span>
                    <span className="amount">
                      <input type="text" id="amount" />
                    </span>
                  </div>
                </div>
                <div
                  className="widget widget-tag-cloud mb-30"
                  data-aos="fade-up"
                >
                  <h4 className="widget-title">Popular Tags</h4>
                  <a href="shop.html" target="_self" title="Link">
                    All
                  </a>
                  <a href="shop.html" target="_self" title="Link">
                    HTML
                  </a>
                  <a href="shop.html" target="_self" title="Link">
                    WordPress
                  </a>
                  <a href="shop.html" target="_self" title="Link">
                    PSD
                  </a>
                  <a href="shop.html" target="_self" title="Link">
                    CMS
                  </a>
                  <a href="shop.html" target="_self" title="Link">
                    LMS
                  </a>
                  <a href="shop.html" target="_self" title="Link">
                    Corporate
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="product-item-area">
                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    data-aos="fade-up"
                  >
                    <div className="product-item product-item-two mb-40">
                      <div className="product-img">
                        <img
                          src="assets/images/shop/shop-1.jpg"
                          alt="product"
                        />
                        <div className="product-overlay">
                          <div className="product-meta">
                            <Link
                              to={"/shopDetails"}
                              target="_self"
                              title="Image"
                              className="icon img-popup"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                            <Link
                              to="/cart"
                              target="_self"
                              title="Add to cart"
                              className="icon cart-btn"
                            >
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <a
                              href="login.html"
                              target="_self"
                              title="Add to wishlist"
                              className="icon wishlist-btn"
                            >
                              <i className="fas fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
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
                        <h3 className="title">
                          <a href="shop-details.html">Smart Man Jacket</a>
                        </h3>
                        <span className="price">
                          $35 <span className="pre-price">$45.55</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    data-aos="fade-up"
                  >
                    <div className="product-item product-item-two mb-40">
                      <div className="product-img">
                        <img
                          src="assets/images/shop/shop-2.jpg"
                          alt="product"
                        />
                        <div className="product-overlay">
                          <div className="product-meta">
                            <Link
                              to={"/shopDetails"}
                              target="_self"
                              title="Image"
                              className="icon img-popup"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                            <Link
                              to="/cart"
                              target="_self"
                              title="Add to cart"
                              className="icon cart-btn"
                            >
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <a
                              href="login.html"
                              target="_self"
                              title="Add to wishlist"
                              className="icon wishlist-btn"
                            >
                              <i className="fas fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
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
                        <h3 className="title">
                          <a href="shop-details.html">Ecommerce Website</a>
                        </h3>
                        <span className="price">$35</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    data-aos="fade-up"
                  >
                    <div className="product-item product-item-two mb-40">
                      <div className="product-img">
                        <img
                          src="assets/images/shop/shop-3.jpg"
                          alt="product"
                        />
                        <div className="product-overlay">
                          <div className="product-meta">
                            <Link
                              to={"/shopDetails"}
                              target="_self"
                              title="Image"
                              className="icon img-popup"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                            <Link
                              to="/cart"
                              target="_self"
                              title="Add to cart"
                              className="icon cart-btn"
                            >
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <a
                              href="login.html"
                              target="_self"
                              title="Add to wishlist"
                              className="icon wishlist-btn"
                            >
                              <i className="fas fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
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
                        <h3 className="title">
                          <a href="shop-details.html">
                            Brandix Engine Block Z4
                          </a>
                        </h3>
                        <span className="price">
                          $35 <span className="pre-price">$45.55</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    data-aos="fade-up"
                  >
                    <div className="product-item product-item-two mb-40">
                      <div className="product-img">
                        <img
                          src="assets/images/shop/shop-4.jpg"
                          alt="product"
                        />
                        <div className="product-overlay">
                          <div className="product-meta">
                            <Link
                              to={"/shopDetails"}
                              target="_self"
                              title="Image"
                              className="icon img-popup"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                            <Link
                              to="/cart"
                              target="_self"
                              title="Add to cart"
                              className="icon cart-btn"
                            >
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <a
                              href="login.html"
                              target="_self"
                              title="Add to wishlist"
                              className="icon wishlist-btn"
                            >
                              <i className="fas fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
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
                        <h3 className="title">
                          <a href="shop-details.html">Smart Man Jacket</a>
                        </h3>
                        <span className="price">$35</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    data-aos="fade-up"
                  >
                    <div className="product-item product-item-two mb-40">
                      <div className="product-img">
                        <img
                          src="assets/images/shop/shop-5.jpg"
                          alt="product"
                        />
                        <div className="product-overlay">
                          <div className="product-meta">
                            <Link
                              to={"/shopDetails"}
                              target="_self"
                              title="Image"
                              className="icon img-popup"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                            <Link
                              to="/cart"
                              target="_self"
                              title="Add to cart"
                              className="icon cart-btn"
                            >
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <a
                              href="login.html"
                              target="_self"
                              title="Add to wishlist"
                              className="icon wishlist-btn"
                            >
                              <i className="fas fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
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
                        <h3 className="title">
                          <a href="shop-details.html">Motor Oil Level 5</a>
                        </h3>
                        <span className="price">
                          $35 <span className="pre-price">$45.55</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    data-aos="fade-up"
                  >
                    <div className="product-item product-item-two mb-40">
                      <div className="product-img">
                        <img
                          src="assets/images/shop/shop-6.jpg"
                          alt="product"
                        />
                        <div className="product-overlay">
                          <div className="product-meta">
                            <Link
                              to={"/shopDetails"}
                              target="_self"
                              title="Image"
                              className="icon img-popup"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                            <Link
                              to="/cart"
                              target="_self"
                              title="Add to cart"
                              className="icon cart-btn"
                            >
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <a
                              href="login.html"
                              target="_self"
                              title="Add to wishlist"
                              className="icon wishlist-btn"
                            >
                              <i className="fas fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
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
                        <h3 className="title">
                          <a href="shop-details.html">Taillights Brandix Z54</a>
                        </h3>
                        <span className="price">
                          $35 <span className="pre-price">$45.55</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    data-aos="fade-up"
                  >
                    <div className="product-item product-item-two mb-40">
                      <div className="product-img">
                        <img
                          src="assets/images/shop/shop-7.jpg"
                          alt="product"
                        />
                        <div className="product-overlay">
                          <div className="product-meta">
                            <Link
                              to={"/shopDetails"}
                              target="_self"
                              title="Image"
                              className="icon img-popup"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                            <Link
                              to="/cart"
                              target="_self"
                              title="Add to cart"
                              className="icon cart-btn"
                            >
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <a
                              href="login.html"
                              target="_self"
                              title="Add to wishlist"
                              className="icon wishlist-btn"
                            >
                              <i className="fas fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
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
                        <h3 className="title">
                          <a href="shop-details.html">
                            Set of Four 19 Inch Spiked Tires
                          </a>
                        </h3>
                        <span className="price">$35</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    data-aos="fade-up"
                  >
                    <div className="product-item product-item-two mb-40">
                      <div className="product-img">
                        <img
                          src="assets/images/shop/shop-8.jpg"
                          alt="product"
                        />
                        <div className="product-overlay">
                          <div className="product-meta">
                            <Link
                              to={"/shopDetails"}
                              target="_self"
                              title="Image"
                              className="icon img-popup"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                            <Link
                              to="/cart"
                              target="_self"
                              title="Add to cart"
                              className="icon cart-btn"
                            >
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <a
                              href="login.html"
                              target="_self"
                              title="Add to wishlist"
                              className="icon wishlist-btn"
                            >
                              <i className="fas fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
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
                        <h3 className="title">
                          <a href="shop-details.html">Smart Man Jacket</a>
                        </h3>
                        <span className="price">$35</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    data-aos="fade-up"
                  >
                    <div className="product-item product-item-two mb-40">
                      <div className="product-img">
                        <img
                          src="assets/images/shop/shop-9.jpg"
                          alt="product"
                        />
                        <div className="product-overlay">
                          <div className="product-meta">
                            <Link
                              to={"/shopDetails"}
                              target="_self"
                              title="Image"
                              className="icon img-popup"
                            >
                              <i className="fas fa-eye" />
                            </Link>
                            <Link
                              to="/cart"
                              target="_self"
                              title="Add to cart"
                              className="icon cart-btn"
                            >
                              <i className="fas fa-shopping-cart" />
                            </Link>
                            <a
                              href="login.html"
                              target="_self"
                              title="Add to wishlist"
                              className="icon wishlist-btn"
                            >
                              <i className="fas fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-info text-center">
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
                        <h3 className="title">
                          <a href="shop-details.html">Side Rearview Mirror</a>
                        </h3>
                        <span className="price">
                          $35 <span className="pre-price">$45.55</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="pagination-nav mb-40" data-aos="fade-up">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="blogs.html"
                        target="_self"
                        aria-label="Previous"
                      >
                        <i className="far fa-angle-left" />
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="blogs.html" target="_self">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="blogs.html" target="_self">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="blogs.html" target="_self">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="blogs.html" target="_self">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="blogs.html" target="_self">
                        30
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="blogs.html"
                        target="_self"
                        aria-label="Next"
                      >
                        <i className="far fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
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

export default Shop;
