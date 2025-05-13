
/**
 * @file Contact.jsx
 * @author Brendan Dileo
 * 
 * The Contact page for my portfolio website
*/

import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center">
            <Header 
                title="Contact Brendan" 
                subtitle="Software Developer | Backend | Tech Enthusiast"
                typedTexts={[
                    "Feel free to reach out! I'm always open to collaborating on projects and exploring new opportunities.",
                    "Looking for a developer? I'm open to work and collaborations!",
                    "Have a project in mind? Let's build something great together!"
                ]}
            />
            <motion.div
                className="w-3/5 h-[600px] bg-gray-700 rounded-lg shadow-lg flex flex-col border border-white overflow-hidden font-mono"
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
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-sm">fullName:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-2 mt-2 bg-gray-900 text-white border border-gray-600 rounded"
                                    placeholder="Enter your name"
                                />
                                <p>&lt;br&gt;</p>
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm">emailAddress:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2 mt-2 bg-gray-900 text-white border border-gray-600 rounded"
                                    placeholder="Enter your email"
                                />
                                <p>&lt;br&gt;</p>
                            </div>

                            <div>
                                <label htmlFor="phone" className="text-sm">phoneNumber:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full p-2 mt-2 bg-gray-900 text-white border border-gray-600 rounded"
                                    placeholder="Enter your phone (optional)"
                                />
                                <p>&lt;br&gt;</p>
                            </div>

                            <div>
                                <label htmlFor="comment" className="text-sm">extraComment:</label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    className="w-full p-2 mt-2 bg-gray-900 text-white border border-gray-600 rounded"
                                    rows="6"
                                    placeholder="Type your comment"
                                />
                                <p>&lt;br&gt;</p>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition"
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
