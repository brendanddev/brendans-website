
/**
 * @file ProjectsMenu.jsx
 * @author Brendan Dileo, July 2025
 *
 * A menu component that contains a basic toggle view, project count, search bar, and sort dropdown
 * to display on the projects page
 */


import ViewModeToggle from './ViewModeToggle';
import ProjectCount from './ProjectCount';
import SearchBar from './SearchBar';
import SortMenu from './SortMenu';


const ProjectsMenu = ({
    viewMode,
    onViewModeChange,
    projectCount,
    sortBy,
    onSortChange,
    searchQuery,
    onSearch
}) => {
    return (
        // Main menu container
        <div className="relative z-50 flex flex-col sm:flex-row items-center gap-4 
        bg-slate-800/40 backdrop-blur-xl border border-slate-600/20 
        rounded-2xl p-4 shadow-lg
        ">  
            {/* Menu components */}
            <ViewModeToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
            <ProjectCount projectCount={projectCount} />
            <SearchBar searchQuery={searchQuery} onSearch={onSearch} />
            <SortMenu sortBy={sortBy} onSortChange={onSortChange} />
        </div>
    );
};

export default ProjectsMenu; 