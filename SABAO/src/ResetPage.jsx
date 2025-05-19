import React from "react";
import { Helmet } from "react-helmet";
import "./styles.css";

function ResetPage() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Reset Password - StoryWeaver</title>
      </Helmet>
      <div className="navbar">
        <img src="/logo.png" alt="StoryWeaver Logo" className="logo" />
        <span className="brand">
          Story<span style={{ color: "#0055ff" }}>Weaver</span>
        </span>
      </div>
      <div className="container">
        <h1>Reset Password</h1>
        <form method="POST" action="/reset">
          <input type="password" name="oldPassword" placeholder="Enter Old Password" required />
          <input type="password" name="newPassword" placeholder="Enter New Password" required />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </>
  );
}

export default ResetPage;