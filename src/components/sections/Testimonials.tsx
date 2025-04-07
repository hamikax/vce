
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

  // Shawahda area project testimonial
  const shawahidaTestimonial = {
    id: 'shawahida',
    content: language === 'ar'
      ? "أعمال تنفيذ مجموعة طرق بالرابط بين شارع بنغازي وساحات مسجد بن رمضان، تنفيذ شركة فيفيـان، وإشراف جهاز تنفيذ مشروعات المواصلات مصراتة.\n📍الشواهده\n🗓️ الأحد 11 فبراير 2024م"
      : "Implementation of a group of roads linking Benghazi Street and Ben Ramadan Mosque squares, executed by Vivian Company, and supervised by the Misurata Transportation Projects Implementation Agency.\n📍Al-Shawahda\n🗓️ Sunday, February 11, 2024",
    author: language === 'ar' ? "جهاز تنفيذ مشروعات المواصلات مصراتة" : "Misurata Transportation Projects Implementation Agency",
    role: language === 'ar' ? "إدارة المشاريع" : "Project Management",
    company: language === 'ar' ? "القطاع الحكومي" : "Government Sector",
    language: language,
    isGovernment: true,
    socialLink: "https://www.facebook.com/share/1Yy6AMLosf/?mibextid=wwXIfr",
    location: language === 'ar' ? "منطقة الشواهده" : "Al-Shawahda Area",
    images: [
      "/lovable-uploads/47ba2542-ff4e-409b-aa2f-8e0c3e0414c8.png",
      "/lovable-uploads/597ba30c-3457-424b-bc06-cb63d3405443.png",
      "/lovable-uploads/c0c12c3e-7832-489f-9bea-37d3e38cbdf5.png"
    ]
  };

  // Ruwisat project
  const ruwisatTestimonial = {
    id: '4',
    content: language === 'ar'
      ? "أعمال تنفيذ مجموعة طرق بالرابط بين شارع بنغازي وساحات مسجد بن رمضان، تنفيذ شركة فيفيـان، وإشراف جهاز تنفيذ مشروعات المواصلات مصراتة.\n📍الرويسـات\n🗓️ الأحد 11 فبراير 2024م"
      : "Implementation of a group of roads linking Benghazi Street and Ben Ramadan Mosque squares, executed by Vivian Company, and supervised by the Misurata Transportation Projects Implementation Agency.\n📍Al-Ruwaisat\n🗓️ Sunday, February 11, 2024",
    author: language === 'ar' ? "جهاز تنفيذ مشروعات المواصلات مصراتة" : "Misurata Transportation Projects Implementation Agency",
    role: language === 'ar' ? "إدارة المشاريع" : "Project Management",
    company: language === 'ar' ? "القطاع الحكومي" : "Government Sector",
    language: language,
    isGovernment: true,
    socialLink: "https://www.facebook.com/share/1Yy6AMLosf/?mibextid=wwXIfr",
    location: language === 'ar' ? "الرويسـات" : "Al-Ruwaisat",
    images: [
      "/lovable-uploads/c03d5593-2b85-4801-ac5a-d22613760c28.png",
      "/lovable-uploads/a4c1c124-d7a0-442f-8028-b0811aca0ffc.png",
      "/lovable-uploads/ad00dbf7-c08f-49b7-a6da-5c5f0c78813a.png",
      "/lovable-uploads/fdedcfa9-e3f5-485f-ba4e-bf56e6a4ca29.png"
    ]
  };

  const displayTestimonials = (!testimonials || testimonials.length === 0 || error) ? 
    [shawahidaTestimonial, ruwisatTestimonial] : 
    testimonials;

  useEffect(() => {
    const addFallbackTestimonials = async () => {
      if (!testimonials || testimonials.length === 0) {
        try {
          const { data } = await supabase
            .from('testimonials')
            .select('count')
            .single();
          
          if (!data || data.count === 0) {
            await supabase
              .from('testimonials')
              .insert([shawahidaTestimonial, ruwisatTestimonial]);
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

  // Filter testimonials by type
  const governmentTestimonials = displayTestimonials.filter(t => t.isGovernment);
  const regularTestimonials = []; // No regular testimonials as requested

  return (
    <section className="bg-vce-blue py-16 sm:py-24">
      <div className="vce-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          {t('testimonials.title')}
        </h2>
        
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
                {testimonial.location && (
                  <h4 className="text-xl font-semibold mb-4 text-vce-red">
                    {testimonial.location}
                  </h4>
                )}
                
                <div className="mb-6">
                  <p className="text-white mb-6 text-lg whitespace-pre-line">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <p className="font-bold text-white text-xl">{testimonial.author}</p>
                      {testimonial.role && testimonial.company && (
                        <p className="text-vce-red">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      )}
                    </div>

                    {testimonial.socialLink && (
                      <a 
                        href={testimonial.socialLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-vce-red flex items-center gap-2 transition-colors bg-vce-blue/40 px-4 py-2 rounded-full hover:bg-vce-blue/60"
                      >
                        <span>{language === 'ar' ? "عرض المنشور على فيسبوك" : "View Facebook Post"}</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  {testimonial.images && testimonial.images.length > 0 && (
                    <div className="mt-8 bg-black/20 p-4 rounded-lg">
                      <Carousel 
                        className="w-full"
                        opts={{
                          align: "start",
                          loop: true,
                          containScroll: "trimSnaps"
                        }}
                      >
                        <CarouselContent>
                          {testimonial.images.map((image, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                <Card className="border-0 shadow-xl overflow-hidden">
                                  <CardContent className="flex aspect-square p-0">
                                    <img 
                                      src={image}
                                      alt={`${testimonial.author} project image ${index + 1}`}
                                      className="w-full h-full object-cover"
                                      loading="lazy"
                                      onError={(e) => {
                                        console.log(`Error loading image: ${image}`);
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
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>
                  )}
                </div>
              </div>
            ))}
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
                  <p className="text-vce-red">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
