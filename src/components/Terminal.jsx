

// Terminal.jsx
// Brendan Dileo

import { useState } from "react";
import { motion } from "framer-motion";

const Terminal = () => {
    const defaultOutput = [
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

    const [output, setOutput] = useState(defaultOutput);
    const [command, setCommand] = useState("");

    const handleCommandSubmission = (event) => {
        event.preventDefault();

        const newCommandOutput = (
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

        let response = "";
        switch (command.toLowerCase()) {
            case "help":
                response = <div className="flex"><span className="text-white">Help Case</span></div>;
                break;
            case "home":
                response = <div className="flex"><span className="text-white">Home</span></div>;
                break;
            case "about":
                response = <div className="flex"><span className="text-white">Brendan is an aspiring Full Stack Software Developer passionate about technology!</span></div>;
                break;
            case "clear":
                setOutput([]);
                setCommand("");
                return;
            default:
                response = <div className="flex"><span className="text-white">Sorry, I don't recognize that command. Try 'help'.</span></div>;
        }

        setOutput([...output, newCommandOutput, response]);
        setCommand("");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }}  
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-3/5 h-[600px] bg-black rounded-lg shadow-lg flex flex-col border border-gray-700 overflow-hidden font-mono"
        >
            <div className="h-8 bg-gray-800 flex items-center justify-center relative text-white text-sm font-bold">
                <div className="absolute left-4 flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-center w-full">brendans@website-terminal: ~</span>
            </div>
            <div className="flex-1 p-3 text-white overflow-y-auto">{output}</div>
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
                    onChange={(event) => setCommand(event.target.value)}
                />
            </form>
        </motion.div>
    );
};

export default Terminal;
