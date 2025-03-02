
/**
 * @file Header.jsx
 * @author Brendan Dileo
 * 
 * The Header Component for my portfolio-website.
 * This component renders a title, subtitle, and optionally a list of text to be displayed with a typing effect.
 * It makes use of two libraries, React Typed for the typing effect, and Framer Motion for the animations. 
*/

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

/**
 * Header Functional Component
 * 
 * Responsible for rendering the Header component onto a page.
 * This header will include a title and subtitle, and optionally additional text for the typing effect.
 * 
 * @param {Object} param0 - The properties (props) passed to the component.
 * @param {string} param0.title - The main text of the header. 
 * @param {string} param0.subtitle - The subtitle to the header.
 * @param {Array} param0.typedTexts - Optional array of strings that will be displayed with the Typed effect.
 * @returns {JSX.Element} - JSX containing the Header component.
 */
const Header = ({ title, subtitle, typedTexts }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-10 mb-10">
            {/* Each animation fades in and slides up, some with varying delays for a sequence simulation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-5xl text-center font-extrabold text-white">
                    {title}
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-400">
                    {subtitle}
                </h3>
            </motion.div>

            {/* Checks if typedText property was provided to the component */}
            {typedTexts && typedTexts.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {/* Passes array of strings to ReactTyped component, sets properties for speed */}
                    <p className="text-[#00ff00] max-w-2xl mt-4">
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

// Exports the Header component to be used on each page
export default Header;
