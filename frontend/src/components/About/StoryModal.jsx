
/**
 * @file StoryModal.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Modal component for displaying my own story and journey
 * on the about page of my portfolio website
 */

import { motion } from "framer-motion";
import { Code, Lightbulb, TrendingUp, Users } from "lucide-react";
import { intro, journeySections, callToAction } from "../../data/aboutStoryContent";

// Icon mapping
const icons = { TrendingUp, Lightbulb, Users };

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

        {/* Content */}
        <div className="p-6 space-y-8">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-full">
              <Code className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">{intro.role}</span>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">{intro.description}</p>
          </motion.div>

          {/* Journey sections */}
          <div className="grid gap-6">

            {/* Map through each section */}
            {journeySections.map((section, idx) => {

              // Determine section specific properties
              const Icon = icons[section.icon];
              const delay = 0.2 + idx * 0.1;
              const bgColor = `${section.color}-400/20`;
              const textColor = `text-${section.color}-400`;
              
              // Render the section with animations
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay }}
                  className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700"
                >
                  <div className={`flex-shrink-0 w-12 h-12 bg-${bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${textColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center pt-4"
          >
            <p className="text-gray-400 text-sm">{callToAction}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StoryModal;
