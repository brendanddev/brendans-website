
/**
 * @file App.jsx
 * @author Brendan Dileo
 * 
 * The root of my portfolio-website.
 * 
*/

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Highlights from './pages/Highlights';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'
import "devicon/devicon.min.css";

/**
 * Sets up the routing of the portfolio-website.
 */
function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  )
}

export default App;
