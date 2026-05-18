"use client"; 

import React, { useEffect } from 'react'; 
import { motion } from 'framer-motion'; 
import { Target, Heart, Shield, Zap } from 'lucide-react'; 
import Header from '../components/Header.jsx'; 
import Footer from '../components/Footer.jsx'; 

const AboutPage = () => { 
  // Safely manage document titles on client-side views
  useEffect(() => {
    document.title = "About - A2O Wealth Systems";
  }, []);

  const values = [ 
    { icon: Target, title: 'Client-focused approach', description: 'We prioritize the long-term success of our advisors and their clients above all else.', }, 
    { icon: Heart, title: 'Integrity and trust', description: 'Building lasting relationships through honest guidance and transparent practices.', }, 
    { icon: Shield, title: 'Professional excellence', description: 'Maintaining the highest standards of training, compliance, and industry knowledge.', }, 
    { icon: Zap, title: 'Continuous growth', description: 'Supporting ongoing development and adaptation in a changing financial landscape.', }, 
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
                Building careers that last 
              </h1> 
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"> 
                At A2O Wealth Systems, we believe that success in financial services comes from a foundation of knowledge, guidance, and proven systems. 
              </p> 
            </motion.div> 
          </div> 
        </section> 

        {/* Story Section */} 
        <section className="py-20"> 
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> 
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} > 
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-snug"> Our story </h2> 
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed"> 
                <p> A2O Wealth Systems was founded on a simple principle: everyone deserves access to quality training and mentorship when building a career in financial services. Too many talented individuals struggle to break into the industry or fail to reach their potential because they lack the right support and resources. </p> 
                <p> We created A2O to change that. Our team of experienced financial professionals has built successful practices and understands what it takes to thrive in this industry. We've taken that knowledge and created a comprehensive system that supports advisors at every stage of their journey—from their first client conversation to building a thriving practice. </p> 
                <p> Today, we work with advisors across the country, helping them build careers that provide financial security, professional fulfillment, and the opportunity to make a real difference in their clients' lives. </p> 
              </div> 
            </motion.div> 
          </div> 
        </section> 

        {/* Mission Section */} 
        <section className="py-20 bg-card"> 
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> 
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} > 
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-snug"> Our mission </h2> 
              <p className="text-lg text-muted-foreground leading-relaxed"> To build trust and support long-term success in financial services by providing comprehensive training, personalized mentorship, and proven systems that empower advisors to serve their clients with confidence and integrity. </p> 
            </motion.div> 
          </div> 
        </section> 

        {/* Values Section */} 
        <section className="py-20"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16" > 
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug"> Our core values </h2> 
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto"> These principles guide everything we do and shape how we support our advisors. </p> 
            </motion.div> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
              {values.map((value, index) => ( 
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-muted rounded-xl p-6" > 
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4"> 
                    <value.icon className="h-6 w-6 text-primary" /> 
                  </div> 
                  <h3 className="text-xl font-semibold text-foreground mb-3"> {value.title} </h3> 
                  <p className="text-sm text-muted-foreground leading-relaxed"> {value.description} </p> 
                </motion.div> 
              ))} 
            </div> 
          </div> 
        </section> 
        <Footer /> 
      </div> 
    </> 
  ); 
}; 

export default AboutPage;
