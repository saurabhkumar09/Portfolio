import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* College Education */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Roorkee College Of Engineering</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">B.Tech in Computer Science and Engineering</p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">2021 - 2025</p>
            <p className="text-gray-600 dark:text-gray-300">CGPA: 7</p>
          </div>

          {/* School Education */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Vivekanand Vidhya Mandir Inter College</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">XII - UK Board</p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">2021</p>
            <p className="text-gray-600 dark:text-gray-300">Percentage: 68.2%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 