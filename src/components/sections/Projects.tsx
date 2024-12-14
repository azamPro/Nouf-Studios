import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import FadeInSection from '../animations/FadeInSection';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { language } = useLanguage();
  const { projects } = content[language];

  return (
    <section id="projects" className="py-20 bg-[#0f0a14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 text-white">
            {projects.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.list.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Projects;