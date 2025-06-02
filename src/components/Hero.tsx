import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-30 dark:opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-6 relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <img 
                src="image lagani hai" 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-2 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="block">Hello, I'm</span>
            <span className="text-blue-600 dark:text-blue-400">Saurabh Kumar</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            <span className="relative inline-block">
              <span className="typewriter">Full Stack Developer</span>
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl text-lg">
            Aspiring to leverage my skills and experience to contribute to the tech industry and make a meaningful impact.
            Seeking opportunities to gain hands-on experience in full-stack development, focusing on React, Node.js, and MongoDB.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Me
            </a>
            
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex space-x-5 mb-10">
            <a 
              href="https://github.com/saurabhkumar09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/saurabh-kumar-29674a245/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-600 dark:text-gray-300 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;