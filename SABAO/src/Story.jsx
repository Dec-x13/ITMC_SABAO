import BookHeader from './components/story/BookHeader';
import ChapterList from './components/story/ChapterList';
import CommentsSection from './components/story/CommentsSection';
import Suggestions from './components/story/Suggestions';
import Navbar from './components/navbar/navbar';
import './story.css'
import { books } from './data/data';

export default function App() {
  const selectedBook = books[0]; // choose a book

  return (
    <div>
      <Navbar />
      <BookHeader book={selectedBook} coverImage={selectedBook.coverImage} />

      <div className="custom-container-fluid container-fluid my-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ChapterList chapters={selectedBook.chapters} />
            <CommentsSection comments={selectedBook.comments} />
          </div>
          <div className="col-md-3">
            <Suggestions suggestions={selectedBook.suggestions} />
          </div>
        </div>
      </div>
    </div>
  );
}
