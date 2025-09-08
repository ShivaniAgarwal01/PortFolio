import React, { useEffect, useRef, useState } from "react";

// These don't need to be inside the component, as they don't change.
const SKILLS = ["React", "Figma", "Tailwind", "CSS", "JavaScript", "C++"];
const ANIMATION_SPEED = 0.01;

export default function SkillOrbit() {
  const containerRef = useRef(null);
  const skillRefs = useRef([]);
  const angleRefs = useRef([]);
  // Set a sensible default radius, which will be updated immediately on mount.
  const [radius, setRadius] = useState(100);

  // --- THE CORE FIX ---
  // This effect now calculates the radius based on the container's actual size.
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // Set radius to be a percentage of the container's width.
        // 0.4 means the orbit will fill 80% of the container (radius is half the diameter).
        // You can adjust this value to make the orbit larger or smaller.
        const newRadius = containerWidth * 0.4;
        setRadius(newRadius);
      }
    };

    // Run once on mount and then on every window resize.
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the radius correctly.

    return () => window.removeEventListener("resize", handleResize);
  }, []); // No dependencies needed, it only uses a ref.

  // Animation effect
  useEffect(() => {
    const total = SKILLS.length;
    angleRefs.current = SKILLS.map((_, i) => (i * (2 * Math.PI)) / total);

    let frameId;
    const animate = () => {
      const container = containerRef.current;
      if (!container) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;

      skillRefs.current.forEach((outerEl, i) => {
        if (!outerEl) return;
        const innerEl = outerEl.querySelector(".inner-skill");
        if (!innerEl) return;

        angleRefs.current[i] += ANIMATION_SPEED;
        const angle = angleRefs.current[i];

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const depth = (Math.sin(angle) + 1) / 2;
        const scale = 0.6 + depth * 0.4;
        const zIndex = Math.floor(depth * 100);

        const baseW = innerEl.offsetWidth || 40;
        const baseH = innerEl.offsetHeight || 40;
        const scaledW = baseW * scale;
        const scaledH = baseH * scale;

        outerEl.style.left = `${x - scaledW / 2}px`;
        outerEl.style.top = `${y - scaledH / 2}px`;
        outerEl.style.zIndex = zIndex;
        innerEl.style.transform = `scale(${scale})`;
        innerEl.style.opacity = `${0.45 + depth * 0.55}`;
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, [radius]); // Re-trigger animation logic if radius changes.

  return (
    <div
      ref={containerRef}
      // The container itself is already responsive thanks to Tailwind!
      className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] mx-auto"
    >
      {/* Orbiting bubbles */}
      {SKILLS.map((skill, i) => (
        <div
          key={i}
          ref={(el) => (skillRefs.current[i] = el)}
          className="absolute"
          style={{ left: 0, top: 0, willChange: "left, top, z-index" }}
        >
          <div className="inner-skill flex h-14 w-14 items-center justify-center rounded-full bg-white font-semibold text-black shadow-md transition-all sm:h-16 sm:w-16 md:h-20 md:w-20 text-xs sm:text-sm md:text-base">
            {skill}
          </div>
        </div>
      ))}

      {/* Centered avatar */}
      <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center">
        <img
          src="/avatar.png"
          alt="Shivani"
          className="w-40 h-auto object-contain drop-shadow-lg sm:w-48 md:w-52 lg:w-60"
        />
      </div>
    </div>
  );
}