
/**
 * @file SkillProficiencySection.jsx
 * @author Brendan Dileo
 * 
 * A component that displays a detailed breakdown of how proficient 
 * I am in various technologies and tools to be used in the Highlights page
*/

import { motion } from "framer-motion";

const SkillProficiencySection = () => {
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          My Skill Proficiencies
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A detailed breakdown of my expertise in various technologies and tools.
        </p>
      </div>
    </motion.section>
  );
};

export default SkillProficiencySection; 