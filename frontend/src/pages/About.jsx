/**
 * @file About.jsx
 * @author Brendan Dileo
 * 
 * The About page for my portfolio-website
*/

import Sidebar from "../components/Sidebar";
import { GraduationCap, FileText } from "lucide-react";
import Header from "../components/Header";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-gray-900 text-white">
      <div className="relative z-10 w-full max-w-5xl text-center">
        <Header 
            title="About Me" 
            subtitle="Who am I? Here's a bit about me."
        />

        <section className="w-full flex justify-center items-center mb-8 px-4">
          
          <motion.div
            className="w-full max-w-4xl h-[300px] bg-black rounded-lg shadow-lg flex flex-col border border-white overflow-hidden font-mono"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          
            <div className="h-8 bg-white flex items-center justify-between px-4 text-sm text-black">
              <span>About-Brendan</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
            </div>

            <motion.div
              className="flex-1 p-4 font-semibold text-sm text-white overflow-y-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Hi, I'm <span className="font-bold text-[#00ff00]">Brendan</span>, a{" "}
              <span className="italic">Software Development</span> student and{" "}
              <span className="italic">Aspiring Full Stack Developer</span> with a passion for{" "}
              <span className="font-bold text-[#ff3131]"> technology </span> and{" "}
              <span className="font-bold text-[#00ff00]">creating</span>.
              <br />
              <br />
              I first fell in love with <span className="font-bold text-[#ff3131]"> technology</span> through{" "}
              <span className="font-bold text-[#a89b32]"> video games</span>. My first{" "}
              <span className="font-bold text-[#f24ebe]">console</span> was the{" "}
              <span className="font-bold text-[#00ff00]">PS2</span>, and around 2006, I got a{" "}
              <span className="font-bold text-[#00ff00]"> Wii and DS</span>.
              <br />
              My journey with <span className="font-bold italic text-[#f7c765]">computers</span> began in the{" "}
              <span className="italic">5th grade</span>, when I got my first{" "}
              <span className="font-bold italic text-[#f7c765]"> personal computer</span> for my birthday. I quickly became
              fascinated with PC gaming, and eventually{" "}
              <span className="font-bold text-[#09baeb]"> Minecraft modding.</span> I wanted to install the{" "}
              <span className="font-bold italic text-[#f7c765]">Nodus Modded Client </span> but I struggled to get it
              working. Determined to figure it out, I watched tutorials and read online documentation, my first real
              experience with <span className="font-bold text-[#3235e6]"> problem-solving </span>and{" "}
              <span className="font-bold text-[#5658f5]">troubleshooting</span>.
              <br />
              <br />
              By 7th grade, I built my <span className="font-bold italic text-[#f7c765]"> first custom PC </span>
              and ever since, I've been building, fixing, and taking apart <span className="font-bold italic text-[#f7c765]"> computers</span>, 
              whether for fun, personal projects, or helping friends.
              <br />
              <br />
              In 9th grade, I became even more interested in <span className="font-bold text-[#09baeb]">coding</span>,
              <span className="font-bold italic text-[#f7c765]"> programming</span>, and <span className="font-bold text-[#f24ebe]">modding</span>, 
              and by 11th grade, my passion for <span className="font-bold italic text-[#00ff00]">software development</span> really took off. I wanted
              to <span className="font-bold text-[#f24ebe]">mod </span> <span className="font-bold text-[#3235e6]">Call of Duty: Black Ops 1 Zombies </span> 
              on PC, which led me down a rabbit hole of researching online communities and open-source tools. Without official documentation, I had to analyze
              <span className="font-bold italic text-[#ffff00]"> decompiled game scripts</span>, which became my first hands-on experience with 
              <span className="font-bold italic text-[#f7c765]"> coding</span> and <span className="font-bold italic text-[#f7c765]">programming languages</span>.
              <br />
              <br />
              Now, I'm focused on <span className="font-bold italic text-[#fc2605]">Software Development</span>, 
              <span className="font-bold italic text-[#05f4fc]"> Automation</span>, 
              <span className="font-bold italic text-[#6528bf]"> Machine Learning</span>, and creating efficient solutions for complex real-world problems.
            </motion.div>
          </motion.div>
        </section>
      
      <section className="w-full mb-12 px-4">
        <motion.div
          className="w-full max-w-4xl mx-auto p-4 md:p-8 border rounded-lg shadow-[0_4px_12px_rgba(0,255,204,0.5)] bg-black"
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
            <GraduationCap size={28} /> Education
          </h2>

          <div className="text-center mt-4">
            <p className="text-lg font-semibold italic text-white">
              Advanced Ontario Diploma in Software Development
            </p>
            <p className="text-gray-400 italic">Mohawk College | Expected Graduation: May 2026</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg shadow-lg bg-gray-900 transition-transform duration-300 hover:scale-105 hover:border-[#00ffcc] hover:shadow-[0_0_15px_rgba(0,255,204,0.8)]">
              <h3 className="text-xl font-semibold text-[#00ffcc] mb-4">Achievements</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><span className="font-bold">GPA:</span> 93.5</li>
                <li><span className="font-bold">99%</span> in Programming in Java</li>
                <li><span className="font-bold">100%</span> in Systems Analysis & Design</li>
                <li><span className="font-bold">96%</span> in Programming in C#.NET</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-gray-900 transition-transform duration-300 hover:scale-105 hover:border-[#00ffcc] hover:shadow-[0_0_15px_rgba(0,255,204,0.8)]">
              <h3 className="text-xl font-semibold text-[#00ffcc] mb-4">Honors & Awards</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Dean's Honors List (Every Semester: 2023 & 2024)</li>
                <li>Ontario Scholar Award (2021)</li>
                <li>TA Blakelock Honor Roll</li>
                <li>TA Blakelock Tiger Award</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.div
        className="w-full max-w-4xl mx-auto p-4 md:p-8 border rounded-lg shadow-[0_4px_12px_rgba(0,255,204,0.5)] bg-black mb-10"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >

      <h2 className="text-4xl sm:text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="text-center p-4 md:p-6 border border-[#00ffcc] rounded-lg shadow-lg bg-gray-800 transition-transform transform hover:scale-105">
          <h3 className="text-xl md:text-2xl font-semibold text-[#00ffcc] mb-4">Programming Languages</h3>
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            <i className="devicon-java-plain text-4xl md:text-5xl hover:text-[#ff9900] transition-colors" />
            <i className="devicon-python-plain text-4xl md:text-5xl hover:text-[#306998] transition-colors" />
            <i className="devicon-javascript-plain text-4xl md:text-5xl hover:text-[#f7df1e] transition-colors" />
            <i className="devicon-csharp-plain text-4xl md:text-5xl hover:text-[#9b4f96] transition-colors" />
            <i className="devicon-dot-net-plain text-4xl md:text-5xl hover:text-[#512bd4] transition-colors" />
            <i className="devicon-php-plain text-4xl md:text-5xl hover:text-[#777bb3] transition-colors" />
            <i className="devicon-swift-plain text-4xl md:text-5xl hover:text-[#fa7343] transition-colors" />
          </div>
        </div>

        <div className="text-center p-4 md:p-6 border border-[#00ffcc] rounded-lg shadow-lg bg-gray-800 transition-transform transform hover:scale-105">
          <h3 className="text-xl md:text-2xl font-semibold text-[#00ffcc] mb-4">Web Development & Frameworks</h3>
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            <i className="devicon-react-original text-4xl md:text-5xl hover:text-[#61dafb] transition-colors" />
            <i className="devicon-nodejs-plain-wordmark text-4xl md:text-5xl hover:text-[#68a063] transition-colors" />
            <i className="devicon-bootstrap-plain text-4xl md:text-5xl hover:text-[#563d7c] transition-colors" />
            <i className="devicon-tailwindcss-original text-4xl md:text-5xl hover:text-[#38b2ac] transition-colors" />
            <i className="devicon-html5-plain text-4xl md:text-5xl hover:text-[#e34c26] transition-colors" />
            <i className="devicon-css3-plain text-4xl md:text-5xl hover:text-[#1572b6] transition-colors" />
          </div>
        </div>

        <div className="text-center p-4 md:p-6 border border-[#00ffcc] rounded-lg shadow-lg bg-gray-800 transition-transform transform hover:scale-105">
          <h3 className="text-xl md:text-2xl font-semibold text-[#00ffcc] mb-4">Databases, Scripting & Game Dev</h3>
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            <i className="devicon-microsoftsqlserver-plain text-4xl md:text-5xl hover:text-[#cc2927] transition-colors" />
            <i className="devicon-mysql-plain text-4xl md:text-5xl hover:text-[#00758f] transition-colors" />
            <i className="devicon-bash-plain text-4xl md:text-5xl hover:text-[#4eaa25] transition-colors" />
            <i className="devicon-unity-plain text-4xl md:text-5xl hover:text-[#ffffff] transition-colors" />
            <i className="devicon-godot-plain text-4xl md:text-5xl hover:text-[#478cbf] transition-colors" />
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center p-4 md:p-6 border border-[#00ffcc] rounded-lg shadow-lg bg-gray-800 transition-transform transform hover:scale-105">
          <h3 className="text-xl md:text-2xl font-semibold text-[#00ffcc] mb-4">Tools & Software</h3>
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            <i className="devicon-git-plain text-4xl md:text-5xl hover:text-[#f34f29] transition-colors" />
            <i className="devicon-vscode-plain text-4xl md:text-5xl hover:text-[#007acc] transition-colors" />
            <i className="devicon-pycharm-plain text-4xl md:text-5xl hover:text-[#21d789] transition-colors" />
            <i className="devicon-json-plain text-4xl md:text-5xl hover:text-[#f7df1e] transition-colors" />
            <i className="devicon-intellij-plain text-4xl md:text-5xl hover:text-[#000000] transition-colors" />
            <i className="devicon-gimp-plain text-4xl md:text-5xl hover:text-[#5c5543] transition-colors" />
            <i className="devicon-xcode-plain text-4xl md:text-5xl hover:text-[#1575f3] transition-colors" />
            <i className="devicon-linux-plain text-4xl md:text-5xl hover:text-[#fcc624] transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
    
    <motion.div
      className="w-full max-w-4xl mx-auto p-4 md:p-6 border rounded-lg shadow-lg bg-gray-800 mb-10"
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <h2 className="text-3xl font-semibold text-[#00ffcc] flex items-center justify-center gap-2">
        <FileText size={28} /> Resume
      </h2>

      <p className="text-lg mt-2 text-gray-300">Click below to download my resume.</p>
      <a
        href="/BrendanDileo_Resume.pdf"
        download="BrendanDileo_Resume.pdf"
        className="mt-4 inline-block px-6 py-3 text-lg font-semibold text-black bg-[#00ffcc] rounded-lg 
                  shadow-[0_0_10px_rgba(0,255,204,0.6)] 
                  transition-all duration-300 ease-in-out
                  hover:bg-[#00ddaa] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,204,0.9)]
                  active:scale-95"
      >
        Download Resume
      </a>
    </motion.div>
    </div>
    <Sidebar />
  </div>
  );
};

export default About;
