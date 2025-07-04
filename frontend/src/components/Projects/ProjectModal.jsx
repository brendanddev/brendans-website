
/**
 * @file ProjectModal.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A modal component that displays information about one of my projects
 */

import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaCode, FaGithub, FaArrowRight, FaCheckCircle } from "react-icons/fa";
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

                        {/* Modal content area */}
                        <motion.div 
                            variants={contentVariants}
                            className="p-6"
                        >
                            {/* Overlay content area container, defines the grid layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                {/* Left side of overlay */}
                                <div className="space-y-6">
                                    {/* About section with short or long desc */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                            <FaCode size={20} />
                                            About This Project
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {project.longDesc || project.desc}
                                        </p>
                                    </div>
                                    
                                    {/* What technologies were used when building the project */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {project.icons.map((icon, i) => (
                                                <motion.div 
                                                    key={i}
                                                    custom={i}
                                                    variants={techVariants}
                                                    whileHover="hover"
                                                    className="p-3 bg-slate-700/50 rounded-xl text-[#00ff00] hover:bg-slate-600/50 transition-colors"
                                                >
                                                    <i className={`${icon} text-2xl`}></i>
                                                </motion.div>
                                            ))}
                                            {project.extraIcon && (
                                                <motion.div 
                                                    custom={project.icons.length}
                                                    variants={techVariants}
                                                    whileHover="hover"
                                                    className="p-3 bg-slate-700/50 rounded-xl text-[#00ff00] hover:bg-slate-600/50 transition-colors"
                                                >
                                                    {project.extraIcon}
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    {project.features && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                                            <div className="space-y-2">
                                                
                                                {/* Maps thrrough each feature per project and renders it */}
                                                {project.features.map((feature, i) => (
                                                    <motion.div 
                                                        key={i}
                                                        custom={i}
                                                        variants={featureVariants}
                                                        className="flex items-center gap-3 text-gray-300"
                                                    >
                                                        <FaCheckCircle className="text-[#00ff00] flex-shrink-0" size={16} />
                                                        <span>{feature}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 pt-4">
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="
                                                flex items-center gap-2 px-6 py-3
                                                bg-gradient-to-r from-[#00ff00] to-emerald-500
                                                text-slate-900 font-bold rounded-xl
                                                hover:from-emerald-400 hover:to-[#00ff00]
                                                transition-all duration-300
                                                shadow-lg hover:shadow-xl
                                            "
                                        >
                                            <FaGithub />
                                            View on GitHub
                                        </motion.a>
                                        
                                    </div>
                                </div>

                                {/* Right side of overlay */}
                                <div className="space-y-6">


                                    {/* Project Preview */}
                                    <div className="relative">
                                        <div className="bg-slate-700/50 rounded-xl p-8 h-64 flex items-center justify-center border border-slate-600/30">
                                            <div className="text-center">
                                                <div className="w-24 h-24 bg-gradient-to-br from-[#00ff00]/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <FaCode size={32} className="text-[#00ff00]" />
                                                </div>
                                                <p className="text-gray-400 font-medium">Project Preview</p>
                                                <p className="text-gray-500 text-sm mt-1">Interactive showcase coming soon</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Stats */}
                                    <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                                        
                                        <h4 className="text-lg font-semibold text-white mb-4">Project Statistics</h4>
                                        {/* Organizes the stats in a grid layout */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center">
                                                {/* Displays the number of technologies used in the project */}
                                                <div className="text-2xl font-bold text-[#00ff00]">
                                                    {project.icons?.length || 0}
                                                </div>
                                                <div className="text-sm text-gray-400">Technologies</div>
                                            </div>
                                            <div className="text-center">
                                                {/* Displays the number of features in the project */}
                                                <div className="text-2xl font-bold text-[#00ff00]">
                                                    {project.features?.length || 0}
                                                </div>
                                                <div className="text-sm text-gray-400">Features</div>
                                            </div>
                                            <div className="text-center">
                                                {/* Displays the number of github stars the project repo has gotten */}
                                                <div className="text-2xl font-bold text-[#00ff00]">
                                                    {project.githubStars || 0}
                                                </div>
                                                <div className="text-sm text-gray-400">GitHub Stars</div>
                                            </div>
                                            <div className="text-center">
                                                {/* Displays the current status of the project */}
                                                <div className="text-2xl font-bold text-[#00ff00]">
                                                    {status.name}
                                                </div>
                                                <div className="text-sm text-gray-400">Status</div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Related Projects */}
                                    <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
                                        <h4 className="text-lg font-semibold text-white mb-4">Related Projects</h4>
                                        <div className="space-y-2">
                                            {projectData
                                                .filter(p => p.title !== project.title)
                                                .slice(0, 3)
                                                .map((relatedProject) => (
                                                    <div 
                                                        key={relatedProject.title}
                                                        className="flex items-center justify-between p-3 bg-slate-600/30 rounded-lg hover:bg-slate-600/50 transition-colors cursor-pointer"
                                                        onClick={() => {
                                                            console.log("Navigate to:", relatedProject.title);
                                                            // Could pass a callback here to load the selected project
                                                        }}
                                                    >
                                                        <div>
                                                            <div className="font-medium text-white">{relatedProject.title}</div>
                                                            <div className="text-sm text-gray-400">{relatedProject.desc?.substring(0, 50)}...</div>
                                                        </div>
                                                        <FaArrowRight size={16} className="text-gray-400" />
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
