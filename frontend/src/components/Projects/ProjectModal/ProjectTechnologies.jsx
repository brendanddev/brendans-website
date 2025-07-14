
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
            <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-3">

                {/* Map through each project icon and render each one with a hover effect */}
                {project.icons.map((icon, i) => (
                    <motion.div 
                        key={i}
                        custom={i}
                        variants={techVariants}
                        whileHover="hover"
                        className="p-3 bg-slate-700/50 rounded-xl hover:bg-slate-600/50 transition-colors"
                    >
                        <i 
                            className={`${icon.className} text-2xl`}
                            style={{ color: icon.color || "#00ff00" }}
                        ></i>
                    </motion.div>
                ))}

                {/* Render extra icons with hover effect if any */}
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
    );
};

export default ProjectTechnologies;

