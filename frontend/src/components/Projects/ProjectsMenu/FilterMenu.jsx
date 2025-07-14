
/**
 * @file FilterMenu.jsx
 * @author Brendan Dileo, July 2025
 *
 * A responsive filter dropdown menu component that allows the user to filter the projects
 * on the projects page by the technology used in the project
 * 
 */

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter, FaChevronDown, FaTimes } from "react-icons/fa";

const FilterMenu = ({ techOptions, selectedTech, onTechChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownStyle, setDropdownStyle] = useState({});
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    // Calculate dropdown position on open
    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownStyle({
                position: 'fixed',
                top: rect.bottom + 4,
                left: rect.left,
                minWidth: rect.width,
                zIndex: 9999
            });
        }
    }, [isOpen]);

    // Close dropdown on outside click
    useEffect(() => {
        if (!isOpen) return;
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Dropdown menu content
    const dropdownMenu = (
        <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={dropdownStyle}
            className="bg-slate-800/95 backdrop-blur-sm border border-slate-600/50 rounded-xl shadow-2xl min-w-[180px] max-h-72 overflow-y-auto"
            role="listbox"
        >
            <div className="p-2">
                <button
                    onClick={() => { onTechChange(""); setIsOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        !selectedTech
                            ? "bg-[#00ff00]/20 text-[#00ff00]"
                            : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                    role="option"
                    aria-selected={!selectedTech}
                >
                    <FaTimes size={12} />
                    <span>All</span>
                </button>
                {techOptions.map((tech) => (
                    <button
                        key={tech}
                        onClick={() => { onTechChange(tech); setIsOpen(false); }}
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
    );

    return (
        <div className="relative">
            
            {/* Filter button */}
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl text-gray-300 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <FaFilter size={12} />
                <span className="text-xs font-medium">Filter</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FaChevronDown size={10} />
                </motion.div>
            </button>

            {/* Dropdown rendered in portal to avoid clipping */}
            {typeof window !== 'undefined' && createPortal(
                <AnimatePresence>{isOpen && dropdownMenu}</AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default FilterMenu;
