
/**
 * @file ProjectHeader.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Project modal header component with title, status, and controls
 */

import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { projectStatus } from "../../../data/projectMeta";
import projectData from "../../../data/projectData";
import StatusBadge from "../ProjectCard/StatusBadge";


const ProjectHeader = ({ 
    project, 
    isAutoPlaying, 
    onToggleAutoPlay, 
    onClose,
    onNext,
    onPrev,
    currentIndex
}) => {
    const status = projectStatus[project.status];
    const isFirstProject = currentIndex === 0;
    const isLastProject = currentIndex === projectData.length - 1;

    return (
        <div className="sticky top-0 z-10 bg-slate-800/95 backdrop-blur-sm border-b border-slate-600/50 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
                
                {/* Navigation arrows */}
                <div className="flex items-center gap-2">
                    <motion.button
                        onClick={onPrev}
                        disabled={isFirstProject}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            p-2 rounded-lg transition-all duration-300
                            ${isFirstProject 
                                ? 'text-gray-500 cursor-not-allowed' 
                                : 'text-gray-300 hover:text-[#00ff00] hover:bg-slate-700'
                            }
                        `}
                        title="Previous Project"
                        aria-label="Previous Project"
                    >
                        <FaChevronLeft size={16} />
                    </motion.button>
                </div>

                {/* Project title and status */}
                <div className="flex items-center gap-4 flex-1 justify-center">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[#00ff00]">
                            {project.title}
                        </h2>
                        <div className="flex items-center justify-center gap-2 mt-1">
                            <StatusBadge status={project.status} />
                            <div className="text-xs text-gray-400">
                                {currentIndex + 1} of {projectData.length}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Control buttons */}
                <div className="flex items-center gap-2">
                    {/* Auto-play toggle button */}
                    <button
                        onClick={onToggleAutoPlay}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-gray-300 hover:text-[#00ff00]"
                        title={isAutoPlaying ? "Pause Auto-play" : "Start Auto-play"}
                        aria-label={isAutoPlaying ? "Pause Auto-play" : "Start Auto-play"}
                    >
                        {isAutoPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
                    </button>
                    {/* Close modal button */}
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                        aria-label="Close Modal"
                    >
                        <X size={24} />
                    </button>

                    {/* Navigation arrows */}
                    <motion.button
                        onClick={onNext}
                        disabled={isLastProject}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            p-2 rounded-lg transition-all duration-300
                            ${isLastProject 
                                ? 'text-gray-500 cursor-not-allowed' 
                                : 'text-gray-300 hover:text-[#00ff00] hover:bg-slate-700'
                            }
                        `}
                        title="Next Project"
                        aria-label="Next Project"
                    >
                        <FaChevronRight size={16} />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
