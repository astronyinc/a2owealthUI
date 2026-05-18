
import React, { useState } from 'react'; 
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 
import { Menu, X } from 'lucide-react'; 


import { Button } from '@/app/components/ui/button'; 

const Header = () => { 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const pathname = usePathname(); 

  const navLinks = [ 
    { name: 'Home', path: '/' }, 
    { name: 'Services', path: '/services' }, 
    { name: 'Education', path: '/education' }, 
    { name: 'About', path: '/about' }, 
    { name: 'Contact', path: '/contact' }, 
  ]; 

  const isActive = (path) => pathname === path; 

  return ( 
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex h-auto items-center justify-between py-3 sm:py-4 md:py-6"> 
          
          {/* Logo */} 
          <Link href="/" className="flex items-center flex-shrink-0"> 
            <img src="https://horizons-cdn.hostinger.com/6307d762-3165-4011-bbeb-90e76ff361db/596c329ec3203e48a13f6e29d4433e97.png" alt="A2O Wealth Systems" className="h-16 sm:h-24 md:h-[144px] w-auto" /> 
          </Link> 

          {/* Desktop Navigation */} 
          <nav className="hidden md:flex items-center space-x-1"> 
            {navLinks.map((link) => ( 
              <Link key={link.path} href={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${ isActive(link.path) ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted' }`} > 
                {link.name} 
              </Link> 
            ))} 
          </nav> 

          {/* Desktop CTA */} 
          <div className="hidden md:block"> 
            <Button asChild> 
              <Link href="/contact">Get started</Link> 
            </Button> 
          </div> 

          {/* Mobile Menu Button */} 
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-all duration-200" aria-label="Toggle menu" > 
            {mobileMenuOpen ? ( 
              <X className="h-6 w-6 text-foreground" /> 
            ) : ( 
              <Menu className="h-6 w-6 text-foreground" /> 
            )} 
          </button> 
        </div> 

        {/* Mobile Navigation */} 
        {mobileMenuOpen && ( 
          <div className="md:hidden py-4 border-t"> 
            <nav className="flex flex-col space-y-2"> 
              {navLinks.map((link) => ( 
                <Link key={link.path} href={link.path} onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${ isActive(link.path) ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted' }`} > 
                  {link.name} 
                </Link> 
              ))} 
              <div className="pt-2"> 
                <Button asChild className="w-full"> 
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}> 
                    Get started 
                  </Link> 
                </Button> 
              </div> 
            </nav> 
          </div> 
        )} 
      </div> 
    </header> 
  ); 
}; 

export default Header;
