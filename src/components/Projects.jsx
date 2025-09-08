import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Data remains separate and clean.
const projects = [
    {
      title: 'MIND CONNECT',
      description: 'A full-stack platform using React, Node.js, Express, MongoDB, PostgreSQL, and Tailwind CSS to support college students in their mental health journey by providing anonymous access to features such as free counselling (via text messages), journaling for personal reflection, and literary resources on mental well-being.',
      tech: ['Node.js' ,'MongoDB','React', 'JavaScript', 'Tailwind CSS','PostgreSQL','Express',],
      img: '/mindConnect.png',
      github: 'https://github.com/ShivaniAgarwal01/MindConnect',
    },
    {
      title: 'APPLE IPHONE 15 PRO 3D WEBSITE',
      description: 'An interactive 3D website showcasing the Apple iPhone 15 Pro, allowing users to explore the device from multiple angles. Implemented responsive design, 3D rendering, and user interaction features using modern web technologies',
      tech: ['React', 'CSS', 'GSAP' ,'Three.js' ,'JavaScript'],
      img: '/appleWebsite.png',
      github: 'https://github.com/ShivaniAgarwal01/Apple-iPhone-15-Pro-3D-Website',
    },
      {
      title: 'BLINK TAC TOE',
      description: 'An interactive emoji-based twist on classic Tic Tac Toe featuring vanishing moves. Implemented dynamic turn logic, responsive design, and unique gameplay mechanics using React and Tailwind CSS. Integrated custom emoji categories, vanishing rules (FIFO), and win detection logic for an engaging user experience.',
      tech: ['React', 'CSS'],
      img: '/blinkTacToe.png',
      github: 'https://github.com/ShivaniAgarwal01/Blink-Tac-toe',
      live: 'https://blinktactoegame.netlify.app/',
    },
    {
      title: 'CGPA-CALCULATOR',
      description: 'A web-based SGPA and CGPA Calculator built using the Django framework to assist students in accurately computing their academic performance. The application allows users to input subject-wise grades and credits, dynamically generates input fields, and calculates both SGPA and CGPA.',
      tech: ['Django', 'HTML', 'CSS'],
      img: '/cgpa.png',
      github: 'https://github.com/ShivaniAgarwal01/CGPA-Calculator',
    },
    {
      title: 'PORTFOLIO',
      description: 'A responsive portfolio built with React and Tailwind CSS featuring flip cards, smooth scrolling, and a clean UI to showcase projects and skills.',
      tech: ['React','Tailwind CSS', 'HTML', 'CSS'],
      img: '/portfolio.png',
      github: 'https://github.com/ShivaniAgarwal01/Portfolio',
      live: 'https://shivaniagarwal.netlify.app/',
    },
];

// IMPROVEMENT 1: Implemented your tech colors idea for a nice visual touch.
const techColors = {
  'React': 'border-sky-400 text-sky-400',
  'Node.js': 'border-green-400 text-green-400',
  'MongoDB': 'border-green-600 text-green-600',
  'JavaScript': 'border-yellow-400 text-yellow-400',
  'Tailwind CSS': 'border-teal-400 text-teal-400',
  'PostgreSQL': 'border-blue-500 text-blue-500',
  'Express': 'border-gray-400 text-gray-400',
  'GSAP': 'border-green-500 text-green-500',
  'Three.js': 'border-purple-400 text-purple-400',
  'Django': 'border-green-800 text-green-800',
  'HTML': 'border-orange-500 text-orange-500',
  'CSS': 'border-blue-600 text-blue-600',
  default: 'border-gray-500 text-gray-500',
};

function Projects() {
  return (
    <section id='projects' className="w-full py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl uppercase tracking-wider font-bold">Projects</h1>
        </div>
        
        {/* IMPROVEMENT 2: Same fluid grid as the Skills section.
            It automatically adjusts the number of columns based on screen size.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              // Set a max-width to keep cards from getting too wide, but allow them to be flexible.
              className='w-full max-w-md mx-auto h-[400px] [perspective:1000px]'
            >
              {/* IMPROVEMENT 3: Added tabIndex for keyboard accessibility. */}
              <div tabIndex="0" className="relative w-full h-full [transform-style:preserve-3d] rounded-2xl transition-transform duration-700 focus:outline-none focus:[transform:rotateY(180deg)] hover:[transform:rotateY(180deg)] cursor-pointer">
                
                {/* --- FRONT SIDE --- */}
                <div className='absolute inset-0 [backface-visibility:hidden] rounded-xl bg-white/5 border border-white/20 shadow-lg shadow-black/20 overflow-hidden flex flex-col'>
                  <div className='relative w-full h-full'>
                    <img src={proj.img} alt={proj.title} className='w-full h-full object-cover object-top' />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                  <div className='absolute bottom-0 left-0 p-4'>
                    <h3 className='text-white font-bold text-2xl shadow'>{proj.title}</h3>
                  </div>
                </div>

                {/* --- BACK SIDE --- */}
                {/* IMPROVEMENT 4: Better content layout using Flexbox. */}
                <div className='absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden border border-white/30 bg-[#1a1a1a] text-white p-5 flex flex-col'>
                  <h3 className="text-white text-xl font-bold mb-2 flex-shrink-0">{proj.title}</h3>
                  <p className="text-gray-300 text-md mb-4 flex-grow overflow-y-auto">{proj.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                    {proj.tech.map((tech, i) => {
                      const colorClass = techColors[tech] || techColors.default;
                      return (
                        <span key={i} className={`text-xs px-2 py-1 border rounded-full ${colorClass}`}>
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex gap-4 mt-auto flex-shrink-0">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm bg-white/10 rounded-md transition-colors hover:bg-white/20">
                      <FaGithub /> GitHub
                    </a>
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm bg-white/10 rounded-md transition-colors hover:bg-white/20">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;