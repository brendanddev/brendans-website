
/**
 * @file useProjectHandlers.js
 * @author Brendan Dileo, July 2025
 * 
 * Custom hook for managing project modal state, handlers, and navigation
 */


import { useState, useEffect } from "react";
import projectData from "../data/projectData";

const useProjectHandlers = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const [viewMode, setViewMode] = useState("grid");
    
    
    // Open handler
    const handleProjectClick = (project) => {
        // Find the index of the clicked project
        // This allows for the setting of the current index for nav
        const index = projectData.findIndex(p => p.title === project.title);
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
        const index = projectData.findIndex(p => p.title === project.title);
        setCurrentIndex(index);
        setSelectedProject(project);
    };

    // Navigation handlers
    const handleNext = () => {
        if (currentIndex < projectData.length - 1) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setSelectedProject(projectData[nextIndex]);
        }
    };

    // Handles previous navigation
    const handlePrev = () => {
        if (currentIndex > 0) {
        const prevIndex = currentIndex - 1;
        setCurrentIndex(prevIndex);
        setSelectedProject(projectData[prevIndex]);
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

    // Auto-play effect
    useEffect(() => {
        if (isAutoPlaying && isModalOpen) {
            const interval = setInterval(() => {
                if (currentIndex < projectData.length - 1) {
                const nextIndex = currentIndex + 1;
                setCurrentIndex(nextIndex);
                setSelectedProject(projectData[nextIndex]);
                } else {
                setCurrentIndex(0);
                setSelectedProject(projectData[0]);
                }
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, currentIndex, isModalOpen]);

    return {
        selectedProject,
        isModalOpen,
        currentIndex,
        isAutoPlaying,
        viewMode,
        setViewMode,
        handleProjectClick,
        handleCloseModal,
        handleProjectSelect,
        handleNext,
        handlePrev,
        handleToggleAutoPlay,
        handleViewModeChange
    };

}

export default useProjectHandlers;