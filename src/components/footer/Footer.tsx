import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import ContactInfo from './ContactInfo';
import QuickLinks from './QuickLinks';
import SocialLinks from './SocialLinks';
import FadeInSection from '../animations/FadeInSection';

const Footer = () => {
  const { language } = useLanguage();
  const { footer } = content[language];

  return (
    <FadeInSection>
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <ContactInfo contact={footer.contact} />
            <QuickLinks title={footer.quickLinks.title} links={footer.quickLinks.links} />
            <div>
              <h3 className="text-xl font-playfair mb-6">{footer.social.title}</h3>
              <SocialLinks social={footer.social} />
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>{footer.copyright}</p>
          </div>
        </div>
      </footer>
    </FadeInSection>
  );
};

export default Footer;