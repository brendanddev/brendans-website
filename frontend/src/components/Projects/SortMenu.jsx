
/**
 * @file SortMenu.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A dropdown menu component that allows the user to select a sorting option for the project cards
 */

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaSort } from "react-icons/fa";

const SortMenu = ({ sortBy }) => {
    
    return (
        <div className="relative">

            {/* Sort button section */}
            <button
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
                </span>
                <motion.div
                    transition={{ duration: 0.2 }}
                >
                    <FaChevronDown size={12} />
                </motion.div>
            </button>

            {/* Dropdown menu section */}
            <AnimatePresence>
            </AnimatePresence>
        </div>
    );
};

export default SortMenu; 