
/**
 * @file Header.jsx
 * @author Brendan Dileo
 * 
 * The Header Component for my portfolio-website
 */

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

// Takes title to be displayed, a subtitle, and an array of strings to be typed out 
// with typing effect in header
const Header = ({ title, subtitle, typedTexts }) => {
    return (
            <div className="flex flex-col items-center justify-center text-center mt-4 sm:mt-6 md:mt-10 mb-0">            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold text-white px-4">
                    {title}
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-400 px-4 mt-2">
                    {subtitle}
                </h3>
            </motion.div>

            {typedTexts && typedTexts.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full"
                >
                    <p className="text-green-400 max-w-2xl mx-auto mt-6 px-4 text-sm sm:text-base md:text-lg">
                        {/* Uses react typed for typing effect */}
                        <ReactTyped
                            strings={typedTexts}
                            typeSpeed={30}
                            backSpeed={20}
                            backDelay={3000}
                            loop
                        />
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default Header;
