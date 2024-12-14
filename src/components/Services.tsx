import React from 'react';
import { Palette, Home, Lightbulb } from 'lucide-react';
import ServiceCard from './services/ServiceCard';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

const serviceIcons = [
  <Palette className="w-8 h-8" />,
  <Home className="w-8 h-8" />,
  <Lightbulb className="w-8 h-8" />
];

const Services = () => {
  const { language } = useLanguage();
  const { services } = content[language];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">
          {services.title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {services.list.map((service, index) => (
            <ServiceCard
              key={service.name}
              icon={serviceIcons[index]}
              title={service.name}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;