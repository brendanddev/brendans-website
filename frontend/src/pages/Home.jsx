
/**
 * @file Home.jsx
 * @author Brendan Dileo 
 * 
 * The home page to my portfolio-website
*/

import Terminal from '../components/Terminal/Terminal';
import Header from '../components/Core/Header';

const Home = () => {
    const typedTexts = [
        "Welcome to my portfolio!",
        "Type a command in the terminal to explore.",
        "I love technology, coding, and problem-solving!"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container mx-auto px-4 py-8">
                <Header 
                    title="BRENDAN DILEO"
                    subtitle="Software Developer | Tech Enthusiast"
                    typedTexts={typedTexts}
                />
                <div className="flex justify-center">
                    <Terminal />
                </div>
            </div>
        </div>
    );
};

export default Home;