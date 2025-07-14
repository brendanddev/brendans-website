

/**
 * @file ViewModeToggle.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A toggle component that allows users to switch between grid and list view modes
 * on the projects page
 */


import { motion } from "framer-motion";
import { FaTh, FaList } from "react-icons/fa";


const ViewModeToggle = ({ viewMode, onViewModeChange }) => (
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
          aria-label="Grid view"
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
          aria-label="List view"
        >
          <FaList size={12} />
          <span className="hidden sm:inline">List</span>
        </button>
      </div>
    </div>
  </div>
);

export default ViewModeToggle; 