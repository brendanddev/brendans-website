
/**
 * @file ProjectsGrid.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A responsive grid layout that displays the project cards with optimized animations
 */

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectData from "../../data/projectData";
import { projectGridVariants, projectCardItemVariants } from "../../utils/variants/cards.js";

import { motion } from "framer-motion";

const ProjectsGrid = () => {
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
            />
          </motion.div>
        ))}
      </motion.div>
      
      <ProjectModal 
        isOpen={true}
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
