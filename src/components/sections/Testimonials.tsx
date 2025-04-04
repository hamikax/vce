
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

interface Testimonial {
  id: string;
  author: string;
  role: string | null;
  company: string | null;
  content: string;
  language: string;
}

const Testimonials = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';
  
  const fetchTestimonials = async (): Promise<Testimonial[]> => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('language', language);
    
    if (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }
    
    return data || [];
  };

  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['testimonials', language],
    queryFn: fetchTestimonials,
    staleTime: 60 * 1000, // 1 minute
  });

  // Fallback testimonials to use when there's no data from Supabase
  const fallbackTestimonials = [
    {
      id: '1',
      content: language === 'ar' 
        ? "قامت VCE بتنفيذ مشروعنا في الوقت المحدد وضمن الميزانية. لقد تجاوز اهتمامهم بالتفاصيل وجودة العمل توقعاتنا. نتطلع إلى العمل معهم مرة أخرى في المستقبل."
        : "VCE completed our project on time and within budget. Their attention to detail and quality of work exceeded our expectations. We look forward to working with them again in the future.",
      author: language === 'ar' ? "أحمد محمود" : "Ahmed Mahmoud",
      role: language === 'ar' ? "مدير المشروع" : "Project Manager",
      company: language === 'ar' ? "شركة مصراتة للتطوير" : "Misurata Development Company",
      language: language
    },
    {
      id: '2',
      content: language === 'ar'
        ? "العمل مع VCE كان متعة من البداية إلى النهاية. كان فريقهم محترفًا ومتجاوبًا وملتزمًا حقًا بنجاح مشروعنا. والنتيجة تتحدث عن نفسها."
        : "Working with VCE was a pleasure from start to finish. Their team was professional, responsive, and truly committed to the success of our project. The result speaks for itself.",
      author: language === 'ar' ? "صوفيا خليل" : "Sofia Khalil",
      role: language === 'ar' ? "الرئيس التنفيذي" : "CEO",
      company: language === 'ar' ? "مجموعة البحر المتوسط القابضة" : "Mediterranean Holding Group",
      language: language
    },
    {
      id: '3',
      content: language === 'ar'
        ? "الخبرة الهندسية لشركة VCE لا مثيل لها. لقد قدموا حلولًا مبتكرة للمشاكل المعقدة، مما أدى إلى مشروع لا يلبي متطلباتنا فحسب، بل يتجاوزها."
        : "The engineering expertise of VCE is unmatched. They provided innovative solutions to complex problems, resulting in a project that not only meets our requirements but exceeds them.",
      author: language === 'ar' ? "عمر فتحي" : "Omar Fathi",
      role: language === 'ar' ? "مدير العمليات" : "Operations Director",
      company: language === 'ar' ? "المجموعة الصناعية الليبية" : "Libyan Industrial Group",
      language: language
    }
  ];

  // Use fallback testimonials if there's no data or there's an error
  const displayTestimonials = (!testimonials || testimonials.length === 0 || error) ? fallbackTestimonials : testimonials;

  // Add fallback testimonials to Supabase if none exist
  useEffect(() => {
    const addFallbackTestimonials = async () => {
      if (!testimonials || testimonials.length === 0) {
        try {
          // Check if we already have testimonials in different language
          const { data } = await supabase
            .from('testimonials')
            .select('count')
            .single();
          
          // Only add fallbacks if no testimonials exist at all
          if (!data || data.count === 0) {
            await supabase.from('testimonials').insert(fallbackTestimonials);
          }
        } catch (error) {
          console.error('Error adding fallback testimonials:', error);
        }
      }
    };

    if (!isLoading && !error) {
      addFallbackTestimonials();
    }
  }, [isLoading, testimonials, error]);

  return (
    <section className="bg-vce-blue py-16 sm:py-24">
      <div className="vce-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          {t('testimonials.title')}
        </h2>
        
        <div className={`grid md:grid-cols-3 gap-8`} dir={textDirection}>
          {displayTestimonials.map((testimonial) => (
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
