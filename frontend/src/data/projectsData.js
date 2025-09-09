
/**
 * @file projectsData.js
 * @author Brendan Dileo, June 2025
 * 
 * Data related to the Projects page.
 * 
 * THIS IS ALL PLACEHOLDER DATA FOR THE TIME BEING...
 */

export const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        category: "web",
        description: "A modern, responsive portfolio website built with React and Vite, featuring a unique terminal aesthetic and smooth animations.",
        techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "JavaScript"],
        status: "completed",
        github: "https://github.com/brendan/portfolio",
        live: "https://brendan-dileo.dev",
        image: "/api/placeholder/400/300"
    },
    {
        id: 2,
        title: "Task Management CLI",
        category: "cli",
        description: "A command-line task management tool built with Node.js, featuring file-based storage and interactive prompts.",
        techStack: ["Node.js", "JavaScript", "Inquirer.js", "Chalk", "FS"],
        status: "completed",
        github: "https://github.com/brendan/task-cli",
        live: null,
        image: "/api/placeholder/400/300"
    },
    {
        id: 3,
        title: "E-Commerce API",
        category: "backend",
        description: "RESTful API for an e-commerce platform with user authentication, product management, and order processing.",
        techStack: ["Node.js", "Express", "MongoDB", "JWT", "Stripe API"],
        status: "in-progress",
        github: "https://github.com/brendan/ecommerce-api",
        live: null,
        image: "/api/placeholder/400/300"
    },
    {
        id: 4,
        title: "Weather Dashboard",
        category: "web",
        description: "Real-time weather dashboard with location-based forecasts and interactive charts using external APIs.",
        techStack: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
        status: "completed",
        github: "https://github.com/brendan/weather-dashboard",
        live: "https://weather-dashboard.brendan-dileo.dev",
        image: "/api/placeholder/400/300"
    },
    {
        id: 5,
        title: "Database Migration Tool",
        category: "tools",
        description: "Automated database migration tool with rollback capabilities and schema versioning for PostgreSQL.",
        techStack: ["Python", "PostgreSQL", "SQLAlchemy", "Click", "Alembic"],
        status: "completed",
        github: "https://github.com/brendan/db-migrator",
        live: null,
        image: "/api/placeholder/400/300"
    },
    {
        id: 6,
        title: "AI Chat Assistant",
        category: "ai",
        description: "Intelligent chat assistant with natural language processing capabilities and context awareness.",
        techStack: ["Python", "OpenAI API", "FastAPI", "WebSocket", "Redis"],
        status: "in-progress",
        github: "https://github.com/brendan/ai-chat",
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