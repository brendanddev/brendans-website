
/**
 * @file cards.js
 * @author Brendan Dileo, June 2025
 * 
 * Defines the card related animation variants used across the website inside project cards, grids, and containers
 * 
 * Defines the framer motion animation variants related to project cards, grids, and containers.
 * Each variant includes states like hidden, visible, annd hover and describes how components
 * tansition between those states
*/

// Basic card hover animation
export const cardVariants = {

  // Initial animation state
  initial: { scale: 1 },
  
  // Slight scale on hover
  hover: { 
    scale: 1.02,
    // Transition for hover effect
    transition: {
      duration: 0.2,
        ease: "easeOut"
      }
    }
};


// Parent container for cards with staggered animations
export const containerVariants = {

  // Hidden state before anything starts
  hidden: { opacity: 0 },

  // 
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
export const gridItemVariants = {

  // Hidden
  hidden: { 
    y: 30, 
    opacity: 0,
      scale: 0.95
    },

    // Visible state
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


  export const projectCardVariants = {

  hidden: { 
    y: 50, 
    opacity: 0, 
    scale: 0.9,
    rotateX: -15
  },


  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },


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

// Project grid variants for coordinated animations
export const projectGridVariants = {


  hidden: { opacity: 0 },


  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.5
    }

  }

};

export const projectCardItemVariants = {


  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },

  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
}; 