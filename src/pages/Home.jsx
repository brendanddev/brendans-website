

// Home.jsx
// Brendan Dileo

import { useState } from "react";
import { ReactTyped } from 'react-typed';
import HelpTooltip from "../components/HelpTooltip";
import ThemeToggler from "../components/ThemeToggler";

// Home functional component
const Home = () => {
    
    const defaultOutput = [                                     // Output shown by default by the terminal, keys for identification
        <div key="1" className="flex">
            <span className="mr-2">
                <span className="text-[#00ff00]">brendan@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
            </span>
            <span className="text-white">Welcome to Brendan's Terminal!</span>
        </div>,
        <div key="2" className="flex">
            <span className="mr-2">
                <span className="text-[#00ff00]">brendan@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
            </span>
            <span className="text-white">Type a command to start. Ex: 'help' or 'home'</span>
        </div>
    ];
    
    const [output, setOutput] = useState(defaultOutput);        // Output State
    const [command, setCommand] = useState("");                 // Command State

    const handleCommandSubmission = (event) => {                // Function to handle the event of a command
        event.preventDefault();                                 // being submitted to the terminal

        const newCommandOutput = (                              // Terminal response including the command entered
            <div className="flex">                                               
                <span className="mr-2">
                    <span className="text-[#00ff00]">brendan@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                </span>
                <span className="text-white">{command}</span>
            </div>
        );

        let response = "";                                      // Terminal response based on input
        switch(command.toLowerCase()) {
            case "help":
                response = (                                    
                    <div className="flex">
                        <span className="text-white">Help Case</span>
                    </div>
                );
                break;
            case "home":
                response = (
                    <div className="flex">
                        <span className="text-white">Home</span>
                    </div>
                );
                break;
            case "about":                                       // to implement.. 
                break;
            case "projects":
                break;
            case "contact":
                break;
            case "greet":
                break;
            case "clear":
                break;
            case "easterEgg":
                break;
            default:
                response = (
                    <div className="flex">
                        <span className="text-white">Sorry, I don't recognize that command. Try 'help'.</span>
                    </div>
                );
        }

        setOutput([...output, newCommandOutput, response]);
        setCommand("");
    }

    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center">
            <h1 className="text-5xl font-bold text-[#00ff00] mt-5 mb-6">Brendan's Website</h1>

            <div className="w-3/5 text-lg text-[#00ff00] text-center font-mono mb-6">
                {/* ReactTyped to simulate typing */}
                <ReactTyped
                    strings={[
                        "Welcome to my website! Checkout the terminal by entering a command!",
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={1000}
                    loop
                />
            </div>
            
            {/* Terminal Container */}
            <div className="w-3/5 h-[600px] bg-black rounded-lg shadow-lg flex flex-col border border-gray-700 overflow-hidden font-mono">
                
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
                    {output}
                </div>

                {/* Terminal Input container */}
                <form className="flex p-3 border-t border-gray-700" onSubmit={handleCommandSubmission}> 
                        <span className="mr-2">
                            <span className="text-[#00ff00]">brendan@portfolio</span>
                            <span className="text-white">:</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-white">$</span>
                        </span>
                        <input
                            className="flex-1 bg-transparent border-none text-white text-lg focus:outline-none"
                            type="text"
                            value={command}
                            onChange={(event) => setCommand(event.target.value)}    // Event Handler for changing the 'current' command
                        />
                </form>
            </div>
            <HelpTooltip />
            <ThemeToggler />
        </div>
    );
};

export default Home;