

/**
 * @file TerminalFrame.jsx
 * @author Brendan Dileo, September 2025
 *
 * A reusable frame component that mimics a terminal window with animated entrance.
 */

import { motion } from "framer-motion";

const TerminalFrame = ({
    children,
    title = "terminal: ~",
    color = "#00ff00",
    className = "",
    contentClassName = "",
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`w-full max-w-screen-sm md:max-w-2xl lg:max-w-3xl bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-sm rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col border border-gray-700 overflow-hidden font-mono mx-auto ${className}`}
            role="region"
            aria-label="Interactive terminal"
        >
            <div className={`h-9 sm:h-10 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center relative text-[${color}] text-xs sm:text-sm font-bold border-b border-gray-700`}>
                <div className="absolute left-3 sm:left-4 flex gap-2" aria-hidden="true">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                </div>
                <span className="text-center w-full">
                    <span className="hidden sm:inline text-white">{title}</span>
                    <span className="inline sm:hidden text-white">{title?.split(":")[0] || "terminal"} ~</span>
                </span>
            </div>
            <div className={`flex-1 ${contentClassName}`}>{children}</div>
        </motion.div>
    );
};

export default TerminalFrame;


