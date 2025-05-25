import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/admin/sendOtp", { email });
      toast.success("Email Sent Successfully!!", {
        onClose: () => navigate("/verifyOTP", { state: email }),
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "something went wrong!");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4" style={{ width: "400px" }}>
          <h4 className="text-center mb-3">Forgot Password?</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
