
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

// Animation for project cards
const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
};

 // Container animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.3
      }
    }
  };

  // Item animation variants for individual cards
  const gridItemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

export { itemVariants, overlayVariants, mobileMenuVariants, cardVariants, containerVariants, gridItemVariants };
