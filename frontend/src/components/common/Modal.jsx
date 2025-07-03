
/**
 * @file Modal.jsx
 * @author Brendan Dileo, July 2025
 * 
 * 
 */

import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => (
    <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-slate-900 text-white p-6 rounded-xl max-w-2xl w-full shadow-xl border border-green-400 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => {
                console.log("close clicked");
                onClose();
            }}
            className="absolute top-3 right-4 text-green-400 hover:text-green-300 text-xl font-bold"
          >
            ✕
          </button>
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Modal;