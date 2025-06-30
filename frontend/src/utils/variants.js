
/**
 * @file variants.js
 * @author Brendan Dileo, June 2025
 * 
 * Defines the different framer motion animation states used throughout the website.
 */


// Animation for individual list items
const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

// Animation for backdrop overlays
const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

// Animation for the mobile navigation dropdown menu
const mobileMenuVariants = {
  hidden: { 
    opacity: 0,
    height: 0,
    scale: 0.95,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  },
  visible: { 
    opacity: 1,
    height: "auto",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
      when: "beforeChildren",
    }
  },
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

export { itemVariants, overlayVariants, mobileMenuVariants };
