import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import { Quote } from 'lucide-react';
import FadeInSection from '../animations/FadeInSection';
import { getOptimizedImageUrl } from '../../utils/imageLoader';

const Testimonials = () => {
  const { language, dir } = useLanguage();
  const { testimonials } = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16">
            {testimonials.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.list.map((testimonial, index) => (
              <div key={index} className={`p-8 bg-gray-50 rounded-2xl ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                <Quote size={32} className="text-black mb-4" />
                <p className="text-gray-600 font-inter mb-6">{testimonial.text}</p>
                <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <img
                    src={getOptimizedImageUrl(testimonial.avatar, { width: 48 })}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-playfair text-black">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Testimonials;