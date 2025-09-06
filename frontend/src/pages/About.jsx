
/**
 * @file About.jsx
 * @author Brendan Dileo
 * 
 * The About page for my portfolio website
*/

import Header from '../components/Header';

const About = () => {
    const typedTexts = [
        "About the Developer",
        "My Story & Journey",
        "Skills & Experience",
        "Passion for Technology"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container mx-auto px-4 py-8">
                <Header 
                    title="ABOUT"
                    subtitle="Get to know me"
                    typedTexts={typedTexts}
                />
                <div className="max-w-4xl mx-auto">
                    <div className="bg-black/50 border border-gray-700 rounded-lg p-8">
                        <p className="text-[#00ff00] font-mono text-lg leading-relaxed">
                            About page content coming soon...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
