
/**
 * @file MobileMenu.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Renders the dropdown menu for mobile devices in the navbar.
 */


import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";
import { mobileMenuVariants } from "../../utils/variants";

const MobileMenu = ({ isOpen, closeMenu }) => (
    // Mobile menu that appears when the hamburger icon is clicked
    <AnimatePresence>
        {/* Displays menu items if the menu is open */}
        {isOpen && (
            <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden border-t border-gray-700 bg-black mt-4 overflow-hidden"
                style={{ originY: 0 }}
            >
                <ul className="py-4 space-y-2 font-mono text-lg">
                <NavLinks isMobile={true} closeMenu={closeMenu} />
                </ul>
            </motion.div>
        )}
    </AnimatePresence>
);

export default MobileMenu;
