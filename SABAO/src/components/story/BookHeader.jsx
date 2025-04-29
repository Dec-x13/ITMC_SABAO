// src/components/BookHeader.jsx
import './BookHeader.css'; // Import the external CSS file

export default function BookHeader({ book, coverImage }) {
  return (
    <div className="book-header-container">
      {/* Blurred background image */}
      <div
        className="book-header-background"
        style={{
          backgroundImage: `url(${coverImage})`, // Background image applied dynamically
        }}
      ></div>

      {/* Container for the book cover image and the text */}
      <div className="headercont">
        {/* Book cover image on the left side */}
        <img
          src={coverImage}
          alt="Book Cover"
          className="book-header-image"
        />

        {/* Text and content on the right side */}
        <div className="book-header-text">
          <h2 className="mb-2">{book.title}</h2>
          <p className="text-muted mb-3">by {book.author}</p>
          <div className="btns d-flex">
            {/* Apply custom button classes */}
            <button className="btn btn-read me-2">Read</button>
            <button className="btn btn-bookmark">Bookmark</button>
          </div>
          <p className="descrip mb-3">{book.description}</p>
         
        </div>
      </div>
    </div>
  );
}
