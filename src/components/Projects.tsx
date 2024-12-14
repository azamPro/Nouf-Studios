import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const Projects = () => {
  const { language } = useLanguage();
  const { projects } = content[language];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">
          {projects.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.list.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl font-playfair text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 font-inter">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;