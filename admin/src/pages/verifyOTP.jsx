import axios from "axios";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function VerifyOTP() {
  const location = useLocation();
  const Email = location.state;
  const [Email_OTP, setEmail_OTP] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/VerifyOtp", {
        email: Email,
        otp: Email_OTP,
      });
      toast.success("OTP Verified Successfully!!", {
        onClose: () => navigate("/resetPassword", { state: Email }),
      });
    } catch (error) {
      toast.error(error.response.data.message);
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
                OTP Sent on your email.
              </label>
              <OTPInput
                id="otp-input"
                className="form-control"
                value={Email_OTP}
                inputType="text"
                onChange={setEmail_OTP}
                numInputs={6}
                renderSeparator={<span>-</span>}
                inputStyle={{
                  borderRadius: "8px",
                  fontWeight: "400",
                  outline: "none",
                  width: "55px",
                  padding: "12px",
                  border: "1px solid black", // Updated to black border
                  lineHeight: "1",
                }}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default VerifyOTP;
