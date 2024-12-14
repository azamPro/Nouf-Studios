import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { useScroll } from '../hooks/useScroll';
import LanguageToggle from './LanguageToggle';
import NavLinks from './navigation/NavLinks';
import MobileMenu from './navigation/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll(20);
  const { language, dir } = useLanguage();
  const { navbar } = content[language];
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className={`${dir === 'rtl' ? 'order-3 ml-auto' : 'order-1'}`}>
            <button 
              onClick={handleLogoClick}
              className="text-2xl font-playfair text-black"
            >
              {navbar.logo}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center order-2">
            <div className="flex items-center space-x-8">
              <NavLinks links={navbar.links} />
            </div>
          </nav>

          {/* Language Toggle and Mobile Menu Button */}
          <div className={`${dir === 'rtl' ? 'order-1' : 'order-3 ml-auto'} flex items-center gap-4`}>
            <div className="hidden lg:block">
              <LanguageToggle />
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;