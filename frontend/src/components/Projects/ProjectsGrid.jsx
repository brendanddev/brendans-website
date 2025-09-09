
/**
 * @file ProjectsGrid.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Creates a grid layout for displaying ProjectCard components on the Projects page.
 */


import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants } from '../../animations/projectsVariants';

import ProjectCard from './ProjectsCard';


const ProjectsGrid = ({ projects, onSelectProject, projectCardVariants }) => {
  if (projects.length === 0) {
    return (
      <motion.div
        className="col-span-full bg-black/50 border border-gray-700 rounded-lg p-8 text-center"
        variants={containerVariants}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-[#00ff00] font-mono text-lg">$</span>
          <h3 className="text-[#00ff00] font-mono text-xl font-bold">no_projects_found</h3>
        </div>
        <p className="text-gray-400 font-mono">
          <span className="text-gray-500">&gt;</span> No projects found in this category.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
      <AnimatePresence mode="wait">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} onClick={onSelectProject} projectCardVariants={projectCardVariants} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsGrid;