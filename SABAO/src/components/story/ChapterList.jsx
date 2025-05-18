import './ChapterList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faEdit, faTrashAlt, faEye, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChapterList({ chapters: initialChapters }) {
  const [chapters, setChapters] = useState(initialChapters);
  const [expandedChapters, setExpandedChapters] = useState([]);
  const navigate = useNavigate();

  const handleChapterClick = (chapter, index) => {
    if (chapter.subChapters && chapter.subChapters.length > 0) {
      setExpandedChapters(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      navigate(`/chapter/${chapter.chapterId}`);
    }
  };

  const handleSubChapterClick = (subChapter) => {
    navigate(`/chapter/${subChapter.subChapterId}`);
  };

  const handleDelete = (index, event) => {
    event.stopPropagation();
    setChapters(prev => prev.filter((_, i) => i !== index));
    setExpandedChapters(prev => prev.filter(i => i !== index));
  };

  const handleDeleteSubChapter = (chapterIndex, subChapterIndex, event) => {
    event.stopPropagation();
    setChapters(prev => {
      const newChapters = [...prev];
      newChapters[chapterIndex] = {
        ...newChapters[chapterIndex],
        subChapters: newChapters[chapterIndex].subChapters.filter(
          (_, i) => i !== subChapterIndex
        ),
      };
      return newChapters;
    });
  };

  return (
    <div className="mt-4 chapter-list-wrapper">
      <div className="header-container">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} className="search-left-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="Search chapters..."
          />
        </div>
        <button className="new-chapter-btn">
          <FontAwesomeIcon icon={faPlus} className="me-2" /> New
        </button>
      </div>

      <div className="chapter-list-container">
        <ul className="list-group">
          {chapters.map((ch, index) => (
            <li
              key={ch.chapterId}
              className="list-group-item d-flex justify-content-between align-items-center"
              onClick={() => handleChapterClick(ch, index)}
              style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <div className="d-flex justify-content-between w-100" style={{ alignItems: 'center' }}>
                <div>
                  <strong>{ch.title}</strong>
                  <div className="text-muted">by {ch.author}</div>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="me-3 edit-icon"
                    title="Edit"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="me-3 delete-icon"
                    title="Delete"
                    onClick={(e) => handleDelete(index, e)}
                  />
                  <FontAwesomeIcon
                    icon={faCodeBranch}
                    className="me-3 branch-icon"
                    title="Git Branch"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="badge bg-secondary me-3">{ch.date}</span>
                </div>
              </div>

              {expandedChapters.includes(index) && ch.subChapters && ch.subChapters.length > 0 && (
                <div className="sub-chapters mt-2" style={{ width: '100%' }}>
                  {ch.subChapters.map((subCh) => (
                    <div
                      key={subCh.subChapterId}
                      className="sub-chapter d-flex align-items-center justify-content-between"
                      style={{ cursor: 'pointer', paddingLeft: '1.5rem', width: '100%' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubChapterClick(subCh);
                      }}
                    >
                      <div className="d-flex align-items-center flex-shrink-1">
                        <FontAwesomeIcon icon={faEye} className="me-2" />
                        <span className="text-muted text-truncate">{subCh.title}</span>
                      </div>

                      <div className="d-flex align-items-center flex-shrink-0 right-side-container">
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="me-3 edit-icon"
                          title="Edit"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="me-3 delete-icon"
                          title="Delete"
                          onClick={(e) => handleDeleteSubChapter(index, ch.subChapters.indexOf(subCh), e)}
                        />
                        <span className="date">{subCh.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
