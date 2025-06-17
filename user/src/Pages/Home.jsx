import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Carousel, CarouselCaption, CarouselItem, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoneyBillTrendUp,faUserGear,faWrench, faMagnifyingGlass,faBolt,faCartShopping, faHandshake, faTruckFront, faMedal,faLocationDot,faBuilding,faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
     <>
            <Header/>

            <Row>
    <Col>
        <Carousel>
        <CarouselItem>
  <div className="single-hero-slider">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="video-banner"
    >
      <source src="assets/images/mk/limitless-banner-video.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
    <div className="overlay"></div>

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="hero-content text-center ">
            <h1 data-aos="fade-up ">Short-term needs, long-term savings <br /> Rent hassle-free!</h1>
            <p data-aos="fade-up" data-aos-delay={50}>
            "Why invest thousands in equipment you rarely use? Rent and keep your budget for what truly matters!"
            </p>
            <div data-aos="fade-up" data-aos-delay={100}>
            <Link to="/login" style={{textDecoration:'none',color:'black'}} target="_self" title="Rent Now" class="main-btn main-btn-primary">Rent Now </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</CarouselItem>


            
        </Carousel>
    </Col>
</Row>



            <section className="about-area pt-130 pb-80">
                <div className="container">
                    <div className="row gx-xl-5">
                        <div className="col-lg-7" data-aos="fade-up">
                            <div className="about-img-box about-img-box-one mb-50">
                                <div className="about-img about-img-one">
                                    <img src="assets/images/mk/OrgUVC-L_Tech-19_Single-03copy.jpg" alt="about image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5" data-aos="fade-up">
                            <div className="about-content-box about-content-box-one mb-50">
                                <div className="section-title mb-40">
                                    <span className="sub-title"><span className="sub-bg">Who</span> Are We?</span>
                                    <h2 className="mb-0">We Have 30+ Years of Experience in Hassle-Free Rentals</h2>
                                </div>
                                <p>
                                At <b>EquipRentals</b>, we believe that <b>owning is optional, but access is essential.</b> Whether you're looking for high-end electronics, drones, furniture, home appliances, or even luxury clothing, we make it easy to rent what you need—when you need it.

With decades of experience in the rental industry, we've built a seamless platform that ensures <b>affordable, flexible, and reliable rentals </b> for individuals and businesses alike.

                                <p> our mission is to <b> make premium products accessible to everyone</b>—without the burden of ownership.                                </p>
                                </p>
                                <div className="block-quote mt-25">
                                    <h5>🚀 Why Rent With Us? <br></br>
<b>✔ Wide Range of Products – </b>From electronics to fashion, we have it all.<br></br>
<b>✔ Flexible Plans – </b> Rent for a day, a month, or even a year—your choice!<br></br>
<b>✔ Doorstep Delivery & Pickup – </b> Convenience at your fingertips.<br></br>

</h5>
                                </div>
                                <Link to="/contact" style={{textDecoration:'none',color:'white'}} target="_self" title="What we do" className="main-btn">What We Do</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="working-process light-gray pt-90 pb-90">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7" data-aos="fade-up">
                            <div class="section-title text-center mb-55">
                                <span class="sub-title"><span class="sub-bg">Working</span> Process</span>
                                <h2>Get Your Rentals In Easy 4 Steps</h2>
                                <p>Rent Smarter, Not Harder! Seamlessly browse, book, and enjoy top-quality rentals with easy delivery and returns. 🚀</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-lg-2 col-md-3 process-column" data-aos="fade-up">
                            <div class="process-item process-item-one mb-40">
                                <div class="count-box">
                                    <div class="icon">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="x" style={{fontSize: '25px', color: '#374151'}}   />
                                  

                                    </div>
                                    <div class="process-count">01</div>
                                </div>
                                <div class="content text-center">
                                    <h4>Find What You Need
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 process-column" data-aos="fade-up">
                            <div class="process-item process-item-one mb-40">
                                <div class="count-box">
                                    <div class="icon">
                                    <FontAwesomeIcon icon={faCartShopping}  size="2x" style={{fontSize: '25px', color: '#374151'}} />
                                   
                                  </div>
                                    <div class="process-count">02</div>
                                </div>
                                <div class="content text-center">
                                    <h4> Make a Reservation</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 process-column" data-aos="fade-up">
                            <div class="process-item process-item-one mb-40">
                                <div class="count-box">
                                    <div class="icon">
                                    <FontAwesomeIcon icon={faTruckFront} size="2x" style={{ fontSize: '25px' ,color: '#374151'}} />
                                    </div>
                                    <div class="process-count">03</div>
                                </div>
                                <div class="content text-center">
                                    <h4>Receive Your Equipment</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 process-column" data-aos="fade-up">
                            <div class="process-item process-item-one mb-40">
                                <div class="count-box">
                                    <div class="icon">
                                    <FontAwesomeIcon icon={faHandshake}  style={{ fontSize: '25px',color: '#374151'}} />
                                    </div>
                                    <div class="process-count">04</div>
                                </div>
                                <div class="content text-center">
                                    <h4>Use & Return Hassle-Free</h4>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section class="features-area pt-130 pb-90">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7" data-aos="fade-up">
                            <div class="section-title text-center mb-55">
                                <span class="sub-title"><span class="sub-bg">Awesome</span> Features</span>
                                <h2>Most Featured Equipment</h2>
                                <p>Discover top-tier equipment with flexible rental options and seamless service.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12"  data-aos="fade-up">
                            <div class="features-item features-item-one mb-40" style={{height:'390px'}}>
                                <div class="icon">
                                <FontAwesomeIcon icon={faMedal} style={{ fontSize: '25px',color: '#374151'}} />

                                </div>
                                <div class="content">
                                    <h4>Quality Products</h4>
                                    <p>High-quality, well-maintained equipment to meet your exact needs.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                            <div class="features-item features-item-one mb-40"  style={{height:'390px'}}>
                                <div class="icon">
                                <FontAwesomeIcon icon={faBolt} style={{ fontSize: '25px',color: '#374151'}} />
                                </div>
                                <div class="content">
                                    <h4>Fast & Reliable Service</h4>
                                    <p>Quick bookings, on-time deliveries, and hassle-free returns. fast and reliable services </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                            <div class="features-item features-item-one mb-40"  style={{height:'390px'}}>
                                <div class="icon">
                                <FontAwesomeIcon icon={faMoneyBillTrendUp} style={{ fontSize: '25px', color: '#374151' }} />

                                </div>
                                <div class="content">
                                    <h4>Cost-Effective Solutions  </h4>
                                    <p>Affordable rental plans that fit your budget without compromising quality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="counter-area bg-with-overlay bg_cover pt-130 pb-120" style={{ backgroundImage: "url(assets/images/mk/background.jpg)" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 counter-column" data-aos="fade-up">
                            <div class="counter-item counter-item-one mb-40 text-center">
                                <div class="icon">
                                <FontAwesomeIcon icon={faWrench} style={{ fontSize: '25px', color: '#374151' }} />
                                </div>
                                <div class="content">
                                    <h2><span class="count">2500</span>+</h2>
                                    <h5>Equipment</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 counter-column" data-aos="fade-up">
                            <div class="counter-item counter-item-one mb-40 text-center">
                                <div class="icon">
                                <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '25px', color: '#374151' }} />
                                </div>
                                <div class="content">
                                    <h2><span class="count">175</span>+</h2>
                                    <h5>Coverage Area</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 counter-column" data-aos="fade-up">
                            <div class="counter-item counter-item-one mb-40 text-center">
                                <div class="icon">
                                <FontAwesomeIcon icon={faBuilding} style={{ fontSize: '25px', color: '#374151' }} />

                                </div>
                                <div class="content">
                                    <h2><span class="count">596</span>+</h2>
                                    <h5>Total Branch</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 counter-column" data-aos="fade-up">
                            <div class="counter-item counter-item-one mb-40 text-center">
                                <div class="icon">
                            
                                <FontAwesomeIcon icon={faUserGear} style={{ fontSize: '25px', color: '#374151' }} />


                                </div>
                                <div class="content">
                                    <h2><span class="count">1580</span></h2>
                                    <h5>Company Staffs</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing-area pt-130 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title"><span className="sub-bg">Awesome</span> Equipment</span>
                                <h2>Featured Rental Equipment</h2>
                                <p>"From power tools to home appliances, we've got it all! Browse, book, and rent equipment at unbeatable prices—delivered to your doorstep whenever you need it."</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pricing-nav-filter mb-60" data-aos="fade-up">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <Link to="/products" className="nav-link active" data-toggle="tab" href="#all">All </Link>
                                    </li>
                                    <li className="nav-item">   
                                        <Link  to="/products"className="nav-link" data-toggle="tab" href="#cat1">Home Appliances</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link  to="/products"className="nav-link" data-toggle="tab" href="#cat2">Kids & baby</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/products" className="nav-link" data-toggle="tab" href="#cat3">Electronic</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/products" className="nav-link" data-toggle="tab" href="#cat4">Luxury</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content" id="myTabContent" data-aos="fade-up">
                                <div className="tab-pane fade show active" id="all">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <Link to="/products" href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/mk/camera.jpeg" alt="Pricing image" /></Link>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>₹3000</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Nikon Z30 Camera</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">₹100/Day</span>
                                                            <span className="span-btn active-btn week">₹700/Week</span>
                                                            <span className="span-btn month">₹3000/Month</span>
                                                        </div>
                                                       
                                                        <ul className="info-list">
                                                            <li>20.9MP DX-Format CMOS Sensor</li>
                                                            <li>UHD 4K30p and Full HD 120p Video Live Stream at 60p</li>
                                                            <li> 60p In-Camera Time-Lapse Vlogging-Optimized Design Designed for creators</li>
                                                          
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <Link to="/products" style={{textDecoration:'none',color:'white'}} target="_self" title="Reserve" className="main-btn">Rent</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <Link to="/products"target="_self" title="Equipment Image"><img src="assets/images/mk/wash0.jpeg" alt="Pricing image" /></Link>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>₹1500</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Front Loading Washing Machine (Fully Automatic)</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">₹50/Day</span>
                                                            <span className="span-btn active-btn week">₹350/Week</span>
                                                            <span className="span-btn month">₹1500/Month</span>
                                                        </div>
                                                       
                                                        <ul className="info-list">
                                                            <li>Front Loading Fully Automatic Washing Machine</li>
                                                            <li>Brand: Samsung, LG, Whirlpool, Croma</li>
                                                            <li>Capacity/Size : 6 - 9 KG</li>
                                                           
                                                           
                                                    
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <Link  to="/products" style={{textDecoration:'none',color:'white'}} target="_self" title="Reserve" className="main-btn">Rent</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <Link to="/products" target="_self" title="Equipment Image"><img src="assets/images/mk/ac1.jpeg" alt="Pricing image" /></Link>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>₹3000</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">1 Ton Split Air Conditioner (Multiple Brands)</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">₹100/Day</span>
                                                            <span className="span-btn active-btn week">₹700/Week</span>
                                                            <span className="span-btn month">$3000/Month</span>
                                                        </div>
                                                      
                                                        <ul className="info-list">
                                                            <li>Capacity/Size: 1 Ton</li>
                                                            <li>Type: Split Air Conditioner</li>
                                                            <li>Brand: any</li>
                                                            <li>Basic installation: 2 Meters of Copper Pipe</li>
                                                            
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <Link to="/products" style={{textDecoration:'none',color:'white'}} target="_self" title="Reserve" className="main-btn">Rent</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat1">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-4.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$159</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Mining Truck with AC</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-5.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$254</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Range Excavator</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-6.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$315</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Mining Truck High Line Series</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat2">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-1.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$159</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Mining Truck with AC</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-2.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$254</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Range Excavator</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-3.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$315</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Mining Truck High Line Series</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat3">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-4.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$159</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Mining Truck with AC</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-5.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$254</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Range Excavator</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-6.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$315</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Mining Truck High Line Series</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cat4">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-1.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$159</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Mining Truck with AC</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-2.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$254</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Range Excavator</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="pricing-item pricing-item-one mb-40">
                                                <div className="pricing-img">
                                                    <a href="equipments-details.html" target="_self" title="Equipment Image"><img src="assets/images/pricing/price-3.jpg" alt="Pricing image" /></a>
                                                </div>
                                                <div className="pricing-info">
                                                    <div className="price-info">
                                                        <h5>Price</h5>
                                                        <span>Starts Form</span>
                                                        <div className="price-tag">
                                                            <h4>$315</h4>
                                                        </div>
                                                    </div>
                                                    <div className="pricing-body">
                                                        <h5 className="title">Mining Truck High Line Series</h5>
                                                        <div className="price-option">
                                                            <span className="span-btn day">$130/Day</span>
                                                            <span className="span-btn active-btn week">$350/Week</span>
                                                            <span className="span-btn month">$875/Month</span>
                                                        </div>
                                                        <span className="delivary">Two-Way Delivery: $125</span>
                                                        <ul className="info-list">
                                                            <li>Maximum Reach: 2 Meter</li>
                                                            <li>Operating Weight: 0.6 Ton</li>
                                                            <li>Model: Lot456</li>
                                                            <li>Digging  Depth: 3.5 Meter</li>
                                                            <li>Brand: Weekers</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pricing-bottom">
                                                        <ul className="rating">
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><i className="fas fa-star" /></li>
                                                            <li><span>5.00 (20 Rating)</span></li>
                                                        </ul>
                                                        <a href="equipments-details.html" target="_self" title="Reserve" className="main-btn">Reserve</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="testimonial-area light-bg pt-130 pb-130">
                <div class="container">
                    <div class="row align-items-end">
                        <div class="col-lg-6" data-aos="fade-up">
                            <div class="section-title mb-50">
                                <span class="sub-title"><span class="sub-bg">Client</span> Feedback</span>
                                <h2>What's Our Beautiful Clients Say About Us</h2>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-60" data-aos="fade-up">
                            <div class="button float-lg-right">
                                <Link to="/contact" style={{textDecoration:'none',color:'white'}} target="_self" title="See all feedback" class="main-btn">See All Feedback</Link>
                            </div>
                        </div>
                    </div>
                    <div class="row testimonial-slider-one">
                        <div class="col-lg-4" data-aos="fade-up">
                            <div class="testimonial-item testimonial-item-one">
                                <div class="testimonial-content">
                                    <div class="quote">
                                    <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: '25px', color: '#000000' }} />

                                    </div>
                                    <p>  "Excellent service! The entire process was smooth and hassle-free. Highly recommended!"</p>
                                    <h5>Mohona Clitar , <span class="location">Delhi</span></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4" data-aos="fade-up">
                            <div class="testimonial-item testimonial-item-one">
                                <div class="testimonial-content">
                                    <div class="quote">
                                    <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: '25px', color: '#000000' }} />
                                    </div>
                                    <p>"Great experience! The staff was professional, and the rental equipment was in top condition."</p>
                                    <h5>Shivam Patel , <span class="location">Gujarat</span></h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4" data-aos="fade-up">
                            <div class="testimonial-item testimonial-item-one">
                                <div class="testimonial-content">
                                    <div class="quote">
                                    <FontAwesomeIcon icon={faQuoteLeft} style={{ fontSize: '25px', color: '#000000' }} />
                                    </div>
                                    <p>"Superb quality and affordable rates. I will definitely use their service again! too smooth process"</p>
                                    <h5>Raj Parmar , <span class="location">Jaipur</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cta-area bg-with-overlay bg-cover pt-120 pb-130" style={{ backgroundImage: "url(assets/images/mk/background2.png)", backgroundRepeat:'no-repeat',objectFit:'contain'}}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="cta-content-box cta-content-box-one content-white text-center" data-aos="fade-up">
                                <h2>We Are Served Since 5+ Years To
                                    Clients With Trust</h2>
                                <p  class="mb-3"style={{color:'white' }}>"Own Less, Do More! Get Any Equipment on Demand."</p>
                                <Link to="/signup" style={{textDecoration:'none',color:'black'}} target="_self" title="Get a quote" class="main-btn main-btn-primary">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-area pt-130 pb-130">
                <Container>
                    <Row>
                        <Col className="">
                            <div className="section-title mb-50">
                                <span className="sub-title"><span className="sub-bg">Latest</span> Blogs</span>
                                <h2>Latest Blogs &amp; Updates</h2>
                            </div>
                        </Col>
                        <Col className="">
                            <div class="blog-arrows-one mb-60">
                                <span class="prev slick-arrow">
                                    <i class="far fa-angle-left"></i>
                                </span>
                                <span class="next slick-arrow">
                                    <i class="far fa-angle-right"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Card style={{ boxShadow: "3px 3px 30px grey" }}>
                                <div className="px-3" data-aos="fade-up">
                                    <div className="blog-post-item blog-post-item-one">
                                        <div className="post-thumbnail">
                                            <Link to="/blogs" title="Blog Image" target="_self"><img className="mt-2" style={{ borderRadius: '20px', boxShadow: '2px 2px 10px yellow' }} src="assets/images/blog/blog-08.jpeg" alt="Blog Image" /></Link>
                                            <Link to="/blogs" style={{textDecoration:'none',color:'black'}} className="cat-btn" title="Excavator" target="_self">Blog</Link>
                                        </div>
                                        <Card.Body>
                                            <div className="entry-content">
                                                <h3 className="title"><a >BRenting vs. Owning: A Flexible...</a></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by Admin</span></li>
                                                        <li><span><i className="fas fa-calendar-alt" />1 jan 2025</span></li>
                                                    </ul>
                                                </div>
                                                <p>Maecenas tempus tellus egondimentum rhoncus sem quam semper liberipiscing sem neque sed
                                                    ipsum. Nam quam.
                                                    ipsum. Nam quam.
                                                    ipsum. Nam quam. </p>
                                                <Link to="/blogs" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ boxShadow: "3px 3px 30px grey" }}>
                                <div className="px-3" data-aos="fade-up">
                                    <div className="blog-post-item blog-post-item-one">
                                        <div className="post-thumbnail">
                                            <Link to="/blogs" title="Blog Image" target="_self"><img className="mt-2" style={{ borderRadius: '20px', boxShadow: '2px 2px 10px yellow' }} src="assets/images/blog/blog-02.jpg" alt="Blog Image" /></Link>
                                            <Link to="/blogs"  style={{textDecoration:'none',color:'black'}} className="cat-btn" title="Worker" target="_self">Blog</Link>
                                        </div>
                                        <CardBody>
                                            <div className="entry-content">
                                                <h3 className="title"><a >A Complete Guide To AC Maintenance: Things To Keep In Mind</a></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <a >Admin</a></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><a>16 Dec 2021</a></span></li>
                                                    </ul>
                                                </div>
                                                <p>Maecenas tempus tellus egondimentum rhoncus sem quam semper liberipiscing sem neque sed
                                                    ipsum. Nam quam.</p>
                                                <Link to="/blogs" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </CardBody>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ boxShadow: "3px 3px 30px grey" }}>
                                <div className="px-3" data-aos="fade-up">
                                    <div className="blog-post-item blog-post-item-one">
                                        <div className="post-thumbnail">
                                            <Link to="/blogs" title="Blog Image" target="_self"><img className="mt-2" style={{ borderRadius: '20px', boxShadow: '2px 2px 10px yellow' }} src="assets/images/blog/blog-05.jpg" alt="Blog Image" /></Link>
                                            <Link to="/blogs"className="cat-btn" title="Construction" target="_self">Blog</Link>
                                        </div>
                                        <CardBody>
                                            <div className="entry-content">
                                                <h3 className="title"><a >Gated Communities vs. Standalone Buildings: Where To Invest?</a></h3>
                                                <div className="post-meta">
                                                    <ul>
                                                        <li><span><i className="fas fa-user" />Post by <a >Admin</a></span></li>
                                                        <li><span><i className="fas fa-calendar-alt" /><a>16 Dec 2021</a></span></li>
                                                    </ul>
                                                </div>
                                                <p>Maecenas tempus tellus egondimentum rhoncus sem quam semper liberipiscing sem neque sed
                                                    ipsum. Nam quam.</p>
                                                <Link to="/blogs" style={{textDecoration:'none',color:'black'}} className="btn-link" target="_self" title="Read more">Read more</Link>
                                            </div>
                                        </CardBody>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

          

            <Footer/>

            <div
  className="back-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <i className="fas fa-angle-up" />
</div>

        </>
    </>
    // <>
    //   {/* <div className="preloader">
    //   <div className="lds-ellipsis">
    //     <span />
    //     <span />
    //     <span />
    //   </div>
    // </div> */}
    //   <Header />
    //   <section className="hero-area">
    //     <div
    //       className="hero-wrapper-two bg_cover"
    //       style={{ backgroundImage: "url(assets/images/bg/hero-bg-2.jpg)" }}
    //     >
    //       <div className="container">
    //         <div className="row align-items-center">
    //           <div className="col-lg-6">
    //             <div className="hero-content">
    //               <h1 data-aos="fade-up">Best Rental Products</h1>
    //               <p data-aos="fade-up">
    //                 We Provide Best Rental Products Across the world.
    //               </p>
    //               <Link
    //                 to={"/contact"}
    //                 className="main-btn main-btn-primary"
    //                 target="_self"
    //                 title="Get a quote"
    //                 data-aos="fade-up"
    //               >
    //                 Get A Quote
    //               </Link>
    //             </div>
    //           </div>
    //           {/* <div className="col-lg-6">
    //             <div className="hero-search-wrapper" data-aos="fade-up">
    //               <h3>Find Your Product</h3>
    //               <form>
    //                 <div className="row">
    //                   <div className="col-lg-12">
    //                     <div className="form_group">
    //                       <input
    //                         type="text"
    //                         className="form_control"
    //                         placeholder="What are you looking for?"
    //                         name="search"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="col-lg-12">
    //                     <input type="date" className="form_control" />
    //                   </div>
    //                   <div className="col-lg-12">
    //                     <input type="date" className="form_control" />
    //                   </div>
    //                   <div className="col-lg-12">
    //                     <button className="search-btn">Search</button>
    //                   </div>
    //                 </div>
    //               </form>
    //             </div>
    //           </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="about-area  pt-130">
    //     <div className="container">
    //       <div className="row align-items-center">
    //         <div className="col-lg-5" data-aos="fade-up">
    //           <div className="about-content-box-two about-content-box pb-50">
    //             <div className="section-title mb-20">
    //               <span className="sub-title"> Why Choose Us?</span>
    //               <h2>Your Trusted Rental Solution for Every Need</h2>
    //             </div>
    //             <p>
    //               We provide high-quality rental products to meet your needs,
    //               ensuring affordability, convenience, and reliability. Whether
    //               you need equipment, vehicles, furniture, or party supplies,
    //               our rental services offer the best solutions at competitive
    //               prices.
    //             </p>
    //             <ul className="list mb-60">
    //               <li>Wide range of rental products</li>
    //               <li>Affordable pricing and flexible terms</li>
    //               <li>Reliable and well-maintained items</li>
    //             </ul>
    //             <a
    //               href="login.html"
    //               className="main-btn"
    //               target="_self"
    //               title="What we do"
    //             >
    //               What We Do
    //             </a>
    //           </div>
    //         </div>
    //         <div className="col-lg-7" data-aos="fade-up">
    //           <div className="about-img-box about-img-box-two pb-50">
    //             <img src="assets/images/about/about-2.jpg" alt="" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="working-process pt-80 pb-90">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-lg-7" data-aos="fade-up">
    //           <div className="section-title text-center mb-65">
    //             <span className="sub-title">Working Process</span>
    //             <h2>Rent What You Need in 3 Easy Steps</h2>
    //             <p>
    //               Renting has never been easier! Follow these simple steps to
    //               get the best rental products at your convenience.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row no-gutters d-flex justify-content-center">
    //         <div
    //           className="col-lg-3 col-md-6 process-column"
    //           data-aos="fade-up"
    //         >
    //           <div className="process-item process-item-two text-center mb-35">
    //             <div className="count-box">
    //               <div className="process-count">01</div>
    //               <div className="icon">
    //                 <i className="flaticon-search" />
    //               </div>
    //             </div>
    //             <div className="content text-center">
    //               <h5>Search Your Equipment</h5>
    //             </div>
    //           </div>
    //         </div>
    //         {/* <div
    //           className="col-lg-3 col-md-6 process-column"
    //           data-aos="fade-up"
    //         >
    //           <div className="process-item process-item-two text-center mb-35">
    //             <div className="count-box">
    //               <div className="process-count">02</div>
    //               <div className="icon">
    //                 <i className="flaticon-align" />
    //               </div>
    //             </div>
    //             <div className="content text-center">
    //               <h5>Compare Your Selection</h5>
    //             </div>
    //           </div>
    //         </div> */}
    //         <div
    //           className="col-lg-3 col-md-6 process-column"
    //           data-aos="fade-up"
    //         >
    //           <div className="process-item process-item-two text-center mb-35">
    //             <div className="count-box">
    //               <div className="process-count">02</div>
    //               <div className="icon">
    //                 <i className="flaticon-excavator-2" />
    //               </div>
    //             </div>
    //             <div className="content text-center">
    //               <h5>Reserve The Equipment</h5>
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="col-lg-3 col-md-6 process-column"
    //           data-aos="fade-up"
    //         >
    //           <div className="process-item process-item-two text-center mb-35">
    //             <div className="count-box">
    //               <div className="process-count">03</div>
    //               <div className="icon">
    //                 <i className="flaticon-presentation" />
    //               </div>
    //             </div>
    //             <div className="content text-center">
    //               <h5>Get The Equipment</h5>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="features-area pt-120 pb-90 dark-blue">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-lg-7" data-aos="fade-up">
    //           <div className="section-title section-title-white text-center mb-70">
    //             <span className="sub-title">Awesome Features</span>
    //             <h2>Top Rental Products & Services</h2>
    //             <p>
    //               Explore our wide range of rental products, offering quality,
    //               affordability, and convenience for all your needs.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
    //           <div className="features-item features-item-two mb-40 text-center mb-30">
    //             <div className="icon">
    //               <i className="flaticon-excavator-1" />
    //             </div>
    //             <div className="content">
    //               <h4>Wide Variety</h4>
    //               <p>
    //                 From tools and vehicles to party supplies, find everything
    //                 you need for rent.
    //               </p>
    //               <a
    //                 href="rental-list.html"
    //                 className="btn-link"
    //                 target="_self"
    //                 title="Go next"
    //               >
    //                 <i className="far fa-long-arrow-right" />
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
    //           <div className="features-item features-item-two mb-40 text-center active-item mb-30">
    //             <div className="icon">
    //               <i className="flaticon-worker" />
    //             </div>
    //             <div className="content">
    //               <h4>Fast & Reliable</h4>
    //               <p>
    //                 Easy booking and well-maintained rental items for your
    //                 convenience.
    //               </p>
    //               <a
    //                 href="rental-list.html"
    //                 className="btn-link"
    //                 target="_self"
    //                 title="Go next"
    //               >
    //                 <i className="far fa-long-arrow-right" />
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
    //           <div className="features-item features-item-two mb-40 text-center mb-30">
    //             <div className="icon">
    //               <i className="flaticon-salary" />
    //             </div>
    //             <div className="content">
    //               <h4>Affordable Pricing</h4>
    //               <p>
    //                 Flexible rental plans at budget-friendly rates to suit your
    //                 needs.
    //               </p>
    //               <a
    //                 href="rental-list.html"
    //                 className="btn-link"
    //                 target="_self"
    //                 title="Go next"
    //               >
    //                 <i className="far fa-long-arrow-right" />
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section
    //     className="counter-area bg-with-overlay bg-with-overlay-white bg_cover pt-130 pb-90"
    //     style={{ backgroundImage: "url(assets/images/bg/counter-bg-2.jpg)" }}
    //   >
    //     <div className="container">
    //       <div className="row d-flex justify-content-center">
    //         <div
    //           className="col-lg-3 col-sm-6 counter-column"
    //           data-aos="fade-up"
    //         >
    //           <div className="counter-item counter-item-two mb-40 text-center">
    //             <div className="icon">
    //               <i className="flaticon-excavator-1" />
    //             </div>
    //             <div className="content">
    //               <h2>
    //                 <span className="count">2500</span>+
    //               </h2>
    //               <h5>Equipment</h5>
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="col-lg-3 col-sm-6 counter-column"
    //           data-aos="fade-up"
    //         >
    //           <div className="counter-item counter-item-two mb-40 text-center">
    //             <div className="icon">
    //               <i className="flaticon-placeholder" />
    //             </div>
    //             <div className="content">
    //               <h2>
    //                 <span className="count">175</span>+
    //               </h2>
    //               <h5>Coverage Area</h5>
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="col-lg-3 col-sm-6 counter-column"
    //           data-aos="fade-up"
    //         >
    //           <div className="counter-item counter-item-two mb-40 text-center">
    //             <div className="icon">
    //               <i className="flaticon-worker-1" />
    //             </div>
    //             <div className="content">
    //               <h2>
    //                 <span className="count">1580</span>
    //               </h2>
    //               <h5>Company Staffs</h5>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="testimonial-area testimonial-2 dark-blue pt-120 pb-90">
    //     <div className="container">
    //       <div className="row align-items-end">
    //         <div className="col-lg-6" data-aos="fade-up">
    //           <div className="section-title section-title-white mb-50">
    //             <span className="sub-title">Client Testimonials</span>
    //             <h2>What Our Happy Clients Say</h2>
    //           </div>
    //         </div>
    //         <div className="col-lg-6" data-aos="fade-up">
    //           <div className="button float-lg-right mb-60">
    //             <a
    //               href="testimonials.html"
    //               className="main-btn main-btn-primary"
    //               target="_self"
    //               title="See all feedback"
    //             >
    //               View All Testimonials
    //             </a>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="row testimonial-slider-one mb-30">
    //         {[
    //           {
    //             name: "Leslie Alexander",
    //             position: "Customer",
    //             image: "assets/images/testimonial/testimonial-thumb-1.jpg",
    //             feedback:
    //               "Excellent service! The entire process was smooth and hassle-free. Highly recommended!",
    //           },
    //           {
    //             name: "Tomas Williams",
    //             position: "Customer",
    //             image: "assets/images/testimonial/testimonial-thumb-1.jpg",
    //             feedback:
    //               "Great experience! The staff was professional, and the rental equipment was in top condition.",
    //           },
    //           {
    //             name: "Jeshica Mochuya",
    //             position: "Customer",
    //             image: "assets/images/testimonial/testimonial-thumb-1.jpg",
    //             feedback:
    //               "Superb quality and affordable rates. I will definitely use their service again!",
    //           },
    //         ].map((testimonial, index) => (
    //           <div className="col-lg-4" data-aos="fade-up" key={index}>
    //             <div className="testimonial-item testimonial-item-two">
    //               <div className="testimonial-content">
    //                 <div className="quote">
    //                   <i className="flaticon-left-quote" />
    //                 </div>
    //                 <p>{testimonial.feedback}</p>
    //               </div>
    //               <div className="testimonial-thumb-title d-flex align-items-center">
    //                 <div className="thumb">
    //                   <img src={testimonial.image} alt={testimonial.name} />
    //                 </div>
    //                 <div className="title">
    //                   <h4>{testimonial.name}</h4>
    //                   <span className="position">{testimonial.position}</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   {/* <section className="products-area pt-120 pb-85">
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-lg-7" data-aos="fade-up">
    //           <div className="section-title text-center mb-55">
    //             <span className="sub-title">Best Quality Products</span>
    //             <h2>Featured Sale Products</h2>
    //             <p>
    //               Amet minim mollit non deserunt ullamco est sit aliqua dolor do
    //               amet sint. Velit officia consequat duis enim velit mollit
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
    //           <div className="product-item product-item-one text-center mb-40">
    //             <div className="product-img">
    //               <a href="shop-details.html" target="_self" title="Product">
    //                 <img
    //                   src="assets/images/product/product-1.jpg"
    //                   alt="product"
    //                 />
    //               </a>
    //             </div>
    //             <div className="product-info">
    //               <h3 className="title">
    //                 <a href="shop-details.html" target="_self" title="Product">
    //                   Drill Screwdriver Brandix HMX8296 300 Watts
    //                 </a>
    //               </h3>
    //               <ul className="rating">
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <span>
    //                     <a href="404-error.html" target="_self" title="Rating">
    //                       5.00 (20 Rating)
    //                     </a>
    //                   </span>
    //                 </li>
    //               </ul>
    //               <a
    //                 href="cart.html"
    //                 target="_self"
    //                 title="Add to cart"
    //                 className="main-btn"
    //               >
    //                 Add to Cart
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
    //           <div className="product-item product-item-one text-center mb-40">
    //             <div className="product-img">
    //               <a href="shop-details.html" target="_self" title="Product">
    //                 <img
    //                   src="assets/images/product/product-2.jpg"
    //                   alt="product"
    //                 />
    //               </a>
    //             </div>
    //             <div className="product-info">
    //               <h3 className="title">
    //                 <a href="shop-details.html" target="_self" title="Product">
    //                   Brandix Router Power Tool 2017ERXPK
    //                 </a>
    //               </h3>
    //               <ul className="rating">
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <span>
    //                     <a href="404-error.html" target="_self" title="Rating">
    //                       5.00 (20 Rating)
    //                     </a>
    //                   </span>
    //                 </li>
    //               </ul>
    //               <a
    //                 href="cart.html"
    //                 target="_self"
    //                 title="Add to cart"
    //                 className="main-btn"
    //               >
    //                 Add to Cart
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
    //           <div className="product-item product-item-one text-center mb-40">
    //             <div className="product-img">
    //               <a href="shop-details.html" target="_self" title="Product">
    //                 <img
    //                   src="assets/images/product/product-3.jpg"
    //                   alt="product"
    //                 />
    //               </a>
    //             </div>
    //             <div className="product-info">
    //               <h3 className="title">
    //                 <a href="shop-details.html" target="_self" title="Product">
    //                   Undefined Tool IRadix D05SY2700 Watts
    //                 </a>
    //               </h3>
    //               <ul className="rating">
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <span>
    //                     <a href="404-error.html" target="_self" title="Rating">
    //                       5.00 (20 Rating)
    //                     </a>
    //                   </span>
    //                 </li>
    //               </ul>
    //               <a
    //                 href="cart.html"
    //                 target="_self"
    //                 title="Add to cart"
    //                 className="main-btn"
    //               >
    //                 Add to Cart
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
    //           <div className="product-item product-item-one text-center mb-40">
    //             <div className="product-img">
    //               <a href="shop-details.html" target="_self" title="Product">
    //                 <img
    //                   src="assets/images/product/product-4.jpg"
    //                   alt="product"
    //                 />
    //               </a>
    //             </div>
    //             <div className="product-info">
    //               <h3 className="title">
    //                 <a href="shop-details.html" target="_self" title="Product">
    //                   Electric Planer Brandix HL5 87540H 400 Watts
    //                 </a>
    //               </h3>
    //               <ul className="rating">
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star" />
    //                 </li>
    //                 <li>
    //                   <span>
    //                     <a href="404-error.html" target="_self" title="Rating">
    //                       5.00 (20 Rating)
    //                     </a>
    //                   </span>
    //                 </li>
    //               </ul>
    //               <a
    //                 href="cart.html"
    //                 target="_self"
    //                 title="Add to cart"
    //                 className="main-btn"
    //               >
    //                 Add to Cart
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section> */}
    //   {/* <section className="blog-area pb-130">
    //   <div className="container">
    //     <div className="row align-items-end">
    //       <div className="col-lg-6" data-aos="fade-up">
    //         <div className="section-title mb-60">
    //           <span className="sub-title">Latest News</span>
    //           <h2>Latest News &amp; Updates</h2>
    //         </div>
    //       </div>
    //       <div className="col-lg-6" data-aos="fade-up">
    //         <div className="blog-arrows-one mb-60" />
    //       </div>
    //     </div>
    //     <div className="row blog-slider-one">
    //       <div className="col-lg-4" data-aos="fade-up">
    //         <div className="blog-post-item blog-post-item-two">
    //           <div className="post-thumbnail">
    //             <a href="blog-details.html" target="_self" title="Blog">
    //               <img src="assets/images/blog/blog-4.jpg" alt="Blog" />
    //             </a>
    //             <a
    //               href="blog-details.html"
    //               className="date"
    //               target="_self"
    //               title="Date"
    //             >
    //               16 <span>DEC</span>
    //             </a>
    //           </div>
    //           <div className="entry-content">
    //             <h3 className="title">
    //               <a
    //                 href="blog-details.html"
    //                 target="_self"
    //                 title="Blog title"
    //               >
    //                 Aenean commodigula wall Wdolor sale
    //               </a>
    //             </h3>
    //             <div className="post-meta">
    //               <ul>
    //                 <li>
    //                   <span>
    //                     <i className="fas fa-user" />
    //                     Post by <a href="404-error.html">Admin</a>
    //                   </span>
    //                 </li>
    //                 <li>
    //                   <span>
    //                     <i className="fas fa-tag" />
    //                     <a href="404-error.html">Constrution Worker</a>
    //                   </span>
    //                 </li>
    //               </ul>
    //             </div>
    //             <a href="blog-details.html" className="main-btn">
    //               Read more
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4" data-aos="fade-up">
    //         <div className="blog-post-item blog-post-item-two">
    //           <div className="post-thumbnail">
    //             <a href="blog-details.html" target="_self" title="Blog">
    //               <img src="assets/images/blog/blog-5.jpg" alt="Blog" />
    //             </a>
    //             <a
    //               href="blog-details.html"
    //               className="date"
    //               target="_self"
    //               title="Date"
    //             >
    //               16 <span>DEC</span>
    //             </a>
    //           </div>
    //           <div className="entry-content">
    //             <h3 className="title">
    //               <a
    //                 href="blog-details.html"
    //                 target="_self"
    //                 title="Blog title"
    //               >
    //                 Curabitur ulamcorper eget Etiam rhoncus.
    //               </a>
    //             </h3>
    //             <div className="post-meta">
    //               <ul>
    //                 <li>
    //                   <span>
    //                     <i className="fas fa-user" />
    //                     Post by <a href="404-error.html">Admin</a>
    //                   </span>
    //                 </li>
    //                 <li>
    //                   <span>
    //                     <i className="fas fa-tag" />
    //                     <a href="404-error.html">Constrution Worker</a>
    //                   </span>
    //                 </li>
    //               </ul>
    //             </div>
    //             <a href="blog-details.html" className="main-btn">
    //               Read more
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4" data-aos="fade-up">
    //         <div className="blog-post-item blog-post-item-two">
    //           <div className="post-thumbnail">
    //             <a href="blog-details.html" target="_self" title="Blog">
    //               <img src="assets/images/blog/blog-6.jpg" alt="Blog" />
    //             </a>
    //             <a
    //               href="blog-details.html"
    //               className="date"
    //               target="_self"
    //               title="Date"
    //             >
    //               16 <span>DEC</span>
    //             </a>
    //           </div>
    //           <div className="entry-content">
    //             <h3 className="title">
    //               <a
    //                 href="blog-details.html"
    //                 target="_self"
    //                 title="Blog title"
    //               >
    //                 Donec vitae sapien bero venenatis faucibus
    //               </a>
    //             </h3>
    //             <div className="post-meta">
    //               <ul>
    //                 <li>
    //                   <span>
    //                     <i className="fas fa-user" />
    //                     Post by <a href="404-error.html">Admin</a>
    //                   </span>
    //                 </li>
    //                 <li>
    //                   <span>
    //                     <i className="fas fa-tag" />
    //                     <a href="404-error.html">Constrution Worker</a>
    //                   </span>
    //                 </li>
    //               </ul>
    //             </div>
    //             <a href="blog-details.html" className="main-btn">
    //               Read more
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4" data-aos="fade-up">
    //         <div className="blog-post-item blog-post-item-two">
    //           <div className="post-thumbnail">
    //             <a href="blog-details.html" target="_self" title="Blog">
    //               <img src="assets/images/blog/blog-4.jpg" alt="Blog" />
    //             </a>
    //             <a
    //               href="blog-details.html"
    //               className="date"
    //               target="_self"
    //               title="Date"
    //             >
    //               16 <span>DEC</span>
    //             </a>
    //           </div>
    //           <div className="entry-content">
    //             <h3 className="title">
    //               <a
    //                 href="blog-details.html"
    //                 target="_self"
    //                 title="Blog title"
    //               >
    //                 Curabitur ulamcorper eget Etiam rhoncus.
    //               </a>
    //             </h3>
    //             <div className="post-meta">
    //               <ul>
    //                 <li>
    //                   <span>
    //                     <i className="fas fa-user" />
    //                     Post by <a href="404-error.html">Admin</a>
    //                   </span>
    //                 </li>
    //                 <li>
    //                   <span>
    //                     <i className="fas fa-tag" />
    //                     <a href="404-error.html">Constrution Worker</a>
    //                   </span>
    //                 </li>
    //               </ul>
    //             </div>
    //             <a href="blog-details.html" className="main-btn">
    //               Read more
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section> */}
    //   <Footer />
    //   <div className="back-to-top">
    //     <i className="fas fa-angle-up" />
    //   </div>
    // </>
  );
}

export default Home;
