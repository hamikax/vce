
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <Button 
      onClick={toggleLanguage}
      variant="ghost"
      animation="wiggle"
      className="text-vce-blue hover:text-vce-red transition-colors duration-300 flex items-center"
      aria-label="Switch Language"
    >
      <Globe className="mr-2" />
      {t('language.switch')}
    </Button>
  );
};

export default LanguageSwitcher;
