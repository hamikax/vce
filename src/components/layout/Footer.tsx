
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    "البناء",
    "الهندسة",
    "إدارة المشاريع",
    "الصيانة",
    "الاستشارات",
    "التصميم"
  ];
  
  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "من نحن", href: "#about" },
    { name: "الخدمات", href: "#services" },
    { name: "المشاريع", href: "#projects" },
    { name: "اتصل بنا", href: "#contact" },
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-vce-blue text-white">
      <div className="vce-container pt-16 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" dir="rtl">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h2 className="text-3xl font-bold mb-1">VCE</h2>
              <p className="text-sm">فيفيان للإنشاءات والهندسة</p>
            </div>
            <p className="mb-4 text-gray-300">
              نبني مستقبل ليبيا بهندسة دقيقة وإنشاءات عالية الجودة منذ عام 2019.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="bg-white/10 hover:bg-vce-red transition-colors duration-300 p-2 rounded ml-3"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>123 شارع الإنشاءات</p>
              <p>مصراتة، ليبيا</p>
              <p>هاتف: 5678 234 91 218+</p>
              <p>البريد الإلكتروني: info@vce-construction.com</p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-white/20 text-center text-gray-400 text-sm">
          <p>© {currentYear} VCE - فيفيان للإنشاءات والهندسة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
