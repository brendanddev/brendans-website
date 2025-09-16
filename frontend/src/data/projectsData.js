
/**
 * @file projectsData.js
 * @author Brendan Dileo, June 2025
 * 
 * Data related to the Projects page.
 * 
 */

export const projectsData = [
    {
        id: 1,
        title: "Simulated Heap",
        category: "backend",
        description: "A project that simulates manual memory management, similar to how low-level languages like C handle heap memory. Demonstrates how a heap could be built and managed by hand.",
        techStack: ["Java"],
        status: "completed",
        github: "https://github.com/brendanddev/simulated-heap",
        live: null,
        image: "/api/placeholder/400/300"
    },
    {
        id: 2,
        title: "Collectible Finder",
        category: "web",
        description: "A full-stack mobile and web application that lets collectors find local shops, store images into their virtual collection, create an account, and much more.",
        techStack: ["React", "React Native", "Node.js", "TypeScript", "Node-TS"],
        status: "completed",
        github: "https://github.com/brendanddev/collectible-finder",
        live: null,
        image: "/api/placeholder/400/300"
    },
    {
        id: 3,
        title: "Black-Ops-3 GSC Mod Menu",
        category: "tools",
        description: "First mod menu using GSC for Black Ops 3. Allows gameplay manipulation like god mode, noclip, zombie speed changes, and more.",
        techStack: ["GSC", "Modding Tools", "Game Script Code"],
        status: "completed",
        github: "https://github.com/brendanddev/Black-Ops-3-GSC-Mod-Menu",
        live: null,
        image: "/api/placeholder/400/300"
    },
    {
        id: 4,
        title: "VSCode Readme Previewer",
        category: "tools",
        description: "A Visual Studio Code extension to preview README.md files inline directly within VS Code.",
        techStack: ["TypeScript", "JavaScript", "VSCode Extension"],
        status: "completed",
        github: "https://github.com/brendanddev/vscode-readme-previewer",
        live: null,
        image: "/api/placeholder/400/300"
    },
    {
        id: 5,
        title: "Fantasy Analyzer",
        category: "ai",
        description: "An unofficial Python wrapper for the Sleeper fantasy football API.",
        techStack: ["Python"],
        status: "completed",
        github: "https://github.com/brendanddev/fantasy-analyzer",
        live: null,
        image: "/api/placeholder/400/300"
    },
    {
        id: 6,
        title: "Multimodal Bot",
        category: "ai",
        description: "A versatile multi-modal all-purpose bot leveraging NLP, pattern matching, and fuzzy logic.",
        techStack: ["Python", "spaCy NLP", "ML", "Fuzzy Matching", "Pattern Matching"],
        status: "completed",
        github: "https://github.com/brendanddev/Multimodal-Bot",
        live: null,
        image: "/api/placeholder/400/300"
    }
];

export const categories = [
    { key: 'all', label: 'All Projects', icon: '📁' },
    { key: 'web', label: 'Web Development', icon: '🌐' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'cli', label: 'CLI Tools', icon: '💻' },
    { key: 'ai', label: 'AI/ML', icon: '🤖' },
    { key: 'tools', label: 'Dev Tools', icon: '🔧' }
];