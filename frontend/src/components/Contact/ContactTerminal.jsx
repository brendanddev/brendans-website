

/**
 * @file ContactTerminal.jsx
 * @author Brendan Dileo, September 2025
 * 
 * A terminal-styled contact form component that lets users submit a message.
 */

import { useState } from "react";
import { motion } from "framer-motion";

const ContactTerminal = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message) {
            setStatus({ type: "error", text: "Please fill out all fields." });
            return;
        }
        // Placeholder submission
        setStatus({ type: "success", text: "Message sent successfully!" });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 w-[95%] md:w-4/5 lg:w-3/5 min-h-[500px] bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-sm rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col border border-gray-700 overflow-hidden font-mono mx-auto mt-8"
        >
            <div className="h-10 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-between relative text-white text-sm font-bold border-b border-gray-700">

                <div className="flex gap-2 ml-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                </div>
                
                <span className="text-center text-gray-300">contact-form.exe</span>
                
                <div className="flex gap-1 mr-4">
                    <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                        <span className="text-xs">−</span>
                    </button>
                    <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
                        <span className="text-xs">□</span>
                    </button>
                    <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-colors">
                        <span className="text-xs">×</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto text-white">
                <form className="space-y-5" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="name" className="text-sm text-gray-300 font-mono">
                            &gt; fullName:
                        </label>
                        <input
                            id="name"
                            className="w-full p-3 mt-2 bg-gray-800/50 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500 transition-colors font-mono"
                            placeholder="Enter your name"
                            required
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm text-gray-300 font-mono">
                            &gt; emailAddress:
                        </label>
                        <input
                            id="email"
                            className="w-full p-3 mt-2 bg-gray-800/50 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500 transition-colors font-mono"
                            placeholder="Enter your email"
                            required
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="comment" className="text-sm text-gray-300 font-mono">
                            &gt; message:
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            className="w-full p-3 mt-2 bg-gray-800/50 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500 transition-colors font-mono resize-none"
                            rows="4"
                            placeholder="Type your message here..."
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    {status && (
                        <div className={`text-sm font-mono ${status.type === "error" ? "text-red-400" : "text-green-400"}`}>
                            &gt; {status.text}
                        </div>
                    )}

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="bg-gray-700 text-white font-mono px-8 py-3 rounded-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-gray-500 active:scale-95"
                        >
                            ./submit
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactTerminal;


