
/**
 * @file About.jsx
 * @author Brendan Dileo
 * 
 * The About page for my portfolio-website
*/

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import { GraduationCap, FileText } from "lucide-react";
import { motion } from "framer-motion";

import LoadingSpinner from '../components/Spinner/LoadingSpinner';
import useLoading from '../hooks/useLoading';

const About = () => {

  const isLoading = useLoading(500);
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-slate-900 text-white p-4">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10 w-full max-w-5xl text-center">
        <Header 
            title="About Me" 
            subtitle="Who am I? Here's a bit about me."
        />
        
        <a
          href="/about.txt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 mt-6 mb-6 text-lg font-semibold text-slate-900 bg-green-400 rounded-lg shadow-[0_0_15px_rgba(50,205,50,0.5)] hover:bg-green-500 hover:shadow-[0_0_25px_rgba(50,205,50,0.7)] transition-all duration-300 transform hover:scale-105"
        >
          Read My Story
        </a>
      <section className="w-full mb-12 px-4">
        <motion.div
          className="w-full max-w-4xl mx-auto p-4 md:p-8 border rounded-lg shadow-[0_0_20px_rgba(120,119,198,0.25)] bg-slate-900/80 backdrop-blur-sm border-slate-700"
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
            <div className="p-6 border rounded-lg shadow-lg bg-slate-800/50 transition-transform duration-300 hover:scale-105 hover:border-green-400 hover:shadow-[0_0_15px_rgba(50,205,50,0.8)] border-slate-700">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Achievements</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><span className="font-bold">GPA:</span> 93.5</li>
                <li><span className="font-bold">99%</span> in Programming in Java</li>
                <li><span className="font-bold">100%</span> in Systems Analysis & Design</li>
                <li><span className="font-bold">96%</span> in Programming in C#.NET</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-slate-800/50 transition-transform duration-300 hover:scale-105 hover:border-green-400 hover:shadow-[0_0_15px_rgba(50,205,50,0.8)] border-slate-700">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Honors & Awards</h3>
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
        className="w-full max-w-4xl mx-auto p-4 md:p-8 border rounded-lg shadow-[0_0_20px_rgba(120,119,198,0.25)] bg-slate-900/80 backdrop-blur-sm border-slate-700 mb-10"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >

      <h2 className="text-4xl sm:text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="text-center p-4 md:p-6 border border-green-400 rounded-lg shadow-lg bg-slate-800 transition-transform transform hover:scale-105">
          <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">Programming Languages</h3>
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

        <div className="text-center p-4 md:p-6 border border-green-400 rounded-lg shadow-lg bg-slate-800 transition-transform transform hover:scale-105">
          <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">Web Development & Frameworks</h3>
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            <i className="devicon-react-original text-4xl md:text-5xl hover:text-[#61dafb] transition-colors" />
            <i className="devicon-nodejs-plain-wordmark text-4xl md:text-5xl hover:text-[#68a063] transition-colors" />
            <i className="devicon-bootstrap-plain text-4xl md:text-5xl hover:text-[#563d7c] transition-colors" />
            <i className="devicon-tailwindcss-original text-4xl md:text-5xl hover:text-[#38b2ac] transition-colors" />
            <i className="devicon-html5-plain text-4xl md:text-5xl hover:text-[#e34c26] transition-colors" />
            <i className="devicon-css3-plain text-4xl md:text-5xl hover:text-[#1572b6] transition-colors" />
          </div>
        </div>

        <div className="text-center p-4 md:p-6 border border-green-400 rounded-lg shadow-lg bg-slate-800 transition-transform transform hover:scale-105">
          <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">Databases, Scripting & Game Dev</h3>
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            <i className="devicon-microsoftsqlserver-plain text-4xl md:text-5xl hover:text-[#cc2927] transition-colors" />
            <i className="devicon-mysql-plain text-4xl md:text-5xl hover:text-[#00758f] transition-colors" />
            <i className="devicon-bash-plain text-4xl md:text-5xl hover:text-[#4eaa25] transition-colors" />
            <i className="devicon-unity-plain text-4xl md:text-5xl hover:text-[#ffffff] transition-colors" />
            <i className="devicon-godot-plain text-4xl md:text-5xl hover:text-[#478cbf] transition-colors" />
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center p-4 md:p-6 border border-green-400 rounded-lg shadow-lg bg-slate-800 transition-transform transform hover:scale-105">
          <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">Tools & Software</h3>
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
      className="w-full max-w-4xl mx-auto p-4 md:p-6 border rounded-lg shadow-lg bg-slate-800/50 border-slate-700 mb-10"
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <h2 className="text-3xl font-semibold text-green-400 flex items-center justify-center gap-2">
        <FileText size={28} /> Resume
      </h2>

      <p className="text-lg mt-2 text-gray-300">Click below to download my resume.</p>
      <a
        href="/BrendanDileo_Resume.pdf"
        download="BrendanDileo_Resume.pdf"
        className="mt-4 inline-block px-8 py-3 text-lg font-semibold text-slate-900 bg-green-400 rounded-lg shadow-[0_0_15px_rgba(50,205,50,0.5)] hover:bg-green-500 hover:shadow-[0_0_25px_rgba(50,205,50,0.7)] transition-all duration-300 transform hover:scale-105 active:scale-95"
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
