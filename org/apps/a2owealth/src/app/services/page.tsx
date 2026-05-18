'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award, Briefcase } from 'lucide-react';
import { Button } from '@/app/components/ui/button';  
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ServiceCard from '@/app/components/ServiceCard';

export default function ServicesPage() {
  const services = [
    {
      title: 'Comprehensive training programs',
      description: "Our training curriculum is designed to give you the knowledge and skills needed to succeed in financial services. From foundational concepts to advanced strategies, you'll learn from industry experts who have built successful practices.",
      benefits: [
        'Self-paced online modules covering essential financial concepts',
        'Live workshops and interactive sessions with experienced advisors',
        'Certification programs recognized across the industry',
        'Ongoing education to keep you current with market trends',
      ],
      image: 'https://images.unsplash.com/photo-1684143121047-efc80eaca129',
      imageAlt: 'Professional training session with financial advisors',
      reverse: false,
    },
    {
      title: 'Personalized mentorship',
      description: "Success in financial services requires more than just knowledge—it requires guidance from someone who has been there. Our mentorship program pairs you with experienced professionals who understand your goals and can help you navigate challenges.",
      benefits: [
        'One-on-one coaching sessions tailored to your specific needs',
        'Regular check-ins to track progress and adjust strategies',
        'Access to a network of successful advisors and industry leaders',
        'Real-world insights that go beyond textbook learning',
      ],
      image: 'https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3',
      imageAlt: 'Professional mentorship and financial education in modern upscale setting',
      reverse: true,
    },
    {
      title: 'Proven platform and systems',
      description: "We provide you with the same tools, systems, and resources that top-performing advisors use to build and grow their practices. Our platform is designed to streamline your workflow and help you focus on what matters most—serving your clients.",
      benefits: [
        'Client management tools to organize and track relationships',
        'Marketing resources and templates to grow your practice',
        'Compliance support to ensure you meet regulatory requirements',
        'Technology integrations that save time and increase efficiency',
      ],
      image: 'https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa',
      imageAlt: 'Modern financial technology platform dashboard',
      reverse: false,
    },
  ];

  React.useEffect(() => {
    document.title = 'Services - A2O Wealth Systems';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Explore our comprehensive training programs, personalized mentorship, and proven platform designed to support your success in financial services.');
    }
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              Services designed for your success
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We provide everything you need to build and grow a successful career in financial services—from comprehensive training to personalized mentorship and proven systems.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                  image={service.image}
                  imageAlt={service.imageAlt}
                  reverse={service.reverse}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}