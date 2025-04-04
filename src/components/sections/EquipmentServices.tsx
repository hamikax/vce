
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

const EquipmentServices = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <section id="equipment-services" className="vce-section bg-gray-50 py-12">
      <div className="vce-container">
        <h2 className="vce-heading text-center">{language === 'ar' ? 'خدماتنا الإضافية' : 'Our Services'}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8" dir={textDirection}>
          {/* Vivian Exports Company */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4 text-vce-blue">Vivian Exports Company</h3>
            <img 
              src="/lovable-uploads/ef14481f-0c89-41f6-a79f-c954677721aa.png"
              alt="Vivian Exports Company" 
              className="rounded-lg shadow-lg w-full max-h-64 object-contain mb-6"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
                e.currentTarget.classList.add("border", "border-gray-200");
              }}
            />
            <p className="text-lg text-gray-700 mb-4">
              {language === 'ar' 
                ? 'فيفيان للإنشاءات والأعمال الهندسية، نوفر لك خدمة شراء الآلات الثقيلة لتلبية احتياجات مشاريعك الإنشائية والصناعية. سواء كنت تبحث عن حفارات، جرافات، رافعات، أو أي معدات أخرى، نساعدك في اختيار أفضل الحلول بأعلى جودة وأفضل الأسعار'
                : 'Vivian Construction & Engineering provides heavy machinery procurement services to meet the needs of your construction and industrial projects. Whether you are looking for excavators, bulldozers, cranes, or any other equipment, we help you choose the best solutions with the highest quality and best prices.'
              }
            </p>
            <a 
              href="https://www.facebook.com/share/1A9p7MFpdQ/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="vce-btn vce-btn-primary flex items-center justify-center gap-2 w-full md:w-auto"
            >
              {language === 'ar' ? 'زيارة صفحة الفيسبوك' : 'Visit Facebook Page'} 
              <ExternalLink size={18} />
            </a>
          </div>
          
          {/* Vivian Petroleum Company */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4 text-vce-blue">Vivian Petroleum Company</h3>
            <img 
              src="/lovable-uploads/df44bc3a-9a03-420c-a8e2-678a63496d43.png"
              alt="Vivian Petroleum Company" 
              className="rounded-lg shadow-lg w-full max-h-64 object-contain mb-6"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
                e.currentTarget.classList.add("border", "border-gray-200");
              }}
            />
            <p className="text-lg text-gray-700 mb-4">
              {language === 'ar' 
                ? 'شركة فيفيان للخدمات النفطية المتخصصة في جميع الأعمال النفطية المتنوعة من صيانة وتطوير و إنشاء و تشغيل'
                : 'Vivian Petroleum Company specializes in various petroleum services including maintenance, development, construction, and operations.'
              }
            </p>
            <a 
              href="https://www.facebook.com/share/12KftC3tVoz/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="vce-btn vce-btn-primary flex items-center justify-center gap-2 w-full md:w-auto"
            >
              {language === 'ar' ? 'زيارة صفحة الفيسبوك' : 'Visit Facebook Page'} 
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentServices;
