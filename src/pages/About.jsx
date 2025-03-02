

// About.jsx
// Brendan Dileo


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
          <Sidebar />

          <motion.div 
            initial={false} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} 
            className="flex justify-center items-center relative opacity-0"
        >
          <motion.section 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }} 
                  transition={{ duration: 1, delay: 0.2 }} 
                  className="w-3/4 mb-12"
              >
                <div className="w-4/5 h-[300px] bg-black rounded-lg shadow-lg flex flex-col border border-white overflow-hidden font-mono">
                  <div className="h-8 bg-white flex items-center justify-between px-4 text-sm text-black">
                      <span>Contact-Brendan-2</span>
                          <div className="flex gap-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                  </div>
                            </div>
                              <div className="flex-1 p-4 overflow-y-auto text-white">
                              {`Over the last few years I have worked on several different projects, between assignments
                                for school, personal projects to help my learning, or passion projects. Below are a few
                                with brief descriptions of the projects, the tech stack used, and a link to the project.`}
                              </div>
                            </div>

              </motion.section>
          </motion.div>
       


        <section className="w-full mb-12 border-[#00ffcc] pb-8">
          <div className="w-full p-6 border rounded-lg shadow-lg bg-gray-800">
            <h2 className="text-3xl font-semibold flex items-center justify-center gap-2">
              <GraduationCap size={28} /> Education
            </h2>
            <p className="text-lg mt-2">
              Advanced Ontario Diploma in Software Development - Mohawk College
            </p>
            <p className="text-gray-400">2026 - 05/15</p>

            <div className="flex flex-wrap justify-center gap-6 mt-6">
              
              <div className="w-[45%] p-6 border rounded-lg shadow-lg bg-gray-800">
                <h3 className="text-xl font-semibold text-[#00ffcc]">Achievements</h3>
                <br />
                <div className="flex justify-center flex-wrap gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <p>94.0 GPA</p>
                    <p>99% Programming in Java</p>
                    <p>100% Systems Analysis & Design</p>
                    <p>96% Programming in C#.NET</p>
                  </div>
                </div>
              </div>

              <div className="w-[45%] p-6 border rounded-lg shadow-lg bg-gray-800">
                <h3 className="text-xl font-semibold text-[#00ffcc]">Honors & Awards</h3>
                <br />
                <div className="flex justify-center flex-wrap gap-4">
                  <p>Deans Honors List 2023 & 2024 (Each Semester)</p>
                  <p>Ontario Scholar Award (2021)</p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Skills */}
        <section className="w-full mb-12 p-6 border rounded-lg shadow-lg bg-gray-800">
          <h2 className="text-3xl font-semibold text-[#00ffcc]">Skills</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="text-center p-6 border rounded-lg shadow-lg bg-gray-800">
              <h3 className="text-xl font-semibold text-[#00ffcc]">Programming Languages</h3>
              <br />
              <div className="flex justify-center flex-wrap gap-4">
                <i className="devicon-java-plain text-4xl mb-2" />
                <i className="devicon-python-plain text-4xl mb-2" />
                <i className="devicon-javascript-plain text-4xl mb-2" />
                <i className="devicon-csharp-plain text-4xl mb-2" />
                <i className="devicon-dot-net-plain text-4xl mb-2" />
                <i className="devicon-php-plain text-4xl mb-2" />
                <i className="devicon-swift-plain text-4xl mb-2" />
              </div>

            </div>

            <div className="text-center p-6 border rounded-lg shadow-lg bg-gray-800">
              <h3 className="text-xl font-semibold text-[#00ffcc]">Web Development & Frameworks</h3>
              <br />
              <div className="flex justify-center flex-wrap gap-4">
                <i className="devicon-react-original text-4xl mb-2" />
                <i className="devicon-nodejs-plain-wordmark text-4xl mb-2" />
                <i className="devicon-bootstrap-plain text-4xl mb-2" />
                <i className="devicon-tailwindcss-original text-4xl mb-2" />
                <i className="devicon-html5-plain text-4xl mb-2" />
                <i className="devicon-css3-plain text-4xl mb-2" />
              </div>
              
            </div>

            <div className="text-center p-6 border rounded-lg shadow-lg bg-gray-800">
              <h3 className="text-xl font-semibold text-[#00ffcc]">Database, Scripting & Game Development</h3>
              <br />
              <div className="flex justify-center flex-wrap gap-4">
                <i className="devicon-microsoftsqlserver-plain text-4xl mb-2" />
                <i className="devicon-mysql-plain text-4xl mb-2" />
                <i className="devicon-bash-plain text-4xl mb-2" />
                <i className="devicon-unity-plain text-4xl mb-2" />
                <i className="devicon-godot-plain text-4xl mb-2" />
              </div>

            </div>

          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-3 text-center p-6 border rounded-lg shadow-lg bg-gray-800">
              <h3 className="text-xl font-semibold text-[#00ffcc]">Tools & Software</h3>
              <br />
              <div className="flex justify-center flex-wrap gap-4">
                <i className="devicon-git-plain text-4xl mb-2" />
                <i className="devicon-vscode-plain text-4xl mb-2" />
                <i className="devicon-pycharm-plain text-4xl mb-2" />
                <i className="devicon-json-plain text-4xl mb-2" />
                <i className="devicon-intellij-plain text-4xl mb-2" />
                <i className="devicon-gimp-plain text-4xl mb-2" />
                <i className="devicon-xcode-plain text-4xl mb-2" />
                <i className="devicon-linux-plain text-4xl mb-2" />
              </div>

            </div>

          </div>

        </section>

        <section className="w-full mb-12 p-6 border rounded-lg shadow-lg bg-gray-800">
          
          <h2 className="text-3xl font-semibold text-[#00ffcc] flex items-center justify-center gap-2">
            <FileText size={28} /> Resume
          </h2>

          <p className="text-lg mt-2 text-gray-300">Click below to download my resume.</p>
          <a
            href="/Test-Resume.pdf"
            download="Test-Resume.pdf"
            className="mt-4 inline-block px-6 py-3 text-lg font-semibold text-white bg-[#00ffcc] rounded-lg hover:bg-[#00ddaa] transition"
          >Download resume</a>
        </section>

      </div>
    </div>
  );
};

export default About;
