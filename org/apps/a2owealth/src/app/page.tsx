"use client"; 
import React, { useEffect } from 'react'; 
import Link from 'next/link'; 
import { motion } from 'framer-motion'; 
import { ArrowRight, TrendingUp, Users, Award, Briefcase } from 'lucide-react'; 
import { Button } from '@/app/components/ui/button'; 
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
 
export default function Index() { 
  // Safely manage document titles on client-side pages
  useEffect(() => {
    document.title = "A2O Wealth Systems - Build your career in financial services";
  }, []);

  const careerPaths = [ 
    { icon: TrendingUp, title: 'Part-time income', description: 'Build a flexible side income while maintaining your current career', }, 
    { icon: Briefcase, title: 'Full-time career', description: 'Transition into a rewarding full-time position in financial services', }, 
    { icon: Award, title: 'Leadership positions', description: 'Grow into management and leadership roles with proven systems', }, 
  ]; 

  return ( 
    <> 
      <div className="min-h-screen flex flex-col"> 
        <Header /> 

        {/* Hero Section */} 
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"> 
          {/* Background Image */} 
          <div className="absolute inset-0 z-0"> 
            <img src="https://images.unsplash.com/photo-1684143121047-efc80eaca129" alt="Professional financial services team collaborating" className="w-full h-full object-cover" /> 
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div> 
          </div> 

          {/* Content */} 
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"> 
            <div className="max-w-3xl"> 
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} > 
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6" style={{ letterSpacing: '-0.02em' }} > 
                  Build a real career in financial services 
                </h1> 
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"> 
                  We provide comprehensive training, personalized mentorship, and proven systems to help you succeed in the financial services industry—whether you're looking for part-time income or a full-time career. 
                </p> 
                <div className="flex flex-col sm:flex-row gap-4"> 
                  {/* use asChild to merge Link and Button tags together safely */}
                  <Button asChild size="lg" className="group"> 
                    <Link href="/services"> 
                      Explore our services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> 
                    </Link> 
                  </Button> 
                  <Button asChild size="lg" variant="outline"> 
                    <Link href="/contact">Get started</Link> 
                  </Button> 
                </div> 
              </motion.div> 
            </div> 
          </div> 
        </section> 

        {/* Overview Section */} 
        <section className="py-20 bg-card"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16" > 
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug"> Three pillars of success </h2> 
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto"> Our comprehensive approach combines expert training, personalized guidance, and proven systems to support your growth at every stage. </p> 
            </motion.div> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
              {[ 
                { icon: Users, title: 'Training', description: 'Industry-leading curriculum designed to build foundational knowledge and advanced skills in financial services.', }, 
                { icon: Award, title: 'Mentorship', description: 'One-on-one guidance from experienced professionals who understand your goals and challenges.', }, 
                { icon: TrendingUp, title: 'Platform', description: 'Access to proven systems, tools, and resources that successful advisors use every day.', }, 
              ].map((item, index) => ( 
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300" > 
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4"> 
                    <item.icon className="h-6 w-6 text-primary" /> 
                  </div> 
                  <h3 className="text-xl font-semibold text-foreground mb-3"> {item.title} </h3> 
                  <p className="text-sm text-muted-foreground leading-relaxed"> {item.description} </p> 
                </motion.div> 
              ))} 
            </div> 
          </div> 
        </section> 

        {/* Career Paths Section */} 
        <section className="py-20"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16" > 
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug"> Multiple paths to success </h2> 
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto"> Whether you're looking to supplement your income or build a full-time career, we support your journey with flexible options and clear pathways. </p> 
            </motion.div> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
              {careerPaths.map((path, index) => ( 
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-muted rounded-xl p-6" > 
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 mb-4"> 
                    <path.icon className="h-6 w-6 text-secondary" /> 
                  </div> 
                  <h3 className="text-xl font-semibold text-foreground mb-3"> {path.title} </h3> 
                  <p className="text-sm text-muted-foreground leading-relaxed"> {path.description} </p> 
                </motion.div> 
              ))} 
            </div> 
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-12" > 
              <Button asChild size="lg"> 
                <Link href="/contact">Start your journey</Link> 
              </Button> 
            </motion.div> 
          </div> 
        </section> 
        <Footer /> 
      </div> 
    </> 
  ); 
};
