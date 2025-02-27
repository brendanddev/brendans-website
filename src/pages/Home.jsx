// Home.jsx
// Brendan Dileo

import HelpTooltip from "../components/HelpTooltip";
import ThemeToggler from "../components/ThemeToggler";


// Home functional component
const Home = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center relative">
            
            {/* Page Title */}
            <h1 className="text-[#00ff00] text-4xl font-mono mt-5 ">Brendans Website</h1>

            <h3 className="text-white mb-10">Aspiring Full Stack Developer</h3>
            
            {/* Terminal Container */}
            <div className="w-3/5 h-[500px] bg-black rounded-lg shadow-lg flex flex-col border border-gray-700 overflow-hidden font-mono">
                
                {/* Terminal Header Container */}
                <div className="h-8 bg-gray-800 flex items-center justify-center relative text-white text-sm font-bold">
                    {/* Header Buttons */}
                    <div className="absolute left-4 flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    {/* Header text */}
                    <span className="text-center w-full">brendans@website-terminal: ~</span>
                </div>

                {/* Terminal Body */}
                <div className="flex-1 p-3 text-white overflow-y-auto">
                    {/* First line of text displayed in terminal */}
                    <div className="flex">
                        <span className="mr-2">
                            <span className="text-[#00ff00]">brendan@portfolio</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white">$</span>
                        </span>
                        <div className="text-white">Welcome to Brendan's Terminal!</div>
                    </div>
                    {/* Second line of text displayed in terminal */}
                    <div className="flex">
                        <span className="mr-2">
                            <span className="text-[#00ff00]">brendan@portfolio</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white">$</span>
                        </span>
                        <div className="text-white">Type a command to start. Ex: 'help' or 'home'</div>
                    </div>
                </div>

                {/* Terminal Input container */}
                <form className="flex p-3 border-t border-gray-700">
                        <span className="mr-2">
                            <span className="text-[#00ff00]">brendan@portfolio</span> {/* Need to find out how to include '>>>' */}
                            <span className="text-white">:</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white">$</span>
                        </span>
                        <input
                            type="text"
                            className="flex-1 bg-transparent border-none text-white text-lg focus:outline-none"
                        />
                </form>
            </div>
            <HelpTooltip />
            <ThemeToggler />
        </div>
    );
};

export default Home;
