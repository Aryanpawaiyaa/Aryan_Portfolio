import { useMemo } from "react";
import { motion } from "motion/react";

interface AuroraBackgroundProps {
  accentColor?: "white" | "amber" | "emerald" | "violet";
  themeMode?: "dark" | "light";
}

export default function AuroraBackground({
  accentColor = "white",
  themeMode = "dark",
}: AuroraBackgroundProps) {
  const isLight = themeMode === "light";

  // Palette tokens tailored for dynamic aura blends
  const colors = useMemo(() => {
    switch (accentColor) {
      case "amber":
        return {
          primary: isLight ? "rgba(245, 158, 11, 0.12)" : "rgba(245, 158, 11, 0.08)",
          secondary: isLight ? "rgba(217, 119, 6, 0.08)" : "rgba(251, 191, 36, 0.04)",
          accent: isLight ? "rgba(252, 211, 77, 0.1)" : "rgba(180, 83, 9, 0.06)",
        };
      case "emerald":
        return {
          primary: isLight ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.08)",
          secondary: isLight ? "rgba(5, 150, 105, 0.08)" : "rgba(52, 211, 153, 0.04)",
          accent: isLight ? "rgba(110, 231, 183, 0.1)" : "rgba(4, 120, 87, 0.06)",
        };
      case "violet":
        return {
          primary: isLight ? "rgba(139, 92, 246, 0.12)" : "rgba(139, 92, 246, 0.08)",
          secondary: isLight ? "rgba(124, 58, 237, 0.08)" : "rgba(167, 139, 250, 0.04)",
          accent: isLight ? "rgba(196, 181, 253, 0.1)" : "rgba(109, 40, 217, 0.06)",
        };
      case "white":
      default:
        return {
          primary: isLight ? "rgba(71, 85, 105, 0.08)" : "rgba(255, 255, 255, 0.04)",
          secondary: isLight ? "rgba(100, 116, 139, 0.06)" : "rgba(200, 200, 220, 0.02)",
          accent: isLight ? "rgba(148, 163, 184, 0.07)" : "rgba(160, 160, 180, 0.03)",
        };
    }
  }, [accentColor, isLight]);

  return (
    <div
      id="aurora-ambient-canvas"
      className="pointer-events-none fixed inset-0 z-1 overflow-hidden transition-opacity duration-1000"
      style={{ opacity: isLight ? 0.85 : 0.95 }}
    >
      {/* Aurora Orb 1 (Top Left) */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-15%] left-[5%] h-137.5 w-137.5 rounded-full filter blur-[100px]"
        style={{
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
        }}
      />

      {/* Aurora Orb 2 (Center Right) */}
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -50, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] right-[-10%] h-150 w-150 rounded-full filter blur-[120px]"
        style={{
          background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
        }}
      />

      {/* Aurora Orb 3 (Bottom Center) */}
      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] left-[25%] h-162.5 w-162.5 rounded-full filter blur-[110px]"
        style={{
          background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
