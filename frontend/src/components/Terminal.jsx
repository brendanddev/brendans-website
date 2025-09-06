
/**
 * @file Terminal.jsx
 * @author Brendan Dileo
 * 
 * This terminal component acts as the main interactive component for my portfolio-website.
 * Inspired by https://github.com/jonmbake/react-terminal-ui, but built my own with custom behaviour and styles.
*/

import { useState } from "react";
import { motion } from "framer-motion";

const Terminal = () => {
    
    // Default output when terminal is loaded
    const defaultOutput = [
        <div key="1" className="flex" >
            <span className="mr-2">
                <span className="text-green-400">brendan@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
            </span>
            <span className="text-white inline-block overflow-x-auto max-w-full">Welcome to Brendan's Terminal!</span>
            
            

        </div>,
        <div key="2" className="flex">
            <span className="mr-2">
                <span className="text-green-400">brendan@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
            </span>
            <span className="text-white">Type a command to start. Ex: 'help' or 'home'</span>
        </div>
    ];

    // Tracks history of commands entered, output, and current command
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(null);
    const [output, setOutput] = useState(defaultOutput);
    const [command, setCommand] = useState("");

    const handleCommandSubmission = (event) => {
        event.preventDefault();
        const newCommandOutput = (
            <div className="flex">
                <span className="mr-2">
                    <span className="text-green-400">brendan@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                </span>
                <span className="text-white">{command}</span>
            </div>
        );

        let response = "";
        switch (command.toLowerCase()) {
            case "help":
                response = (
                    <div className="text-white">
                        <p className="mb-2">Here is a list of supported commands:</p>
                        <ul className="list-inside list-disc pl-2">
                            <li><span className="font-bold text-green-400 w-20 inline-block">help</span> - Ask for help</li>
                            <li><span className="font-bold text-green-400 w-20 inline-block">home</span> - Are you home?</li>
                            <li><span className="font-bold text-green-400 w-20 inline-block">about</span> - About the creator</li>
                            <li><span className="font-bold text-green-400 w-20 inline-block">projects</span> - About the creators projects</li>
                            <li><span className="font-bold text-green-400 w-20 inline-block">contact</span> - Can you contact the creator?</li>
                            <li><span className="font-bold text-green-400 w-20 inline-block">clear</span> - Clear the terminal</li>
                        </ul>
                    </div>
                );
                break;
            case "home":
                response = <div className="flex"><span className="text-white">You are Home!</span></div>;
                break;
            case "about":
                response = <div className="flex">
                                <span className="text-white">
                                    Hey! My name is Brendan and Im an aspiring Full Stack Software Developer passionate about technology and creating!
                                    If youd like to know even more about me, click the '[about]' in the top right corner of the page.
                                </span>
                            </div>;
                break;
            case "projects":
                response = <div className="flex">
                                <span className="text-white">
                                    I have worked on various types of projects, whether it be academically or for my own personal benefit.
                                    I have used a variety of languages, on front end, back end, and database development. 
                                    If you want to know more about projects I have worked on, checkout the projects page!
                                </span>
                            </div>
                break;
            case "contact":
                response = <div className="flex">
                                <span className="text-white">
                                    Email: brendan.dileo@mohawkcollege.ca
                                    See the 'Contact' page to contact me.
                                </span>
                            </div>
                break;
            case "clear":
                setOutput([]);
                setCommand("");
                return;
            case "greet":
                response = <div className="flex"><span className="text-white">Hello, welcome to Brendans Portfolio Website!</span></div>
                break;
            default:
                response = <div className="flex"><span className="text-white">
                                Uhhh... I dont know how to respond to that. Try 'help'.
                                </span>
                            </div>;
        }

        setOutput([...output, newCommandOutput, response]);
        setHistory([command, ...history]);
        setHistoryIndex(null);
        setCommand("");
    };

    // Command history navigation
    const handleKeyDown = (event) => {
        if (event.key === "ArrowUp") {
            if (history.length > 0) {
                const newIndex = historyIndex === null ? 0 : Math.min(historyIndex + 1, history.length - 1);
                setHistoryIndex(newIndex);
                setCommand(history[newIndex]);
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            const newIndex = historyIndex - 1;
            if (newIndex >= 0) {
                setHistoryIndex(newIndex);
                setCommand(history[newIndex]);
            } else {
                setHistoryIndex(null);
                setCommand("");
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }}  
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[95%] md:w-4/5 lg:w-3/5 h-[450px] bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-[0_0_20px_rgba(120,119,198,0.25)] flex flex-col border border-slate-700 overflow-hidden font-mono mx-auto"
        >
            <div className="h-8 bg-slate-800 flex items-center justify-center relative text-white text-sm font-bold">
                <div className="absolute left-4 flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-center w-full">
                    <span className="hidden sm:inline">brendans@website-terminal: ~</span>
                    <span className="inline sm:hidden">b-terminal ~</span>
                </span>

            </div>
            <div className="flex-1 p-3 text-white overflow-y-auto">{output}</div>
            <form className="flex p-3 border-t border-slate-700" onSubmit={handleCommandSubmission}>
                <span className="mr-2">
                    <span className="text-green-400">brendan@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                </span>
                <input
                    className="flex-1 bg-transparent border-none text-white text-lg focus:outline-none"
                    type="text"
                    value={command}
                    onChange={(event) => setCommand(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </form>
        </motion.div>
    );
};

export default Terminal;
