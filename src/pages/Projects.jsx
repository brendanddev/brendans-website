
/**
 * @file Projects.jsx
 * @author Brendan Dileo 
 * 
 * 
*/


import { motion } from "framer-motion";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { projectData } from "../projectData";



// FIXME: MessageIcon not working for faq bot card

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

            <motion.section 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.2 }} 
                className="w-2/4 mb-6"
            >
                <p className="bg-black text-sm text-green-400 p-4 rounded-md shadow-lg font-mono overflow-x-auto">
                    Over the past couple of years, I've worked on a variety of projects, ranging from school assignments to 
                    personal projects that helped me learn, as well as passion projects. The time and effort I've put into these 
                    projects has paid off, allowing me to grow as a developer. Below, you'll find a few of my personal and passion 
                    projects.
                </p>
            </motion.section>

            <motion.div className="grid md:grid-cols-3 gap-6 p-6">
                {projectData.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-96 min-h-[250px] bg-black border border-green-500 rounded-lg shadow-sm"
                    >
                        <div className="p-6">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">{project.title}</h5>
                            <p className="mb-4 text-sm font-normal text-gray-400">{project.desc}</p>
                            <div className="flex space-x-4 mb-3 text-green-400">
                                {project.icons.map((icon, i) => (
                                    <i key={i} className={`${icon} text-3xl`}></i>
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
