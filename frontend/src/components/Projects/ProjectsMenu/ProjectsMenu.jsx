
/**
 * @file ProjectsMenu.jsx
 * @author Brendan Dileo, July 2025
 *
 * A menu component that contains a basic toggle view, project count, search bar, and sort dropdown
 * to display on the projects page. Updated July 2025 for improved mobile responsiveness:
 * - On mobile, menu is horizontally scrollable and controls are spaced for touch.
 * - On desktop, menu remains a row.
 */

import ViewModeToggle from './ViewModeToggle';
import ProjectCount from './ProjectCount';
import SearchBar from './SearchBar';
import SortMenu from './SortMenu';
import FilterMenu from './FilterMenu';

const ProjectsMenu = ({
    viewMode,
    onViewModeChange,
    projectCount,
    sortBy,
    onSortChange,
    searchQuery,
    onSearch,
    techOptions,
    selectedTech,
    onTechChange
}) => {
    return (
        // Responsive menu container
        <div
            className="relative z-50 flex flex-nowrap sm:flex-row items-center gap-3 sm:gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700/50 scrollbar-track-transparent bg-slate-800/40 backdrop-blur-xl border border-slate-600/20 rounded-2xl p-2 sm:p-4 shadow-lg"
            style={{ WebkitOverflowScrolling: 'touch' }}
            tabIndex={0}
            aria-label="Projects menu"
        >
            {/* Each menu item is spaced for touch on mobile */}
            <div className="flex-shrink-0"><ViewModeToggle viewMode={viewMode} onViewModeChange={onViewModeChange} /></div>
            <div className="flex-shrink-0"><ProjectCount projectCount={projectCount} /></div>
            <div className="flex-shrink-0 min-w-[160px] max-w-xs w-full"><SearchBar searchQuery={searchQuery} onSearch={onSearch} /></div>
            <div className="flex-shrink-0"><FilterMenu techOptions={techOptions} selectedTech={selectedTech} onTechChange={onTechChange} /></div>
            <div className="flex-shrink-0"><SortMenu sortBy={sortBy} onSortChange={onSortChange} /></div>
        </div>
    );
};

export default ProjectsMenu; 