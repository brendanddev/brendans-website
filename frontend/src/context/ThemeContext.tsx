
/**
 * @file ThemeContext.tsx
 * @author Brendan Dileo
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Defines the type for the theme context
interface ThemeContextType {
   isDarkMode: boolean;
   toggleTheme: () => void;
}

// Props for the ThemeProvider Component
interface ThemeProviderProps {
    children: ReactNode;
}

// Context for managing theme safely
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Compoent
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    const toggleTheme = (): void => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        document.body.classList.add('theme-transition');

        const timeout = setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);

        return () => clearTimeout(timeout);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
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