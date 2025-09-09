
/**
 * @file EducationSection.jsx
 * @author Brendan Dileo, June 2024
 * 
 * Displays education information in a terminal-style card on the About page.
 */


import { motion } from 'framer-motion';

const EducationSection = ({ data, itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="bg-black/50 border border-gray-700 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#00ff00] font-mono text-lg">$</span>
        <h2 className="text-[#00ff00] font-mono text-xl font-bold">education</h2>
      </div>
      <div className="space-y-3 text-[#00ff00] font-mono">
        <p><span className="text-gray-400">&gt;</span> <span className="font-bold">Degree:</span> {data.degree}</p>
        <p><span className="text-gray-400">&gt;</span> <span className="font-bold">School:</span> {data.school}</p>
        <p><span className="text-gray-400">&gt;</span> <span className="font-bold">Graduation:</span> {data.graduation}</p>
        <div className="ml-4">
          <p className="text-gray-400 mb-2">Achievements:</p>
          <ul className="space-y-1">
            {data.achievements.map((achievement, index) => (
              <li key={index} className="text-sm">
                <span className="text-gray-500">└─</span> {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;
