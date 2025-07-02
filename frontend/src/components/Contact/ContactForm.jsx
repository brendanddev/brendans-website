
/**
 * @file ContactForm.jsx
 * @author Brendan Dileo, July 2025
 * 
 * A reusable styled contact form, used to allow message submissons to be stored in a database
 */

import Button from "../common/Button";

const ContactForm = () => {
    return (
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
                    <Button
                        type="submit"
                        className="bg-green-400 text-slate-900 font-bold px-6 py-2 rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(50,205,50,0.5)]"
                    >
                        submitForm
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
