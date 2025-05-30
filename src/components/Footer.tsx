import React from 'react';
import { Heart } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              {resumeData.name.split(' ')[0]}
              <span className="text-indigo-400">.dev</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Building amazing digital experiences with clean, efficient code.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-4">
              {resumeData.contact.socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
            
            <p className="text-gray-500 text-sm flex items-center">
              &copy; {currentYear} {resumeData.name}. Made with <Heart size={14} className="mx-1 text-red-500" /> in React
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;