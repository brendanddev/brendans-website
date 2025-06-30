

/**
 * @file Sidebar.jsx
 * @Brendan Dileo
 * 
 * The Sidebar component for my portfolio-website.
*/

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaDiscord, FaLinkedin, FaStackOverflow, FaGitlab } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";


const Sidebar = () => {
    const [ isSidebarShown, setIsSidebarShown ] = useState(true);      
    const toggleSidebar = () => {setIsSidebarShown(!isSidebarShown);} 

    return (
        <>
        {/* Draggable toggle sidebar button */}
        <motion.button 
            onClick={toggleSidebar}
            // Makes the button draggable
            drag
            dragConstraints={{ top: 0, bottom: window.innerHeight - 50, left: 0, right: window.innerWidth - 50 }}
            dragMomentum={false}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragElastic={0.1}
            whileDrag={{ scale: 1.1 }}
            className="fixed bottom-4 right-4 z-40 text-white bg-black/80 backdrop-blur-sm p-2 rounded-lg hover:bg-gray-800 transition duration-300 shadow-lg border border-gray-700 cursor-move"
        >
            {/* Toggle button */}
            <GiHamburgerMenu
                className={`w-6 h-6 transition duration-300 ${isSidebarShown ? 'text-white' : 'text-[#00ff00]'}`}
            />
        </motion.button>

        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isSidebarShown ? 0 : -100, opacity: isSidebarShown ? 1 : 0 }}  
            transition={{ type: "spring", stiffness: 100, damping: 15 }} 
            className="fixed left-0 top-0 h-full w-16 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm shadow-lg z-30 border-r border-gray-700"
        >
        <ul className="space-y-6">
            <li>
                <a href="https://github.com/brendanddev" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <FaGithub className="w-8 h-8 text-[#00ff00] hover:text-white transition duration-300 hover:-translate-y-2" />
                </a>
            </li>
            
            <li>
                <a href="https://www.linkedin.com/in/brendan-dileo-bb39b4328/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                    <FaLinkedin className="w-8 h-8 text-[#00ff00] hover:text-[#0077b5] transition duration-300 hover:-translate-y-2" />
                </a>
            </li>
            <li>
                <a href="" aria-label="Discord" target="_blank" rel="noreferrer">
                    <FaDiscord className="w-8 h-8 text-[#00ff00] hover:text-[#7289da] transition duration-300 hover:-translate-y-2" />
                </a>
            </li>
            
            <li>
                <a href="https://stackoverflow.com/users/24895390/brendan-d" aria-label="StackOverflow" rel="noreferrer">
                    <FaStackOverflow className="w-8 h-8 text-[#00ff00] hover:text-[#f48024] transition duration-300 hover:-translate-y-2" />
                </a>
            </li>
            <li>
                <a href="https://gitlab.com/brendandileo" aria-label="Gitlab" rel="noreferrer">
                    <FaGitlab className="w-8 h-8 text-[#00ff00] hover:text-[#fc6d26] transition duration-300 hover:-translate-y-2" />
                </a>
            </li>
            <li>
                <a href="https://leetcode.com/u/devbrendandileo/" aria-label="Leetcode" rel="noreferrer">
                    <SiLeetcode className="w-8 h-8 text-[#00ff00] hover:text-[#f8a200] transition duration-300 hover:-translate-y-2" />
                </a>
            </li>
            <li>
                <a href="mailto:brendan.dileo@mohawkcollege.ca" aria-label="Email" rel="noreferrer">
                    <CgMail className="w-8 h-8 text-[#00ff00] hover:text-[#d44638] transition duration-300 hover:-translate-y-2" />
                </a>
            </li>
        </ul>
      </motion.div>
    </>
    );
};

export default Sidebar;
