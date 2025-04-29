import React, { useState } from 'react';
import './navbar.css';
import SWLogo from '../../assets/SW_logo.png'; // Adjust path if needed

const Navbar = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleFilter = () => alert('Filter clicked!');
  const handleLogin = () => alert('Log in clicked!');
  const handlePublish = () => alert('Publish clicked!');

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src={SWLogo} alt="SW Logo" style={{ height: "40px", width: "auto", marginRight: "8px" }} />
        StoryWeaver
      </a>
      <div className="navbar__links">
        <a href="#">Genres</a>
        <a href="#">Newest</a>
        <a href="#">Updated</a>
      </div>
      <button className="navbar__publish" onClick={handlePublish}>Publish</button>
      <div className="navbar__search-container">
        <input
          className="navbar__search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
        <button className="navbar__filter" onClick={handleFilter}>Filter</button>
      </div>
      <button className="navbar__login" onClick={handleLogin}>Log in</button>
    </nav>
  );
};

export default Navbar;