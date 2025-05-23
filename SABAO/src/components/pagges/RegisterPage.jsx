import React from "react";
import './styles.css';
import Navbar from '../navbar/navbar';
function RegisterPage() {
  return (
    <>

  <div className="body-part">
     <Navbar />
      <div className="login-container">
        <h1 className="login-title">Register an Account</h1>
        <form method="POST" action="/register" className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            required
            className="login-input"
          />
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
          <button type="submit" className="login-button">
            Create Account
          </button>
        </form>
      </div>
      </div>
    </>
  );
}

export default RegisterPage;