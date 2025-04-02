
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
      title: language === 'ar' ? "شقق سكنية" : "Residential Apartments",
      category: language === 'ar' ? "البناء" : "Construction",
      location: language === 'ar' ? "شرق مصراتة" : "East Misurata",
      year: "2022",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: language === 'ar' ? "شقق سكنية فاخرة مع وسائل راحة حديثة ومرافق عصرية." : "Luxury residential apartments with modern amenities and contemporary facilities."
    },
    {
      id: 3,
      title: language === 'ar' ? "تطوير البنية التحتية" : "Infrastructure Development",
      category: language === 'ar' ? "الهندسة" : "Engineering",
      location: language === 'ar' ? "المنطقة الصناعية بمصراتة" : "Misurata Industrial Zone",
      year: "2022",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: language === 'ar' ? "مشروع بنية تحتية رئيسي يشمل الطرق والجسور وأنظمة المرافق." : "A major infrastructure project including roads, bridges, and utility systems."
    },
    {
      id: 4,
      title: language === 'ar' ? "مكتبة عامة" : "Public Library",
      category: language === 'ar' ? "البناء" : "Construction",
      location: language === 'ar' ? "وسط مصراتة" : "Central Misurata",
      year: "2021",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: language === 'ar' ? "مكتبة عامة حديثة تضم مساحات للقراءة وأرشيفات رقمية ومناطق مجتمعية." : "A modern public library featuring reading spaces, digital archives, and community areas."
    },
    {
      id: 5,
      title: language === 'ar' ? "تجديد المستشفى" : "Hospital Renovation",
      category: language === 'ar' ? "الصيانة" : "Maintenance",
      location: language === 'ar' ? "جنوب مصراتة" : "South Misurata",
      year: "2021",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: language === 'ar' ? "تجديد وتحديث كامل لمرفق رعاية صحية قائم." : "Complete renovation and modernization of an existing healthcare facility."
    },
    {
      id: 6,
      title: language === 'ar' ? "المقر الرئيسي للشركة" : "Corporate Headquarters",
      category: language === 'ar' ? "إدارة المشاريع" : "Project Management",
      location: language === 'ar' ? "منطقة الأعمال بمصراتة" : "Misurata Business District",
      year: "2020",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: language === 'ar' ? "تصميم وبناء مبنى المقر الرئيسي للشركة لشركة ليبية كبرى." : "Design and construction of a corporate headquarters building for a major Libyan company."
    }
  ];

  const openProjectDetails = (id: number) => {
    setActiveProject(id);
  };

  const closeProjectDetails = () => {
    setActiveProject(null);
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
                className="h-56 bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
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
                {project.id === 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
                    <img 
                      src="/lovable-uploads/764e4493-158f-464c-b2a7-0bb4c167c626.png"
                      alt="Road paving project" 
                      className="w-full h-auto rounded"
                    />
                    <img 
                      src="/lovable-uploads/58819374-01be-4ebd-a520-5680cf78f10f.png"
                      alt="Road paving project" 
                      className="w-full h-auto rounded"
                    />
                    <img 
                      src="/lovable-uploads/47f3dc8c-3817-48b0-80d1-10826321dcd6.png"
                      alt="Road paving project"
                      className="w-full h-auto rounded md:col-span-2"
                    />
                  </div>
                ) : (
                  <div 
                    className="h-64 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
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
