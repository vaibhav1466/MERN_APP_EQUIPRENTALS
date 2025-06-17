import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function ViewBookingHistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://equiprentals-backend.onrender.com/vendor/getVendorBookingHistory"
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching booking history:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
    fetchData();
  }, []);
  const openCommentPopup = (cart_id, booking_id, p_id, vendor_id) => {
    Swal.fire({
      title: "Add Return Comment",
      input: "textarea",
      inputPlaceholder: "Enter your return comment here...",
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value) {
          return "Please enter a comment!";
        }
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        handleReturnComment(cart_id, booking_id, p_id, result.value);
      }
    });
  };

  const handleReturnComment = async (
    cart_id,
    booking_id,
    p_id,
    returnComments
  ) => {
    try {
      const response = await axios.post(
        `https://equiprentals-backend.onrender.com/vendor/addReturnComment`,
        {
          cart_id,
          booking_id,
          p_id,
          returnComments,
        }
      );
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error adding return comment:", error);
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
                  <h1 data-aos="fade-up">Booking History</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Booking History</li>
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
                      <th className="text-center">Product</th>
                      <th className="text-center">Client Name</th>
                      <th className="text-center">Client Phone</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Purchase Date</th>
                      <th className="text-center">Return Date</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Return Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((item, index) => (
                        <tr key={index}>
                          <td className="text-center">
                            {item.product_details.p_name}
                          </td>
                          <td className="text-center">
                            {item.user_details.name}
                          </td>
                          <td className="text-center">
                            {item.user_details.phone}
                          </td>
                          <td className="text-center">{item.p_qty ?? "-"}</td>
                          <td className="text-center">
                            ₹ {item.product_details.p_price}
                          </td>
                          <td className="text-center">
                            {new Date(
                              item.booking_details.start_date
                            ).toLocaleDateString()}
                          </td>
                          <td className="text-center">
                            {new Date(
                              item.booking_details.end_date
                            ).toLocaleDateString()}
                          </td>
                          <td className="text-center">
                            {item.payment_details.payment_status === "success"
                              ? "Rented"
                              : "Returned"}
                          </td>
                          
                          <td className="text-center">
                            {item.return_comment ? (
                              item.return_comment.returnComments
                            ) : new Date() >
                              new Date(item.booking_details.end_date) ? (
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() =>
                                  openCommentPopup(
                                    item._id,
                                    item.booking_id,
                                    item.product_details._id
                                  )
                                }
                              >
                                Add Condition
                              </button>
                            ) : (
                              "-"
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9" className="text-center">
                          {loading ? "Loading..." : "No Booking History Found!"}
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

export default ViewBookingHistory;
