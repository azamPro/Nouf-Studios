import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { language, dir } = useLanguage();
  const { hero } = content[language];

  return (
    <section className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Text Content */}
        <div className="py-20 text-center max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 font-inter">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-4 bg-black text-white font-inter rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2">
              {hero.cta}
              <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[600px] w-full">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
            alt="Modern interior design"
            className="w-full h-full object-cover rounded-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;