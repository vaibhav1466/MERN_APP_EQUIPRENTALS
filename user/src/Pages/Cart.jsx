import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Cart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentMode, setPaymentMode] = useState("");
  const [bookingDates, setBookingDates] = useState({
    purchaseDate: null,
    returnDate: null,
    totalDays: 0,
  });
  const navigate = useNavigate();

  // Calculate totals
  const rentalTotal = data.reduce(
    (total, item) => total + item.total_amount,
    0
  );
  const depositTotal = data.reduce(
    (total, item) => total + (item.deposit || 0),
    0
  );
  const totalPayment = rentalTotal * bookingDates.totalDays + depositTotal;

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://equiprentals-backend.onrender.com/user/getCartItems"
      );

      setData(response.data.cart);

      console.log(response.data.cart);
      
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleRemove(id) {
    try {
      await axios.post(`https://equiprentals-backend.onrender.com/user/removeCartItem`, {
        p_id: id,
      });

      toast.success("Item removed from cart", {
        onClose: () => fetchData(),
      });
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  }

  const handleUpdateQty = async (id, newQty) => {
    console.log(id, newQty);

    if (newQty < 1) return; // Prevent negative or zero quantity

    try {
      setLoading(true);
      await axios.post("https://equiprentals-backend.onrender.com/user/addtocart", {
        p_id: id,
        p_qty: newQty,
      });

      fetchData();
    } catch (error) {
      setLoading(false);
      toast.error("Failed to update quantity");
      console.error("Error updating quantity:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
    fetchData();
  }, []);

  const handlePaymentChange = (mode) => {
    setPaymentMode(mode);
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const displayRazorpay = async (datas) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Please check network connection!");
      return;
    }

    if (!bookingDates.purchaseDate || !bookingDates.returnDate) {
      toast.error("Please select a valid date range!");
      return;
    }

    try {
      const orderResponse = await axios.post(
        "https://equiprentals-backend.onrender.com/user/generateOrderId",
        { totalPrice: totalPayment }
      );

      if (!orderResponse.data?.order) {
        toast.error("Failed to get order details. Please try again.");
        return;
      }

      const {
        amount: orderAmount,
        id: order_id,
        currency,
      } = orderResponse.data.order;

      const options = {
        key: "rzp_test_VQhEfe2NCXbbwI",
        amount: orderAmount.toString(),
        currency: currency,
        name: "Rent it All",
        order_id: order_id,
        handler: async function (response) {
          try {
            const verifyResponse = await axios.post(
              "https://equiprentals-backend.onrender.com/user/bookProducts",
              {
                total_amount: totalPayment,
                payment_mode: "Razorpay",
                start_date: bookingDates.purchaseDate,
                end_date: bookingDates.returnDate,
                vendor_id: datas[0].vendor_id,
                deposit_amount: depositTotal,
              }
            );

            toast.success(verifyResponse.data.message, {
              onClose: () => navigate("/"),
            });
          } catch (error) {
            toast.error(
              error.response?.data?.message || "Payment verification failed"
            );
          }
        },
        prefill: {
          name: "Rent it All",
          email: "rentitall@email.com",
          contact: "9856748596",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      toast.error(error.response?.data?.message || "Error initiating payment");
    }
  };

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const calculateTotalDays = (start, end) => {
    if (!start || !end) return 0;
    const startDate = new Date(start);
    const endDate = new Date(end);
    const differenceInTime = endDate - startDate;
    return differenceInTime >= 0 ? differenceInTime / (1000 * 60 * 60 * 24) : 0;
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;

    setBookingDates((prev) => {
      const newDates = {
        ...prev,
        [name]: value,
        ...(name === "purchaseDate" && prev.returnDate < value
          ? { returnDate: value }
          : {}),
      };

      // Calculate the total days based on the updated state
      return {
        ...newDates,
        totalDays: calculateTotalDays(
          newDates.purchaseDate,
          newDates.returnDate
        ),
      };
    });
  };

  const placeOrder = async (datas) => {
    if (!bookingDates.purchaseDate || !bookingDates.returnDate) {
      toast.error("Please select a valid date range!");
      return;
    }

    try {
      const verifyResponse = await axios.post(
        "https://equiprentals-backend.onrender.com/user/bookProducts",
        {
          total_amount: totalPayment,
          payment_mode: "Cash",
          start_date: bookingDates.purchaseDate,
          end_date: bookingDates.returnDate,
          vendor_id: datas[0].vendor_id,
          deposit_amount: depositTotal,
        }
      );

      toast.success(verifyResponse.data.message, {
        onClose: () => navigate("/"),
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Order placement failed");
    }
  };

  return (
    <>
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
                  <h1 data-aos="fade-up">Cart</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <div className="preloader">
          <div className="lds-ellipsis">
            <span />
            <span />
            <span />
          </div>
        </div>
      ) : data.length > 0 ? (
        <>
          <section className="cart-area-section pt-5 ">
            <div className="container">
              <div className="equipments-search-filter mb-60">
                <div className="search-filter-form">
                  <div className="row d-flex justify-content-center">
                    {/* Start Date Input */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="form_group">
                        <label className="text-white">Purchase Date</label>
                        <input
                          type="date"
                          name="purchaseDate"
                          className="form_control"
                          min={today}
                          value={bookingDates.purchaseDate}
                          onChange={handleDateChange}
                        />
                      </div>
                    </div>

                    {/* End Date Input */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="form_group">
                        <label className="text-white">Return Date</label>
                        <input
                          type="date"
                          name="returnDate"
                          className="form_control"
                          min={bookingDates.purchaseDate || today}
                          value={bookingDates.returnDate}
                          onChange={handleDateChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <ul className="total-item-info">
                    <li>
                      <strong>Total Items:</strong>{" "}
                      <strong className="cart-item-view">{data.length}</strong>
                    </li>
                    <li>
                      <strong>Total Deposit:</strong>{" "}
                      <strong>₹{depositTotal.toFixed(2)}</strong>
                    </li>
                    <li>
                      <strong>Cart Total :</strong>{" "}
                      <strong className="cart-total-view">
                        ₹{" "}
                        {data.reduce(
                          (total, item) => total + item.total_amount,
                          0
                        )}{" "}
                      </strong>
                    </li>
                  </ul>

                  <div className="table-outer table-responsive">
                    <table className="cart-table">
                      <thead className="cart-header">
                        <tr>
                          <th className="prod-column">Products</th>
                          <th className="hide-column" />
                          <th>Quantity</th>
                          <th className="price">Daily Price</th>
                          <th>Deposit</th>
                          <th>Daily Total</th>
                          <th className="remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr>
                            <>
                              <td colSpan={2} className="prod-column">
                                <div className="column-box">
                                  <div className="title pl-0">
                                    <Link to={"#"} target="_self" title="link">
                                      <h3 className="prod-title">
                                        {item.p_name}
                                      </h3>
                                    </Link>
                                  </div>
                                </div>
                              </td>
                              <td className="qty">
                                <div className="quantity-input">
                                  <button
                                    className="quantity-down"
                                    onClick={() =>
                                      handleUpdateQty(item.p_id, item.p_qty - 1)
                                    }
                                  >
                                    <i className="fa fa-minus" />
                                  </button>
                                  <input
                                    type="text"
                                    value={item.p_qty}
                                    name="quantity"
                                    disabled
                                  />
                                  <button
                                    className="quantity-up"
                                    onClick={() =>
                                      handleUpdateQty(item.p_id, item.p_qty + 1)
                                    }
                                  >
                                    <i className="fa fa-plus" />
                                  </button>
                                </div>
                              </td>
                              <td className="price cart_price">
                                ₹ <span>{item.p_price}</span>{" "}
                              </td>{" "}
                              <td className="price">
                                ₹{(item.deposit || 0).toFixed(2)}
                              </td>
                              <td className="sub-total">
                                ₹ <span>{item.total_amount}</span>{" "}
                              </td>
                              <td>
                                <div className="remove">
                                  <div className="checkbox">
                                    <button
                                      className="fa fa-times item-remove"
                                      onClick={() => handleRemove(item.p_id)}
                                    ></button>
                                  </div>
                                </div>
                              </td>
                            </>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="checkout-area-section">
            <form>
              <div className="bottom">
                <div className="container">
                  <div className="col-lg-12" data-aos="fade-up">
                    <div className="cart-total">
                      <div className="shop-title-box">
                        <div className="cost-breakdown">
                          <div className="breakdown-row">
                            <span>Daily Rental:</span>
                            <span>
                              ₹{rentalTotal.toFixed(2)} ×{" "}
                              {bookingDates.totalDays} days
                            </span>
                            <span>
                              ₹
                              {(rentalTotal * bookingDates.totalDays).toFixed(
                                2
                              )}
                            </span>
                          </div>
                          <div className="breakdown-row">
                            <span>Deposit:</span>
                            <span></span>
                            <span>₹{depositTotal.toFixed(2)}</span>
                          </div>
                          <div className="breakdown-row total-row">
                            <span>Total Payment:</span>
                            <span></span>
                            <span>₹{totalPayment.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="payment-options mb-4">
                        <h4>Pay Via</h4>
                        <div className="accordion" id="paymentAccordin">
                          <div className="accordion-item">
                            <div className="accordion-header">
                              <input
                                type="radio"
                                id="cashDeliver"
                                name="radio"
                                className="collapsed"
                                data-toggle="collapse"
                                data-target="#cash-on-deliver"
                                onChange={() => handlePaymentChange("COD")}
                                checked={paymentMode === "COD"}
                              />
                              <label htmlFor="cashDeliver">
                                Cash on Delivery
                              </label>
                            </div>
                            <div
                              id="cash-on-deliver"
                              className="accordion-collapse collapse"
                              data-parent="#paymentAccordin"
                            >
                              <div className="accordion-body">
                                <p>
                                  Pay for your order in cash when it is
                                  delivered to your doorstep. Please ensure you
                                  have the exact amount ready to avoid any
                                  inconvenience.
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
                                onChange={() => handlePaymentChange("online")}
                                checked={paymentMode === "online"}
                              />
                              <label htmlFor="paypal">Online</label>
                            </div>
                            <div
                              id="via-paypal"
                              className="accordion-collapse collapse"
                              data-parent="#paymentAccordin"
                            >
                              <div className="accordion-body">
                                <p>
                                  Securely pay online using your preferred
                                  payment method, including credit/debit cards,
                                  UPI, and net banking. Transactions are
                                  encrypted for safety.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="placeorder-button">
                          <button
                            className="main-btn"
                            type="button"
                            onClick={() =>
                              paymentMode === "COD"
                                ? placeOrder(
                                    data,
                                    bookingDates.totalDays *
                                      data.reduce(
                                        (total, item) =>
                                          total + item.total_amount,
                                        0
                                      )
                                  )
                                : displayRazorpay(
                                    data,
                                    bookingDates.totalDays *
                                      data.reduce(
                                        (total, item) =>
                                          total + item.total_amount,
                                        0
                                      )
                                  )
                            }
                          >
                            Place Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </>
      ) : (
        <h3 className="text-center p-5 ">Cart is empty</h3>
      )}
      <Footer />
      <div className="back-to-top">
        <i className="fas fa-angle-up" />
      </div>
    </>
  );
}

export default Cart;
