
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';

  // Project data with translations
  const projects = [
    {
      id: 1,
      title: language === 'ar' ? "مشروع تعبيد الطريق بالقرب من شارع السعدون" : "Implementation of the road paving project near Saadoun Street",
      category: language === 'ar' ? "البنية التحتية" : "Infrastructure",
      location: language === 'ar' ? "شارع السعدون، مصراتة" : "Saadoun Street, Misurata",
      year: "2024",
      image: "/lovable-uploads/764e4493-158f-464c-b2a7-0bb4c167c626.png",
      description: language === 'ar' ? "مشروع رصف طرق رئيسي لتحسين البنية التحتية للنقل في منطقة شارع السعدون بمصراتة." : "A major road paving project to improve transportation infrastructure in the Saadoun Street area of Misurata."
    },
    {
      id: 2,
      title: language === 'ar' ? "تنفيذ مشروع رصف الطرق في منتجع مصراتة" : "Implementation of the road paving project in Misurata Resort",
      category: language === 'ar' ? "البنية التحتية" : "Infrastructure",
      location: language === 'ar' ? "منتجع مصراتة" : "Misurata Resort",
      year: "2023",
      image: "/lovable-uploads/2d2f73f8-6966-4742-9824-8fe7857287de.png",
      description: language === 'ar' ? "مشروع تطوير البنية التحتية لرصف الطرق في منتجع مصراتة السياحي، مع تركيب على جودة الطرق والمناظر الطبيعية المحيطة." : "Infrastructure development project for road paving in Misurata Resort, with a focus on road quality and surrounding landscapes."
    },
    {
      id: 3,
      title: language === 'ar' ? "اعمال الحفر و الردم لبعض المشاريع المنفذة" : "Excavation and backfilling works for various implemented projects",
      category: language === 'ar' ? "اعمال الطرق" : "Road works",
      location: language === 'ar' ? "مصراتة" : "Misurata",
      year: "2025",
      image: "/lovable-uploads/e3c4f0f2-39e2-4c28-8d27-ce5ded87826a.png",
      description: language === 'ar' ? "مشروع متخصص في أعمال الحفر والردم باستخدام معدات ثقيلة متطورة لتحضير مواقع البناء والطرق." : "Specialized project in excavation and backfilling using advanced heavy machinery to prepare construction sites and roads."
    },
    {
      id: 4,
      title: language === 'ar' ? "أعمال تنفيذ رصف طرق مقسم زراعي في منطقة طمينة/مصراتة" : "Road paving works for agricultural subdivision in Tmeina/Misurata area",
      category: language === 'ar' ? "اعمال الطرق" : "Road works",
      location: language === 'ar' ? "طمينة، مصراتة" : "Tmeina, Misurata",
      year: "2021",
      image: "/lovable-uploads/41158a6b-decb-4bb0-be94-59ab27125f05.png",
      description: language === 'ar' ? "مشروع تطوير البنية التحتية للطرق في منطقة زراعية بطمينة/مصراتة لتحسين إمكانية الوصول وتعزيز التنمية المحلية." : "Road infrastructure development project in an agricultural area of Tmeina/Misurata to improve accessibility and enhance local development."
    },
    {
      id: 5,
      title: language === 'ar' ? "تنفيذ أعمال رش طبقة M.C.O" : "Implementation of M.C.O Layer Spraying Works",
      category: language === 'ar' ? "أعمال الطرق" : "Road Works",
      location: language === 'ar' ? "مصراتة" : "Misurata",
      year: "2024",
      image: "/lovable-uploads/42dbda78-0b0b-42f6-97e2-791ac668ad22.png",
      description: language === 'ar' ? "تنفيذ أعمال رش طبقة M.C.O للطرق لتحسين جودتها ومتانتها وتعزيز البنية التحتية للطرق." : "Implementation of M.C.O layer spraying works for roads to improve quality, durability and enhance road infrastructure."
    },
    {
      id: 6,
      title: language === 'ar' ? "عمل خاص في منطقه الشواهده" : "Special work in Al-Shawahdeh area",
      category: language === 'ar' ? "أعمال الطرق" : "Road Works",
      location: language === 'ar' ? "منطقة الشواهده" : "Al-Shawahdeh area",
      year: "2021",
      image: "/lovable-uploads/fe9d4a13-878b-4e19-baac-233cf804c1db.png",
      description: language === 'ar' ? "مشروع طرق متخصص في منطقة الشواهدة يتضمن تحسين البنية التحتية وتطوير شبكة الطرق المحلية." : "Specialized road project in Al-Shawahdeh area including infrastructure improvement and development of the local road network."
    }
  ];

  const openProjectDetails = (id: number) => {
    setActiveProject(id);
  };

  const closeProjectDetails = () => {
    setActiveProject(null);
  };

  // Image error handler function
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/placeholder.svg";
    e.currentTarget.classList.add("border", "border-gray-200");
  };

  return (
    <section id="projects" className="vce-section bg-gray-50">
      <div className="vce-container">
        <h2 className="vce-heading text-center">{t('projects.title')}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" dir={textDirection}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="h-56 bg-cover bg-center relative"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-vce-blue">{project.title}</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-600">{project.category}</span>
                  <span className="text-gray-600">{project.year}</span>
                </div>
                <button 
                  onClick={() => openProjectDetails(project.id)}
                  className="vce-btn vce-btn-primary w-full"
                >
                  {t('projects.viewProject')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div 
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            dir={textDirection}
          >
            {projects.filter(p => p.id === activeProject).map(project => (
              <div key={project.id}>
                {/* Customize gallery images based on project ID */}
                {project.id === 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                    <img 
                      src="/lovable-uploads/764e4493-158f-464c-b2a7-0bb4c167c626.png"
                      alt="Road paving project" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/58819374-01be-4ebd-a520-5680cf78f10f.png"
                      alt="Road paving project" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/47f3dc8c-3817-48b0-80d1-10826321dcd6.png"
                      alt="Road paving project"
                      className="w-full h-auto rounded md:col-span-2"
                      onError={handleImageError}
                    />
                  </div>
                ) : project.id === 2 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                    <img 
                      src="/lovable-uploads/2d2f73f8-6966-4742-9824-8fe7857287de.png"
                      alt="Misurata Resort road paving" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/eeb56569-810c-4bc9-9069-c1c8f094329e.png"
                      alt="Misurata Resort road paving" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/bd310ad2-71e1-4ace-86e8-a2621b68a29e.png"
                      alt="Misurata Resort road paving"
                      className="w-full h-auto rounded md:col-span-2"
                      onError={handleImageError}
                    />
                  </div>
                ) : project.id === 3 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                    <img 
                      src="/lovable-uploads/e3c4f0f2-39e2-4c28-8d27-ce5ded87826a.png"
                      alt="Excavation and backfilling works" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/1e2862f3-0439-48ba-97c6-d87f36a6942d.png"
                      alt="Excavation and backfilling works" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/fd57dbaf-61e1-4423-b004-661fdfb41fda.png"
                      alt="Excavation and backfilling works"
                      className="w-full h-auto rounded md:col-span-2"
                      onError={handleImageError}
                    />
                  </div>
                ) : project.id === 4 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                    <img 
                      src="/lovable-uploads/41158a6b-decb-4bb0-be94-59ab27125f05.png"
                      alt="Road paving in Tmeina agricultural area" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/cc9f227b-5166-47ad-b98b-c92e9a722a34.png"
                      alt="Road paving in Tmeina agricultural area" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/a0545a7a-04c6-4ba2-9bcd-fe33fc0e8b97.png"
                      alt="Road paving in Tmeina agricultural area"
                      className="w-full h-auto rounded md:col-span-2"
                      onError={handleImageError}
                    />
                  </div>
                ) : project.id === 5 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                    <img 
                      src="/lovable-uploads/42dbda78-0b0b-42f6-97e2-791ac668ad22.png"
                      alt="M.C.O Layer Spraying Works" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/30eed758-6079-4c7b-a37e-3051a66eee3c.png"
                      alt="M.C.O Layer Spraying Works" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/8565d59c-768a-4dd7-b61d-266c66f6c3ed.png"
                      alt="M.C.O Layer Spraying Works"
                      className="w-full h-auto rounded md:col-span-2"
                      onError={handleImageError}
                    />
                  </div>
                ) : project.id === 6 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                    <img 
                      src="/lovable-uploads/4db305e7-643d-46d5-a8cf-c7869a60ef94.png"
                      alt="Special work in Al-Shawahdeh area" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/aad138d2-d444-4021-a89a-87463640c317.png"
                      alt="Special work in Al-Shawahdeh area" 
                      className="w-full h-auto rounded"
                      onError={handleImageError}
                    />
                    <img 
                      src="/lovable-uploads/a33e8390-8bc8-4293-acc2-a2bf5501e2f9.png"
                      alt="Special work in Al-Shawahdeh area"
                      className="w-full h-auto rounded md:col-span-2"
                      onError={handleImageError}
                    />
                  </div>
                ) : (
                  <div className="p-2">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded"
                      onError={handleImageError}
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-vce-blue">{project.title}</h3>
                    <button 
                      onClick={closeProjectDetails}
                      className="text-gray-500 hover:text-gray-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 font-semibold">{t('projects.category')}</p>
                      <p>{project.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold">{t('projects.year')}</p>
                      <p>{project.year}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold">{t('projects.location')}</p>
                      <p>{project.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 font-semibold">{t('projects.description')}</p>
                    <p className="mt-2">{project.description}</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      onClick={closeProjectDetails}
                      className="vce-btn bg-gray-200 text-gray-800 hover:bg-gray-300 ml-4"
                    >
                      {t('projects.close')}
                    </button>
                    <a 
                      href="#contact" 
                      onClick={closeProjectDetails}
                      className="vce-btn vce-btn-primary"
                    >
                      {t('projects.contactUs')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
