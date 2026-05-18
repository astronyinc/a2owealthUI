import React from 'react'; 
import Link from 'next/link'; 
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'; 

const Footer = () => { 
  return (
    <footer className="bg-muted text-muted-foreground border-t"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
          
          {/* Brand */} 
          <div> 
            <Link href="/" className="inline-block mb-6"> 
              <img src="https://horizons-cdn.hostinger.com/6307d762-3165-4011-bbeb-90e76ff361db/596c329ec3203e48a13f6e29d4433e97.png" alt="A2O Wealth Systems" className="h-20 sm:h-28 md:h-[144px] w-auto" /> 
            </Link> 
            <p className="text-sm leading-relaxed max-w-xs"> 
              Building real careers in financial services through comprehensive training, personalized mentorship, and proven systems. 
            </p> 
          </div> 

          {/* Quick Links */} 
          <div> 
            <span className="text-sm font-semibold text-foreground mb-4 block"> Quick links </span> 
            <nav className="flex flex-col space-y-2"> 
              <Link href="/" className="text-sm hover:text-foreground transition-colors duration-200"> Home </Link> 
              <Link href="/services" className="text-sm hover:text-foreground transition-colors duration-200"> Services </Link> 
              <Link href="/about" className="text-sm hover:text-foreground transition-colors duration-200"> About </Link> 
              <Link href="/contact" className="text-sm hover:text-foreground transition-colors duration-200"> Contact </Link> 
            </nav> 
          </div> 

          {/* Contact Info */} 
          <div> 
            <span className="text-sm font-semibold text-foreground mb-4 block"> Contact </span> 
            <div className="flex flex-col space-y-3"> 
              <div className="flex items-center space-x-2"> 
                <Mail className="h-4 w-4" /> 
                <span className="text-sm">info@a2owealth.com</span> 
              </div> 
              <div className="flex items-center space-x-2"> 
                <Phone className="h-4 w-4" /> 
                <span className="text-sm">+1972-965-7751</span> 
              </div> 
              <div className="flex items-center space-x-2"> 
                <MapPin className="h-4 w-4" /> 
                <span className="text-sm">New York, NY</span> 
              </div> 
            </div> 
            <div className="flex items-center space-x-3 mt-4"> 
              <a href="#" className="p-2 rounded-lg hover:bg-background transition-all duration-200" aria-label="LinkedIn"> 
                <Linkedin className="h-5 w-5" /> 
              </a> 
              <a href="#" className="p-2 rounded-lg hover:bg-background transition-all duration-200" aria-label="Twitter"> 
                <Twitter className="h-5 w-5" /> 
              </a> 
              <a href="#" className="p-2 rounded-lg hover:bg-background transition-all duration-200" aria-label="Facebook"> 
                <Facebook className="h-5 w-5" /> 
              </a> 
            </div> 
          </div> 
        </div> 

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"> 
          <p className="text-sm"> © 2026 A2O Wealth Systems. All rights reserved. </p> 
          <div className="flex items-center space-x-6"> 
            <Link href="#" className="text-sm hover:text-foreground transition-colors duration-200"> Privacy Policy </Link> 
            <Link href="#" className="text-sm hover:text-foreground transition-colors duration-200"> Terms of Service </Link> 
          </div> 
        </div> 
      </div> 
    </footer>
  ); 
}; 

export default Footer;
