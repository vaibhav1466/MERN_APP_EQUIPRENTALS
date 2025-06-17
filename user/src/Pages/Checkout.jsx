import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

function Checkout() {
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
                  <h1 data-aos="fade-up">Checkout</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout-area-section pt-130">
        <form>
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
                data-aos="fade-up"
              >
                <div className="form shipping-info">
                  <div className="shop-title-box">
                    <h3>Shipping Address</h3>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form_group">
                        <label>First Name *</label>
                        <input
                          type="text"
                          className="form_control"
                          name="shpping_fname"
                          defaultValue="John"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form_group">
                        <label>Last Name *</label>
                        <input
                          type="text"
                          className="form_control"
                          name="shpping_lname"
                          defaultValue="Doe"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form_group">
                        <label>Address *</label>
                        <input
                          type="text"
                          className="form_control"
                          name="shpping_address"
                          defaultValue="Melbourne, Australia"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form_group">
                        <label>Town / City *</label>
                        <input
                          type="text"
                          className="form_control"
                          name="shpping_city"
                          defaultValue="Melbourne"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form_group">
                        <label>Contact Email *</label>
                        <input
                          type="text"
                          className="form_control"
                          name="shpping_email"
                          defaultValue="geniustest11@gmail.com"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form_group">
                        <label>Phone *</label>
                        <input
                          type="text"
                          className="form_control"
                          name="shpping_number"
                          defaultValue={3636237}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="container">
              <div className="row">
                {/* <div className="col-12 mb-5" data-aos="fade-up">
                  <div className="table table-one table-responsive">
                    <div className="shop-title-box">
                      <h3>Shipping Methods</h3>
                    </div>
                    <table className="cart-table shipping-method">
                      <thead className="cart-header">
                        <tr>
                          <th>#</th>
                          <th>Method</th>
                          <th className="price">Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="radio"
                              defaultChecked
                              name="shipping_charge"
                              className="shipping-charge"
                              defaultValue={6}
                            />
                          </td>
                          <td>
                            <p className="mb-2">
                              <strong>Same Day Shipping</strong>
                            </p>
                            <p>
                              <small>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </small>
                            </p>
                          </td>
                          <td>
                            $ <span>10.00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
               
                <div
                  className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
                  data-aos="fade-up"
                >
                  <div className="cart-total">
                    <div className="shop-title-box">
                      <h3>Order Total</h3>
                    </div>
                    <div>
                      <ul className="cart-total-table">
                        <li className="clearfix">
                          <span className="col col-title">Cart Total</span>
                          <span className="col">
                            $<span className="subtotal">60</span>
                          </span>
                        </li>
                        <li className="clearfix">
                          <span className="col col-title">
                            Discount
                            <span className="text-success">
                              (<i className="fas fa-minus" />)
                            </span>
                          </span>
                          <span className="col">
                            $<span>0</span>
                          </span>
                        </li>
                        <li className="clearfix">
                          <span className="col col-title">Subtotal</span>
                          <span className="col">
                            $
                            <span className="subtotal" id="subtotal">
                              60
                            </span>
                          </span>
                        </li>
                        <li className="clearfix">
                          <span className="col col-title">
                            Shipping Charge
                            <span className="text-danger">
                              (<i className="fas fa-plus" />)
                            </span>
                          </span>
                          <span className="col">
                            $<span className="shipping">10</span>
                          </span>
                        </li>
                        <li className="clearfix">
                          <span className="col col-title">
                            Tax (5.00%)
                            <span className="text-danger">
                              (<i className="fas fa-plus" />)
                            </span>
                          </span>
                          <span className="col">
                            $<span id="tax">3</span>
                          </span>
                        </li>
                        <li className="clearfix">
                          <span className="col col-title">Order Total</span>
                          <span className="col">
                            $<span className="grandTotal">73</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="payment-options">
                      <h4>Pay Via</h4>
                      <div className="accordion" id="paymentAccordin">
                        <div className="accordion-item">
                          <div className="accordion-header">
                            <input
                              type="radio"
                              defaultChecked
                              id="backTransfer"
                              name="radio"
                              className="collapsed"
                              data-toggle="collapse"
                              data-target="#bank-transfer"
                            />
                            <label htmlFor="backTransfer">
                              Create an account?
                            </label>
                          </div>
                          <div
                            id="bank-transfer"
                            className="accordion-collapse collapse show"
                            data-parent="#paymentAccordin"
                          >
                            <div className="accordion-body">
                              <p>
                                Lorem ipsum dolor sit amet, conse ctetur adip
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <div className="accordion-header">
                            <input
                              type="radio"
                              id="cashDeliver"
                              name="radio"
                              className="collapsed"
                              data-toggle="collapse"
                              data-target="#cash-on-deliver"
                            />
                            <label htmlFor="cashDeliver">Cheque Payment</label>
                          </div>
                          <div
                            id="cash-on-deliver"
                            className="accordion-collapse collapse"
                            data-parent="#paymentAccordin"
                          >
                            <div className="accordion-body">
                              <p>
                                Lorem ipsum dolor sit amet, conse ctetur adip
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <div className="accordion-header">
                            <input
                              type="radio"
                              id="paypal"
                              name="radio"
                              className="collapsed"
                              data-toggle="collapse"
                              data-target="#via-paypal"
                            />
                            <label htmlFor="paypal">Paypal</label>
                          </div>
                          <div
                            id="via-paypal"
                            className="accordion-collapse collapse"
                            data-parent="#paymentAccordin"
                          >
                            <div className="accordion-body">
                              <p>
                                Lorem ipsum dolor sit amet, conse ctetur adip
                                elit, sed do eiusmod tempor incididunt ut labore
                                et dolore
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="placeorder-button">
                        <button className="main-btn">Place Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer />
      <div className="back-to-top">
        <i className="fas fa-angle-up" />
      </div>
    </>
  );
}

export default Checkout;
