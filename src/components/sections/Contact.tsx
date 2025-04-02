
import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
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
      value: "+218 0912179069 / +218 0912229069"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: t('contact.email.label'),
      value: "Vivian.pe.co@gmail.com"
    }
  ];

  const mapUrl = "https://maps.app.goo.gl/UJrbitZog7ogtP688?g_st=com.google.maps.preview.copy";

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
            
            {/* Google Maps Link */}
            <div className="mt-8">
              <a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full p-4 bg-vce-blue text-white rounded-lg hover:bg-vce-blue/90 transition-colors"
              >
                <MapPin className="mr-2" />
                {language === 'ar' ? 'عرض الموقع على الخريطة' : 'View Location on Map'}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
