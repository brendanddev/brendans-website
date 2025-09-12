
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
            className="relative z-10 w-[95%] md:w-4/5 lg:w-3/5 min-h-[500px] bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-sm rounded-lg shadow-[0_0_25px_rgba(0,255,0,0.3)] flex flex-col border border-gray-700 overflow-hidden font-mono mx-auto mt-8"
        >
            <div className="h-10 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-between relative text-white text-sm font-bold border-b border-gray-700">
                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 text-sm font-bold">
                    contact-form.exe
                </span>
                <div className="flex gap-2 mr-4 ml-auto">
                    <button className="w-8 h-8 flex items-center justify-center text-yellow-400 hover:text-yellow-300 text-lg rounded-sm hover:bg-yellow-600/20 transition-colors">
                        −
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-green-400 hover:text-green-300 text-lg rounded-sm hover:bg-green-600/20 transition-colors">
                        □
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-red-400 hover:text-red-300 text-lg rounded-sm hover:bg-red-600/20 transition-colors">
                        ×
                    </button>
                </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto text-white">
                <form className="space-y-5" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="name" className="text-sm text-green-400 font-mono">
                            &gt; fullName:
                        </label>
                        <input
                            id="name"
                            className="w-full p-3 mt-2 bg-gray-800/60 text-green-200 border border-green-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors shadow-sm"
                            placeholder="Enter your name"
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm text-green-400 font-mono">
                            &gt; emailAddress:
                        </label>
                        <input
                            id="email"
                            className="w-full p-3 mt-2 bg-gray-800/60 text-green-200 border border-green-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors shadow-sm"
                            placeholder="Enter your email"
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="text-sm text-green-400 font-mono">
                            &gt; message:
                        </label>
                        <textarea
                            id="message"
                            className="w-full p-3 mt-2 bg-gray-800/60 text-green-200 border border-green-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors shadow-sm resize-none"
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
                            className="bg-gray-900 text-green-300 font-mono px-8 py-3 rounded-sm hover:bg-green-900/30 transition-all duration-300 transform hover:scale-105 border border-green-700 hover:border-green-500 active:scale-95 shadow-sm"
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
