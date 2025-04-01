
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="text-vce-blue hover:text-vce-red transition-colors duration-300 flex items-center"
      aria-label="Switch Language"
    >
      {t('language.switch')}
    </button>
  );
};

export default LanguageSwitcher;
