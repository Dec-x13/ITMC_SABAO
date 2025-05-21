import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './suggest.css';

export default function Suggestions({ suggestions }) {
  const navigate = useNavigate();  // Initialize navigate function

  // Handle suggestion click
  const handleClick = (bookId) => {
    console.log("Navigating to story with bookId:", bookId);  // Log the bookId
    navigate(`/story/${bookId}`);  // Navigate to the story page using the book id
  };

  return (
    <div className="suggestions-section mt-4">
      <h5>You may also like</h5>
      <ul className="list-group">
        {suggestions.map((s, i) => (
          <li 
            key={i} 
            className="list-group-item d-flex align-items-center" 
            onClick={() => handleClick(s.bookId)}  // Use bookId for navigation
          >
            {s.image && (
              <div className="suggestion-image">
                <img src={s.image} alt={s.title} className="suggestion-img" />
              </div>
            )}
            <div className="suggestion-details">
              <span className="suggestion-title">{s.title}</span>
              {s.chapter && <span className="suggestion-chapter">{s.chapter}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
