
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
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });

    const validate = () => {
        const nextErrors = { name: "", email: "", message: "" };
        if (!name.trim()) {
            nextErrors.name = "Name is required.";
        }
        if (!email.trim()) {
            nextErrors.email = "Email is required.";
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                nextErrors.email = "Enter a valid email address.";
            }
        }
        if (!message.trim()) {
            nextErrors.message = "Message is required.";
        }
        setErrors(nextErrors);
        return !nextErrors.name && !nextErrors.email && !nextErrors.message;
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!validate()) {
            setStatus({ type: "error", text: "Please correct the highlighted fields." });
            return;
        }
        setStatus({ type: "success", text: "Message sent successfully!" });
        setName("");
        setEmail("");
        setMessage("");
        setErrors({ name: "", email: "", message: "" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 w-full max-w-screen-sm md:max-w-2xl lg:max-w-3xl min-h-[380px] bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-md rounded-xl border border-gray-700 flex flex-col overflow-hidden font-mono mx-auto mt-3 shadow-lg"
            role="region"
            aria-label="Contact terminal"
        >
            <div className="h-10 sm:h-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-between relative text-white text-xs sm:text-sm font-bold border-b border-gray-700 shadow-[0_0_10px_rgba(128,128,128,0.2)]">
                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-300 text-base sm:text-lg font-bold tracking-wider">
                    contact-form.exe
                </span>
                <div className="flex gap-2 mr-2 sm:mr-4 ml-auto">
                    <button type="button" aria-label="Minimize window" className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center text-yellow-400 hover:text-yellow-300 text-lg sm:text-xl rounded-sm hover:bg-yellow-600/20 transition-all shadow-[0_0_4px_rgba(255,255,0,0.3)] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                        −
                    </button>
                    <button type="button" aria-label="Maximize window" className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center text-green-400 hover:text-green-300 text-lg sm:text-xl rounded-sm hover:bg-green-600/20 transition-all shadow-[0_0_4px_rgba(0,255,0,0.3)] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                        □
                    </button>
                    <button type="button" aria-label="Close window" className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center text-red-400 hover:text-red-300 text-lg sm:text-xl rounded-sm hover:bg-red-600/20 transition-all shadow-[0_0_4px_rgba(255,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                        ×
                    </button>
                </div>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto text-green-200 bg-black/70 backdrop-blur-sm">
                <form className="space-y-4 sm:space-y-5" onSubmit={onSubmit} noValidate aria-describedby="form-status" aria-labelledby="contact-form-title">
                    <h2 id="contact-form-title" className="sr-only">Contact form</h2>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-green-400 text-xs sm:text-sm font-mono">
                            &gt; fullName:
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => { setName(e.target.value); if (errors.name) setErrors({ ...errors, name: "" }); }}
                            placeholder="Enter your name"
                            autoComplete="name"
                            required
                            aria-required="true"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            className={`w-full p-2 sm:p-2 mt-1 sm:mt-2 bg-black/80 text-green-200 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:ring-offset-2 focus:ring-offset-black ${errors.name ? "border-red-500" : "border-green-600"}`}
                        />
                        {errors.name && (
                            <p id="name-error" className="mt-1 text-xs text-red-400">&gt; {errors.name}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-green-400 text-xs sm:text-sm font-mono">
                            &gt; emailAddress:
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({ ...errors, email: "" }); }}
                            placeholder="Enter your email"
                            autoComplete="email"
                            required
                            aria-required="true"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`w-full p-2 sm:p-2 mt-1 sm:mt-2 bg-black/80 text-green-200 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:ring-offset-2 focus:ring-offset-black ${errors.email ? "border-red-500" : "border-green-600"}`}
                        />
                        {errors.email && (
                            <p id="email-error" className="mt-1 text-xs text-red-400">&gt; {errors.email}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-green-400 text-xs sm:text-sm font-mono">
                            &gt; message:
                        </label>
                        <textarea
                            id="message"
                            rows="3"
                            name="message"
                            value={message}
                            onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors({ ...errors, message: "" }); }}
                            placeholder="Type your message here..."
                            autoComplete="off"
                            required
                            aria-required="true"
                            aria-invalid={Boolean(errors.message)}
                            aria-describedby={errors.message ? "message-error" : undefined}
                            className={`w-full p-2 sm:p-2 mt-1 sm:mt-2 bg-black/80 text-green-200 border rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:ring-offset-2 focus:ring-offset-black resize-none ${errors.message ? "border-red-500" : "border-green-600"}`}
                        />
                        {errors.message && (
                            <p id="message-error" className="mt-1 text-xs text-red-400">&gt; {errors.message}</p>
                        )}
                    </div>

                    <div id="form-status" role="status" aria-live="polite" aria-atomic="true" className="min-h-5">
                        {status && (
                            <div
                                className={`text-xs sm:text-sm font-mono mt-1 ${status.type === "error" ? "text-red-400" : "text-green-400"}`}
                            >
                                &gt; {status.text}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center pt-3 sm:pt-4">
                        <button
                            type="submit"
                            className="bg-green-900/20 text-green-300 font-mono px-5 sm:px-6 py-1.5 sm:py-1 rounded-md hover:bg-green-800/40 transition-all duration-300 transform hover:scale-105 border border-green-600 hover:border-green-400 shadow-[0_0_6px_rgba(0,255,0,0.25)] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
                            aria-label="Submit contact form"
                        >
                            ./submit
                        </button>
                    </div>
                </form>
            </div>

            <div className="h-6 bg-black/60 border-t border-green-700 text-[10px] sm:text-xs text-green-400 flex items-center justify-between px-3 sm:px-4 font-mono tracking-wide">
                <span className="truncate">&gt; last command: ./submit</span>
                <span>&gt; status: {status?.type ?? "idle"}</span>
            </div>
        </motion.div>
    );
};

export default ContactTerminal;
