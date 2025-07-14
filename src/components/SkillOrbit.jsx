import React, { useEffect, useRef ,useState} from 'react';

const skills = ['React', 'Figma', 'Tailwind', 'CSS', 'JavaScript' ,'C++'];
// const radius = 100;
const speed = 0.01;

export default function SkillOrbit() {
  const containerRef = useRef(null);
  const skillRefs = useRef([]);
  const angleRefs = useRef([]);
  const [radius, setRadius] = useState(window.innerWidth < 640 ? 100 : 160);

    useEffect(() => {
    const handleResize = () => {
      const newRadius = window.innerWidth < 640 ? 100 : 160;
      setRadius(newRadius);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const total = skills.length;
    let frameId;

    angleRefs.current = skills.map((_, i) => (i * (2 * Math.PI)) / total);

    const animate = () => {
      const centerX = 100;
      const centerY = 160;

      skillRefs.current.forEach((outerEl, i) => {
        if (!outerEl) return;

        const innerEl = outerEl.querySelector('.inner-skill');

        angleRefs.current[i] += speed;
        const angle = angleRefs.current[i];

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        const depth = (Math.sin(angle) + 1) / 2; // depth: 0 to 1
        const scale = 0.6 + depth * 0.4;
        const zIndex = Math.floor(depth * 100);

        outerEl.style.transform = `translate(${x}px, ${y}px)`;
        outerEl.style.zIndex = zIndex;

        if (innerEl) {
          innerEl.style.transform = `scale(${scale})`;
          innerEl.style.opacity = 0.4 + depth * 0.6;
        }
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, [radius]);

  return (
    <div className="relative w-full max-w-[400px] h-[400px] mx-auto sm:max-w-[500px] sm:h-[500px]">
      {/* Skills */}
      <div ref={containerRef} className="absolute left-13 top-3 md:top-15 md:left-25 w-full h-full">
        {skills.map((skill, i) => (
          <div
          key={i}
          ref={(el) => (skillRefs.current[i] = el)}
          className="absolute transition-transform duration-300 ease-linear"
          >
            <div className="inner-skill w-17 h-17 sm:w-22 sm:h-22 rounded-full bg-white text-black shadow-md font-semibold text-sm flex items-center justify-center transition-all duration-300">
              {skill}
            </div>
          </div>
        ))}
      </div>

      {/* Avatar */}
      <div className="absolute top-[50%] left-[50%] md:top[40%] transform -translate-x-1/2 -translate-y-1/2 z-50">
        <img src="/avatar.png" alt="Shivani" className="w-100 sm:w-70 h-auto object-contain drop-shadow-lg" />
      </div>
    </div>
  );
}  