// src/story
import BookHeader from './components/story/BookHeader';
import ChapterList from './components/story/ChapterList';
import CommentsSection from './components/story/CommentsSection';
import Suggestions from './components/story/Suggestions';
import Navbar from './components/navbar/navbar';

import { book, chapters, comments, suggestions } from './data/data';

export default function App() {
  return (
    <div>
    <Navbar />
      {/* BookHeader is outside the container, so it spans full width */}
      <BookHeader book={book} coverImage={book.coverImage} />

      {/* The rest of the content goes inside the container */}
      <div className="custom-container container my-4" >
        <div className="row">
          <div className="col-md-8">
            <ChapterList chapters={chapters} />
            <CommentsSection comments={comments} />
          </div>
          <div className="col-md-4">
            <Suggestions suggestions={suggestions} />
          </div>
        </div>
      </div>
    </div>
  );
}
