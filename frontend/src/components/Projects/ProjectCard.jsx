
/**
 * @file ProjectCard.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A card component that displays information about one of my projects in a styled format with optimized animations
 */

import { motion } from "framer-motion";
import { FaEye, FaGithub, FaStar, FaCode } from "react-icons/fa";
import { projectStatus } from "../../data/projectMeta";
import { 
    hoverVariants, 
    contentVariants, 
    techContainerVariants, 
    techItemVariants 
} from "../../utils/variants/projects.js";

const ProjectCard = ({ 
    project, 
    onClick
}) => {
    const status = projectStatus[project.status];

    // Grid view mode, uses vertical layout for better aesthetics
    return (
        <motion.div
            whileHover="hover"
            variants={hoverVariants}
            className="
                group relative cursor-pointer
                bg-gradient-to-br from-slate-800/90 to-slate-900/90 
                backdrop-blur-sm border border-slate-600/50 
                rounded-2xl shadow-[0_0_25px_rgba(120,119,198,0.15)] 
                overflow-hidden hover:shadow-[0_0_40px_rgba(0,255,0,0.2)]
                transition-all duration-500
            "
            onClick={() => onClick(project)}
        >            
            
            {/* Main content container */}
            <motion.div 
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="relative p-6 lg:p-8 flex flex-col h-full"
            >
                {/* Header  */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        {/* Project title */}
                        <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#00ff00] group-hover:text-emerald-300 transition-colors duration-300 mb-2">
                            {project.title}
                        </h3>
                        
                        {/* Status and metadata badges */}
                        <div className="flex items-center gap-2 flex-wrap">

                            <div className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${status.color} text-white`}>
                                {status.name}
                            </div>
                            
                        </div>
                    </div>
                    
                    {/* View icon indicator */}
                    <FaEye className="text-gray-400 group-hover:text-[#00ff00] transition-colors duration-300 mt-1" />
                </div>
                
                {/* Project description */}
                <p className="mb-6 text-sm lg:text-base font-normal text-gray-300 leading-relaxed flex-grow">
                    {project.desc}
                </p>
                
                {/* Technologies section */}
                <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <FaCode size={12} />
                        Technologies
                    </h4>
                    
                    {/* Technology icons container with staggered animations */}
                    <motion.div 
                        variants={techContainerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center flex-wrap gap-3"
                    >
                        {/* Map through technology icons */}
                        {project.icons.map((icon, i) => (
                            <motion.div 
                                key={i}
                                variants={techItemVariants}
                                whileHover="hover"
                                className="
                                    p-2 rounded-lg bg-slate-700/50 
                                    text-[#00ff00] hover:text-emerald-300 
                                    transition-all duration-300
                                    group-hover:bg-slate-600/50
                                    shadow-lg hover:shadow-xl
                                "
                                title={`Technology ${i + 1}`}
                            >
                                <i className={`${icon} text-2xl`}></i>
                            </motion.div>                                
                        ))}
                        
                        {/* Extra icon if any */}
                        {project.extraIcon && (
                            <motion.div 
                                variants={techItemVariants}
                                whileHover="hover"
                                className="
                                    p-2 rounded-lg bg-slate-700/50 
                                    text-[#00ff00] hover:text-emerald-300 
                                    transition-all duration-300
                                    group-hover:bg-slate-600/50
                                    shadow-lg hover:shadow-xl
                                "
                            >
                                {project.extraIcon}
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Features section */}
                {project.features && (
                    <div className="mb-6">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Key Features
                        </h4>
                        
                        {/* Feature tags with overflow handling */}
                        <div className="flex flex-wrap gap-1">
                            
                            {/* Display first 2 features */}
                            {project.features.slice(0, 2).map((feature, i) => (
                                <span 
                                    key={i}
                                    className="text-xs bg-slate-700/30 text-gray-300 px-2 py-1 rounded-full"
                                >
                                    {feature}
                                </span>
                            ))}
                            
                            {/* Shows count of remaining features if more than 2 */}
                            {project.features.length > 2 && (
                                <span className="text-xs bg-slate-700/30 text-gray-300 px-2 py-1 rounded-full">
                                    +{project.features.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}
                
                {/* Action buttons section */}
                <div className="flex gap-3 mt-auto">
                    {/* View Details button with gradient and hover effects */}
                    <motion.button 
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent card click event
                            onClick(project);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                            flex-1 group/btn
                            inline-flex items-center justify-center 
                            bg-gradient-to-r from-[#00ff00] to-emerald-500
                            text-slate-900 font-bold py-3 px-4 
                            rounded-xl hover:from-emerald-400 hover:to-[#00ff00]
                            transition-all duration-300
                            shadow-[0_0_15px_rgba(0,255,0,0.3)] 
                            hover:shadow-[0_0_25px_rgba(0,255,0,0.5)]
                            focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:ring-offset-2 focus:ring-offset-slate-800
                        "
                    >
                        <FaEye className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                        View Details
                    </motion.button>
                    
                    {/* GitHub link button */}
                    <motion.a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Prevent card click event
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                            group/link
                            inline-flex items-center justify-center 
                            bg-slate-700/50 hover:bg-slate-600/50
                            text-white font-bold py-3 px-4 
                            rounded-xl border border-slate-600/50
                            transition-all duration-300
                            focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:ring-offset-2 focus:ring-offset-slate-800
                        "
                    >
                        <FaGithub className="group-hover/link:scale-110 transition-transform duration-300" />
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
