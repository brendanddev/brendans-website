
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