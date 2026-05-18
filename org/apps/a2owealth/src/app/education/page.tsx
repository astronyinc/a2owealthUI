'use client'; 
import React, { useEffect } from 'react'; 
import Link from 'next/link'; 
import { motion } from 'framer-motion'; 
import { ArrowRight, CheckCircle2, BookOpen, LineChart, Building2 } from 'lucide-react'; 
import { Button } from '@/app/components/ui/button'; 
import { Card } from '@/app/components/ui/card'; 
import Header from '@/app/components/Header.jsx'; 
import Footer from '@/app/components/Footer.jsx'; 

const EducationPage = () => { 
  // Safely manage document titles on client-side views
  useEffect(() => {
    document.title = "Education & Training - A2O Wealth Systems";
  }, []);

  const educationPrograms = [ 
    { id: 'financial-services', title: 'Financial Services', icon: LineChart, description: 'Discover dynamic career opportunities in financial services. Master essential analytical thinking, refine client relationship management, and navigate complex regulatory environments. Keep pace with current industry trends while building a sustainable practice.', benefits: [ 'Accelerated career advancement pathways', 'Preparation for industry certifications', 'High-value networking opportunities', 'Hands-on, real-world experience', ], image: 'https://images.unsplash.com/photo-1693305886158-24d846d889f9', imageAlt: 'Professionals analyzing financial data on multiple screens', callout: "A2O's Financial Services Training Program", }, 
    { id: 'commercial-real-estate', title: 'Commercial Real Estate', icon: Building2, description: 'Your comprehensive guide to CRE careers—whether you aim to be a broker, analyst, or investor. Learn to identify investment opportunities, gather actionable market insights, and master property valuation through our rigorous training approach.', benefits: [ 'Advanced investment knowledge and strategies', 'Expert-level deal analysis skills', 'Deep local and national market expertise', 'Practical portfolio building techniques', ], image: 'https://images.unsplash.com/photo-1685279053124-f47a436a9c1e', imageAlt: 'Modern commercial real estate building exterior', callout: "A2O's Commercial Real Estate Mastery Program", }, 
    { id: 'lending-solutions', title: 'Lending Solutions', icon: BookOpen, description: 'Master the intricacies of lending products including mortgages, commercial loans, and lines of credit. Explore career paths for loan officers and underwriters while learning the fundamentals of underwriting and advanced risk assessment.', benefits: [ 'Specialized underwriting expertise', 'Comprehensive loan product knowledge', 'Advanced risk management capabilities', 'Structured career growth in lending', ], image: 'https://images.unsplash.com/photo-1642054220431-649c53b0d3de', imageAlt: 'Business professionals discussing a lending contract', callout: "A2O's Lending Solutions Certification Program", }, 
  ]; 

  return ( 
    <> 
      <div className="min-h-screen flex flex-col"> 
        <Header /> 

        {/* Hero Section */} 
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"> 
          <div className="absolute inset-0 z-0"> 
            <img src="https://images.unsplash.com/photo-1570126618953-d437176e8c79" alt="Professional team in a modern training room" className="w-full h-full object-cover" /> 
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/50"></div> 
          </div> 
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full"> 
            <div className="max-w-2xl"> 
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} > 
                <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-6"> 
                  <BookOpen className="h-4 w-4" /> <span>Professional Development</span> 
                </div> 
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em' }} > 
                  Education & Training Resources 
                </h1> 
                <p className="text-lg text-muted-foreground leading-relaxed mb-8"> 
                  At A2O Wealth Systems, we are deeply committed to your professional development. Our comprehensive education initiatives provide the knowledge, skills, and mentorship you need to thrive in today's competitive landscape. 
                </p> 
              </motion.div> 
            </div> 
          </div> 
        </section> 

        {/* Main Content Sections */} 
        <section className="py-24 bg-muted/30"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20"> 
            {educationPrograms.map((program, index) => ( 
              <motion.div key={program.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.1 }} > 
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card group"> 
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch`}> 
                    
                    {/* Content Side */} 
                    <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}> 
                      <div className="flex items-center space-x-3 mb-6"> 
                        <div className="p-3 bg-primary/10 rounded-xl text-primary"> 
                          <program.icon className="h-6 w-6" /> 
                        </div> 
                        <h2 className="text-3xl font-bold text-foreground"> {program.title} </h2> 
                      </div> 
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8"> {program.description} </p> 
                      <div className="mb-8"> 
                        <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4"> Key Learning Outcomes </h3> 
                        <ul className="space-y-3"> 
                          {program.benefits.map((benefit, i) => ( 
                            <li key={i} className="flex items-start"> 
                              <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mr-3 mt-0.5" /> 
                              <span className="text-muted-foreground">{benefit}</span> 
                            </li> 
                          ))} 
                        </ul> 
                      </div> 
                      <div className="mt-auto pt-6 border-t border-border"> 
                        <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/10"> 
                          <p className="text-sm font-semibold text-secondary"> {program.callout} </p> 
                        </div> 
                      </div> 
                    </div> 

                    {/* Image Side */} 
                    <div className={`relative min-h-[300px] lg:min-h-full ${index % 2 === 1 ? 'lg:order-1' : ''}`}> 
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" /> 
                      <img src={program.image} alt={program.imageAlt} className="absolute inset-0 w-full h-full object-cover object-center" /> 
                    </div> 
                  </div> 
                </Card> 
              </motion.div> 
            ))} 
          </div> 
        </section> 

        {/* CTA Section */} 
        <section className="py-24 bg-primary text-primary-foreground"> 
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} > 
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance"> Ready to elevate your expertise? </h2> 
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-10 max-w-2xl mx-auto"> Join our training programs and get the comprehensive education, mentorship, and practical experience needed to build a lasting career. </p> 
              
              {/* Corrected Link to Next.js href routing style */}
              <Button asChild size="lg" variant="secondary" className="text-secondary-foreground hover:bg-secondary/90 font-semibold px-8" > 
                <Link href="/contact"> 
                  Explore Training Programs <ArrowRight className="ml-2 h-5 w-5" /> 
                </Link> 
              </Button> 
            </motion.div> 
          </div> 
        </section> 
        <Footer /> 
      </div> 
    </> 
  ); 
}; 

export default EducationPage;
