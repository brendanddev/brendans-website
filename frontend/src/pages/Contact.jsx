
/**
 * @file Contact.jsx
 * @author Brendan Dileo
 * 
 * The Contact page for the portfolio website, allowing users to contact me.
*/

import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion"

import { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
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
    // Handle input changes for state
    const handleChange = (e) => {
        setForm((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value,
        }));
    }

    // Handle submissons
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const { data } = await axios.post('/api/connect', {
                name: form.name,
                email: form.email,
                message: form.message,
            });
            setStatus("success");
            setForm({ name: '', email: '', message: '' });
            console.log('Message sent!', data);
        } catch (error) {
            console.error('Error submitting the form: ', error);
            setStatus("error");
        }
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

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="text-sm text-green-400">fullName:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
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
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full p-2 mt-1 bg-slate-800/50 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-colors"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-sm text-green-400">extraMessage:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full p-2 mt-1 bg-slate-800/50 text-white border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 transition-colors"
                                    rows="4"
                                    placeholder="Type your message"
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
                {/* Added: Social Links and Find Me Here section */}
                <motion.div
                  className="relative z-10 w-[95%] md:w-4/5 lg:w-3/5 flex flex-col md:flex-row justify-between items-center mt-8 gap-8 mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex flex-col items-center md:items-start space-y-4">
                    <div className="text-green-400 font-bold text-lg">Find Me Here</div>
                    <div className="text-slate-300">📍 Toronto, Canada</div>
                    <div className="text-slate-300">✉️ brendandileo@gmail.com</div>
                  </div>
                  <div className="flex flex-row gap-6 items-center">
                    <a href="https://github.com/brendanddev" target="_blank" rel="noopener noreferrer" title="GitHub">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-8 w-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://linkedin.com/in/brendandileo" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-8 w-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href="mailto:brendandileo@gmail.com" title="Email">
                      <svg className="h-8 w-8 text-green-400 hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm8 0a12 12 0 11-24 0 12 12 0 0124 0z"></path></svg>
                    </a>
                  </div>
                </motion.div>
            <Sidebar />
        </div>
    );
};

export default Contact;
