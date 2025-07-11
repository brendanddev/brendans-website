
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
    <section className="w-full mb-16 px-4">
      <motion.div
        className="w-full max-w-6xl mx-auto p-6 md:p-10 border rounded-2xl shadow-[0_0_30px_rgba(120,119,198,0.15)] bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-slate-700/50 relative overflow-hidden"
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
            className="text-center mb-10"
          >
            
            {/* Card container */}
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/20 rounded-full">
              
              {/* Icon and section title */}
              <Star size={28} className="text-purple-400" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quick Facts
              </h2>

            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A glimpse into my personality, interests, and what drives me as a developer
            </p>

          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

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
                <div className={`p-6 border rounded-xl shadow-lg bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-xl ${item.borderColor} border-opacity-50`}>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={24} className={item.color} />
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-lg font-semibold ${item.color} mb-2`}>
                    {item.title}
                  </h3>

                  {/* Display item description property */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

    </section>

  );
};

export default DottedGridSection; 