
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "قامت VCE بتنفيذ مشروعنا في الوقت المحدد وضمن الميزانية. لقد تجاوز اهتمامهم بالتفاصيل وجودة العمل توقعاتنا. نتطلع إلى العمل معهم مرة أخرى في المستقبل.",
      author: "أحمد محمود",
      role: "مدير المشروع",
      company: "شركة مصراتة للتطوير"
    },
    {
      id: 2,
      content: "العمل مع VCE كان متعة من البداية إلى النهاية. كان فريقهم محترفًا ومتجاوبًا وملتزمًا حقًا بنجاح مشروعنا. والنتيجة تتحدث عن نفسها.",
      author: "صوفيا خليل",
      role: "الرئيس التنفيذي",
      company: "مجموعة البحر المتوسط القابضة"
    },
    {
      id: 3,
      content: "الخبرة الهندسية لشركة VCE لا مثيل لها. لقد قدموا حلولًا مبتكرة للمشاكل المعقدة، مما أدى إلى مشروع لا يلبي متطلباتنا فحسب، بل يتجاوزها.",
      author: "عمر فتحي",
      role: "مدير العمليات",
      company: "المجموعة الصناعية الليبية"
    }
  ];

  return (
    <section className="bg-vce-blue py-16 sm:py-24">
      <div className="vce-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          ماذا يقول عملاؤنا
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8" dir="rtl">
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
                  {testimonial.role}، {testimonial.company}
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
