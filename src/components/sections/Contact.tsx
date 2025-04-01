
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم إرسال الرسالة!",
        description: "لقد تلقينا رسالتك وسنعاود التواصل معك قريبًا.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "العنوان",
      value: "123 شارع الإنشاءات، مصراتة، ليبيا"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "الهاتف",
      value: "+218 91 234 5678"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "البريد الإلكتروني",
      value: "info@vce-construction.com"
    }
  ];

  return (
    <section id="contact" className="vce-section">
      <div className="vce-container">
        <h2 className="vce-heading text-center">اتصل بـ VCE</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-vce-red">احصل على عرض سعر</h3>
            
            <form onSubmit={handleSubmit} dir="rtl">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      الاسم *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vce-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vce-blue"
                      dir="ltr"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vce-blue"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                      الموضوع *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vce-blue"
                    >
                      <option value="">اختر خدمة</option>
                      <option value="Construction">البناء</option>
                      <option value="Engineering">الهندسة</option>
                      <option value="Project Management">إدارة المشاريع</option>
                      <option value="Maintenance">الصيانة</option>
                      <option value="Other">أخرى</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    رسالتك *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vce-blue"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="vce-btn vce-btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </button>
                </div>
              </div>
            </form>
          </div>
          
          {/* Contact Information and Map */}
          <div dir="rtl">
            <h3 className="text-2xl font-bold mb-6 text-vce-blue">معلومات الاتصال</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-vce-blue">
                    {info.icon}
                  </div>
                  <div className="mr-4">
                    <p className="font-medium">{info.label}</p>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map (Placeholder) */}
            <div className="h-72 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center p-4">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-vce-red" />
                  <p className="text-gray-600">خريطة مصراتة، ليبيا</p>
                  <p className="text-sm text-gray-500">(ستظهر هنا خريطة تفاعلية)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
