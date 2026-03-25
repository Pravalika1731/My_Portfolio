import React from 'react';

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-blue-900/20 group">
      
      {/* Optional: Placeholder for an image or graphic */}
      <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
        <span className="text-gray-400 dark:text-gray-600 font-medium group-hover:scale-110 transition-transform duration-500">Project Preview</span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
        >
          View Project &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;