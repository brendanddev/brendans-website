/**
 * @file Home.jsx
 * @author Brendan Dileo 
 * 
 * The home page to my portfolio-website
*/

import HelpTooltip from "../components/HelpTooltip";
import Terminal from '../components/Terminal';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <div className={`w-full min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} flex flex-col items-center transition-colors duration-300`}>
            <ThemeToggle />
            <div className="w-full max-w-7xl mx-auto px-4">
                <Header 
                    title="Brendan Dileo" 
                    subtitle="Software Developer | Tech Enthusiast "
                    typedTexts={[
                        "Welcome to my portfolio-website!", 
                        "Want to know more about me? Enter a command into the terminal!",
                        "I am passionate about technology, coding, and solving complex problems."
                    ]}
                />
            </div>
            <div className="w-full flex justify-center px-4">
                <Terminal />
            </div>
            <HelpTooltip />
            <Sidebar />
        </div>
    );
};

export default Home;