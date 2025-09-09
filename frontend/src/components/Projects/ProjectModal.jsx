
/**
 * @file ProjectModal.jsx
 * @author Brendan Dileo, June 2025
 * 
 * A modal component for displaying detailed project information on the Projects page.
 */


import { motion, AnimatePresence } from 'framer-motion';


const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black border border-gray-700 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff00] font-mono text-lg">$</span>
                <h3 className="text-[#00ff00] font-mono text-2xl font-bold">{project.title}</h3>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-[#00ff00] transition-colors">
                <span className="text-2xl">&times;</span>
              </button>
            </div>

            <div className="space-y-6 text-[#00ff00] font-mono">
              <div>
                <p className="text-gray-400 mb-2">Description:</p>
                <p className="text-sm leading-relaxed">
                  <span className="text-gray-500">&gt;</span> {project.description}
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 border border-gray-600 rounded text-sm">{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-2">Status:</p>
                <span className={`px-3 py-1 rounded text-sm ${
                  project.status === 'completed'
                    ? 'bg-green-900 text-green-400 border border-green-700'
                    : 'bg-yellow-900 text-yellow-400 border border-yellow-700'
                }`}>
                  {project.status === 'completed' ? 'Completed ✓' : 'In Progress ⏳'}
                </span>
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-transparent border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-colors">
                    ./view_code.sh
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-transparent border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-colors">
                    ./launch.sh
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;