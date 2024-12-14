import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import { Instagram as InstagramIcon } from 'lucide-react';
import FadeInSection from '../animations/FadeInSection';

const Instagram = () => {
  const { language } = useLanguage();
  const { instagram } = content[language];

  return (
    <FadeInSection>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">{instagram.title}</h2>
            <p className="text-gray-600">{instagram.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {instagram.images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
            >
              <InstagramIcon size={20} />
              {instagram.cta}
            </a>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Instagram;