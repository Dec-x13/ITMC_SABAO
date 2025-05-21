import React from "react";
import "./components/pagges/styles.css";

function RegisterPage() {
  return (
    <>
      <div className="navbar">
        <img src="/assets/SW_logo.png" alt="StoryWeaver Logo" className="logo" />
        <span className="brand">
          Story<span style={{ color: "#0055ff" }}>Weaver</span>
        </span>
      </div>
      <div className="container">
        <h1>Register an Account</h1>
        <form method="POST" action="/register">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            required
          />
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
          <button type="submit">Create Account</button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
