
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
            setStatus({ type: "error", text: "All fields are required!" });
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
            className="relative z-10 w-[95%] md:w-4/5 lg:w-3/5 min-h-[400px] bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-md rounded-xl border border-gray-700 flex flex-col overflow-hidden font-mono mx-auto mt-3"
        >
            <div className="h-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-between relative text-white text-sm font-bold border-b border-gray-700 shadow-[0_0_10px_rgba(128,128,128,0.2)]">
                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-300 text-lg font-bold tracking-wider">
                    contact-form.exe
                </span>
                <div className="flex gap-2 mr-4 ml-auto">
                    <button className="w-9 h-9 flex items-center justify-center text-yellow-400 hover:text-yellow-300 text-xl rounded-sm hover:bg-yellow-600/20 transition-all shadow-[0_0_4px_rgba(255,255,0,0.3)]">
                        −
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center text-green-400 hover:text-green-300 text-xl rounded-sm hover:bg-green-600/20 transition-all shadow-[0_0_4px_rgba(0,255,0,0.3)]">
                        □
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center text-red-400 hover:text-red-300 text-xl rounded-sm hover:bg-red-600/20 transition-all shadow-[0_0_4px_rgba(255,0,0,0.3)]">
                        ×
                    </button>
                </div>
            </div>

            <div className="p-6 overflow-y-auto text-green-200 bg-black/70 backdrop-blur-sm">
                <form className="space-y-5" onSubmit={onSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-green-400 text-sm font-mono">
                            &gt; fullName:
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full p-1 mt-2 bg-black/80 text-green-200 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-inner"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-green-400 text-sm font-mono">
                            &gt; emailAddress:
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-1 mt-2 bg-black/80 text-green-200 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-inner"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-green-400 text-sm font-mono">
                            &gt; message:
                        </label>
                        <textarea
                            id="message"
                            rows="3"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                            className="w-full p-1 mt-2 bg-black/80 text-green-200 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-inner resize-none"
                        />
                    </div>

                    {status && (
                        <div
                            className={`text-sm font-mono mt-1 ${status.type === "error" ? "text-red-400" : "text-green-400"
                                }`}
                        >
                            &gt; {status.text}
                        </div>
                    )}

                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="bg-green-900/20 text-green-300 font-mono px-6 py-1 rounded-md hover:bg-green-800/40 transition-all duration-300 transform hover:scale-105 border border-green-600 hover:border-green-400 shadow-[0_0_6px_rgba(0,255,0,0.25)]"
                        >
                            ./submit
                        </button>
                    </div>
                </form>
            </div>

            <div className="h-6 bg-black/60 border-t border-green-700 text-xs text-green-400 flex items-center justify-between px-4 font-mono tracking-wide">
                <span>&gt; last command: ./submit</span>
                <span>&gt; status: {status?.type ?? "idle"}</span>
            </div>
        </motion.div>
    );
};

export default ContactTerminal;
