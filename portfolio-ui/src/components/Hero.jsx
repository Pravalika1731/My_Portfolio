import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white px-6 transition-colors duration-300">
      <div className="max-w-3xl text-center space-y-6">
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Pravalika Mesa</span>.
        </h1>
        
        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
          A Full-Stack Developer specializing in modern web applications and AI-driven solutions.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-medium transition-all hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;