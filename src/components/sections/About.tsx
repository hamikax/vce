
import React from 'react';

const About = () => {
  const stats = [
    { label: "Founded", value: "2019" },
    { label: "Location", value: "Misurata" },
    { label: "Projects", value: "20+" },
    { label: "Team Size", value: "20+" },
  ];

  return (
    <section id="about" className="vce-section bg-gray-50">
      <div className="vce-container">
        <h2 className="vce-heading text-center">Why VCE?</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-lg mb-6">
              Vivian Construction & Engineering (VCE) is a leading construction and engineering firm based in Misurata, Libya. 
              Since our founding in 2019, we've established ourselves as the premier provider of high-quality construction 
              and engineering services across the region.
            </p>
            <p className="text-lg mb-6">
              Our team of experienced professionals brings a wealth of knowledge and expertise to every project. 
              We pride ourselves on our commitment to excellence, innovation, and customer satisfaction. 
              Whether it's a small renovation or a large-scale construction project, we approach each job with 
              the same level of dedication and precision.
            </p>
            <p className="text-lg">
              At VCE, we believe in building not just structures, but relationships. Our client-centered approach 
              ensures that we understand and meet the unique needs of each project, delivering results that exceed expectations.
            </p>
          </div>
          
          {/* Stats */}
          <div className="bg-vce-red text-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">VCE at a Glance</h3>
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
