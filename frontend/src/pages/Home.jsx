
/**
 * @file Home.jsx
 * @author Brendan Dileo 
 * 
 * The home page to my portfolio-website
*/

import Terminal from '../components/Terminal/Terminal';
import Header from '../components/common/Header';
import PageWrapper from "../components/common/PageWrapper";

import LoadingSpinner from '../components/Spinner/LoadingSpinner';
import useLoading from '../hooks/useLoading';

const Home = () => {

    const isLoading = useLoading(500);
    if (isLoading) return <LoadingSpinner />;

    return (
        <PageWrapper>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <Header 
                    title="Brendan Dileo" 
                    subtitle="Software Developer | Tech Enthusiast"
                    typedTexts={[
                        "Welcome to my portfolio-website!", 
                        "Want to know more about me? Enter a command into the terminal!",
                        "I am passionate about technology, coding, and solving complex problems."
                    ]}
                />
                <div className="w-full flex justify-center mt-8">
                    <Terminal />
                </div>
            </div>
        </PageWrapper>
    );
};

export default Home;