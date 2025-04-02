
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Contact = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  
  // Coordinates for the location (Misrata, Libya)
  // These coordinates correspond to https://maps.app.goo.gl/UJrbitZog7ogtP688
  const coordinates = [15.0925, 32.3751]; // [longitude, latitude]
  
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // You need to replace this with your actual Mapbox public token
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXRva2VuIiwiYSI6ImV4YW1wbGV0b2tlbiJ9.exampletoken';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates,
      zoom: 14
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Add marker at the location
    new mapboxgl.Marker({ color: '#E11D48' })
      .setLngLat(coordinates)
      .addTo(map.current);
      
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);
  
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
            
            {/* Interactive Map */}
            <div className="h-72 bg-gray-100 rounded-lg overflow-hidden mt-8">
              <div ref={mapContainer} className="w-full h-full" />
              <p className="text-sm text-center mt-2 text-gray-500">
                {language === 'ar' 
                  ? 'يرجى استبدال مفتاح Mapbox بمفتاحك الخاص للعرض الصحيح للخريطة' 
                  : 'Please replace the Mapbox token with your own for proper map display'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
