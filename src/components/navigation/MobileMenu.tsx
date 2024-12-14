import React from 'react';
import { X, Languages } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../data/content';
import { scrollToSection } from '../../utils/scroll';
import { getNavigationMap } from '../../utils/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { language, dir, setLanguage } = useLanguage();
  const { navbar } = content[language];
  const navigate = useNavigate();
  const location = useLocation();
  const navigationMap = getNavigationMap(language);

  const handleNavigation = (label: string) => {
    const path = navigationMap[label.toLowerCase()];
    onClose();

    setTimeout(() => {
      if (path === 'projects') {
        navigate('/projects');
      } else if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(path);
        }, 100);
      } else {
        scrollToSection(path);
      }
    }, 300);
  };

  return (
    <div 
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className={`fixed inset-y-0 ${dir === 'rtl' ? 'right-0' : 'left-0'} w-[280px] bg-white shadow-xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : dir === 'rtl' ? 'translate-x-full' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className={`p-4 flex ${dir === 'rtl' ? 'justify-start' : 'justify-end'}`}>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-black transition-colors z-[999]"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-6">
          {navbar.links.map((link) => (
            <button
              key={link}
              onClick={() => handleNavigation(link)}
              className={`block w-full py-4 text-lg text-gray-600 hover:text-black transition-colors ${
                dir === 'rtl' ? 'text-right' : 'text-left'
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Language Toggle */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
          <button
            onClick={() => {
              setLanguage(language === 'en' ? 'ar' : 'en');
              onClose();
            }}
            className="flex items-center gap-2 w-full py-3 px-4 text-gray-600 hover:text-black transition-colors rounded-full border border-gray-200 hover:border-gray-900"
          >
            <Languages size={20} />
            <span>{language === 'en' ? 'عربي' : 'English'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;