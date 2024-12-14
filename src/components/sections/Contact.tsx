import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import FadeInSection from '../animations/FadeInSection';

const Contact = () => {
  const { language, dir } = useLanguage();
  const { contact } = content[language];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <FadeInSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">{contact.title}</h1>
            <p className="text-gray-600 text-lg">{contact.subtitle}</p>
          </div>

          <div className={`flex flex-col lg:flex-row gap-12 ${
            dir === 'rtl' ? 'lg:flex-row-reverse' : ''
          }`}>
            <div className="lg:w-2/3">
              <ContactForm form={contact.form} />
            </div>
            <div className="lg:w-1/3">
              <ContactInfo info={contact.info} />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;