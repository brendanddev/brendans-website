
/**
 * @file SortMenu.jsx
 * @author Brendan Dileo, July 2025
 *
 * A responsive sort dropdown menu component with animated transitions used inside
 * the projects menu
 *
 */

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSort, FaChevronDown } from "react-icons/fa";
import sortOptions from '../../../data/projectSortOptions';

const SortMenu = ({ sortBy, onSortChange }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  // Calculate dropdown position on open
  useEffect(() => {
    if (isSortOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'fixed',
        top: rect.bottom + 4,
        left: rect.left,
        minWidth: rect.width,
        zIndex: 9999
      });
    }
  }, [isSortOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isSortOpen) return;
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSortOpen]);

  // Dropdown menu content
  const dropdownMenu = (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      style={dropdownStyle}
      className="bg-slate-800/95 backdrop-blur-sm border border-slate-600/50 rounded-xl shadow-2xl min-w-[180px]"
      role="listbox"
    >
      <div className="p-2">
        {sortOptions.map((option) => {
          const IconComponent = option.icon;
          return (
            <button
              key={option.value}
              onClick={() => {
                onSortChange(option.value);
                setIsSortOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-3 py-2 rounded-lg
                text-sm font-medium transition-all duration-200
                ${sortBy === option.value
                  ? "bg-[#00ff00]/20 text-[#00ff00]"
                  : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                }
              `}
              role="option"
              aria-selected={sortBy === option.value}
            >
              <IconComponent size={14} />
              <span>{option.label}</span>
              {sortBy === option.value && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-2 h-2 bg-[#00ff00] rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );

  return (
    <div className="relative">
      {/* Sort button */}
      <button
        ref={buttonRef}
        onClick={() => setIsSortOpen(!isSortOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl text-gray-300 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50"
        aria-haspopup="listbox"
        aria-expanded={isSortOpen}
      >
        <FaSort size={12} />
        <span className="text-xs font-medium">Sort</span>
        <motion.div animate={{ rotate: isSortOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FaChevronDown size={10} />
        </motion.div>
      </button>
      
      {/* Dropdown rendered in portal to avoid clipping */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>{isSortOpen && dropdownMenu}</AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default SortMenu; 