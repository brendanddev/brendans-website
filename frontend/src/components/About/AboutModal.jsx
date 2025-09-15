
/**
 * @file AboutModal.jsx
 * @author Brendan Dileo, September 2025
 * 
 * A modal component displaying information about me in a terminal style modal.
 */


import { motion } from 'framer-motion';
import { aboutText } from '../../data/aboutData';

const AboutModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div 
        className="bg-black border border-gray-700 rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[#00ff00] font-mono text-lg">$</span>
            <h3 className="text-[#00ff00] font-mono text-xl font-bold">about_brendan.txt</h3>
          </div>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-[#00ff00] transition-colors"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        <div className="text-[#00ff00] font-mono space-y-4">
          {aboutText.map((line, index) => (
            <p key={index}><span className="text-gray-400">&gt;</span> {line}</p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutModal;
