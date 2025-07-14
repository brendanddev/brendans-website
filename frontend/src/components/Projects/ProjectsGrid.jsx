
/**
 * @file ProjectsGrid.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A responsive grid layout that displays the project cards with optimized animations
 */

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ProjectsMenu from "./ProjectsMenu/ProjectsMenu.jsx";
import useProjectHandlers from "../../hooks/useProjectHandlers.js";
import projectData from "../../data/projectData";
import { useState, useMemo } from "react";

import { projectGridVariants, projectCardItemVariants } from "../../utils/variants/cards.js";
import { motion } from "framer-motion";

const ProjectsGrid = () => {
  // Technology filter state
  const [selectedTech, setSelectedTech] = useState("");

  // Generate unique technology options from all projects
  const techOptions = useMemo(() => {
    const allTechs = projectData.flatMap(p =>
      p.techBreakdown ? p.techBreakdown.map(t => t.name) : []
    );
    return Array.from(new Set(allTechs)).sort();
  }, []);

  // Filter projects by selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projectData;
    return projectData.filter(p =>
      p.techBreakdown && p.techBreakdown.some(t => t.name === selectedTech)
    );
  }, [selectedTech]);

  // Custom hook to manage project modal state and handlers
  const {
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
  } = useProjectHandlers(filteredProjects);

  return (
    <>
      {/* Main Projects Menu */}
      <div className="mb-8 px-4 md:px-6">
        <ProjectsMenu
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
          projectCount={sortedProjects.length}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          searchQuery={searchQuery}
          onSearch={handleSearchChange}
          techOptions={techOptions}
          selectedTech={selectedTech}
          onTechChange={setSelectedTech}
        />
      </div>

      {/* Projects cards grid */}
      <motion.div 
        className={`
          relative z-10 w-full max-w-7xl mx-auto
          ${viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-6" 
            : "space-y-4 p-4 md:p-6"
          }
        `}
        variants={projectGridVariants}
        initial="hidden"
        animate="visible"
        style={{
          willChange: "transform, opacity"
        }}
      >

        {/* Maps each project to a card component */}
        {sortedProjects.map((project, index) => (
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
              viewMode={viewMode}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Conditionally show project modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={handleToggleAutoPlay}
        onProjectSelect={handleProjectSelect}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={currentIndex}
      />
    </>
  );
};

export default ProjectsGrid;
