import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Story from './Story'; 
import HomePage from './components/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LandingPage from './components/landing/LandingPage';
import App from './App';
import "./index.css"

createRoot(document.getElementById('root')).render(

    <App />
    
 
)
