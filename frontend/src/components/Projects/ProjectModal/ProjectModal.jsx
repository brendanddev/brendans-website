
/**
 * @file ProjectModal.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Main ProjectModal component that orchestrates all modal sections
 */

import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { modalVariants, contentVariants } from "../../../utils/variants/projects";
import { useEffect } from "react";

import ProjectHeader from "./ProjectHeader";
import ProjectAbout from "./ProjectAbout";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectFeatures from "./ProjectFeatures";
import ProjectStats from "./ProjectStats";
import ProjectPreview from "./ProjectPreview";
import RelatedProjects from "./RelatedProjects";
import TechBreakdownChart from "./TechBreakdownChart";


const ProjectModal = ({ 
    project, 
    isOpen, 
    onClose,
    isAutoPlaying = false,
    onToggleAutoPlay,
    onProjectSelect,
    onNext,
    onPrev,
    currentIndex
}) => {
    if (!project) return null;

    // Keyboard navigation for modal
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!isOpen) return;
            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    if (onPrev) onPrev();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    if (onNext) onNext();
                    break;
                case 'Escape':
                    event.preventDefault();
                    if (onClose) onClose();
                    break;
                default:
                    break;
            }
        };
        
        // Add event listener to listen for keydown event
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onNext, onPrev, onClose]);

    return (
        <AnimatePresence>
            {/* Conditionally render the modal based on open state */}
            {isOpen && (
                // Modal overlay
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                    aria-modal="true"
                    role="dialog"
                >
                    {/* Modal container */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600/50 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        tabIndex={-1}
                    >
                        {/* Modal Header */}
                        <ProjectHeader 
                            project={project}
                            isAutoPlaying={isAutoPlaying}
                            onToggleAutoPlay={onToggleAutoPlay}
                            onClose={onClose}
                            onNext={onNext}
                            onPrev={onPrev}
                            currentIndex={currentIndex}
                        />
                        {/* Modal Content */}
                        <motion.div 
                            variants={contentVariants}
                            className="p-6"
                        >
                            {/* Content Grid Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                {/* Left Column */}
                                <div className="space-y-6">
                                    {/* About Section */}
                                    <ProjectAbout project={project} />
                                    
                                    {/* Technologies Section */}
                                    <ProjectTechnologies project={project} />

                                    {/* Features Section */}
                                    <ProjectFeatures project={project} />

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
                                                bg-gradient-to-r from-sky-400 to-indigo-500
                                                text-white font-bold rounded-xl
                                                hover:from-indigo-400 hover:to-sky-500
                                                transition-all duration-300
                                                shadow-lg hover:shadow-xl
                                                focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:ring-offset-2 focus:ring-offset-slate-800
                                                border border-white/20
                                            "
                                            aria-label="View on GitHub"
                                        >
                                            <FaGithub />
                                            View on GitHub
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">

                                    {/* Techn Breakdown Chart */}
                                    <TechBreakdownChart techBreakdown={project.techBreakdown} />

                                    {/* Project Preview */}
                                    <ProjectPreview project={project} />

                                    {/* Project Statistics */}
                                    <ProjectStats project={project} />

                                    {/* Related Projects */}
                                    <RelatedProjects 
                                        project={project}
                                        onProjectSelect={onProjectSelect}
                                    />
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