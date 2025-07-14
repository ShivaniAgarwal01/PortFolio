import React from 'react'
import SkillOrbit from './SkillOrbit'

function Home() {
  return (
    <>
    <section id='hero' className='w-full min-h-screen sm:w-full px-5 py-2'>
        <div className='flex  flex-col-reverse md:flex-row gap-1 md:gap-0 m-5'>
            {/* left section */}
            <div className='flex-1 flex items-center justify-center md:justify-start sm:ml-20'>
                <div className='home-heading text-center md:text-left max-w-xl '>
                    <p className='text-lg md:text-[40px] sm:text-[40px] mb-1'>Hi! I'm Shivani Agarwal.</p>
                    <p className='text-md md:text-[21px] sm:text-[30px] max-w-xl'><span className='text-[#f0d9c1]'>Full-stack developer</span> & <span className='text-[#f0d9c1]'>UI/UX designer</span> specializing in React, JavaScript, and modern web technologies. 
                        I create seamless user experiences from concept to deployment.</p>
                </div>                

            </div>
            <div className='flex-1 flex items-center justify-center '>                
                <SkillOrbit />
            </div>
        </div>
    </section>

    </>
  )
}

export default Home