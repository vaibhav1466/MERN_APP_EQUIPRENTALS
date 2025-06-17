import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { createRoot } from "react-dom/client";
import withReactContent from "sweetalert2-react-content";
import { Rating } from "@mui/material";

function BookingHistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const MySwal = withReactContent(Swal);
  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://equiprentals-backend.onrender.com/user/getBookingHistory"
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

  const addProductFeedback = async (
    cart_id,
    booking_id,
    p_id,
    vendor_id,
    rating,
    comment
  ) => {
    try {
      const response = await axios.post(
        `https://equiprentals-backend.onrender.com/user/addProductFeedback`,
        {
          cart_id,
          booking_id,
          p_id,
          vendor_id,
          rating,
          comment,
        }
      );
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error adding review:", error);
    }
  };

  const openFeedbackPopup = (cart_id, booking_id, p_id, vendor_id) => {
    let ratingValue = 0;

    MySwal.fire({
      title: "Add Feedback",
      html: `
        <div id="rating-container" style="display:flex; justify-content:center; margin-bottom:10px;"></div>
        <div class="d-flex justify-content-center">
          <textarea id="comment" class="swal2-textarea" placeholder="Write your review"></textarea>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Submit",
      willOpen: () => {
        const container = document.getElementById("rating-container");
        if (container) {
          const root = createRoot(container);
          root.render(
            <Rating
              name="rating"
              size="large"
              precision={0.5}
              onChange={(event, newValue) => {
                ratingValue = newValue;
              }}
            />
          );
        }
      },
      preConfirm: () => {
        const comment = document.getElementById("comment").value;
        if (!ratingValue || ratingValue < 1 || ratingValue > 5) {
          Swal.showValidationMessage("Please select a rating between 1 and 5");
          return false;
        }
        if (!comment) {
          Swal.showValidationMessage("Please enter a review comment");
          return false;
        }
        return { rating: ratingValue, comment };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        addProductFeedback(
          cart_id,
          booking_id,
          p_id,
          vendor_id,
          result.value.rating,
          result.value.comment
        );
      }
    });
  };

  const cancelBooking = async (bookingId, startDate) => {
    try {
      // Check if current time is more than 24 hours before start date
      const now = new Date();
      const startDateObj = new Date(startDate);
      const hoursDifference = (startDateObj - now) / (1000 * 60 * 60);

      if (hoursDifference <= 24) {
        toast.error("Cannot cancel booking within 24 hours of start time!");
        return;
      }

      const response = await axios.post(
        "https://equiprentals-backend.onrender.com/user/cancelbooking",
        { bookingId }
      );

      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to cancel booking");
      console.error("Error canceling booking:", error);
    }
  };

  const openCancelConfirmation = (bookingId, startDate) => {
    // Check cancellation eligibility first
    const now = new Date();
    const startDateObj = new Date(startDate);
    const hoursDifference = (startDateObj - now) / (1000 * 60 * 60);

    if (hoursDifference <= 24) {
      toast.error("Cannot cancel booking within 24 hours of start time!");
      return;
    }

    MySwal.fire({
      title: "Confirm Cancellation",
      html: `
        <p>You are about to cancel this booking.</p>
        <p>A refund will be processed to your original payment method.</p>
        <p>Are you sure you want to proceed?</p>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel booking",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelBooking(bookingId, startDate);
      }
    });
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
                      <th className="prod-column text-center">Products</th>
                      <th className="qty text-center">Quantity</th>
                      <th className="price text-center">Price</th>
                      <th className=" text-center">Purchase Date</th>
                      <th className=" text-center">Start Date</th>
                      <th className=" text-center">Return Date</th>
                      <th className="remove text-center">Status</th>
                      <th className="remove text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((item, index) => {
                        const canCancel =
                          new Date(item.booking_details.start_date) -
                            new Date() >
                          24 * 60 * 60 * 1000;
                        return (
                          <tr key={index}>
                            <td className="prod-column text-center">
                              {item.product_details.p_name}
                            </td>
                            <td className="qty text-center">{item.p_qty}</td>
                            <td className="price text-center">
                              ₹ {item.product_details.p_price}
                            </td>
                            <td className="text-center">
                              {new Date(
                                item.booking_details.booking_date
                              ).toLocaleDateString()}
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
                              {item.booking_details.status === "success"
                                ? "Rented"
                                : "Returned"}
                            </td>
                            <td className="text-center">
                              <button
                                className="btn btn-primary"
                                onClick={() =>
                                  openFeedbackPopup(
                                    item._id,
                                    item.booking_id,
                                    item.product_details._id,
                                    item.product_details.vendor_id
                                  )
                                }
                              >
                                Add Feedback
                              </button>
                              {item.booking_details.status === "success" &&
                                canCancel && (
                                  <button
                                    className="btn btn-danger ms-2"
                                    onClick={() =>
                                      openCancelConfirmation(
                                        item.booking_id,
                                        item.booking_details.start_date
                                      )
                                    }
                                  >
                                    Cancel
                                  </button>
                                )}
                              {item.booking_details.status === "success" &&
                                !canCancel && (
                                  <button
                                    className="btn btn-secondary ms-2"
                                    disabled
                                    title="Cannot cancel within 24 hours of start time"
                                  >
                                    Cancel
                                  </button>
                                )}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
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

export default BookingHistory;
