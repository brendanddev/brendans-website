
/**
 * @file ProjectsMenu.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A menu component that contains a basic toggle view, project count, search bar, and sort dropdown
 * to display on the projects page
 */


import { useState } from "react";
import SearchBar from "./SearchBar";
import SortMenu from "./SortMenu";
import FilterMenu from "./FilterMenu";
import QuickActions from "./QuickActions";
import ProjectCount from "./ProjectCount";
import ProjectStats from "./ProjectStats";

const ProjectsMenu = ({ totalProjects, onExport, onSurprise }) => {
    
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("newest");
    const [filters, setFilters] = useState([]);
    const [viewMode, setViewMode] = useState("grid");

    const handleSearch = (query) => setSearchQuery(query);
    const handleSortChange = (sort) => setSortBy(sort);
    const handleFilterChange = (newFilters) => setFilters(newFilters);
    const handleViewModeChange = (mode) => setViewMode(mode);
    const handleClearAll = () => {
        setSearchQuery("");
        setSortBy("newest");
        setFilters([]);
        setViewMode("grid");
    };    

    return (
        <section className="w-full px-2 sm:px-0 mb-6">
            <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-6 items-center">
            
                {/* Filters & view mode */}
                <div className="md:col-span-4 w-full flex flex-col gap-2">
                    <FilterMenu
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        viewMode={viewMode}
                        onViewModeChange={handleViewModeChange}
                    />
                </div>

                {/* Search and sort */}
                <div className="md:col-span-5 w-full flex flex-col gap-2">
                    <SearchBar
                        searchQuery={searchQuery}
                        onSearch={handleSearch}
                    />

                    <SortMenu
                        sortBy={sortBy}
                        onSortChange={handleSortChange}
                    />
                </div>


                {/* Actions and stats */}
                <div className="md:col-span-3 w-full flex flex-col gap-2 items-end">
                    <QuickActions
                        onClearAll={handleClearAll}
                        onExport={onExport}
                        onSurprise={onSurprise}
                    />
                    <ProjectCount total={totalProjects} activeFilters={filters.length} />
                    <ProjectStats total={totalProjects} filters={filters} />
                </div>

            </div>

        </section>
    );
};

export default ProjectsMenu;
