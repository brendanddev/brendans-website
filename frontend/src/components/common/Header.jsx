
/**
 * @file Header.jsx
 * @author Brendan Dileo
 * 
 * The Header Component for my portfolio-website
 */

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Header = ({ title, subtitle, typedTexts }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-6 sm:mt-10 mb-0 px-2">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-white px-2 sm:px-4">
                    {title}
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-400 px-2 sm:px-4 mt-2 sm:mt-3">
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
                    <p className="text-green-400 max-w-2xl mx-auto mt-4 sm:mt-6 px-2 sm:px-4 text-xs sm:text-sm md:text-base lg:text-lg">
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
