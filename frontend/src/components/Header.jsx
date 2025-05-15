
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
        <div className="flex flex-col items-center justify-center text-center mt-10 mb-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-white px-4">
                    {title}
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-400 px-4">
                    {subtitle}
                </h3>
            </motion.div>

            {typedTexts && typedTexts.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-[#00ff00] max-w-2xl mt-4 px-4 text-sm sm:text-base md:text-lg">
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
