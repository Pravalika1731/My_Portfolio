import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["Java", "Python", "JavaScript (ES6+)", "SQL"]
    },
    {
      title: "Frontend & UI",
      skills: ["React.js", "Express.js", "Node.js", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      title: "Backend & Databases",
      skills: ["Spring Boot", "Maven", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "AI & Cloud Tools",
      skills: ["ChatGpt","Cursor", "Gemini", "Spring Security", "AWS", "Git/GitHub"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Technologies I use to build robust applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-center text-gray-700 dark:text-gray-300 text-sm font-medium">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;