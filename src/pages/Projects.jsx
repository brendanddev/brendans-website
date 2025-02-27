
// Projects.jsx
// Brendan Dileo

import Devtimeline from "../components/DevTimeline";

const Projects = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center relative">
            {/* Page Title */}
            <h1 className="text-[#00ff00] text-4xl font-mono mt-5 mb-10">Brendan's Projects</h1>

            <h3>Here are a list of a few personal projects I have worked on: </h3>

            <div className="grid md:grid-cols-3 gap-6 p-6">
                
                <div className="max-w-sm bg-black border border-green-500 rounded-lg shadow-sm">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="Project 1" />
                    </a>

                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">User Management System</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">A user management system with authentication and role-based access.</p>

                        <div className="flex space-x-4 mb-3">
                            <i className="devicon-php-plain colored text-3xl"></i>
                            <i className="devicon-javascript-plain colored text-3xl"></i>
                            <i className="devicon-mysql-plain colored text-3xl"></i>
                        </div>

                        <a href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-black bg-green-400 rounded-lg hover:bg-green-500"
                        >
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm bg-black border border-green-500 rounded-lg shadow-sm">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="Project 2" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">Black Ops 3 Mod Menu</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">
                            A mod menu created in Game Script Code (GSC) for Call of Duty: Black Ops 3.
                            This mod menu was created in GSC, Call of Duty's custom scripting language for 
                            controlling game mechanics, behavior, interactions, and more. With no official
                            documentation from Activison, this project forced me to pickup a language form
                            the ground up, only using tutorials and community input to build my knowledge.
                            This menu allows you to cuztomize your Black Ops 3 zombies expierience.
                        </p>

                        <div className="flex space-x-4 mb-3">
                            <i className="devicon-react-original colored text-3xl"></i>
                            <i className="devicon-tailwindcss-plain colored text-3xl"></i>
                            <i className="devicon-javascript-plain colored text-3xl"></i>
                        </div>

                        <a href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-black bg-green-400 rounded-lg hover:bg-green-500"
                        >
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm bg-black border border-green-500 rounded-lg shadow-sm">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="Project 3" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">Tadpole Mania</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">A bot that tracks XP and levels based on user interactions.</p>

                        <div className="flex space-x-4 mb-3">
                            <i className="devicon-python-plain colored text-3xl"></i>
                            <i className="devicon-discordjs-plain colored text-3xl"></i>
                            <i className="devicon-mongodb-plain colored text-3xl"></i>
                        </div>

                        <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-black bg-green-400 rounded-lg hover:bg-green-500"
                        >
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
