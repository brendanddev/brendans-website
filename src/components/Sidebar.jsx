

/**
 * @file Sidebar.jsx
 * @Brendan Dileo
 * 
 * The Sidebar component for my portfolio-website.
 * This component renders a toggleable side bar that displays different social media icons for users
 * to get in touch with me. The side bar has a 'hamburger' icon that allows the user to show or hide 
 * the side bar. It makes use of the Reacts 'useState' hook for managing states, the Framer Motion 
 * libary for animations, and React Icons for the social icons.
*/

import { useState } from "react";
import { motion } from "framer-motion";

import { FaGithub, FaDiscord, FaLinkedin, FaStackOverflow, FaGitlab } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

/**
 * Sidebar Functional Component
 * 
 * This component provides a toggalable vertical social media section that allows the user to get
 * into touch with me. It uses a state variable and state function to store and update the current
 * state of the component through the 'useState' hook, and an addtional function to change the state
 * based on the button.
 * 
 * @returns {JSX.Element} - The JSX structure of the Sidebar.
 */
const Sidebar = () => {
    // State variable and state function
    const [ isSidebarShown, setIsSidebarShown ] = useState(true);      
    // Function to change the state of the component
    const toggleSidebar = () => {setIsSidebarShown(!isSidebarShown);} 

    return (
        <>
        {/* Changes whether the sidebar is visible or not based on the state variable */}
        <button 
            onClick={toggleSidebar}
            className="fixed top-20 left-4 z-40 text-white bg-black p-2 rounded-full hover:bg-gray-700 transition duration-300"
        >
            <GiHamburgerMenu
                // Changes the style of the hamburger icon depending on the sidebars visibility 
                className={`transition duration-300 ${isSidebarShown ? 'text-white' : 'text-[#00ff00]'}`}
            />
        </button>

        {/* Framer animation controlling the toggle animation of the sidebar appearing and dissapearing */}
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isSidebarShown ? 0 : -100, opacity: isSidebarShown ? 1 : 0 }}  
            transition={{ type: "spring", stiffness: 100, damping: 15 }} 
            className="fixed left-0 top-0 h-full w-16 flex flex-col items-center justify-center bg-black shadow-lg z-30"
        >
        {/* Hover effects on icons */}
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
            {/* .drendos */}
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

// Exports the Sidebar component to be used on the pages.
export default Sidebar;
