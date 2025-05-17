
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
    
    // Form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
    });

    const [status, setStatus] = useState(null);

    // Form input change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Form submission handler
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
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center">
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
            <motion.div
                className="w-[95%] md:w-4/5 lg:w-3/5 h-[450px] bg-gray-700 rounded-lg shadow-lg flex flex-col border border-white overflow-hidden font-mono mx-auto"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }} 
                transition={{ duration: 1 }}
            >
        
                <div className="h-8 bg-blue-600 flex items-center justify-between px-4 text-sm text-white">
                <span>Contact-Brendan-2</span>
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto text-white">

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="text-sm">fullName:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 mt-2 bg-gray-900 text-white border border-gray-600 rounded"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm">emailAddress:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 mt-2 bg-gray-900 text-white border border-gray-600 rounded"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="comment" className="text-sm">extraComment:</label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    className="w-full p-2 mt-2 bg-gray-900 text-white border border-gray-600 rounded"
                                    rows="4"
                                    placeholder="Type your comment"
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600 transition"
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
