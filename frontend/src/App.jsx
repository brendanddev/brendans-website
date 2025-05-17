
/**
 * @file App.jsx
 * @author Brendan Dileo
 * 
 * The root of my portfolio-website.
 * 
*/

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Me from './pages/Me';
import './App.css'
import "devicon/devicon.min.css";

import { ThemeProvider } from './context/ThemeContext';

/**
 * Sets up the routing of the portfolio-website.
 */
function App() {
  return (
    <ThemeProvider>

      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/me" element={<Me />} />
          </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
