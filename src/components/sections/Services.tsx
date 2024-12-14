import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import ServiceCard from './ServiceCard';
import FadeInSection from '../animations/FadeInSection';

export const Services = () => {
  const { language } = useLanguage();
  const { services } = content[language];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">
            {services.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {services.list.map((service) => (
              <ServiceCard
                key={service.name}
                name={service.name}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Services;