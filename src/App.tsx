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

  // High-end live design state
  const [showGrid, setShowGrid] = useState(true);
  const [showDots, setShowDots] = useState(true);
  const [showParticles, setShowParticles] = useState(true);
  const [glowStrength, setGlowStrength] = useState(1.0);
  const [accentColor, setAccentColor] = useState<"white" | "amber" | "emerald" | "violet">("white");

  // Dynamically inject CSS variables based on active accent color theme and grid status
  useEffect(() => {
    const root = document.getElementById("app-root-container");
    if (!root) return;

    let rgb = "255, 255, 255";
    if (accentColor === "white") {
      root.style.setProperty("--color-brand-glow", "rgba(255, 255, 255, 0.03)");
      root.style.setProperty("--color-brand-border-hover", "rgba(255, 255, 255, 0.2)");
      root.style.setProperty("--accent-rgb", "255, 255, 255");
      rgb = "255, 255, 255";
    } else if (accentColor === "amber") {
      root.style.setProperty("--color-brand-glow", "rgba(245, 158, 11, 0.03)");
      root.style.setProperty("--color-brand-border-hover", "rgba(245, 158, 11, 0.2)");
      root.style.setProperty("--accent-rgb", "245, 158, 11");
      rgb = "245, 158, 11";
    } else if (accentColor === "emerald") {
      root.style.setProperty("--color-brand-glow", "rgba(16, 185, 129, 0.03)");
      root.style.setProperty("--color-brand-border-hover", "rgba(16, 185, 129, 0.2)");
      root.style.setProperty("--accent-rgb", "16, 185, 129");
      rgb = "16, 185, 129";
    } else if (accentColor === "violet") {
      root.style.setProperty("--color-brand-glow", "rgba(139, 92, 246, 0.03)");
      root.style.setProperty("--color-brand-border-hover", "rgba(139, 92, 246, 0.2)");
      root.style.setProperty("--accent-rgb", "139, 92, 246");
      rgb = "139, 92, 246";
    }

    if (showGrid) {
      root.style.setProperty(
        "--grid-bg-image",
        `linear-gradient(rgba(${rgb}, 0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgb}, 0.012) 1px, transparent 1px)`
      );
    } else {
      root.style.setProperty("--grid-bg-image", "none");
    }
  }, [accentColor, showGrid]);

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
    <div id="app-root-container" className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Interactive geometric design grids */}
      <InteractiveGrid showGrid={showGrid} showDots={showDots} glowStrength={glowStrength} accentColor={accentColor} />

      {/* Immersive background particles */}
      {showParticles && <AtmosphericBackground accentColor={accentColor} />}

      {/* Sleek top navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onPostClick={() => setSelectedPostId(null)}
        accentColor={accentColor}
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
