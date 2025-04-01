
import React from 'react';

const About = () => {
  const stats = [
    { label: "تأسست", value: "2019" },
    { label: "الموقع", value: "مصراتة" },
    { label: "المشاريع", value: "+20" },
    { label: "حجم الفريق", value: "+20" },
  ];

  return (
    <section id="about" className="vce-section bg-gray-50">
      <div className="vce-container">
        <h2 className="vce-heading text-center">لماذا VCE؟</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center" dir="rtl">
          {/* Content */}
          <div>
            <p className="text-lg mb-6">
              فيفيان للإنشاءات والهندسة (VCE) هي شركة رائدة في مجال البناء والهندسة مقرها في مصراتة، ليبيا. 
              منذ تأسيسنا في عام 2019، أسسنا أنفسنا كمزود رائد لخدمات البناء والهندسة عالية الجودة في جميع أنحاء المنطقة.
            </p>
            <p className="text-lg mb-6">
              يجلب فريقنا من المحترفين ذوي الخبرة ثروة من المعرفة والخبرة لكل مشروع. 
              نحن نفخر بالتزامنا بالتميز والابتكار وإرضاء العملاء. 
              سواء كان الأمر يتعلق بتجديد صغير أو مشروع بناء واسع النطاق، نتعامل مع كل مهمة بنفس المستوى من التفاني والدقة.
            </p>
            <p className="text-lg">
              في VCE، نؤمن ببناء ليس فقط الهياكل، بل العلاقات أيضاً. يضمن نهجنا الذي يركز على العميل 
              أننا نفهم ونلبي الاحتياجات الفريدة لكل مشروع، مما يحقق نتائج تتجاوز التوقعات.
            </p>
          </div>
          
          {/* Stats */}
          <div className="bg-vce-red text-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">نبذة عن VCE</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
