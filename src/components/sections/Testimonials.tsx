
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Testimonial {
  id: string;
  author: string;
  role: string | null;
  company: string | null;
  content: string;
  language: string;
  images?: string[];
  isGovernment?: boolean;
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
    },
    {
      id: '4',
      content: language === 'ar'
        ? "مشروع انشاء مظلات وتصريف مياه الأمطار بمحطات الوقود ومحطة القاعدة والفرع ومحطة ايشفاشا ومحطة المرقب ومحطة الشموخ بشركة البريقة لتسويق النفط. تم انجاز المشروع بنجاح والشكر موصول لفريق شركتكم المثالي."
        : "Project to construct shelters and rainwater drainage at fuel stations including Base Station, Branch Station, Ishfasha Station, Murqub Station, and Al-Shumukh Station at Brega Oil Marketing Company. The project was successfully completed, and thanks to your company's exemplary team.",
      author: language === 'ar' ? "شركة البريقة لتسويق النفط" : "Brega Oil Marketing Company",
      role: language === 'ar' ? "إدارة المشاريع" : "Project Management",
      company: language === 'ar' ? "القطاع الحكومي" : "Government Sector",
      language: language,
      isGovernment: true,
      images: [
        "/lovable-uploads/21b15895-16bc-4bb7-a0c7-86b8ecf02f4c.png",
        "/lovable-uploads/908bbc3c-e5b0-4647-80ed-809b15c21a5b.png",
        "/lovable-uploads/4db305e7-643d-46d5-a8cf-c7869a60ef94.png",
        "/lovable-uploads/637ab766-0ca3-4839-a145-c7059bbf6666.png"
      ]
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

  const governmentTestimonials = displayTestimonials.filter(t => t.isGovernment);
  const regularTestimonials = displayTestimonials.filter(t => !t.isGovernment);

  return (
    <section className="bg-vce-blue py-16 sm:py-24">
      <div className="vce-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          {t('testimonials.title')}
        </h2>
        
        {/* Government Testimonials */}
        {governmentTestimonials.length > 0 && (
          <div className="mb-16" dir={textDirection}>
            <h3 className="text-2xl font-bold mb-8 text-white opacity-90 text-center">
              {language === 'ar' ? "مشاريعنا الحكومية" : "Our Government Projects"}
            </h3>

            {governmentTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 mb-10"
              >
                <div className="mb-6">
                  <p className="text-white mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mb-6">
                    <p className="font-bold text-white">{testimonial.author}</p>
                    {testimonial.role && testimonial.company && (
                      <p className="text-vce-red">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    )}
                  </div>

                  {testimonial.images && testimonial.images.length > 0 && (
                    <div className="mt-6">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {testimonial.images.map((image, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex aspect-square items-center justify-center p-0">
                                    <img 
                                      src={image}
                                      alt={`${testimonial.author} project image ${index + 1}`}
                                      className="w-full h-full object-cover rounded-lg"
                                      onError={(e) => {
                                        e.currentTarget.src = "/placeholder.svg";
                                        e.currentTarget.classList.add("border", "border-gray-200");
                                      }}
                                    />
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 bg-white/20 hover:bg-white/40 border-none text-white" />
                        <CarouselNext className="right-2 bg-white/20 hover:bg-white/40 border-none text-white" />
                      </Carousel>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Regular Testimonials */}
        <div className={`grid md:grid-cols-3 gap-8`} dir={textDirection}>
          {regularTestimonials.map((testimonial) => (
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
