
/**
 * @file LoadingSpinner.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A spinner rendered on the page while the pages components are loading
 * Mainly for design but as the page grows it will be used
 */

import { motion } from 'framer-motion';

const LoadingSpinner = () => (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 border-4 border-[#00ff00] border-t-transparent rounded-full animate-spin"
        />
    </div>
);

export default LoadingSpinner;