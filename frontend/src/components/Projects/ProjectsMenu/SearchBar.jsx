
/**
 * @file SearchBar.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A responsive search bar component with animated icon and clear button
 * used to search for projects on the projects page
 */


import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ searchQuery, onSearch }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="relative flex-1 sm:flex-none sm:min-w-[240px]">
      
      {/* Search bar container with animated background and icon */}
      <motion.div
        className={`
          relative flex items-center
          bg-slate-700/50 backdrop-blur-sm 
          border border-slate-600/30 rounded-xl
          transition-all duration-300 ease-out
          ${isSearchFocused 
            ? "border-slate-500/50 bg-slate-700/70 shadow-md" 
            : "hover:border-slate-500/40 hover:bg-slate-700/60"
          }
        `}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
      >
        {/* Search icon */}
        <FaSearch 
          className={`
            ml-3 text-slate-400 transition-colors duration-300
            ${isSearchFocused ? "text-[#00ff00]" : ""}
          `} 
          size={14} 
        />

        {/* Input field */}
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          className="
            flex-1 px-3 py-2 bg-transparent 
            text-slate-300 placeholder-slate-500
            text-sm font-medium
            focus:outline-none
            transition-colors duration-300
          "
          aria-label="Search projects"
        />

        {/* Clear button thats only visible when search query is not empty */}
        {searchQuery && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => onSearch("")}
            className="
              mr-2 p-1 rounded-lg
              text-slate-400 hover:text-slate-300
              hover:bg-slate-600/50
              transition-all duration-200
            "
            aria-label="Clear search"
          >
            <FaTimes size={12} />
          </motion.button>
        )}
        
      </motion.div>
    </div>
  );
};

export default SearchBar; 