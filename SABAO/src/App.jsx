import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Home from './components/home/home';
import Story from './Story';
import ChapterRead from './components/story/ChapterReader';
import Genres from './components/Genres/genres';
import StoryEditor from './components/editor/StoryEditor';
import LoginPage from './components/pagges/LoginPage';
import RegisterPage from './components/pagges/RegisterPage';
import ResetPage from './components/pagges/ResetPage';
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
                <Route path="/genres" element={<Genres />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/reset" element={<ResetPage />} />
            </Routes>
        </Router>
    );
}

export default App;