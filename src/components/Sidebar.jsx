

// Sidebar.jsx
// Brendan Dileo

import { motion } from "framer-motion";

import { FaGithub, FaDiscord, FaLinkedin, FaStackOverflow, FaGitlab } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";


const Sidebar = () => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}  
            transition={{ type: "spring", stiffness: 100, damping: 15 }} 
            className="fixed left-0 top-0 h-full w-16 flex flex-col items-center justify-center bg-gray-800 shadow-lg z-30"
        >
            <ul className="space-y-6">
                <li>
                    <a href="https://github.com/brendanddev" aria-label="GitHub" target="_blank" rel="noreferrer">
                        <FaGithub className="w-8 h-8 text-white hover:text-[#00ff00] transition duration-300 hover:-translate-y-2 hover:text-[#00ff00]" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/brendan-dileo-bb39b4328/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                        <FaLinkedin className="w-8 h-8 text-white hover:text-[#00ff00] transition duration-300 hover:-translate-y-2 hover:text-[#00ff00]" />
                    </a>
                </li>
                {/* .drendos */}
                <li>
                    <a href="" aria-label="Discord" target="_blank" rel="noreferrer">
                        <FaDiscord className="w-8 h-8 text-white hover:text-[#00ff00] transition duration-300 hover:-translate-y-2 hover:text-[#00ff00]" />
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/24895390/brendan-d" aria-label="StackOverflow" rel="noreferrer">
                        <FaStackOverflow className="w-8 h-8 text-white hover:text-[#00ff00] transition duration-300 hover:-translate-y-2 hover:text-[#00ff00]" />
                    </a>
                </li>
                <li>
                    <a href="https://gitlab.com/brendandileo" aria-label="Gitlab" rel="noreferrer">
                        <FaGitlab className="w-8 h-8 text-white hover:text-[#00ff00] transition duration-300 hover:-translate-y-2 hover:text-[#00ff00]" />
                    </a>
                </li>
                <li>
                    <a href="https://leetcode.com/u/devbrendandileo/" aria-lable="Leetcode" rel="noreferrer">
                        <SiLeetcode className="w-8 h-8 text-white hover:text-[#00ff00] transition duration-300 hover:-translate-y-2 hover:text-[#00ff00]" />
                    </a>
                </li>
                <li>
                    <a href="brendan.dileo@mohawkcollege.ca" aria-label="Email" rel="noreferrer">
                        <CgMail className="w-8 h-8 text-white hover:text-[#00ff00] transition duration-300 hover:-translate-y-2 hover:text-[#00ff00]" />
                    </a>
                </li>
            </ul>
        </motion.div>
    );
};

export default Sidebar;
