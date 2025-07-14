  import React, { useEffect, useRef } from 'react';

  const projects = [
    {
      title: 'MIND CONNECT',
      description: 'A full-stack platform using React, Node.js, Express, MongoDB, PostgreSQL, and Tailwind CSS to support college students in their mental health journey by providing anonymous access to features such as free counselling (via text messages), journaling for personal reflection, and literary resources on mental well-being.',
      tech: ['Node.js' ,'MongoDB','React', 'JavaScript', 'Tailwind CSS','PostgreSQL','Express',],
      img: '/mindConnect.png',
      github: 'https://github.com/ShivaniAgarwal01/MindConnect',
      // live: 'https://your-live-link.com/movie',
    },
    {
      title: 'APPLE IPHONE 15 PRO 3D WEBSITE',
      description: 'An interactive 3D website showcasing the Apple iPhone 15 Pro, allowing users to explore the device from multiple angles. Implemented responsive design, 3D rendering, and user interaction features using modern web technologies',
      tech: ['React', 'CSS', 'GSAP' ,'Three.js' ,'JavaScript'],
      img: '/appleWebsite.png',
      github: 'https://github.com/ShivaniAgarwal01/Apple-iPhone-15-Pro-3D-Website',
      // live: 'https://your-live-link.com/todo',
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
      // live: 'https://blinktactoegame.netlify.app/',
    },
    {
      title: 'PORTFOLIO',
      description: 'A responsive portfolio built with React and Tailwind CSS featuring flip cards, smooth scrolling, and a clean UI to showcase projects and skills.',
      tech: ['React','Tailwind CSS', 'HTML', 'CSS'],
      img: '/portfolio.png',
      github: 'https://github.com/ShivaniAgarwal01/CGPA-Calculator',
      live: 'https://blinktactoegame.netlify.app/',
    },

  ];

  // const techColors = {
  //   GSAP: 'border-green-400',
  //   React: 'border-blue-400',
  //   Django: 'border-green-500',
  //   'Node.js': 'border-lime-400',
  //   MongoDB: 'border-green-700',
  //   JavaScript: 'border-yellow-300',
  //   CSS: 'border-blue-200',
  //   HTML: 'border-orange-300',
  //   'Three.js': 'border-purple-400',
  //   PostgreSQL: 'border-cyan-400',
  //   Express: 'border-gray-400',
  //   'Tailwind CSS': 'border-teal-300',
  // };

  function Projects() {
    const cardsRef = useRef([]);

    return (
      <section id='projects' className="w-full px-4 sm:px-8 md:py-12 py-8 min-h-screen mb-20">
        <div className="heading text-[32px] sm:text-[36px] md:text-[36px] uppercase tracking-wider font-bold text-center">PROJECTS</div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12 place-items-center">
            
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  // ref={(el) => (cardsRef.current[idx] = el)}
                    className='w-[90%] h-[400px] sm:w-[350px] [perspective:1000px] '
                  >
                 <div className="relative w-full h-full [transform-style:preserve-3d] p-5 rounded-2xl transition-transform duration-700 hover:[transform:rotateY(180deg)] cursor-pointer" >
                  {/* Front side */}

                  <div className='absolute inset-0 [backface-visibility:hidden] rounded-xl bg-white/10 border border-white/30 shadow-md shadow-white/20 overflow-hidden flex flex-col justify-end'>
                    <img src={proj.img} alt={proj.title} className='w-full h-full object-cover' />
                      <div className='py-2 text-center'>
                        <h3 className='text-white font-semibold text-lg'>{proj.title}</h3>
                      </div>
                  </div>

                  {/* Back side */}
                  <div className='absolute w-full h-full [backface-visibility:hidden] rotate-y-180 rounded-xl overflow-auto border border-white/30 bg-gray-900/90 text-white p-4 font-[Arial]'>
                      <h3 className="text-white text-xl font-semibold mb-2">{proj.title}</h3>
                      <p className="text-gray-300 text-md mb-5">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.map((tech, i) => (
                    <span
                    key={i}
                    className="bg-white/10 text-sm text-white px-2 py-1 rounded-full"
                    >
                    {tech}
                    </span>
                    ))}
                    </div>

                <div className="flex gap-4">
                  <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm underline hover:text-orange-300"
                  >
                  GitHub
                  </a>
                  {proj.live && (
                    <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm underline hover:text-orange-300"
                    >
                    Live
                    </a>
                    )}
                </div>
                    </div>
              </div> 
              </div>
            ))
          }
        </div>
      </section>
    );
  }

  export default Projects