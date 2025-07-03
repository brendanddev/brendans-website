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

      <Button
        onClick={() => setModalOpen(true)}
        className="relative z-10 inline-block px-8 py-3 mt-6 mb-6 text-lg font-semibold"
      >
        Read About My Projects
      </Button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl font-bold text-green-400 mb-4">Projects</h2>
        <pre className="whitespace-pre-wrap text-gray-300 text-sm max-h-[60vh] overflow-y-auto">
        {`This is placeholder project content.

            • Project 1:
        
        More details coming soon...
        `}
        </pre>
      </Modal>

      <ProjectsGrid />
    </PageWrapper>
  );
};

export default Projects;
