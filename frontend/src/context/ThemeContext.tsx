
/**
 * @file ThemeContext.tsx
 * @author Brendan Dileo
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface ThemeContextType {
   isDarkMode: boolean;
   toggleTheme: () => void;
}

// Context for managing theme safely
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};