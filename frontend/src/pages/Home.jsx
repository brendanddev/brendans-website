
/**
 * @file Home.jsx
 * @author Brendan Dileo 
 * 
 * The home page to my portfolio-website
*/

import Terminal from '../components/Terminal';
import Header from '../components/Header';

// Welcome to my portfolio website!
// Want to know more about me? Enter a command into the terminal!
// I am passionate about technology, coding, and solving complex problems.|

// Send me a message and I'll get back to you!
// Feel free to reach out!
// I'm always open to collaboration and new opportunities.

const Home = () => {
    const typedTexts = [
        "Welcome to Brendan's Portfolio",
        "Full Stack Developer",
        "Technology Enthusiast",
        "Problem Solver",
        "Creative Thinker"
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