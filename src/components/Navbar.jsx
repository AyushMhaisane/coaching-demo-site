import React, { useState, useEffect } from 'react';
import { instituteData } from '../instituteData';
import { Phone, GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Links Data
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- BRANDING --- */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className={`p-2 rounded-lg text-white transition-colors ${scrolled ? 'bg-blue-900' : 'bg-blue-800'}`}>
             <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-blue-900 leading-none font-poppins">
              {instituteData.name}
            </h1>
          </div>
        </div>

        {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-600 font-medium hover:text-blue-600 hover:font-bold transition-all text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href={`tel:${instituteData.phone}`} 
            className="flex items-center gap-2 bg-yellow-500 text-blue-900 font-bold px-5 py-2.5 rounded-full hover:bg-yellow-400 transition shadow-md"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>

        {/* --- MOBILE MENU BUTTON (Visible only on Mobile) --- */}
        <button 
          className="md:hidden text-blue-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 flex flex-col items-center gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)} // Close menu on click
              className="text-gray-800 font-medium text-lg w-full text-center py-2 hover:bg-blue-50"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${instituteData.phone}`} 
            className="flex items-center gap-2 bg-yellow-500 text-blue-900 font-bold px-8 py-3 rounded-xl mt-2"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;