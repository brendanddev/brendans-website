
/**
 * @file ProjectsMenu.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A unified filter menu component that combines view mode, search, and sorting controls
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTh, FaList, FaSearch, FaTimes, FaChevronDown, FaSort } from "react-icons/fa";
import sortOptions from '../../../data/projectSortOptions';

const ProjectsMenu = ({ 
    viewMode, 
    onViewModeChange, 
    projectCount, 
    sortBy, 
    onSortChange, 
    searchQuery, 
    onSearch 
}) => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsSortOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Get the current sort label
    const getSortLabel = (sortBy) => {
        const sortLabels = {
            "newest": "Newest First",
            "oldest": "Oldest First", 
            "name-asc": "A - Z",
            "name-desc": "Z - A",
            "stars": "Most Stars",
            "popularity": "Most Popular"
        };
        return sortLabels[sortBy] || "Newest First";
    };

    const currentSortOption = sortOptions.find(option => option.value === sortBy) || sortOptions[0];

    return (
        <div className="
            flex flex-col sm:flex-row items-center gap-4 
            bg-slate-800/40 backdrop-blur-xl border border-slate-600/20 
            rounded-2xl p-4 shadow-lg
        ">
            {/* Left Section: View Mode Toggle */}
            <div className="flex items-center justify-center">
                <div className="
                    relative bg-slate-700/50 backdrop-blur-sm 
                    border border-slate-600/30 rounded-xl p-1
                    shadow-sm
                ">
                    {/* Background slider */}
                    <motion.div
                        className="absolute inset-1 bg-gradient-to-r from-[#00ff00] to-emerald-500 rounded-lg"
                        initial={false}
                        animate={{
                            x: viewMode === "list" ? "100%" : "0%",
                            width: "calc(50% - 2px)"
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                    
                    {/* Toggle buttons */}
                    <div className="relative flex">
                        <button
                            onClick={() => onViewModeChange("grid")}
                            className={`
                                relative flex items-center gap-2 px-3 py-2 rounded-lg
                                font-medium text-sm transition-colors duration-200
                                ${viewMode === "grid" 
                                    ? "text-slate-900" 
                                    : "text-gray-300 hover:text-white"
                                }
                            `}
                        >
                            <FaTh size={12} />
                            <span className="hidden sm:inline">Grid</span>
                        </button>
                        
                        <button
                            onClick={() => onViewModeChange("list")}
                            className={`
                                relative flex items-center gap-2 px-3 py-2 rounded-lg
                                font-medium text-sm transition-colors duration-200
                                ${viewMode === "list" 
                                    ? "text-slate-900" 
                                    : "text-gray-300 hover:text-white"
                                }
                            `}
                        >
                            <FaList size={12} />
                            <span className="hidden sm:inline">List</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Center Section: Project Count */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="font-semibold text-slate-300">
                    {projectCount} {projectCount === 1 ? 'project' : 'projects'}
                </span>
            </div>

            {/* Search Section */}
            <div className="relative flex-1 sm:flex-none sm:min-w-[240px]">
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
                    <FaSearch 
                        className={`
                            ml-3 text-slate-400 transition-colors duration-300
                            ${isSearchFocused ? "text-[#00ff00]" : ""}
                        `} 
                        size={14} 
                    />
                    
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
                    />
                    
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
                        >
                            <FaTimes size={12} />
                        </motion.button>
                    )}
                </motion.div>
            </div>

            {/* Right Section: Sort Menu */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="
                        flex items-center gap-2 px-3 py-2
                        bg-slate-700/50 backdrop-blur-sm 
                        border border-slate-600/30 rounded-xl
                        text-gray-300 hover:text-white
                        transition-all duration-200
                        shadow-sm hover:shadow-md
                        focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50
                    "
                >
                    <FaSort size={12} />
                    <span className="text-xs font-medium">Sort</span>
                    <motion.div
                        animate={{ rotate: isSortOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaChevronDown size={10} />
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isSortOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="
                                absolute top-full mt-2 right-0 z-50
                                bg-slate-800/95 backdrop-blur-sm 
                                border border-slate-600/50 rounded-xl
                                shadow-2xl min-w-[180px]
                            "
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
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProjectsMenu; 