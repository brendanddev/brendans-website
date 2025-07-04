
/**
 * @file ProjectsGrid.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A responsive grid layout that displays the project cards with optimized animations
 */

import ProjectModal from "./ProjectModal";

const ProjectsGrid = () => {

  return (
    <>
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrev={handlePrev}
        isAutoPlaying={isAutoPlaying}
        onToggleAutoPlay={handleToggleAutoPlay}
      />
    </>
  );
};

export default ProjectsGrid;
