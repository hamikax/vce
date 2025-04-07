
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

  return (
    <section className="bg-vce-blue py-16 sm:py-24">
      <div className="vce-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          {t('testimonials.title')}
        </h2>
        
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
