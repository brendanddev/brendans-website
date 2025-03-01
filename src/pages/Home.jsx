

// Home.jsx
// Brendan Dileo

import { ReactTyped } from 'react-typed';
import HelpTooltip from "../components/HelpTooltip";
import ThemeToggler from "../components/ThemeToggler";
import Terminal from '../components/Terminal';

// Home functional component
const Home = () => {
    
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center">
            <h1 className="text-5xl font-bold text-[#00ff00] mt-5 mb-6">Brendan's Website</h1>

            <div className="w-3/5 text-lg text-[#00ff00] text-center font-mono mb-6">
                {/* ReactTyped to simulate typing */}
                <ReactTyped
                    strings={[
                        "Welcome to my website! Checkout the terminal by entering a command!",
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={1000}
                    loop
                />
            </div>
          
            <Terminal />
            <HelpTooltip />
            <ThemeToggler />
        </div>
    );
};

export default Home;