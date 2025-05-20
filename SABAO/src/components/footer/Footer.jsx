import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleChallengesClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <footer className="landing-footer">
      <div className="footer-content-row">
        <div className="footer-left">
          <div className="footer-title">StoryWeaver</div>
          <div className="footer-desc">Where stories come to life. Join our community of writers and readers.</div>
        </div>
        <div className="footer-links">
          <div className="footer-links-title">Quick Links</div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home">Explore Stories</Link></li>
            <li><Link to="/editor">Write a Story</Link></li>
            <li><a href="#" onClick={handleChallengesClick}>Challenges</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <div className="footer-links-title">Follow Us</div>
          <div className="footer-icons">
            <a href="#"><span>🐦</span></a>
            <a href="#"><span>📘</span></a>
            <a href="#"><span>📸</span></a>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="footer-modal-overlay" onClick={closeModal}>
          <div className="footer-modal" onClick={e => e.stopPropagation()}>
            <button
              className="footer-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >&times;</button>
            <h3 style={{ marginBottom: 12 }}>Coming Soon!</h3>
            <p>The Challenges feature is coming soon. Stay tuned!</p>
          </div>
        </div>
      )}
      <div className="footer-copyright">
        © 2025 StoryWeaver. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;