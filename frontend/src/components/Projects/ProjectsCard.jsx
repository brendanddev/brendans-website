
/**
 * @file ProjectsCard.jsx
 * @author Brendan Dileo, June 2025
 * 
 * A single project card component for displaying project details on the Projects page.
 */


import { motion } from 'framer-motion';


const ProjectCard = ({ project, onClick, projectCardVariants }) => {
  return (
    <motion.div
      variants={projectCardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover="hover"
      className="bg-black/50 border border-gray-700 rounded-lg overflow-hidden cursor-pointer group"
      onClick={() => onClick(project)}
    >
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[#00ff00] font-mono text-lg font-bold group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <span className={`px-2 py-1 rounded text-xs font-mono ${
            project.status === 'completed'
              ? 'bg-green-900 text-green-400 border border-green-700'
              : 'bg-yellow-900 text-yellow-400 border border-yellow-700'
          }`}>
            {project.status === 'completed' ? '✓' : '⏳'}
          </span>
        </div>
        <p className="text-gray-400 font-mono text-sm">
          <span className="text-gray-500">&gt;</span> {project.description}
        </p>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#00ff00] font-mono text-sm">$</span>
          <span className="text-gray-400 font-mono text-sm">tech_stack</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-[#00ff00] font-mono text-xs">{tech}</span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-gray-400 font-mono text-xs">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;