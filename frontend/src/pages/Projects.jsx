
/**
 * @file Projects.jsx
 * @author Brendan Dileo 
 * 
 * The projects page for my portfolio-website
*/

import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { projectData } from "../projectData";

import { FaFolder } from "react-icons/fa";

const Projects = () => {
    return (
        <div 
            className="relative w-full min-h-screen bg-slate-900 flex flex-col items-center p-4 text-white"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <motion.div 
                initial={{ y: -20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1 }}
                className="relative z-10 w-full"
            >
                <Header title="My Projects" subtitle="A collection of my work and passion projects." />
            </motion.div>

            <a
                href="/projects.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-block px-8 py-3 mt-6 mb-6 text-lg font-semibold text-slate-900 bg-green-400 rounded-lg shadow-[0_0_15px_rgba(50,205,50,0.5)] hover:bg-green-500 hover:shadow-[0_0_25px_rgba(50,205,50,0.7)] transition-all duration-300 transform hover:scale-105"
            >
                Read About My Projects
            </a>

            <motion.div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-6 w-full max-w-7xl mx-auto">
                {projectData.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-full min-h-[250px] bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg shadow-[0_0_20px_rgba(120,119,198,0.25)] transition-all duration-300 hover:scale-105 hover:border-green-400"
                    >
                        <div className="p-6 flex flex-col h-full">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">{project.title}</h5>
                            <p className="mb-4 text-sm font-normal text-gray-400 flex-grow">{project.desc}</p>
                            <div className="flex items-center space-x-4 mb-4 text-green-400">
                                {project.icons.map((icon, i) => (
                                    <div key={i} className="hover:text-green-300 transition-colors">
                                        <i className={`${icon} text-3xl`}></i>
                                    </div>                                
                                ))}
                                {project.extraIcon && (
                                    <div className="hover:text-green-300 transition-colors">
                                        {project.extraIcon}
                                    </div>
                                )}
                            </div>
                            <a 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.link}
                                className="mt-auto inline-flex items-center justify-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors w-full"
                            >
                                <FaFolder className="mr-2" /> View Project
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <Sidebar />
        </div>
    );
};

export default Projects;
