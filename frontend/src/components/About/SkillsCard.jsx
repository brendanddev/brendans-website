
/**
 * @file SkillsCard.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Component for the skills section on the About page
*/

import { motion } from "framer-motion";
import SkillSection from "./SkillsSection";

const SkillsCard = () => {
  const programmingLanguages = [
    { className: "devicon-java-plain", hoverColor: "#ff9900" },
    { className: "devicon-python-plain", hoverColor: "#306998" },
    { className: "devicon-javascript-plain", hoverColor: "#f7df1e" },
    { className: "devicon-csharp-plain", hoverColor: "#9b4f96" },
    { className: "devicon-dot-net-plain", hoverColor: "#512bd4" },
    { className: "devicon-php-plain", hoverColor: "#777bb3" },
    { className: "devicon-swift-plain", hoverColor: "#fa7343" }
  ];

  const webDevelopment = [
    { className: "devicon-react-original", hoverColor: "#61dafb" },
    { className: "devicon-nodejs-plain-wordmark", hoverColor: "#68a063" },
    { className: "devicon-bootstrap-plain", hoverColor: "#563d7c" },
    { className: "devicon-tailwindcss-original", hoverColor: "#38b2ac" },
    { className: "devicon-html5-plain", hoverColor: "#e34c26" },
    { className: "devicon-css3-plain", hoverColor: "#1572b6" }
  ];

  const databasesAndGameDev = [
    { className: "devicon-microsoftsqlserver-plain", hoverColor: "#cc2927" },
    { className: "devicon-mysql-plain", hoverColor: "#00758f" },
    { className: "devicon-bash-plain", hoverColor: "#4eaa25" },
    { className: "devicon-unity-plain", hoverColor: "#ffffff" },
    { className: "devicon-godot-plain", hoverColor: "#478cbf" }
  ];

  const toolsAndSoftware = [
    { className: "devicon-git-plain", hoverColor: "#f34f29" },
    { className: "devicon-vscode-plain", hoverColor: "#007acc" },
    { className: "devicon-pycharm-plain", hoverColor: "#21d789" },
    { className: "devicon-json-plain", hoverColor: "#f7df1e" },
    { className: "devicon-intellij-plain", hoverColor: "#000000" },
    { className: "devicon-gimp-plain", hoverColor: "#5c5543" },
    { className: "devicon-xcode-plain", hoverColor: "#1575f3" },
    { className: "devicon-linux-plain", hoverColor: "#fcc624" }
  ];

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-4 md:p-8 border rounded-lg shadow-[0_0_20px_rgba(120,119,198,0.25)] bg-slate-900/80 backdrop-blur-sm border-slate-700 mb-10"
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <h2 className="text-4xl sm:text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        
        <SkillSection 
          title="Programming Languages" 
          icons={programmingLanguages} 
        />
        
        <SkillSection 
          title="Web Development & Frameworks" 
          icons={webDevelopment} 
        />
        
        <SkillSection 
          title="Databases, Scripting & Game Dev" 
          icons={databasesAndGameDev} 
        />
        
        <SkillSection 
          title="Tools & Software" 
          icons={toolsAndSoftware} 
          className="col-span-1 sm:col-span-2 lg:col-span-3"
        />
        
      </div>
    </motion.div>
  );
};

export default SkillsCard; 