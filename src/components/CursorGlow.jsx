import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "400px";
    glow.style.height = "400px";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.background =
      "radial-gradient(circle, rgba(255,255,255,0.15), transparent)";
    glow.style.transform = "translate(-50%,-50%)";

    document.body.appendChild(glow);

    window.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }, []);

  return null;
}
