
/**
 * @file useCommandHistory.js
 * @author Brendan Dileo, July 2025
 * 
 * Defines a custom hook for managing command history navigation using the arrow keys
 */

import { useState } from "react";

const useCommandHistory = () => {
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(null);
    
    // Navigates through the command history using the up and down arrow keys
    const navigateHistory = (direction) => {
        if (history.length === 0) return;
        
        // Determines the new history index based on the direction and current index
        const index =
            direction === "ArrowUp"
                ? historyIndex === null
                    ? 0
                    : Math.min(historyIndex + 1, history.length - 1)
                : historyIndex === null
                    ? null
                    : historyIndex > 0
                        ? historyIndex - 1
                        : null;

        if (index === null) return "";

        setHistoryIndex(index);
        return history[index];
    };

    // Adds a new command to the history and resets the navigation index
    // Gets called when user submits a new command into terminal
    const resetHistory = (newCommand) => {
        setHistory([newCommand, ...history]);
        setHistoryIndex(null);
    };

    return { history, historyIndex, navigateHistory, resetHistory };
};

export default useCommandHistory;
