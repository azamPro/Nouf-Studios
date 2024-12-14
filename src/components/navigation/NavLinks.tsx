import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { scrollToSection } from '../../utils/scroll';
import { getNavigationMap } from '../../utils/navigation';

interface NavLinksProps {
  links: string[];
  className?: string;
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, className = '', onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();
  const navigationMap = getNavigationMap(language);

  const handleNavigation = (label: string) => {
    const path = navigationMap[label.toLowerCase()];
    
    if (onClick) onClick();

    if (path === 'projects') {
      navigate('/projects');
      return;
    }

    // For other links, navigate to home and scroll to section
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(path);
      }, 100);
    } else {
      scrollToSection(path);
    }
  };

  return (
    <>
      {links.map((label) => (
        <button
          key={label}
          onClick={() => handleNavigation(label)}
          className={`text-gray-600 hover:text-black transition-colors font-inter ${className}`}
        >
          {label}
        </button>
      ))}
    </>
  );
};

export default NavLinks;