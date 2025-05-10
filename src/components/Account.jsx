import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "../styles/Account.css";
const Account = () => {
  return (
    <div className="account-container">
      <div className="account-card">
        <h2>Welcome to your Account</h2>
        <nav className="account-links">
          <Link to="/electronics">Electronics</Link>
          <Link to="/flowers">Flowers</Link>
        </nav>
      </div>
    </div>
  );
};

export default Account;
