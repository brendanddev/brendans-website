
/**
 * @file SidebarContent.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Contains the main content of the sidebar, including the layout, and a list of social media links.
 */

import { motion } from "framer-motion";
import SidebarSocialLink from "./SidebarSocialLink";

// Item variantrs that define the animation states for each social link
const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
};

const SidebarContent = ({ isMobile, activeTooltip, setActiveTooltip, socialLinks, sidebarRef }) => (
    
    // The main content of the sidebar that includes the social links
    <motion.div
        ref={sidebarRef}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
            hidden: { x: isMobile ? -300 : -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20, staggerChildren: 0.1 } },
            exit: { x: isMobile ? -300 : -100, opacity: 0, transition: { duration: 0.2 } }
        }}
        className={`
            fixed left-0 top-0 h-full z-50
            ${isMobile ? 'w-80' : 'w-20'}
            bg-gray-900/95 border-gray-700
            backdrop-blur-md shadow-2xl border-r
            flex flex-col
        `}
        role="navigation"
        aria-label="Social media links"
    >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <motion.h2 
                variants={itemVariants}
                className="font-semibold text-lg text-white"
            >
                {isMobile ? 'Connect' : ''}
            </motion.h2>
        </div>

        {/* Social links */}
        <nav className="flex-1 flex items-center justify-center">
            <ul className={`
                space-y-4
                ${isMobile ? 'w-full px-4' : 'space-y-6'}
            `}>
                {socialLinks.map((link) => (
                    <SidebarSocialLink
                        key={link.name}
                        link={link}
                        isMobile={isMobile}
                        activeTooltip={activeTooltip}
                        setActiveTooltip={setActiveTooltip}
                    />
                ))}
            </ul>
        </nav>

        {isMobile && (
            <motion.div 
                variants={itemVariants}
                className="p-4 border-t border-gray-700/50"
            >
                <p className="text-sm text-center text-gray-400">
                    Press ESC to close
                </p>
            </motion.div>
        )}
    </motion.div>
);

export default SidebarContent;
