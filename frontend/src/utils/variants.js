
/**
 * @file variants.js
 * @author Brendan Dileo, June 2025
 * 
 * Defines the different framer motion animation states used throughout the website.
 */

// Item variantrs that define the animation states for each social link
const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

// Overlay variants that define the animation states
const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

export const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top",
    pointerEvents: "none",
    willChange: "opacity, transform",
    transition: { type: "spring", stiffness: 200, damping: 22, duration: 0.22 }
  },
  
  visible: {
    opacity: 1,
    scaleY: 1,
    transformOrigin: "top",
    pointerEvents: "auto",
    willChange: "opacity, transform",
    transition: { type: "spring", stiffness: 200, damping: 22 }
  },

  exit: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top",
    pointerEvents: "none",
    willChange: "opacity, transform",
    transition: { type: "spring", stiffness: 200, damping: 22, duration: 0.22 }
  }

};

export { itemVariants, overlayVariants, mobileMenuVariants };
