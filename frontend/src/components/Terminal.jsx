
/**
 * @file Terminal.jsx
 * @author Brendan Dileo
 * 
 * Inspired by https://github.com/jonmbake/react-terminal-ui, but built my own with custom behaviour and styles.
 */

import { useState } from "react";
import { motion } from "framer-motion";

const Terminal = () => {

    // Constants for styling
    const TERMINAL_COLOR = "#00ff00";
    const PROMPT_PREFIX = "brendan@portfolio";
    
    // Helper function to create prompt line
    const createPromptLine = (content, key) => (
        <div key={key} className="flex">
            <span className="mr-2">
                <span className={`text-[${TERMINAL_COLOR}]`}>{PROMPT_PREFIX}</span>
                <span className={`text-[${TERMINAL_COLOR}]`}>:</span>
                <span className={`text-[${TERMINAL_COLOR}]`}>~</span>
                <span className={`text-[${TERMINAL_COLOR}]`}>$</span>
            </span>
            <span className={`text-[${TERMINAL_COLOR}]`}>{content}</span>
        </div>
    );
    
    // Default output when terminal is loaded
    const defaultOutput = [
        <div key="1" className="flex">
            <span className="mr-2">
                <span className={`text-[${TERMINAL_COLOR}]`}>{PROMPT_PREFIX}</span>
                <span className={`text-[${TERMINAL_COLOR}]`}>:</span>
                <span className={`text-[${TERMINAL_COLOR}]`}>~</span>
                <span className={`text-[${TERMINAL_COLOR}]`}>$</span>
            </span>
            <span className={`text-[${TERMINAL_COLOR}] inline-block overflow-x-auto max-w-full matrix-text`}>
                Welcome to Brendan's Terminal!
            </span>
        </div>,
        createPromptLine("Type a command to start. Ex: 'help' or 'home'", "2")
    ];

    // Tracks history of commands entered, output, and current command
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(null);
    const [output, setOutput] = useState(defaultOutput);
    const [command, setCommand] = useState("");

    // Command responses configuration
    const commandResponses = {
        help: (
            <div className={`text-[${TERMINAL_COLOR}]`}>
                <p className="mb-2">Here is a list of supported commands:</p>
                <ul className="list-inside list-disc pl-2">
                    <li><span className={`font-bold text-[${TERMINAL_COLOR}] w-20 inline-block`}>help</span> - Ask for help</li>
                    <li><span className={`font-bold text-[${TERMINAL_COLOR}] w-20 inline-block`}>home</span> - Are you home?</li>
                    <li><span className={`font-bold text-[${TERMINAL_COLOR}] w-20 inline-block`}>about</span> - About the creator</li>
                    <li><span className={`font-bold text-[${TERMINAL_COLOR}] w-20 inline-block`}>projects</span> - About the creators projects</li>
                    <li><span className={`font-bold text-[${TERMINAL_COLOR}] w-20 inline-block`}>contact</span> - Can you contact the creator?</li>
                    <li><span className={`font-bold text-[${TERMINAL_COLOR}] w-20 inline-block`}>clear</span> - Clear the terminal</li>
                </ul>
            </div>
        ),
        home: <div className="flex"><span className={`text-[${TERMINAL_COLOR}]`}>You are Home!</span></div>,
        about: (
            <div className="flex">
                <span className={`text-[${TERMINAL_COLOR}]`}>
                    Hey! My name is Brendan and I'm an aspiring Full Stack Software Developer passionate about technology and creating!
                    If you'd like to know even more about me, click the '[about]' in the top right corner of the page.
                </span>
            </div>
        ),
        projects: (
            <div className="flex">
                <span className={`text-[${TERMINAL_COLOR}]`}>
                    I have worked on various types of projects, whether it be academically or for my own personal benefit.
                    I have used a variety of languages, on front end, back end, and database development. 
                    If you want to know more about projects I have worked on, checkout the projects page!
                </span>
            </div>
        ),
        contact: (
            <div className="flex">
                <span className={`text-[${TERMINAL_COLOR}]`}>
                    Email: brendan.dileo@mohawkcollege.ca
                    See the 'Contact' page to contact me.
                </span>
            </div>
        ),
        greet: <div className="flex"><span className={`text-[${TERMINAL_COLOR}]`}>Hello, welcome to Brendan's Portfolio Website!</span></div>
    };

    const handleCommandSubmission = (event) => {
        event.preventDefault();
        const newCommandOutput = createPromptLine(command, Date.now());

        // Handle clear command separately
        if (command.toLowerCase() === "clear") {
            setOutput([]);
            setCommand("");
            return;
        }

        // Get response or default error message
        const response = commandResponses[command.toLowerCase()] || 
            <div className="flex">
                <span className={`text-[${TERMINAL_COLOR}]`}>
                    Uhhh... I don't know how to respond to that. Try 'help'.
                </span>
            </div>;

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
            className="w-[95%] md:w-4/5 lg:w-3/5 h-[450px] bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-sm rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col border border-gray-700 overflow-hidden font-mono mx-auto"
        >
            <div className={`h-8 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center relative text-[${TERMINAL_COLOR}] text-sm font-bold border-b border-gray-700`}>
                <div className="absolute left-4 flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                </div>
                <span className="text-center w-full">
                    <span className="hidden sm:inline">brendans@website-terminal: ~</span>
                    <span className="inline sm:hidden">b-terminal ~</span>
                </span>
            </div>
            <div className={`flex-1 p-3 text-[${TERMINAL_COLOR}] overflow-y-auto`}>{output}</div>
            <form className={`flex p-3 border-t border-gray-700`} onSubmit={handleCommandSubmission}>
                <span className="mr-2">
                    <span className={`text-[${TERMINAL_COLOR}]`}>{PROMPT_PREFIX}</span>
                    <span className={`text-[${TERMINAL_COLOR}]`}>:</span>
                    <span className={`text-[${TERMINAL_COLOR}]`}>~</span>
                    <span className={`text-[${TERMINAL_COLOR}]`}>$</span>
                </span>
                <input
                    className={`flex-1 bg-transparent border-none text-[${TERMINAL_COLOR}] text-lg focus:outline-none placeholder-[${TERMINAL_COLOR}]/50`}
                    type="text"
                    value={command}
                    onChange={(event) => setCommand(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter command..."
                />
            </form>
        </motion.div>
    );
};

export default Terminal;
