
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';
  
  const stats = [
    { label: t('about.stats.founded'), value: "2019" },
    { label: t('about.stats.location'), value: language === 'ar' ? "مصراتة" : "Misurata" },
    { label: t('about.stats.projects'), value: "+20" },
    { label: t('about.stats.team'), value: "+20" },
  ];

  return (
    <section id="about" className="vce-section bg-gray-50">
      <div className="vce-container">
        <h2 className="vce-heading text-center">{t('about.title')}</h2>
        
        <div className={`grid md:grid-cols-2 gap-12 items-center`} dir={textDirection}>
          {/* Content */}
          <div>
            <p className="text-lg mb-6">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg mb-6">
              {t('about.paragraph2')}
            </p>
            <p className="text-lg">
              {t('about.paragraph3')}
            </p>
          </div>
          
          {/* Stats */}
          <div className="bg-vce-red text-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">{t('about.stats.title')}</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
