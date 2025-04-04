
import React, { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const Contact = () => {
  const { language, t } = useLanguage();
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      label: t('contact.address'),
      value: language === 'ar' ? "123 شارع الإنشاءات، مصراتة، ليبيا" : "123 Construction Street, Misurata, Libya"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: t('contact.phone.label'),
      value: "+218 0912179069 / +218 0912229069"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: t('contact.email.label'),
      value: "Vivian.pe.co@gmail.com"
    }
  ];

  const mapUrl = "https://maps.app.goo.gl/UJrbitZog7ogtP688?g_st=com.google.maps.preview.copy";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: values.name,
            email: values.email,
            phone: values.phone || null,
            message: values.message,
          },
        ]);
      
      if (error) throw error;
      
      toast.success(language === 'ar' 
        ? 'تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.' 
        : 'Message sent successfully! We will get back to you soon.');
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(language === 'ar'
        ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'
        : 'There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="vce-section">
      <div className="vce-container">
        <h2 className="vce-heading text-center">{t('contact.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-lg p-8 shadow-md" dir={textDirection}>
            <h3 className="text-2xl font-bold mb-6 text-vce-blue">{t('contact.info')}</h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-vce-blue">
                    {info.icon}
                  </div>
                  <div className={`${language === 'ar' ? 'mr-4' : 'ml-4'}`}>
                    <p className="font-medium text-lg">{info.label}</p>
                    <p className="text-gray-600 text-lg">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Google Maps Link */}
            <div className="mt-8">
              <a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full p-4 bg-vce-blue text-white rounded-lg hover:bg-vce-blue/90 transition-colors"
              >
                <MapPin className="mr-2" />
                {language === 'ar' ? 'عرض الموقع على الخريطة' : 'View Location on Map'}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-md" dir={textDirection}>
            <h3 className="text-2xl font-bold mb-6 text-vce-blue">
              {language === 'ar' ? 'Send us a message' : 'Send us a message'}
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{'Name'}</FormLabel>
                      <FormControl>
                        <Input placeholder={'Enter your name'} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{'Email'}</FormLabel>
                      <FormControl>
                        <Input placeholder={'Enter your email'} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{'Phone (optional)'}</FormLabel>
                      <FormControl>
                        <Input placeholder={'Enter your phone number'} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{'Message'}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={'Type your message here...'} 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-vce-blue hover:bg-vce-blue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? (language === 'ar' ? 'Sending...' : 'Sending...')
                    : (language === 'ar' ? 'Send Message' : 'Send Message')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
