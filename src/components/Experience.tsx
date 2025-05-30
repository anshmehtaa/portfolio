import React from 'react';
import { Briefcase as BriefcaseBusiness } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and the experience I've gained along the way.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {resumeData.experience.map((job, index) => (
            <div 
              key={job.id} 
              className="relative pl-10 pb-16 last:pb-0"
            >
              {/* Timeline line */}
              {index < resumeData.experience.length - 1 && (
                <div className="absolute left-4 top-1 bottom-0 w-0.5 bg-indigo-200"></div>
              )}
              
              {/* Timeline circle */}
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shadow-md">
                <BriefcaseBusiness size={16} className="text-white" />
              </div>
              
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full mb-2">
                  {job.duration}
                </span>
                <h3 className="text-xl font-bold text-gray-800">{job.position}</h3>
                <p className="text-indigo-600 font-medium">{job.company}</p>
              </div>
              
              <ul className="mt-4 space-y-2 text-gray-600">
                {job.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-2"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              
              {job.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;