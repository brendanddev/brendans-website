
/**
 * @file EducationCard.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Compnent for displaying details about education, achievements, and honors
 * on the about page of my portfolio website
*/

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import AwardBox from "./AwardBox";

import { achievements, honors } from "../../data/educationData";

const EducationCard = () => {

  return (
    <section className="w-full mb-12 px-4">
      <motion.div
        className="w-full max-w-4xl mx-auto p-4 md:p-8 border rounded-lg shadow-[0_0_20px_rgba(120,119,198,0.25)] bg-slate-900/80 backdrop-blur-sm border-slate-700"
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <GraduationCap size={28} /> Education
        </h2>

        <div className="text-center mt-4">
          <p className="text-lg font-semibold italic text-white">
            Advanced Ontario Diploma in Software Development
          </p>
          <p className="text-gray-400 italic">Mohawk College | Expected Graduation: May 2026</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AwardBox title="Achievements" items={achievements} />
          <AwardBox title="Honors & Awards" items={honors} />
        </div>
      </motion.div>
    </section>
  );
};

export default EducationCard; 