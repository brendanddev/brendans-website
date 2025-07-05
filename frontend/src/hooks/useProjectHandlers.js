
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
    
    
    // Open handler
    const handleProjectClick = (project) => {
        // Find the index of the clicked project
        // This allows for the setting of the current index for nav
        const index = projectData.findIndex(p => p.title === project.title);
        setCurrentIndex(index);
        setSelectedProject(project);
        setIsModalOpen(true);
      };
    
     

}

export default useProjectHandlers;