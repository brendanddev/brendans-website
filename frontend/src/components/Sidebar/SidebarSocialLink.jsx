
/**
 * @file SidebarSocialLink.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Renders a single social media link for the sidebar with an optional tooltip and hover effects.
 */

import { motion } from "framer-motion";

// Defines the animation variants for the social link items
const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
};

const SidebarSocialLink = ({ link, isMobile, activeTooltip, setActiveTooltip }) => (
    <motion.li
        variants={itemVariants}
        className="relative"
    >
        <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`
                group flex items-center
                ${isMobile 
                    ? 'p-3 rounded-xl transition-all duration-300' 
                    : 'p-2 rounded-lg transition-all duration-300'
                }
                hover:bg-gray-800/50
                ${link.bgColor}
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                focus:ring-offset-gray-900
            `}
            onMouseEnter={() => setActiveTooltip(link.name)}
            onMouseLeave={() => setActiveTooltip(null)}
            onFocus={() => setActiveTooltip(link.name)}
            onBlur={() => setActiveTooltip(null)}
            aria-label={link.name}
        >
            <link.icon 
                className={`
                    ${isMobile ? 'w-6 h-6 mr-3' : 'w-8 h-8'}
                    text-emerald-400 transition-all duration-300
                    group-hover:scale-110 ${link.color}
                `} 
            />
            {isMobile && (
                <span className="font-medium text-white">
                    {link.name}
                </span>
            )}
        </a>
        
        {/* Check if tooltip should be shown */}
        {!isMobile && activeTooltip === link.name && (
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className={`
                    absolute left-full ml-2 px-2 py-1 rounded-md text-sm font-medium
                    bg-gray-800 text-white
                    shadow-lg border border-gray-700
                    whitespace-nowrap z-10
                `}
            >
                {link.name}
            </motion.div>
        )}
    </motion.li>
);

export default SidebarSocialLink;
