import React from "react";
import './styles.css';
import Navbar from '../navbar/navbar';
function ResetPage() {
  return (
    <>
<Navbar/>
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
