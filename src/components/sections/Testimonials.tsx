
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink } from 'lucide-react';

interface Testimonial {
  id: string;
  author: string;
  role: string | null;
  company: string | null;
  content: string;
  language: string;
  images?: string[];
  isGovernment?: boolean;
  socialLink?: string;
  location?: string;
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

  // Regular testimonials (not government ones)
  const regularTestimonials = Array.isArray(testimonials) 
    ? testimonials.filter(t => !t.isGovernment)
    : [];

  // Government testimonials
  const governmentTestimonials = Array.isArray(testimonials) 
    ? testimonials.filter(t => t.isGovernment)
    : [];

  // Fallback testimonial for government client when there's none in the database
  const fallbackGovernmentTestimonial = {
    id: 'gov-1',
    author: 'جهاز تنفيذ مشروعات المواصلات مصراتة',
    company: 'حكومة الوحدة الوطنية الليبية',
    content: language === 'ar' 
      ? 'أعمال تنفيذ مجموعة طرق بالرابط بين شارع بنغازي وساحات مسجد بن رمضان، تنفيذ شركة فيفيـان، وإشراف جهاز تنفيذ مشروعات المواصلات مصراتة.' 
      : 'Implementation of a group of roads linking Benghazi Street and Ben Ramadan Mosque squares, executed by Vivian Company, and supervised by the Misurata Transportation Projects Implementation Agency.',
    role: null,
    language: language,
    isGovernment: true,
    location: language === 'ar' ? 'الشواهده، مصراتة' : 'Al-Shawahdeh, Misurata',
    images: [
      "/lovable-uploads/47ba2542-ff4e-409b-aa2f-8e0c3e0414c8.png",
      "/lovable-uploads/597ba30c-3457-424b-bc06-cb63d3405443.png",
      "/lovable-uploads/c0c12c3e-7832-489f-9bea-37d3e38cbdf5.png"
    ]
  };

  // Use fallback if no government testimonials exist
  const displayGovernmentTestimonials = governmentTestimonials.length > 0 
    ? governmentTestimonials 
    : [fallbackGovernmentTestimonial];

  return (
    <section className="bg-vce-blue py-16 sm:py-24">
      <div className="vce-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          {t('testimonials.title')}
        </h2>
        
        {displayGovernmentTestimonials.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              {language === 'ar' ? 'مشاريعنا الحكومية' : 'Our Government Projects'}
            </h3>
            
            <div className="relative px-10" dir={textDirection}>
              <Carousel
                opts={{
                  align: "start",
                  loop: true
                }}
                className="w-full"
              >
                <CarouselContent>
                  {displayGovernmentTestimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                        <CardContent className="p-6">
                          {testimonial.images && testimonial.images.length > 0 && (
                            <div className="mb-4 h-48 overflow-hidden rounded-md">
                              <img 
                                src={testimonial.images[0]} 
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          
                          <p className="text-white mb-4 italic">
                            "{testimonial.content}"
                          </p>
                          
                          <div>
                            <p className="font-bold text-white">{testimonial.author}</p>
                            {testimonial.company && (
                              <p className="text-vce-red">{testimonial.company}</p>
                            )}
                            {testimonial.location && (
                              <p className="text-white/80 text-sm mt-1">{testimonial.location}</p>
                            )}
                            {testimonial.socialLink && (
                              <a 
                                href={testimonial.socialLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white flex items-center mt-2 text-sm"
                              >
                                <ExternalLink className="w-4 h-4 mr-1" />
                                {language === 'ar' ? 'عرض المشروع' : 'View Project'}
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        )}
        
        {regularTestimonials.length > 0 && (
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
                  {testimonial.role && testimonial.company && (
                    <p className="text-vce-red">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {regularTestimonials.length === 0 && !isLoading && !error && (
          <div className="text-center text-white opacity-70">
            <p>{language === 'ar' ? "لا توجد شهادات متاحة حاليًا" : "No testimonials available at the moment"}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
