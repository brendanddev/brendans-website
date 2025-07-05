
/**
 * @file TechIcons.jsx
 * @author Brendan Dileo, July 2025
 * 
 * 
 * A component for displaying tech icons with framer motion animations to display the tech stack used in a project
 */

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { techContainerVariants, techItemVariants } from "../../../utils/variants/projects.js";

const TechIcons = ({ icons, extraIcon }) => {
    return (
        <div className="mb-6">

            {/* Section title with tech icon */}
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
                {icons.map((icon, i) => (
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
                
                {/* Extra icon, if any */}
                {extraIcon && (
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
                        {extraIcon}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default TechIcons; 