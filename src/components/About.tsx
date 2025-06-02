import React from 'react';
import { Clock, MapPin, Briefcase, GraduationCap, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full md:w-2/5 relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg" 
                alt="Professional portrait" 
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-orange-100 dark:bg-orange-900/30 rounded-full -z-10"></div>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="mb-6">
              <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-medium mb-2">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Full Stack Developer
              </h3>
              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Proficient in front-end and back-end technologies, including React.js, Node.js, Express, and MongoDB. 
                Strong foundation in data structures and algorithms with expertise in C++, Java, and JavaScript.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Currently pursuing B.Tech in Computer Science and Engineering at Roorkee College Of Engineering with a CGPA of 6.9.
                Completed internship at Wokfo, working on web design and development projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-300">1+ Year</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">B.Tech CSE</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Current Role</h4>
                  <p className="text-gray-600 dark:text-gray-300">Student</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="https://drive.google.com/file/d/1-Mq2952UHI2rpA9zBa-N4rHXyoqhcu5G/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;