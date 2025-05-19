import './BookHeader.css'; // Import the external CSS file
import { useNavigate } from 'react-router-dom';

export default function BookHeader({ book, coverImage }) {
  const navigate = useNavigate();

  // Handle the "Read" button click: Navigate to the Story page of the book
  const handleReadClick = () => {
    if (book.chapters && book.chapters.length > 0) {
      // Navigate to the Story page using the book's ID
      navigate(`/story/${book.id}`); // Navigate to the book's Story page
    } else {
      alert('No chapters available to read.');
    }
  };

  return (
    <div className="book-header-container">
      {/* Background for the Book */}
      <div
        className="book-header-background"
        style={{ backgroundImage: `url(${coverImage})` }}
      ></div>

      {/* Main Content Section */}
      <div className="headercont">
        {/* Left side: Book Cover and Description */}
        <div className="header-left">
          <img src={coverImage} alt="Book Cover" className="book-header-image" />
          <div className="book-header-text">
            <h2 className="mb-2">{book.title}</h2>
            <div className="btns d-flex mb-3">
              <button
                className="btn btn-read me-2"
                onClick={handleReadClick}
              >
                Read
              </button>
              <button className="btn btn-bookmark">Bookmark</button>
            </div>
            <p className="descrip mb-3">{book.description}</p>
          </div>
        </div>

        {/* Right side: Book Information */}
        <div className="header-right">
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Date Published:</strong> {book.datePublished}</p>
          <p><strong>Genres:</strong> {book.genres?.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
