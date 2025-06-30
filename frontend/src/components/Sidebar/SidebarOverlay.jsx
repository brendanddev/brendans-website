
/**
 * @file SidebarOverlay.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Provides a overlay that appears behind the sidebar on mobile devices when open.
 */

import { motion, AnimatePresence } from "framer-motion";

// Overlay variants that define the animation states
const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const SidebarOverlay = ({ isMobile, isSidebarShown, onClick }) => (
    // Overlay that appears behind the sidebar on mobile devices
    // when the sidebar is open, allowing users to click outside to close it
    <AnimatePresence>
        {isMobile && isSidebarShown && (
            <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={onClick}
            />
        )}
    </AnimatePresence>
);

export default SidebarOverlay;
