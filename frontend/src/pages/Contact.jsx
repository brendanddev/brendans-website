
/**
 * @file Contact.jsx
 * @author Brendan Dileo
 * 
 * The Contact page for the portfolio website, allowing users to contact me.
*/

import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion"

// import { useState } from 'react';

const Contact = () => {

    return (
        <div className="relative w-full min-h-screen bg-slate-900 flex flex-col items-center p-4 text-white">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className='relative z-10 w-full'>
                <Header 
                    title="Contact Brendan" 
                    subtitle="Software Developer | Backend | Tech Enthusiast"
                    typedTexts={[
                        "Send me a message and I'll get back to you!",
                        "Feel free to reach out!",
                        "I'm always open to collaboration and new opportunities.",
                        "Have a project in mind? Let's build something great together!"
                    ]}
                />
            </div>
            <motion.div
                className="relative z-10 w-[95%] md:w-4/5 lg:w-3/5 min-h-[480px] bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-[0_0_20px_rgba(120,119,198,0.25)] flex flex-col border border-slate-700 overflow-hidden font-mono mx-auto mt-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
        
                <div className="h-8 bg-slate-800 flex items-center justify-center relative text-white text-sm font-bold">
                    <div className="absolute left-4 flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span>contact-form.sh</span>
                </div>

                    <div className="flex-1 p-6 overflow-y-auto text-white">

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-sm text-green-400">fullName:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-2 mt-1 bg-slate-800/50 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-colors"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm text-green-400">emailAddress:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2 mt-1 bg-slate-800/50 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-colors"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="comment" className="text-sm text-green-400">extraComment:</label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    className="w-full p-2 mt-1 bg-slate-800/50 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-colors"
                                    rows="4"
                                    placeholder="Type your comment"
                                    required
                                />
                            </div>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    className="bg-green-400 text-slate-900 font-bold px-6 py-2 rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(50,205,50,0.5)]"
                                >
                                    submitForm
                                </button>
                            </div>

                        </form>
                    </div>
                </motion.div>
            <Sidebar />
        </div>
    );
};

export default Contact;
