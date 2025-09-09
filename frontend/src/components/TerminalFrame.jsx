

/**
 * @file TerminalFrame.jsx
 * @author Brendan Dileo, September 2025
 *
 * A reusable, animated terminal-like frame component that wraps content in a styled window with a top bar and buttons.
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
            className={`w-[95%] md:w-4/5 lg:w-3/5 bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-sm rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col border border-gray-700 overflow-hidden font-mono mx-auto ${className}`}
        >
            <div className={`h-8 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center relative text-[${color}] text-sm font-bold border-b border-gray-700`}>
                <div className="absolute left-4 flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
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


