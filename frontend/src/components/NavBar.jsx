
/**
 * @file NavBar.jsx
 * @author Brendan Dileo
 * 
 * The NavBar component for my portfolio-website.
 * The component is relatively basic, consisting of unordered lists to display the page options.
 * But it makes use of the Link component from the React Router DOM library for state management 
 * across pages.
*/

import { Link } from "react-router-dom";

/**
 * NavBar Functional Component
 * 
 * This component structures and renders the navigation bar (navbar) onto a page.
 * Inside the navbar, links are provided to each of the different pages on the website using
 * the Link component.
 * 
 * @returns {JSX.Element} - The JSX structure of the NavBar.
 */
const NavBar = () => {
  return (
    <nav className="w-full bg-black border-b border-gray-700 p-4 font-mono text-[#00ff00] flex items-center justify-between z-40 relative">
      <div>
        <span className="font-semibold text-xl tracking-tight text-[#00ff00]">
          Brendan Dileo
        </span>
      </div>

      <ul className="flex gap-5 text-lg">
        <li className="hover:text-[#00ff00]">
          <span className="text-[#00ff00]">[</span>
          {/* Link Component from React Router DOM */}
          <Link to="/" className="text-[#00ff00] hover:text-[#00ff00]">home</Link>
          <span className="text-[#00ff00]">]</span>
        </li>
        <li className="hover:text-[#00ff00]">
          <span className="text-[#00ff00]">[</span>
          <Link to="/about" className="text-[#00ff00] hover:text-[#00ff00]">about</Link>
          <span className="text-[#00ff00]">]</span>
        </li>
        <li className="hover:text-[#00ff00]">
          <span className="text-[#00ff00]">[</span>
          <Link to="/projects" className="text-[#00ff00] hover:text-[#00ff00]">projects</Link>
          <span className="text-[#00ff00]">]</span>
        </li>
        <li className="hover:text-[#00ff00]">
          <span className="text-[#00ff00]">[</span>
          <Link to="/contact" className="text-[#00ff00] hover:text-[#00ff00]">contact</Link>
          <span className="text-[#00ff00]">]</span>
        </li>
      </ul>
    </nav>
  );
};

// Exports the NavBar component so it can be used throughout the website.
export default NavBar;