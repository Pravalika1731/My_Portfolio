import React from 'react';

const Experience = () => {
  const educationData = [
    {
      id: 1,
      title: "Bachelor's of Technology",
      institution: "Anurag Engineering College", 
      date: "Graduated 2025",
      description: "Focused on computer science fundamentals, modern web development, and AI technologies."
    },
    {
      id: 2,
      title: "Intermediate Education (MPC)",
      institution: "Little Flower Girl’s Jr. College", 
      date: "Graduated 2021",
      description: "Focused on Maths and science fundamentals."
    },
    {
      id: 3,
      title: "SSC",
      institution: "Krishnaveni Talent School", 
      date: "Graduated 2019",
      description: "Focused on primary general studies."
    }
    // You can add more education items here (e.g., High School or Certifications)
  ];

  const experienceData = [
    {
      id: 1,
      title: "Java Full Stack Trainee",
      company: "ExcelR Services Pvt.Ltd",
      date: "2025 (From Feb - July)",
      description: "Developed and maintained features for an agriculture-related web platform.",
      tech: ["Java", "React.js", "RestAPI", "Git", "MangoDB", "EXpressjs", "Nodejs", "SpringBoot", "Github", "TailwindCSS", "Postman", "PostgreSQL"]
    },
     {
      id: 2,
      title: "Full Stack Python Intern",
      company: "Nuhvin Global Services Pvt.Ltd",
      date: "2024 (From May- June)",
      description: "Developed and maintained features for an agriculture-related web platform.",
      tech: ["Python", "Flask", "Django", "HTML/CSS", "Javascript", "SQL", "MySql", "SQLLite3"]
    }
    // You can add part-time roles or freelance work here
  ];
  
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path></svg>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-800 ml-4 pl-6">
              {educationData.map((item) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950"></div>
                  
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 mb-3">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{item.institution}</span>
                    <span className="hidden sm:block text-gray-300 dark:text-gray-700">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{item.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h3>
            </div>

            <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-800 ml-4 pl-6">
              {experienceData.map((item) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950"></div>
                  
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 mb-3">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</span>
                    <span className="hidden sm:block text-gray-300 dark:text-gray-700">•</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{item.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-3">
                    {item.description}
                  </p>
                  
                  {/* Experience Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((techItem, index) => (
                      <span 
                        key={index} 
                        className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  
  );
};

export default Experience;