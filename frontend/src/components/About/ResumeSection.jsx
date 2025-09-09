
/**
 * @file ResumeSection.jsx
 * @author Brendan Dileo, June 2025
 * 
 * A section component for downloading my resume.
 */


import { motion } from 'framer-motion';

const ResumeSection = ({ itemVariants }) => {
  return (
    <motion.div variants={itemVariants} className="bg-black/50 border border-gray-700 rounded-lg p-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-[#00ff00] font-mono text-lg">$</span>
        <h2 className="text-[#00ff00] font-mono text-xl font-bold">resume</h2>
      </div>
      <p className="text-gray-400 font-mono mb-6">Download my resume to learn more about my experience</p>
      <a 
        href="/BrendanDileo_Resume.pdf" 
        download
        className="inline-block px-6 py-3 bg-transparent border-2 border-[#00ff00] text-[#00ff00] font-mono hover:bg-[#00ff00] hover:text-black transition-colors duration-300"
      >
        ./download_resume.sh
      </a>
    </motion.div>
  );
};

export default ResumeSection;
