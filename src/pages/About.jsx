// About.jsx
// Brendan Dileo

import { GraduationCap, FileText } from "lucide-react";

const About = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="relative z-10 w-full max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-[#00ff00] mt-5 mb-6">About Brendan</h1>

        {/* Summary */}
        <section className="w-full mb-12">
          <p className="text-lg font-mono mt-2">
            Hi! I'm Brendan!
            Iam a Software Development student with a passion for creating.
            Iam passionate about developing software, programming, building, fixing, and taking apart computers, and anything technology.
            
            I got my first computer in the 5th grade, and fell in love with technology ever since.
            I built my first computer in the 7th grade, and was first introduced to programming in the 9th grade.

            I really started to take it seriously when I built my first Gaming PC in the 9th grade,
            researching what the best components were to buy, what would give me the best performance, etc.

            Around grade 11-12, I really started to pickup programming.
            It started when I wanted to mod Call of Duty Black Ops 1 Zombies, to bring gun models from
            older and newer games into this game, so I could use them in zombies in Black Ops 1. 
            As I researched how to create my own mod, and do this. I was lead to GitHub, which is where
            the mod from the video I watched was posted.
          </p>
        </section>

        {/* Education */}
        <section className="w-full mb-12 border-b border-[#00ffcc] pb-8">
          <h2 className="text-3xl font-semibold flex items-center justify-center gap-2">
            <GraduationCap size={28} /> Education
          </h2>
          <p className="text-lg mt-2">
            Advanced Ontario Diploma in Software Development - Mohawk College
          </p>
          <p className="text-gray-400">2026 - 05/15</p>
        </section>

        {/* Skills */}
        <section className="w-full mb-12 pb-8">
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

        {/* Resume ... Need to add download link?*/}
        <section className="w-full mb-12">
          <h2 className="text-3xl font-semibold text-[#00ffcc] flex items-center justify-center gap-2">
            <FileText size={28} /> Resume
          </h2>
        </section>
      </div>
    </div>
  );
};

export default About;
