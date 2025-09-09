
/**
 * @file Contact.jsx
 * @author Brendan Dileo
 * 
 * The Contact page for my portfolio website.
*/

import Header from '../components/Header';
import ContactTerminal from '../components/ContactTerminal';

const Contact = () => {
    const typedTexts = [
        "Get in Touch",
        "Let's Connect",
        "Start a Conversation",
        "Build Something Together"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="container mx-auto px-4 py-8">
                <Header 
                    title="CONTACT ME"
                    subtitle="Let's work together"
                    typedTexts={typedTexts}
                />
                <div className="max-w-4xl mx-auto">
                    <ContactTerminal />
                </div>
            </div>
        </div>
    );
};

export default Contact;
