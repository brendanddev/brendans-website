
/**
 * @file About.jsx
 * @author Brendan Dileo
 * 
 * The About page for my portfolio-website
*/

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { GraduationCap, Download, ExternalLink } from "lucide-react";
import Header from "../components/Header";
import { motion, useScroll, useTransform } from "framer-motion";

// Custom hook for scroll-based animations
const useScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  return { y, opacity };
};

// Custom hook for skill tilt animations
const useSkillAnimations = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };
  
  return { hoveredSkill, setHoveredSkill, skillVariants };
};

const About = () => {
  const { y, opacity } = useScrollAnimation();
  const { hoveredSkill, setHoveredSkill, skillVariants } = useSkillAnimations();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    // Simulatiton but will be implemented
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 border-4 border-[#00ff00] border-t-transparent rounded-full animate-spin"
        />
      </div>
    );
  }

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
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl text-center"
      >
        <Header 
          title="About Me" 
          subtitle="Passionate developer crafting innovative solutions through code"
          typedTexts={[
            "Building the future with code...",
            "Learning new technologies...",
            "Creating meaningful experiences...",
            "Turning ideas into reality..."
          ]}
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex flex-wrap gap-4 justify-center mb-8"
      >
        <motion.a
          href="/about.txt"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-slate-900 bg-gradient-to-r from-[#00ff00] to-emerald-400 rounded-xl shadow-[0_0_20px_rgba(0,255,0,0.4)] hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] transition-all duration-300"
        >
          <ExternalLink size={20} />
          Read My Story
        </motion.a>
        
        <motion.a
          href="/BrendanDileo_Resume.pdf"
          download="BrendanDileo_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 rounded-xl transition-all duration-300"
        >
          <Download size={20} />
          Download Resume
        </motion.a>
      </motion.div>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full max-w-5xl mb-12 px-4"
      >
        <motion.div
          className="w-full p-6 md:p-8 border rounded-2xl shadow-[0_0_30px_rgba(120,119,198,0.25)] bg-slate-800/80 backdrop-blur-sm border-slate-600/50"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl font-bold flex items-center justify-center gap-3 mb-6">
            <GraduationCap size={32} className="text-[#00ff00]" /> 
            Education
          </h2>

          <div className="text-center mb-8">
            <p className="text-xl font-semibold text-white mb-2">
              Advanced Ontario Diploma in Software Development
            </p>
            <p className="text-gray-400">Mohawk College | Expected Graduation: May 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="p-6 border rounded-xl shadow-lg bg-slate-700/50 transition-all duration-300 hover:border-[#00ff00] hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] border-slate-600/50"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-[#00ff00] mb-4">Academic Achievements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex justify-between items-center">
                  <span>GPA:</span>
                  <span className="font-bold text-[#00ff00]">93.5</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Programming in Java:</span>
                  <span className="font-bold text-[#00ff00]">99%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Systems Analysis & Design:</span>
                  <span className="font-bold text-[#00ff00]">100%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Programming in C#.NET:</span>
                  <span className="font-bold text-[#00ff00]">96%</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="p-6 border rounded-xl shadow-lg bg-slate-700/50 transition-all duration-300 hover:border-[#00ff00] hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] border-slate-600/50"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-[#00ff00] mb-4">Honors & Awards</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00ff00] rounded-full"></div>
                  Dean's Honors List (Every Semester: 2023 & 2024)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00ff00] rounded-full"></div>
                  Ontario Scholar Award (2021)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00ff00] rounded-full"></div>
                  TA Blakelock Honor Roll
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00ff00] rounded-full"></div>
                  TA Blakelock Tiger Award
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full max-w-6xl px-4 mb-12"
      >
        <motion.div
          className="w-full p-6 md:p-8 border rounded-2xl shadow-[0_0_30px_rgba(120,119,198,0.25)] bg-slate-800/80 backdrop-blur-sm border-slate-600/50"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <motion.div 
              className="p-6 border border-slate-600/50 rounded-xl shadow-lg bg-slate-700/50 transition-all duration-300 hover:border-[#00ff00] hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-[#00ff00] mb-4 text-center">Programming Languages</h3>
              <div className="flex justify-center flex-wrap gap-4">
                <motion.i 
                  className="devicon-java-plain text-4xl hover:text-[#ff9900] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={0}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('Java')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-python-plain text-4xl hover:text-[#306998] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={1}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('Python')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-javascript-plain text-4xl hover:text-[#f7df1e] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={2}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('JavaScript')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-csharp-plain text-4xl hover:text-[#9b4f96] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={3}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('C#')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-php-plain text-4xl hover:text-[#777bb3] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={4}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('PHP')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
              </div>
              {hoveredSkill && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-gray-400 mt-2"
                >
                  {hoveredSkill}
                </motion.p>
              )}
            </motion.div>

            <motion.div 
              className="p-6 border border-slate-600/50 rounded-xl shadow-lg bg-slate-700/50 transition-all duration-300 hover:border-[#00ff00] hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-[#00ff00] mb-4 text-center">Web Development</h3>
              <div className="flex justify-center flex-wrap gap-4">
                <motion.i 
                  className="devicon-react-original text-4xl hover:text-[#61dafb] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={0}
                  whileHover="hover"
                />
                <motion.i 
                  className="devicon-nodejs-plain-wordmark text-4xl hover:text-[#68a063] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={1}
                  whileHover="hover"
                />
                <motion.i 
                  className="devicon-tailwindcss-original text-4xl hover:text-[#38b2ac] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={2}
                  whileHover="hover"
                />
                <motion.i 
                  className="devicon-html5-plain text-4xl hover:text-[#e34c26] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={3}
                  whileHover="hover"
                />
                <motion.i 
                  className="devicon-css3-plain text-4xl hover:text-[#1572b6] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={4}
                  whileHover="hover"
                />
              </div>
            </motion.div>

            <motion.div 
              className="p-6 border border-slate-600/50 rounded-xl shadow-lg bg-slate-700/50 transition-all duration-300 hover:border-[#00ff00] hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-[#00ff00] mb-4 text-center">Databases & Game Dev</h3>
              <div className="flex justify-center flex-wrap gap-4">
                <motion.i 
                  className="devicon-mysql-plain text-4xl hover:text-[#00758f] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={0}
                  whileHover="hover"
                />
                <motion.i 
                  className="devicon-unity-plain text-4xl hover:text-[#ffffff] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={1}
                  whileHover="hover"
                />
                <motion.i 
                  className="devicon-godot-plain text-4xl hover:text-[#478cbf] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={2}
                  whileHover="hover"
                />
              </div>
            </motion.div>

            <motion.div 
              className="p-6 border border-slate-600/50 rounded-xl shadow-lg bg-slate-700/50 transition-all duration-300 hover:border-[#00ff00] hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-[#00ff00] mb-4 text-center">DevOps & Tools</h3>
              <div className="flex justify-center flex-wrap gap-4">
                <motion.i 
                  className="devicon-docker-plain text-4xl hover:text-[#2496ed] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={0}
                  whileHover="hover"
                />
                <motion.i 
                  className="devicon-git-plain text-4xl hover:text-[#f34f29] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={1}
                  whileHover="hover"
                />
                <motion.i 
                  className="devicon-vscode-plain text-4xl hover:text-[#007acc] transition-colors cursor-pointer"
                  variants={skillVariants}
                  custom={2}
                  whileHover="hover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <div className="h-20"></div>
      <Sidebar />
    </div>
  );
};

export default About;
