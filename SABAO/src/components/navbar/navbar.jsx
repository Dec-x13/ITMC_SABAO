import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleFilter = () => alert('Filter clicked!');
  const handleLogin = () => alert('Log in clicked!');
  const handlePublish = () => alert('Publish clicked!');

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="navbar__logo-icon">#</span>
        <span className="navbar__logo-text">StoryWeaver</span>
      </div>
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