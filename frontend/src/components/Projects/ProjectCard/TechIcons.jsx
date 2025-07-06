
/**
 * @file TechIcons.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A component for displaying tech icons with framer motion animations to display the tech stack used in a project
 */

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { techContainerVariants, techItemVariants } from "../../../utils/variants/projects.js";

const TechIcons = ({ icons, extraIcon }) => {
    return (
        <div>
            {/* Section title with tech icon */}
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FaCode size={12} className="text-slate-500" />
                Technologies
            </h4>
            
            {/* Technology icons container with staggered animations */}
            <motion.div 
                variants={techContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center flex-wrap gap-2"
            >
                {/* Map through technology icons */}
                {icons.map((icon, i) => (
                    <motion.div 
                        key={i}
                        variants={techItemVariants}
                        whileHover="hover"
                        className="
                            p-2.5 rounded-xl bg-slate-700/30 
                            text-[#00ff00] hover:text-emerald-300 
                            transition-all duration-300 ease-out
                            group-hover:bg-slate-600/40
                            shadow-sm hover:shadow-md
                            border border-slate-600/20 hover:border-slate-500/40
                            backdrop-blur-sm
                        "
                        title={`Technology ${i + 1}`}
                    >
                        <i className={`${icon} text-lg`}></i>
                    </motion.div>                                
                ))}
                
                {/* Extra icon, if any */}
                {extraIcon && (
                    <motion.div 
                        variants={techItemVariants}
                        whileHover="hover"
                        className="
                            p-2.5 rounded-xl bg-slate-700/30 
                            text-[#00ff00] hover:text-emerald-300 
                            transition-all duration-300 ease-out
                            group-hover:bg-slate-600/40
                            shadow-sm hover:shadow-md
                            border border-slate-600/20 hover:border-slate-500/40
                            backdrop-blur-sm
                        "
                    >
                        {extraIcon}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default TechIcons; 