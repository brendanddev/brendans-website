
/**
 * @file navBarVariants.js
 * @author Brendan Dileo
 * 
 * Defines and exports mobile menu animation variants for the NavBar component.
 */

export const mobileMenuVariants = {
    hidden: {
        opacity: 0,
        height: 0,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        height: "auto",
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        height: 0,
        scale: 0.95,
        transition: {
            duration: 0.2
        }
    }
};