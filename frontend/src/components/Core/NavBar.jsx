
/**
 * @file NavBar.jsx
 * @author Brendan Dileo
 * 
 * The NavBar component for my portfolio-website
*/

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mobileMenuVariants } from "../../animations/navBarVariants";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // List of links for the nav bar
  const links = [
    { to: "/", label: "home" },
    { to: "/about", label: "about" },
    { to: "/projects", label: "projects" },
    { to: "/contact", label: "contact" },
  ];

  // Closes mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Renders the links in nav
  const renderLinks = (closeMenu = false, isMobile = false) =>
    links.map(({ to, label }, index) => {
      const isActive = location.pathname === to;

      return (
        <motion.li
          key={label}
          initial={isMobile ? { opacity: 0, x: -20 } : false}
          animate={isMobile ? { opacity: 1, x: 0 } : false}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <span className="text-gray-500">[</span>
          <Link
            to={to}
            onClick={closeMenu ? () => setIsOpen(false) : undefined}
            className={`
              relative px-2 py-1 transition-all duration-300
              hover:text-[#00ff00] focus:text-[#00ff00]
              focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:ring-offset-2 focus:ring-offset-black
              ${isActive ? 'text-[#00ff00] font-semibold' : 'text-gray-300'}
              ${isMobile ? 'block py-3 px-4 hover:bg-gray-800/50 rounded-lg' : ''}
            `}
            aria-current={isActive ? 'page' : undefined}
          >
            {label}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff00]"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
          <span className="text-gray-500">]</span>
        </motion.li>
      );
    });

  return (
    <nav
      className="w-full bg-black border-b border-gray-700 p-4 font-mono text-[#00ff00] relative z-40"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">

          <motion.div
            className="font-semibold text-xl tracking-tight text-[#00ff00]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 rounded">
              Brendan Dileo
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-5 text-lg">
            {renderLinks()}
          </ul>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-[#00ff00] p-2 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Menu for mobile devices */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden border-t border-gray-700 bg-black mt-4"
            >
              <ul className="py-4 space-y-2 font-mono text-lg">
                {renderLinks(true, true)}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
