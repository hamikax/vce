
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

const EquipmentServices = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <section id="equipment-services" className="vce-section bg-gray-50">
      <div className="vce-container">
        <h2 className="vce-heading text-center">{language === 'ar' ? 'خدماتنا الإضافية' : 'Our Services'}</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8" dir={textDirection}>
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/908bbc3c-e5b0-4647-80ed-809b15c21a5b.png"
              alt="Heavy Equipment Services" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2 space-y-4">
            <p className="text-lg text-gray-700">
              {language === 'ar' 
                ? 'فيفيان للإنشاءات والأعمال الهندسية، نوفر لك خدمة شراء الآلات الثقيلة لتلبية احتياجات مشاريعك الإنشائية والصناعية. سواء كنت تبحث عن حفارات، جرافات، رافعات، أو أي معدات أخرى، نساعدك في اختيار أفضل الحلول بأعلى جودة وأفضل الأسعار'
                : 'Vivian Construction & Engineering provides heavy machinery procurement services to meet the needs of your construction and industrial projects. Whether you are looking for excavators, bulldozers, cranes, or any other equipment, we help you choose the best solutions with the highest quality and best prices.'
              }
            </p>
            
            <div className="mt-6">
              <a 
                href="https://www.facebook.com/share/1A9p7MFpdQ/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="vce-btn vce-btn-primary flex items-center justify-center gap-2"
              >
                {language === 'ar' ? 'زيارة صفحة الفيسبوك' : 'Visit Facebook Page'} 
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentServices;
