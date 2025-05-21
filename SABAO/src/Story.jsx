import React from 'react';
import { useParams } from 'react-router-dom';
import BookHeader from './components/story/BookHeader';
import ChapterList from './components/story/ChapterList';
import CommentsSection from './components/story/CommentsSection';
import Suggestions from './components/story/Suggestions';
import Navbar from './components/navbar/navbar';
import './story.css';
import { books } from './data/data';  // Correctly import the books data

const Story = () => {
  const { id } = useParams();  // Get the book ID from the URL
  const selectedBook = books.find(book => book.id.toString() === id);  // Find the book using the id

  if (!selectedBook) {
    return <div>Book not found!</div>;  // Display error if book is not found
  }

  return (
    <div>
      <Navbar />
      <BookHeader book={selectedBook} coverImage={selectedBook.coverImage} /> {/* Passing book info to BookHeader */}

      <div className="custom-container-fluid container-fluid my-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ChapterList chapters={selectedBook.chapters} /> {/* Display chapters of the selected book */}
            <CommentsSection comments={selectedBook.comments} /> {/* Display comments */}
          </div>
          <div className="col-md-3">
            <Suggestions suggestions={selectedBook.suggestions} /> {/* Display suggestions */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
