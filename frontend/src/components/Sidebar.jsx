
/**
 * @file Sidebar.jsx
 * @author Brendan Dileo
 * 
 * A toggleable sidebar component that displays social media links.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';
import { sidebarVariants, overlayVariants } from '../animations/sidebarVariants';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                className="fixed top-6 left-6 z-50 p-2 bg-black/70 border border-gray-600 rounded text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-colors duration-200 font-mono text-sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.div
                    className="w-5 h-5 flex flex-col justify-center items-center"
                    animate={isOpen ? 'open' : 'closed'}
                >
                    <motion.span
                        className="block w-4 h-0.5 bg-current mb-1"
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 5 }
                        }}
                    />
                    <motion.span
                        className="block w-4 h-0.5 bg-current mb-1"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                    />
                    <motion.span
                        className="block w-4 h-0.5 bg-current"
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -5 }
                        }}
                    />
                </motion.div>
            </motion.button>

            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        variants={overlayVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        className="fixed top-0 left-0 h-full w-64 bg-black border-r border-gray-700 z-50 overflow-y-auto"
                        variants={sidebarVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {/* Sidebar Header */}
                        <div className="p-4 border-b border-gray-700">
                            <div className="flex items-center gap-2">
                                <span className="text-[#00ff00] font-mono text-sm">$</span>
                                <h2 className="text-[#00ff00] font-mono text-lg font-bold">social</h2>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="p-4 space-y-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target={link.url.startsWith('mailto:') || link.url.startsWith('/') ? '_self' : '_blank'}
                                    rel={link.url.startsWith('mailto:') || link.url.startsWith('/') ? '' : 'noopener noreferrer'}
                                    className="flex items-center gap-3 p-3 text-[#00ff00] font-mono text-sm hover:bg-gray-800 transition-colors duration-200"
                                >
                                    <span className="text-lg">{link.icon}</span>
                                    <span>{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
