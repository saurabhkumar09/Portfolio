import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Book Store",
    description: "A web application built with React and MongoDB, allowing users to save book titles and authors. Designed for easy book management with a user-friendly interface.",
    image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg",
    category: ["web", "fullstack"],
    technologies: ["React", "MongoDB", "Node.js", "Express"],
    liveLink: "https://example.com/bookstore",
    githubLink: "https://github.com/saurabhkumar09/Book-Store"
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "A full-featured e-commerce website built to provide a smooth and secure online shopping experience. Features include product browsing, shopping cart, user authentication, and payment integration.",
    image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg",
    category: ["web", "frontend", "backend"],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://example.com/ecommerce-website",
    githubLink: "https://github.com/saurabhkumar09/codeAlpha_tasks/tree/main/Full-Stack-ecommerce"
  },
  {
    id: 3,
    title: "Real-Time Criss-Cross Game",
    description: "A real-time multiplayer Criss-Cross (Tic-Tac-Toe) game platform. Built with socket-based communication for live gameplay, player matching, and interactive game state updates.",
    image: "https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: ["web", "game", "realtime"],
    technologies: ["React", "Node.js", "Socket.IO", "Express", "JavaScript"],
    liveLink: "https://example.com/criss-cross-game",
    githubLink: "https://github.com/saurabhkumar09/codeAlpha_tasks/tree/main/Real-Time%20gaming%20platform"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A full-featured social media application built with the MERN stack. Users can create profiles, make posts, like/comment. Includes authentication, image uploads, and responsive UI.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    category: ["web", "fullstack"],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Socket.IO"],
    liveLink: "https://example.com/social-media",
    githubLink: "https://github.com/saurabhkumar09/codeAlpha_tasks/tree/main/Social-Platform"
  },
  {
    id: 5,
    title: "EV Charging Station Management System",
    description: "A modern web app for managing electric vehicle charging stations. Built with Vue.js for the frontend and MongoDB for storing geolocation data. Features include station creation forms, geo-coordinate validation, and real-time data sync with a FastAPI backend.",
    image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg",
    category: ["web", "frontend"],
    technologies: ["Vue.js", "FastAPI", "MongoDB", "GeoJSON"],
    liveLink: "https://ev-charging-info.vercel.app/login",
    githubLink: "https://github.com/saurabhkumar09/ev-charging-info"
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];
  
  const filterProjects = (category: string) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setVisibleProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.category.includes(category)
      );
      setVisibleProjects(filtered);
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-medium mb-2">
            My Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h3>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
            using React, Node.js, and MongoDB.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 flex-wrap">
          <div className="flex bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => filterProjects(category.id)}
                className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                  activeFilter === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl group"
              style={{
                animation: 'fadeIn 0.5s ease-in-out forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-end space-x-3 mb-2">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                          aria-label="GitHub repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                          aria-label="Live project"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;