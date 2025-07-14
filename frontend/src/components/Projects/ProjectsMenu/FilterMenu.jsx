
/**
 * @file FilterMenu.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A responsive filter dropdown menu component that allows the user to filter the projects
 * on the projects page by the technology used in the project
 * 
 */


import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter, FaChevronDown, FaTimes } from "react-icons/fa";


const FilterMenu = ({ techOptions, selectedTech, onTechChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>

            {/* Filter button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                flex items-center gap-2 px-3 py-2
                bg-slate-700/50 backdrop-blur-sm 
                border border-slate-600/30 rounded-xl
                text-gray-300 hover:text-white
                transition-all duration-200
                shadow-sm hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50
                "
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                {/* Filter icon and label */}
                <FaFilter size={12} />
                <span className="text-xs font-medium">Filter</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <FaChevronDown size={10} />
                </motion.div>
            </button>

            {/* Dropdown menu */}
            <AnimatePresence>
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
                        shadow-2xl min-w-[180px]"
                        role="listbox"
                    >
                        {/* Defines the dropdown content */}
                        <div className="p-2">
                            <button
                                onClick={() => onTechChange("")}
                                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                !selectedTech
                                    ? "bg-[#00ff00]/20 text-[#00ff00]"
                                    : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                                }`}
                                role="option"
                                aria-selected={!selectedTech}
                            >
                                <FaTimes size={12} />
                                <span>All Technologies</span>
                            </button>
                        
                            {/* Map through tech option */}
                            {techOptions.map((tech) => (
                                <button
                                    key={tech}
                                    onClick={() => onTechChange(tech)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        selectedTech === tech
                                        ? "bg-[#00ff00]/20 text-[#00ff00]"
                                        : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                                    }`}
                                    role="option"
                                    aria-selected={selectedTech === tech}
                                >
                                    <span>{tech}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FilterMenu;
