
/**
 * @file ProjectModal.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A modal component that displays information about one of my projects
 */

import { motion, AnimatePresence } from "framer-motion";
import { 
    FaGithub, 
    FaExternalLinkAlt, 
    FaStar, 
    FaCalendar, 
    FaCode, 
    FaCheckCircle,
    FaTimes,
    FaArrowLeft,
    FaArrowRight,
    FaPlay,
    FaPause
} from "react-icons/fa";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { projectStatus } from "../../data/projectMeta";
import projectData from "../../data/projectData";
import { modalVariants, contentVariants, techVariants, featureVariants } from "../../utils/variants/projects";

const ProjectModal = ({ 
    project, 
    isOpen, 
    onClose, 
    onNext, 
    onPrev,
    currentIndex = 0,
    isAutoPlaying = false,
    onToggleAutoPlay 
}) => {
    if (!project) return null;

    const status = projectStatus[project.status];

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
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-600/50 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
