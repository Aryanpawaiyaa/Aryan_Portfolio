import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { personal } from "../resources/content";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onPostClick?: () => void;
  accentColor?: "white" | "amber" | "emerald" | "violet";
  themeMode?: "dark" | "light";
}

export default function Header({ activeTab, setActiveTab, onPostClick, accentColor = "white", themeMode = "dark" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "blog", label: "Blog" },
    { id: "gallery", label: "Gallery" }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    if (tabId === "blog" && onPostClick) {
      onPostClick();
    }
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isLight = themeMode === "light";

  return (
    <header
      id="app-header"
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? isLight
            ? "border-b border-slate-200 bg-white/90 py-2.5 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "border-b border-white/10 bg-black/75 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : isLight
          ? "border-b border-slate-100/80 bg-white/60 py-4 backdrop-blur-md"
          : "border-b border-white/5 bg-transparent py-4 backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        {/* Logo/Brand */}
        <button
          id="brand-logo-btn"
          onClick={() => handleTabClick("home")}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className={`relative flex h-8 w-8 items-center justify-center rounded-lg font-mono text-xs font-bold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:rotate-3 shadow-md ${
            accentColor === "amber" ? "bg-amber-500 text-black shadow-amber-500/10" :
            accentColor === "emerald" ? "bg-emerald-500 text-black shadow-emerald-500/10" :
            accentColor === "violet" ? "bg-violet-500 text-black shadow-violet-500/10" :
            "bg-white text-black"
          }`}>
            AR
            <span className={`absolute -inset-1 rounded-lg border opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              accentColor === "amber" ? "border-amber-500/25" :
              accentColor === "emerald" ? "border-emerald-500/25" :
              accentColor === "violet" ? "border-violet-500/25" :
              "border-white/25"
            }`} />
          </div>
          <div className="hidden sm:block">
            <h1 className={`font-sans text-xs font-semibold tracking-tight transition-colors duration-300 ${isLight ? "text-slate-800 group-hover:text-slate-600" : "text-white group-hover:text-gray-300"}`}>{personal.name}</h1>
            <p className={`font-sans text-[10px] font-normal leading-none tracking-wide mt-0.5 ${isLight ? "text-slate-500" : "text-gray-400"}`}>{personal.role}</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className={`hidden md:flex items-center gap-1.5 rounded-full border p-1 shadow-inner backdrop-blur-md ${
          isLight ? "border-slate-200 bg-slate-100/60" : "border-white/5 bg-white/[0.02]"
        }`}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            
            let tabActiveBgClass = isLight ? "bg-slate-900/10 border-slate-400/20" : "bg-white/[0.07] border-white/10";
            let activeTextClass = isLight ? "text-slate-900 font-semibold" : "text-white font-semibold";
            if (isActive) {
              if (accentColor === "amber") {
                tabActiveBgClass = "bg-amber-500/[0.05] border-amber-500/20";
                activeTextClass = "text-amber-500 font-semibold";
              } else if (accentColor === "emerald") {
                tabActiveBgClass = "bg-emerald-500/[0.05] border-emerald-500/20";
                activeTextClass = isLight ? "text-emerald-700 font-semibold" : "text-emerald-400 font-semibold";
              } else if (accentColor === "violet") {
                tabActiveBgClass = "bg-violet-500/[0.05] border-violet-500/20";
                activeTextClass = isLight ? "text-violet-700 font-semibold" : "text-violet-400 font-semibold";
              }
            }

            return (
              <button
                id={`nav-tab-${tab.id}`}
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative rounded-full px-4 py-1.5 font-sans text-xs font-medium tracking-wide transition-all duration-300 focus:outline-none ${
                  isActive ? activeTextClass : isLight ? "text-slate-500 hover:text-slate-800" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className={`absolute inset-0 rounded-full border -z-10 shadow-inner ${tabActiveBgClass}`}
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden md:block w-[100px]" />

        {/* Mobile Navigation Toggle */}
        <button
          id="mobile-nav-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-9 w-9 items-center justify-center rounded-lg border md:hidden focus:outline-none transition-all duration-300 ${
            isLight
              ? "border-slate-200 bg-slate-100 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-slate-200"
              : "border-white/5 bg-white/[0.01] text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04]"
          }`}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <motion.div
          id="mobile-nav-panel"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`border-b px-6 py-6 md:hidden backdrop-blur-xl ${
            isLight ? "border-slate-200 bg-white/95" : "border-white/10 bg-black/95"
          }`}
        >
          <div className="flex flex-col gap-1.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              
              let mobileActiveTabClass = isLight
                ? "bg-slate-100 text-slate-900 border-slate-200"
                : "bg-white/10 text-white border-white/5";
              let mobileDotClass = "bg-white shadow-white";
              if (isActive) {
                if (accentColor === "amber") {
                  mobileActiveTabClass = "bg-amber-500/10 text-amber-500 border-amber-500/20";
                  mobileDotClass = "bg-amber-500 shadow-amber-500";
                } else if (accentColor === "emerald") {
                  mobileActiveTabClass = isLight ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
                  mobileDotClass = "bg-emerald-500 shadow-emerald-500";
                } else if (accentColor === "violet") {
                  mobileActiveTabClass = isLight ? "bg-violet-50 text-violet-700 border-violet-200" : "bg-violet-500/10 text-violet-400 border-violet-500/20";
                  mobileDotClass = "bg-violet-500 shadow-violet-500";
                }
              }

              return (
                <button
                  id={`mobile-nav-tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center justify-between rounded-lg px-4 py-2.5 font-sans text-xs font-medium transition-all duration-300 ${
                    isActive ? mobileActiveTabClass : isLight ? "text-slate-500 hover:bg-slate-100 hover:text-slate-800" : "text-gray-400 hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  {tab.label}
                  {isActive && <div className={`h-1.5 w-1.5 rounded-full shadow-md ${mobileDotClass}`} />}
                </button>
              );
            })}

          </div>
        </motion.div>
      )}
    </header>
  );
}
