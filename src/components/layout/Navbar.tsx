
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  const textDirection = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <nav 
      className={cn(
        "fixed w-full py-4 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <div className="vce-container flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-bold text-vce-blue">VCE</h1>
            <span className="hidden md:block text-sm text-vce-black">
              {language === 'ar' ? 'شركة فيفيان للإنشاءات والاعمال الهندسية' : 'Vivian Construction & Engineering Services'}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <LanguageSwitcher />
          <div className={`flex space-x-6 ${language === 'ar' ? 'flex-row-reverse' : ''}`} dir={textDirection}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-vce-blue hover:text-vce-red transition-colors duration-300 mx-3"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitcher />
          <button
            onClick={toggleMenu}
            className="text-vce-blue focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 transition-transform duration-300 transform md:hidden",
        isOpen ? "translate-x-0" : language === 'ar' ? "translate-x-full" : "translate-x-full"
      )}>
        <div className={`flex flex-col h-full justify-center items-center space-y-8 p-4`} dir={textDirection}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-vce-blue hover:text-vce-red"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
