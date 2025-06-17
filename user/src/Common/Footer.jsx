import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="footer-area footer-area-one bg_cover"
        style={{ backgroundImage: "url(assets/images/mk/background1.png)" }}
      >
        <div className="footer-widget" >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6" data-aos="fade-up">
                <div className="widget about-widget mb-40">
                  <a href="/" className="brand-logo">
                  <img src="assets/images/logo/footerlogo.png" alt="Brand Logo"  style={{height:'109px'}} />
                  </a>
                  <p>
                  Turn your short-term needs into smart savings! Our online platform lets you rent high-quality equipment with ease
                  </p>
                  <div className="social-box">
                    <h5>Follow Us</h5>
                    <ul className="social-link">
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
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="widget footer-widget-nav mb-40">
                  <h4 className="widget-title">Useful Link</h4>
                  <ul className="widget-nav">
                    <li>
                      <Link to={"/contact"}>About</Link>
                    </li>
                    <li>
                      <Link to={"/categories"}>Category</Link>
                    </li>
                    <li>
                      <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                      <Link to={"/signup"}>Register</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="widget contact-info-widget mb-40">
                  <h4 className="widget-title">Contact Information</h4>
                  <ul className="contact-info-list">
                    <li>
                      <div className="icon">
                        <i className="fas fa-paper-plane" />
                      </div>
                      <div className="info">
                        <p>
                          <a href="mailto:equipRentals3@gmail.com">
                          equipRentals3@gmail.com
                          </a>
                        </p>
                        <p>
                          <a href="mailto:equipRentals3@gmail.com">
                          equipRentals3@gmail.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="info">
                        <p>
                          <a href="tel:123456789">+91 - 1111 - 222 - 333</a>
                        </p>
                        <p>
                          <a href="tel:123456789">+91 - 1111 - 222 - 333</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="info">
                      <p>Ahemdabad city</p>
                      <p>Gujarat, INDIA</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text text-center">
                  <p>
                    Copyright © 2025 <a href="index.html">EquipRentals</a>, All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
