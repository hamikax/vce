
import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

interface ContactInfo {
  id: string;
  type: string;
  label: string;
  value: string;
  icon: string;
  order_index: number;
}

const Contact = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';
  const { toast } = useToast();
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('contact_info')
          .select('*')
          .eq('language', language)
          .order('order_index', { ascending: true });

        if (error) {
          console.error('Error fetching contact info:', error);
          toast({
            title: "Error",
            description: "Failed to load contact information. Please try again.",
            variant: "destructive",
          });
          return;
        }

        setContactInfo(data || []);
      } catch (error) {
        console.error('Exception when fetching contact info:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContactInfo();
  }, [language, toast]);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="h-6 w-6" />;
      case 'Phone':
        return <Phone className="h-6 w-6" />;
      case 'Mail':
        return <Mail className="h-6 w-6" />;
      default:
        return <Mail className="h-6 w-6" />;
    }
  };

  const mapUrl = "https://maps.app.goo.gl/UJrbitZog7ogtP688?g_st=com.google.maps.preview.copy";

  return (
    <section id="contact" className="vce-section">
      <div className="vce-container">
        <h2 className="vce-heading text-center">{t('contact.title')}</h2>
        
        <div className="max-w-lg mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-lg p-8 shadow-md" dir={textDirection}>
            <h3 className="text-2xl font-bold mb-6 text-vce-blue">{t('contact.info')}</h3>
            
            {isLoading ? (
              <div className="space-y-8 animate-pulse">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-gray-200 w-6 h-6 rounded"></div>
                  <div className={`${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
                    <p className="h-4 bg-gray-200 rounded w-24 mb-2"></p>
                    <p className="h-4 bg-gray-200 rounded w-48"></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-gray-200 w-6 h-6 rounded"></div>
                  <div className={`${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
                    <p className="h-4 bg-gray-200 rounded w-24 mb-2"></p>
                    <p className="h-4 bg-gray-200 rounded w-48"></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-gray-200 w-6 h-6 rounded"></div>
                  <div className={`${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
                    <p className="h-4 bg-gray-200 rounded w-24 mb-2"></p>
                    <p className="h-4 bg-gray-200 rounded w-48"></p>
                  </div>
                </div>
              </div>
            ) : contactInfo.length > 0 ? (
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.id} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-vce-blue">
                      {getIconComponent(info.icon)}
                    </div>
                    <div className={`${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
                      <p className="font-medium text-lg">{info.label}</p>
                      <p className="text-gray-600 text-lg">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No contact information available.</p>
            )}
            
            {/* Google Maps Link */}
            <div className="mt-8">
              <Button 
                variant="vce"
                animation="bounce"
                className="flex items-center justify-center w-full p-4 rounded-lg"
                asChild
              >
                <a 
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2" />
                  {language === 'ar' ? 'عرض الموقع على الخريطة' : 'View Location on Map'}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
