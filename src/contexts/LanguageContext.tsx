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
    'nav.equipment': 'خدماتنا الإضافية',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بنا',
    'nav.getQuote': 'احصل على عرض سعر',
    
    // Hero
    'hero.title': 'مرحباً بكم في مرشد إستطلاعات شركة فيفيان للإنشاءات و الأعمال الهندسية',
    'hero.workers': 'عامل',
    'hero.machines': 'آلة',
    'hero.projects': 'مشروع',
    'hero.location': 'مصراتة،',
    'hero.country': 'ليبيا',
    'hero.services': 'خدمات اخرى',
    'hero.viewProjects': 'عرض المشاريع',
    'hero.scrollDown': 'اسحب للأسفل',
    
    // About
    'about.title': 'لماذا VCE؟',
    'about.paragraph1': 'شركة فيفيان للإنشاءات والاعمال الهندسية (VCE) هي شركة رائدة في مجال البناء والهندسة مقرها في مصراتة، ليبيا. منذ تأسيسنا في عام 2019، أسسنا أنفسنا كمزود رائد لخدمات البناء والهندسة عالية الجودة في جميع أنحاء المنطقة.',
    'about.paragraph2': 'يجلب فريقنا من المحترفين ذوي الخبرة ثروة من المعرفة والخبرة لكل مشروع. نحن نفخر بالتزامنا بالتميز والابتكار وإرضاء العملاء. سواء كان الأمر يتعلق بتجديد صغير أو مشروع بناء واسع النطاق، نتعامل مع كل مهمة بنفس المستوى من التفاني والدقة.',
    'about.paragraph3': 'في VCE، نؤمن ببناء ليس فقط الهياكل، بل العلاقات أيضاً. يضمن نهجنا الذي يركز على العميل أننا نفهم ونلبي الاحتياجات الفريدة لكل مشروع، مما يحقق نتائج تتجاوز التوقعات.',
    'about.stats.title': 'نبذة عن VCE',
    'about.stats.founded': 'تأسست',
    'about.stats.location': 'الموقع',
    'about.stats.projects': 'المشاريع',
    'about.stats.team': 'حجم الفريق',
    
    // Services
    'services.title': 'خبرات VCE',
    'services.construction': 'بناء الطرق',
    'services.engineering': 'المعدات والخبرة',
    'services.maintenance': 'الصيانة',
    'services.projectManagement': 'إدارة المشاريع',
    'services.construction.desc': 'متخصصون في بناء وتطوير شبكات الطرق بأعلى مستويات الجودة والمتانة لضمان بنية تحتية مستدامة.',
    'services.engineering.desc': 'نمتلك أحدث المعدات والآلات المتخصصة وفريقاً ذو خبرة واسعة في مجال هندسة الطرق ورصفها.',
    'services.maintenance.desc': 'نقدم خدمات صيانة مستمرة لضمان طول عمر المباني والهياكل وعملها.',
    'services.projectManagement.desc': 'نوفر إدارة شاملة للمشاريع، بدءًا من التخطيط وحتى التسليم، مما يضمن تسليم المشاريع في الوقت المحدد وضمن الميزانية.',
    'services.discussProject': 'ناقش مشروعك',
    
    // Projects
    'projects.title': 'اعمالنا في VCE',
    'projects.viewProject': 'عرض المشروع',
    'projects.category': 'الفئة:',
    'projects.year': 'السنة:',
    'projects.location': 'الموقع:',
    'projects.description': 'الوصف:',
    'projects.close': 'إغلاق',
    'projects.contactUs': 'اتصل بنا',
    
    // Testimonials
    'testimonials.title': 'اخبرنا',
    
    // Contact
    'contact.title': 'اتصل بـ VCE',
    'contact.quote': 'احصل على عرض سعر',
    'contact.name': 'الاسم *',
    'contact.email': 'البريد الإلكتروني *',
    'contact.phone': 'رقم الهاتف',
    'contact.subject': 'الموضوع *',
    'contact.chooseService': 'اختر خدمة',
    'contact.construction': 'بناء الطرق',
    'contact.engineering': 'المعدات والخبرة',
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
    'footer.phone': 'هاتف: 0912179069 / 0912229069',
    'footer.email': 'البريد الإلكتروني: Vivian.pe.co@gmail.com',
    'footer.copyright': '© {year} VCE - شركة فيفيان للإنشاءات والاعمال الهندسية. جميع الحقوق محفوظة.',
    
    // Language
    'language.switch': 'English',
    
    // Additional Services
    'equipment.petroleum.title': 'شركة فيفيان للخدمات النفطية',
    'equipment.petroleum.description': 'شركة فيفيان للخدمات النفطية المتخصصة في جميع الأعمال النفطية المتنوعة من صيانة وتطوير و إنشاء و تشغيل',
    'equipment.facebook': 'زيارة صفحة الفيسبوك',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.equipment': 'Additional Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get a Quote',
    
    // Hero
    'hero.title': 'Welcome to Vivian Construction & Engineering Survey Guide',
    'hero.workers': 'Workers',
    'hero.machines': 'Machines',
    'hero.projects': 'Projects',
    'hero.location': 'Misurata,',
    'hero.country': 'Libya',
    'hero.services': 'Other Services',
    'hero.viewProjects': 'View Projects',
    'hero.scrollDown': 'Scroll Down',
    
    // About
    'about.title': 'Why VCE?',
    'about.paragraph1': 'Vivian Construction & Engineering Services (VCE) is a leading construction and engineering company based in Misurata, Libya. Since our establishment in 2019, we have established ourselves as a premier provider of high-quality construction and engineering services throughout the region.',
    'about.paragraph2': 'Our team of experienced professionals brings a wealth of knowledge and expertise to every project. We pride ourselves on our commitment to excellence, innovation, and customer satisfaction. Whether it\'s a small renovation or a large-scale construction project, we approach each task with the same level of dedication and precision.',
    'about.paragraph3': 'At VCE, we believe in building not just structures, but relationships too. Our customer-focused approach ensures that we understand and meet the unique needs of each project, delivering results that exceed expectations.',
    'about.stats.title': 'About VCE',
    'about.stats.founded': 'Founded',
    'about.stats.location': 'Location',
    'about.stats.projects': 'Projects',
    'about.stats.team': 'Team Size',
    
    // Services
    'services.title': 'VCE Expertise',
    'services.construction': 'Road Building',
    'services.engineering': 'Equipment & Expertise',
    'services.maintenance': 'Maintenance',
    'services.projectManagement': 'Project Management',
    'services.construction.desc': 'Specialized in building and developing road networks with the highest quality and durability standards to ensure sustainable infrastructure.',
    'services.engineering.desc': 'We own state-of-the-art specialized equipment and machinery along with a highly experienced team in road engineering and paving.',
    'services.maintenance.desc': 'We provide ongoing maintenance services to ensure the longevity and functionality of buildings and structures.',
    'services.projectManagement.desc': 'We offer comprehensive project management, from planning to delivery, ensuring projects are completed on time and within budget.',
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
    'testimonials.title': 'Testimonials',
    
    // Contact
    'contact.title': 'Contact VCE',
    'contact.quote': 'Get a Quote',
    'contact.name': 'Name *',
    'contact.email': 'Email *',
    'contact.phone': 'Phone Number',
    'contact.subject': 'Subject *',
    'contact.chooseService': 'Choose a service',
    'contact.construction': 'Road Building',
    'contact.engineering': 'Equipment & Expertise',
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
    'footer.phone': 'Phone: +218 0912179069 / +218 0912229069',
    'footer.email': 'Email: Vivian.pe.co@gmail.com',
    'footer.copyright': '© {year} VCE - Vivian Construction & Engineering Services. All rights reserved.',
    
    // Language
    'language.switch': 'العربية',
    
    // Additional Services
    'equipment.petroleum.title': 'Vivian Petroleum Company',
    'equipment.petroleum.description': 'Vivian Petroleum Company specializes in various petroleum services including maintenance, development, construction, and operations.',
    'equipment.facebook': 'Visit Facebook Page',
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
