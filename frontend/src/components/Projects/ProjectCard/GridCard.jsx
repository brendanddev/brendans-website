
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
                bg-gradient-to-br from-slate-800/90 to-slate-900/90 
                backdrop-blur-sm border border-slate-600/50 
                rounded-2xl shadow-[0_0_25px_rgba(120,119,198,0.15)] 
                overflow-hidden hover:shadow-[0_0_40px_rgba(0,255,0,0.2)]
                transition-all duration-500
            "
            onClick={() => onClick(project)}
        >
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">

                {/* Animated dot in top right corner */}
                <motion.div 
                    className="absolute top-4 right-4 w-2 h-2 bg-[#00ff00] rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5
                    }}
                />

                {/* Animated dot in bottom left */}
                <motion.div 
                    className="absolute bottom-6 left-6 w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                        y: [0, -8, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 1
                    }}
                />
            </div>
            
            {/* Main content container */}
            <motion.div 
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="relative p-6 lg:p-8 flex flex-col h-full"
            >

                {/* Header section */}
                <div className="flex items-start justify-between mb-4">

                    <div className="flex-1">
                        
                        {/* Project title with hover color transition */}
                        <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#00ff00] group-hover:text-emerald-300 transition-colors duration-300 mb-2">
                            {project.title}
                        </h3>
                        
                        {/* Status and metadata badges */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <StatusBadge status={project.status} />
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
                <TechIcons icons={project.icons} extraIcon={project.extraIcon} />

                {/* Features section */}
                <FeatureTags features={project.features} />
                
                {/* Action buttons */}
                <ActionButtons project={project} onClick={onClick} isGrid={true} />
            </motion.div>
        </motion.div>
    );
};

export default GridCard; 