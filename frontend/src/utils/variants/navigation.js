
/**
 * @file navigation.js
 * @author Brendan Dileo, June 2025
 * 
 * Animation variants for the mobile menu, overlays and list items used by the nav bar
 */

// Animation for individual lit items
export const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

// Animation for backdrop overlays
export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

// Animation for the mobile navigation dropdown menu
export const mobileMenuVariants = {

  // Initial hidden menu state
  hidden: { 
    opacity: 0,
    height: 0,
    scale: 0.95,
    
    // Transition for when menu is hidden
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    }

  },

  // Menu is visible with spring animation
  visible: { 
    opacity: 1,
    height: "auto",
    scale: 1,

    // Transition for when menu is visible
    // Uses spring and staggered children for smoother entrance
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
      when: "beforeChildren",
    }


  },

  // Exit animation for when menu is closed
  exit: {
    opacity: 0,
    height: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }

}; 