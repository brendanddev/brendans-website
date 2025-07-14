
/**
 * @file SearchBar.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable search bar component for filtering projects by a specified criteria
 */

import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ searchQuery, onSearch }) => {
    return (
        <div className="relative w-full" role="search">

            {/* Search icon */}
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <FaSearch aria-hidden="true" />
            </span>

            {/* Search input */}
            <input
                type="text"
                className="w-full pl-10 pr-10 py-2 rounded-lg bg-slate-700/50 border border-slate-600/30 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 transition-all"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={e => onSearch(e.target.value)}
                aria-label="Search projects"
            />

            {/* Clear button */}
            {searchQuery && (
                <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50"
                onClick={() => onSearch("")}
                aria-label="Clear search"
                >
                <FaTimes />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
