import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState({
    email: location.state,
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.newPassword !== data.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:8000/admin/changePassword", data);
      toast.success("Password Reset Successfully!!", {
        onClose: () => navigate("/login"),
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "something went wrong!");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4" style={{ width: "400px" }}>
          <h4 className="text-center mb-3">Change Password</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="newPassword"
                placeholder="Enter password"
                onChange={(e) =>
                  setData({ ...data, newPassword: e.target.value })
                }
                value={data.newPassword}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="confirmPassword"
                value={data.confirmPassword}
                placeholder="Enter password"
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
