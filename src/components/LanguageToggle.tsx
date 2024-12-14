import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 hover:border-gray-900 bg-white text-gray-900 transition-all duration-300"
      aria-label="Toggle language"
    >
      <Languages 
        size={16} 
        className="text-gray-600 group-hover:text-black transition-colors duration-300" 
      />
      <span className="text-sm font-medium">
        {language === 'en' ? 'عربي' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;