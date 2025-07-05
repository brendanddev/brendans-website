
/**
 * @file ActionButtons.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable compoenent for displaying details and github (action) buttons inside project cards
 */

import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";

const ActionButtons = ({ project, onClick, isGrid = true }) => {
    
    // Check if the layout is in grid view
    if (isGrid) {
        return (
            <div className="flex gap-3 mt-auto">

                {/* View Details button with gradient and hover effects */}
                <motion.button 
                    onClick={(e) => {
                        // Prevent click event from bubbling up
                        e.stopPropagation();
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
                
                {/* Github link button */}
                <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
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
        );
    }

    // List view buttons
    return (
        <div className="flex items-center gap-3">

            {/* View details button */}
            <button 
                onClick={(e) => {
                    // Prevent click event from bubbling up
                    e.stopPropagation();
                    onClick(project);
                }}
                className="px-4 py-2 bg-[#00ff00] text-slate-900 rounded-lg hover:bg-emerald-400 transition-colors font-medium"
            >
                View
            </button>
            
            {/* GitHub link */}
            <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                // Prevent click event from bubbling up
                onClick={(e) => e.stopPropagation()}
                className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
            >
                <FaGithub />
            </a>
        </div>
    );
};

export default ActionButtons; 