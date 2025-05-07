import './ChapterList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faEdit, faTrashAlt, faSearch, faPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ChapterList({ chapters }) {
  const [expandedChapters, setExpandedChapters] = useState([]);

  const toggleChapter = (index) => {
    setExpandedChapters((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
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
            <div key={index}>
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                onClick={() => toggleChapter(index)}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <strong>{ch.title}</strong>
                  <div className="text-muted">by {ch.author}</div>
                </div>
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faEdit} className="me-3" title="Edit" />
                  <FontAwesomeIcon icon={faTrashAlt} className="me-3" title="Delete" />
                  <FontAwesomeIcon icon={faCodeBranch} className="me-3" title="Git Branch" />
                  <span className="badge bg-secondary me-3">{ch.date}</span>
                </div>
              </li>

              {expandedChapters.includes(index) && ch.subChapters && (
                <div className="sub-chapters">
                  {ch.subChapters.map((subCh, subIndex) => (
                    <div key={subIndex} className="sub-chapter">
                      <FontAwesomeIcon icon={faEye} className="me-2" />
                      <span className="text-muted">{subCh.title}</span>
                      <span className="date">{subCh.date}</span> {/* Positioned to the right */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
