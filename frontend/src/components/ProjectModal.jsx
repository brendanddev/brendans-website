
/**
 * @file ProjectModal.jsx
 * @author Brendan Dileo
 * 
 * Modal component for displaying detailed project information
 */

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Code, Star, Award } from "lucide-react";
import { FaFolder, FaGamepad, FaRobot, FaPalette, FaDatabase, FaCode } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return <FaCode className="text-blue-400" />;
      case 'game': return <FaGamepad className="text-purple-400" />;
      case 'ai': return <FaRobot className="text-green-400" />;
      case 'design': return <FaPalette className="text-orange-400" />;
      case 'data': return <FaDatabase className="text-indigo-400" />;
      default: return <FaFolder className="text-gray-400" />;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'from-green-400 to-green-600';
      case 'intermediate': return 'from-yellow-400 to-yellow-600';
      case 'advanced': return 'from-red-400 to-red-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'from-green-400 to-green-600';
      case 'inProgress': return 'from-yellow-400 to-yellow-600';
      case 'planned': return 'from-blue-400 to-blue-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600/50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-slate-600/50 bg-gradient-to-r from-slate-700/50 to-slate-800/50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {getCategoryIcon(project.category)}
                    <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                  </div>
                  <p className="text-gray-300 text-lg">{project.desc}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Long Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#00ff00] mb-3 flex items-center gap-2">
                      <Code size={20} />
                      Project Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{project.longDesc}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#00ff00] mb-3 flex items-center gap-2">
                      <Star size={20} />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#00ff00] mb-3 flex items-center gap-2">
                      <Award size={20} />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-[#00ff00] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Project Icons */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#00ff00] mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-4">
                      {project.icons.map((icon, index) => (
                        <div
                          key={index}
                          className="p-3 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:bg-slate-600/50 transition-colors duration-300"
                        >
                          <i className={`${icon} text-3xl text-[#00ff00]`}></i>
                        </div>
                      ))}
                      {project.extraIcon && (
                        <div className="p-3 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:bg-slate-600/50 transition-colors duration-300">
                          {Array.isArray(project.extraIcon) ? (
                            <div className="flex gap-2">
                              {project.extraIcon.map((icon, index) => (
                                <div key={index} className="text-[#00ff00]">
                                  {icon}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-[#00ff00]">{project.extraIcon}</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-xl border border-slate-600/30">
                      <Calendar className="text-[#00ff00]" size={20} />
                      <div>
                        <p className="text-sm text-gray-400">Completion Date</p>
                        <p className="text-white font-medium">{project.completionDate}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-xl border border-slate-600/30">
                      <Star className="text-[#00ff00]" size={20} />
                      <div>
                        <p className="text-sm text-gray-400">Difficulty</p>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getDifficultyColor(project.difficulty)} text-white`}>
                          {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-xl border border-slate-600/30">
                      <Award className="text-[#00ff00]" size={20} />
                      <div>
                        <p className="text-sm text-gray-400">Status</p>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getStatusColor(project.status)} text-white`}>
                          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-600/50 bg-gradient-to-r from-slate-700/50 to-slate-800/50">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-2 text-gray-400">
                  <FaFolder size={16} />
                  <span className="text-sm">Category: {project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ff00] to-emerald-500 text-slate-900 font-bold rounded-xl hover:from-emerald-400 hover:to-[#00ff00] transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                  >
                    <Github size={20} />
                    View on GitHub
                    <ExternalLink size={16} />
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/60 text-white font-bold rounded-xl hover:bg-slate-600/60 transition-all duration-300 transform hover:scale-105 border border-slate-600/50"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
