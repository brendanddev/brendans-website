
/**
 * @file ListCard.jsx
 * @author Brendan Dileo, July 2025
 * 
 * 
 * Horizontal layout version of the project card for list view mode
 */

import { motion } from "framer-motion";
import { FaStar, FaCalendar, FaCode } from "react-icons/fa";
import { hoverVariants } from "../../../utils/variants/projects.js";
import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

const ListCard = ({ project, onClick }) => {
    return (

        // Main card container with hover effects
        <motion.div
            whileHover="hover"
            variants={hoverVariants}
            className="
                group relative cursor-pointer
                bg-gradient-to-r from-slate-800/90 to-slate-900/90 
                backdrop-blur-sm border border-slate-600/50 
                rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)]
                transition-all duration-300
            "
            onClick={() => onClick(project)}
        >

            {/* Main content container with flex layout */}
            <div className="flex items-center justify-between">
                
                {/* Project info section */}
                <div className="flex-1">

                    {/* Header section with title and metadata */}
                    <div className="flex items-center gap-3 mb-2">

                        <h3 className="text-xl font-bold text-[#00ff00] group-hover:text-emerald-300 transition-colors duration-300">
                            {project.title}
                        </h3>

                        <div className="flex items-center gap-2">

                            {/* GitHub stars display if any*/}
                            {project.githubStars && (
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <FaStar size={12} />
                                    <span className="text-xs">{project.githubStars}</span>
                                </div>
                            )}
                            
                            {/* Project status badge */}
                            <StatusBadge status={project.status} />
                        </div>
                    </div>
                    
                    {/* Project description */}
                    <p className="text-gray-300 mb-3">{project.desc}</p>
                    
                    {/* Project metadata */}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                            <FaCalendar size={12} />
                            <span>{project.completionDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaCode size={12} />
                            <span>{project.technologies?.slice(0, 2).join(", ")}</span>
                        </div>
                    </div>
                </div>
                
                {/* Action buttons */}
                <ActionButtons project={project} onClick={onClick} isGrid={false} />
            </div>
        </motion.div>
    );
};

export default ListCard; 