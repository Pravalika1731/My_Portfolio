import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="dark font-sans antialiased bg-gray-950 min-h-screen">
      <Navbar />
      
      {/* We add pt-20 (padding-top) to Hero so it isn't hidden behind the fixed Navbar */}
      <div className="pt-20">
        <Hero />
      </div>
      
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;