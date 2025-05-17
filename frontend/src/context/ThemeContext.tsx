
/**
 * @file ThemeContext.tsx
 * @author Brendan Dileo
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface ThemeContextType {
   isDarkMode: boolean;
   toggleTheme: () => void;
}

