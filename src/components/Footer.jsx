import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PiReadCvLogoLight } from "react-icons/pi";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="mt-24 text-white">

      {/* Gradient Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D19D75] to-transparent mb-8"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 pb-10">

        {/* Social Icons */}
        <div className="flex gap-8 text-2xl">

          <motion.a
            whileHover={{ scale: 1.3 }}
            href="https://github.com/ShivaniAgarwal01"
            target="_blank"
            className="hover:text-orange-400 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3 }}
            href="https://www.linkedin.com/in/shivani-agarwal-561076260/"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3 }}
            href="mailto:shivaniagarwal0610@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3 }}
            href="https://drive.google.com/file/d/17xm-5p8c3yart65uWTPFVkxQ5LSr_iDO/view"
            className="hover:text-yellow-400 transition"
          >
            <PiReadCvLogoLight />
          </motion.a>

        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Designed & Built by
          <span className="text-[#D19D75] ml-1 font-semibold">
            Shivani Agarwal
          </span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;