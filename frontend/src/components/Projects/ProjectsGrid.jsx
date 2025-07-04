
/**
 * @file ProjectsGrid.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A responsive grid layout that displays the project cards with optimized animations
 */

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectData from "../../data/projectData";
import { projectGridVariants, projectCardItemVariants } from "../../utils/variants/cards.js";

import { motion } from "framer-motion";

const ProjectsGrid = () => {
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

  return (
    <>
      <motion.div 
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-6 w-full max-w-7xl mx-auto"
        variants={projectGridVariants}
        initial="hidden"
        animate="visible"
        style={{
          willChange: "transform, opacity"
        }}
      >

        {/* Maps each project to a card component */}
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            variants={projectCardItemVariants}
            style={{
              willChange: "transform, opacity"
            }}
          >
            <ProjectCard 
              project={project} 
              index={index}
              onClick={handleProjectClick}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={handleToggleAutoPlay}
        onProjectSelect={handleProjectSelect}
      />
    </>
  );
};

export default ProjectsGrid;
