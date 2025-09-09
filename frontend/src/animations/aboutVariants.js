
/**
 * @file aboutVariants.js
 * @author Brendan Dileo, June 2025
 * 
 * Animation variants for the About page sections.
 */


export const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
