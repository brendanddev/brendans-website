
/**
 * @file ActionButtons.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable component for displaying details and github (action) buttons inside project cards
 */

import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";


const ActionButtons = ({ project, onClick, isGrid = true, compact }) => {
    // Grid view layout
    if (isGrid) {
        return (
            <div className={`flex gap-2 ${compact ? 'mt-0' : ''}`}>
                {/* View Details button with gradient and hover effects */}
                <motion.button
                    onClick={e => {
                        // Prevent click event from bubbling up
                        e.stopPropagation();
                        onClick(project);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                        flex-1 group/btn
                        inline-flex items-center justify-center 
                        bg-gradient-to-r from-[#00ff00] to-emerald-500
                        text-slate-900 font-semibold ${compact ? 'py-2 px-2 text-sm' : 'py-3 px-4'}
                        rounded-xl hover:from-emerald-400 hover:to-[#00ff00]
                        transition-all duration-300 ease-out
                        shadow-lg hover:shadow-xl
                        focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:ring-offset-2 focus:ring-offset-slate-800
                        border border-white/20
                    `}
                    aria-label={`View details for ${project.title}`}
                >
                    <FaEye className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" size={14} />
                    View Details
                </motion.button>

                {/* Github link button */}
                <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                        group/link
                        inline-flex items-center justify-center 
                        bg-slate-700/40 hover:bg-slate-600/50
                        text-white font-semibold ${compact ? 'py-2 px-2 text-sm' : 'py-3 px-4'}
                        rounded-xl border border-slate-600/30 hover:border-slate-500/50
                        transition-all duration-300 ease-out
                        shadow-sm hover:shadow-md
                        focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:ring-offset-2 focus:ring-offset-slate-800
                        backdrop-blur-sm
                    `}
                    aria-label={`View ${project.title} on GitHub`}
                >
                    <FaGithub className="group-hover/link:scale-110 transition-transform duration-300" size={16} />
                </motion.a>
            </div>
        );
    }
    
    // List view layout
    return (
        <div className="flex items-center gap-3">
            {/* View details button */}
            <motion.button
                onClick={e => {
                    // Prevent click event from bubbling up
                    e.stopPropagation();
                    onClick(project);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                    px-4 py-2 bg-gradient-to-r from-[#00ff00] to-emerald-500
                    text-slate-900 rounded-lg hover:from-emerald-400 hover:to-[#00ff00] 
                    transition-all duration-300 ease-out font-semibold
                    shadow-sm hover:shadow-md
                    border border-white/20
                "
                aria-label={`View details for ${project.title}`}
            >
                View
            </motion.button>
            {/* GitHub link */}
            <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                    p-2.5 bg-slate-700/40 rounded-lg hover:bg-slate-600/50 
                    transition-all duration-300 ease-out
                    border border-slate-600/30 hover:border-slate-500/50
                    shadow-sm hover:shadow-md
                    backdrop-blur-sm
                "
                aria-label={`View ${project.title} on GitHub`}
            >
                <FaGithub size={14} />
            </motion.a>
        </div>
    );
};

export default ActionButtons; 