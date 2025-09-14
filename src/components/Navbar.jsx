import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#131313] shadow-md shadow-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src="logo.png"
            alt="logo"
            className="h-10 w-auto md:h-17 object-contain"
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-12 text-2xl font-[Palatino] font-bold">
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
              Extra-Curricular
            </a>
          </li>
        </ul>

        {/* Desktop Icons & Button */}
        <div className="hidden md:flex items-center space-x-7 text-2xl">
          <a
            href="https://github.com/ShivaniAgarwal01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shivani-agarwal-561076260/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1eDxlVqikCCaytSSr3WZVUbV6neo9fi6Z?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-600"
          >
            <PiReadCvLogoLight />
          </a>
          <a
            href="#connect"
            className="px-3 py-2 border rounded-md text-base hover:bg-[#D19D75] hover:text-black transition-colors font-bold"
          >
            Let's connect!
          </a>
        </div>

        {/* Mobile Toggle */}
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
            <li>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-400"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-400"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#extracurricular"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-400"
              >
                Extra-Curricular
              </a>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-5 text-xl">
            <a
              href="https://github.com/ShivaniAgarwal01"
              target="_blank"
              className="hover:text-orange-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shivani-agarwal-561076260/"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1eDxlVqikCCaytSSr3WZVUbV6neo9fi6Z?usp=sharing"
              target="_blank"
              className="hover:text-yellow-500"
            >
              <PiReadCvLogoLight />
            </a>
            <a
              href="#connect"
              className="ml-auto px-3 py-1 border rounded-md hover:bg-[#D19D75] hover:text-black text-sm"
            >
              Let's connect!
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
