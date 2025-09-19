
/**
 * @file About.jsx
 * @author Brendan Dileo
 * 
 * The About page for my portfolio website
*/


import { useState } from 'react';
import { motion } from 'framer-motion';
import { educationData, skillsData } from '../data/aboutData';
import { containerVariants, itemVariants } from '../animations/aboutVariants';

import Header from '../components/Core/Header';
import EducationSection from '../components/About/EducationSection';
import SkillsSection from '../components/About/SkillsSection';
import ResumeSection from '../components/About/ResumeSection';
import AboutMeSection from '../components/About/AboutSection';
import AboutModal from '../components/About/AboutModal';


const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <Header title="ABOUT ME" subtitle="Get to know me" />

        <motion.div className="max-w-6xl mx-auto space-y-8" variants={containerVariants} initial="hidden" animate="visible">
          <EducationSection data={educationData} itemVariants={itemVariants} />
          <SkillsSection data={skillsData} itemVariants={itemVariants} />
          <AboutMeSection itemVariants={itemVariants} openModal={() => setIsModalOpen(true)} />
          <ResumeSection itemVariants={itemVariants} />
        </motion.div>

        <AboutModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default About;
