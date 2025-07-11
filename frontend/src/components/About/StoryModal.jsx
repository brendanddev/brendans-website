
/**
 * @file StoryModal.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Modal component for displaying my own story and journey
 * on the about page of my portfolio website
 */

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const StoryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[65vh] overflow-y-auto bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-green-400">My Journey</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Academic story section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 p-6 bg-slate-800/50 rounded-b-2xl border-t border-slate-700"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Academic Excellence</h3>
            <p className="text-gray-300 leading-relaxed">
              Maintaining a <span className="text-green-400 font-semibold">93.5 GPA</span> while consistently achieving top marks 
              in programming courses. My dedication to learning has earned me a place on the Dean's Honors List every semester, 
              demonstrating my commitment to academic excellence and continuous improvement.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StoryModal;
