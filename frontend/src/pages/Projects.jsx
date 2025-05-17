
/**
 * @file Projects.jsx
 * @author Brendan Dileo 
 * 
 * The projects page for my portfolio-website
*/

import { motion } from "framer-motion";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { projectData } from "../projectData";

import { FaFolder } from "react-icons/fa";

const Projects = () => {
    return (
        <motion.div 
            initial={false} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} 
            className="w-full min-h-screen bg-gray-900 flex flex-col items-center relative opacity-0"
        >
            <motion.div 
                initial={{ y: -20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1 }}
            >
                <Header title="My Projects" subtitle="A collection of my work and passion projects." />
            </motion.div>

            <a
          href="/about.txt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 mt-6 mb-6 text-lg font-semibold text-black bg-[#00ffcc] rounded-full shadow-[0_0_10px_#00ffcc] hover:bg-[#00e6b8] hover:shadow-[0_0_20px_#00ffcc] transition duration-300"
        >
          Read About My Projects
        </a>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 w-[95%] md:w-4/5 lg:w-3/4">
                {projectData.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-full min-h-[250px] bg-black border border-green-500 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105 hover:border-[#00ffcc] hover:shadow-[0_0_15px_rgba(0,255,204,0.8)]"
                    >
                        <div className="p-6">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">{project.title}</h5>
                            <p className="mb-4 text-sm font-normal text-gray-400">{project.desc}</p>
                            <div className="flex space-x-4 mb-3 text-green-400">
                                {project.icons.map((icon, i) => (
                                    <a
                                        key={i}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-300 transition-colors"
                                    >
                                        <i className={`${icon} text-3xl`}></i>
                                    </a>                                
                                ))}
                                {project.extraIcon}
                            </div>
                            <a 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.link}
                                className="mt-4 inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
                            >
                                <FaFolder />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <Sidebar />
        </motion.div>
    );
};

export default Projects;
