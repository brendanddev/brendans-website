
/**
 * @file About.jsx
 * @author Brendan Dileo
 * 
 * The About page for my portfolio website
*/

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { GraduationCap, Download, ExternalLink, Star, Award, BookOpen, Code } from "lucide-react";
import Header from "../components/Header";
import { motion, useScroll, useTransform } from "framer-motion";

// Custom hook for scroll-based animations
const useScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);
  
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

    // Simulate loading for smoother animations
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
        style={{ y, opacity }}
        className="relative z-10 w-full mb-6 max-w-6xl text-center"
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
        className="relative z-10 flex flex-wrap gap-4 justify-center mb-12"
      >
        <motion.a
          href="/about.txt"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-slate-900 bg-gradient-to-r from-[#00ff00] to-emerald-400 rounded-2xl shadow-[0_0_25px_rgba(0,255,0,0.4)] hover:shadow-[0_0_35px_rgba(0,255,0,0.6)] transition-all duration-300 border-2 border-transparent hover:border-[#00ff00]/20"
        >
          <ExternalLink size={22} className="group-hover:rotate-12 transition-transform duration-300" />
          Read My Story
        </motion.a>
        
        <motion.a
          href="/BrendanDileo_Resume.pdf"
          download="BrendanDileo_Resume.pdf"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-slate-700/60 hover:bg-slate-600/60 border-2 border-slate-600/50 hover:border-[#00ff00]/30 rounded-2xl transition-all duration-300 backdrop-blur-sm"
        >
          <Download size={22} className="group-hover:translate-y-1 transition-transform duration-300" />
          Download Resume
        </motion.a>
      </motion.div>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 w-full max-w-6xl mb-16 px-4"
      >
        <motion.div
          className="w-full p-8 md:p-10 border-2 border-slate-600/30 rounded-3xl shadow-[0_0_40px_rgba(120,119,198,0.2)] bg-slate-800/90 backdrop-blur-md"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-[#00ff00]/20 to-emerald-400/20 rounded-2xl">
              <GraduationCap size={36} className="text-[#00ff00]" /> 
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Education
            </h2>
          </div>

          <div className="text-center mb-10">
            <p className="text-2xl font-bold text-white mb-3">
              Advanced Ontario Diploma in Software Development
            </p>
            <p className="text-lg text-gray-300 font-medium">Mohawk College | Expected Graduation: May 2026</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              className="group p-8 border-2 border-slate-600/30 rounded-2xl shadow-lg bg-slate-700/40 transition-all duration-500 hover:border-[#00ff00]/50 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:bg-slate-700/60"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-[#00ff00]/20 to-emerald-400/20 rounded-xl">
                  <Star size={24} className="text-[#00ff00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#00ff00]">Academic Achievements</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between items-center p-3 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-colors duration-300">
                  <span className="font-medium">GPA:</span>
                  <span className="font-bold text-2xl text-[#00ff00]">93.5</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-colors duration-300">
                  <span className="font-medium">Programming in Java:</span>
                  <span className="font-bold text-xl text-[#00ff00]">99%</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-colors duration-300">
                  <span className="font-medium">Systems Analysis & Design:</span>
                  <span className="font-bold text-xl text-[#00ff00]">100%</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-colors duration-300">
                  <span className="font-medium">Programming in C#.NET:</span>
                  <span className="font-bold text-xl text-[#00ff00]">96%</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="group p-8 border-2 border-slate-600/30 rounded-2xl shadow-lg bg-slate-700/40 transition-all duration-500 hover:border-[#00ff00]/50 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:bg-slate-700/60"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-[#00ff00]/20 to-emerald-400/20 rounded-xl">
                  <Award size={24} className="text-[#00ff00]" />
                </div>
                <h3 className="text-2xl font-bold text-[#00ff00]">Honors & Awards</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-4 p-3 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#00ff00] to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,255,0,0.5)]"></div>
                  <span className="font-medium">Dean's Honors List (Every Semester: 2023 & 2024)</span>
                </li>
                <li className="flex items-center gap-4 p-3 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#00ff00] to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,255,0,0.5)]"></div>
                  <span className="font-medium">Ontario Scholar Award (2021)</span>
                </li>
                <li className="flex items-center gap-4 p-3 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#00ff00] to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,255,0,0.5)]"></div>
                  <span className="font-medium">TA Blakelock Honor Roll</span>
                </li>
                <li className="flex items-center gap-4 p-3 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#00ff00] to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,255,0,0.5)]"></div>
                  <span className="font-medium">TA Blakelock Tiger Award</span>
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
        className="relative z-10 w-full max-w-7xl px-4 mb-16"
      >
        <motion.div
          className="w-full p-8 md:p-10 border-2 border-slate-600/30 rounded-3xl shadow-[0_0_40px_rgba(120,119,198,0.2)] bg-slate-800/90 backdrop-blur-md"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="p-3 bg-gradient-to-r from-[#00ff00]/20 to-emerald-400/20 rounded-2xl">
              <Code size={36} className="text-[#00ff00]" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Programming Languages */}
            <motion.div 
              className="group p-8 border-2 border-slate-600/30 rounded-2xl shadow-lg bg-slate-700/40 transition-all duration-500 hover:border-[#00ff00]/50 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:bg-slate-700/60"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-[#00ff00]/20 to-emerald-400/20 rounded-xl">
                  <BookOpen size={20} className="text-[#00ff00]" />
                </div>
                <h3 className="text-xl font-bold text-[#00ff00]">Programming Languages</h3>
              </div>
              <div className="flex justify-center flex-wrap gap-6">
                <motion.i 
                  className="devicon-java-plain text-5xl hover:text-[#ff9900] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={0}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('Java - Advanced')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-python-plain text-5xl hover:text-[#306998] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={1}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('Python - Intermediate')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-javascript-plain text-5xl hover:text-[#f7df1e] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={2}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('JavaScript - Advanced')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-csharp-plain text-5xl hover:text-[#9b4f96] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={3}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('C# - Advanced')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-php-plain text-5xl hover:text-[#777bb3] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={4}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('PHP - Intermediate')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
              </div>
              {hoveredSkill && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm font-medium text-gray-300 mt-4 p-2 bg-slate-600/30 rounded-lg"
                >
                  {hoveredSkill}
                </motion.p>
              )}
            </motion.div>

            {/* Web Development */}
            <motion.div 
              className="group p-8 border-2 border-slate-600/30 rounded-2xl shadow-lg bg-slate-700/40 transition-all duration-500 hover:border-[#00ff00]/50 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:bg-slate-700/60"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-[#00ff00]/20 to-emerald-400/20 rounded-xl">
                  <Code size={20} className="text-[#00ff00]" />
                </div>
                <h3 className="text-xl font-bold text-[#00ff00]">Web Development</h3>
              </div>
              <div className="flex justify-center flex-wrap gap-6">
                <motion.i 
                  className="devicon-react-original text-5xl hover:text-[#61dafb] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={0}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('React - Advanced')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-nodejs-plain-wordmark text-5xl hover:text-[#68a063] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={1}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('Node.js - Intermediate')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-tailwindcss-original text-5xl hover:text-[#38b2ac] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={2}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('Tailwind CSS - Advanced')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-html5-plain text-5xl hover:text-[#e34c26] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={3}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('HTML5 - Advanced')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-css3-plain text-5xl hover:text-[#1572b6] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={4}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('CSS3 - Advanced')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
              </div>
            </motion.div>

            {/* Databases & Scripting */}
            <motion.div 
              className="group p-8 border-2 border-slate-600/30 rounded-2xl shadow-lg bg-slate-700/40 transition-all duration-500 hover:border-[#00ff00]/50 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:bg-slate-700/60"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-[#00ff00]/20 to-emerald-400/20 rounded-xl">
                  <Code size={20} className="text-[#00ff00]" />
                </div>
                <h3 className="text-xl font-bold text-[#00ff00]">Databases & Scripting</h3>
              </div>
              <div className="flex justify-center flex-wrap gap-6">
                <motion.i 
                  className="devicon-mysql-plain text-5xl hover:text-[#00758f] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={0}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('MySQL - Intermediate')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-unity-plain text-5xl hover:text-[#ffffff] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={1}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('Unity - Intermediate')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-godot-plain text-5xl hover:text-[#478cbf] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={2}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('Godot - Beginner')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
              </div>
            </motion.div>

            {/* DevOps & Tools */}
            <motion.div 
              className="group p-8 border-2 border-slate-600/30 rounded-2xl shadow-lg bg-slate-700/40 transition-all duration-500 hover:border-[#00ff00]/50 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:bg-slate-700/60"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-[#00ff00]/20 to-emerald-400/20 rounded-xl">
                  <Code size={20} className="text-[#00ff00]" />
                </div>
                <h3 className="text-xl font-bold text-[#00ff00]">DevOps & Tools</h3>
              </div>
              <div className="flex justify-center flex-wrap gap-6">
                <motion.i 
                  className="devicon-docker-plain text-5xl hover:text-[#2496ed] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={0}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('Docker - Beginner')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-git-plain text-5xl hover:text-[#f34f29] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={1}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('Git - Advanced')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
                <motion.i 
                  className="devicon-vscode-plain text-5xl hover:text-[#007acc] transition-all duration-300 cursor-pointer hover:scale-110"
                  variants={skillVariants}
                  custom={2}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill('VS Code - Advanced')}
                  onHoverEnd={() => setHoveredSkill(null)}
                />
              </div>
            </motion.div>
            
            {/* Miscellaneous skills */}
            <motion.div 
              className="group p-8 border-2 border-slate-600/30 rounded-2xl shadow-lg bg-slate-700/40 transition-all duration-500 hover:border-[#00ff00]/50 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:bg-slate-700/60"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-[#00ff00]/20 to-emerald-400/20 rounded-xl">
                  <Code size={20} className="text-[#00ff00]" />
                </div>
                <h3 className="text-xl font-bold text-[#00ff00]">Miscellaneous</h3>
              </div>
              <div className="flex justify-center flex-wrap gap-6">
                
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
