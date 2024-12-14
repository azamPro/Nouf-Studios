import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import { ArrowRight } from 'lucide-react';
import FadeInSection from '../animations/FadeInSection';
import { getOptimizedImageUrl } from '../../utils/imageLoader';

const Hero = () => {
  const { language, dir } = useLanguage();
  const { hero } = content[language];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const headerOffset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <FadeInSection>
          <div className="py-20 text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 font-inter">
              {hero.subtitle}
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-black text-white font-inter rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2"
              >
                {hero.cta}
                <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
              </button>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px]">
            <img
              src={getOptimizedImageUrl('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')}
              alt="Modern interior design"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;