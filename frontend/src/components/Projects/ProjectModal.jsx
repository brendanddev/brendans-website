
/**
 * @file ProjectModal.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A modal component that displays information about one of my projects
 */

import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import { X } from "lucide-react";
import { projectStatus } from "../../data/projectMeta";
import projectData from "../../data/projectData";
import { modalVariants, contentVariants, techVariants, featureVariants } from "../../utils/variants/projects";

const ProjectModal = ({ 
    project, 
    isOpen, 
    onClose,
    isAutoPlaying = false,
    onToggleAutoPlay 
}) => {
    if (!project) return null;

    const status = projectStatus[project.status];

    return (
        <AnimatePresence>
            {isOpen && (
                // Model overlay, a click on the overlay will close the modal
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >   
                    {/* 
                        Modal container
                        Prevents clicks inside the modal content from bubbling up
                        to the overlay and closing the modal
                    */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600/50 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header for the modal */}
                        <div className="sticky top-0 z-10 bg-slate-800/95 backdrop-blur-sm border-b border-slate-600/50 p-6 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                                
                                {/* Project title and status besdie it */}
                                <div className="flex items-center gap-4">
                                    <h2 className="text-3xl font-bold text-[#00ff00]">
                                        {project.title}
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${status.color} text-white`}>
                                            {status.name}
                                        </div>
                                    </div>

                                </div>

                                <div className="flex items-center gap-2">
                                    
                                    {/* Button to toggle auto-play */}
                                    <button
                                        onClick={onToggleAutoPlay}
                                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-gray-300 hover:text-[#00ff00]"
                                        title={isAutoPlaying ? "Pause Auto-play" : "Start Auto-play"}
                                    >
                                        {/* Toggle icon dependening on prop passed from parent */}
                                        {isAutoPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
                                    </button>

                                    {/* Exit modal button */}
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
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
