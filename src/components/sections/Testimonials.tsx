
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "VCE delivered our project on time and within budget. Their attention to detail and quality of work exceeded our expectations. We look forward to working with them again in the future.",
      author: "Ahmed Mahmoud",
      role: "Project Director",
      company: "Misurata Development Corp"
    },
    {
      id: 2,
      content: "Working with VCE was a pleasure from start to finish. Their team was professional, responsive, and genuinely committed to the success of our project. The result speaks for itself.",
      author: "Sophia Khalil",
      role: "CEO",
      company: "Mediterranean Holdings"
    },
    {
      id: 3,
      content: "VCE's engineering expertise is second to none. They provided innovative solutions to complex problems, resulting in a project that not only met but exceeded our requirements.",
      author: "Omar Fathi",
      role: "Operations Manager",
      company: "Libyan Industrial Group"
    }
  ];

  return (
    <section className="bg-vce-blue py-16 sm:py-24">
      <div className="vce-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white">
          What Our Clients Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
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
