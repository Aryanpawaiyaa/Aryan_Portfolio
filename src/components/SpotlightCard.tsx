import React, { MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface SpotlightCardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  key?: React.Key | string | number;
}

export default function SpotlightCard({ id, children, className = "", onClick }: SpotlightCardProps) {
  // Use Framer Motion values for performance (skips React re-renders on mouse move)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor tracking
  const springConfig = { stiffness: 150, damping: 20, mass: 0.1 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`spotlight-card group relative overflow-hidden rounded-xl border border-white/5 bg-[#08080a]/60 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] shadow-[0_4px_30px_rgba(0,0,0,0.4)] ${className}`}
    >
      {/* Spotlight Ambient Radial Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${glowX}px ${glowY}px, rgba(var(--accent-rgb, 255, 255, 255), 0.05), transparent 80%)`,
        }}
      />
      
      {/* Spotlight Border Glow Mask */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(120px circle at ${glowX}px ${glowY}px, rgba(var(--accent-rgb, 255, 255, 255), 0.15), transparent 100%)`,
          maskImage: "linear-gradient(black, black)",
          WebkitMaskImage: "linear-gradient(black, black)",
          maskClip: "content-box",
          WebkitMaskClip: "content-box",
          padding: "1px",
        }}
      />

      {/* Internal Content slot */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
