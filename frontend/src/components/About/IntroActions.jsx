
/**
 * @file IntroActions.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Component for the intro action buttons on the about page
*/

import Button from "../common/Button";
import { Download, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// onReadStory: Property function to handle opening the story modal
const IntroActions = ({ onReadStory }) => {
  
  return (

    // Wrapped in motion div for animated button effects
    <motion.div 
      className="flex flex-col sm:flex-row justify-center gap-6 mt-8 mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Story Button */}
        <Button
          onClick={onReadStory}
          className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative flex items-center gap-3">
            {/* Icons to add effects */}
            <BookOpen size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Read My Story</span>
            <Sparkles size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Button>
      </motion.div>

      {/* Resume Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Triggers a download */}
        <Button
          as="a"
          href="/BrendanDileo_Resume.pdf"
          download="BrendanDileo_Resume.pdf"
          className="group relative px-8 py-4 text-lg font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-slate-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* Another gradient bg for download resume button */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex items-center gap-3">
            <Download size={20} className="group-hover:animate-bounce transition-all duration-300" />
            <span>Download Resume</span>
          </div>
        </Button>

      </motion.div>
    </motion.div>
  );
};

export default IntroActions;