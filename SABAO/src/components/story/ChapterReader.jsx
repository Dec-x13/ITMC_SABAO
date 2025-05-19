import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdOutlineWbSunny } from "react-icons/md"
import { books } from '../../data/data'; // adjust path as needed
import Navbar from '../navbar/navbar'; // adjust path
import './ChapterReader.css';

import { FaMoon } from "react-icons/fa"   // ADD THIS IMPORT


export default function ChapterRead() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Theme state
  const [theme, setTheme] = useState('light');

  // Apply theme attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Flatten chapters and subchapters with book titles
  const allChapters = [];

  books.forEach(book => {
    book.chapters.forEach(ch => {
      allChapters.push({
        id: ch.chapterId.toString(),
        bookTitle: book.title,
        title: ch.title,
        content: ch.content,
        imageUrl: ch.imageUrl,
      });
      ch.subChapters.forEach(subCh => {
        allChapters.push({
          id: subCh.subChapterId.toString(),
          bookTitle: book.title,
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
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="chapter_container container chapter-read-container my-4">
        <button
          className="btn btn-secondary mb-3"
          onClick={toggleTheme}
          style={{ alignSelf: 'flex-end', fontSize: '1.6rem', padding: '0.4rem 0.8rem' }}
          aria-label="Toggle dark/light mode"
          title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
          {theme === 'light' ? <FaMoon /> : <MdOutlineWbSunny />}
        </button>

        <h1>{chapter.bookTitle}</h1>
        <h4>{chapter.title}</h4>

        <div className="chapter-text">{chapter.content}</div>

        <div className="chapter-image">
          <img src={chapter.imageUrl} alt={`Illustration for ${chapter.title}`} />
        </div>

        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Back to Chapters
        </button>
      </div>
    </>
  );
}
