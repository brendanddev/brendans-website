
/**
 * @file CommandPrompt.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Renders the command input field for the terminal
 */

const CommandPrompt = ({ command, setCommand, onSubmit, onKeyDown }) => (
    <form className="flex p-3 border-t border-slate-700" onSubmit={onSubmit}>
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
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={onKeyDown}
        />
    </form>
);

export default CommandPrompt;