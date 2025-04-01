
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بنا',
    'nav.getQuote': 'احصل على عرض سعر',
    
    // Hero
    'hero.title': 'هندسة دقيقة منذ عام 2019',
    'hero.workers': 'عامل',
    'hero.machines': 'آلة',
    'hero.projects': 'مشروع',
    'hero.location': 'مصراتة،',
    'hero.country': 'ليبيا',
    'hero.services': 'خدماتنا',
    'hero.viewProjects': 'عرض المشاريع',
    'hero.scrollDown': 'اسحب للأسفل',
    
    // About
    'about.title': 'لماذا VCE؟',
    'about.paragraph1': 'فيفيان للإنشاءات والهندسة (VCE) هي شركة رائدة في مجال البناء والهندسة مقرها في مصراتة، ليبيا. منذ تأسيسنا في عام 2019، أسسنا أنفسنا كمزود رائد لخدمات البناء والهندسة عالية الجودة في جميع أنحاء المنطقة.',
    'about.paragraph2': 'يجلب فريقنا من المحترفين ذوي الخبرة ثروة من المعرفة والخبرة لكل مشروع. نحن نفخر بالتزامنا بالتميز والابتكار وإرضاء العملاء. سواء كان الأمر يتعلق بتجديد صغير أو مشروع بناء واسع النطاق، نتعامل مع كل مهمة بنفس المستوى من التفاني والدقة.',
    'about.paragraph3': 'في VCE، نؤمن ببناء ليس فقط الهياكل، بل العلاقات أيضاً. يضمن نهجنا الذي يركز على العميل أننا نفهم ونلبي الاحتياجات الفريدة لكل مشروع، مما يحقق نتائج تتجاوز التوقعات.',
    'about.stats.title': 'نبذة عن VCE',
    'about.stats.founded': 'تأسست',
    'about.stats.location': 'الموقع',
    'about.stats.projects': 'المشاريع',
    'about.stats.team': 'حجم الفريق',
    
    // Services
    'services.title': 'خبرات VCE',
    'services.construction': 'البناء',
    'services.engineering': 'الهندسة',
    'services.projectManagement': 'إدارة المشاريع',
    'services.maintenance': 'الصيانة',
    'services.construction.desc': 'من المباني السكنية إلى المجمعات التجارية، نتعامل مع مشاريع البناء بجميع أحجامها بدقة واهتمام.',
    'services.engineering.desc': 'يصمم فريقنا من المهندسين الخبراء حلولًا مبتكرة وظيفية وجمالية في آن واحد.',
    'services.projectManagement.desc': 'نشرف على المشاريع من التصور إلى الإكمال، مما يضمن بقاءها على الجدول الزمني وضمن الميزانية.',
    'services.maintenance.desc': 'نقدم خدمات صيانة مستمرة لضمان طول عمر المباني والهياكل وعملها.',
    'services.discussProject': 'ناقش مشروعك',
    
    // Projects
    'projects.title': 'VCE في العمل',
    'projects.viewProject': 'عرض المشروع',
    'projects.category': 'الفئة:',
    'projects.year': 'السنة:',
    'projects.location': 'الموقع:',
    'projects.description': 'الوصف:',
    'projects.close': 'إغلاق',
    'projects.contactUs': 'اتصل بنا',
    
    // Testimonials
    'testimonials.title': 'ماذا يقول عملاؤنا',
    
    // Contact
    'contact.title': 'اتصل بـ VCE',
    'contact.quote': 'احصل على عرض سعر',
    'contact.name': 'الاسم *',
    'contact.email': 'البريد الإلكتروني *',
    'contact.phone': 'رقم الهاتف',
    'contact.subject': 'الموضوع *',
    'contact.chooseService': 'اختر خدمة',
    'contact.construction': 'البناء',
    'contact.engineering': 'الهندسة',
    'contact.projectManagement': 'إدارة المشاريع',
    'contact.maintenance': 'الصيانة',
    'contact.other': 'أخرى',
    'contact.message': 'رسالتك *',
    'contact.send': 'إرسال الرسالة',
    'contact.sending': 'جاري الإرسال...',
    'contact.info': 'معلومات الاتصال',
    'contact.address': 'العنوان',
    'contact.phone.label': 'الهاتف',
    'contact.email.label': 'البريد الإلكتروني',
    
    // Footer
    'footer.tagline': 'نبني مستقبل ليبيا بهندسة دقيقة وإنشاءات عالية الجودة منذ عام 2019.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'خدماتنا',
    'footer.contact': 'اتصل بنا',
    'footer.address': '123 شارع الإنشاءات',
    'footer.city': 'مصراتة، ليبيا',
    'footer.phone': 'هاتف: 5678 234 91 218+',
    'footer.email': 'البريد الإلكتروني: info@vce-construction.com',
    'footer.copyright': '© {year} VCE - فيفيان للإنشاءات والهندسة. جميع الحقوق محفوظة.',
    
    // Language
    'language.switch': 'English',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get a Quote',
    
    // Hero
    'hero.title': 'Precision Engineering Since 2019',
    'hero.workers': 'Workers',
    'hero.machines': 'Machines',
    'hero.projects': 'Projects',
    'hero.location': 'Misurata,',
    'hero.country': 'Libya',
    'hero.services': 'Our Services',
    'hero.viewProjects': 'View Projects',
    'hero.scrollDown': 'Scroll Down',
    
    // About
    'about.title': 'Why VCE?',
    'about.paragraph1': 'Vivian Construction & Engineering (VCE) is a leading construction and engineering company based in Misurata, Libya. Since our establishment in 2019, we have established ourselves as a premier provider of high-quality construction and engineering services throughout the region.',
    'about.paragraph2': 'Our team of experienced professionals brings a wealth of knowledge and expertise to every project. We pride ourselves on our commitment to excellence, innovation, and customer satisfaction. Whether it\'s a small renovation or a large-scale construction project, we approach each task with the same level of dedication and precision.',
    'about.paragraph3': 'At VCE, we believe in building not just structures, but relationships too. Our customer-focused approach ensures that we understand and meet the unique needs of each project, delivering results that exceed expectations.',
    'about.stats.title': 'About VCE',
    'about.stats.founded': 'Founded',
    'about.stats.location': 'Location',
    'about.stats.projects': 'Projects',
    'about.stats.team': 'Team Size',
    
    // Services
    'services.title': 'VCE Expertise',
    'services.construction': 'Construction',
    'services.engineering': 'Engineering',
    'services.projectManagement': 'Project Management',
    'services.maintenance': 'Maintenance',
    'services.construction.desc': 'From residential buildings to commercial complexes, we handle construction projects of all sizes with precision and care.',
    'services.engineering.desc': 'Our team of expert engineers designs innovative solutions that are both functional and aesthetic.',
    'services.projectManagement.desc': 'We oversee projects from conception to completion, ensuring they stay on schedule and within budget.',
    'services.maintenance.desc': 'We provide ongoing maintenance services to ensure the longevity and functionality of buildings and structures.',
    'services.discussProject': 'Discuss Your Project',
    
    // Projects
    'projects.title': 'VCE in Action',
    'projects.viewProject': 'View Project',
    'projects.category': 'Category:',
    'projects.year': 'Year:',
    'projects.location': 'Location:',
    'projects.description': 'Description:',
    'projects.close': 'Close',
    'projects.contactUs': 'Contact Us',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    
    // Contact
    'contact.title': 'Contact VCE',
    'contact.quote': 'Get a Quote',
    'contact.name': 'Name *',
    'contact.email': 'Email *',
    'contact.phone': 'Phone Number',
    'contact.subject': 'Subject *',
    'contact.chooseService': 'Choose a service',
    'contact.construction': 'Construction',
    'contact.engineering': 'Engineering',
    'contact.projectManagement': 'Project Management',
    'contact.maintenance': 'Maintenance',
    'contact.other': 'Other',
    'contact.message': 'Your Message *',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.phone.label': 'Phone',
    'contact.email.label': 'Email',
    
    // Footer
    'footer.tagline': 'Building Libya\'s future with precision engineering and high-quality construction since 2019.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact Us',
    'footer.address': '123 Construction Street',
    'footer.city': 'Misurata, Libya',
    'footer.phone': 'Phone: +218 91 234 5678',
    'footer.email': 'Email: info@vce-construction.com',
    'footer.copyright': '© {year} VCE - Vivian Construction & Engineering. All rights reserved.',
    
    // Language
    'language.switch': 'العربية',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
