import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../Common/Footer";

function GetProductFeedback() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  console.log(location.state);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://equiprentals-backend.onrender.com/vendor/getProductWiseFeedback",
        {
          p_id: location.state._id,
        }
      );
      console.log(response.data.data);

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

    //eslint-disable-next-line
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
                  <h1 data-aos="fade-up">Feedback</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Feedbacks</li>
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
              <h3>{location.state?.p_name}</h3>
              <div className="table-outer table-responsive">
                <table className="cart-table">
                  <thead className="cart-header">
                    <tr>
                      <th className="prod-column text-center">#</th>
                      <th className="price text-center">Client Name</th>
                      <th className=" text-center">Client Phone No</th>
                      <th className="prod-column text-center">Rating</th>
                      <th className="prod-column text-center">Comment</th>
                      <th className="qty text-center">Datetime</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.length > 0 ? (
                      data.map((item, index) => (
                        <tr key={index}>
                          <td className="prod-column text-center">
                            {index + 1}
                          </td>
                          <td className="prod-column text-center">
                            {item.userName}
                          </td>
                          <td className="qty text-center">{item.userPhone}</td>
                          <td className="price text-center">{item.rating}</td>
                          <td className="text-center">{item.comment}</td>
                          <td className="remove text-center">
                            {new Date(item.datetime).toLocaleString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center">
                          {loading ? "Loading..." : "No feedbacks found."}
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

export default GetProductFeedback;
