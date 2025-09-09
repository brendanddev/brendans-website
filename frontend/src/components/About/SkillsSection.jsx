
/**
 * @file SkillsSection.jsx
 * @author Brendan Dileo, June 2025
 *
 * Displays categories of skills in a terminal-style card on the About page.
 */


import { motion } from 'framer-motion';

const SkillsSection = ({ data, itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(data).map(([category, skills]) => (
        <div key={category} className="bg-black/50 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#00ff00] font-mono text-lg">$</span>
            <h3 className="text-[#00ff00] font-mono text-lg font-bold capitalize">{category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-800 border border-gray-600 rounded text-[#00ff00] font-mono text-sm hover:bg-gray-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default SkillsSection;