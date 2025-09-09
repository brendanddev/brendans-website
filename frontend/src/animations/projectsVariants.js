
/**
 * @file projectsVariants.js
 * @author Brendan Dileo, June 2025
 * 
 * Animation variants for the Projects page.
 */

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.3 }
    },
    hover: { 
        scale: 1.02,
        transition: { duration: 0.2 }
    }
};