
/**
 * @file Highlights.jsx
 * @author Brendan Dileo, July 2025
 * 
 * The highlights page for my website
 */

import Header from "../components/common/Header";
import PageWrapper from "../components/common/PageWrapper";
import DottedGridSection from "../components/Highlights/DottedGridSection";
import SkillProficiencySection from "../components/Highlights/SkillProficiencySection";

const Highlights = () => {

    return (
        <PageWrapper>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Header 
                    title="Highlights"
                    subtitle="A showcase of my key achievements and experiences."
                />
            </div>
            <div className="mt-8 sm:mt-12 px-4 sm:px-6 lg:px-8">
                
                {/* Dotted grid section showcasing key highlights */}
                <DottedGridSection />
            </div>
        </PageWrapper>
    );
};

export default Highlights;