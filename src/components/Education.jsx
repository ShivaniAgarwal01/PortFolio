import React  ,{ useEffect, useRef }  from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: "B.Tech in Computer Science",
    institution: "The LNM Institute of Information and Technology Jaipur",
    year: "2022 - Present",
    description: "Specializing in frontend development and UI/UX design.",
  },
  {
    title: "Class 12 (CBSE)",
    institution: "Bhagwan Mahavir Public School Surat",
    year: "2020-2022",
    description: "Scored 89%",
  },
  {
    title: "Class 10 (CBSE)",
    institution: "Delhi Public School Surat",
    year: "2008-2020",
    description: "Scored 91%",
  },
];


function Education() {
    const containerRef = useRef(null);

  // useEffect(() => {
  //   const sections = containerRef.current.querySelectorAll('.timeline-item');

  //   if (!sections) return;
  //   sections.forEach((section) => {
  //     gsap.fromTo(
  //       section,
  //       {
  //         opacity: 0,
  //         y:50,
  //       },
  //       {
  //         duration: 1.2,
  //         opacity: 1,
  //         y: 0,
  //         ease: 'power2.out',
  //         scrollTrigger: {
  //           trigger: section,
  //           start: 'top 90%',
  //           //  markers: true, 
  //           toggleActions: 'play none none none',
  //         },
  //       }
  //     );
  //   });
  //    const timeout = setTimeout(() => {
  //   ScrollTrigger.refresh();
  // }, 300); // 300ms delay ensures all layout settles

  // return () => clearTimeout(timeout);
  // }, []);

  return (
   <section id='education' ref={containerRef} className="w-full py-12 px-5">
    <div className='flex flex-col justify-center items-center mb-12'>
      <h2 className="heading text-[32px] sm:text-[36px] md:text-[36px] uppercase tracking-wider font-bold mb-8 text-[#D19D75]">EDUCATION</h2>
      <div className="relative w-full max-w-6xl">
        {/* Orange line ONLY spanning between dots */}
        <div className="absolute top-[28px] left-[16.666%] right-[16.666%] h-[4px] bg-orange-500 z-0 sm:block" />
          <div className="relative z-10 flex gap-10 justify-between items-start">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                    className="timeline-item flex flex-col items-center sm:w-1/3 w-full text-center transition-transform duration-300 hover:scale-105 group opacity-100"
                    >
                {/* Dot */} 
                    <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white shadow-lg group-hover:bg-orange-200 group-hover:translate-y-5 group-hover:mb-2 transition-all translate-y-4" />
                  {/* Content */}
                  <div className="mt-4 ">
                      <h3 className="text-lg sm:text-xl text-center font-semibold text-white group-hover:[text-shadow:0_0_10px_white]">{edu.title}</h3>
                      <div className="w-full flex flex-col items-start text-start mt-1 pl-5 ">
                      <p className="text-sm text-orange-300 text-start ">{edu.institution} &middot; {edu.year}</p>
                
                      <p className="mt-.5 text-sm text-gray-300">- {edu.description}</p>
                      </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education