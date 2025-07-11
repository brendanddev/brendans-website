
/**
 * @file DottedGridSection.jsx
 * @author Brendan Dileo
 * 
 * A dotted grid section for displaying various personal highlights and facts
 * about myself on the about page
*/

import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/20 rounded-full">
              
              <Star size={28} className="text-purple-400" />
              
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quick Facts
              </h2>

            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A glimpse into my personality, interests, and what drives me as a developer
            </p>

          </motion.div>
         
        </div>

      </motion.div>

    </section>
    
  );
};

export default DottedGridSection;
