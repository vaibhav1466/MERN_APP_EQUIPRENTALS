import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

function OurTeam() {
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
                            <h1 data-aos="fade-up">Our Team</h1>
                            <ul
                              className="breadcrumbs-link d-flex justify-content-center"
                              data-aos="fade-up"
                            >
                              <li>
                                <Link to="/" target="_self" title="Home">
                                  Home
                                </Link>
                              </li>
                              <li className="active">Our Team</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
      <section className="team-area pt-130 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                            <div className="team-item team-item-one mb-40">
                                <div className="team-img">
                                    <img src="assets/images/mk/manishmodi.jpg" alt="Team Image" />
                                    <div className="team-social">
                                        <ul className="social-link">
                                            <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                                            <li><a href="https://pinterest.com/" target="_blank"><i className="fab fa-pinterest-p" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-info text-center">
                                    <h3 className="title"><a  target="_self" title="User">Manish Modi</a></h3>
                                    <span className="position">Web Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                            <div className="team-item team-item-one mb-40">
                                <div className="team-img" style={{height:"450px"}}>
                                    <img src="assets/images/mk/vaibhavphoto.jpg" alt="Team Image" />
                                    <div className="team-social">
                                        <ul className="social-link">
                                            <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                                            <li><a href="https://pinterest.com/" target="_blank"><i className="fab fa-pinterest-p" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-info text-center">
                                    <h3 className="title"><a  target="_self" title="User">Vaibhav Limbachiya</a></h3>
                                    <span className="position">Web Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12"  data-aos="fade-up">
                            <div className="team-item team-item-one mb-40" >
                                <div className="team-img" style={{height:"450px"}} >
                                    <img src="assets/images/mk/WhatsApp Image 2025-04-15 at 02.15.24_1a4a9a45.jpg" alt="Team Image" />
                                    <div className="team-social">
                                        <ul className="social-link">
                                            <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                                            <li><a href="https://pinterest.com/" target="_blank"><i className="fab fa-pinterest-p" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-info text-center">
                                    <h3 className="title"><a  target="_self" title="User">Krunal Prjapati</a></h3>
                                    <span className="position">Web Developer</span>
                                </div>
                            </div>
                        </div>
                     
                       
                       
                        
                      
                    </div>
                    {/* <nav className="pagination-nav mb-40" data-aos="fade-up">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <a className="page-link" href="blogs.html" target="_self" aria-label="Previous">
                                    <i className="far fa-angle-left" />
                                </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="blogs.html" target="_self">1</a></li>
                            <li className="page-item"><a className="page-link" href="" target="_self">2</a></li>
                            <li className="page-item"><a className="page-link" href="" target="_self">3</a></li>
                            <li className="page-item"><a className="page-link" href="" target="_self">4</a></li>
                            <li className="page-item"><a className="page-link" href="" target="_self">30</a></li>
                            <li className="page-item">
                                <a className="page-link" href="blogs.html" target="_self" aria-label="Next">
                                    <i className="far fa-angle-right" />
                                </a>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </section>
      <Footer />
      <div className="back-to-top">
        <i className="fas fa-angle-up" />
      </div>
    </>
  );
}

export default OurTeam;
