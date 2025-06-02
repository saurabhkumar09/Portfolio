import React from 'react';

type Skill = {
  name: string;
  level: number;
  category: 'programming' | 'frameworks' | 'tools' | 'databases';
};

const skills: Skill[] = [
  { name: 'C++', level: 85, category: 'programming' },
  { name: 'Java', level: 80, category: 'programming' },
  { name: 'JavaScript', level: 85, category: 'programming' },
  { name: 'React', level: 80, category: 'frameworks' },
  { name: 'Node.js', level: 75, category: 'frameworks' },
  { name: 'Express', level: 75, category: 'frameworks' },
  { name: 'HTML/CSS', level: 90, category: 'tools' },
  { name: 'Git/GitHub', level: 80, category: 'tools' },
  { name: 'Postman', level: 75, category: 'tools' },
  { name: 'MongoDB', level: 75, category: 'databases' }
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'tools', label: 'Tools' },
    { id: 'databases', label: 'Databases' }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section 
      id="skills" 
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 font-medium mb-2">
            My Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Skills
          </h3>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Proficient in various programming languages, frameworks, and tools with a focus on
            full-stack web development.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 flex-wrap">
          <div className="flex bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">{skill.name}</h4>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1 + 0.5}s` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;