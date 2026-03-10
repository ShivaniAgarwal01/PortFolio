import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";

export default function Hero() {
  const words = ["SCALABLE", "MODERN", "INTERACTIVE", "POWERFUL"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white relative">
      <p className="text-gray-400 tracking-[0.3em]">Hi, I'm</p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold mt-3 text-white"
      >
         <span className="bg-gradient-to-r from-orange-400 to-[#D19D75] bg-clip-text text-transparent">
          Shivani Agarwal
        </span>
      </motion.h1>

      <motion.h2
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-extrabold mt-6 leading-snug"
      >
         <span className="text-white">BUILDING </span>
         <span className="text-orange-400 drop-shadow-[0_0_3px_rgba(251,146,60,0.8)]">
          {words[index]}
        </span>
        <br />
         <span className="text-gray-200">
          WEB EXPERIENCES
        </span>
         </motion.h2>

      <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
        Full Stack Developer at{" "}
        <span className="text-orange-400 font-semibold">
          LNMIIT Jaipur
        </span>{" "}
        passionate about building scalable applications and
        crafting visually engaging digital experiences.
      </p>

      

      {/* <div className="flex gap-6 mt-10">
          <a href="#projects">
          <MagneticButton>
            <button className="bg-[#D19D75] text-black px-7 py-3 rounded-lg font-semibold hover:scale-105 transition">
              View Projects
            </button>
          </MagneticButton>
        </a>

        <a
          href="#connect"
          className="border border-[#D19D75] text-[#D19D75] px-7 py-3 rounded-lg hover:bg-[#D19D75] hover:text-black transition"
        >
          Contact Me
        </a>
      </div> */}
    </section>
  );
}
