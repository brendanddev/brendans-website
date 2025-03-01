// About.jsx
// Brendan Dileo

import { GraduationCap, FileText, Computer, Cpu, NotebookPen, MessageCircleMore, Search } from "lucide-react";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-5xl font-bold text-[#00ff00] mt-5 mb-6">About Brendan</h1>

        {/* Summary */}
        <section className="w-full mb-12">
          <p className="text-sm font-mono mt-2">
            Hi, I'm Brendan, a passionate Software Development student and aspiring Full Stack Developer with a deep love for technology.
            From building and fixing computers to diving into the world of programming, I thrive on exploring and creating solutions with technology.
            My journey began in 5th grade when I got my first computer and immediately became fascinated with how things work. By 7th grade, I built 
            my first computer and was already experimenting with hardware. It was in 9th grade, however, when I truly started to develop a passion 
            for programming, especially when I built my first gaming PC by carefully researching the best components for performance. During my high 
            school years, I discovered my love for modding through my interest in Call of Duty: Black Ops 1 Zombies. This sparked my curiosity about 
            programming and game modification, and as I learned more about coding, I found myself diving into platforms like GitHub to share and build
            upon the work of others. Today, I'm dedicated to continuing my journey in software development, always eager to learn, create, and contribute
            to the tech world.
          </p>
        </section>

        {/* Education */}
        <section className="w-full mb-12 pb-8">
          <div className="max-w-6xl h-[450px] bg-gray-800 rounded-lg shadow-lg flex flex-col border border-white overflow-hidden font-mono mx-auto">
            <div className="flex-1 p-4 overflow-y-auto text-white">
              <h2 className="text-3xl font-semibold text-center text-[#00ffcc] flex items-center justify-center gap-2">
                <GraduationCap size={28} /> Education
              </h2>
              <p className="text-lg mt-2 text-center font-medium text-gray-300">
                Advanced Ontario Diploma in Software Development - Mohawk College
              </p>
              <p className="text-gray-400 text-center">Expected Graduation: 2026 - 05/15</p>

              <div className="mt-8 flex gap-8 justify-center">
                {/* GPA Window */}
                <div className="w-full sm:w-1/2 bg-gray-800 rounded-lg shadow-lg flex flex-col border border-white overflow-hidden">
                  {/* Window Header */}
                  <div className="h-8 bg-blue-600 flex items-center justify-between px-4 text-sm text-white">
                    <span>GPA</span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  {/* Window Content */}
                  <div className="p-6 bg-[#1a1a1a]">
                    <h3 className="text-xl font-semibold text-[#00ffcc] mb-4">GPA</h3>
                    <p className="text-lg text-gray-300">3.8/4.0</p>
                  </div>
                </div>

                {/* Achievements Window */}
                <div className="w-full sm:w-1/2 bg-gray-800 rounded-lg shadow-lg flex flex-col border border-white overflow-hidden">
                  {/* Window Header */}
                  <div className="h-8 bg-blue-600 flex items-center justify-between px-4 text-sm text-white">
                    <span>Achievements</span>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  {/* Window Content */}
                  <div className="p-6 bg-[#1a1a1a]">
                    <h3 className="text-xl font-semibold text-[#00ffcc] mb-4">Achievements</h3>
                    <ul className="list-disc list-inside text-lg text-gray-300">
                      <li>Dean's List - 2024</li>
                      <li>Top 10% of the class in Software Development</li>
                      <li>Completed personal projects, including custom game mods and web applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-8 bg-[#0096FF] flex items-center justify-between px-4 text-sm text-white">
            <div className="flex items-center bg-white text-black px-3 py-1 rounded-lg w-64">
              <Search size={16} className="text-gray-600" />
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-transparent outline-none w-full"
              />
            </div>
              <div className="flex gap-6 ml-6 text-white text-sm">
                <Computer />
                <Cpu />
                <NotebookPen />
                <MessageCircleMore /> 
              </div>
             
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="w-full mb-12 pb-8">
          <div className="w-3/5 h-[600px] bg-gray-800 rounded-lg shadow-lg flex flex-col border border-white overflow-hidden font-mono mx-auto">
            <div className="flex-1 p-4 overflow-y-auto text-white">
              <h2 className="text-3xl font-semibold">Technical Skills</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 border rounded-lg shadow-lg bg-gray-800">
                  <h3 className="text-xl font-semibold">Programming Languages</h3>
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
                  <h3 className="text-xl font-semibold">Web Development & Frameworks</h3>
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
                  <h3 className="text-xl font-semibold">Database, Scripting & Game Development</h3>
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
                  <h3 className="text-xl font-semibold">Tools & Software</h3>
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
            </div>
            <div className="h-8 bg-blue-600 flex items-center justify-between px-4 text-sm text-white">
              <span>Technical Skills</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume */}
        <section className="w-full mb-12">
          <div className="w-3/5 h-[600px] bg-gray-800 rounded-lg shadow-lg flex flex-col border border-white overflow-hidden font-mono mx-auto">
            <div className="flex-1 p-4 overflow-y-auto text-white">
              <h2 className="text-3xl font-semibold text-[#00ffcc] flex items-center justify-center gap-2">
                <FileText size={28} /> Resume
              </h2>
              {/* Add your resume content here */}
            </div>
            <div className="h-8 bg-blue-600 flex items-center justify-between px-4 text-sm text-white">
              <span>Resume</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;