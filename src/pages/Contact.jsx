
// Contact.jsx
// Brendan Dileo

import { ReactTyped } from 'react-typed';


const Contact = () => {
    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center p-8">
            <h1 className="text-6xl font-bold text-[#00ff00] mt-5 mb-6">Contact Brendan</h1>

             <div className="w-3/5 text-lg text-[#00ff00] text-center font-mono mb-6">
                            <ReactTyped
                                strings={[
                                    "Feel free to reach out! I'm always open to collaborating on projects and exploring new opportunities.",
                                    "Looking for a developer? I'm open to work and collaborations!",
                                    "Have a project in mind? Let's build something great together!"
                                ]}
                                typeSpeed={100}
                                backSpeed={50}
                                backDelay={1000}
                                loop
                            />
                        </div>
            
            <h1 className='text-white'>Contact Me</h1>
            <div className="w-3/5 h-[600px] bg-gray-800 rounded-lg shadow-lg flex flex-col border border-white overflow-hidden font-mono mb-5">
                <div className="h-8 bg-blue-600 flex items-center justify-between px-4 text-sm text-white">
                    <span>Contact-Brendan-1</span>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                </div>

                <div className="flex-1 p-4 overflow-y-auto text-white">
                  
                </div>
            </div>

            <div className="w-3/5 h-[600px] bg-gray-800 rounded-lg shadow-lg flex flex-col border border-white overflow-hidden font-mono">
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
            </div>
        </div>
    );
};

export default Contact;
