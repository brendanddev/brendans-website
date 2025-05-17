/**
 * @file ThemeToggle.tsx
 * @author Brendan Dileo
 * 
 * Allows the user to toggle between light and dark themes on the webpage.
 */

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';


const ThemeToggle: React.FC = () => {
    const { isDarkMode, setIsDarkMode, theme } = useTheme();

    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 
                ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}
                ${theme.text} shadow-lg hover:shadow-xl transform hover:scale-110
                border border-gray-300 dark:border-gray-600`}
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

