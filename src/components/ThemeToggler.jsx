
// ThemeToggler.jsx
// Brendan Dileo
// To change from dark and light theme on webpage

import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggler = () => {
    const [isDark, setIsDark] = useState(true);     // Dark by default

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <button 
            onClick={toggleTheme}
            className="fixed bottom-4 left-20 p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white"
        >
            {isDark ? <Sun size={30} /> : <Moon size={30} />}
        </button>
    )
}

export default ThemeToggler;