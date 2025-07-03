
/**
 * @file ProjectsGrid.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A responsive grid layout that displays the project cards with optimized animations
 */

import ProjectCard from "./ProjectCard";
import projectData from "../../data/projectData";

import { containerVariants, gridItemVariants } from "../../utils/variants";
import { motion } from "framer-motion";

const ProjectsGrid = () => {

  return (
    <motion.div 
      className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-6 w-full max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        willChange: "transform, opacity",
        transform: "translate3d(0, 0, 0)"
      }}
    >
      {/* Maps each project to a card component */}
      {projectData.map((project, index) => (
        <motion.div
          key={index}
          variants={gridItemVariants}
          style={{
            willChange: "transform, opacity",
            transform: "translate3d(0, 0, 0)"
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsGrid;
