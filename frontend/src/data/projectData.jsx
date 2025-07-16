
/**
 * @file projectData.jsx
 * @author Brendan Dileo
 * 
 * Exports an array of data containing information about some of my projects
 */


//  {
//         title: "",
//         titleColor: "",
//         desc: "",
//         longDesc: "",
//         status: "",
//         completionDate: "",
//         icons: [],
//         features: [],
//         link: "",
//         techBreakdown: []
//     },
export const projectData = [
    {
        title: "Collectible Finder 2.0",
        titleColor: "#f8bf7dfa",
        desc: "React Native app to find collectible shops and manage your virtual collection.",
        longDesc: "Collectible-Finder began as a passion project built using React Native and Expo SDK. It helps users locate nearby collectible shops, manage their own virtual collection of items, and includes features like account management, image capture, and location-based filtering.",
        status: "Complete",
        completionDate: "May 2025",
        icons: [
            { className: "devicon-typescript-plain", color: "#3178C6" },
            { className: "devicon-prisma-plain", color: "#1f5ecaff" },
            { className: "devicon-nodejs-plain-wordmark", color: "#43853D" }
        ],
        features: [
            "Locate collectible shops and filter by preference",
            "Mark shops as favorites or visited",
            "Manage a virtual collection with image capture and upload",
            "Create an account, sign in/out",
            "Upload custom profile pictures"
        ],
        link: "https://github.com/brendanddev/Collectible-Finder",
        techBreakdown: [
            { name: "TypeScript", value: 40, color: "#3178C6" },
            { name: "Node.js", value: 30, color: "#339933" },
            { name: "Prisma", value: 20, color: "#2D3748" },
            { name: "React Native", value: 10, color: "#61DAFB" }
        ]
    },
    {
        title: "Multimodal Bot",
        titleColor: "#f87deefa",
        desc: "An advanced multimodal chatbot with NLP, image processing, and XP system backend.",
        longDesc: "Originally a simple rule-based bot, Multimodal Bot evolved into a highly capable NLP-driven chatbot with multimodal support. It leverages custom prompts, OpenAI integration, web scraping, and even a gamified XP system backed by Node.js.",
        status: "Complete",
        completionDate: "May 2025",
        icons: [
            { className: "devicon-python-plain", color: "#3776AB" },
            { className: "devicon-nodejs-plain-wordmark", color: "#339933" },
            { className: "devicon-openai-plain", color: "#F7DF1E" }
        ],
        features: [
            "Pattern matching (regex, fuzzy, heuristic)",
            "Named Entity Recognition",
            "Sentiment Analysis and Speech Act Classification",
            "TF-IDF similarity and fallback dialog management",
            "OpenAI integration for responses and images",
            "XP system server via Node.js",
            "Web scraping and data visualization"
        ],
        link: "https://github.com/brendanddev/Multimodal-Bot",
        techBreakdown: [
            { name: "Python", value: 60, color: "#3776AB" },
            { name: "Node.js", value: 30, color: "#339933" },
            { name: "OpenAI API", value: 10, color: "#F7DF1E" },
        ]
    },

    {
        title: "Kollectbin",
        titleColor: "#5ecee2fa",
        desc: "Backend API for managing personal comic book collections with CLI support.",
        longDesc: "KollectBin is a backend system built for managing personal comic collections with future plans for multi-category support. It features user authentication, API docs, CLI tools, and testing setup. Built using Node.js and Express, with MongoDB for persistence.",
        status: "In Progress",
        completionDate: "July 2025",
        icons: [
            { className: "devicon-express-original", color: "#000000" },
            { className: "devicon-mongodb-plain-wordmark", color: "#47A248" },
            { className: "devicon-java-plain-wordmark", color: "#007396" }
        ],
        features: [
            "Manage personal comic book collection",
            "Track collectible shop data",
            "User registration and authentication",
            "SwaggerJS API documentation",
            "CLI for collection management (Java-based)",
            "Custom logging with timestamps",
            "Test suite with Jest and Supertest"
        ],
        link: "https://github.com/brendanddev/kollectbin",
        techBreakdown: [
            { name: "Node.js", value: 40, color: "#339933" },
            { name: "Express", value: 30, color: "#000000" },
            { name: "MongoDB", value: 20, color: "#47A248" },
            { name: "Java", value: 10, color: "#007396" }
        ]
    },
    {
        title: "GameLog",
        titleColor: "#c90054ff",
        desc: "Mobile-first app to manage your personal video game collection.",
        longDesc: "GameLog is a full-stack application that allows users to manage video game collections, track progress, and view stats like hours played and completion status. Built with React Native and a Node.js + SQLite backend, it provides real-time updates and a modern mobile UI.",
        status: "Complete",
        completionDate: "",
        icons: [
            { className: "devicon-express-original", color: "#a10808ff" },
            { className: "devicon-sqlite-plain", color: "#5eabcfff" },
            { className: "devicon-react-plain", color: "#61DAFB" },
        ],
        features: [
            "Track game title, platform, genre, hours played, and more",
            "Mobile-first design with real-time sync",
            "Local SQLite DB for persistence",
            "RESTful API with full CRUD support",
            "Modern UI with intuitive controls"
        ],
        link: "https://github.com/brendanddev/GameLog",
        techBreakdown: [
            { name: "React Native", value: 35, color: "#61DAFB" },
            { name: "Node.js", value: 30, color: "#43853D" },
            { name: "SQLite", value: 20, color: "#81cef1ff" },
            { name: "Express", value: 15, color: "#000000" }
        ]
    },
    {
        title: "To Do List App",
        titleColor: "#f7df1e",
        desc: "A full-stack To Do List app with Redis persistence.",
        longDesc: "Built as an assignment, this full-stack app allows users to manage a task list with save, load, and clear functionalities. It uses a React Native frontend and a Node.js + Express backend with Redis for persistent storage.",
        status: "Complete",
        completionDate: "2025-05-10",
        icons: [
            { className: "devicon-react-plain", color: "#61DAFB" },
            { className: "devicon-express-original", color: "#000000" },
            { className: "devicon-redis-plain", color: "#DC382D" }
        ],
        features: [
            "Add, save, load, and clear tasks",
            "React Native client",
            "Backend with RESTful routes",
            "Redis database for persistent task storage"
        ],
        link: "https://github.com/brendanddev/To-Do-List-App",
        techBreakdown: [
            { name: "React Native", value: 40, color: "#61DAFB" },
            { name: "Node.js", value: 30, color: "#43853D" },
            { name: "Express", value: 20, color: "#000000" },
            { name: "Redis", value: 10, color: "#DC382D" }
        ]
    },
    








    {
        title: "User Management System",
        titleColor: "#f7df1e",
        desc: "A mock user management system featuring authentication and role-based access control. Built with PHP, JavaScript, and MySQL.",
        longDesc: "This project simulates a full-stack user management system, including user registration, login, and role-based access control. It demonstrates secure authentication flows, password hashing, and CRUD operations for user data. Built with PHP for the backend, MySQL for data storage, and JavaScript for the frontend.",
        status: "Complete",
        completionDate: "2024-12-15",
        icons: [
            { className: "devicon-php-plain", color: "#777BB4" },
            { className: "devicon-javascript-plain", color: "#F7DF1E" }
        ],
        features: [
            "User registration and login",
            "Role-based access control",
            "Password hashing for security",
            "CRUD operations for user data"
        ],
        link: "https://github.com/brendanddev/Full-Stack-Mock-User-Management-System",
        techBreakdown: [
            { name: "PHP", value: 45, color: "#777BB4" },
            { name: "JavaScript", value: 25, color: "#F7DF1E" },
            { name: "HTML/CSS", value: 15, color: "#E34F26" },
            { name: "MySQL", value: 15, color: "#4479A1" }
        ]
    },
    {
        title: "Black Ops 3 Mod Menu",
        titleColor: "#00bfff",
        desc: "A mod menu for Call of Duty: Black Ops 3, built in GSC (Game Script Code). Allows various gameplay customizations.",
        longDesc: "A custom mod menu for Black Ops 3, written in GSC, enabling players to access a variety of in-game modifications such as weapon changes, player abilities, and visual tweaks. Designed for private lobbies and educational purposes.",
        status: "Prototype",
        completionDate: "2024-10-20",
        icons: [
            { className: "devicon-cplusplus-plain", color: "#00ff00" }
        ],
        features: [
            "Custom in-game mod menu",
            "Gameplay customization options",
            "Written in GSC for Black Ops 3",
            "Designed for private lobbies"
        ],
        link: "https://github.com/brendanddev/Black-Ops-3-GSC-Mod-Menu",
        techBreakdown: [
            { name: "GSC", value: 90, color: "#00ff00" },
            { name: "C", value: 10, color: "#00599C" }
        ]
    },
    {
        title: "Tadpole Mania",
        titleColor: "#178600",
        desc: "A 2D side-scrolling game built in Unity using C#. Features sprite animations, collision detection, and scrolling backgrounds.",
        longDesc: "Tadpole Mania is a Unity-based 2D platformer where players control a tadpole navigating through aquatic environments. The game features hand-drawn sprites, smooth animations, collision detection, and parallax scrolling backgrounds. Developed in C# with Unity and Godot assets.",
        status: "In Progress",
        completionDate: "2025-01-15",
        icons: [
            { className: "devicon-csharp-plain", color: "#178600" },
            { className: "devicon-unity-plain", color: "#00ff00" },
            { className: "devicon-godot-plain", color: "#478CBF" }
        ],
        features: [
            "2D side-scrolling platformer",
            "Hand-drawn sprite animations",
            "Collision detection",
            "Parallax scrolling backgrounds"
        ],
        link: "https://github.com/brendanddev/Tadpole-Mania-Unity-Game",
        techBreakdown: [
            { name: "C#", value: 90, color: "#178600" },
            { name: "Godot", value: 10, color: "#478CBF" }
        ]
    },
    {
        title: "Black Ops 1 Camo Pack",
        titleColor: "#31A8FF",
        desc: "A custom camo pack for Call of Duty: Black Ops 1, using Photoshop/GIMP and game asset conversion tools.",
        longDesc: "A collection of custom camouflage textures for Black Ops 1 weapons, created using Photoshop and GIMP. The project involved extracting, editing, and repackaging game assets to introduce new visual styles into the game.",
        status: "Complete",
        completionDate: "2024-08-10",
        icons: [
            { className: "devicon-photoshop-plain", color: "#31A8FF" },
            { className: "devicon-gimp-plain", color: "#5C5543" }
        ],
        features: [
            "Custom camouflage textures",
            "Photoshop and GIMP asset creation",
            "Game asset extraction and repackaging",
            "Visual enhancements for Black Ops 1"
        ],
        link: "https://github.com/brendanddev/Black-Ops-1-Camo-Pack",
        techBreakdown: [
            { name: "Photoshop", value: 60, color: "#31A8FF" },
            { name: "GIMP", value: 25, color: "#5C5543" },
            { name: "Asset Tools", value: 15, color: "#FF6B35" }
        ]
    },
    {
        title: "FAQ Discord Chat Bot",
        titleColor: "#3776AB",
        desc: "An intelligent FAQ Discord bot that responds to user queries using fuzzy matching and heuristic techniques.",
        longDesc: "A Discord bot designed to answer frequently asked questions in real time. Utilizes Python and fuzzy string matching to interpret user queries and provide relevant responses. Features include command handling, heuristic matching, and easy extensibility for new FAQs.",
        status: "Complete",
        completionDate: "2024-11-05",
        icons: [
            { className: "devicon-python-plain", color: "#3776AB" }
        ],
        features: [
            "Real-time FAQ responses",
            "Fuzzy string matching",
            "Heuristic query interpretation",
            "Extensible command handling"
        ],
        link: "https://github.com/brendanddev/FAQ-Bot",
        techBreakdown: [
            { name: "Python", value: 80, color: "#3776AB" },
            { name: "Discord API", value: 15, color: "#5865F2" },
            { name: "Fuzzy Logic", value: 5, color: "#FFD700" }
        ]
    },
    {
        title: "Minecraft Sword Mod",
        titleColor: "#ED8B00",
        desc: "A custom Minecraft mod in Java using the Forge Modding API. Adds a unique sword with abilities, new weapon mechanics, and item registration.",
        longDesc: "A Minecraft Forge mod that introduces a new sword with special abilities, custom item registration, and unique weapon mechanics. Developed in Java, this mod demonstrates advanced use of the Forge API and JSON asset configuration.",
        status: "In Progress",
        completionDate: "2025-02-01",
        icons: [
            { className: "devicon-java-plain", color: "#ED8B00" },
            { className: "devicon-json-plain", color: "#000000" }
        ],
        features: [
            "Custom sword with special abilities",
            "Advanced Forge API usage",
            "Unique weapon mechanics",
            "JSON asset configuration"
        ],
        link: "_blank",
        techBreakdown: [
            { name: "Java", value: 70, color: "#ED8B00" },
            { name: "Forge API", value: 20, color: "#E04E14" },
            { name: "JSON", value: 10, color: "#000000" }
        ]
    }
];

export default projectData;

