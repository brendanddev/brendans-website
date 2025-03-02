
// Home.jsx
// Brendan Dileo

import HelpTooltip from "../components/HelpTooltip";
import ThemeToggler from "../components/ThemeToggler";
import Terminal from '../components/Terminal';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Home functional component
const Home = () => {
    
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center">
            <div className="w-full">
                <Header 
                title="Brendan Dileo" 
                subtitle="Software Developer | Tech Enthusiast | Designer"
                typedTexts={[
                    "Welcome to my portfolio-website! Want to know more about me? Enter a command into the terminal!",
                    "I am passionate about technology, coding, and solving complex problems.",
                    "You can often find me working on personal projects, exploring new frameworks, or playing around with hardware."
                ]}
            />
            </div>
            <Terminal />
            <HelpTooltip />
            <ThemeToggler />
            <Sidebar />

        </div>
    );
};

export default Home;