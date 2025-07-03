
/**
 * @file ProjectCard.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A card component that displays information about one of my projects in a styled format with optimized animations
 */

import { motion } from "framer-motion";
import { FaFolder } from "react-icons/fa";

import { cardVariants } from "../../utils/variants";

const ProjectCard = ({ project }) => {


  return (
    <motion.div 
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="w-full min-h-[250px] bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg shadow-[0_0_20px_rgba(120,119,198,0.25)] transition-all duration-300 hover:border-green-400"
      style={{
        willChange: "transform",
        transform: "translate3d(0, 0, 0)"
      }}
    >

      {/* Card content */}
      <div className="p-6 flex flex-col h-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">{project.title}</h5>
        <p className="mb-4 text-sm font-normal text-gray-400 flex-grow">{project.desc}</p>
        
        {/* Icons */}
        <div className="flex items-center space-x-4 mb-4 text-green-400">
          
          {project.icons.map((icon, i) => (
            <div 
              key={i} 
              className="hover:text-green-300 transition-colors duration-200"
              style={{ willChange: "color" }}
            >
              <i className={`${icon} text-3xl`} />
            </div>
          ))}

          {project.extraIcon && (
            <div 
              className="hover:text-green-300 transition-colors duration-200"
              style={{ willChange: "color" }}
            >
              {project.extraIcon}
            </div>
          )}
        </div>
        
        {/* Link to project */}
        <motion.a 
          target="_blank"
          rel="noopener noreferrer"
          href={project.link}
          className="mt-auto inline-flex items-center justify-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors w-full"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.15 }
          }}
          whileTap={{ 
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
          style={{
            willChange: "transform",
            transform: "translate3d(0, 0, 0)"
          }}
        >
          <FaFolder className="mr-2" /> View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
