import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get("https://equiprentals-backend.onrender.com/getcategories");
      setData(response.data.categories);
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

  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    window.scrollTo(0, 0, { behavior: "smooth" });
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
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
                  <h1 data-aos="fade-up">Categories</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Categories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-area pt-130">
        <div className="container">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <div className="row">
              {paginatedData.length > 0 ? (
                paginatedData.map((category, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    data-aos="fade-up"
                    key={index}
                  >
                    <div className="categories-item categories-item-one text-center mb-60">
                      {/* <div className="icon">
                        <i className={category.icon} />
                      </div> */}
                      <div className="content">
                        <h5>{category.cat_name}</h5>
                        <p>
                          Find the best {category.cat_name.toLowerCase()} at
                          affordable prices.
                        </p>
                        <Link
                          to={`/products/${category._id}`}
                          target="_self"
                          title="Link"
                          className="main-btn main-btn-primary"
                        >
                          View Products
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No categories found.</p>
              )}
            </div>
          )}

          {/* Pagination */}
          <nav className="pagination-nav mb-60" data-aos="fade-up">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-label="Previous"
                  disabled={currentPage === 1}
                >
                  <i className="fa fa-angle-left" />
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-label="Next"
                  disabled={currentPage === totalPages}
                >
                  <i className="fa fa-angle-right" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <Footer />
      <div className="back-to-top">
        <i className="fas fa-angle-up" />
      </div>
    </>
  );
}

export default Categories;
