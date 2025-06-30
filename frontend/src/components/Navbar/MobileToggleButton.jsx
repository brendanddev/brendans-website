
/**
 * @file MobileToggleButton.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Renders the toggle button for the mobile menu in the navbar.
 */


import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileToggleButton = ({ isOpen, toggle }) => (
    // Button that toggles the mobile menu open and closed
    <motion.button
        className="md:hidden text-[#00ff00] p-2 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 transition-colors duration-200"
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        whileTap={{ scale: 0.95 }}
    >
        {/* Allows for smoother transitions between the two icons */}
        <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                >
                <X size={24} />
                </motion.div>
            ) : (
                <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                >
                <Menu size={24} />
                </motion.div>
            )}
        </AnimatePresence>
  </motion.button>
);

export default MobileToggleButton;
