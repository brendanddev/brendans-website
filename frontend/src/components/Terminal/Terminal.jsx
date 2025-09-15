
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
        createPromptLine("Type a command to start.", "2")
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
            className="min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[420px] max-h-[70vh]"
            contentClassName={`p-2 sm:p-3 text-[${TERMINAL_COLOR}] overflow-y-auto`}
        >
            <div className="flex flex-col h-full" role="region" aria-label="Terminal output and input">
                <div className="flex-1 overflow-y-auto" role="log" aria-live="polite" aria-relevant="additions">
                    {output}
                </div>
                <form className={`flex p-2 sm:p-3 border-t border-gray-700`} onSubmit={handleCommandSubmission} aria-labelledby="terminal-input-label">
                    <label id="terminal-input-label" htmlFor="terminal-input" className="sr-only">Terminal command input</label>
                    <span className="mr-2" aria-hidden="true">
                        <span className={`text-[${TERMINAL_COLOR}]`}>{PROMPT_PREFIX}</span>
                        <span style={{ color: COLOR_WHITE }}>:</span>
                        <span style={{ color: COLOR_BLUE }}>~</span>
                        <span style={{ color: COLOR_WHITE }}>$</span>
                    </span>
                    <input
                        id="terminal-input"
                        style={{ color: COLOR_WHITE }}
                        className={`flex-1 bg-transparent border-none text-base sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[${TERMINAL_COLOR}]/60 rounded-sm placeholder-[${TERMINAL_COLOR}]/50`}
                        type="text"
                        value={command}
                        onChange={(event) => setCommand(event.target.value)}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                        spellCheck={false}
                        aria-label="Enter terminal command"
                    />
                </form>
            </div>
        </TerminalFrame>
    );
};

export default Terminal;
