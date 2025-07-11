
/**
 * @file EducationCard.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Compnent for displaying details about education, achievements, and honors
 * on the about page of my portfolio website
*/

import { GraduationCap, School, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import { achievements, honors } from "../../data/educationData";
import AwardBox from "./AwardBox";

import { cardVariants, gridVariants, awardBoxVariants } from "../../utils/variants/educationCard";

const EducationCard = () => {
  return (
    <section className="w-full mb-12 px-2 sm:px-4">
      <motion.div
        className="relative w-full max-w-6xl mx-auto p-4 md:p-10 border-2 rounded-2xl shadow-[0_0_40px_rgba(120,119,198,0.25)] bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-md border-green-400/20 overflow-hidden group"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Glowing border */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-green-400/30 blur-[3px] opacity-60 group-hover:opacity-90 group-hover:blur-[5px] transition-all duration-700 z-0"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0.8 }}
        />

        {/* SVG watermark */}
        <svg
          className="absolute right-4 bottom-4 w-32 h-32 opacity-10 z-0 select-none hidden md:block"
          fill="none"
          viewBox="0 0 64 64"
        >
          <GraduationCap size={96} className="text-green-400" />
        </svg>

        {/* Header */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-full shadow-md mb-2">
            
            <GraduationCap size={32} className="text-green-400" />
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
              Education
            </h2>
          </div>
        </motion.div>

        {/* Education info */}
        <div className="relative z-10 text-center mt-2 mb-8 space-y-2">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold italic text-white">
              <School size={20} className="text-blue-400" />
              Advanced Ontario Diploma in Software Development
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400 text-base md:text-lg italic">
            <Award size={18} className="text-green-400" />
            Mohawk College
            <span className="mx-2">|</span>
            <Calendar size={18} className="text-blue-400" />
            Expected Graduation: May 2026
          </div>

        </div>


        {/* Award grid section */}
        <motion.div
          className="relative z-10 mt-2 grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <motion.div variants={awardBoxVariants}>
            <AwardBox title="Achievements" items={achievements} />
          </motion.div>
          
          <motion.div variants={awardBoxVariants}>
            <AwardBox title="Honors & Awards" items={honors} />
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationCard; 