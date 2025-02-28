
// Projects.jsx
// Brendan Dileo

const projects = [
    {
        title: "User Management System",
        desc: "A mock user management system featuring authentication and role-based access control. Built with PHP, JavaScript, and MySQL.",
    },
    {
        title: "Black Ops 3 Mod Menu",
        desc: "A mod menu for Call of Duty: Black Ops 3, built in GSC. Allows various gameplay customizations.",
    },
    {
        title: "Tadpole Mania",
        desc: "A 2D side-scrolling game built in Unity using C#. Features sprite animations, collision detection, and scrolling backgrounds.",
    },
    {
        title: "Black Ops 1 Camo Pack",
        desc: "A custom camo pack for Call of Duty: Black Ops 1, using Photoshop/GIMP and game asset conversion tools.",
    },
    {
        title: "FAQ Discord Chat Bot",
        desc: "An intelligent FAQ Discord bot that responds to user queries using fuzzy matching and heuristic techniques.",
    },
    {
        title: "Minecraft Sword Mod",
        desc: "A custom Minecraft mod in Java using the Forge Modding API. Adds a unique sword with abilities, new weapon mechanics, and item registration.",
    }                 
];

const Projects = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center relative">
            <h1 className="text-6xl font-bold text-[#00ff00] mt-5 mb-6">Brendan's Projects</h1>
            <h3 className="text-white mb-6">Here are a few personal projects I have worked on:</h3>

            <div className="grid md:grid-cols-3 gap-6 p-6">
                {projects.map((project, index) => (
                    <div key={index} className="w-96 min-h-[250px] bg-black border border-green-500 rounded-lg shadow-sm">
                        <div className="p-6">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">{project.title}</h5>
                            <p className="mb-4 text-sm font-normal text-gray-400">{project.desc}</p>
                            <div className="flex space-x-4 mb-3 text-green-400">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
