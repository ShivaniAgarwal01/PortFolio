import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope ,FaBars , FaTimes } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <div className='sticky w-full h-17 z-100 shadow-md shadow-white/10 top-0 bg-[#131313]'>
        <div className="font-semibold font-[Palatino] container mx-auto flex items-center justify-between px-4 ">
                <a href="#hero" className="flex items-center">
                  <img src="logo.png" alt="logo" className='h-21 w-23'/>
               </a>         
           <ul className="hidden md:flex space-x-15 text-[23px] mr-10">
            <li>
            <a href="#skills" className="section-navbar">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="section-navbar">
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="section-navbar">
              Projects
            </a>
          </li>
          <li>
            <a href="#extracurricular" className="section-navbar">
              Extra-Curricular/Achievements
            </a>
          </li>
           </ul>
            {/* <div className='section-navbar'></div> */}
            <div className='hidden md:flex flex-row items-center text-[27px] ml-1 md:ml-70 space-x-5'>
                                  <a 
                                      href="https://github.com/ShivaniAgarwal01"
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='hover:text-orange-400 '
                                      >
                                      <FaGithub />
                                  </a>
                                  <a 
                                      href="https://www.linkedin.com/in/shivani-agarwal-561076260/"
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='hover:text-blue-400 '
                                      >
                                      <FaLinkedin />
                                  </a>
                                  
                                  <a 
                                      href="https://drive.google.com/drive/folders/1eDxlVqikCCaytSSr3WZVUbV6neo9fi6Z?usp=sharing"
                                      className='hover:text-yellow-900 rotate-350'
                                      >
                                       <PiReadCvLogoLight />
                                  </a>
                {/* <button className='btn border mt-1 p-1.5 rounded-md'>Let's connect!</button> */}
                <a 
                  href="#connect" 
                  className='px-2 py-1.5 mb-1 border rounded-md hover:bg-[#D19D75] hover:text-black tansition-colors text-[18px] md:mr-10 sm:mr-4'
                  >Let's connect!</a>
                  </div>
            <button
          className="md:hidden text-[#D19D75] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */} 
      {isOpen && (
        <div className="md:hidden bg-[#131313] px-6 pb-5">
          <ul className="flex flex-col gap-4 text-lg font-[Palatino]">
            <li><a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-orange-400">Skills</a></li>
            <li><a href="#education" onClick={() => setIsOpen(false)} className="hover:text-orange-400">Education</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-orange-400">Projects</a></li>
            <li><a href="#extracurricular" onClick={() => setIsOpen(false)} className="hover:text-orange-400">Extra-Curricular</a></li>
          </ul>

          <div className='mt-5 flex items-center gap-5 text-xl'>
            <a href="https://github.com/ShivaniAgarwal01" target='_blank' className='hover:text-orange-400'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shivani-agarwal-561076260/" target='_blank' className='hover:text-blue-400'><FaLinkedin /></a>
            <a href="https://drive.google.com/file/d/17xm-5p8c3yart65uWTPFVkxQ5LSr_iDO/view?usp=sharing" target='_blank' className='hover:text-yellow-500'><PiReadCvLogoLight /></a>
            <a href="#connect" className='ml-auto px-3 py-1 border rounded-md hover:bg-[#D19D75] hover:text-black text-sm'>Let's connect!</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar