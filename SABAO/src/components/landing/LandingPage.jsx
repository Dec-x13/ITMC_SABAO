import React from 'react';
import Navbar from '../navbar/navbar';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-root">
      <Navbar />
      <div className="landing-bg-blur"></div>
      <main className="landing-main">
        <h1 className="landing-title">Where Stories Come to Life</h1>
        <p className="landing-subtitle">
          Join our community of writers and readers. Create, share, and discover amazing stories.
        </p>
        <div className="landing-buttons">
          <Link to="/editor" className="landing-btn primary">Start Writing</Link>
          <Link to="/home" className="landing-btn">Explore Stories</Link>
        </div>
        <section className="landing-info">
          <div className="landing-info-header">
            <span className="landing-info-icon">ℹ️</span>
            <span className="landing-info-title">Info</span>
          </div>
          <p>
            StoryWeaver is a dynamic platform designed for writers of all skill levels to explore their creativity, share their stories, and connect with a vibrant community of fellow storytellers. Whether you’re an aspiring novelist, a casual writer, or simply someone who loves to craft imaginative tales, StoryWeaver provides the tools and inspiration you need to bring your ideas to life.
          </p>
          <p>
            Our platform offers interactive features to enhance your storytelling experience, improve writing skills, and encourage collaboration. Join a space where creativity knows no bounds, feedback fuels growth, and stories come to life. Start your writing journey with StoryWeaver today!
          </p>
        </section>
      </main>
      <footer className="landing-footer">
        <div className="footer-left">
          <div className="footer-title">StoryWeaver</div>
          <div className="footer-desc">Where stories come to life. Join our community of writers and readers.</div>
        </div>
        <div className="footer-links">
          <div className="footer-links-title">Quick Links</div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore Stories</a></li>
            <li><a href="#">Write a Story</a></li>
            <li><a href="#">Challenges</a></li>
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
        <div className="footer-copyright">
          © 2025 StoryWeaver. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;