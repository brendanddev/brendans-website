
/**
 * @file useProjectHandlers.js
 * @author Brendan Dileo, July 2025
 * 
 * Custom hook for managing project modal state, handlers, and navigation
 */

import { useState, useEffect, useMemo } from "react";
import projectData from "../data/projectData";
import { sortProjects } from "../utils/sortProjects.js";

const useProjectHandlers = (projects = projectData) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const [viewMode, setViewMode] = useState("grid");
    const [sortBy, setSortBy] = useState("newest");
    const [searchQuery, setSearchQuery] = useState("");
    
    // Filter and sort projects based on current criteria
    const sortedProjects = useMemo(() => {
        let filteredProjects = projects;
        
        // Apply search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            filteredProjects = projects.filter(project => 
                project.title.toLowerCase().includes(query) ||
                project.desc.toLowerCase().includes(query) ||
                project.technologies?.some(tech => tech.toLowerCase().includes(query)) ||
                project.features?.some(feature => feature.toLowerCase().includes(query))
            );
        }
        
        // Apply sorting
        return sortProjects(filteredProjects, sortBy);
    }, [projects, sortBy, searchQuery]);
    
    // Open handler
    const handleProjectClick = (project) => {
        // Find the index of the clicked project
        // This allows for the setting of the current index for nav
        const index = projects.findIndex(p => p.title === project.title);
        setCurrentIndex(index);
        setSelectedProject(project);
        setIsModalOpen(true);
    };
    
    // Close handler
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        setIsAutoPlaying(false);
    };

    // Project selection handler for related projects
    const handleProjectSelect = (project) => {
        const index = projects.findIndex(p => p.title === project.title);
        setCurrentIndex(index);
        setSelectedProject(project);
    };

    // Navigation handlers
    const handleNext = () => {
        if (currentIndex < projects.length - 1) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setSelectedProject(projects[nextIndex]);
        }
    };

    // Handles previous navigation
    const handlePrev = () => {
        if (currentIndex > 0) {
        const prevIndex = currentIndex - 1;
        setCurrentIndex(prevIndex);
        setSelectedProject(projects[prevIndex]);
        }
    };

    // Toggles auto play handler
    const handleToggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    // Handles view mode change for project cards grid
    const handleViewModeChange = (mode) => {
        setViewMode(mode);
    };

    // Handles search query changes
    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    // Auto-play effect
    useEffect(() => {
        if (isAutoPlaying && isModalOpen) {
            const interval = setInterval(() => {
                if (currentIndex < projects.length - 1) {
                const nextIndex = currentIndex + 1;
                setCurrentIndex(nextIndex);
                setSelectedProject(projects[nextIndex]);
                } else {
                setCurrentIndex(0);
                setSelectedProject(projects[0]);
                }
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, currentIndex, isModalOpen, projects]);

    // Handles the change of the selected sort option
    const handleSortChange = (value) => {
        setSortBy(value);
    };

    return {
        selectedProject,
        isModalOpen,
        currentIndex,
        isAutoPlaying,
        viewMode,
        sortBy,
        searchQuery,
        sortedProjects,
        handleProjectClick,
        handleCloseModal,
        handleProjectSelect,
        handleNext,
        handlePrev,
        handleToggleAutoPlay,
        handleViewModeChange,
        handleSortChange,
        handleSearchChange
    };
};

export default useProjectHandlers;