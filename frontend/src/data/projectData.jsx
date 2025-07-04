
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
        title: "User Management System",
        desc: "A mock user management system featuring authentication and role-based access control. Built with PHP, JavaScript, and MySQL.",
        longDesc: "This project simulates a full-stack user management system, including user registration, login, and role-based access control. It demonstrates secure authentication flows, password hashing, and CRUD operations for user data. Built with PHP for the backend, MySQL for data storage, and JavaScript for the frontend.",
        status: "Complete",
        icons: ["devicon-php-plain", "devicon-javascript-plain"],
        features: [
            "User registration and login",
            "Role-based access control",
            "Password hashing for security",
            "CRUD operations for user data"
        ],
        extraIcon: <Database size={28} />,
        link: "https://github.com/brendanddev/Full-Stack-Mock-User-Management-System"
    },
    {
        title: "Black Ops 3 Mod Menu",
        desc: "A mod menu for Call of Duty: Black Ops 3, built in GSC (Game Script Code). Allows various gameplay customizations.",
        longDesc: "A custom mod menu for Black Ops 3, written in GSC, enabling players to access a variety of in-game modifications such as weapon changes, player abilities, and visual tweaks. Designed for private lobbies and educational purposes.",
        status: "Prototype",
        icons: ["devicon-cplusplus-plain"],
        features: [
            "Custom in-game mod menu",
            "Gameplay customization options",
            "Written in GSC for Black Ops 3",
            "Designed for private lobbies"
        ],
        extraIcon: [
            <PiTerminalWindowDuotone size={30} />,
            <MdOutlineGamepad size={28} />
        ],
        
        link: "https://github.com/brendanddev/Black-Ops-3-GSC-Mod-Menu"
    },
    {
        title: "Tadpole Mania",
        desc: "A 2D side-scrolling game built in Unity using C#. Features sprite animations, collision detection, and scrolling backgrounds.",
        longDesc: "Tadpole Mania is a Unity-based 2D platformer where players control a tadpole navigating through aquatic environments. The game features hand-drawn sprites, smooth animations, collision detection, and parallax scrolling backgrounds. Developed in C# with Unity and Godot assets.",
        status: "In Progress",
        icons: ["devicon-csharp-plain", "devicon-unity-plain", "devicon-godot-plain"],
        features: [
            "2D side-scrolling platformer",
            "Hand-drawn sprite animations",
            "Collision detection",
            "Parallax scrolling backgrounds"
        ],
        link: "https://github.com/brendanddev/Tadpole-Mania-Unity-Game"
    },
    {
        title: "Black Ops 1 Camo Pack",
        desc: "A custom camo pack for Call of Duty: Black Ops 1, using Photoshop/GIMP and game asset conversion tools.",
        longDesc: "A collection of custom camouflage textures for Black Ops 1 weapons, created using Photoshop and GIMP. The project involved extracting, editing, and repackaging game assets to introduce new visual styles into the game.",
        status: "Complete",
        icons: ["devicon-photoshop-plain", "devicon-gimp-plain"],
        features: [
            "Custom camouflage textures",
            "Photoshop and GIMP asset creation",
            "Game asset extraction and repackaging",
            "Visual enhancements for Black Ops 1"
        ],
        extraIcon: <FaPaintBrush size={28}/>,
        link: "https://github.com/brendanddev/Black-Ops-1-Camo-Pack"
    },
    {
        title: "FAQ Discord Chat Bot",
        desc: "An intelligent FAQ Discord bot that responds to user queries using fuzzy matching and heuristic techniques.",
        longDesc: "A Discord bot designed to answer frequently asked questions in real time. Utilizes Python and fuzzy string matching to interpret user queries and provide relevant responses. Features include command handling, heuristic matching, and easy extensibility for new FAQs.",
        status: "Complete",
        icons: ["devicon-python-plain"],
        features: [
            "Real-time FAQ responses",
            "Fuzzy string matching",
            "Heuristic query interpretation",
            "Extensible command handling"
        ],
        extraIcon: [
            <PiFilePyThin size={28} />,
            <FaRobot size={28} />
        ],
        link: "https://github.com/brendanddev/FAQ-Bot"
    },
    {
        title: "Minecraft Sword Mod",
        desc: "A custom Minecraft mod in Java using the Forge Modding API. Adds a unique sword with abilities, new weapon mechanics, and item registration.",
        longDesc: "A Minecraft Forge mod that introduces a new sword with special abilities, custom item registration, and unique weapon mechanics. Developed in Java, this mod demonstrates advanced use of the Forge API and JSON asset configuration.",
        status: "In Progress",
        icons: ["devicon-java-plain", "devicon-json-plain"],
        features: [
            "Custom sword with special abilities",
            "Advanced Forge API usage",
            "Unique weapon mechanics",
            "JSON asset configuration"
        ],
        extraIcon: <Boxes size={28} />,
        link: "_blank"
    }
];

export default projectData;

