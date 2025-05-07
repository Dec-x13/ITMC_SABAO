import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Story from './Story'; 
import HomePage from './components/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/landing/LandingPage';
import Genres from './components/Genres/genres'

createRoot(document.getElementById('root')).render(

    <Genres />
    
 
)
