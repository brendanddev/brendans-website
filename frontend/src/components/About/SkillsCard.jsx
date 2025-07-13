
/**
 * @file SkillsCard.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Component for the skills section on the About page
*/

import { motion } from "framer-motion";
import SkillSection from "./SkillsSection";
import { Code } from "lucide-react";

import { skillCategories } from "../../data/skillsData";

const SkillsCard = () => {

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-10 border rounded-2xl shadow-[0_0_30px_rgba(120,119,198,0.15)] bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-slate-700/50 mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-6 sm:mb-10"
      >
        {/* Card title with icon */}
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-full">
          
          <Code size={20} className="sm:w-7 sm:h-7 text-green-400" />
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

        </div>

        {/* Card description */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            A well-rounded toolkit built through real-world experience across different programming languages, frameworks, 
            and tools. Each technology reflects my curiosity, growth, and commitment to learning.        
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <SkillSection 
              title={category.title} 
              icons={category.icons}
              icon={category.icon}
              color={category.color}
              bgColor={category.bgColor}
              borderColor={category.borderColor}
              className={category.className || ""}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsCard; 