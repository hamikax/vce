
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';
  
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      label: t('contact.address'),
      value: language === 'ar' ? "123 شارع الإنشاءات، مصراتة، ليبيا" : "123 Construction Street, Misurata, Libya"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: t('contact.phone.label'),
      value: "+218 91 234 5678"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: t('contact.email.label'),
      value: "info@vce-construction.com"
    }
  ];

  return (
    <section id="contact" className="vce-section">
      <div className="vce-container">
        <h2 className="vce-heading text-center">{t('contact.title')}</h2>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-lg p-8 shadow-md" dir={textDirection}>
            <h3 className="text-2xl font-bold mb-6 text-vce-blue">{t('contact.info')}</h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-vce-blue">
                    {info.icon}
                  </div>
                  <div className={`${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
                    <p className="font-medium text-lg">{info.label}</p>
                    <p className="text-gray-600 text-lg">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map (Placeholder) */}
            <div className="h-72 bg-gray-200 rounded-lg overflow-hidden mt-8">
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center p-4">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-vce-red" />
                  <p className="text-gray-600">{language === 'ar' ? 'خريطة مصراتة، ليبيا' : 'Map of Misurata, Libya'}</p>
                  <p className="text-sm text-gray-500">{language === 'ar' ? '(ستظهر هنا خريطة تفاعلية)' : '(Interactive map would appear here)'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
