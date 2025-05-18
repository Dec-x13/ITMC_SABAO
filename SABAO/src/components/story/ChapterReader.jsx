import { useParams, useNavigate } from 'react-router-dom';
import { books } from '../../data/data'; // adjust path as needed
import Navbar from '../navbar/navbar'; // adjust import path

export default function ChapterRead() {
  const { id } = useParams(); // id is string like '1', '1.1', etc.
  const navigate = useNavigate();

  // Flatten all chapters and subchapters from all books to find by id
  const allChapters = [];

  books.forEach(book => {
    book.chapters.forEach(ch => {
      allChapters.push({
        id: ch.chapterId.toString(),
        title: ch.title,
        content: ch.content,
        imageUrl: ch.imageUrl,
      });
      ch.subChapters.forEach(subCh => {
        allChapters.push({
          id: subCh.subChapterId.toString(),
          title: subCh.title,
          content: subCh.content,
          imageUrl: subCh.imageUrl,
        });
      });
    });
  });

  const chapter = allChapters.find(c => c.id === id);

  if (!chapter) {
    return (
      <>
        <Navbar />
        <div className="container mt-4">
          <p>Chapter not found.</p>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container chapter-read-container my-4">
        <h2>{chapter.title}</h2>
        <img
          src={chapter.imageUrl}
          alt={`Illustration for ${chapter.title}`}
          style={{ maxWidth: '400px', borderRadius: '8px', marginBottom: '1rem' }}
        />
        <p>{chapter.content}</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back to Chapters</button>
      </div>
    </>
  );
}
