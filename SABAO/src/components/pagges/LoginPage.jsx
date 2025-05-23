import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import Navbar from '../navbar/navbar';
function LoginPage() {
  return (
    <>

<div className="body-part">
   <Navbar />
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form method="POST" action="/login" className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-links">
          <Link to="/register" className="login-link">Register here</Link><br />
          <Link to="/reset" className="login-link">Forgot Password?</Link>
        </div>
      </div>
      </div>

    </>
  );
}

export default LoginPage;