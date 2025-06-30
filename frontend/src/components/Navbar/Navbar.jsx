
/**
 * @file NavBar.jsx
 * @author Brendan Dileo
 * 
 * The NavBar component for my portfolio-website
*/

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NavLogo from "./NavLogo";
import NavLinks from './NavLinks';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    // Closes navbar when a link is clicked
    useEffect(() => setIsOpen(false), [location.pathname]);
    
    // Closes navbar when escape key is pressed
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && isOpen) setIsOpen(false);
        };
        
        // Adds event listener to listen for escape key presses
        // When escape key pressed, navbar closes
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

  return (
    <nav
      className="w-full bg-black border-b border-gray-700 p-4 font-mono text-[#00ff00] relative z-40"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo that brings back to home page */}
          <NavLogo />
          <ul className="hidden md:flex gap-5 text-lg">
            {/* Renders the links in the navbar */}
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
