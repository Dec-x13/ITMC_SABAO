import React from "react";
import './compnents/pagges/styles.css';
import Navbar from '../navbar/navbar';
function RegisterPage() {
  return (
    <>
  <Navbar/>
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
