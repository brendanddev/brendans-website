
/**
 * @file CommandOutput.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Displays a line of output inside the terminal, either as a command or response to command
 */

const CommandOutput = ({ text, isCommand = false }) => (
    <div className="flex text-sm sm:text-base">
        
        {/* If the line represents a user entered command show the terminal prompt prefix */}
        {isCommand && (
            <span className="mr-1 sm:mr-2 text-xs sm:text-sm">
                <span className="text-green-400">brendan@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
            </span>
        )}
        <span className="text-white">{text}</span>
    </div>
);

export default CommandOutput;
