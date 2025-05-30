import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-teal-50 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <p className="text-indigo-600 font-medium mb-4 animate-fadeIn">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-pink-800 mb-4 animate-slideUp font-serif ...">
            {resumeData.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6 animate-slideUp animation-delay-200">
            {resumeData.title}
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl animate-fadeIn animation-delay-400">
            {resumeData.about}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fadeIn animation-delay-600">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors shadow-md"
            >
              Contact Me <ArrowRight size={18} />
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex gap-6 animate-fadeIn animation-delay-800">
            {resumeData.contact.socials.map((social) => {
              const SocialIcon = social.icon === 'Github' ? Github : social.icon === 'Linkedin' ? Linkedin : Mail;
              return (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                  aria-label={social.name}
                >
                  <SocialIcon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
        <div className="w-1 h-6 bg-indigo-600 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;