
/**
 * @file SidebarToggleButton.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Renders the toggle button for the sidebar which allows users to open or close it.
 */

import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const SidebarToggleButton = ({ isSidebarShown, toggleSidebar, isMobile, toggleButtonRef }) => (
    <motion.button 
        ref={toggleButtonRef}
        onClick={toggleSidebar}
        drag={!isMobile}
        dragConstraints={{ 
            top: 0, 
            bottom: window.innerHeight - 60, 
            left: 0, 
            right: window.innerWidth - 60 
        }}
        dragMomentum={false}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragElastic={0.1}
        whileDrag={{ scale: 1.05 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`
            fixed bottom-4 right-6 z-50
            bg-gray-900/90 text-white border-gray-700
            backdrop-blur-md p-2 rounded-xl 
            hover:shadow-lg transition-all duration-300 
            shadow-lg border cursor-move
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            focus:ring-offset-gray-900
            ${isMobile ? 'cursor-pointer' : ''}
        `}
        aria-label={isSidebarShown ? "Close sidebar" : "Open sidebar"}
        aria-expanded={isSidebarShown}
        title={isSidebarShown ? "Close sidebar" : "Open sidebar"}
    >   
        <AnimatePresence mode="wait">
            {isSidebarShown ? (
                <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <IoClose className="w-6 h-6" />
                </motion.div>
            ) : (
                <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <GiHamburgerMenu className="w-6 h-6" />
                </motion.div>
            )}
        </AnimatePresence>
    </motion.button>
);

export default SidebarToggleButton;
