import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";

function AddProduct() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    cat_id: "",
    p_name: "",
    p_price: "",
    p_desc: "",
    p_imgs: null,
    deposit: "",
    p_qty: "",
  });
  const [category, setCategory] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    if (files.length > 3 || files.length < 3) {
      toast.error("You can upload only 3 images!");
      event.target.value = null;
      setData({ ...data, p_imgs: null });
      return;
    }

    setData({
      ...data,
      p_imgs: files,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    data.p_imgs.forEach((file) => {
      formData.append("p_imgs", file);
    });

    for (const key in data) {
      if (key !== "p_imgs") formData.append(key, data[key]);
    }

    try {
      await axios.post("https://equiprentals-backend.onrender.com/vendor/addProducts", formData);
      toast.success("Product Added Successfully!!", {
        onClose: () => navigate("/vendor/products"),
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  async function fetchData() {
    try {
      const response = await axios.get("https://equiprentals-backend.onrender.com/getcategories");
      setCategory(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
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
                  <h1 data-aos="fade-up">Add Product</h1>
                  <ul
                    className="breadcrumbs-link d-flex justify-content-center"
                    data-aos="fade-up"
                  >
                    <li>
                      <Link to="/" title="Home">
                        Home
                      </Link>
                    </li>
                    <li className="active">Add Product</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="user-area-section pt-120 pb-130" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="user-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label>
                          Product Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="p_name"
                          value={data.p_name}
                          onChange={handleChange}
                          className="form_control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form_group">
                        <label>
                          Price <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form_control"
                          name="p_price"
                          value={data.p_price}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form_group">
                        <label>
                          Deposit Amount <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form_control"
                          name="deposit"
                          value={data.deposit}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form_group">
                        <label>
                          Quantity <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form_control"
                          name="p_qty"
                          value={data.p_qty}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form_group">
                        <label>
                          Category <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form_control"
                          name="cat_id"
                          onChange={handleChange}
                          value={data.cat_id}
                        >
                          <option value="">Select Category</option>
                          {category.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                              {cat.cat_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label>
                          Description <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form_control"
                          rows={"3"}
                          name="p_desc"
                          value={data.p_desc}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <label>
                          Images <span className="text-danger">*</span>
                          <small>(Maximum 3 photos only)</small>
                        </label>
                        <input
                          type="file"
                          className="form_control"
                          accept="image/*"
                          name="p_imgs"
                          multiple
                          onChange={handleFileChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form_group">
                    <button type="submit" className="main-btn">
                      Add Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="back-to-top">
        <i className="fas fa-angle-up" />
      </div>
    </>
  );
}

export default AddProduct;
