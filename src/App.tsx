import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import WorkView from "./components/WorkView";
import AboutView from "./components/AboutView";
import GalleryView from "./components/GalleryView";
import BlogView from "./components/BlogView";
import AtmosphericBackground from "./components/AtmosphericBackground";
import InteractiveGrid from "./components/InteractiveGrid";
import AestheticsController from "./components/AestheticsController";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Theme mode state (Dark / Light)
  const [themeMode, setThemeMode] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("portfolio_theme");
    return (saved === "light" || saved === "dark") ? saved : "dark";
  });

  // Design configuration state
  const [showGrid, setShowGrid] = useState(true);
  const [showDots, setShowDots] = useState(true);
  const [showParticles, setShowParticles] = useState(true);
  const [glowStrength, setGlowStrength] = useState(1.0);
  const [accentColor, setAccentColor] = useState<"white" | "amber" | "emerald" | "violet">("white");

  // Sync themeMode with HTML element attributes & localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
    localStorage.setItem("portfolio_theme", themeMode);
  }, [themeMode]);

  // Dynamically inject CSS variables based on active accent color theme and grid status
  useEffect(() => {
    const root = document.getElementById("app-root-container");
    if (!root) return;

    let rgb = themeMode === "light" ? "15, 23, 42" : "255, 255, 255";
    if (accentColor === "white") {
      root.style.setProperty("--color-brand-glow", themeMode === "light" ? "rgba(15, 23, 42, 0.03)" : "rgba(255, 255, 255, 0.03)");
      root.style.setProperty("--color-brand-border-hover", themeMode === "light" ? "rgba(15, 23, 42, 0.2)" : "rgba(255, 255, 255, 0.2)");
      root.style.setProperty("--accent-rgb", rgb);
    } else if (accentColor === "amber") {
      root.style.setProperty("--color-brand-glow", "rgba(245, 158, 11, 0.03)");
      root.style.setProperty("--color-brand-border-hover", "rgba(245, 158, 11, 0.2)");
      root.style.setProperty("--accent-rgb", "245, 158, 11");
      rgb = "245, 158, 11";
    } else if (accentColor === "emerald") {
      const emRgb = themeMode === "light" ? "5, 150, 105" : "16, 185, 129";
      root.style.setProperty("--color-brand-glow", `rgba(${emRgb}, 0.03)`);
      root.style.setProperty("--color-brand-border-hover", `rgba(${emRgb}, 0.2)`);
      root.style.setProperty("--accent-rgb", emRgb);
      rgb = emRgb;
    } else if (accentColor === "violet") {
      const viRgb = themeMode === "light" ? "124, 58, 237" : "139, 92, 246";
      root.style.setProperty("--color-brand-glow", `rgba(${viRgb}, 0.03)`);
      root.style.setProperty("--color-brand-border-hover", `rgba(${viRgb}, 0.2)`);
      root.style.setProperty("--accent-rgb", viRgb);
      rgb = viRgb;
    }

    if (showGrid) {
      const opacity = themeMode === "light" ? "0.03" : "0.012";
      root.style.setProperty(
        "--grid-bg-image",
        `linear-gradient(rgba(${rgb}, ${opacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb}, ${opacity}) 1px, transparent 1px)`
      );
    } else {
      root.style.setProperty("--grid-bg-image", "none");
    }
  }, [accentColor, showGrid, themeMode]);

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    setSelectedProjectId(null);
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjectSelect = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActiveTab("work");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePostSelect = (postId: string) => {
    setSelectedPostId(postId);
    setActiveTab("blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomeView
            onNavigate={handleNavigate}
            onProjectSelect={handleProjectSelect}
            onPostSelect={handlePostSelect}
            accentColor={accentColor}
          />
        );
      case "work":
        return (
          <WorkView
            selectedProjectId={selectedProjectId}
            onSelectProject={setSelectedProjectId}
          />
        );
      case "about":
        return <AboutView />;
      case "gallery":
        return <GalleryView />;
      case "blog":
        return (
          <BlogView
            selectedPostId={selectedPostId}
            onSelectPost={setSelectedPostId}
          />
        );
      default:
        return (
          <HomeView
            onNavigate={handleNavigate}
            onProjectSelect={handleProjectSelect}
            onPostSelect={handlePostSelect}
            accentColor={accentColor}
          />
        );
    }
  };

  return (
    <div
      id="app-root-container"
      className={`min-h-screen transition-colors duration-500 selection:bg-slate-900 selection:text-white ${
        themeMode === "light"
          ? "light-mode bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white"
          : "bg-black text-white selection:bg-white selection:text-black"
      }`}
    >
      {/* Interactive geometric design grids */}
      <InteractiveGrid showGrid={showGrid} showDots={showDots} glowStrength={glowStrength} accentColor={accentColor} themeMode={themeMode} />

      {/* Immersive background particles */}
      {showParticles && <AtmosphericBackground accentColor={accentColor} themeMode={themeMode} />}

      {/* Sleek top navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onPostClick={() => setSelectedPostId(null)}
        accentColor={accentColor}
        themeMode={themeMode}
      />

      {/* Main Container with slide page transitions */}
      <main id="app-main-content" className="relative z-10 min-h-[75vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + (selectedProjectId || "") + (selectedPostId || "")}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Aesthetics Configuration Floating Panel */}
      <AestheticsController
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        showGrid={showGrid}
        setShowGrid={setShowGrid}
        showDots={showDots}
        setShowDots={setShowDots}
        showParticles={showParticles}
        setShowParticles={setShowParticles}
        glowStrength={glowStrength}
        setGlowStrength={setGlowStrength}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />

      {/* Sleek bottom footer */}
      <Footer />
    </div>
  );
}
