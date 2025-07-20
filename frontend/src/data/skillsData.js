
/**
 * @file skillsData.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines the arrays of skill icon data to be categorized and used inside the 
 * SkillsCard component on the about page
 */

import { Code, Globe, Database, Wrench } from "lucide-react";

// Programming related skills objects
const programmingLanguages = [
  { className: "devicon-java-plain", hoverColor: "#ff9900" },
  { className: "devicon-python-plain", hoverColor: "#306998" },
  { className: "devicon-javascript-plain", hoverColor: "#f7df1e" },
  { className: "devicon-csharp-plain", hoverColor: "#9b4f96" },
  { className: "devicon-dot-net-plain", hoverColor: "#512bd4" },
  { className: "devicon-php-plain", hoverColor: "#777bb3" },
  { className: "devicon-swift-plain", hoverColor: "#fa7343" }
];

// Web dev skill objects
const webDevelopment = [
  { className: "devicon-react-original", hoverColor: "#61dafb" },
  { className: "devicon-nodejs-plain-wordmark", hoverColor: "#68a063" },
  { className: "devicon-express-original", hoverColor: "#000000" },
  { className: "devicon-bootstrap-plain", hoverColor: "#563d7c" },
  { className: "devicon-tailwindcss-original", hoverColor: "#38b2ac" },
  { className: "devicon-html5-plain", hoverColor: "#e34c26" },
  { className: "devicon-css3-plain", hoverColor: "#1572b6" }
];

// Database related skills
const databases = [
  { className: "devicon-microsoftsqlserver-plain", hoverColor: "#cc2927" },
  { className: "devicon-mongodb-plain", hoverColor: "#47a248" },
  { className: "devicon-mysql-plain", hoverColor: "#00758f" },
  { className: "devicon-sqlite-plain", hoverColor: "#003b57" },
  { className: "devicon-redis-plain", hoverColor: "#d82c20" },
  { className: "devicon-sqlserver-plain", hoverColor: "#cc2927" },
  { className: "devicon-postgresql-plain", hoverColor: "#336791" },
  { className: "devicon-firebase-plain", hoverColor: "#ffca28" }
];

// Scripting and game development related skills
const scripting = [
  { className: "devicon-groovy-plain", hoverColor: "#4298b8" },
  { className: "devicon-bash-plain", hoverColor: "#4eaa25" },
  { className: "devicon-powershell-plain", hoverColor: "#5391fe" },
  { className: "devicon-unity-plain", hoverColor: "#ffffff" },
  { className: "devicon-godot-plain", hoverColor: "#478cbf" }
];

// DevOps and CI CD related tools
const devOpsTools = [
  { className: "devicon-docker-plain", hoverColor: "#2496ed" },
  { className: "devicon-kubernetes-plain", hoverColor: "#326ce5" },
  { className: "devicon-jenkins-plain", hoverColor: "#d24939" },
  { className: "devicon-jira-plain", hoverColor: "#2684ff" },
  { className: "devicon-azure-plain", hoverColor: "#0089d6" }
];

// Miscellaneous tools and software
const miscellaneousTools = [
  { className: "devicon-git-plain", hoverColor: "#f34f29" },
  { className: "devicon-linux-plain", hoverColor: "#fcc624" },
  { className: "devicon-vscode-plain", hoverColor: "#007acc" },
  { className: "devicon-pycharm-plain", hoverColor: "#21d789" },
  { className: "devicon-json-plain", hoverColor: "#f7df1e" },
  { className: "devicon-intellij-plain", hoverColor: "#000000" },
  { className: "devicon-gimp-plain", hoverColor: "#5c5543" },
  { className: "devicon-xcode-plain", hoverColor: "#1575f3" },
];

// Defines the different skill categories
const skillCategories = [
    {
      title: "Programming Languages",
      icons: programmingLanguages,
      icon: Code,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      title: "Web Development & Frameworks",
      icons: webDevelopment,
      icon: Globe,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20"
    },
    {
      title: "Databases",
      icons: databases,
      icon: Database,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    },
    {
      title: "Scripting & Game Dev",
      icons: scripting,
      icon: Database,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    },
    {
      title: "DevOps & CI/CD",
      icons: devOpsTools,
      icon: Wrench,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/20"
    },
    {
      title: "Tools & Software",
      icons: miscellaneousTools,
      icon: Wrench,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20"
    }
];

export { skillCategories };