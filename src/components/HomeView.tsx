import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  ArrowRight,
  FileText,
  Mail,
  Cpu,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Link as LinkIcon,
  Code,
  Layers,
  Terminal,
  Globe,
  BookOpen,
  Award,
  CheckCircle2,
  Shield,
  GraduationCap,
  Briefcase,
  Printer,
  LucideIcon
} from "lucide-react";
import { personal, socialLinks } from "../resources/content";
import SpotlightCard from "./SpotlightCard";
import MagneticEffect from "./MagneticEffect";
import TypedText from "./TypedText";
import FloatingGeometry from "./FloatingGeometry";
import resumePhoto from "../assets/images/profile/resume_photo.jpg";

const ICON_MAP: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Instagram,
  Code,
  Cpu,
  Layers,
  Terminal,
  Globe,
  BookOpen,
  Award,
};

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
  onProjectSelect: (projectId: string) => void;
  onPostSelect: (postId: string) => void;
  accentColor?: "white" | "amber" | "emerald" | "violet";
  themeMode?: "dark" | "light";
}

export default function HomeView({
  onNavigate,
  accentColor = "white",
  themeMode = "dark",
}: HomeViewProps) {
  const [time, setTime] = useState("");
  const isLight = themeMode === "light";

  // Real-time Gwalior Clock (IST)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Theme styling helpers
  const textAccent =
    accentColor === "amber" ? "text-amber-400" :
    accentColor === "emerald" ? "text-emerald-400" :
    accentColor === "violet" ? "text-violet-400" :
    (isLight ? "text-slate-900" : "text-white");

  const bgAccent =
    accentColor === "amber" ? "bg-amber-500 text-black hover:bg-amber-400 shadow-amber-500/10" :
    accentColor === "emerald" ? "bg-emerald-500 text-black hover:bg-emerald-400 shadow-emerald-500/10" :
    accentColor === "violet" ? "bg-violet-500 text-black hover:bg-violet-400 shadow-violet-500/10" :
    (isLight ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-white text-black hover:bg-gray-100");

  const orbitPlanetColor =
    accentColor === "amber" ? "#f59e0b" :
    accentColor === "emerald" ? "#10b981" :
    accentColor === "violet" ? "#8b5cf6" :
    (isLight ? "#0f172a" : "#ffffff");

  const orbitStrokeFine =
    accentColor === "amber" ? "rgba(245, 158, 11, 0.45)" :
    accentColor === "emerald" ? "rgba(16, 185, 129, 0.45)" :
    accentColor === "violet" ? "rgba(139, 92, 246, 0.45)" :
    (isLight ? "rgba(15, 23, 42, 0.3)" : "rgba(255, 255, 255, 0.3)");

  const orbitStrokeSubtle =
    accentColor === "amber" ? "rgba(245, 158, 11, 0.18)" :
    accentColor === "emerald" ? "rgba(16, 185, 129, 0.18)" :
    accentColor === "violet" ? "rgba(139, 92, 246, 0.18)" :
    (isLight ? "rgba(15, 23, 42, 0.12)" : "rgba(255, 255, 255, 0.12)");

  // Single-page print trigger
  const handlePrint = () => {
    window.print();
  };

  // Dynamic social icon helper
  const renderSocialIcon = (iconName: string) => {
    const IconComponent = ICON_MAP[iconName] || LinkIcon;
    return <IconComponent className="h-4 w-4" />;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 280, damping: 28 },
    },
  };

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-100 h-25 bg-white/1.5 rounded-full filter blur-[120px] pointer-events-none print-hidden" />
      <div className="absolute top-[50%] right-10 w-75 h-75 bg-white/1 rounded-full filter blur-[100px] pointer-events-none print-hidden" />

      <motion.div
        id="home-view-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-14 space-y-12 sm:space-y-16"
      >
        {/* ═════════════════════════════════════════════════════════════
            1. HERO SECTION (LARGE CIRCULAR PORTRAIT & CIRCLING ORBITS)
            ═════════════════════════════════════════════════════════════ */}
        <motion.section id="hero-section" variants={itemVariants} className="relative pt-2 sm:pt-4 print-hidden">
          <FloatingGeometry accentColor={accentColor} themeMode={themeMode} />

          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 sm:gap-12">
            <div className="space-y-4 max-w-xl">
              {/* Status & Location & Time */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-mono tracking-wider text-gray-400">
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/5 px-3 py-1 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.06)]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  {personal.status}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin className="h-3 w-3" />
                  {personal.location}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="h-3 w-3" />
                  {time || "..."}
                </div>
              </div>

              {/* Candidate Name */}
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.06]">
                {personal.name} Narwariya
              </h1>

              {/* Dynamic Animated Typed Role */}
              <h2 className={`font-sans text-lg sm:text-xl font-semibold tracking-tight ${textAccent} min-h-7 flex items-center`}>
                <TypedText
                  words={[
                    "Tactical UAV & Autonomous Drone Systems Engineer",
                    "Team Trinetra — SUAS 2026 USA (16th Global Flight Rank)",
                    "Event Head — NaviGrid (IIT Madras BS, 427 Competitors)",
                    "Embedded Hardware & PCB Designer (KiCad 10)",
                    "B.S. Data Science (IIT Madras) • B.Tech. CSBS (MITS)"
                  ]}
                  cursorColor={orbitPlanetColor}
                />
              </h2>

              {/* Value Proposition */}
              <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-400 font-light">
                {personal.bio}
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <MagneticEffect>
                  <button
                    id="hero-cta-projects"
                    onClick={() => onNavigate("work")}
                    className={`group flex items-center gap-2 rounded-lg px-5 py-2.5 font-sans text-xs font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer ${bgAccent}`}
                  >
                    View Projects
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </MagneticEffect>

                <MagneticEffect>
                  <a
                    id="hero-cta-resume-scroll"
                    href="#resume-section"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("resume-section")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/2 px-5 py-2.5 font-sans text-xs font-semibold text-gray-300 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <FileText className="h-3.5 w-3.5 text-emerald-400" />
                    Resume
                  </a>
                </MagneticEffect>

                <MagneticEffect>
                  <a
                    id="hero-cta-email"
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/2 px-5 py-2.5 font-sans text-xs font-semibold text-gray-300 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Contact
                  </a>
                </MagneticEffect>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2.5 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/3 text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:text-white"
                    title={social.platform}
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Avatar with Circling Planetary Orbits (BIGGER & FULL FACE VISIBLE) */}
            <div className="shrink-0 self-center">
              <div className="relative flex items-center justify-center p-6 sm:p-10">
                {/* Outer Dashed Planetary Orbit Ring (Clockwise) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                  className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-84 md:h-84 rounded-full border border-dashed pointer-events-none"
                  style={{ borderColor: orbitStrokeSubtle }}
                >
                  {/* Orbiting Planet 1 */}
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full transition-colors"
                    style={{
                      backgroundColor: orbitPlanetColor,
                      boxShadow: `0 0 12px ${orbitPlanetColor}`,
                    }}
                  />
                </motion.div>

                {/* Middle Counter-Rotating Planetary Orbit Ring (Counter-Clockwise) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border pointer-events-none"
                  style={{ borderColor: orbitStrokeFine }}
                >
                  {/* Orbiting Moon 2 */}
                  <div
                    className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: orbitPlanetColor,
                      boxShadow: `0 0 8px ${orbitPlanetColor}`,
                    }}
                  />
                </motion.div>

                {/* Inner Pulse Ring */}
                <div
                  className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-62 md:h-62 rounded-full border pointer-events-none opacity-40 animate-pulse"
                  style={{ borderColor: orbitStrokeSubtle }}
                />

                {/* Candidate Photo (Enlarged Circular Frame with Full Face Prominence) */}
                <div className="relative group z-10">
                  <div
                    className="absolute -inset-2 rounded-full opacity-60 blur-lg group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background: `radial-gradient(circle, ${orbitPlanetColor}40 0%, transparent 70%)`
                    }}
                  />
                  <div
                    className={`relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 p-1 backdrop-blur-md shadow-2xl transition-transform duration-500 group-hover:scale-103 ${
                      isLight ? "border-slate-300 bg-white" : "border-white/20 bg-black/60"
                    }`}
                  >
                    <img
                      src={resumePhoto}
                      alt={personal.name}
                      className="h-full w-full object-cover object-[center_12%] rounded-full contrast-[1.03] brightness-100 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═════════════════════════════════════════════════════════════
            2. RESUME SECTION (COOL, ATTRACTIVE GLASSMORPHIC DESIGN)
            ═════════════════════════════════════════════════════════════ */}
        <motion.section
          id="resume-section"
          variants={itemVariants}
          className="space-y-4 pt-2 scroll-mt-20"
        >
          {/* Controls Bar: Just "Resume" and "Print / Download PDF" */}
          <div
            id="resume-controls-bar"
            className="flex items-center justify-between border-b border-white/10 pb-3"
          >
            <div>
              <h2 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-400" />
                Resume
              </h2>
              <p className="font-sans text-xs text-gray-400 font-light mt-0.5">
                Robotics, Autonomous Systems & Tactical UAV Engineer • Verified Single-Page Print Edition
              </p>
            </div>

            <button
              id="print-resume-btn"
              onClick={handlePrint}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-sans text-xs font-semibold transition-all duration-200 shadow-md cursor-pointer ${bgAccent}`}
            >
              <Printer className="h-4 w-4" />
              <span>Print / Download PDF</span>
            </button>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              THE RESUME CONTAINER
              Screen: Cyberpunk/frosted dark glassmorphism card (NOT white sheet!)
              Print: Pure borderless A4 sheet with black ink
              ───────────────────────────────────────────────────────────── */}
          <div
            id="resume-sheet"
            className={`relative rounded-2xl p-5 sm:p-7 transition-all duration-200 space-y-4 print:border-none print:shadow-none print:p-0 print:m-0 print:bg-white print:rounded-none ${
              isLight
                ? "border border-slate-200 bg-white/70 backdrop-blur-xl shadow-lg"
                : "border border-white/10 bg-zinc-950/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            }`}
          >
            {/* Top Accent Ribbon (Screen Only) */}
            <div className="absolute top-0 inset-x-6 h-0.5 rounded-b bg-linear-to-r from-transparent via-emerald-500/50 to-transparent print-hidden" />

            {/* ═════════════════════════════════════════════════════════════
                HEADER: CANDIDATE IDENTITY & CONTACT STRIP
                ═════════════════════════════════════════════════════════════ */}
            <header className="border-b border-white/10 pb-3">
              <div className="flex flex-row items-center justify-between gap-4">
                <div className="space-y-1.5 min-w-0">
                  <h3 className="font-sans text-2xl sm:text-3xl font-black tracking-tight text-white leading-none">
                    {personal.name} Narwariya
                  </h3>

                  <div className={`font-sans text-xs sm:text-sm font-semibold tracking-tight ${textAccent} flex items-center`}>
                    <span className="font-bold text-[9.5pt]">
                      Robotics, Autonomous Systems & Tactical UAV Engineer
                    </span>
                  </div>

                  {/* ATS Contact Line */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] sm:text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gray-500 shrink-0" />
                      {personal.location}
                    </span>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Mail className="h-3 w-3 text-gray-500 shrink-0" />
                      {personal.email}
                    </a>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <a
                      href="https://github.com/Aryanpawaiyaa"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Github className="h-3 w-3 text-gray-500 shrink-0" />
                      github.com/Aryanpawaiyaa
                    </a>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <a
                      href="https://www.linkedin.com/in/aryan-n-3b8322388"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3 w-3 text-gray-500 shrink-0" />
                      linkedin.com/in/aryan-n
                    </a>
                  </div>
                </div>

                {/* Candidate Portrait (Clean & Borderless in Print) */}
                <div
                  id="resume-avatar-frame"
                  className="shrink-0 w-20 h-26 sm:w-22 sm:h-28 overflow-hidden rounded-lg shadow-sm print:border-none print:shadow-none print:rounded-none"
                >
                  <img
                    src={resumePhoto}
                    alt={personal.name}
                    className="w-full h-full object-cover object-[center_20%] contrast-[1.03] brightness-100 block rounded-lg print:rounded-none print:border-none"
                  />
                </div>
              </div>

              {/* Executive Summary */}
              <div className="mt-2 pt-2 border-t border-white/5 font-sans text-[11px] sm:text-xs text-gray-300 font-light leading-relaxed">
                <strong className="text-white font-semibold">Summary: </strong>
                Detail-oriented Robotics & Systems Engineering student pursuing dual degrees at <span className="text-white font-medium">IIT Madras</span> (B.S. in Data Science) and <span className="text-white font-medium">MITS Gwalior</span> (B.Tech. in CSBS). Hands-on experience in tactical UAV development, autonomous mobile robotics, and aerial systems with tactical drone tuning. Autonomous AI Drone Engineer for <span className="text-white font-medium">SUAS 2026 USA</span> with Team Trinetra, securing <strong className="text-white font-medium">16th global flight rank</strong> (ahead of IIT Madras at 31st). Event Head of <span className="text-white font-medium">NaviGrid</span> (IIT Madras BS, 427 competitors). Skilled in ArduPilot, MAVLink, Cube Orange, Nvidia Jetson Orin, ROS 2, and custom PCB hardware.
              </div>
            </header>

            {/* ═════════════════════════════════════════════════════════════
                RESUME 2-COLUMN MAIN BODY
                Left Column (36%): Education, Drone Skills, NCC, Honors
                Right Column (64%): Experience & Key Builds
                ═════════════════════════════════════════════════════════════ */}
            <div id="resume-columns-grid" className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              
              {/* ─────────────────────────────────────────────────────────
                  LEFT COLUMN (md:col-span-5)
                  ───────────────────────────────────────────────────────── */}
              <div className="md:col-span-5 space-y-3.5">
                
                {/* 1. EDUCATION & DUAL DEGREE */}
                <section id="resume-education" className="space-y-1.5">
                  <div className="flex items-center gap-1.5 border-b border-white/5 pb-1 resume-section-divider">
                    <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
                    <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-white">
                      Education & Dual Degree
                    </h4>
                  </div>

                  <div className="space-y-2 font-sans text-xs">
                    {/* IIT Madras */}
                    <div className={`p-2 rounded-lg ${isLight ? "bg-slate-50/80" : "bg-white/2"} border border-white/5`}>
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="font-bold text-white text-[11px] leading-tight">IIT Madras</span>
                        <span className="font-mono text-[9px] text-gray-400 shrink-0">2025 — Present</span>
                      </div>
                      <div className="font-medium text-[10px] text-emerald-400 leading-tight">
                        B.S. in Data Science and Applications
                      </div>
                      <div className="text-[9px] text-gray-400 leading-tight mt-0.5">
                        Machine Learning, Cloud Systems, Statistical Modeling, Autonomous Systems.
                      </div>
                    </div>

                    {/* MITS Gwalior */}
                    <div className={`p-2 rounded-lg ${isLight ? "bg-slate-50/80" : "bg-white/2"} border border-white/5`}>
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="font-bold text-white text-[11px] leading-tight">MITS Gwalior</span>
                        <span className="font-mono text-[9px] text-gray-400 shrink-0">2025 — Present</span>
                      </div>
                      <div className="font-medium text-[10px] text-emerald-400 leading-tight">
                        B.Tech. in Computer Science & Business Systems
                      </div>
                      <div className="text-[9px] text-gray-400 leading-tight mt-0.5">
                        DSA, Algorithms, OOP, Database Systems, Embedded Electronics.
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. UAV & EMBEDDED HARDWARE SKILLS */}
                <section id="resume-skills" className="space-y-1.5">
                  <div className="flex items-center gap-1.5 border-b border-white/10 pb-1 resume-section-divider">
                    <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                    <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-white">
                      UAV & Embedded Hardware Skills
                    </h4>
                  </div>

                  <div className="space-y-1.5 font-sans text-[9.5px] leading-snug">
                    <div>
                      <span className="font-semibold text-white">Companion Computers & MCUs: </span>
                      <span className="text-gray-300">Nvidia Jetson Orin, Radxa Cubie, STM32, ESP32, AT32, Arduino UNO</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Flight Controllers: </span>
                      <span className="text-gray-300">Cube Orange, SpeedyBee F405, iFlight BLITZ ATF435</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Protocols & Telemetry: </span>
                      <span className="text-gray-300">MAVLink, ExpressLRS, UART, I2C, PWM, Sensor Fusion</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Flight Control Firmware: </span>
                      <span className="text-gray-300">ArduPilot, INAV, Betaflight, Librepilot</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">CAD & Fabrication: </span>
                      <span className="text-gray-300">Autodesk Fusion 360, 3D Printing & Tactical Prototyping, KiCad 10.0</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">Robotics & Software: </span>
                      <span className="text-gray-300">ROS 2 (Jazzy), Gazebo Harmonic, C, C++, Python, TypeScript, React</span>
                    </div>
                  </div>
                </section>

                {/* 3. MILITARY & TACTICAL LEADERSHIP (NCC) */}
                <section id="resume-military" className="space-y-1.5">
                  <div className="flex items-center gap-1.5 border-b border-white/10 pb-1 resume-section-divider">
                    <Shield className="h-3.5 w-3.5 text-emerald-400" />
                    <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-white">
                      Military Leadership & Training (NCC)
                    </h4>
                  </div>

                  <div className="space-y-1.5 font-sans text-xs">
                    <div className="p-1.5 rounded-lg bg-white/1">
                      <div className="flex items-baseline justify-between">
                        <span className="font-semibold text-white text-[10.5px]">Army Attachment Camp (AAC)</span>
                        <span className="font-mono text-[9px] text-gray-400">Feb 2026</span>
                      </div>
                      <div className="text-[9px] text-gray-300 font-light leading-snug">
                        Attached to Indian Army combat units at Babina Military Station; Main Battle Tank (MBT) tactics, combat logistics depot overhauls, and weapon handling.
                      </div>
                    </div>

                    <div className="p-1.5 rounded-lg bg-white/1">
                      <div className="flex items-baseline justify-between">
                        <span className="font-semibold text-white text-[10.5px]">Advanced Leadership Camp (ALC)</span>
                        <span className="font-mono text-[9px] text-gray-400">2025</span>
                      </div>
                      <div className="text-[9px] text-gray-300 font-light leading-snug">
                        National-level conditioning under Army Officers; crisis management, tactical decision making, and multi-directorate team leadership.
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. KEY HONORS & AWARDS */}
                <section id="resume-credentials" className="space-y-1.5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1 resume-section-divider">
                    <div className="flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5 text-emerald-400" />
                      <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-white">
                        Honors & Key Accreditations
                      </h4>
                    </div>
                    <button
                      onClick={() => onNavigate("about")}
                      className="print-hidden font-mono text-[9px] text-emerald-400 hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  </div>

                  <div className="space-y-1 font-sans text-[9.5px] text-gray-300">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong className="text-white">Certificate of Recognition:</strong> Event Head for NaviGrid (IIT Madras BS, 2026)</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong className="text-white">AI Fundamentals:</strong> IBM SkillsBuild & Cisco Networking Academy (2026)</span>
                    </div>
                  </div>
                </section>
              </div>

              {/* ─────────────────────────────────────────────────────────
                  RIGHT COLUMN (md:col-span-7)
                  ───────────────────────────────────────────────────────── */}
              <div className="md:col-span-7 space-y-3.5">
                
                {/* 1. WORK & TECHNICAL LEADERSHIP */}
                <section id="resume-experience" className="space-y-1.5">
                  <div className="flex items-center gap-1.5 border-b border-white/10 pb-1 resume-section-divider">
                    <Briefcase className="h-3.5 w-3.5 text-emerald-400" />
                    <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-white">
                      Work & Technical Leadership
                    </h4>
                  </div>

                  <div className="space-y-2.5">
                    {/* SUAS 2026 USA - Team Trinetra */}
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between gap-1">
                        <div>
                          <span className="font-bold text-white text-[11.5px]">Autonomous AI Drone Engineer</span>
                          <div className="text-[10px] font-semibold text-emerald-400">
                            Team Trinetra (DroneX) • SUAS 2026 USA (Tulsa, Oklahoma)
                          </div>
                        </div>
                        <span className="font-mono text-[9px] text-gray-400 shrink-0">Jan — Oct 2026</span>
                      </div>

                      <ul className="list-disc list-outside pl-3.5 space-y-0.5 font-sans text-[9.5px] text-gray-300 font-light leading-snug">
                        <li>
                          Co-engineered a 22-inch fully autonomous UAS with custom carbon frame, smart batteries, and edge AI vision for the international <strong className="text-white font-medium">Student Unmanned Aerial Systems (SUAS 2026)</strong> in Tulsa, Oklahoma, USA.
                        </li>
                        <li>
                          Represented India as one of only two teams nationwide, achieving <strong className="text-white font-medium">16th rank globally</strong> on flight order (ahead of IIT Madras at 31st).
                        </li>
                        <li>
                          Integrated ArduPilot autonomous waypoint navigation, dynamic obstacle avoidance, and computer vision with sponsorship from Vyom Drones Pvt Ltd.
                        </li>
                      </ul>
                    </div>

                    {/* NaviGrid Event Head */}
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between gap-1">
                        <div>
                          <span className="font-bold text-white text-[11.5px]">Event Head & Lead Simulation Engineer</span>
                          <div className="text-[10px] font-semibold text-emerald-400">
                            NaviGrid: The Adaptive Path Challenge • IIT Madras BS Degree & Yantra
                          </div>
                        </div>
                        <span className="font-mono text-[9px] text-gray-400 shrink-0">Sept 2026</span>
                      </div>

                      <ul className="list-disc list-outside pl-3.5 space-y-0.5 font-sans text-[9.5px] text-gray-300 font-light leading-snug">
                        <li>
                          Headed technical problem formulation, launch, and adjudication for <strong className="text-white font-medium">427 solo competitors</strong> in an autonomous mobile robot (AMR) simulation gauntlet in Gazebo Harmonic & ROS 2 Jazzy.
                        </li>
                        <li>
                          Engineered dynamic obstacle avoidance, elevation incline cost terrain, and deterministic safety watchdog nodes; adjudicated alongside UKAEA (Oxford) and international robotics judges.
                        </li>
                      </ul>
                    </div>

                    {/* Technical Coordinator - Yantra */}
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between gap-1">
                        <div>
                          <span className="font-bold text-white text-[11px]">Technical Coordinator</span>
                          <div className="text-[9.5px] font-semibold text-emerald-400">
                            Yantra Robotics Society, IIT Madras
                          </div>
                        </div>
                        <span className="font-mono text-[9px] text-gray-400 shrink-0">2025 — Present</span>
                      </div>
                      <p className="font-sans text-[9px] text-gray-300 font-light leading-snug">
                        Engineered autonomous navigation pipelines and sensor fusion algorithms for differential-drive AMRs using ROS 2 Jazzy and C++/Python; conducted technical robotics workshops.
                      </p>
                    </div>

                    {/* Technical Co-Lead - DroneX */}
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between gap-1">
                        <div>
                          <span className="font-bold text-white text-[11px]">Technical Co-Lead</span>
                          <div className="text-[9.5px] font-semibold text-emerald-400">
                            DroneX Aerotech Club, MITS Gwalior
                          </div>
                        </div>
                        <span className="font-mono text-[9px] text-gray-400 shrink-0">2025 — Present</span>
                      </div>
                      <p className="font-sans text-[9px] text-gray-300 font-light leading-snug">
                        Engineered UAV avionics, ArduPilot autonomous navigation, sensor fusion, and flight controller tuning; supervised multi-rotor assembly and telemetry links.
                      </p>
                    </div>

                    {/* Tactical UAV Assembly & Tuning */}
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between gap-1">
                        <div>
                          <span className="font-bold text-white text-[11px]">Tactical UAV Assembly & Tuning</span>
                          <div className="text-[9.5px] font-semibold text-emerald-400">
                            Defense & Tactical Drone Conditioning
                          </div>
                        </div>
                        <span className="font-mono text-[9px] text-gray-400 shrink-0">2025 — 2026</span>
                      </div>
                      <p className="font-sans text-[9px] text-gray-300 font-light leading-snug">
                        Assisted in configuring and tuning 10-inch and 5-inch tactical drones on INAV & ArduPilot for operational flight stability. Designed and 3D printed custom vibration-damping mounts to enhance frame stability, flight reliability, and payload security.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 2. SELECTED ENGINEERING BUILDS */}
                <section id="resume-builds" className="space-y-1.5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1 resume-section-divider">
                    <div className="flex items-center gap-1.5">
                      <Code className="h-3.5 w-3.5 text-emerald-400" />
                      <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-white">
                        Selected Engineering Builds
                      </h4>
                    </div>
                    <button
                      onClick={() => onNavigate("work")}
                      className="print-hidden font-mono text-[9px] text-emerald-400 hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  </div>

                  <div className="space-y-2 font-sans text-xs">
                    {/* Build 1 */}
                    <div>
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="font-bold text-white text-[10.5px]">
                          SUAS 2026 Autonomous AI Drone (Team Trinetra)
                        </span>
                        <span className="font-mono text-[8.5px] text-gray-400 shrink-0">
                          ArduPilot • AI Vision • USA
                        </span>
                      </div>
                      <div className="text-[9px] text-gray-300 font-light leading-snug">
                        22-inch autonomous UAS engineered for waypoint flight, dynamic collision avoidance, and payload delivery in Oklahoma, USA.
                      </div>
                    </div>

                    {/* Build 2 */}
                    <div>
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="font-bold text-white text-[10.5px]">
                          NaviGrid AMR Autonomous Simulation Gauntlet
                        </span>
                        <span className="font-mono text-[8.5px] text-gray-400 shrink-0">
                          ROS 2 Jazzy • Gazebo • C++
                        </span>
                      </div>
                      <div className="text-[9px] text-gray-300 font-light leading-snug">
                        Full-stack simulation platform modeling 2D LiDAR ray-tracing, elevation terrain costing, and safety watchdog overrides for 427 competitors.
                      </div>
                    </div>

                    {/* Build 3 */}
                    <div>
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="font-bold text-white text-[10.5px]">
                          ESP-Drone & Advanced KiCad PCB Engineering
                        </span>
                        <span className="font-mono text-[8.5px] text-gray-400 shrink-0">
                          ESP32 • KiCad 10.0 • FreeRTOS
                        </span>
                      </div>
                      <div className="text-[9px] text-gray-300 font-light leading-snug">
                        Engineered open-source micro quadcopter with custom power distribution boards (PDBs) and programmatic KiCad PCB trace routing.
                      </div>
                    </div>

                    {/* Build 4 */}
                    <div>
                      <div className="flex items-baseline justify-between gap-1">
                        <span className="font-bold text-white text-[10.5px]">
                          3D Modeling & CAD for Robotics
                        </span>
                        <span className="font-mono text-[8.5px] text-gray-400 shrink-0">
                          Fusion 360 • 3D Printing DFM
                        </span>
                      </div>
                      <div className="text-[9px] text-gray-300 font-light leading-snug">
                        Drafted parametric lightweight drone chassis, sensor enclosures, and robotic motor mounts; fabricated through rapid 3D printing workflows.
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* ═════════════════════════════════════════════════════════════
                FOOTER: AVAILABILITY & VERIFICATION
                ═════════════════════════════════════════════════════════════ */}
            <footer className="border-t border-white/10 pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[9.5px] text-gray-400 font-mono gap-1">
              <span>Available for summer internships, autonomous robotics contracts, and defense R&D.</span>
              <span className="font-semibold text-gray-300">Aryan Narwariya • Gwalior, India</span>
            </footer>
          </div>
        </motion.section>

        {/* ═════════════════════════════════════════════════════════════
            3. "LET'S ENGINEER THE FUTURE TOGETHER" (BOTTOM-MOST CTA)
            ═════════════════════════════════════════════════════════════ */}
        <motion.section id="cta-strip" variants={itemVariants} className="print-hidden pt-2">
          <SpotlightCard className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="space-y-1.5">
                <h3 className="font-sans text-base font-semibold text-white sm:text-lg">
                  Let's engineer the future together
                </h3>
                <p className="font-sans text-xs text-gray-400 font-light">
                  Open for autonomous robotics contracts, tactical UAV development, and defense engineering internships.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <MagneticEffect>
                  <a
                    id="cta-email-btn"
                    href={`mailto:${personal.email}`}
                    className={`group flex items-center gap-2 rounded-lg px-5 py-2.5 font-sans text-xs font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer ${bgAccent}`}
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Send Email
                  </a>
                </MagneticEffect>
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/3 text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:text-white"
                    title={social.platform}
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </motion.section>
      </motion.div>
    </div>
  );
}
