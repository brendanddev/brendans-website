
/**
 * @file Projects.jsx
 * @author Brendan Dileo 
 * 
 * The projects page for my portfolio-website
 */

import Header from '../components/Header';

const Projects = () => {
    const typedTexts = [
        "My Portfolio Projects",
        "Web Applications",
        "Full Stack Solutions",
        "Innovation & Creativity"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container mx-auto px-4 py-8">
                <Header 
                    title="MY PROJECTS"
                    subtitle="Explore my work"
                    typedTexts={typedTexts}
                />
                <div className="max-w-6xl mx-auto">
                    <div className="bg-black/50 border border-gray-700 rounded-lg p-8">
                        <p className="text-[#00ff00] font-mono text-lg leading-relaxed">
                            Projects page content coming soon...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;