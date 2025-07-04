
/**
 * @file projects.js
 * @author Brendan Dileo, July 2025
 * 
 * Animation variants specific to to modals content and icons on the projects page
 */

// Modal animation variants
export const modalVariants = {
  // Modal hidden state
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 50
  },

  // Modal visible variant with spring animation
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    // Spring animation for smoother entrance 
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },

  // Modal exit variant
  exit: { 
    opacity: 0, 
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2
    }
  }
};

// Content animation variants
export const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5
    }
  }
};

// Feature animation variants
export const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + (i * 0.1),
      duration: 0.5
    }
  })
};

// Technology icon animation variants
export const techVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3 + (i * 0.1),
      type: "spring",
      stiffness: 200
    }
  }),
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400
    }
  }
};

// Technology container variants for coordinated animations
export const techContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
      duration: 0.3
    }
  }
};

// Technology item variants for individual icons
export const techItemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400
    }
  }
};

// Project card hover variants
export const hoverVariants = {
  hover: {
    y: -10,
    scale: 1.03,
    rotateX: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}; 