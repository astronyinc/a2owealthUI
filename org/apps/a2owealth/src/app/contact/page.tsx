"use client"; 

import React, { useEffect } from 'react'; 
import { motion } from 'framer-motion'; 
import { Mail, Phone, MapPin, Clock } from 'lucide-react'; 
import Header from '@/app/components/Header.jsx'; 
import Footer from '@/app/components/Footer.jsx'; 
import ContactForm from '@/app/components/ContactForm.jsx'; 

const ContactPage = () => { 
  // Safely manage document titles on client-side views
  useEffect(() => {
    document.title = "Contact - A2O Wealth Systems";
  }, []);

  const contactInfo = [ 
    { icon: Mail, label: 'Email', value: 'info@a2owealth.com', href: 'mailto:info@a2owealth.com', }, 
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567', }, 
    { icon: MapPin, label: 'Office', value: 'New York, NY', href: null, }, 
    { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9am-6pm EST', href: null, }, 
  ]; 

  return ( 
    <> 
      <div className="min-h-screen flex flex-col"> 
        <Header /> 

        {/* Hero Section */} 
        <section className="py-20 bg-muted"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} > 
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em' }} > 
                Let's start a conversation 
              </h1> 
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"> 
                Whether you're ready to get started or just have questions about our programs, we're here to help. Reach out and we'll get back to you within one business day. 
              </p> 
            </motion.div> 
          </div> 
        </section> 

        {/* Contact Section */} 
        <section className="py-20"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> 
              
              {/* Contact Form */} 
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} > 
                <div className="bg-card rounded-2xl p-8 shadow-lg"> 
                  <h2 className="text-2xl font-semibold text-foreground mb-6"> Send us a message </h2> 
                  <ContactForm /> 
                </div> 
              </motion.div> 

              {/* Contact Information */} 
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} > 
                <div className="space-y-8"> 
                  <div> 
                    <h2 className="text-2xl font-semibold text-foreground mb-4"> Contact information </h2> 
                    <p className="text-base text-muted-foreground leading-relaxed"> We're committed to responding to all inquiries promptly. Choose the method that works best for you. </p> 
                  </div> 
                  <div className="space-y-4"> 
                    {contactInfo.map((item, index) => ( 
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-200" > 
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0"> 
                          <item.icon className="h-5 w-5 text-primary" /> 
                        </div> 
                        <div> 
                          <p className="text-sm font-medium text-foreground mb-1"> {item.label} </p> 
                          {item.href ? ( 
                            <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200" > {item.value} </a> 
                          ) : ( 
                            <p className="text-sm text-muted-foreground"> {item.value} </p> 
                          )} 
                        </div> 
                      </div> 
                    ))} 
                  </div> 
                  <div className="bg-accent rounded-xl p-6"> 
                    <h3 className="text-lg font-semibold text-accent-foreground mb-3"> Ready to get started? </h3> 
                    <p className="text-sm text-accent-foreground/80 leading-relaxed"> Schedule a call with our team to discuss your goals and learn how A2O Wealth Systems can support your journey in financial services. </p> 
                  </div> 
                </div> 
              </motion.div> 
            </div> 
          </div> 
        </section> 
        <Footer /> 
      </div> 
    </> 
  ); 
}; 

export default ContactPage;
