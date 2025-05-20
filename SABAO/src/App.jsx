import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Home from './components/home/home';
import Story from './Story';
import ChapterRead from './components/story/ChapterReader';
import StoryEditor from './components/editor/StoryEditor';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/story/:id" element={<Story />} />
                <Route path="/chapter/:id" element={<ChapterRead />} />
                <Route path="/editor" element={<StoryEditor />} />
            </Routes>
        </Router>
    );
}

export default App;