
/**
 * @file Projects.jsx
 * @author Brendan Dileo 
 * 
 * The projects page for my portfolio-website.
 * The Projects page will include the header component, a brief introduction section to the page,
 * dynamically loaded cards each containing a different project of mine, and the sidebar component.
 * This page makes use of the React Framer Motion library to create fade in animations when the page
 * loads.
*/

import { motion } from "framer-motion";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { projectData } from "../projectData";

import { FaFolder } from "react-icons/fa";

/**
 * Projects Functional Component
 * 
 * Renders the Projects page, showcasing some of my personal and pasison projects, and info about them.
 * Dynamically loads project cards based on the data loaded from 'projectData.jsx', and makes use of 
 * Framer Motion for animation effects.
 * 
 * @returns {JSX.Element} The jsx rendering the Projects page.
 */
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
                {/* Loops through the array of projects, creating a card for each project */ }
                {projectData.map((project, index) => (
                    // Applies the animation to the generated card
                    <motion.div 
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-96 min-h-[250px] bg-black border border-green-500 rounded-lg shadow-sm"
                    >
                        {/* Loads the data into the card */}
                        <div className="p-6">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">{project.title}</h5>
                            <p className="mb-4 text-sm font-normal text-gray-400">{project.desc}</p>
                            <div className="flex space-x-4 mb-3 text-green-400">
                                {/* Iterates through all the icons in the current project card and displays them */}
                                {project.icons.map((icon, i) => (
                                    <i key={i} className={`${icon} text-3xl`}></i>
                                ))}
                                {/* Extra icons to be displayed */}
                                {project.extraIcon}
                            </div>
                            {/* Link to the project */}
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

// Exports the Projects page component
export default Projects;
