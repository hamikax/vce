
import React from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/fe9d4a13-878b-4e19-baac-233cf804c1db.png")',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="vce-container relative z-10 text-white">
        <div className={`max-w-3xl ${language === 'en' ? 'text-left' : ''}`} dir={textDirection}>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in",
            "opacity-0 [animation-delay:0.2s]"
          )}>
            {t('hero.title')}
          </h2>
          
          <div className={cn(
            "flex flex-wrap items-center text-lg md:text-xl mb-8 animate-fade-in",
            "opacity-0 [animation-delay:0.4s]"
          )}>
            <span className={`flex items-center ${language === 'ar' ? 'mr-4' : 'mr-4'} mb-2`}>
              <span className="text-vce-red font-bold mr-2">+20</span> {t('hero.workers')}
            </span>
            <span className="w-2 h-2 rounded-full bg-vce-red mx-2 hidden md:block"></span>
            
            <span className={`flex items-center ${language === 'ar' ? 'mr-4' : 'mr-4'} mb-2`}>
              <span className="text-vce-red font-bold mr-2">+20</span> {t('hero.machines')}
            </span>
            <span className="w-2 h-2 rounded-full bg-vce-red mx-2 hidden md:block"></span>
            
            <span className={`flex items-center ${language === 'ar' ? 'mr-4' : 'mr-4'} mb-2`}>
              <span className="text-vce-red font-bold mr-2">+20</span> {t('hero.projects')}
            </span>
            <span className="w-2 h-2 rounded-full bg-vce-red mx-2 hidden md:block"></span>
            
            <span className="flex items-center mb-2">
              <span className="text-vce-red font-bold mr-2">{t('hero.location')}</span> {t('hero.country')}
            </span>
          </div>
          
          <div className={cn(
            "flex flex-wrap gap-4 animate-fade-in",
            "opacity-0 [animation-delay:0.6s]"
          )}>
            <a href="#services" className="vce-btn vce-btn-primary">
              {t('hero.services')}
            </a>
            <a href="#projects" className="vce-btn bg-transparent border-2 border-white hover:bg-white hover:text-vce-blue transition-all duration-300">
              {t('hero.viewProjects')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white">
          <span className="mb-2 text-sm">{t('hero.scrollDown')}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
