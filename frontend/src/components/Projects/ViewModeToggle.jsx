
/**
 * @file ViewModeToggle.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A toggle component for switching between grid and list view modes
 */

import { motion } from "framer-motion";
import { FaTh, FaList } from "react-icons/fa";

const ViewModeToggle = ({ viewMode, onViewModeChange }) => {
    return (
        <div className="flex items-center justify-center mb-8">
            <div className="
                relative bg-slate-800/50 backdrop-blur-sm 
                border border-slate-600/50 rounded-xl p-1
                shadow-lg
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
                    
                    {/* Grid view button */}
                    <button
                        onClick={() => onViewModeChange("grid")}
                        className={`
                            relative flex items-center gap-2 px-4 py-2 rounded-lg
                            font-medium text-sm transition-colors duration-200
                            ${viewMode === "grid" 
                                ? "text-slate-900" 
                                : "text-gray-300 hover:text-white"
                            }
                        `}
                    >
                        <FaTh size={14} />
                        <span className="hidden sm:inline">Grid</span>
                    </button>
                    
                    {/* List view button */}
                    <button
                        onClick={() => onViewModeChange("list")}
                        className={`
                            relative flex items-center gap-2 px-4 py-2 rounded-lg
                            font-medium text-sm transition-colors duration-200
                            ${viewMode === "list" 
                                ? "text-slate-900" 
                                : "text-gray-300 hover:text-white"
                            }
                        `}
                    >
                        <FaList size={14} />
                        <span className="hidden sm:inline">List</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewModeToggle; 