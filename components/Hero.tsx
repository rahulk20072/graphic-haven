import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
         <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Background Texture" 
            className="w-full h-full object-cover opacity-20"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-transparent to-dark-950"></div>
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">VISUAL</span>
          <span className="block">ALCHEMY</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 font-light">
          Translating complex ideas into compelling visual narratives. 
          We craft brands, websites, and experiences that resonate.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-brand-500 rounded-full font-bold text-white hover:bg-brand-600 transition-all flex items-center justify-center gap-2 group"
          >
            View Portfolio
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/20 rounded-full font-bold text-white hover:bg-white/10 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;