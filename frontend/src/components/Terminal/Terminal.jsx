
/**
 * @file Terminal.jsx
 * @author Brendan Dileo
 * 
 * Inspired by https://github.com/jonmbake/react-terminal-ui, but built my own with custom behaviour and styles.
 */

import { useState } from "react";
import TerminalFrame from "./TerminalFrame";

const Terminal = () => {

    // Constants for styling
    const TERMINAL_COLOR = "#00ff00";
    const COLOR_WHITE = "#ffffff";
    const COLOR_BLUE  = "#5179ff";
    const COLOR_YELLOW = "#ffff00";
    const COLOR_RED = "#ff5555";



    const PROMPT_PREFIX = "brendan@portfolio";
    
    // Helper function to create prompt line
    const createPromptLine = (content, key) => (
        <div key={key} className="flex">
            <span className="mr-2">
                <span className={`text-[${TERMINAL_COLOR}]`}>{PROMPT_PREFIX}</span>
                <span style={{ color: COLOR_WHITE }}>:</span>
                <span style={{ color: COLOR_BLUE }}>~</span>
                <span style={{ color: COLOR_WHITE }}>$</span>
            </span>
            <span style={{ color: COLOR_WHITE }}>{content}</span>
        </div>
    );
    // Default output when terminal is loaded
    const defaultOutput = [
        <div key="1" className="flex">
            <span className="mr-2">
                <span className={`text-[${TERMINAL_COLOR}]`}>{PROMPT_PREFIX}</span>
                <span style={{ color: COLOR_WHITE }}>:</span>
                <span style={{ color: COLOR_BLUE }}>~</span>
                <span style={{ color: COLOR_WHITE }}>$</span>
            </span>
            <span style={{ color: COLOR_WHITE }} className={`inline-block overflow-x-auto max-w-full matrix-text`}>
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
                <span style={{ color: COLOR_WHITE }}>
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
        <TerminalFrame
            title="brendans@website-terminal: ~"
            color={TERMINAL_COLOR}
            className="h-[450px]"
            contentClassName={`p-3 text-[${TERMINAL_COLOR}] overflow-y-auto`}
        >
            <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto">{output}</div>
                <form className={`flex p-3 border-t border-gray-700`} onSubmit={handleCommandSubmission}>
                    <span className="mr-2">
                        <span className={`text-[${TERMINAL_COLOR}]`}>{PROMPT_PREFIX}</span>
                        <span style={{ color: COLOR_WHITE }}>:</span>
                        <span style={{ color: COLOR_BLUE }}>~</span>
                        <span style={{ color: COLOR_WHITE }}>$</span>
                    </span>
                    <input
                        style={{ color: COLOR_WHITE }}
                        className={`flex-1 bg-transparent border-none text-lg focus:outline-none placeholder-[${TERMINAL_COLOR}]/50`}
                        type="text"
                        value={command}
                        onChange={(event) => setCommand(event.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </form>
            </div>
        </TerminalFrame>
    );
};

export default Terminal;
