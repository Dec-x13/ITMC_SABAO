import React, { useState } from 'react';
import './navbar.css';
import SWLogo from '../../assets/SW_logo.png'; // Adjust path if needed

const GENRES = [
  "Fantasy",
  "Romance",
  "Adventure",
  "Mystery",
  "Sci-Fi",
  "Horror",
  "Comedy",
  "Drama",
  "Action",
  "Shounen",
  "Ecchi",
  "Doujinshi"
];

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleFilter = () => setShowFilter(true);
  const handleLogin = () => alert('Log in clicked!');
  const handlePublish = () => alert('Publish clicked!');

  const handleGenreChange = (genre) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const handleCloseFilter = () => setShowFilter(false);

  const handleApplyFilter = () => {
    alert('Selected genres: ' + selectedGenres.join(', '));
    setShowFilter(false);
  };

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
        {showFilter && (
          <div className="filter-popup">
            <div className="filter-popup-content">
              <h4>Select Genres</h4>
              <div className="filter-genres-list">
                {GENRES.map(genre => (
                  <label key={genre} className="filter-genre-item">
                    <input
                      type="checkbox"
                      checked={selectedGenres.includes(genre)}
                      onChange={() => handleGenreChange(genre)}
                    />
                    {genre}
                  </label>
                ))}
              </div>
              <div className="filter-popup-actions">
                <button onClick={handleApplyFilter}>Apply</button>
                <button onClick={handleCloseFilter}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button className="navbar__login" onClick={handleLogin}>Log in</button>
    </nav>
  );
};

export default Navbar;