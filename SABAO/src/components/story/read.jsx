import { useParams, useNavigate } from 'react-router-dom';
import { chaptersread } from '../data/data';  // adjust path as needed
import Navbar from './navbar/navbar';  // adjust import path to your Navbar component

export default function ChapterRead() {
  const { id } = useParams(); // chapter id from URL
  const navigate = useNavigate();

  const chapterId = parseInt(id, 10);
  const chapter = chaptersread.find((c) => c.id === chapterId);

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
