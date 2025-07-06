
/**
 * @file SortMenu.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A dropdown menu component that allows the user to select a sorting option for the project cards
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaSort } from "react-icons/fa";

import sortOptions from '../../data/projectSortOptions';

const SortMenu = ({ sortBy, onSortChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Find currently selected option
    // Defaults to first option if sortBy is not found
    const currentOption = sortOptions.find(option => option.value === sortBy) || sortOptions[0];

    return (
        <div className="relative" ref={dropdownRef}>

            {/* Sort button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                    flex items-center gap-2 px-4 py-2
                    bg-slate-800/50 backdrop-blur-sm 
                    border border-slate-600/50 rounded-xl
                    text-gray-300 hover:text-white
                    transition-all duration-200
                    shadow-lg hover:shadow-xl
                    focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50
                "
            >
                <FaSort size={14} />
                <span className="text-sm font-medium">Sort by</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-sm font-medium text-[#00ff00]">
                    {currentOption.label}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <FaChevronDown size={12} />
                </motion.div>
            </button>

            {/* Dropdown menu section */}
            <AnimatePresence>

                {/* Only render dropdown if open */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="
                            absolute top-full mt-2 right-0 z-50
                            bg-slate-800/95 backdrop-blur-sm 
                            border border-slate-600/50 rounded-xl
                            shadow-2xl min-w-[200px]
                        "
                    >
                        <div className="p-2">
                            {/* Maps each of the dropdown items as a button */}
                            {sortOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleOptionClick(option)}
                                    className={`
                                        w-full flex items-center gap-3 px-3 py-2 rounded-lg
                                        text-sm font-medium transition-all duration-200
                                        ${sortBy === option.value
                                            ? "bg-[#00ff00]/20 text-[#00ff00]"
                                            : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                                        }
                                    `}
                                >
                                    <span className="text-base">{option.icon}</span>
                                    <span>{option.label}</span>
                                    {sortBy === option.value && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="ml-auto w-2 h-2 bg-[#00ff00] rounded-full"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SortMenu; 