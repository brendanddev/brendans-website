
/**
 * @file IntroActions.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Component for the intro action buttons on the about page
*/

import LinkButton from "../common/LinkButton";
import SplitButton from "../common/SplitButton";
import { Download, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const IntroActions = ({ onReadStory }) => {
  
  return (

    // Wrapped in motion div for animated button effects
    <motion.div 
      className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 mb-8 sm:mb-12 px-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="w-full sm:w-auto"
      >
        {/* Split Button for story and highlights */}
        <SplitButton onReadStory={onReadStory} />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="w-full sm:w-auto"
      >

        {/* Resume Button */}
        <LinkButton
          href="/BrendanDileo_Resume.pdf"
          download="BrendanDileo_Resume.pdf"
          className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-slate-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* Another gradient bg for download resume button */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
            <Download size={18} className="sm:w-5 sm:h-5 group-hover:animate-bounce transition-all duration-300" />
            <span>Download Resume</span>
          </div>
        </LinkButton>
      </motion.div>

    </motion.div>
  );
};

export default IntroActions;