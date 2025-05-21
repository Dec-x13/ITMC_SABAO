import React from "react";
import { Link } from "react-router-dom";
import "./pagges/styles.css";

function LoginPage() {
  return (
    <>
      <div className="navbar">
        <img src="/assets/SW_logo.png" alt="StoryWeaver Logo" className="logo" />
        <span className="brand">
          Story<span style={{ color: "#0055ff" }}>Weaver</span>
        </span>
      </div>
      <div className="container">
        <h1>Login</h1>
        <form method="POST" action="/login">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        <div>
          <Link to="/register" className="link">Register here</Link><br />
          <Link to="/reset" className="link">Forgot Password?</Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;