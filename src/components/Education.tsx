import React from 'react';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background and educational qualifications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {resumeData.education.map((edu, index) => (
            <div 
              key={edu.id}
              className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 mb-8 last:mb-0"
            >
              <div className="md:w-1/4 bg-indigo-600 text-white p-6 flex flex-col justify-center items-center text-center">
                <GraduationCap size={40} className="mb-3" />
                <span className="font-medium">{edu.duration}</span>
              </div>
              
              <div className="md:w-3/4 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                <p className="text-indigo-600 font-medium mb-4">{edu.institution}</p>
                {edu.description && (
                  <p className="text-gray-600">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional certifications or courses */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Certifications & Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Frontend Development Bootcamp",
                issuer: "Udemy",
                year: "June 2020",
                credential: "UC-123456"
              },
              {
                title: "Python",
                issuer: "CODING BLOCK,HISAR",
                year: "June 2019",
                credential: "FM-789012"
              },
              // {
              //   title: "UI/UX Design Fundamentals",
              //   issuer: "Interaction Design Foundation",
              //   year: "2021",
              //   credential: "IDF-345678"
              // },
              // {
              //   title: "AWS Certified Developer",
              //   issuer: "Amazon Web Services",
              //   year: "2022",
              //   credential: "AWS-901234"
              // }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-600 hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="font-bold text-gray-800 mb-1">{cert.title}</h4>
                <p className="text-gray-600 text-sm">{cert.issuer} • {cert.year}</p>
                <p className="text-gray-500 text-xs mt-2">Credential ID: {cert.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;