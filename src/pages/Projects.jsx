
// Projects.jsx
// Brendan Dileo

const Projects = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center relative">
            {/* Page Title */}
            <h1 className="text-[#00ff00] text-4xl font-mono mt-5 mb-10">Brendan's Projects</h1>

            <div className="max-w-sm bg-black border border-green-500 rounded-lg shadow-sm">
                    <a href="#">
                        <img className="rounded-t-lg" src="unknown.jpg" alt="Project 1" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">User Management System</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">A user management system with authentication and role-based access.</p>

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
    );
};

export default Projects;
