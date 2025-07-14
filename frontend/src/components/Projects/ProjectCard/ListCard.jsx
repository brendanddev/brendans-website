
/**
 * @file ListCard.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Horizontal layout version of the project card for list view mode
 */

import { motion } from "framer-motion";
import { FaCalendar, FaCode } from "react-icons/fa";
import { hoverVariants } from "../../../utils/variants/projects.js";
import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

const ListCard = ({ project, onClick }) => {
    return (
        <motion.div
            whileHover="hover"
            variants={hoverVariants}
            className="
                group relative cursor-pointer
                bg-gradient-to-r from-slate-800/40 to-slate-900/40 
                backdrop-blur-xl border border-slate-600/20 
                rounded-2xl p-4 sm:p-6 hover:shadow-xl
                transition-all duration-500 ease-out
                hover:border-slate-500/40 hover:bg-gradient-to-r hover:from-slate-800/60 hover:to-slate-900/60
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
            {/* Main content container with responsive flex */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                {/* Project info section */}
                <div className="flex-1 min-w-0 w-full">
                    {/* Header section with title and metadata */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <h3 className="text-lg font-bold text-[#00ff00] group-hover:text-emerald-300 transition-colors duration-300 break-words sm:line-clamp-1">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-2 flex-shrink-0">
                            {/* Project status badge */}
                            <StatusBadge status={project.status} />
                        </div>
                    </div>
                    {/* Project description */}
                    <p className="text-sm text-slate-300 mb-2 sm:mb-4 leading-relaxed break-words sm:line-clamp-2">
                        {project.desc}
                    </p>
                    {/* Project metadata */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                            <FaCalendar size={12} className="text-slate-500" />
                            <span className="font-medium">{project.completionDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCode size={12} className="text-slate-500" />
                            <span className="font-medium">{project.technologies?.slice(0, 2).join(", ")}</span>
                        </div>
                    </div>
                </div>
                {/* Action buttons */}
                {/* Full width on small screens, auto width on larger screens */}
                <div className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0">
                    <ActionButtons project={project} onClick={onClick} isGrid={false} />
                </div>
            </div>
        </motion.div>
    );
};

export default ListCard; 