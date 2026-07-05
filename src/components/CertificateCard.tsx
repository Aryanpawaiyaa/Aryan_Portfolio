import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ShieldCheck, Calendar, ArrowUpRight } from "lucide-react";
import { CertificateType } from "../resources/certificates";
import { OptimizedImage } from "./OptimizedImage";

interface CertificateCardProps {
  cert: CertificateType;
  onClick: () => void;
  key?: React.Key | string | number;
}

export default function CertificateCard({ cert, onClick }: CertificateCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse position relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 150, damping: 20 });

  // Glow position springs
  const glowX = useSpring(useTransform(x, [0, 1], [0, 100]), { stiffness: 150, damping: 20 });
  const glowY = useSpring(useTransform(y, [0, 1], [0, 100]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate percentage relative to card dimensions
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-[#08080a]/60 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] shadow-[0_4px_30px_rgba(0,0,0,0.4)] flex flex-col h-full"
    >
      {/* Animated Glowing border on hover */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-1000 group-hover:duration-500 animate-[pulse_2s_infinite]" />

      {/* Radial Glow Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(350px circle at ${gx}% ${gy}%, rgba(var(--accent-rgb, 255, 255, 255), 0.08), transparent 80%)`
          ),
        }}
      />

      {/* Large Certificate Preview Container */}
      <div 
        className="relative w-full aspect-[1.414/1] overflow-hidden rounded-t-xl border-b border-white/5 bg-zinc-900 shadow-inner"
        style={{ transform: "translateZ(20px)" }}
      >
        <OptimizedImage
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 brightness-[0.8] contrast-[1.05] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {/* Soft gloss effect */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Card Info */}
      <div 
        className="p-5 grow flex flex-col justify-between"
        style={{ transform: "translateZ(10px)" }}
      >
        <div>
          {/* Organization & Date */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-gray-500 truncate max-w-[70%]">
              {cert.issuer}
            </span>
            <span className="font-mono text-[9px] text-gray-500 flex items-center gap-1 shrink-0">
              <Calendar className="h-2.5 w-2.5" />
              {cert.date}
            </span>
          </div>

          {/* Title */}
          <h4 className="font-sans text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-white/90 transition-colors duration-300">
            {cert.title}
          </h4>

          {/* Description */}
          <p className="mt-2 font-sans text-[11px] text-gray-400 leading-relaxed font-light line-clamp-2">
            {cert.description}
          </p>
        </div>

        {/* Skill Badges & Status */}
        <div className="mt-4 pt-3.5 border-t border-white/5">
          <div className="flex flex-wrap gap-1 mb-3">
            {cert.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="rounded bg-white/2 px-1.5 py-0.5 font-sans text-[9px] text-gray-400 border border-white/5 transition-colors duration-300 hover:border-white/10 hover:text-white"
              >
                {skill}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className="rounded bg-white/2 px-1.5 py-0.5 font-sans text-[9px] text-gray-500 border border-white/5">
                +{cert.skills.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[9px] font-mono font-semibold text-emerald-400">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              Completed
            </span>
            <span className="font-sans text-[9px] font-semibold text-gray-400 group-hover:text-white flex items-center gap-0.5 transition-colors">
              Details <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
