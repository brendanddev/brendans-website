
/**
 * @file About.jsx
 * @author Brendan Dileo
 * 
 * The About page for my portfolio website
*/

import Header from '../components/Header';
import EducationSection from '../components/About/EducationSection';
import SkillsSection from '../components/About/SkillsSection';
import ResumeSection from '../components/About/ResumeSection';
import AboutMeSection from '../components/About/AboutSection';
import AboutModal from '../components/About/AboutModal';
import { educationData, skillsData } from '../data/aboutData';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <Header title="ABOUT ME" subtitle="Get to know me" />

        <motion.div className="max-w-6xl mx-auto space-y-8" variants={containerVariants} initial="hidden" animate="visible">
          <EducationSection data={educationData} itemVariants={itemVariants} />
          <SkillsSection data={skillsData} itemVariants={itemVariants} />
          <ResumeSection itemVariants={itemVariants} />
          <AboutMeSection itemVariants={itemVariants} openModal={() => setIsModalOpen(true)} />
        </motion.div>

        <AboutModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default About;
