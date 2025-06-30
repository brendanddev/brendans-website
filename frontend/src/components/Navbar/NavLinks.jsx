
/**
 * @file NavLinks.jsx
 * @author Brendan Dileo, June 2025
 * 
 * Renders the links used in the navbar.
 */

import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navBarLinks } from './navBarLinks';

const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
};

const NavLinks = ({ isMobile = false, closeMenu = false }) => {
    const location = useLocation();
    
    // Maps over each nav link to dynamically generate the list of links
    // and highlights the currently active link based on the current URL path
    return navBarLinks.map(({ to, label }, index) => {
        const isActive = location.pathname === to;

        return (
            isMobile ? (
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
            ) : (
                <li key={label} className="relative">
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
                </li>
            )
        );
    });
};

export default NavLinks;
