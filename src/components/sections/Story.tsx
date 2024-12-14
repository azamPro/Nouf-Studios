import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import FadeInSection from '../animations/FadeInSection';
import { getOptimizedImageUrl } from '../../utils/imageLoader';

const Story = () => {
  const { language, dir } = useLanguage();
  const { story } = content[language];

  return (
    <section id="about" className="py-20 bg-white">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className={`flex flex-col lg:flex-row items-center gap-12 ${
            dir === 'rtl' ? 'lg:flex-row-reverse' : ''
          }`}>
            {/* Text Content */}
            <div className={`lg:w-1/2 w-full text-center lg:text-${dir === 'rtl' ? 'right' : 'left'}`}>
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">{story.title}</h2>
              <h3 className="text-xl font-playfair text-gray-600 mb-6">{story.subtitle}</h3>
              <p className="text-gray-600 leading-relaxed">{story.description}</p>
            </div>
            
            {/* Image */}
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={getOptimizedImageUrl(story.image)}
                  alt="Our Story"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Story;