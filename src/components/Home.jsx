import React from "react"
import SkillOrbit from "./SkillOrbit"

function Home() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen px-5 py-8 flex flex-col-reverse md:flex-row items-center justify-center gap-5"
    >
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center md:justify-end">
        <div className="home-heading text-center md:text-left max-w-xl space-y-5 px-10">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Hi! I'm Shivani Agarwal.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            <span className="text-[#f0d9c1] font-medium">Full-stack developer</span> &{" "}
            <span className="text-[#f0d9c1] font-medium">UI/UX designer</span> specializing in React, JavaScript, and modern web technologies. 
            I create seamless user experiences from concept to deployment.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center ">
        <SkillOrbit />
      </div>
    </section>
  )
}

export default Home
