import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Story from './Story'; 
import HomePage from './components/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/landing/LandingPage';
import "./index.css"

createRoot(document.getElementById('root')).render(

    <HomePage />
    
 
)
