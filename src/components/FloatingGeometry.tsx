import { motion } from "motion/react";

interface FloatingGeometryProps {
  accentColor?: "white" | "amber" | "emerald" | "violet";
  themeMode?: "dark" | "light";
}

export default function FloatingGeometry({
  accentColor = "white",
  themeMode = "dark",
}: FloatingGeometryProps) {
  const isLight = themeMode === "light";

  const strokeColor =
    accentColor === "amber"
      ? isLight ? "rgba(245, 158, 11, 0.4)" : "rgba(245, 158, 11, 0.25)"
      : accentColor === "emerald"
      ? isLight ? "rgba(16, 185, 129, 0.4)" : "rgba(16, 185, 129, 0.25)"
      : accentColor === "violet"
      ? isLight ? "rgba(139, 92, 246, 0.4)" : "rgba(139, 92, 246, 0.25)"
      : isLight
      ? "rgba(15, 23, 42, 0.2)"
      : "rgba(255, 255, 255, 0.15)";

  const subtleStroke =
    accentColor === "amber"
      ? isLight ? "rgba(245, 158, 11, 0.15)" : "rgba(245, 158, 11, 0.08)"
      : accentColor === "emerald"
      ? isLight ? "rgba(16, 185, 129, 0.15)" : "rgba(16, 185, 129, 0.08)"
      : accentColor === "violet"
      ? isLight ? "rgba(139, 92, 246, 0.15)" : "rgba(139, 92, 246, 0.08)"
      : isLight
      ? "rgba(15, 23, 42, 0.08)"
      : "rgba(255, 255, 255, 0.05)";

  return (
    <div
      id="hero-floating-geometry"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none -z-1"
      aria-hidden="true"
    >
      {/* 1. Orbit Ring Wireframe */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -top-12 -right-12 w-96 h-96 opacity-60"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full fill-none">
          <circle cx="200" cy="200" r="170" stroke={subtleStroke} strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="200" cy="200" r="130" stroke={strokeColor} strokeWidth="1" strokeDasharray="80 120" />
          <circle cx="200" cy="200" r="85" stroke={subtleStroke} strokeWidth="0.75" />
          <circle cx="200" cy="70" r="3" fill={strokeColor} />
          <circle cx="330" cy="200" r="2" fill={strokeColor} />
        </svg>
      </motion.div>

      {/* 2. Rotating 3D Wireframe Icosahedron / Octahedron Node */}
      <motion.div
        animate={{
          rotate: -360,
          y: [0, -15, 0],
        }}
        transition={{
          rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/2 left-2 w-44 h-44 opacity-50 hidden sm:block"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none">
          <polygon points="100,20 180,70 180,150 100,190 20,150 20,70" stroke={subtleStroke} strokeWidth="1" />
          <polygon points="100,20 100,190" stroke={subtleStroke} strokeWidth="0.75" strokeDasharray="3 3" />
          <polygon points="20,70 180,70" stroke={subtleStroke} strokeWidth="0.75" strokeDasharray="3 3" />
          <polygon points="20,150 180,150" stroke={subtleStroke} strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="100" cy="20" r="2.5" fill={strokeColor} />
          <circle cx="180" cy="70" r="2.5" fill={strokeColor} />
          <circle cx="180" cy="150" r="2.5" fill={strokeColor} />
          <circle cx="100" cy="190" r="2.5" fill={strokeColor} />
          <circle cx="20" cy="150" r="2.5" fill={strokeColor} />
          <circle cx="20" cy="70" r="2.5" fill={strokeColor} />
        </svg>
      </motion.div>

      {/* 3. Tech Telemetry Grid Crosshair Coordinates */}
      <div className="absolute bottom-6 right-8 font-mono text-[8px] tracking-widest uppercase opacity-40 text-gray-500 hidden md:block">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: strokeColor }} />
          <span>SYS.RENDER // 26.2183° N, 78.1828° E</span>
        </div>
      </div>
    </div>
  );
}
