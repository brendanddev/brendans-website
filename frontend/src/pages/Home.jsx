
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
          <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 border-4 border-[#00ff00] border-t-transparent rounded-full animate-spin"
            />
          </div>
        );
      }


    return (
        <div className="relative w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#00ff00]/10 to-emerald-400/10 rounded-full blur-3xl"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                  animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    scale: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-[#00ff00]/5 to-transparent rounded-full blur-2xl"
                  animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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