import React, { useEffect, useState } from "react";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import axios from "axios";

function ViewPaymentHistory() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://equiprentals-backend.onrender.com/user/getPaymentHistory"
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
    fetchData();
  }, []);

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
                  <h1 data-aos="fade-up">Payment History</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Payment History</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cart-area-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="table-outer table-responsive">
                <table className="cart-table">
                  <thead className="cart-header">
                    <tr>
                      <th className="prod-column text-center">Tansaction ID</th>
                      <th className="prod-column text-center">Booking ID</th>
                      <th className="prod-column text-center">Amount</th>
                      <th className="qty text-center">Status</th>
                      <th className="price text-center">Date & Time</th>
                      <th className=" text-center">Payment Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((item, index) => (
                        <tr key={index}>
                          <td className="prod-column text-center">
                            {item.transaction_id}
                          </td>
                          <td className="prod-column text-center">
                            {item.booking_id}
                          </td>
                          <td className="qty text-center">₹ {item.amount}</td>
                          <td className="price text-center">
                            {item.payment_status.charAt(0).toUpperCase() +
                              item.payment_status.slice(1)}
                          </td>
                          <td className="text-center">
                            {new Date(item.datetime).toLocaleString()}
                          </td>
                          <td className="remove text-center">
                            {item.booking_details?.payment_mode}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          {loading ? "Loading..." : "No payment history found."}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
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

export default ViewPaymentHistory;
