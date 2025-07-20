
/**
 * @file SkillProficiencySection.jsx
 * @author Brendan Dileo
 * 
 * A component that displays a detailed breakdown of how proficient 
 * I am in various technologies and tools to be used in the Highlights page
*/

import { motion } from "framer-motion";
import { skillProficiencyCategories } from "../../data/skillsProficiency";

const SkillProficiencySection = () => {
  return (
    <section className="w-full mb-16 px-4">
      <motion.div
        className="w-full max-w-6xl mx-auto p-6 md:p-10 border rounded-2xl shadow-[0_0_30px_rgba(120,119,198,0.15)] bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-slate-700/50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-gradient-to-r from-blue-400/10 to-green-400/10 border border-blue-400/20 rounded-full">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Skill Proficiency
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A detailed breakdown of my expertise levels across different technologies and tools
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-slate-800/50 border border-slate-600/50 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-sm text-gray-300">Expert (90%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full" />
              <span className="text-sm text-gray-300">Advanced (80-89%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="text-sm text-gray-300">Intermediate (70-79%)</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillProficiencySection; 