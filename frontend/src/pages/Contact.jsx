
/**
 * @file Contact.jsx
 * @author Brendan Dileo
 * 
 * The Contact page for the portfolio website, allowing users to contact me.
*/

import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion"

import { submitContactForm } from '../api/contact';
import { useState } from 'react';

const Contact = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await submitContactForm(formData);
            console.log('Submission Success: ', response);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', comment: '' });
        } catch (error) {
            console.error('Submission Failed: ', error);
            setStatus('error');
        }
    };

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

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="text-sm text-green-400">fullName:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
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
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.comment}
                                    onChange={handleChange}
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

                            {status === 'success' && (
                                <p className="text-green-400 mt-4 text-center">Thank You! Your message has been sent!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 mt-4 text-center">Oops! Something went wrong. Please try again.</p>                           
                            )}

                        </form>
                    </div>
                </motion.div>
            <Sidebar />
        </div>
    );
};

export default Contact;
