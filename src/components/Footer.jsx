import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMailBulk } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";



function Footer() {
  return (
    <footer className='bg-gray-500/20 text-white py-4 mt-20'>
        <div className='w-screen flex flex-col mx-auto px-10 items-center md:flex-col justify-center space-y-4'>
                <div className='flex flex-row gap-8 text-[27px]'>
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
                        href="mailto:shivaniagarwal0610@gmail.com"
                        className='hover:text-red-400 '
                        >
                        <FaEnvelope />
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/17xm-5p8c3yart65uWTPFVkxQ5LSr_iDO/view?usp=sharing"
                        className='hover:text-yellow-300 rotate-350'
                        >
                         <PiReadCvLogoLight />
                    </a>
                </div>
                <div className='font-semibold text-[12px]'> 
                   Copyright © {new Date().getFullYear()} ;  Designed by Shivani Agarwal 
                </div>
        </div>
        

    </footer>
  )
}

export default Footer