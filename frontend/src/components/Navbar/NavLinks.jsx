
/**
 * @file NavLinks.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Renders the links used in the navbar.
 */

import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navBarLinks } from '../../data/navBarLinks';
import { Menu } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
};

// Animation for dropdown panel
const dropdownPanelVariants = {
    closed: { opacity: 0, y: 16, scale: 0.98, pointerEvents: 'none', transition: { duration: 0.15, when: 'afterChildren' } },
    open: { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto', transition: { type: 'spring', stiffness: 300, damping: 24, staggerChildren: 0.04, delayChildren: 0.05 } },
};

// Animation for dropdown items
const dropdownItemVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.04 } }),
};

const NavLinks = ({ isMobile = false, closeMenu = false }) => {
    const location = useLocation();

    // Helper to check if any dropdown link is active
    const isDropdownActive = (dropdown) =>
        dropdown.some((item) => location.pathname === item.to);

    // Helper to render a single nav link
    const renderLink = ({ to, label }) => {
        const isActive = location.pathname === to;
        return (
            <motion.li
                key={label}
                variants={linkVariants}
                className="relative"
            >
                <span className="text-gray-500">[</span>
                <Link
                    to={to}
                    onClick={closeMenu ? () => closeMenu(false) : undefined}
                    className={`
                        relative px-2 py-1 transition-all duration-300
                        hover:text-[#00ff00] focus:text-[#00ff00]
                        focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:ring-offset-2 focus:ring-offset-black
                        ${isActive ? 'text-[#00ff00] font-semibold' : 'text-gray-300'}
                        ${isMobile ? 'block py-3 px-4 hover:bg-gray-800/50 rounded-lg' : ''}
                    `}
                    aria-current={isActive ? 'page' : undefined}
                >
                    {label}
                    {isActive && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff00]"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </Link>
                <span className="text-gray-500">]</span>
            </motion.li>
        );
    };

    // Helper to render a dropdown menu using Headless UI and Framer Motion
    const renderDropdown = ({ label, dropdown }) => {
        const dropdownActive = isDropdownActive(dropdown);
        return (
            <Menu as="li" className="relative list-none" key={label}>
                {({ open }) => (
                    <>
                        <Menu.Button
                            className={`
                                flex items-center gap-1 px-2 py-1 transition-all duration-300
                                hover:text-[#00ff00] focus:text-[#00ff00]
                                focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:ring-offset-2 focus:ring-offset-black
                                font-semibold capitalize relative
                                ${dropdownActive ? 'text-[#00ff00]' : 'text-gray-300'}
                                ${isMobile ? 'block py-3 px-4 hover:bg-gray-800/50 rounded-lg w-full text-left' : ''}
                            `}
                            aria-haspopup="menu"
                            aria-expanded={open}
                        >
                            <span className="text-gray-500">[</span>
                            <span className="flex items-center gap-1">
                                {label}
                                <ChevronDown className="w-4 h-4 ml-1" />
                            </span>
                            <span className="text-gray-500">]</span>
                            {/* Underline animation for active dropdown */}
                            {dropdownActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff00]"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Menu.Button>
                        {/* Animate dropdown menu appearance with AnimatePresence */}
                        <AnimatePresence>
                            {open && (
                                <Menu.Items
                                    as={motion.ul}
                                    static={isMobile}
                                    key="dropdown"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={dropdownPanelVariants}
                                    className={`
                                        absolute z-50 mt-2 min-w-[160px] bg-black border border-gray-700 rounded-xl shadow-lg focus:outline-none
                                        py-2
                                        ${isMobile ? 'left-0 w-full' : 'right-0'}
                                    `}
                                >
                                    {dropdown.map((item, i) => {
                                        const isActive = location.pathname === item.to;
                                        return (
                                            <Menu.Item key={item.label} as={motion.li} custom={i} variants={dropdownItemVariants}>
                                                {({ active }) => (
                                                    <Link
                                                        to={item.to}
                                                        onClick={closeMenu ? () => closeMenu(false) : undefined}
                                                        className={`
                                                            block px-4 py-2 text-sm transition-colors duration-200 relative
                                                            ${active || isActive ? 'bg-gray-800 text-[#00ff00]' : 'text-gray-300'}
                                                            font-medium
                                                        `}
                                                        aria-current={isActive ? 'page' : undefined}
                                                    >
                                                        {item.label}
                                                        {/* Underline for active dropdown item (optional, subtle) */}
                                                        {isActive && (
                                                            <motion.div
                                                                layoutId="activeTab"
                                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff00]"
                                                                initial={false}
                                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                            />
                                                        )}
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        );
                                    })}
                                </Menu.Items>
                            )}
                        </AnimatePresence>
                    </>
                )}
            </Menu>
        );
    };

    // Render all top-level links and dropdowns
    return navBarLinks.map((link) => {
        if (link.dropdown) {
            return renderDropdown(link);
        }
        return renderLink(link);
    });
};

export default NavLinks;
