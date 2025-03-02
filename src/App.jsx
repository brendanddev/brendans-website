
/**
 * @file App.jsx
 * @author Brendan Dileo
 * 
 * The main entry point of my portfolio-website.
 * This component is responsible for setting up routing between pages with React Router.
 * It renders the navigational component (NavBar) and handles routing to different pages
 * on the site like the Home page, or the About page.
 * 
*/

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'
import "devicon/devicon.min.css";

/**
 * Sets up the basic structure of the portfolio-website.
 * It initializes the React Router, and renders the NavBar and different page routes.
 * 
 * @returns {JSX.Element} - The JSX that contains the app layout, navigation and routed pages.
 */
function App() {
  return (
    // Sets up react router
    <Router>
      {/* Sets up NavBar */}
      <NavBar />
        {/* Specifies route paths */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  )
}

// Exports the App component
export default App;
