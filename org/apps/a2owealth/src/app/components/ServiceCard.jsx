"use client"; // 1. Added client directive for framer-motion

import React from 'react'; 
import { motion } from 'framer-motion'; 
import { Check } from 'lucide-react'; 
import { Button } from '@/app/components/ui/button'; 
import Link from 'next/link'; // 2. Swapped to Next.js Link

const ServiceCard = ({ title, description, benefits, image, imageAlt, reverse = false }) => { 
  return ( 
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${ reverse ? 'md:flex-row-reverse' : '' }`} > 
      
      {/* Image */} 
      <div className={`${reverse ? 'md:order-2' : ''}`}> 
        <div className="relative rounded-2xl overflow-hidden shadow-lg"> 
          <img src={image} alt={imageAlt} className="w-full h-[300px] md:h-[400px] object-cover" /> 
        </div> 
      </div> 

      {/* Content */} 
      <div className={`${reverse ? 'md:order-1' : ''}`}> 
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug"> {title} </h3> 
        <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-prose"> {description} </p> 
        
        {benefits && benefits.length > 0 && ( 
          <ul className="space-y-3 mb-6"> 
            {benefits.map((benefit, index) => ( 
              <li key={index} className="flex items-start space-x-3"> 
                <div className="flex-shrink-0 mt-0.5"> 
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary/10"> 
                    <Check className="h-3 w-3 text-secondary" /> 
                  </div> 
                </div> 
                <span className="text-sm text-foreground leading-relaxed">{benefit}</span> 
              </li> 
            ))} 
          </ul> 
        )} 

        {/* 3. Corrected Button to use Next.js href */}
        <Button asChild> 
          <Link href="/contact">Learn more</Link> 
        </Button> 
      </div> 
    </motion.div> 
  ); 
}; 

export default ServiceCard;
