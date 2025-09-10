
/**
 * @file sidebarVariants.js
 * @author Brendan Dileo
 * 
 * Defines and exports animation variants for the sidebar component.
 */

export const sidebarVariants = {
    closed: {
        x: '-100%',
        transition: { duration: 0.25, ease: 'easeInOut' }
    },
    open: {
        x: 0,
        transition: { duration: 0.25, ease: 'easeInOut' }
    }
};

export const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
};