
/**
 * @file Home.jsx
 * @author Brendan Dileo 
 * 
 * The home page to my portfolio-website
*/

import Terminal from '../components/Terminal/Terminal';
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import LoadingSpinner from '../components/Spinner/LoadingSpinner';
import useLoading from '../hooks/useLoading';

const Home = () => {

    const isLoading = useLoading(500);
    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="relative w-full min-h-screen bg-slate-900 text-white flex flex-col items-center p-4">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <Header 
                    title="Brendan Dileo" 
                    subtitle="Software Developer | Tech Enthusiast"
                    typedTexts={[
                        "Welcome to my portfolio-website!", 
                        "Want to know more about me? Enter a command into the terminal!",
                        "I am passionate about technology, coding, and solving complex problems."
                    ]}
                />
                <div className="w-full flex justify-center mt-8">
                    <Terminal />
                </div>
            </div>
            <Sidebar />
        </div>
    );
};

export default Home;