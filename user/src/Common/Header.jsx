import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import checkSession from "../auth/authService";
import axios from "axios";
import { toast } from "react-toastify";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const role = localStorage.getItem("role");

  //eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      setIsLoading(true);
      const chechAuth = await checkSession();
      const loggedIn = chechAuth.isAuth;
      setIsLoggedIn(loggedIn);
      setIsLoading(false);
    };

    checkLoginStatus();
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await axios.get("https://equiprentals-backend.onrender.com/logout");
      localStorage.removeItem("role");
      toast.success("Logout Successfully!!", {
        onClose: () => window.location.reload(true),
      });
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
      toast.error("Logout failed!", {
        onClose: () => window.location.reload(true),
      });
    }
  };
  return (
    <>
      <header className="header-area-one">
        <div className="header-navigation">
          <div className="container-fluid pl-0 pr-0">
            <div className="primary-menu d-flex align-items-center justify-content-between">
              <div className="site-branding">
                <Link to={"/"} className="brand-logo" title="Brand Logo">
                  <img
                    src="../assets/images/logo/logo5.png"
                    alt="Brand Logo"
                    style={{ height: "109px" }}
                  />
                </Link>
              </div>
              <div className="nav-menu">
                <div className="navbar-close">
                  <i className="fal fa-times" />
                </div>
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item">
                      <Link className="active" to={"/"}>
                        Home
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to={"/categories"}>Categories</Link>
                    </li>
                    <li className="menu-item">
                      <Link to={"/products"}>Equipments</Link>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Pages
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link
                            to="/blogs"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ourteam"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/faqs"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            FAQ's
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/privacyandpolicy"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Privacy&policy
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {isLoggedIn && role === "user" && (
                      <>
                        <li className="menu-item">
                          <Link to={"/bookings"}>Bookings</Link>
                        </li>
                        <li className="menu-item">
                          <Link to={"/paymentHistory"}>Payments</Link>
                        </li>
                      </>
                    )}
                    {isLoggedIn && role === "vendor" && (
                      <>
                        <li className="menu-item">
                          <Link to={"/vendor/products"}>Your Products</Link>
                        </li>
                        <li className="menu-item">
                          <Link to={"/vendor/bookings"}>Bookings</Link>
                        </li>
                        <li className="menu-item">
                          <Link to={"/vendor/paymentHistory"}>Payments</Link>
                        </li>
                      </>
                    )}
                    <li className="menu-item">
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                    {isLoggedIn && (
                      <li className="menu-item">
                        <Link onClick={handleLogout} to={"#"}>
                          Logout
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
              <div className="header-right-nav">
                <div className="row">
                  <div className="social-box">
                    <ul className="social-link">
                      {isLoggedIn && role === "user" && (
                        <li>
                          <Link to={"/cart"}>
                            <i className="fas fa-cart-shopping" />
                          </Link>
                        </li>
                      )}
                      <li>
                        <Link
                          to={
                            isLoggedIn && role === "user"
                              ? "/profile"
                              : isLoggedIn && role === "vendor"
                              ? "/vendor/profile"
                              : "/login"
                          }
                        >
                          <i className="fas fa-user" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <header className="header-area-one">
      <div className="container-fluid pl-0 pr-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container-fluid">
            
            <Link className="navbar-brand" to="/">
              <h2 className="text-primary"><b>Rent IT All</b></h2>
            </Link>

          
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/categories"}>Categories</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/products"}>Equipments</Link>
                </li>
                {isLoggedIn && role === "user" && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/bookings"}>Bookings</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/paymentHistory"}>Payments</Link>
                    </li>
                  </>
                )}
                {isLoggedIn && role === "vendor" && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/vendor/products"}>Your Products</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/vendor/bookings"}>Bookings</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/vendor/paymentHistory"}>Payments</Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>Contact</Link>
                </li>
                {isLoggedIn && (
                  <li className="nav-item">
                    <Link className="nav-link" onClick={handleLogout} to={"#"}>Logout</Link>
                  </li>
                )}
                {isLoggedIn && role === "user" && (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/cart"}>
                      <i className="fas fa-cart-shopping" />
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to={
                    isLoggedIn && role === "user"
                      ? "/profile"
                      : isLoggedIn && role === "vendor"
                      ? "/vendor/profile"
                      : "/login"
                  }>
                    <i className="fas fa-user" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header> */}
    </>
  );
}

export default Header;
