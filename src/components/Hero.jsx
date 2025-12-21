// src/components/Hero.jsx
import React from 'react';
import { instituteData } from '../instituteData';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id='home' className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      
      {/* BACKGROUND IMAGE WITH OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src={instituteData.heroImage} 
          alt="Students studying" 
          className="w-full h-full object-cover scale-105" // scale-105 adds a slight zoom effect
        />
        {/* The blue overlay - change opacity (e.g., bg-blue-900/85) to make image clearer or darker */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 to-blue-900/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          {/* A small trust badge */}
          <div className="inline-block bg-yellow-500/20 border border-yellow-500 text-yellow-400 text-sm font-bold px-4 py-1 rounded-full mb-6">
            Rated 4.9/5 by Parents
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-sm">
            {instituteData.heroHeadline}
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed drop-shadow-sm">
            {instituteData.heroSubtext}
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={instituteData.whatsappLink}
              className="flex items-center justify-center gap-2 bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition shadow-lg hover:shadow-yellow-500/30 text-lg"
            >
              Enquire on WhatsApp
              <ArrowRight size={20} />
            </a>
            <button className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold border-2 border-white/30 hover:bg-white/20 transition backdrop-blur-sm text-lg">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Stats Row - Now floating with a glass effect */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto md:mx-0 bg-blue-900/50 backdrop-blur-md p-6 rounded-2xl border border-blue-800/50">
          {instituteData.stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-extrabold text-yellow-400">{stat.number}</div>
              <div className="text-sm md:text-base text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;