
/**
 * @file ThemeContext.tsx
 * @author Brendan Dileo
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


// Defines the type for the theme context
interface ThemeContextType {
   isDarkMode: boolean;
   setIsDarkMode: (value: boolean) => void;
   theme: {
        background: string;
        text: string;
        primary: string;
        secondary: string;
        accent: string;
        card: string;
        border: string;
   };
}

// Props for the ThemeProvider Component
interface ThemeProviderProps {
    children: ReactNode;
}

// Context for managing theme safely
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Compoent
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    const theme = {
        background: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
        text: isDarkMode ? 'text-white' : 'text-gray-900',
        primary: isDarkMode ? 'text-[#00ffcc]' : 'text-[#0066cc]',
        secondary: isDarkMode ? 'text-gray-400' : 'text-gray-600',
        accent: isDarkMode ? 'bg-[#00ffcc]' : 'bg-[#0066cc]',
        card: isDarkMode ? 'bg-gray-800' : 'bg-white',
        border: isDarkMode ? 'border-gray-700' : 'border-gray-200'
    };


    const toggleTheme = (): void => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        document.body.classList.add('theme-transition');
        document.body.classList.toggle('dark', isDarkMode);
        document.body.classList.toggle('light', !isDarkMode);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};