import { useEffect, useRef } from "react";

export function GridGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
        glowRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="grid-glow pointer-events-none fixed z-0 opacity-0 transition-opacity duration-300"
      style={{
        width: "400px",
        height: "400px",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
