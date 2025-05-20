import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

function Card({ book }) {
  return (
    <Link to={`/story/${book.id}`} className="cardWrapper" key={book.id}>
      <div className="infoWrapper">
        <h3 className="status">Releasing</h3>
        <h2 className="title">{book.title}</h2>
        <h3 className="desc">{book.description}</h3>
        <h3 className="branches">Total Branches: 100</h3>
        <h3 className="genre">{book.genres.join(', ')}</h3>
      </div>
      <div className="storyImage">
        <img src={book.coverImage} alt={book.title} />
      </div>
    </Link>
  );
}

export default Card;
