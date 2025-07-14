
/**
 * @file DottedGridSection.jsx
 * @author Brendan Dileo
 * 
 * A dotted grid section for displaying various personal highlights and facts
 * about myself on the about page
*/

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import personalHighlights from "../../data/personalHighlights";

const DottedGridSection = () => {

  return (

    <section className="w-full mb-12 sm:mb-16 px-2 sm:px-4">

      <motion.div
        className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-10 border rounded-2xl shadow-[0_0_30px_rgba(120,119,198,0.15)] bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-slate-700/50 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >

        {/* Dotted Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #4ade80 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-6 sm:mb-10"
          >
            
            {/* Card container */}
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/20 rounded-full">
              
              {/* Icon and section title */}
              <Star size={20} className="sm:w-7 sm:h-7 text-purple-400" />
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quick Facts
              </h2>

            </div>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
              A glimpse into my personality, interests, and what drives me as a developer
            </p>

          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

            {/* Map through each highlight item */}
            {personalHighlights.map((item, index) => (
              
              // Wrap each item in motion for induvidual animations
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 300 }}
                className="group relative"
              >

                {/* Each item card */}
                <div className={`p-4 sm:p-6 border rounded-xl shadow-lg bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl ${item.borderColor} border-opacity-50`}>
                  
                  {/* Icon */}
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={16} className={`sm:w-6 sm:h-6 ${item.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-base sm:text-lg font-semibold ${item.color} mb-1 sm:mb-2`}>
                    {item.title}
                  </h3>

                  {/* Display item description property */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Decoration at bottom of component*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-6 sm:mt-8"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-full">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-400">Always growing, always learning</span>
          </div>
        </motion.div>

      </motion.div>

    </section>

  );
};

export default DottedGridSection; 