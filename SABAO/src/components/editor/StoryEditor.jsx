import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './StoryEditor.css';
import SWLogo from '../../assets/SW_logo.png';

const initialChapters = [
  { id: 1, title: 'Chapter 1', content: '' },
  { id: 2, title: 'Chapter 2', content: '' }
];

const StoryEditor = () => {
  const [chapters, setChapters] = useState(initialChapters);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [projectTitle, setProjectTitle] = useState('My Novel');
  const [editingTitle, setEditingTitle] = useState(false);
  const [showTools, setShowTools] = useState(true);

  // Modal state for AI tools and toolbar
  const [modal, setModal] = useState({ open: false, type: null });

  const handleChapterSelect = idx => setSelectedChapter(idx);

  const handleContentChange = value => {
    const updated = [...chapters];
    updated[selectedChapter].content = value;
    setChapters(updated);
  };

  // Toolbar button handlers
  const [darkMode, setDarkMode] = useState(false);
  const handleToolbarClick = (type) => {
    if (type === "theme") {
      setDarkMode(dm => !dm); // Toggle dark mode
    } else {
      setModal({ open: true, type });
    }
  };

  // AI Tool button handlers
  const handleAIToolClick = (type) => setModal({ open: true, type });

  const closeModal = () => setModal({ open: false, type: null });

  // Simple word count
  const wordCount = chapters[selectedChapter].content.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;

  // Modal content
  const renderModalContent = () => {
    switch (modal.type) {
      case "file":
        return <div><h3>File Menu</h3><p>New, Open, Save, Export, etc. (Coming soon)</p></div>;
      case "edit":
        return <div><h3>Edit Menu</h3><p>Undo, Redo, Cut, Copy, Paste, etc. (Coming soon)</p></div>;
      case "view":
        return <div><h3>View Menu</h3><p>Zoom, Layout, etc. (Coming soon)</p></div>;
      case "ai":
        return <div><h3>AI Assistant</h3><p>Ask the AI for help with your writing!</p></div>;
      case "what-next":
        return <div><h3>What happens next?</h3><p>AI will suggest the next part of your story. (Coming soon)</p></div>;
      case "character":
        return <div><h3>Character Builder</h3><p>AI helps you build and flesh out characters. (Coming soon)</p></div>;
      case "dialogue":
        return <div><h3>Dialogue Enhancer</h3><p>AI improves your dialogue. (Coming soon)</p></div>;
      default:
        return null;
    }
  };

  return (
    <div className={`storyweaver-root${darkMode ? ' dark-mode' : ''}`}>
      {/* Sidebar */}
      <aside className="sw-sidebar">
        <Link to="/" className="sw-logo">
          <img src={SWLogo} alt="SW Logo" className="sw-logo-img" />
          StoryWeaver
        </Link>
        <input className="sw-search" placeholder="Search projects..." />
        <div className="sw-project-tree">
          <div className="sw-project-title">{projectTitle}</div>
          <ul>
            {chapters.map((ch, idx) => (
              <li
                key={ch.id}
                className={selectedChapter === idx ? 'active' : ''}
                onClick={() => handleChapterSelect(idx)}
              >
                {ch.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="sw-main">
        {/* Toolbar */}
        <header className="sw-toolbar">
          <div className="sw-toolbar-left">
            <button onClick={() => handleToolbarClick("file")}>File</button>
            <button onClick={() => handleToolbarClick("edit")}>Edit</button>
            <button onClick={() => handleToolbarClick("view")}>View</button>
          </div>
        
          <div className="sw-toolbar-center">
            {editingTitle ? (
              <input
                className="sw-doc-title-input"
                type="text"
                value={projectTitle}
                autoFocus
                onChange={e => setProjectTitle(e.target.value)}
                onBlur={() => setEditingTitle(false)}
                onKeyDown={e => {
                  if (e.key === 'Enter') setEditingTitle(false);
                }}
                style={{ fontSize: '1.1rem', fontWeight: 600, textAlign: 'center', border: 'none', outline: 'none', background: 'transparent' }}
              />
            ) : (
              <span
                className="sw-doc-title"
                onClick={() => setEditingTitle(true)}
                style={{ cursor: 'pointer' }}
                title="Click to edit title"
              >
                {projectTitle}
              </span>
            )}
          </div>
          <div className="sw-toolbar-right">
            <button onClick={() => handleToolbarClick("ai")}>AI Assistant</button>
            <button onClick={() => handleToolbarClick("theme")}>
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>
        </header>

        {/* Editor */}
        <section className="sw-editor-section">
          <h2>{chapters[selectedChapter].title}</h2>
          <ReactQuill
            theme="snow"
            value={chapters[selectedChapter].content}
            onChange={handleContentChange}
            placeholder="Start writing your story here..."
            className="sw-editor"
          />
        </section>
      </main>

      {/* Right Sidebar */}
      {showTools && (
        <aside className="sw-rightbar">
          <div className="sw-tools">
            <button onClick={() => handleAIToolClick("what-next")}>What happens next?</button>
            <button onClick={() => handleAIToolClick("character")}>Character Builder</button>
            <button onClick={() => handleAIToolClick("dialogue")}>Dialogue Enhancer</button>
          </div>
          <div className="sw-stats">
            <div>Word Count: <span>{wordCount}</span></div>
            <div>Time Writing: <span>1h 23m</span></div>
            <div>Daily Goal: <span>86%</span></div>
          </div>
        </aside>
      )}

      {/* Modal Pop-up */}
      {modal.open && (
        <div className="sw-modal-overlay" onClick={closeModal}>
          <div className="sw-modal" onClick={e => e.stopPropagation()}>
            <button className="sw-modal-close" onClick={closeModal}>&times;</button>
            {renderModalContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryEditor;