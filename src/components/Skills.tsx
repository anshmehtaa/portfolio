import React from 'react';
import { resumeData } from '../data/resumeData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are my technical skills and competencies that I've developed throughout my career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {resumeData.skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="group"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-800">{skill.name}</h3>
                <span className="text-sm text-gray-500">{skill.level * 10}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 rounded-full group-hover:bg-indigo-500 transition-all duration-500 ease-out"
                  style={{ 
                    width: `${skill.level * 10}%`,
                    transition: 'width 1s ease-out'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js",  "designing", "JavaScript", 
               "React", "Material UI", "Sql", "Framer", "Figma",
               "Python", "Redux", "Git", "Tailwind" ,"Digital Marketing"
            ].map(tech => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;