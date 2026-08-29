import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  ArrowRight,
  FileText,
  Mail,
  Cpu,
  Sparkles,
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
  LucideIcon
} from "lucide-react";
import { personal, projects, socialLinks } from "../resources/content";
import certificateData from "../resources/certificates";
import SpotlightCard from "./SpotlightCard";
import MagneticEffect from "./MagneticEffect";
import { OptimizedImage } from "./OptimizedImage";
import TypedText from "./TypedText";
import FloatingGeometry from "./FloatingGeometry";

const ICON_MAP: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Instagram,
  Code,
  Cpu,
  Layers,
  Terminal,
  Sparkles,
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

export default function HomeView({ onNavigate, onProjectSelect, onPostSelect, accentColor = "white", themeMode = "dark" }: HomeViewProps) {
  const [time, setTime] = useState("");

  // Real-time Gwalior Clock
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
    "text-white";

  const bgAccent =
    accentColor === "amber" ? "bg-amber-500 text-black hover:bg-amber-400 shadow-amber-500/10" :
    accentColor === "emerald" ? "bg-emerald-500 text-black hover:bg-emerald-400 shadow-emerald-500/10" :
    accentColor === "violet" ? "bg-violet-500 text-black hover:bg-violet-400 shadow-violet-500/10" :
    "bg-white text-black hover:bg-gray-100 shadow-white/5";

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
      transition: { staggerChildren: 0.08, delayChildren: 0.03 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 280, damping: 28 },
    },
  };

  // 8 Core expertise domains
  const coreExpertise = [
    { title: "Software Engineering", icon: "Code", description: "C/C++, Python, DSA, OOP" },
    { title: "Robotics", icon: "Cpu", description: "ROS, Autonomous Systems, Sensors" },
    { title: "Drone Systems", icon: "Layers", description: "ArduPilot, MAVLink, Flight Controllers" },
    { title: "Embedded Systems", icon: "Terminal", description: "ESP32, Arduino, PCB Design" },
    { title: "AI & Machine Learning", icon: "Sparkles", description: "ML Models, Data Science, CV" },
    { title: "Web Development", icon: "Globe", description: "React, TypeScript, Next.js" },
    { title: "Research & Writing", icon: "BookOpen", description: "Technical Docs, Presentations" },
    { title: "UI/UX & Product", icon: "Award", description: "Figma, Fusion 360, 3D Printing" },
  ];

  // Show top 2 featured projects
  const featuredProjects = projects.slice(0, 2);

  // Dynamic stats
  const totalCertsCount = certificateData.certificates.length;

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-100 h-25 bg-white/1.5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] right-10 w-75 h-75 bg-white/1 rounded-full filter blur-[100px] pointer-events-none" />

      <motion.div
        id="home-view-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 py-10 sm:py-16 space-y-16"
      >
        {/* ─────────────── HERO SECTION ─────────────── */}
        <motion.section id="hero-section" variants={itemVariants} className="relative pt-2 sm:pt-4">
          {/* Subtle floating background wireframe geometry */}
          <FloatingGeometry accentColor={accentColor} themeMode={themeMode} />

          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              {/* Status & Location */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-mono tracking-wider text-gray-400">
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/5 px-3 py-1 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.04)]">
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

              {/* Name & Title */}
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.1]">
                {personal.name}
              </h2>
              <h3 className={`font-sans text-lg font-semibold tracking-tight ${textAccent} sm:text-xl min-h-[1.75rem] flex items-center`}>
                <TypedText
                  words={[
                    personal.role,
                    "Robotics & UAV Systems Engineer",
                    "Embedded Systems & Hardware Developer",
                    "Computer Vision & AI Researcher",
                    "UI/UX & Interactive Design Engineer"
                  ]}
                  cursorColor={
                    accentColor === "amber" ? "#f59e0b" :
                    accentColor === "emerald" ? "#10b981" :
                    accentColor === "violet" ? "#8b5cf6" :
                    (themeMode === "light" ? "#0f172a" : "#ffffff")
                  }
                />
              </h3>

              {/* Value Proposition */}
              <p className="font-sans text-sm leading-relaxed text-gray-400 sm:text-base font-light max-w-xl">
                {personal.bio}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
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
                    id="hero-cta-resume"
                    href={personal.resumeUrl || "#"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/2 px-5 py-2.5 font-sans text-xs font-semibold text-gray-300 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <FileText className="h-3.5 w-3.5" />
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

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/3 text-gray-500 transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:text-white"
                    title={social.platform}
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Avatar */}
            <div className="shrink-0 self-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-full bg-linear-to-tr from-white/8 to-transparent opacity-50 blur-md group-hover:opacity-100 transition-all duration-500" />
                <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden border border-white/10 p-0.5 bg-black/50 backdrop-blur-md">
                  <OptimizedImage
                    src={personal.avatar}
                    alt={personal.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover grayscale brightness-90 contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    containerClassName="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─────────────── ACHIEVEMENTS STRIP ─────────────── */}
        <motion.section id="achievements-strip" variants={itemVariants}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <SpotlightCard className="p-4">
              <div className="text-gray-500 font-mono text-[9px] uppercase tracking-wider font-semibold">Education</div>
              <div className="mt-1.5 text-base font-bold text-white leading-tight">Dual Degree</div>
              <div className="mt-0.5 text-[10px] text-gray-400 font-light">IIT Madras & MITS Gwalior</div>
            </SpotlightCard>
            <SpotlightCard className="p-4">
              <div className="text-gray-500 font-mono text-[9px] uppercase tracking-wider font-semibold">Club Roles</div>
              <div className="mt-1.5 text-base font-bold text-white leading-tight">2 Tech Clubs</div>
              <div className="mt-0.5 text-[10px] text-gray-400 font-light">DroneX Lead & Yantra IITM</div>
            </SpotlightCard>
            <SpotlightCard className="p-4">
              <div className="text-gray-500 font-mono text-[9px] uppercase tracking-wider font-semibold">Core Systems</div>
              <div className="mt-1.5 text-base font-bold text-white leading-tight">3+ Builds</div>
              <div className="mt-0.5 text-[10px] text-gray-400 font-light">Drones, CV & Web Platforms</div>
            </SpotlightCard>
            <SpotlightCard className="p-4">
              <div className="text-gray-500 font-mono text-[9px] uppercase tracking-wider font-semibold">Credentials</div>
              <div className="mt-1.5 text-base font-bold text-white leading-tight">{totalCertsCount} Verified</div>
              <div className="mt-0.5 text-[10px] text-gray-400 font-light">Army, Cisco & MITS Validated</div>
            </SpotlightCard>
          </div>
        </motion.section>

        {/* ─────────────── CORE EXPERTISE ─────────────── */}
        <motion.section id="core-expertise" variants={itemVariants} className="space-y-5">
          <div className="border-b border-white/5 pb-3">
            <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/80">
              <Cpu className="h-3.5 w-3.5 text-gray-400" />
              Core Expertise
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {coreExpertise.map((domain) => {
              const SkillIcon = ICON_MAP[domain.icon] || Cpu;
              return (
                <SpotlightCard key={domain.title} className="p-3.5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-white/3 border border-white/5 text-gray-400">
                      <SkillIcon className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <h4 className="font-sans text-[11px] font-semibold text-white leading-tight">{domain.title}</h4>
                  <p className="mt-1 font-mono text-[9px] leading-snug text-gray-500">{domain.description}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </motion.section>

        {/* ─────────────── FEATURED PROJECTS ─────────────── */}
        <motion.section id="featured-projects" variants={itemVariants} className="space-y-5">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/80">
              <Sparkles className="h-3.5 w-3.5 text-gray-400" />
              Featured Projects
            </h3>
            <button
              id="navigate-to-work-btn"
              onClick={() => onNavigate("work")}
              className="group flex items-center gap-1 font-sans text-xs font-medium text-gray-400 transition-colors duration-300 hover:text-white cursor-pointer"
            >
              All Projects
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-2 md:gap-4">
            {featuredProjects.map((project) => (
              <SpotlightCard
                id={`featured-project-card-${project.id}`}
                key={project.id}
                onClick={() => onProjectSelect(project.id)}
                className="group cursor-pointer"
              >
                {/* Desktop: vertical card layout */}
                <div className="hidden md:block">
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-t-xl bg-zinc-900">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold bg-white/3 border border-white/5 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                      {project.readTime && (
                        <span className="font-mono text-[9px] text-emerald-400/90 font-medium flex items-center gap-1">
                          <Clock className="h-2.5 w-2.5" />
                          {project.readTime}
                        </span>
                      )}
                    </div>
                    <h4 className="font-sans text-sm font-semibold text-white flex items-center gap-1.5 group-hover:text-white/90 transition-colors">
                      {project.title}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-white/60" />
                    </h4>
                    <p className="font-sans text-[11px] leading-relaxed text-gray-400 font-light line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-white/2 px-1.5 py-0.5 font-mono text-[8px] text-gray-500 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile: compact horizontal row layout */}
                <div className="flex gap-3 p-3 md:hidden">
                  <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg bg-zinc-900">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-gray-500 font-semibold bg-white/3 border border-white/5 px-1.5 py-px rounded">
                        {project.category}
                      </span>
                      {project.readTime && (
                        <span className="font-mono text-[8px] text-emerald-400/90 font-medium flex items-center gap-0.5">
                          <Clock className="h-2 w-2" />
                          {project.readTime}
                        </span>
                      )}
                    </div>
                    <h4 className="font-sans text-xs font-semibold text-white leading-tight flex items-center gap-1">
                      {project.title}
                      <ArrowUpRight className="h-3 w-3 text-white/40 shrink-0" />
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-white/2 px-1 py-px font-mono text-[7px] text-gray-500 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>

        {/* ─────────────── CTA STRIP ─────────────── */}
        <motion.section id="cta-strip" variants={itemVariants}>
          <SpotlightCard className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div className="space-y-1.5">
                <h3 className="font-sans text-base font-semibold text-white sm:text-lg">
                  Let's work together
                </h3>
                <p className="font-sans text-xs text-gray-400 font-light">
                  Open for internships, collaborations, and freelance opportunities.
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
