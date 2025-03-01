// Header.jsx
// Brendan Dileo

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";


const Header = () => {
    return (
      
        <div className="flex flex-col items-center justify-center text-center mt-10 mb-10">
           

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-5xl text-center font-extrabold text-white">
                    Brendan Dileo
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-400">
                    Software Developer | Tech Enthusiast | Designer
                </h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <p className="text-[#00ff00] max-w-2xl mt-4">
                    <ReactTyped
                        strings={[
                            "Welcome to my portfolio-website! Want to know more about me? Enter a command into the terminal!",
                            "Welcome to my portfolio! I am passionate about technology, coding, and solving complex problems.",
                            "You can often find me working on personal projects, exploring new frameworks, or playing around with hardware."
                        ]}
                        typeSpeed={30}
                        backSpeed={20}
                        backDelay={3000}
                        loop
                    />
                </p>
            </motion.div>

           
        </div>
    );
};

export default Header;
