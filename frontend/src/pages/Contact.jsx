
/**
 * @file Contact.jsx
 * @author Brendan Dileo
 * 
 * The Contact page for the portfolio website, allowing users to contact me.
*/

import Header from '../components/common/Header';
import ContactForm from '../components/Contact/ContactForm';

import LoadingSpinner from '../components/Spinner/LoadingSpinner';
import useLoading from '../hooks/useLoading';

import { motion } from "framer-motion"
import PageWrapper from "../components/common/PageWrapper";


const Contact = () => {

    const isLoading = useLoading(500);
    if (isLoading) return <LoadingSpinner />;

    return (
        <PageWrapper>
            <div className='relative z-10 w-full'>
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
            </div>
            <motion.div
                className="relative z-10 w-[95%] md:w-4/5 lg:w-3/5 min-h-[480px] bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-[0_0_20px_rgba(120,119,198,0.25)] flex flex-col border border-slate-700 overflow-hidden font-mono mx-auto mt-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="h-8 bg-slate-800 flex items-center justify-center relative text-white text-sm font-bold">
                    <div className="absolute left-4 flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span>contact-form.sh</span>
                </div>
                <ContactForm />
            </motion.div>
        </PageWrapper>
    );
};

export default Contact;
