import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer";

function ViewVendorPaymentHistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://equiprentals-backend.onrender.com/vendor/getVendorPaymentHistory"
      );
      // The API returns data inside response.data.data
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching payment history:", error);
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
                      <th className="text-center">Transaction ID</th>
                      <th className="text-center">Booking ID</th>
                      <th className="text-center">Amount</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Date & Time</th>
                      <th className="text-center">Payment Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((item, index) => (
                        <tr key={index}>
                          <td className="text-center">
                            {item.payment_details?.transaction_id}
                          </td>
                          <td className="text-center">{item.booking_id}</td>
                          <td className="text-center">
                            ₹ {item.payment_details?.amount}
                          </td>
                          <td className="text-center">
                            {item.payment_details?.payment_status.charAt(0).toUpperCase() +
                              item.payment_details?.payment_status.slice(1)}
                          </td>
                          <td className="text-center">
                            {new Date(item.payment_details?.datetime).toLocaleString()}
                          </td>
                          <td className="text-center">
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

export default ViewVendorPaymentHistory;
