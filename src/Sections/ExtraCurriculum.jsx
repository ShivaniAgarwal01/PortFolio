import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../animations/animations";

const items = [
  {
    title: "Member – Google Developer Groups(GDG) on Campus, LNMIIT",
    description: `Contributed as a Game Developer in the Game Development Division.
Collaborated on interactive game projects and explored tools like Unity with team members.`,
  },
  {
    title: "International Mathematics Olympiad (2015)",
    description: `Secured International Rank 3627 in the 8th SOF IMO Finals.
Demonstrated strong problem-solving and analytical thinking skills at a global level.`,
  },
  {
    title: "National Cadet Taekwondo Championship (2017–18)",
    description: `🥋 Secured 3rd position in Kyorugi at the national level.`,
  },
  {
    title: "Khel Mahakumbh Achievements",
    description: `🏅 Won 3 Gold and 2 Silver medals in multiple Taekwondo events at Khel Mahakumbh.`,
  },
  {
    title: "Gujarat State Taekwondo Championships",
    description: `🥇 Gold – Gujarat State (2016–17)
🥈 Silver – Gujarat State (2015–16)
🥇 Gold – Cadet State Championship (2016–17)`,
  },
  {
    title: "Most Promising Sportsperson (2013–2017)",
    description: `🏆 Awarded “Most Promising Sportsperson” 4 years in a row
by Surat Children Welfare Organisation for excellence in Taekwondo and sportsmanship.`,
  },
];

function ExtraCurriculum() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section id="extracurricular" className="w-full p-5 h-100 mb-10">
      <div className="flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="heading text-[32px] sm:text-[36px] md:text-[36px] uppercase tracking-wider font-bold"
        >
          EXTRA-CURRICULAR / ACHIEVEMENTS
        </motion.div>

        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md border border-orange-300 p-6 rounded-xl shadow-lg shadow-gray-400/20 text-white min-h-[250px] w-[90vw] sm:w-[500px] md:w-[600px] mx-auto"
            >
              <h3 className="text-xl font-semibold mb-3">
                {items[index].title}
              </h3>
              <p className="whitespace-pre-line text-sm text-gray-200">
                {items[index].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex justify-center gap-2 mb-10">
          {items.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: i === index ? 1.4 : 1,
                opacity: i === index ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-orange-400" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExtraCurriculum;
