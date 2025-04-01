
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// Project data
const projects = [
  {
    id: 1,
    title: "مجمع تجاري",
    category: "البناء",
    location: "وسط مدينة مصراتة",
    year: "2023",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "مجمع تجاري حديث يضم مساحات للبيع بالتجزئة ومكاتب، مصمم مع وضع الاستدامة في الاعتبار."
  },
  {
    id: 2,
    title: "شقق سكنية",
    category: "البناء",
    location: "شرق مصراتة",
    year: "2022",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "شقق سكنية فاخرة مع وسائل راحة حديثة ومرافق عصرية."
  },
  {
    id: 3,
    title: "تطوير البنية التحتية",
    category: "الهندسة",
    location: "المنطقة الصناعية بمصراتة",
    year: "2022",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "مشروع بنية تحتية رئيسي يشمل الطرق والجسور وأنظمة المرافق."
  },
  {
    id: 4,
    title: "مكتبة عامة",
    category: "البناء",
    location: "وسط مصراتة",
    year: "2021",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "مكتبة عامة حديثة تضم مساحات للقراءة وأرشيفات رقمية ومناطق مجتمعية."
  },
  {
    id: 5,
    title: "تجديد المستشفى",
    category: "الصيانة",
    location: "جنوب مصراتة",
    year: "2021",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "تجديد وتحديث كامل لمرفق رعاية صحية قائم."
  },
  {
    id: 6,
    title: "المقر الرئيسي للشركة",
    category: "إدارة المشاريع",
    location: "منطقة الأعمال بمصراتة",
    year: "2020",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "تصميم وبناء مبنى المقر الرئيسي للشركة لشركة ليبية كبرى."
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const openProjectDetails = (id: number) => {
    setActiveProject(id);
  };

  const closeProjectDetails = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="vce-section bg-gray-50">
      <div className="vce-container">
        <h2 className="vce-heading text-center">VCE في العمل</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
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
                  عرض المشروع
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
            dir="rtl"
          >
            {projects.filter(p => p.id === activeProject).map(project => (
              <div key={project.id}>
                <div 
                  className="h-64 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
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
                      <p className="text-gray-600 font-semibold">الفئة:</p>
                      <p>{project.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold">السنة:</p>
                      <p>{project.year}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 font-semibold">الموقع:</p>
                      <p>{project.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 font-semibold">الوصف:</p>
                    <p className="mt-2">{project.description}</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      onClick={closeProjectDetails}
                      className="vce-btn bg-gray-200 text-gray-800 hover:bg-gray-300 ml-4"
                    >
                      إغلاق
                    </button>
                    <a 
                      href="#contact" 
                      onClick={closeProjectDetails}
                      className="vce-btn vce-btn-primary"
                    >
                      اتصل بنا
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
