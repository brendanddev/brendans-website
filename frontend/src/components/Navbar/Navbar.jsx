
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
import MobileToggleButton from './MobileToggleButton';
import MobileMenu from './MobileMenu';

// Simple mobile detection hook
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
    
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isMobile = useIsMobile();
    
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
                    {/* Desktop NavLinks */}
                    <ul className="hidden md:flex gap-5 text-lg">
                        <NavLinks />
                    </ul>
                    {/* Mobile Toggle Button */}
                    {isMobile && (
                        <MobileToggleButton isOpen={isOpen} toggle={() => setIsOpen((prev) => !prev)} />
                    )}
                    </div>

                {/* Mobile Menu */}
                {isMobile && (
                <MobileMenu isOpen={isOpen} closeMenu={setIsOpen} />
                )}

            </div>
        </nav>
    );
};

export default NavBar;
