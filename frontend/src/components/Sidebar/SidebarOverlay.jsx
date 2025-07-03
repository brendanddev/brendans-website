
/**
 * @file SidebarOverlay.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Provides a overlay that appears behind the sidebar on mobile devices when open.
 */

import { motion, AnimatePresence } from "framer-motion";
import { overlayVariants } from "../../utils/variants/navigation.js";


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
