import React from 'react';
import './genrenav.css';

const genres = ['Romance', 'Drama', 'Mystery', 'Comedy', 'Shounen', 'Tragedy', 'Slice of Life'];

const GenreNav = ({ activeGenre, setActiveGenre }) => (
  <div className="genres">
    {genres.map((genre) => (
      <button
        key={genre}
        className={`genre-btn ${activeGenre === genre ? 'active-genre' : ''}`}
        onClick={() => setActiveGenre(genre)}
      >
        {genre}
      </button>
    ))}
  </div>
);

export default GenreNav;