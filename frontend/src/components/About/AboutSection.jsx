
/**
 * @file AboutSection.jsx
 * @author Brendan Dileo, September 2025
 * 
 * A section component for the About page that includes a button to open a modal with more information.
 */


import { motion } from 'framer-motion';

const AboutMeSection = ({ itemVariants, openModal }) => {
  return (
    <motion.div variants={itemVariants} className="bg-black/50 border border-gray-700 rounded-lg p-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-[#00ff00] font-mono text-lg">$</span>
        <h2 className="text-[#00ff00] font-mono text-xl font-bold">about_me</h2>
      </div>
      <p className="text-gray-400 font-mono mb-6">Want to know more? Read my full story</p>
      <button 
        onClick={openModal}
        className="px-6 py-3 bg-transparent border-2 border-[#00ff00] text-[#00ff00] font-mono hover:bg-[#00ff00] hover:text-black transition-colors duration-300"
      >
        ./read_more.sh
      </button>
    </motion.div>
  );
};

export default AboutMeSection;
