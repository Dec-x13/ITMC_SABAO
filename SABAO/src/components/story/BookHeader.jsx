// src/components/BookHeader.jsx
import './BookHeader.css'; // Import the external CSS file

export default function BookHeader({ book, coverImage }) {
  return (
    <div className="book-header-container">
      <div
        className="book-header-background"
        style={{ backgroundImage: `url(${coverImage})` }}
      ></div>

      <div className="headercont">
        {/* Left half: Existing content */}
        <div className="header-left">
          <img src={coverImage} alt="Book Cover" className="book-header-image" />
          <div className="book-header-text">
            <h2 className="mb-2">{book.title}</h2>
            <div className="btns d-flex mb-3">
              <button className="btn btn-read me-2">Read</button>
              <button className="btn btn-bookmark">Bookmark</button>
            </div>
            <p className="descrip mb-3">{book.description}</p>
          </div>
        </div>

        {/* Right half: New content */}
        <div className="header-right">
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Date Published:</strong> {book.datePublished}</p>
          <p><strong>Genres:</strong> {book.genres?.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
