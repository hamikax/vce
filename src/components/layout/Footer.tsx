
import React from 'react';
import { Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1DznPR5Q8D/?mibextid=wwXIfr", label: "Facebook" },
  ];

  return (
    <footer className="bg-vce-blue text-white">
      <div className="vce-container pt-16 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" dir={textDirection}>
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h2 className="text-3xl font-bold mb-1">VCE</h2>
              <p className="text-sm">{language === 'ar' ? "شركة فيفيان للإنشاءات والاعمال الهندسية" : "Vivian Construction & Engineering Services"}</p>
            </div>
            <p className="mb-4 text-gray-300">
              {t('footer.tagline')}
            </p>
            <div className={`flex ${language === 'ar' ? 'space-x-reverse' : 'space-x-3'}`}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className={`bg-white/10 hover:bg-vce-red transition-colors duration-300 p-2 rounded ${language === 'ar' ? 'ml-3' : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>{t('footer.address')}</p>
              <p>{t('footer.city')}</p>
              <p>{t('footer.phone')}</p>
              <p>{t('footer.email')}</p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-white/20 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center">
            {t('footer.copyright').replace('{year}', currentYear.toString())} | 
            <img 
              src="/lovable-uploads/47f3dc8c-3817-48b0-80d1-10826321dcd6.png" 
              alt="SKY LO" 
              className="h-40 ml-2 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" 
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
