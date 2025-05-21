import React from "react";
import "./components/pagges/styles.css";

function ResetPage() {
  return (
    <>
      <div className="navbar">
        <img src="/assets/SW_logo.png" alt="StoryWeaver Logo" className="logo" />
        <span className="brand">
          Story<span style={{ color: "#0055ff" }}>Weaver</span>
        </span>
      </div>
      <div className="container">
        <h1>Reset Password</h1>
        <form method="POST" action="/reset">
          <input
            type="password"
            name="oldPassword"
            placeholder="Enter Old Password"
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Enter New Password"
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </>
  );
}

export default ResetPage;
