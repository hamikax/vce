
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: "الرئيسية", href: "#home" },
    { name: "من نحن", href: "#about" },
    { name: "الخدمات", href: "#services" },
    { name: "المشاريع", href: "#projects" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full py-4 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <div className="vce-container flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <h1 className="text-3xl font-bold text-vce-blue ml-2">VCE</h1>
            <span className="hidden md:block text-sm text-vce-black">فيفيان للإنشاءات والهندسة</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6" dir="rtl">
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
          <a 
            href="#contact" 
            className="vce-btn vce-btn-primary"
          >
            احصل على عرض سعر
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4" dir="rtl">
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
          <a 
            href="#contact" 
            className="vce-btn vce-btn-primary mt-4"
            onClick={toggleMenu}
          >
            احصل على عرض سعر
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
