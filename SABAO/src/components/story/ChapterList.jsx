// src/components/ChapterList.jsx
import './ChapterList.css';  // Import the CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

export default function ChapterList({ chapters }) {
  const [expandedChapters, setExpandedChapters] = useState([]);

  // Toggle function to show/hide sub-chapters
  const toggleChapter = (index) => {
    setExpandedChapters((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index) // Remove the index if it's already expanded
        : [...prev, index] // Add the index if it's not expanded
    );
  };

  return (
    <div className="mt-4">
      <h4>Chapters</h4>
      <div
        className="chapter-list-container"
        style={{
          maxHeight: "400px",
          overflowY: "scroll",
          paddingRight: "10px",
        }}
      >
        <ul className="list-group">
          {chapters.map((ch, index) => (
            <div key={index}>
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                onClick={() => toggleChapter(index)} // Toggle on click
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <strong>{ch.title}</strong>
                  <div className="text-muted">by {ch.author}</div>
                </div>
                {/* Icons */}
                <div className="d-flex align-items-center">
                  
                  <FontAwesomeIcon icon={faEdit} className="me-3" title="Edit" />
                  <FontAwesomeIcon icon={faTrashAlt} className="me-3" title="Delete" />
                  <FontAwesomeIcon icon={faCodeBranch} className="me-3" title="Git Branch" />
                  <span className="badge bg-secondary me-3">{ch.date}</span> {/* Date */}
                </div>
              </li>

              {/* Sub-chapters - only shown if expanded */}
              {expandedChapters.includes(index) && ch.subChapters && (
                <div className="sub-chapters">
                  {ch.subChapters.map((subCh, subIndex) => (
                    <div key={subIndex} className="sub-chapter">
                      <span className="text-muted">{subCh.title}</span> - <span className="badge bg-secondary">{subCh.date}</span>
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
