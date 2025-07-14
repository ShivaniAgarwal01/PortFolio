import React from 'react'

const skills = [
  { name: 'ReactJS', icon:<img src="react.png" alt="reactLogo" className='w-12 h-12' /> },
  { name: 'JavaScript', icon: <img src="java-script.png" alt="JSLogo" className="text-yellow-400" /> },
  { name: 'HTML', icon: <img src="html.png" alt="htmlLogo" className="text-orange-600" /> },
  { name: 'CSS', icon: <img src="css-3.png" alt="cssLogo"  className="text-blue-600" /> },
  { name: 'Tailwind', icon: <img src="tailwind.png" alt="tailwindLogo"  className="text-teal-400" /> },
  { name: 'Figma', icon: <img src="figma.png" alt="figmaLogo" className="text-pink-500" /> },
  { name: 'BootStrap', icon: <img src="bootstrap.png" alt="bootstrapLogo"  className="text-purple-500" /> },
  { name: 'C++', icon: <img src="c++.png" alt="cppLogo"  className="text-blue-400" /> },
  { name: 'DSA', icon: <img src="dsa.png" alt="dsaLogo"  className="text-blue-400" /> },
  { name: 'OOPs', icon: <img src="oops.png" alt="oopsLogo"  className="text-blue-400" /> },
];

function Skills() {
  return (
    <section id='skills' className='w-full px-6 py-5 sm:py-14 lg:py-20 '>
        <div  className='text-center mb-12'>
            <h1 className='heading text-[32px] sm:text-[36px] md:text-[36px] uppercase tracking-wider font-bold'>SKILLS</h1>    
        </div>  
         <div  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-col-5 gap-8 place-items-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center transition-transform transform hover:scale-110 cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-13.5 sm:h-13.5 mb-2">
            {React.cloneElement(skill.icon, {
            className:'h-full w-full object-contain transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]',
            })}
            </div>
            <div className="text-sm sm:text-base text-center font-medium">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills