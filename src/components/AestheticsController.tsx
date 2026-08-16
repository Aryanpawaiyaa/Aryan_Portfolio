import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, Check, Settings, Sparkles, Grid, Eye, Compass, Sun, Moon } from "lucide-react";

interface AestheticsControllerProps {
  themeMode: "dark" | "light";
  setThemeMode: (val: "dark" | "light") => void;
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
  themeMode,
  setThemeMode,
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

  const isLight = themeMode === "light";

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`w-72 overflow-hidden rounded-xl border p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl ${
              isLight
                ? "border-slate-200 bg-white/95 text-slate-900 shadow-slate-300/50"
                : "border-white/10 bg-black/80 text-white shadow-black/80"
            }`}
          >
            {/* Controller Header */}
            <div className={`flex items-center justify-between border-b pb-3 ${isLight ? "border-slate-200" : "border-white/5"}`}>
              <div className="flex items-center gap-2">
                <div className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <h4 className={`font-mono text-[10.5px] font-semibold uppercase tracking-widest ${isLight ? "text-slate-900" : "text-white"}`}>
                  Interface Aesthetics
                </h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`rounded-md border px-2 py-0.5 font-mono text-[9px] transition-all cursor-pointer ${
                  isLight
                    ? "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    : "border-white/5 bg-white/2 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                Close
              </button>
            </div>

            {/* Theme Mode Toggle (Light / Dark) */}
            <div className="mt-4">
              <span className={`font-mono text-[8.5px] uppercase tracking-widest font-bold block mb-2 ${isLight ? "text-slate-500" : "text-gray-500"}`}>
                Theme Mode
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  id="theme-toggle-dark-btn"
                  onClick={() => setThemeMode("dark")}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-2 text-[10.5px] font-medium transition-all cursor-pointer ${
                    themeMode === "dark"
                      ? "border-white/20 bg-white/10 text-white font-semibold shadow-inner"
                      : isLight
                      ? "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200"
                      : "border-white/5 bg-white/2 text-gray-400 hover:bg-white/5"
                  }`}
                >
                  <Moon className="h-3.5 w-3.5" />
                  Dark Mode
                </button>
                <button
                  id="theme-toggle-light-btn"
                  onClick={() => setThemeMode("light")}
                  className={`flex items-center justify-center gap-2 rounded-lg border py-2 text-[10.5px] font-medium transition-all cursor-pointer ${
                    themeMode === "light"
                      ? "border-slate-300 bg-slate-900 text-white font-semibold shadow-md"
                      : isLight
                      ? "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200"
                      : "border-white/5 bg-white/2 text-gray-400 hover:bg-white/5"
                  }`}
                >
                  <Sun className="h-3.5 w-3.5 text-amber-500" />
                  Light Mode
                </button>
              </div>
            </div>

            {/* Presets Grid */}
            <div className="mt-4">
              <span className={`font-mono text-[8.5px] uppercase tracking-widest font-bold block mb-2 ${isLight ? "text-slate-500" : "text-gray-500"}`}>
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
                    className={`flex items-center justify-center rounded-md border py-2 text-center text-[10px] transition-all cursor-pointer ${
                      isLight
                        ? "border-slate-200 bg-slate-100/60 text-slate-700 hover:bg-slate-200"
                        : "border-white/5 bg-white/2 text-gray-400 hover:border-white/15 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Sliders & Toggles */}
            <div className="mt-5 space-y-4">
              <span className={`font-mono text-[8.5px] uppercase tracking-widest font-bold block mb-1 ${isLight ? "text-slate-500" : "text-gray-500"}`}>
                Environment Tuning
              </span>

              {/* Grid Toggle */}
              <div className="flex items-center justify-between">
                <span className={`flex items-center gap-1.5 text-[10px] ${isLight ? "text-slate-700" : "text-gray-300"}`}>
                  <Grid className="h-3.5 w-3.5 text-gray-500" />
                  Grid Background
                </span>
                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    showGrid ? (isLight ? "bg-slate-900" : "bg-white") : "bg-zinc-800"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-3 w-3 transform rounded-full transition duration-200 ease-in-out ${
                      showGrid
                        ? isLight
                          ? "translate-x-4 bg-white"
                          : "translate-x-4 bg-black"
                        : "translate-x-0 bg-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Dots Toggle */}
              <div className="flex items-center justify-between">
                <span className={`flex items-center gap-1.5 text-[10px] ${isLight ? "text-slate-700" : "text-gray-300"}`}>
                  <Eye className="h-3.5 w-3.5 text-gray-500" />
                  Dot Matrix Mesh
                </span>
                <button
                  onClick={() => setShowDots(!showDots)}
                  className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    showDots ? (isLight ? "bg-slate-900" : "bg-white") : "bg-zinc-800"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-3 w-3 transform rounded-full transition duration-200 ease-in-out ${
                      showDots
                        ? isLight
                          ? "translate-x-4 bg-white"
                          : "translate-x-4 bg-black"
                        : "translate-x-0 bg-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Drift Particles Toggle */}
              <div className="flex items-center justify-between">
                <span className={`flex items-center gap-1.5 text-[10px] ${isLight ? "text-slate-700" : "text-gray-300"}`}>
                  <Sparkles className="h-3.5 w-3.5 text-gray-500" />
                  Atmospheric Particles
                </span>
                <button
                  onClick={() => setShowParticles(!showParticles)}
                  className={`relative inline-flex h-4 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    showParticles ? (isLight ? "bg-slate-900" : "bg-white") : "bg-zinc-800"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-3 w-3 transform rounded-full transition duration-200 ease-in-out ${
                      showParticles
                        ? isLight
                          ? "translate-x-4 bg-white"
                          : "translate-x-4 bg-black"
                        : "translate-x-0 bg-gray-400"
                    }`}
                  />
                </button>
              </div>

              {/* Spotlight Glow Strength Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] text-gray-300">
                  <span className={`flex items-center gap-1.5 ${isLight ? "text-slate-700" : "text-gray-300"}`}>
                    <Compass className="h-3.5 w-3.5 text-gray-500" />
                    Radial Glow Power
                  </span>
                  <span className={`font-mono text-xs ${isLight ? "text-slate-600" : "text-gray-400"}`}>
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
                  className={`w-full h-1 rounded-lg appearance-none cursor-pointer ${
                    isLight ? "accent-slate-900 bg-slate-200" : "accent-white bg-zinc-800"
                  }`}
                />
              </div>

              {/* Accent Theme Selectors */}
              <div className={`space-y-2 pt-1 border-t ${isLight ? "border-slate-200" : "border-white/5"}`}>
                <span className={`font-mono text-[8.5px] uppercase tracking-widest font-bold block mb-1 ${isLight ? "text-slate-500" : "text-gray-500"}`}>
                  Accent Color Theme
                </span>
                <div className="flex justify-between gap-1.5">
                  {colors.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setAccentColor(c.id)}
                      className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border cursor-pointer hover:scale-110 transition-transform ${c.class} ${
                        accentColor === c.id ? (isLight ? "border-slate-900" : "border-white") : "border-transparent"
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
          /* Floating Action Dock containing Settings Cog */
          <div className="flex items-center gap-2">            {/* Aesthetics Settings Drawer Trigger */}
            <motion.button
              id="aesthetics-toggle-button"
              layoutId="aesthetics-toggle-button"
              onClick={() => setIsOpen(true)}
              title="Interface Aesthetics & Customization"
              className={`group flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 shadow-lg backdrop-blur-md cursor-pointer hover:scale-105 ${
                isLight
                  ? "border-slate-300 bg-white/90 text-slate-700 hover:text-slate-900 hover:bg-slate-100 shadow-slate-300/40"
                  : "border-white/10 bg-black/80 text-gray-400 hover:text-white hover:border-white/25 hover:bg-black/95 shadow-black/60"
              }`}
            >
              <Settings className="h-5 w-5 transition-transform duration-700 group-hover:rotate-180" />
              {/* Pulsing indicator of a live engine */}
              <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-black animate-pulse" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
