
/**
 * @file educationCard.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the animation variants for the EducationCard component
 * to be used with framer motion on the about page
 */


// Animation variant for the entire card
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation for the children inside of the award grid
const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.5 },
  },
};

// Animation variant for each award box
const awardBoxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};