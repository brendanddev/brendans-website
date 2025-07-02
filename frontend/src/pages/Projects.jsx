
/**
 * @file Projects.jsx
 * @author Brendan Dileo 
 * 
 * The projects page for my portfolio-website
*/

import Header from "../components/Header/Header";
import PageWrapper from "../components/common/PageWrapper";
import Button from "../components/common/Button";
import ProjectsGrid from "../components/Projects/ProjectsGrid";

import LoadingSpinner from '../components/Spinner/LoadingSpinner';
import useLoading from '../hooks/useLoading';

import { motion } from "framer-motion";

const Projects = () => {

    const isLoading = useLoading(500);
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
                as="a"
                href="/projects.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-block px-8 py-3 mt-6 mb-6 text-lg font-semibold"
            >
                Read About My Projects
            </Button>
            <ProjectsGrid />
        </PageWrapper>
    );
};

export default Projects;
