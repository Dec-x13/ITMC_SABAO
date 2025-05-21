import React from "react";
import './styles.css';
import Navbar from '../navbar/navbar';
function ResetPage() {
  return (
    <>
<Navbar />
      <div className="login-container">
        <h1 className="login-title">Reset Password</h1>
        <form method="POST" action="/reset" className="login-form">
          <input
            type="password"
            name="oldPassword"
            placeholder="Enter Old Password"
            required
            className="login-input"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Enter New Password"
            required
            className="login-input"
          />
          <button type="submit" className="login-button">
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}

export default ResetPage;