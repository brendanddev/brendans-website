
/**
 * @file About.jsx
 * @author Brendan Dileo
 * 
 * The About page for my portfolio-website
*/

import Header from "../components/Header/Header";
import PageWrapper from "../components/common/PageWrapper";
import Modal from "../components/common/Modal";
import IntroActions from "../components/About/IntroActions";
import EducationCard from "../components/About/EducationCard";
import SkillsCard from "../components/About/SkillsCard";
import LoadingSpinner from '../components/Spinner/LoadingSpinner';

import { useState } from "react";
import useLoading from '../hooks/useLoading';


const About = () => {
  const [modalOpen, setModalOpen] = useState(false); 
  
  const isLoading = useLoading(500);
  if (isLoading) return <LoadingSpinner />;

  return (
    <PageWrapper>
      <div className="relative z-10 w-full max-w-5xl text-center">
        <Header
          title="About Me"
          subtitle="Who am I? Here's a bit about me."
        />

        <IntroActions onReadStory={() => setModalOpen(true)} />

        {/* Modal */}
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-2xl font-bold text-green-400 mb-4">My Story</h2>
          <p className="text-gray-300">
            Hi, I'm a Software Development student and Aspiring Full Stack Developer with a passion for technology and creating.
          </p>
        </Modal>

        {/* Education Section */}
        <EducationCard />

        {/* Skills Section */}
        <SkillsCard />
      </div>
    </PageWrapper>
  );
};

export default About;