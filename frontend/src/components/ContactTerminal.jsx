

/**
 * @file ContactTerminal.jsx
 * @author Brendan Dileo, September 2025
 * 
 * A terminal-styled contact form component that lets users submit a message.
 */


import { useState } from "react";
import TerminalFrame from "./TerminalFrame";

const ContactTerminal = () => {
    const ACCENT = "#38bdf8";

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
        setStatus({ type: "success", text: "Thanks! Your message has been noted." });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <TerminalFrame
            title="contact@terminal: ~"
            color={ACCENT}
            className="h-[520px]"
            contentClassName={`p-4 text-[${ACCENT}]`}
        >
            <form className="flex flex-col gap-4 p-2" onSubmit={onSubmit}>
                <label className={`text-sm text-[${ACCENT}]`}>Name</label>
                <input
                    className={`bg-transparent border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/40`}
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label className={`text-sm text-[${ACCENT}]`}>Email</label>
                <input
                    className={`bg-transparent border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/40`}
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className={`text-sm text-[${ACCENT}]`}>Message</label>
                <textarea
                    className={`bg-transparent border border-gray-700 rounded px-3 py-2 text-white min-h-[140px] resize-none focus:outline-none focus:ring-2 focus:ring-sky-500/40`}
                    placeholder="How can I help?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs ${status?.type === "error" ? "text-red-400" : "text-green-400"}`}>
                        {status?.text}
                    </span>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded border border-sky-500/60 text-sky-300 hover:bg-sky-500/10 transition-colors"
                    >
                        Send
                    </button>
                </div>
            </form>
        </TerminalFrame>
    );
};

export default ContactTerminal;


