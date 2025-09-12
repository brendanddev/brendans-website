
/**
 * @file footerVariants.js
 * @author Brendan Dileo, September 2025
 * 
 * Defines and exports animation variants for the Footer component.
 */


export const hoverGlow = {
    whileHover: { scale: 1.12, y: -1 },
    whileTap: { scale: 0.96, y: 0 },
    transition: { type: 'spring', stiffness: 500, damping: 28 },
};

export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 4 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 28 } },
};