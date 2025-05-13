
/**
 * @file main.jsx
 * @author Brendan Dileo
 * 
 * Main entry point to my portfolio website.
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
