
/**
 * @file Projects.jsx
 * @author Brendan Dileo 
 * 
 * The projects page for my portfolio-website
 */

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProjectModal from "../components/ProjectModal";
import { projectData } from "../projectData";

import { motion } from "framer-motion";
import { FaFolder, FaExternalLinkAlt, FaCalendar, FaStar, FaCode, FaGamepad, FaRobot, FaPalette, FaDatabase } from "react-icons/fa";

import { useState, useEffect } from 'react';

const Projects = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect(() => {
        // Simulatiton but will be implemented
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);
        
    if (isLoading) {
        return (
            <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 border-4 border-[#00ff00] border-t-transparent rounded-full animate-spin"
                />
              </div>
        );
    }

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 18
            }
        }
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#00ff00]/10 to-emerald-400/10 rounded-full blur-3xl"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                  animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    scale: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-[#00ff00]/5 to-transparent rounded-full blur-2xl"
                  animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
            </div>
            
            <motion.div 
                initial={{ y: -20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-6xl my-5 mx-auto"
            >
                <Header 
                    title="My Projects" 
                    subtitle="A collection of my work and passion projects." 
                    typedTexts={[
                        "Building innovative solutions...",
                        "Creating meaningful experiences...",
                        "Exploring new technologies...",
                        "Turning ideas into reality..."
                    ]}
                />
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 mb-12"
            >
                <a
                    href="/projects.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex items-center px-8 py-4 
                        text-lg font-semibold text-slate-900 
                        bg-gradient-to-r from-[#00ff00] to-emerald-400
                        rounded-xl shadow-[0_0_20px_rgba(0,255,0,0.4)] 
                        hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] 
                        transition-all duration-300 transform hover:scale-105
                        focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:ring-offset-2 focus:ring-offset-slate-900
                    "
                >
                    <FaExternalLinkAlt className="mr-2" />
                    Read About My Projects
                </a>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-7xl mx-auto px-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {projectData.map((project, index) => (
                        <motion.div 
                            key={index}
                            layout="position"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="
                                group relative cursor-pointer
                                bg-gradient-to-br from-slate-800/90 to-slate-900/90 
                                backdrop-blur-sm border border-slate-600/50 
                                rounded-2xl shadow-[0_0_25px_rgba(120,119,198,0.15)] 
                                overflow-hidden hover:shadow-[0_0_40px_rgba(120,119,198,0.25)]
                                transition-all duration-500
                            "
                            onClick={() => handleProjectClick(project)}
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative p-6 lg:p-8 flex flex-col h-full">
                                {/* Project Header */}
                                <div className="mb-4">
                                    <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#00ff00] group-hover:text-emerald-300 transition-colors duration-300 mb-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <FaCalendar size={14} />
                                            <span>{project.completionDate}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaStar size={14} />
                                            <span>{project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Project Description */}
                                <p className="mb-6 text-sm lg:text-base font-normal text-gray-300 leading-relaxed flex-grow">
                                    {project.desc}
                                </p>
                                
                                {/* Technologies Section */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <FaCode size={12} />
                                        Technologies Used
                                    </h4>
                                    <div className="flex items-center flex-wrap gap-2">
                                        {project.icons.map((icon, i) => (
                                            <div 
                                                key={i} 
                                                className="
                                                    p-2 rounded-lg bg-slate-700/50 
                                                    text-[#00ff00] hover:text-emerald-300 
                                                    transition-all duration-300 hover:scale-110
                                                    group-hover:bg-slate-600/50 border border-slate-600/30
                                                    hover:border-[#00ff00]/30
                                                "
                                                title={`Technology ${i + 1}`}
                                            >
                                                <i className={`${icon} text-xl`}></i>
                                            </div>                                
                                        ))}
                                        {project.extraIcon && (
                                            <div className="
                                                p-2 rounded-lg bg-slate-700/50 
                                                text-[#00ff00] hover:text-emerald-300 
                                                transition-all duration-300 hover:scale-110
                                                group-hover:bg-slate-600/50 border border-slate-600/30
                                                hover:border-[#00ff00]/30
                                            ">
                                                {project.extraIcon}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                        Key Features
                                    </h4>
                                    <div className="flex flex-wrap gap-1">
                                        {project.features.slice(0, 3).map((feature, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs bg-slate-700/30 text-gray-300 rounded-md border border-slate-600/30"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                        {project.features.length > 3 && (
                                            <span className="px-2 py-1 text-xs bg-slate-700/30 text-gray-400 rounded-md border border-slate-600/30">
                                                +{project.features.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="
                                    mt-auto group/link
                                    inline-flex items-center justify-center 
                                    bg-gradient-to-r from-[#00ff00] to-emerald-500
                                    text-slate-900 font-bold py-3 px-6 
                                    rounded-xl hover:from-emerald-400 hover:to-[#00ff00]
                                    transition-all duration-300 transform hover:scale-105
                                    shadow-[0_0_15px_rgba(0,255,0,0.3)] 
                                    hover:shadow-[0_0_25px_rgba(0,255,0,0.5)]
                                    focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:ring-offset-2 focus:ring-offset-slate-800
                                ">
                                    <FaFolder className="mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                                    View Details
                                    <FaExternalLinkAlt className="ml-2 text-sm opacity-70 group-hover/link:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Project Modal */}
            <ProjectModal 
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />

            <div className="h-20"></div>
            <Sidebar />
        </div>
    );
};

export default Projects;
