import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, Check, Settings, Sparkles, Grid, Eye, Compass, RefreshCw } from "lucide-react";

interface AestheticsControllerProps {
  showGrid: boolean;
  setShowGrid: (val: boolean) => void;
  showDots: boolean;
  setShowDots: (val: boolean) => void;
  showParticles: boolean;
  setShowParticles: (val: boolean) => void;
  glowStrength: number;
  setGlowStrength: (val: number) => void;
  accentColor: "white" | "amber" | "emerald" | "violet";
  setAccentColor: (val: "white" | "amber" | "emerald" | "violet") => void;
}

export default function AestheticsController({
  showGrid,
  setShowGrid,
  showDots,
  setShowDots,
  showParticles,
  setShowParticles,
  glowStrength,
  setGlowStrength,
  accentColor,
  setAccentColor,
}: AestheticsControllerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Apply a design preset
  const applyPreset = (preset: "minimal" | "dev" | "cosmic" | "cyber") => {
    switch (preset) {
      case "minimal":
        setShowGrid(false);
        setShowDots(true);
        setShowParticles(false);
        setGlowStrength(0.5);
        setAccentColor("white");
        break;
      case "dev":
        setShowGrid(true);
        setShowDots(true);
        setShowParticles(true);
        setGlowStrength(1.0);
        setAccentColor("white");
        break;
      case "cosmic":
        setShowGrid(true);
        setShowDots(false);
        setShowParticles(true);
        setGlowStrength(1.5);
        setAccentColor("violet");
        break;
      case "cyber":
        setShowGrid(true);
        setShowDots(true);
        setShowParticles(true);
        setGlowStrength(1.2);
        setAccentColor("amber");
        break;
    }
  };

  const colors: Array<{ id: "white" | "amber" | "emerald" | "violet"; class: string; label: string }> = [
    { id: "white", class: "bg-white border-white/20", label: "Mono White" },
    { id: "amber", class: "bg-amber-500 border-amber-500/20", label: "Cyber Amber" },
    { id: "emerald", class: "bg-emerald-500 border-emerald-500/20", label: "Aurora Emerald" },
    { id: "violet", class: "bg-violet-500 border-violet-500/20", label: "Cosmic Violet" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-72 overflow-hidden rounded-xl border border-white/10 bg-black/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            {/* Controller Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <div className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <h4 className="font-mono text-[10.5px] font-semibold uppercase tracking-widest text-white">
                  Interface Aesthetics
                </h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-white/5 bg-white/[0.02] px-2 py-0.5 font-mono text-[9px] text-gray-400 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              >
                Close
              </button>
            </div>

            {/* Presets Grid */}
            <div className="mt-4">
              <span className="font-mono text-[8.5px] uppercase tracking-widest text-gray-500 font-bold block mb-2">
                Design Presets
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: "minimal", label: "Pure Minimal" },
                  { id: "dev", label: "Sys Architect" },
                  { id: "cosmic", label: "Cosmic Drift" },
                  { id: "cyber", label: "Amber Terminal" },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => applyPreset(p.id as any)}
                    className="flex items-center justify-center rounded-md border border-white/5 bg-white/[0.02] py-2 text-center text-[10px] text-gray-400 hover:border-white/15 hover:bg-white/[0.05] hover:text-white transition-all cursor-pointer"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Sliders & Toggles */}
            <div className="mt-5 space-y-4">
              <span className="font-mono text-[8.5px] uppercase tracking-widest text-gray-500 font-bold block mb-1">
                Environment Tuning
              </span>

              {/* Grid Toggle */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] text-gray-300">
                  <Grid className="h-3.5 w-3.5 text-gray-500" />
                  Grid Background
                </span>
                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    showGrid ? "bg-white" : "bg-zinc-800"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out ${
                      showGrid ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Dots Toggle */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] text-gray-300">
                  <Eye className="h-3.5 w-3.5 text-gray-500" />
                  Dot Matrix Mesh
                </span>
                <button
                  onClick={() => setShowDots(!showDots)}
                  className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    showDots ? "bg-white" : "bg-zinc-800"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out ${
                      showDots ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Drift Particles Toggle */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[10px] text-gray-300">
                  <Sparkles className="h-3.5 w-3.5 text-gray-500" />
                  Atmospheric Particles
                </span>
                <button
                  onClick={() => setShowParticles(!showParticles)}
                  className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    showParticles ? "bg-white" : "bg-zinc-800"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out ${
                      showParticles ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Spotlight Glow Strength Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] text-gray-300">
                  <span className="flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5 text-gray-500" />
                    Radial Glow Power
                  </span>
                  <span className="font-mono text-xs text-gray-400">
                    {(glowStrength * 100).toFixed(0)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={glowStrength}
                  onChange={(e) => setGlowStrength(parseFloat(e.target.value))}
                  className="w-full accent-white bg-zinc-800 h-1 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Accent Theme Selectors */}
              <div className="space-y-2 pt-1 border-t border-white/5">
                <span className="font-mono text-[8.5px] uppercase tracking-widest text-gray-500 font-bold block mb-1">
                  Accent Color Theme
                </span>
                <div className="flex justify-between gap-1.5">
                  {colors.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setAccentColor(c.id)}
                      className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border cursor-pointer hover:scale-110 transition-transform ${c.class} ${
                        accentColor === c.id ? "border-white" : "border-transparent"
                      }`}
                      title={c.label}
                    >
                      {accentColor === c.id && (
                        <Check className="h-3 w-3 text-black font-extrabold stroke-[3px]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            layoutId="aesthetics-toggle-button"
            onClick={() => setIsOpen(true)}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/80 text-gray-400 hover:text-white hover:border-white/25 hover:bg-black/95 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md cursor-pointer"
          >
            <Settings className="h-5 w-5 transition-transform duration-700 group-hover:rotate-180" />
            {/* Pulsing indicator of a live engine */}
            <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-black animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
