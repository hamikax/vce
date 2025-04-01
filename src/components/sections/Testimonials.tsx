
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';
  
  const testimonials = [
    {
      id: 1,
      content: language === 'ar' 
        ? "قامت VCE بتنفيذ مشروعنا في الوقت المحدد وضمن الميزانية. لقد تجاوز اهتمامهم بالتفاصيل وجودة العمل توقعاتنا. نتطلع إلى العمل معهم مرة أخرى في المستقبل."
        : "VCE completed our project on time and within budget. Their attention to detail and quality of work exceeded our expectations. We look forward to working with them again in the future.",
      author: language === 'ar' ? "أحمد محمود" : "Ahmed Mahmoud",
      role: language === 'ar' ? "مدير المشروع" : "Project Manager",
      company: language === 'ar' ? "شركة مصراتة للتطوير" : "Misurata Development Company"
    },
    {
      id: 2,
      content: language === 'ar'
        ? "العمل مع VCE كان متعة من البداية إلى النهاية. كان فريقهم محترفًا ومتجاوبًا وملتزمًا حقًا بنجاح مشروعنا. والنتيجة تتحدث عن نفسها."
        : "Working with VCE was a pleasure from start to finish. Their team was professional, responsive, and truly committed to the success of our project. The result speaks for itself.",
      author: language === 'ar' ? "صوفيا خليل" : "Sofia Khalil",
      role: language === 'ar' ? "الرئيس التنفيذي" : "CEO",
      company: language === 'ar' ? "مجموعة البحر المتوسط القابضة" : "Mediterranean Holding Group"
    },
    {
      id: 3,
      content: language === 'ar'
        ? "الخبرة الهندسية لشركة VCE لا مثيل لها. لقد قدموا حلولًا مبتكرة للمشاكل المعقدة، مما أدى إلى مشروع لا يلبي متطلباتنا فحسب، بل يتجاوزها."
        : "The engineering expertise of VCE is unmatched. They provided innovative solutions to complex problems, resulting in a project that not only meets our requirements but exceeds them.",
      author: language === 'ar' ? "عمر فتحي" : "Omar Fathi",
      role: language === 'ar' ? "مدير العمليات" : "Operations Director",
      company: language === 'ar' ? "المجموعة الصناعية الليبية" : "Libyan Industrial Group"
    }
  ];

  return (
    <section className="bg-vce-blue py-16 sm:py-24">
      <div className="vce-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          {t('testimonials.title')}
        </h2>
        
        <div className={`grid md:grid-cols-3 gap-8`} dir={textDirection}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-vce-red" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v12h12v-12h-12zM8 6h16v16h-16v-16z"></path>
                  <path d="M16 0v2h-16v16h2v-14h14v-4z"></path>
                </svg>
              </div>
              
              <p className="text-white mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-vce-red">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
