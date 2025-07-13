
/**
 * @file AwardBox.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Reusable component for displaying achievements and awards
 * with animations
*/

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AwardBox = ({ title, items }) => {
  return (
    <motion.div
      className="group p-4 sm:p-6 border rounded-xl shadow-lg bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-green-400/50 hover:shadow-[0_0_25px_rgba(50,205,50,0.3)] border-slate-700/50"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Header of the section with title and icon */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400/20 rounded-lg flex items-center justify-center">
          <CheckCircle size={12} className="sm:w-4 sm:h-4 text-green-400" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-green-400">{title}</h3>
      </div>
      
      <ul className="space-y-2 sm:space-y-3">
        {/* Map through each item and animate induvidually */}
        {items.map((item, index) => (
          // Wrapped in motion for animations
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-2 sm:gap-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
          >
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
            <span className="leading-relaxed text-sm sm:text-base">{item}</span>
          </motion.li>
        ))}

      </ul>
    </motion.div>
  );
};

export default AwardBox; 