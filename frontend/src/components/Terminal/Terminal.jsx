
/**
 * @file Terminal.jsx
 * @author Brendan Dileo
 * 
 * Main terminal component that handles the rendering, user input and command execution.
 * Inspired by https://github.com/jonmbake/react-terminal-ui, but built my own with custom behaviour and styles.
*/


import { useState } from "react";
import { motion } from "framer-motion";
import CommandPrompt from "./CommandPrompt";
import CommandOutput from "./CommandOutput";
import { handleCommand } from "./commandHandlers";
import useCommandHistory from "../../hooks/useCommandHistory";

const Terminal = () => {
    
    // Initial output displayed in the terminal on load
    const defaultOutput = [
        <CommandOutput key="1" text="Welcome to Brendan's Terminal!" />,
        <CommandOutput key="2" text="Type a command to start. Ex: 'help' or 'home'" />,
    ];

    const [output, setOutput] = useState(defaultOutput);
    const [command, setCommand] = useState("");
    const { history, historyIndex, navigateHistory, resetHistory } = useCommandHistory();

    // Handles the command submission event
    const handleCommandSubmission = (e) => {
        e.preventDefault();
        const newOutput = <CommandOutput text={command} isCommand />;
        const response = handleCommand(command, setOutput);

        // Check for clear command explicitly
        if (command.toLowerCase() === "clear") {
            setOutput([]);
        } else {
            setOutput((prev) => [...prev, newOutput, response]);
        }

        resetHistory(command);
        setCommand("");
    };

    // Handles the keydown event which triggers history navigation
    const handleKeyDown = (e) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            const newCommand = navigateHistory(e.key);
            if (newCommand !== undefined) setCommand(newCommand);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[95%] md:w-4/5 lg:w-3/5 h-[350px] sm:h-[400px] md:h-[450px] bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-[0_0_20px_rgba(120,119,198,0.25)] flex flex-col border border-slate-700 overflow-hidden font-mono mx-auto"
        >
            <div className="h-8 sm:h-10 bg-slate-800 flex items-center justify-center relative text-white text-xs sm:text-sm font-bold px-2">
                <div className="absolute left-2 sm:left-4 flex gap-1 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-center w-full text-xs sm:text-sm truncate">brendans@website-terminal: ~</span>
            </div>

            <div className="flex-1 p-2 sm:p-3 text-white overflow-y-auto text-sm sm:text-base">{output}</div>

            {/* Command input prompt that handles user input */}
            <CommandPrompt
                command={command}
                setCommand={setCommand}
                onSubmit={handleCommandSubmission}
                onKeyDown={handleKeyDown}
            />  
        </motion.div>
    );
};

export default Terminal;
