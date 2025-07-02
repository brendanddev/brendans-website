
/**
 * @file ProjectsGrid.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A responsive grid layout that displays the project cards
 */

import ProjectCard from "./ProjectCard";
import projectData from "../../projectData";
import { motion } from "framer-motion";

const ProjectsGrid = () => (
    <motion.div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-6 w-full max-w-7xl mx-auto">
        {/* Maps each project to a card component */}
        {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
        ))}
  </motion.div>
);

export default ProjectsGrid;
