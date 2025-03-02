
/**
 * @file Home.jsx
 * @author Brendan Dileo 
 * 
 * The home page to my portfolio-website.
 * This page includes a header component, a terminal component that allows for user interaction, 
 * a sidebar component to quickly access my socials, and tooltip component in case the user is
 * unsure of how the page functions.
*/

import HelpTooltip from "../components/HelpTooltip";
import ThemeToggler from "../components/ThemeToggler";
import Terminal from '../components/Terminal';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

/**
 * Home functional component
 * 
 * This component will render the home page of the website by constructing the jsx.
 * The home page (component) will have the header, terminal, tooltip, and sidebar.
 * 
 * @returns {JSX.Element} The jsx rendering the home page.
 */
const Home = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center">
            <div className="w-full">
                {/* Header Component */}
                <Header 
                title="Brendan Dileo" 
                subtitle="Software Developer | Tech Enthusiast "
                typedTexts={[
                    "Welcome to my portfolio-website! Want to know more about me? Enter a command into the terminal!",
                    "I am passionate about technology, coding, and solving complex problems.",
                    "You can often find me working on personal projects, exploring new frameworks, or playing around with hardware."
                ]}
            />
            </div>
            {/* Terminal, Tooltip, and Sidebar Components */}
            <Terminal />
            <HelpTooltip />
            <ThemeToggler />
            <Sidebar />
        </div>
    );
};

// Exports the component to be used elsewhere in the project
export default Home;