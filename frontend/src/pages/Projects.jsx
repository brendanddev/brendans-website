
/**
 * @file Projects.jsx
 * @author Brendan Dileo, July 2025
 * 
 * The projects page for my portfolio website, showcasing my work and 
 * passion projects
 */

import { useState } from "react";
import Header from "../components/Header/Header";
import PageWrapper from "../components/common/PageWrapper";
import Button from "../components/common/Button";
import ProjectsGrid from "../components/Projects/ProjectsGrid";
import Modal from "../components/common/Modal";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";
import useLoading from "../hooks/useLoading";
import { motion } from "framer-motion";

const Projects = () => {
  const isLoading = useLoading(500);
  const [modalOpen, setModalOpen] = useState(false);

  // Shows the loading spinner if the page is loading
  if (isLoading) return <LoadingSpinner />;

  return (
    <PageWrapper>
      <motion.div 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1 }}
        className="relative z-10 w-full"
      >
        <Header title="My Projects" subtitle="A collection of my work and passion projects." />
      </motion.div>

     <div className="flex justify-center">
        {/* Button to trigger modal */}
        <Button
            onClick={() => setModalOpen(true)}
            className="relative z-10 px-8 py-3 mt-6 mb-6 text-lg font-semibold"
        >
            Read About My Projects
        </Button>
    </div>

      {/* Displays the modal and its content */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl font-bold text-green-400 mb-4">Projects</h2>
        <p className="text-gray-300 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
          Over the past couple of years, I've worked on a variety of projects, ranging from
          school assignments to personal projects that helped me learn, as well as passion projects.
          The time and effort I've put into these projects has paid off, allowing me to grow as a developer.
          Below, you'll find a few of my personal and passion projects.
        </p>
      </Modal>

      <ProjectsGrid />
    </PageWrapper>
  );
};

export default Projects;
