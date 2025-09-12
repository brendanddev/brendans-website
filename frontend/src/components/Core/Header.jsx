
/**
 * @file Header.jsx
 * @author Brendan Dileo
 */

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Header = ({ title, subtitle, typedTexts }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-8 p-6"
        >
            {/* Main Title */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-[#00ff00] mb-4 tracking-wider"
                style={{
                    textShadow: "0 0 10px rgba(0, 255, 0, 0.3), 0 0 20px rgba(0, 255, 0, 0.1)"
                }}
            >
                {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-lg md:text-xl text-[#00ff00]/80 font-mono mb-6"
                >
                    {subtitle}
                </motion.p>
            )}

            {/* Typed Text Section */}
            {typedTexts && typedTexts.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-[#00ff00] font-mono text-base md:text-lg"
                >
                    <span className="text-[#00ff00]/60">$ </span>
                    <ReactTyped
                        strings={typedTexts}
                        typeSpeed={50}
                        backSpeed={30}
                        backDelay={2000}
                        loop
                        showCursor
                        cursorChar="█"
                        className="text-[#00ff00]"
                        style={{
                            textShadow: "0 0 5px rgba(0, 255, 0, 0.2)"
                        }}
                    />
                </motion.div>
            )}

            {/* Decorative Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="mt-6 h-px bg-gradient-to-r from-transparent via-[#00ff00]/50 to-transparent"
            />
        </motion.div>
    );
};

export default Header;
