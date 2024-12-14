import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import ProjectCard from '../components/sections/ProjectCard';
import FadeInSection from '../components/animations/FadeInSection';
import { ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  const { language, dir } = useLanguage();
  const { projects } = content[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(projects.list.map(project => project.category))];
  const filteredProjects = selectedCategory === 'all' 
    ? projects.list 
    : projects.list.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <FadeInSection>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-black mb-6">
                {projects.title}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                Transforming spaces into extraordinary environments that inspire and delight
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <FadeInSection>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <FadeInSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-[#0f0a14] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <FadeInSection>
            <div className={`flex flex-col lg:flex-row items-center gap-12 ${
              dir === 'rtl' ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-playfair mb-6">Our Design Process</h2>
                <div className="space-y-8">
                  {[
                    {
                      title: "1. Initial Consultation",
                      description: "We begin with a detailed discussion to understand your vision, requirements, and budget."
                    },
                    {
                      title: "2. Concept Development",
                      description: "Our team creates detailed design concepts that align with your goals and aesthetic preferences."
                    },
                    {
                      title: "3. Design Refinement",
                      description: "We refine the designs based on your feedback, ensuring every detail meets your expectations."
                    },
                    {
                      title: "4. Implementation",
                      description: "Our experienced team brings the design to life with meticulous attention to detail."
                    }
                  ].map((step, index) => (
                    <div key={index} className={`flex gap-6 ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-lg font-playfair">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
                  alt="Design Process"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <FadeInSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">Ready to Start Your Project?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's work together to create a space that reflects your vision and exceeds your expectations.
              </p>
              <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;