import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { books } from '../../data/data'; 
import Navbar from '../navbar/navbar';
import './ChapterReader.css';

export default function ChapterRead() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [theme, setTheme] = useState('light');
  const [showSubchapterModal, setShowSubchapterModal] = useState(false);
  const [chapterOptions, setChapterOptions] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const allChapters = [];
  books.forEach(book => {
    book.chapters.forEach(ch => {
      allChapters.push({
        id: ch.chapterId.toString(),
        bookTitle: book.title,
        title: ch.title,
        author: ch.author,
        reason: ch.reason,
        content: ch.content,
        imageUrl: ch.imageUrl,
        isMainChapter: true,
        bookId: book.id,
        chapterData: ch
      });
      (ch.subChapters || []).forEach(subCh => {
        allChapters.push({
          id: subCh.subChapterId.toString(),
          bookTitle: book.title,
          title: subCh.title,
          author: subCh.author,
          reason: subCh.reason,
          content: subCh.content,
          imageUrl: subCh.imageUrl,
          isMainChapter: false,
          bookId: book.id,
          chapterData: subCh
        });
      });
    });
  });

  const currentIndex = allChapters.findIndex(c => c.id === id);
  const chapter = allChapters[currentIndex];

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

  const findNextMainChapterIndex = (fromIndex) => {
    for (let i = fromIndex + 1; i < allChapters.length; i++) {
      if (allChapters[i].isMainChapter) return i;
    }
    return -1;
  };

  const findPreviousMainChapterIndex = (fromIndex) => {
    for (let i = fromIndex - 1; i >= 0; i--) {
      if (allChapters[i].isMainChapter) return i;
    }
    return -1;
  };

  const goToNext = () => {
    const nextMainIndex = findNextMainChapterIndex(currentIndex);
    if (nextMainIndex === -1) return;

    const nextMainChapter = allChapters[nextMainIndex];
    const book = books.find(b => b.id === nextMainChapter.bookId);
    const mainChapterData = book.chapters.find(ch => ch.chapterId.toString() === nextMainChapter.id);

    if (mainChapterData && mainChapterData.subChapters && mainChapterData.subChapters.length > 0) {
      const options = [
        {
          id: mainChapterData.chapterId.toString(),
          title: mainChapterData.title,
          author: mainChapterData.author,
          reason: mainChapterData.reason || "Main storyline by original author",
          content: mainChapterData.content,
        },
        ...mainChapterData.subChapters.map(subCh => ({
          id: subCh.subChapterId.toString(),
          title: subCh.title,
          author: subCh.author,
          reason: subCh.reason || "Alternate version by contributor",
          content: subCh.content,
        })),
      ];
      setChapterOptions(options);
      setShowSubchapterModal(true);
    } else {
      navigate(`/chapter/${nextMainChapter.id}`);
    }
  };

  const goToPrevious = () => {
    const prevMainIndex = findPreviousMainChapterIndex(currentIndex);
    if (prevMainIndex === -1) return;

    const prevMainChapter = allChapters[prevMainIndex];
    const book = books.find(b => b.id === prevMainChapter.bookId);
    const mainChapterData = book.chapters.find(ch => ch.chapterId.toString() === prevMainChapter.id);

    if (mainChapterData && mainChapterData.subChapters && mainChapterData.subChapters.length > 0) {
      const options = [
        {
          id: mainChapterData.chapterId.toString(),
          title: mainChapterData.title,
          author: mainChapterData.author,
          reason: mainChapterData.reason || "Main storyline by original author",
          content: mainChapterData.content,
        },
        ...mainChapterData.subChapters.map(subCh => ({
          id: subCh.subChapterId.toString(),
          title: subCh.title,
          author: subCh.author,
          reason: subCh.reason || "Alternate version by contributor",
          content: subCh.content,
        })),
      ];
      setChapterOptions(options);
      setShowSubchapterModal(true);
    } else {
      navigate(`/chapter/${prevMainChapter.id}`);
    }
  };

  const handleChapterPick = (selected) => {
    setShowSubchapterModal(false);
    navigate(`/chapter/${selected.id}`);
  };

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
        <p><em>by {chapter.author}</em></p>
        {chapter.reason && <p><strong>Reason:</strong> {chapter.reason}</p>}

        <div className="chapter-text">{chapter.content}</div>

        <div className="chapter-image">
          <img src={chapter.imageUrl} alt={`Illustration for ${chapter.title}`} />
        </div>

        <div className="d-flex justify-content-between mt-4 align-items-center">
          <div>
            {chapter.isMainChapter && findPreviousMainChapterIndex(currentIndex) !== -1 && (
              <button
                className="btn"
                style={{ backgroundColor: '#8080FF', color: 'white', marginRight: '8px' }}
                onClick={goToPrevious}
                aria-label="Previous Chapter"
              >
                &larr; Previous
              </button>
            )}

            {findNextMainChapterIndex(currentIndex) !== -1 && (
              <button
                className="btn"
                style={{ backgroundColor: '#8080FF', color: 'white' }}
                onClick={goToNext}
                aria-label="Next Chapter"
              >
                Next &rarr;
              </button>
            )}
          </div>

          <button
            className="btn btn-secondary"
            onClick={() => navigate(`/story/${chapter.bookId}`)}
          >
            Back to Chapters
          </button>
        </div>
      </div>

      {showSubchapterModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h5>Pick a Chapter</h5>
            <ul className="list-group">
              {chapterOptions.map(ch => (
                <li
                  key={ch.id}
                  className="list-group-item list-group-item-action"
                  onClick={() => handleChapterPick(ch)}
                  style={{ cursor: 'pointer' }}
                >
                  <strong>{ch.title}</strong> <em>by {ch.author}</em>
                  <p style={{ margin: '0.3rem 0' }}>{ch.reason}</p>
                </li>
              ))}
            </ul>
            <button className="btn btn-secondary mt-3" onClick={() => setShowSubchapterModal(false)}>Cancel</button>
          </div>
        </div>
      )}

    
    </>
  );
}
