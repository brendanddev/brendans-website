
/**
 * @file GridCard.jsx
 * @author Brendan Dileo, July 2025
 *
 * Vertical layout version of the project card for grid view mode
 */

import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { hoverVariants, contentVariants } from "../../../utils/variants/projects.js";
import StatusBadge from "./StatusBadge";
import TechIcons from "./TechIcons";
import FeatureTags from "./FeatureTags";
import ActionButtons from "./ActionButtons";

const GridCard = ({ project, onClick }) => {
    return (
        <motion.div
            whileHover="hover"
            variants={hoverVariants}
            className="
                group relative cursor-pointer
                bg-gradient-to-br from-slate-800/40 to-slate-900/40 
                backdrop-blur-xl border border-slate-600/20 
                rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl
                overflow-hidden transition-all duration-500 ease-out
                hover:border-slate-500/40 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-900/60
                h-full min-h-[140px] sm:min-h-[480px] flex flex-col
            "
            onClick={() => onClick(project)}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${project.title}`}
            onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick(project);
                }
            }}
        >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block"></div>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden hidden sm:block">
                {/* Top right accent */}
                <motion.div 
                    className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#00ff00] rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                />
                {/* Bottom left accent */}
                <motion.div 
                    className="absolute bottom-6 left-6 w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
                />
            </div>
            {/* Main content container */}
            <motion.div 
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="relative p-1 sm:p-6 flex flex-col h-full"
            >
                {/* Header section */}
                <div className="flex items-start justify-between mb-1 sm:mb-6">
                    <div className="flex-1 min-w-0">
                        {/* Project title */}
                        <h3
                            className="text-xs sm:text-xl font-bold tracking-tight group-hover:text-emerald-300 transition-colors duration-300 mb-1 sm:mb-3 line-clamp-2"
                            style={{ color: project.titleColor || "#00ff00" }}
                        >
                            {project.title}
                        </h3>
                        {/* Status badge */}
                        <div className="flex items-center gap-2">
                            <StatusBadge status={project.status} />
                        </div>
                    </div>
                    {/* View indicator */}
                    <div className="flex-shrink-0 ml-1 sm:ml-4">
                        <FaEye className="text-slate-400 group-hover:text-[#00ff00] transition-colors duration-300" size={12} />
                    </div>
                </div>
                {/* Project description */}
                <p className="mb-1 sm:mb-6 text-xs sm:text-sm text-slate-300 leading-snug sm:leading-relaxed flex-grow line-clamp-2 sm:line-clamp-3">
                    {project.desc}
                </p>
                {/* Technologies section */}
                <div className="hidden sm:block mb-3 sm:mb-6">
                    <TechIcons icons={project.icons} extraIcon={project.extraIcon} compact />
                </div>
                {/* Features section */}
                <div className="hidden sm:block mb-3 sm:mb-6">
                    <FeatureTags features={project.features} compact />
                </div>
                {/* Action buttons */}
                <div className="mt-1 sm:mt-auto pt-1 sm:pt-4">
                    <ActionButtons project={project} onClick={onClick} isGrid={true} compact />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default GridCard; 