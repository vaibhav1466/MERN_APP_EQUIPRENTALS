import React from "react";

function ComingSoon() {
  return (
    <>
      {/* <div className="preloader">
        <div className="lds-ellipsis">
          <span />
          <span />
          <span />
        </div>
      </div> */}
      <div className="coming-soon-area">
        <div className="container">
          <div className="coming-soon-box">
            <div className="title-box">
              <h2 className="title">Coming soon</h2>
              <p className="text">Get Ready! Something Really Cool Is Coming</p>
            </div>
            <div id="timer" className="flex-wrap d-flex justify-content-center">
              <div
                id="days"
                className="counter align-items-center flex-column d-flex justify-content-center"
              >
                <div className="h1" />
                <span>Days</span>
              </div>
              <div
                id="hours"
                className="counter align-items-center flex-column d-flex justify-content-center"
              >
                <div className="h1" />
                <span>Hours</span>
              </div>
              <div
                id="minutes"
                className="counter align-items-center flex-column d-flex justify-content-center"
              >
                <div className="h1" />
                <span>Minutes</span>
              </div>
              <div
                id="seconds"
                className="counter align-items-center flex-column d-flex justify-content-center"
              >
                <div className="h1" />
                <span>Seconds</span>
              </div>
            </div>
            <form className="newsletter-form" id="newsletterForm">
              <div className="input-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="text"
                  name="EMAIL"
                  required
                />
                <button className="main-btn" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
