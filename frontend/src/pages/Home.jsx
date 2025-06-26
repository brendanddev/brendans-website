
/**
 * @file Home.jsx
 * @author Brendan Dileo 
 * 
 * The home page to my portfolio-website
*/

import Terminal from '../components/Terminal';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulatiton but will be implemented
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
      }, []);
    
      if (isLoading) {
        return (
          <div className="relative w-full min-h-screen flex items-center justify-center bg-slate-900 text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 border-4 border-[#00ff00] border-t-transparent rounded-full animate-spin"
            />
          </div>
        );
      }


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