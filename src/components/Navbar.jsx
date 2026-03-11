import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["skills", "education", "projects", "extracurricular"];

  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex md:grid md:grid-cols-3 items-center">

        {/* Left spacer (desktop only) */}
        <div className="hidden md:block"></div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex justify-center space-x-10 text-lg font-semibold text-gray-300">

          {navItems.map((item) => (
            <li key={item} className="relative group">

              <a
                href={`#${item}`}
                className="capitalize hover:text-white transition"
              >
                {item}
              </a>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D19D75] transition-all duration-300 group-hover:w-full"></span>

            </li>
          ))}

        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex justify-end items-center space-x-6 text-xl">

          <a
            href="https://github.com/ShivaniAgarwal01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shivani-agarwal-561076260/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://drive.google.com/file/d/1jVbLy2vljMdzbCXEbXnPlzN9on2CiRUB/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition hover:scale-110"
          >
            <PiReadCvLogoLight />
          </a>
          
          <a
            href="#connect"
            className="px-4 py-2 border border-[#D19D75] rounded-md text-sm font-bold hover:bg-[#D19D75] hover:text-black transition-all"
          >
            Let's connect
          </a>

        </div>

        {/* Mobile Toggle Button */}
        <button
          className="ml-auto md:hidden text-[#D19D75] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/80 backdrop-blur-md px-6 pb-6"
          >

            <ul className="flex flex-col gap-5 text-lg text-gray-300 mt-4">

              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)}
                    className="capitalize hover:text-orange-400"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>

            {/* Mobile Icons */}
            <div className="mt-6 flex items-center gap-6 text-xl">

              <a href="https://github.com/ShivaniAgarwal01">
                <FaGithub className="hover:text-orange-400" />
              </a>

              <a href="https://www.linkedin.com/in/shivani-agarwal-561076260/">
                <FaLinkedin className="hover:text-blue-400" />
              </a>

              <a href="https://drive.google.com/file/d/1jVbLy2vljMdzbCXEbXnPlzN9on2CiRUB/view?usp=drive_link">
                <PiReadCvLogoLight className="hover:text-yellow-400" />
              </a>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;