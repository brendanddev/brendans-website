
/**
 * @file About.jsx
 * @author Brendan Dileo
 * 
 * Enhanced About page with modern design, improved UX, and visual storytelling
*/

import Header from "../components/Header/Header";
import PageWrapper from "../components/common/PageWrapper";
import IntroActions from "../components/About/IntroActions";
import EducationCard from "../components/About/EducationCard";
import SkillsCard from "../components/About/SkillsCard";
import StoryModal from "../components/About/StoryModal";
import LoadingSpinner from '../components/Spinner/LoadingSpinner';

import DottedGridSection from "../components/About/DottedGridSection";

import { useState } from "react";
import useLoading from '../hooks/useLoading';
import { motion } from "framer-motion";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false); 
  
  const isLoading = useLoading(500);
  if (isLoading) return <LoadingSpinner />;

  return (
    <PageWrapper>
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <Header
            title="About Me"
            subtitle="Who am I? Here's a bit about me."
          />
        </motion.div>

        {/* Action buttons */}
        <IntroActions onReadStory={() => setModalOpen(true)} />

        {/* Content sections */}
        <div className="space-y-16">
          {/* Education section */}
          <EducationCard />

          {/* Skills section */}
          <SkillsCard />

          <DottedGridSection />
        </div>

        {/* Story modal triggered by button */}
        <StoryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </PageWrapper>
  );
};

export default About;