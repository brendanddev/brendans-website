
/**
 * @file projectData.jsx
 * @author Brendan Dileo
 * 
 * Exports an array of data containing information about some of my projects
 */

import { Database, Boxes } from "lucide-react";
import { FaPaintBrush, FaRobot } from "react-icons/fa";
import { PiTerminalWindowDuotone,  PiFilePyThin } from "react-icons/pi";
import { MdOutlineGamepad } from "react-icons/md";

export const projectData = [
    {
        id: 1,
        title: "User Management System",
        desc: "A comprehensive mock user management system featuring authentication, role-based access control, and secure user data handling. Built with modern web technologies for scalable enterprise applications.",
        longDesc: "This project demonstrates full-stack development capabilities with a focus on security and user experience. Features include user registration, login/logout functionality, role-based permissions, admin dashboard, and secure data storage. The system showcases best practices in web development including input validation, SQL injection prevention, and responsive design.",
        icons: ["devicon-php-plain", "devicon-javascript-plain"],
        extraIcon: <Database size={28} />,
        link: "https://github.com/brendanddev/Full-Stack-Mock-User-Management-System",
        category: "web",
        difficulty: "intermediate",
        completionDate: "2024",
        technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS", "Bootstrap"],
        features: ["User Authentication", "Role-based Access Control", "Admin Dashboard", "Secure Data Storage", "Responsive Design"],
        status: "completed",
        demoLink: null
    },
    {
        id: 2,
        title: "Black Ops 3 Mod Menu",
        desc: "An advanced mod menu for Call of Duty: Black Ops 3, built in GSC (Game Script Code). Enables extensive gameplay customizations and enhanced player experiences.",
        longDesc: "This project showcases reverse engineering and game modification skills. The mod menu includes features like weapon modifications, player enhancements, visual effects, and custom game modes. Built using GSC scripting language and integrated with the game's engine for seamless functionality.",
        icons: ["devicon-cplusplus-plain"],
        extraIcon: [
            <PiTerminalWindowDuotone size={30} />,
            <MdOutlineGamepad size={28} />
        ],
        link: "https://github.com/brendanddev/Black-Ops-3-GSC-Mod-Menu",
        category: "game",
        difficulty: "advanced",
        completionDate: "2023",
        technologies: ["GSC", "Game Modding", "Reverse Engineering"],
        features: ["Weapon Modifications", "Player Enhancements", "Custom Game Modes", "Visual Effects", "Multiplayer Support"],
        status: "completed",
        demoLink: null
    },
    {
        id: 3,
        title: "Tadpole Mania",
        desc: "A charming 2D side-scrolling adventure game built in Unity using C#. Features smooth sprite animations, precise collision detection, and dynamic scrolling backgrounds.",
        longDesc: "Tadpole Mania is a complete game development project that demonstrates proficiency in Unity game engine and C# programming. The game includes character movement, enemy AI, power-ups, scoring system, and multiple levels with increasing difficulty. Features polished graphics and smooth gameplay mechanics.",
        icons: ["devicon-csharp-plain", "devicon-unity-plain", "devicon-godot-plain"],
        link: "https://github.com/brendanddev/Tadpole-Mania-Unity-Game",
        category: "game",
        difficulty: "intermediate",
        completionDate: "2023",
        technologies: ["Unity", "C#", "Game Development", "Sprite Animation", "Physics Engine"],
        features: ["2D Side-scrolling", "Character Animation", "Enemy AI", "Power-ups", "Multiple Levels", "Scoring System"],
        status: "completed",
        demoLink: null
    },
    {
        id: 4,
        title: "Black Ops 1 Camo Pack",
        desc: "A comprehensive custom camo pack for Call of Duty: Black Ops 1, created using Photoshop/GIMP and game asset conversion tools for enhanced visual appeal.",
        longDesc: "This project demonstrates digital art and game asset creation skills. The camo pack includes multiple custom camouflage patterns, weapon skins, and visual enhancements. Created using professional design software and optimized for game performance while maintaining visual quality.",
        icons: ["devicon-photoshop-plain", "devicon-gimp-plain"],
        extraIcon: <FaPaintBrush size={28}/>,
        link: "https://github.com/brendanddev/Black-Ops-1-Camo-Pack",
        category: "design",
        difficulty: "intermediate",
        completionDate: "2022",
        technologies: ["Photoshop", "GIMP", "Digital Art", "Game Asset Creation", "Texture Design"],
        features: ["Custom Camouflage Patterns", "Weapon Skins", "Visual Enhancements", "Performance Optimized", "Multiple Variants"],
        status: "completed",
        demoLink: null
    },
    {
        id: 5,
        title: "FAQ Discord Chat Bot",
        desc: "An intelligent FAQ Discord bot that responds to user queries using advanced fuzzy matching and heuristic techniques for natural conversation flow.",
        longDesc: "This AI-powered Discord bot demonstrates natural language processing and chatbot development skills. The bot uses fuzzy string matching, keyword recognition, and contextual understanding to provide accurate responses to user questions. Features include learning capabilities, customizable responses, and integration with Discord's API.",
        icons: ["devicon-python-plain"],
        extraIcon: [
            <PiFilePyThin size={28} />,
            <FaRobot size={28} />
        ],
        link: "https://github.com/brendanddev/FAQ-Bot",
        category: "ai",
        difficulty: "intermediate",
        completionDate: "2024",
        technologies: ["Python", "Discord API", "Natural Language Processing", "Fuzzy Matching", "Chatbot Development"],
        features: ["Intelligent Q&A", "Fuzzy String Matching", "Contextual Responses", "Discord Integration", "Learning Capabilities"],
        status: "completed",
        demoLink: null
    },
    {
        id: 6,
        title: "Minecraft Sword Mod",
        desc: "A sophisticated Minecraft mod in Java using the Forge Modding API. Adds unique swords with special abilities, new weapon mechanics, and comprehensive item registration.",
        longDesc: "This Minecraft modding project showcases Java programming and game modification expertise. The mod introduces custom swords with unique abilities, special effects, and new gameplay mechanics. Built using the Forge modding framework with proper item registration, crafting recipes, and integration with Minecraft's systems.",
        icons: ["devicon-java-plain", "devicon-json-plain"],
        extraIcon: <Boxes size={28} />,
        link: "https://github.com/brendanddev/Minecraft-Sword-Mod",
        category: "game",
        difficulty: "advanced",
        completionDate: "2023",
        technologies: ["Java", "Forge Modding API", "Minecraft Development", "Game Mechanics", "Item Creation"],
        features: ["Custom Swords", "Special Abilities", "New Weapon Mechanics", "Crafting Recipes", "Minecraft Integration"],
        status: "completed",
        demoLink: null
    }
];

// Enhanced category data with better organization
export const projectCategories = {
    all: {
        name: "All Projects",
        icon: "FaFolder",
        color: "from-slate-500 to-slate-600",
        count: projectData.length
    },
    web: {
        name: "Web Development",
        icon: "FaCode",
        color: "from-blue-500 to-cyan-500",
        count: projectData.filter(p => p.category === "web").length
    },
    game: {
        name: "Game Development",
        icon: "FaGamepad",
        color: "from-purple-500 to-pink-500",
        count: projectData.filter(p => p.category === "game").length
    },
    ai: {
        name: "AI & Bots",
        icon: "FaRobot",
        color: "from-green-500 to-emerald-500",
        count: projectData.filter(p => p.category === "ai").length
    },
    design: {
        name: "Design & Art",
        icon: "FaPalette",
        color: "from-orange-500 to-red-500",
        count: projectData.filter(p => p.category === "design").length
    },
    data: {
        name: "Data & Systems",
        icon: "FaDatabase",
        color: "from-indigo-500 to-purple-500",
        count: projectData.filter(p => p.category === "data").length
    }
};

// Difficulty levels for filtering
export const difficultyLevels = {
    beginner: { name: "Beginner", color: "from-green-400 to-green-600" },
    intermediate: { name: "Intermediate", color: "from-yellow-400 to-yellow-600" },
    advanced: { name: "Advanced", color: "from-red-400 to-red-600" }
};

// Project status options
export const projectStatus = {
    completed: { name: "Completed", color: "from-green-400 to-green-600" },
    inProgress: { name: "In Progress", color: "from-yellow-400 to-yellow-600" },
    planned: { name: "Planned", color: "from-blue-400 to-blue-600" }
};

export default projectData;

