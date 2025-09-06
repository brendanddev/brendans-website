
/**
 * @file Sidebar.jsx
 * @Brendan Dileo
 * 
 * The Sidebar component for my portfolio-website.
*/

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaGithub, FaDiscord, FaLinkedin, FaStackOverflow, FaGitlab } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
    const [isSidebarShown, setIsSidebarShown] = useState(false);
    const [activeTooltip, setActiveTooltip] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const sidebarRef = useRef(null);
    const toggleButtonRef = useRef(null);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobile && isSidebarShown && 
                sidebarRef.current && 
                !sidebarRef.current.contains(event.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target)) {
                setIsSidebarShown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile, isSidebarShown]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isSidebarShown) {
                setIsSidebarShown(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isSidebarShown]);

    const toggleSidebar = () => setIsSidebarShown(!isSidebarShown);

    const socialLinks = [
        {
            name: "GitHub",
            icon: FaGithub,
            href: "https://github.com/brendanddev",
            color: "hover:text-white",
            bgColor: "hover:bg-gray-800"
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/brendan-dileo-bb39b4328/",
            color: "hover:text-[#0077b5]",
            bgColor: "hover:bg-blue-900/20"
        },
        {
            name: "Discord",
            icon: FaDiscord,
            href: "",
            color: "hover:text-[#7289da]",
            bgColor: "hover:bg-indigo-900/20"
        },
        {
            name: "Stack Overflow",
            icon: FaStackOverflow,
            href: "https://stackoverflow.com/users/24895390/brendan-d",
            color: "hover:text-[#f48024]",
            bgColor: "hover:bg-orange-900/20"
        },
        {
            name: "GitLab",
            icon: FaGitlab,
            href: "https://gitlab.com/brendandileo",
            color: "hover:text-[#fc6d26]",
            bgColor: "hover:bg-red-900/20"
        },
        {
            name: "LeetCode",
            icon: SiLeetcode,
            href: "https://leetcode.com/u/devbrendandileo/",
            color: "hover:text-[#f8a200]",
            bgColor: "hover:bg-yellow-900/20"
        },
        {
            name: "Email",
            icon: CgMail,
            href: "mailto:brendan.dileo@mohawkcollege.ca",
            color: "hover:text-[#d44638]",
            bgColor: "hover:bg-red-900/20"
        }
    ];

    const sidebarVariants = {
        hidden: { 
            x: isMobile ? -300 : -100, 
            opacity: 0 
        },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1
            }
        },
        exit: {
            x: isMobile ? -300 : -100,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <>

            <AnimatePresence>
                {isMobile && isSidebarShown && (
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        onClick={() => setIsSidebarShown(false)}
                    />
                )}
            </AnimatePresence>

            {/* Draggable toggle button */}
            <motion.button 
                ref={toggleButtonRef}
                onClick={toggleSidebar}
                drag={!isMobile}
                dragConstraints={{ 
                    top: 0, 
                    bottom: window.innerHeight - 60, 
                    left: 0, 
                    right: window.innerWidth - 60 
                }}
                dragMomentum={false}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                dragElastic={0.1}
                whileDrag={{ scale: 1.05 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`
                    fixed bottom-4 right-6 z-50
                    bg-gray-900/90 text-white border-gray-700
                    backdrop-blur-md p-2 rounded-xl 
                    hover:shadow-lg transition-all duration-300 
                    shadow-lg border cursor-move
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    focus:ring-offset-gray-900
                    ${isMobile ? 'cursor-pointer' : ''}
                `}
                aria-label={isSidebarShown ? "Close sidebar" : "Open sidebar"}
                aria-expanded={isSidebarShown}
                title={isSidebarShown ? "Close sidebar" : "Open sidebar"}
            >   
                <AnimatePresence mode="wait">
                    {isSidebarShown ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <IoClose className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <GiHamburgerMenu className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Sidebar */}
            <AnimatePresence>
                {isSidebarShown && (
                    <motion.div
                        ref={sidebarRef}
                        variants={sidebarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`
                            fixed left-0 top-0 h-full z-50
                            ${isMobile ? 'w-80' : 'w-20'}
                            bg-gray-900/95 border-gray-700
                            backdrop-blur-md shadow-2xl border-r
                            flex flex-col
                        `}
                        role="navigation"
                        aria-label="Social media links"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
                            <motion.h2 
                                variants={itemVariants}
                                className="font-semibold text-lg text-white"
                            >
                                {isMobile ? 'Connect' : ''}
                            </motion.h2>
                        </div>

                        {/* Social links */}
                        <nav className="flex-1 flex items-center justify-center">
                            <ul className={`
                                space-y-4
                                ${isMobile ? 'w-full px-4' : 'space-y-6'}
                            `}>
                                {socialLinks.map((link) => (
                                    <motion.li
                                        key={link.name}
                                        variants={itemVariants}
                                        className="relative"
                                    >
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`
                                                group flex items-center
                                                ${isMobile 
                                                    ? 'p-3 rounded-xl transition-all duration-300' 
                                                    : 'p-2 rounded-lg transition-all duration-300'
                                                }
                                                hover:bg-gray-800/50
                                                ${link.bgColor}
                                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                                focus:ring-offset-gray-900
                                            `}
                                            onMouseEnter={() => setActiveTooltip(link.name)}
                                            onMouseLeave={() => setActiveTooltip(null)}
                                            onFocus={() => setActiveTooltip(link.name)}
                                            onBlur={() => setActiveTooltip(null)}
                                            aria-label={link.name}
                                        >
                                            <link.icon 
                                                className={`
                                                    ${isMobile ? 'w-6 h-6 mr-3' : 'w-8 h-8'}
                                                    text-emerald-400 transition-all duration-300
                                                    group-hover:scale-110 ${link.color}
                                                `} 
                                            />
                                            {isMobile && (
                                                <span className="font-medium text-white">
                                                    {link.name}
                                                </span>
                                            )}
                                        </a>

                                        {!isMobile && activeTooltip === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                className={`
                                                    absolute left-full ml-2 px-2 py-1 rounded-md text-sm font-medium
                                                    bg-gray-800 text-white
                                                    shadow-lg border border-gray-700
                                                    whitespace-nowrap z-10
                                                `}
                                            >
                                                {link.name}
                                            </motion.div>
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        {isMobile && (
                            <motion.div 
                                variants={itemVariants}
                                className="p-4 border-t border-gray-700/50"
                            >
                                <p className="text-sm text-center text-gray-400">
                                    Press ESC to close
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
