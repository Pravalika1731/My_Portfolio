import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Palm Paradise Resort Web Application",
      description: "A full-stack resort web application featuring a secure authentication system with login and registration, dynamic pages built with a user-centric design and a responsive UI, backed by an efficient SQLite3 database for data management.",
      techStack: ["Python", "Flask", "HTML/CSS", "Vscode", "SQLlite3"],
      githubLink: "https://github.com/Pravalika1731/resort",
      liveLink: "#"
    },
    {
      title: "LakeSide-hotel Booking Web Application ",
      description: "A full-stack hotel booking web application featuring a secure authentication system, enabling users to search and explore available services through an intuitive interface. Designed with a user-centric approach and a responsive UI, the platform ensures smooth navigation and efficient booking experience with integrated search functionality.",
      techStack: ["Java", "Spring Boot",  "MySQL", "Git", "Javascript", "HTML/CSS", "Authentication", "Search API"],
      githubLink: "https://github.com/Pravalika1731/lakeSide-hotel",
      liveLink: "#"
    },
    {
      title: "Edusity Web Application",
      description: "A full-stack educational platform that manages user data, authentication, and content delivery through a structured backend and efficient API handling. Designed with a modular architecture to ensure scalability and smooth performance. ",
      techStack: ["React", "MongoDB", "HTML/CSS", "Authentication", "Javascript", "Expressjs", "Node.js", "TailwindCSS"],
      githubLink: "https://github.com/Pravalika1731/edusityproject",
      liveLink: "#"
    },
     {
      title: "Weather-App",
      description: " A responsive weather forecasting application that retrieves and displays real-time weather data through API integration, enabling users to search and view location-based conditions. The application focuses on efficient data fetching, state management, and dynamic UI rendering for accurate and seamless updates.",
      techStack: ["React", "Javacript", "HTML/CSS", "Mysql", "TailwindCSS"],
      githubLink: "https://github.com/Pravalika1731/weather-app",
      liveLink: "#"
    },
    {
      title: "Quick Hotel Booking App",
      description: "Quick Hotel Booking App is a user-friendly platform that allows users to search for hotels, explore room details, check availability, and make bookings instantly. It streamlines the entire reservation process, making it easy to manage stays and enjoy a seamless hotel booking experience.",
      techStack: ["React", "MangoDB", "HTML/CSS", "TailwindCSS", "Expressjs", "Node.js"],
      githubLink: "https://github.com/Pravalika1731/hotelbooking",
      liveLink: "#"
    },
     {
      title: "Full Stack Ecommerce",
      description: "Developed a full-stack e-commerce web application using React and Spring Boot Implemented REST APls for product management (CRUD operations)",
      techStack: ["React", "RESTS APIs", "MySQL/H2", "SpringBoot", "Maven", "Java"],
      githubLink: "https://github.com/Pravalika1731/ecommerce-fullstack-app",
      liveLink: "#"
    },
     {
      title: " ThriftStore Ecommerce",
      description: "A full-stack ecommerce thrift store web application built using Spring Boot, PostgreSQL, HTML, CSS, and JavaScript.",
      techStack: ["HTML/CSS", "RESTS APIs", "PostgreSQL", "SpringBoot", "Maven", "Java", "Iavascript", "Hibernate", "Spring Data JPA"],
      githubLink: "https://github.com/Pravalika1731/Thriftstore",
      liveLink: "#"
    }





  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto md:mx-0 mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            A selection of my recent full-stack development work, focusing on Java SpringBoot, Python backends, modern React interfaces, and AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-8">

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Code
                  </a>
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