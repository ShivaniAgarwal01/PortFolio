import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";

function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result);
        },
        (error) => {
          alert("An error occurred, please try again later.");
          console.log(error);
        },
      );
    form.current.reset();
  };

  return (
    <motion.section
      id="connect"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="py-8 mt-10 px-3"
    >
      {/* <section id="connect" className="py-8 mt-10 px-3"> */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="heading text-center font-bold text-[32px] sm:text-[36px] md:text-[36px] uppercase tracking-wider mb-8"
      >
        GET IN TOUCH
      </motion.div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-5xl mx-auto container border border-gray-800 grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6 px-4 py-7 text-white rounded-2xl font-semibold backdrop-blur-md shadow-md shadow-gray-800"
      >
        <motion.input
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          type="text"
          name="FirstName"
          placeholder="First Name"
          className="bg-gray-100/20 px-4 py-3 rounded-xl  "
          required
        />
        <motion.input
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          type="text"
          name="LastName"
          placeholder="Last Name"
          className="bg-gray-100/20 px-4 py-3 rounded-xl  "
          required
        />
        <motion.input
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          type="email"
          name="email"
          placeholder="Email"
          className="bg-gray-100/20 px-4 py-3 rounded-xl"
          required
        />
        <motion.input
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          type="tel"
          name="phone"
          placeholder="Phone No."
          className="bg-gray-100/20 px-4 py-3 rounded-xl"
        />
        <motion.textarea
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          name="message"
          rows="7"
          placeholder="Message"
          className="col-span-2 md:col-span-2 bg-gray-100/20 px-4 py-3 rounded-xl"
          required
        />
        <div className="md:col-span-2 col-span-2 flex justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 bg-gray-400/20 px-10 py-3 rounded-2xl transition hover:bg-gray-600/20 hover:text-gray-200 flex items-center"
          >
            Send
          </motion.button>
        </div>
      </form>
    </motion.section>
  );
}

export default ContactForm;
