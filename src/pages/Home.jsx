

// Home.jsx
// Brendan Dileo

import HelpTooltip from "../components/HelpTooltip";
import ThemeToggler from "../components/ThemeToggler";
import Terminal from '../components/Terminal';
import Header from "../components/Header";

// Home functional component
const Home = () => {
    
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center">
            <Header />
            <Terminal />
            <HelpTooltip />
            <ThemeToggler />
        </div>
    );
};

export default Home;