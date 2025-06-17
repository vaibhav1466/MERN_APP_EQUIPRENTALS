import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import { Link } from "react-router-dom";
import Footer from "../../Common/Footer";
import axios from "axios";

function ViewProducts() {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const itemsPerPage = 6;

  async function fetchData(query = "") {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://equiprentals-backend.onrender.com/vendor/getVendorProducts"
      );
      const products = response.data.products;

      if (query) {
        const filtered = products.filter((item) =>
          item.p_name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(products);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleDeleteProduct = async (id) => {
    console.log(id);

    try {
      await axios.post(`https://equiprentals-backend.onrender.com/vendor/deleteProduct`, {
        product_id: id,
      });
      fetchData(); // Refresh the product list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
    fetchData();
  }, []);

  // Handle search button click
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission
    if (!searchQuery.trim()) {
      fetchData(); // Fetch all products when input is empty
    } else {
      fetchData(searchQuery); // Fetch filtered products
    }
  };

  // Calculate total pages based on filtered data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Slice data to show only the items for the current page
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
                  <h1>My Products</h1>
                  <ul className="breadcrumbs-link d-flex justify-content-center">
                    <li>
                      <Link to="/" target="_self" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">My Products</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-area pricing-list-section pt-130">
        <div className="container">
          <div className="equipments-search-filter mb-60">
            <form onSubmit={handleSearch}>
              <div className="search-filter-form">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="What are you looking for?"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="form_group">
                      <button type="submit" className="search-btn">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-end mb-3">
            <Link
              className="main-btn main-btn-primary self-center"
              to={"/vendor/addProduct"}
            >
              Add Product
            </Link>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="equipments-list-wrapper">
                {loading ? (
                  <div className="preloader">
                    <div className="lds-ellipsis">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                ) : displayedData.length > 0 ? (
                  displayedData.map((item, index) => (
                    <div
                      key={index}
                      className="pricing-item pricing-item-three mb-60"
                    >
                      <div className="pricing-img">
                        <Link
                          to={"/productsDetails"}
                          state={item}
                          target="_self"
                          title="Equipment"
                        >
                          <img
                            src={`https://equiprentals-backend.onrender.com/images/products/${item.p_imgs[0]}`}
                            alt={item.p_imgs[0]}
                            style={{
                              objectFit: "cover",
                              height: "350px",
                              width: "100%",
                            }}
                          />
                        </Link>
                      </div>
                      <div className="pricing-info">
                        <div className="price-info">
                          <h5>Price</h5>
                          <span>Starts From</span>
                          <div className="price-tag">
                            <h4>₹ {item.p_price}</h4>
                          </div>
                        </div>
                        <div className="pricing-body">
                          <h3 className="title">
                            <Link
                              to={"/productsDetails"}
                              state={item}
                              target="_self"
                              title="Equipment"
                            >
                              {item.p_name}
                            </Link>
                          </h3>
                          <p>{item.p_desc}</p>
                        </div>
                        <div className="pricing-bottom d-flex align-items-center justify-content-between">
                          <Link
                            to={"/vendor/editProduct"}
                            state={item}
                            className="main-btn"
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDeleteProduct(item._id)}
                            className="btn main-btn bg-danger"
                          >
                            Delete
                          </button>
                          <Link
                            to={"/vendor/productsFeedback"}
                            state={item}
                            className="btn main-btn bg-success"
                          >
                            View Feedbacks
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h5 className="mb-60">No Products Found</h5>
                )}
              </div>
              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="pagination-nav mb-60">
                  <ul className="pagination justify-content-center">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage - 1)}
                      >
                        <i className="far fa-angle-left" />
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
                          onClick={() => setCurrentPage(i + 1)}
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
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        <i className="far fa-angle-right" />
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ViewProducts;
