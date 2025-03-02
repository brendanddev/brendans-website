
/**
 * @file projectData.jsx
 * @author Brendan Dileo
 * 
 * This file exports an array of data containing information about some of the projects
 * I have worked on to be used for the project cards in Projects.jsx.
*/


import { Database, Boxes } from "lucide-react";
import { FaFolder, FaPaintBrush, FaRobot } from "react-icons/fa";
import { PiTerminalWindowDuotone,  PiFilePyThin } from "react-icons/pi";
import { MdOutlineGamepad } from "react-icons/md";

/**
 * 
 */
export const projectData = [
    {
        title: "User Management System",
        desc: "A mock user management system featuring authentication and role-based access control. Built with PHP, JavaScript, and MySQL.",
        icons: ["devicon-php-plain", "devicon-javascript-plain"],
        extraIcon: <Database size={28} />,
        link: "https://github.com/brendanddev/Full-Stack-Mock-User-Management-System"
    },
    {
        title: "Black Ops 3 Mod Menu",
        desc: "A mod menu for Call of Duty: Black Ops 3, built in GSC (Game Script Code). Allows various gameplay customizations.",
        icons: ["devicon-cplusplus-plain"],
        extraIcon: [
            <PiTerminalWindowDuotone size={30} />,
            <MdOutlineGamepad size={28} />
        ],
        
        link: "https://github.com/brendanddev/Black-Ops-3-GSC-Mod-Menu"
    },
    {
        title: "Tadpole Mania",
        desc: "A 2D side-scrolling game built in Unity using C#. Features sprite animations, collision detection, and scrolling backgrounds.",
        icons: ["devicon-csharp-plain", "devicon-unity-plain", "devicon-godot-plain"],
        link: "https://github.com/brendanddev/Tadpole-Mania-Unity-Game"
    },
    {
        title: "Black Ops 1 Camo Pack",
        desc: "A custom camo pack for Call of Duty: Black Ops 1, using Photoshop/GIMP and game asset conversion tools.",
        icons: ["devicon-photoshop-plain", "devicon-gimp-plain"],
        extraIcon: <FaPaintBrush size={28}/>,
        link: "https://github.com/brendanddev/Black-Ops-1-Camo-Pack"
    },
    {
        title: "FAQ Discord Chat Bot",
        desc: "An intelligent FAQ Discord bot that responds to user queries using fuzzy matching and heuristic techniques.",
        icons: ["devicon-python-plain"],
        extraIcon: [
            <PiFilePyThin size={28} />,
            <FaRobot size={28} />
        ],
        link: "https://github.com/brendanddev/FAQ-Bot"
    },
    {
        title: "Minecraft Sword Mod",
        desc: "A custom Minecraft mod in Java using the Forge Modding API. Adds a unique sword with abilities, new weapon mechanics, and item registration.",
        icons: ["devicon-java-plain", "devicon-json-plain"],
        extraIcon: <Boxes size={28} />,
        link: "_blank"
    }
];

// Exports the data to be used in Projects.jsx
export default projectData;

