
/**
 * @file Projects.jsx
 * @author Brendan Dileo 
 * 
 * The projects page for my portfolio-website
 */

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { projectData } from "../projectData";

import { motion } from "framer-motion";
import { FaFolder, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

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
        <div className="relative w-full min-h-screen bg-slate-900 flex flex-col items-center p-4 text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            
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
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="
                                group relative
                                bg-gradient-to-br from-slate-800/90 to-slate-900/90 
                                backdrop-blur-sm border border-slate-600/50 
                                rounded-2xl shadow-[0_0_25px_rgba(120,119,198,0.15)] 
                                overflow-hidden
                            "
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative p-6 lg:p-8 flex flex-col h-full">
                                <h3 className="mb-4 text-2xl lg:text-3xl font-bold tracking-tight text-[#00ff00] group-hover:text-emerald-300 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                <p className="mb-6 text-sm lg:text-base font-normal text-gray-300 leading-relaxed flex-grow">
                                    {project.desc}
                                </p>
                                
                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                        Technologies Used
                                    </h4>
                                    <div className="flex items-center flex-wrap gap-3">
                                        {project.icons.map((icon, i) => (
                                            <div 
                                                key={i} 
                                                className="
                                                    p-2 rounded-lg bg-slate-700/50 
                                                    text-[#00ff00] hover:text-emerald-300 
                                                    transition-all duration-300 hover:scale-110
                                                    group-hover:bg-slate-600/50
                                                "
                                                title={`Technology ${i + 1}`}
                                            >
                                                <i className={`${icon} text-2xl`}></i>
                                            </div>                                
                                        ))}
                                        {project.extraIcon && (
                                            <div className="
                                                p-2 rounded-lg bg-slate-700/50 
                                                text-[#00ff00] hover:text-emerald-300 
                                                transition-all duration-300 hover:scale-110
                                                group-hover:bg-slate-600/50
                                            ">
                                                {project.extraIcon}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <a 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={project.link}
                                    className="
                                        mt-auto group/link
                                        inline-flex items-center justify-center 
                                        bg-gradient-to-r from-[#00ff00] to-emerald-500
                                        text-slate-900 font-bold py-3 px-6 
                                        rounded-xl hover:from-emerald-400 hover:to-[#00ff00]
                                        transition-all duration-300 transform hover:scale-105
                                        shadow-[0_0_15px_rgba(0,255,0,0.3)] 
                                        hover:shadow-[0_0_25px_rgba(0,255,0,0.5)]
                                        focus:outline-none focus:ring-2 focus:ring-[#00ff00]/50 focus:ring-offset-2 focus:ring-offset-slate-800
                                    "
                                >
                                    <FaFolder className="mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                                    View Project
                                    <FaExternalLinkAlt className="ml-2 text-sm opacity-70 group-hover/link:opacity-100 transition-opacity duration-300" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="h-20"></div>
            <Sidebar />
        </div>
    );
};

export default Projects;
