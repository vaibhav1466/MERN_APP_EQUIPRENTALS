import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      {/* <div className="preloader">
        <div className="lds-ellipsis">
          <span />
          <span />
          <span />
        </div>
      </div> */}
      <div className="error-area pt-100 pb-100">
        <div className="container">
          <div className="error-content text-center">
            <img src="assets/images/404.svg" alt="" />
            <h3>Ooops! Page Not Found</h3>
            <p>
              The page you are looking for might have been removed <br /> had
              its name changed or is temporarily unavailable.
            </p>
            <div>
              <Link to="/" className="main-btn">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error404;
