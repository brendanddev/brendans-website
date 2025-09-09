
/**
 * @file Projects.jsx
 * @author Brendan Dileo 
 * 
 * The projects page for my portfolio-website
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData, categories } from '../data/projectsData';
import { containerVariants, itemVariants, projectCardVariants } from '../animations/projectsVariants';

import Header from '../components/Header';
import CategoryFilter from '../components/Projects/CategoryFilter';
import ProjectModal from '../components/Projects/ProjectModal';
import ProjectsGrid from '../components/Projects/ProjectsGrid';


const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = selectedCategory === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === selectedCategory);

    
    return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        
        {/* Page Header */}
        <Header 
          title="MY PROJECTS"
          subtitle="Explore my work"
        />

        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-8">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </motion.div>

          {/* Projects Grid */}
          <ProjectsGrid
            projects={filteredProjects}
            onSelectProject={setSelectedProject}
            projectCardVariants={projectCardVariants}
          />
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </div>
  );
};

export default Projects;