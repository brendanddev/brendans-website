
/**
 * @file ProjectTechnologies.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Project technologies component with animated technology icons
 */

import { motion } from "framer-motion";
import { techVariants } from "../../../utils/variants/projects";


const ProjectTechnologies = ({ project }) => {
    return (
        <div>
            
            {/* Section title */}
            <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
            {/* Responsive flex container for icons */}
            <div className="flex flex-wrap gap-3" aria-label="Project technologies" role="list">
                {/* Render each technology icon with animation and accessible label */}
                {project.icons.map((icon, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={techVariants}
                        whileHover="hover"
                        className="p-3 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-colors"
                        role="listitem"
                        aria-label={icon.label || icon.className}
                    >
                        <i
                            className={`${icon.className} text-2xl`}
                            style={{ color: icon.color || "#00ff00" }}
                        ></i>
                    </motion.div>
                ))}
                {/* Render extra icon if present */}
                {project.extraIcon && (
                    <motion.div
                        custom={project.icons.length}
                        variants={techVariants}
                        whileHover="hover"
                        className="p-3 bg-slate-700/50 rounded-xl text-[#00ff00] hover:bg-slate-600/50 transition-colors"
                        role="listitem"
                        aria-label="Extra technology"
                    >
                        {project.extraIcon}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ProjectTechnologies;

