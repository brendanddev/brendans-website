
/**
 * @file ThemeToggle.tsx
 * @author Brendan Dileo
 * 
 * Allows the user to toggle between light and dark themes on the webpage.
 */

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';


const ThemeToggle: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-black/80 backdrop-blur-sm 
                border border-gray-700 text-white hover:bg-gray-800 
                transition duration-300 shadow-lg"
        aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
                <Moon className="w-6 h-6 text-blue-500" />
            )}
        </button>
    );
};

export default ThemeToggle;

