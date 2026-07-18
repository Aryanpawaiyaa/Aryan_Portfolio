import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { personal, projects, workExperiences, education, skills, socialLinks } from "../resources/content";
import certificateData from "../resources/certificates";
import SpotlightCard from "./SpotlightCard";
import RevealText from "./RevealText";
import MagneticEffect from "./MagneticEffect";
import { OptimizedImage } from "./OptimizedImage";

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
  onProjectSelect: (projectId: string) => void;
  onPostSelect: (postId: string) => void;
  accentColor?: "white" | "amber" | "emerald" | "violet";
}

export default function HomeView({ onNavigate, onProjectSelect, onPostSelect, accentColor = "white" }: HomeViewProps) {
  const [time, setTime] = useState("");
  
  // Contact Form State
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Resolve accent colors dynamically
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
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-4 w-4" />;
    }
    return <Icons.Link className="h-4 w-4" />;
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 28 },
    },
  };

  // 8 Core Skills requested by the user
  const coreSkills = [
    {
      title: "Software Engineering",
      icon: "Code",
      description: "Developing robust software foundations and mastering data structures & algorithms.",
      skills: ["C/C++", "Python", "Data Structures", "Algorithms", "OOPs"],
      level: 90
    },
    {
      title: "Robotics",
      icon: "Cpu",
      description: "Designing intelligent hardware systems, integrating feedback controllers, and sensory arrays.",
      skills: ["Autonomous Systems", "ROS", "Sensor Integration", "Automation"],
      level: 85
    },
    {
      title: "UAV & Drone Systems",
      icon: "Layers",
      description: "Assembling and calibration of flight hardware, telemetry configurations, and mission planning.",
      skills: ["ArduPilot", "Mission Planner", "Flight Controllers", "MAVLink"],
      level: 80
    },
    {
      title: "Embedded Systems",
      icon: "Terminal",
      description: "Programming microcontrollers and designing custom electronic hardware protocols.",
      skills: ["ESP32", "ESP-IDF", "Arduino", "PCB Design Basics"],
      level: 85
    },
    {
      title: "AI & Machine Learning",
      icon: "Sparkles",
      description: "Applying data-driven models, statistical algorithms, and data science methodologies.",
      skills: ["Machine Learning", "IBM AI Fundamentals", "Data Science", "Python"],
      level: 75
    },
    {
      title: "Web Development",
      icon: "Globe",
      description: "Crafting highly responsive and performant interfaces using React, Next.js, and TypeScript.",
      skills: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js"],
      level: 90
    },
    {
      title: "Research & Technical Writing",
      icon: "BookOpen",
      description: "Documenting technical architectures, producing reports, and presenting complex systems.",
      skills: ["Technical Writing", "Documentation", "Project Presentation"],
      level: 85
    },
    {
      title: "UI/UX & Product Development",
      icon: "Award",
      description: "Creating intuitive user interfaces and parametric 3D products for rapid prototyping.",
      skills: ["UI Design (Figma)", "3D CAD Modeling (Fusion 360)", "3D Printing"],
      level: 80
    }
  ];

  // Dynamic statistics
  const totalCertsCount = certificateData.certificates.length;

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      {/* Background Soft Ambient Glows */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[450px] h-[450px] bg-white/1.5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[350px] h-[350px] bg-white/1 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-white/1 rounded-full filter blur-[110px] pointer-events-none" />

      <motion.div
        id="home-view-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 py-12 sm:py-20 space-y-24"
      >
        {/* HERO SECTION */}
        <motion.section id="hero-section" variants={itemVariants} className="pt-4 sm:pt-8">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-8 mb-8">
            <div className="space-y-4 max-w-2xl">
              {/* Availability & Location tag */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 text-[11px] font-mono tracking-wider text-gray-400">
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/5 px-3 py-1 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400"></span>
                  </span>
                  {personal.status}
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 font-medium">
                  <Icons.MapPin className="h-3.5 w-3.5 text-gray-500" />
                  {personal.location}
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 font-medium">
                  <Icons.Clock className="h-3.5 w-3.5 text-gray-500" />
                  GWL: <span className="text-gray-300 font-semibold">{time || "Loading..."}</span>
                </div>
              </div>

              {/* Headline & Name */}
              <h2 className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-tight">
                Hello, I'm{" "}
                <span className="inline-block bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-extrabold">
                  <RevealText text={personal.name} delay={0.2} />
                </span>
              </h2>
              <h3 className={`font-sans text-xl font-bold tracking-tight ${textAccent} sm:text-2xl`}>
                {personal.role}
              </h3>
              
              {/* Value Proposition */}
              <p className="font-sans text-base leading-relaxed text-gray-400 sm:text-lg font-light text-justify">
                I bridge the gap between physical hardware and digital interfaces. As a second-year student developer, I craft modular web applications, program embedded systems for UAVs and robotics, and explore data science to build the next generation of interconnected platforms.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4 pt-2">
                <MagneticEffect>
                  <button
                    id="hero-cta-projects"
                    onClick={() => scrollToSection("featured-projects")}
                    className={`group flex items-center gap-2 rounded-lg px-5 py-2.5 font-sans text-xs font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer ${bgAccent}`}
                  >
                    View Projects
                    <Icons.ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </MagneticEffect>
                <MagneticEffect>
                  <button
                    id="hero-cta-contact"
                    onClick={() => scrollToSection("contact-section")}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/2 px-5 py-2.5 font-sans text-xs font-semibold text-gray-300 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    Contact Me
                  </button>
                </MagneticEffect>
              </div>
            </div>

            {/* Profile Avatar */}
            <div className="shrink-0 self-center">
              <MagneticEffect>
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-full bg-linear-to-tr from-white/10 to-transparent opacity-60 blur-md group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden border border-white/10 p-1 bg-black/50 backdrop-blur-md">
                    <OptimizedImage
                      src={personal.avatar}
                      alt={personal.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover grayscale brightness-90 contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      containerClassName="rounded-full"
                    />
                  </div>
                </div>
              </MagneticEffect>
            </div>
          </div>
        </motion.section>

        {/* PROFESSIONAL SNAPSHOT STATS */}
        <motion.section id="professional-snapshot" variants={itemVariants} className="space-y-6">
          <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/70">
            <Icons.Layers className="h-4 w-4 text-gray-400" />
            Executive Snapshot
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SpotlightCard className="p-5 flex flex-col justify-between">
              <div className="text-gray-500 font-mono text-[10px] uppercase tracking-wider font-semibold">Education</div>
              <div className="mt-2 text-lg font-bold text-white leading-tight font-display">Dual Degree Path</div>
              <div className="mt-1 text-[11px] text-gray-400 font-light">IIT Madras & MITS Gwalior</div>
            </SpotlightCard>
            <SpotlightCard className="p-5 flex flex-col justify-between">
              <div className="text-gray-500 font-mono text-[10px] uppercase tracking-wider font-semibold">Club Roles</div>
              <div className="mt-2 text-lg font-bold text-white leading-tight font-display">2 Tech Clubs</div>
              <div className="mt-1 text-[11px] text-gray-400 font-light">DroneX Lead & Yantra IITM</div>
            </SpotlightCard>
            <SpotlightCard className="p-5 flex flex-col justify-between">
              <div className="text-gray-500 font-mono text-[10px] uppercase tracking-wider font-semibold">Core Systems</div>
              <div className="mt-2 text-lg font-bold text-white leading-tight font-display">3+ Major Builds</div>
              <div className="mt-1 text-[11px] text-gray-400 font-light">Drones, CV, and Web Interfaces</div>
            </SpotlightCard>
            <SpotlightCard className="p-5 flex flex-col justify-between">
              <div className="text-gray-500 font-mono text-[10px] uppercase tracking-wider font-semibold">Credentials</div>
              <div className="mt-2 text-lg font-bold text-white leading-tight font-display">{totalCertsCount} Verified Certs</div>
              <div className="mt-1 text-[11px] text-gray-400 font-light">IBM AI & Cisco Academy Validated</div>
            </SpotlightCard>
          </div>
        </motion.section>

        {/* CORE SKILLS SECTION */}
        <motion.section id="core-skills" variants={itemVariants} className="space-y-8">
          <div className="border-b border-white/5 pb-4">
            <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/90">
              <Icons.Cpu className="h-4 w-4 text-gray-400" />
              Core Competencies
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {coreSkills.map((domain, index) => {
              const SkillIcon = (Icons as any)[domain.icon] || Icons.Cpu;
              return (
                <SpotlightCard key={index} className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-white/3 border border-white/5 text-gray-300">
                        <SkillIcon className="h-4 w-4" />
                      </div>
                      <h4 className="font-sans text-sm font-semibold text-white">{domain.title}</h4>
                    </div>
                    <p className="font-sans text-[12px] leading-relaxed text-gray-400 font-light">
                      {domain.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 space-y-3.5">
                    <div className="flex flex-wrap gap-1.5">
                      {domain.skills.map((s) => (
                        <span key={s} className="rounded bg-white/2 px-2 py-0.5 font-mono text-[9px] text-gray-400 border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                    
                    {/* Visual Level Indicator */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] font-mono text-gray-500">
                        <span>COMPETENCY LEVEL</span>
                        <span className="font-semibold">{domain.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            accentColor === "amber" ? "bg-amber-500" :
                            accentColor === "emerald" ? "bg-emerald-500" :
                            accentColor === "violet" ? "bg-violet-500" :
                            "bg-white"
                          }`}
                          style={{ width: `${domain.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </motion.section>

        {/* EXPERIENCE & EDUCATION TIMELINE */}
        <motion.section id="journey-timeline" variants={itemVariants} className="space-y-8">
          <div className="border-b border-white/5 pb-4">
            <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/90">
              <Icons.GraduationCap className="h-4 w-4 text-gray-400" />
              Growth & Milestones Timeline
            </h3>
          </div>

          <div className="relative border-l border-white/5 pl-6 ml-3 space-y-10">
            {/* MILESTONE 1: DroneX */}
            <div className="relative group">
              <div className="absolute left-[-31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black border border-white/15 group-hover:border-white/40 transition-all duration-300">
                <div className={`h-1.5 w-1.5 rounded-full ${accentColor === "amber" ? "bg-amber-400" : accentColor === "emerald" ? "bg-emerald-400" : accentColor === "violet" ? "bg-violet-400" : "bg-white"}`} />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold bg-white/3 border border-white/5 px-2 py-0.5 rounded">
                      Club Leadership
                    </span>
                    <h4 className="font-sans text-sm font-semibold text-white">Technical Co-Lead — DroneX Aerotech Club, MITS</h4>
                  </div>
                  <p className="mt-2 font-sans text-[12px] leading-relaxed text-gray-400 font-light max-w-3xl text-justify">
                    Leading the development of aerial robotics. Responsible for drone assembly, electronic systems, telemetry integration, and testing autonomous flight models using ArduPilot, Mission Planner, and MAVLink protocols.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-gray-500 font-semibold whitespace-nowrap">2025 — PRESENT</span>
              </div>
            </div>

            {/* MILESTONE 2: IIT Madras Yantra */}
            <div className="relative group">
              <div className="absolute left-[-31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black border border-white/15 group-hover:border-white/40 transition-all duration-300">
                <div className={`h-1.5 w-1.5 rounded-full ${accentColor === "amber" ? "bg-amber-400" : accentColor === "emerald" ? "bg-emerald-400" : accentColor === "violet" ? "bg-violet-400" : "bg-white"}`} />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold bg-white/3 border border-white/5 px-2 py-0.5 rounded">
                      Technical Member
                    </span>
                    <h4 className="font-sans text-sm font-semibold text-white">Yantra Robotics Society, IIT Madras</h4>
                  </div>
                  <p className="mt-2 font-sans text-[12px] leading-relaxed text-gray-400 font-light max-w-3xl text-justify">
                    Collaborating on robotics and embedded hardware integration. Writing modular firmware, troubleshooting microcontrollers, and contributing to autonomous vehicle navigation stacks.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-gray-500 font-semibold whitespace-nowrap">2025 — PRESENT</span>
              </div>
            </div>

            {/* MILESTONE 3: IIT M BS */}
            <div className="relative group">
              <div className="absolute left-[-31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black border border-white/15 group-hover:border-white/40 transition-all duration-300">
                <div className={`h-1.5 w-1.5 rounded-full ${accentColor === "amber" ? "bg-amber-400" : accentColor === "emerald" ? "bg-emerald-400" : accentColor === "violet" ? "bg-violet-400" : "bg-white"}`} />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold bg-white/3 border border-white/5 px-2 py-0.5 rounded">
                      Education
                    </span>
                    <h4 className="font-sans text-sm font-semibold text-white">B.S. in Data Science & Applications — IIT Madras</h4>
                  </div>
                  <p className="mt-2 font-sans text-[12px] leading-relaxed text-gray-400 font-light max-w-3xl text-justify">
                    Developing foundations in machine learning algorithms, database management systems, statistical modeling, and data-driven systems.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-gray-500 font-semibold whitespace-nowrap">2025 — PRESENT</span>
              </div>
            </div>

            {/* MILESTONE 4: MITS B.Tech */}
            <div className="relative group">
              <div className="absolute left-[-31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black border border-white/15 group-hover:border-white/40 transition-all duration-300">
                <div className={`h-1.5 w-1.5 rounded-full ${accentColor === "amber" ? "bg-amber-400" : accentColor === "emerald" ? "bg-emerald-400" : accentColor === "violet" ? "bg-violet-400" : "bg-white"}`} />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold bg-white/3 border border-white/5 px-2 py-0.5 rounded">
                      Education
                    </span>
                    <h4 className="font-sans text-sm font-semibold text-white">B.Tech. in Computer Science & Business Systems — MITS Gwalior</h4>
                  </div>
                  <p className="mt-2 font-sans text-[12px] leading-relaxed text-gray-400 font-light max-w-3xl text-justify">
                    Focusing on software development paradigms, algorithms, databases, computer organization, and business management operations.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-gray-500 font-semibold whitespace-nowrap">2025 — PRESENT</span>
              </div>
            </div>

            {/* MILESTONE 5: 2024 Prep */}
            <div className="relative group">
              <div className="absolute left-[-31px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black border border-white/15 group-hover:border-white/40 transition-all duration-300">
                <div className={`h-1.5 w-1.5 rounded-full ${accentColor === "amber" ? "bg-amber-400" : accentColor === "emerald" ? "bg-emerald-400" : accentColor === "violet" ? "bg-violet-400" : "bg-white"}`} />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold bg-white/3 border border-white/5 px-2 py-0.5 rounded">
                      Foundations
                    </span>
                    <h4 className="font-sans text-sm font-semibold text-white">Core Skills & Certifications Foundation</h4>
                  </div>
                  <p className="mt-2 font-sans text-[12px] leading-relaxed text-gray-400 font-light max-w-3xl text-justify">
                    Mastered programming in C/C++ and Python. Completed Advanced Diploma in Computer Applications and IT. Built early software simulations and embedded prototypes.
                  </p>
                </div>
                <span className="font-mono text-[10px] text-gray-500 font-semibold whitespace-nowrap">2024</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FEATURED PROJECTS PREVIEW */}
        <motion.section id="featured-projects" variants={itemVariants} className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/90">
              <Icons.Sparkles className="h-4 w-4 text-gray-400" />
              Featured Projects
            </h3>
            <button
              id="navigate-to-work-btn"
              onClick={() => onNavigate("work")}
              className="group flex items-center gap-1 font-sans text-xs font-medium text-gray-400 transition-colors duration-300 hover:text-white cursor-pointer"
            >
              All Projects
              <Icons.ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <SpotlightCard
                id={`featured-project-card-${project.id}`}
                key={project.id}
                onClick={() => onProjectSelect(project.id)}
                className="group cursor-pointer p-5"
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  {/* Project Image */}
                  <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden rounded-lg border border-white/5 sm:w-72 bg-zinc-900 shadow-md">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                  {/* Project Details */}
                  <div className="flex flex-col justify-between py-1 flex-1">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold bg-white/3 border border-white/5 px-2 py-0.5 rounded">
                          {project.category}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-zinc-800" />
                        <span className="font-sans text-[11px] text-gray-500">{project.date}</span>
                      </div>
                      <h4 className="mt-3 font-sans text-base font-semibold text-white transition-colors duration-300 group-hover:text-white/90 flex items-center gap-1.5">
                        {project.title}
                        <Icons.ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-white/70" />
                      </h4>
                      <p className="mt-2 font-sans text-xs leading-relaxed text-gray-400 font-light">
                        {project.description}
                      </p>
                    </div>
                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/3 px-2 py-0.5 font-mono text-[9px] text-gray-400 border border-white/5 shadow-sm"
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

        {/* TECH STACK BADGES SECTION */}
        <motion.section id="tech-stack" variants={itemVariants} className="space-y-8">
          <div className="border-b border-white/5 pb-4">
            <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/90">
              <Icons.Layers className="h-4 w-4 text-gray-400" />
              Technologies & Tools
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((group, idx) => (
              <SpotlightCard key={idx} className="p-5">
                <h4 className="font-sans text-xs font-semibold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                  {group.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-white/2 px-2.5 py-1 font-mono text-[10px] text-gray-300 border border-white/5 hover:border-white/20 transition-all duration-350 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>

        {/* CONTACT & SOCIAL LINKS */}
        <motion.section id="contact-section" variants={itemVariants} className="space-y-8">
          <div className="border-b border-white/5 pb-4">
            <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/90">
              <Icons.Mail className="h-4 w-4 text-gray-400" />
              Get In Touch
            </h3>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact details */}
            <div className="md:col-span-2 space-y-6">
              <h4 className="font-sans text-lg font-semibold text-white">Let's discuss opportunities.</h4>
              <p className="font-sans text-xs leading-relaxed text-gray-400 font-light text-justify">
                Whether you have an upcoming project, want to coordinate on robot software design, seek consultation on hardware prototyping, or just want to chat engineering — hit me up.
              </p>

              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:25cb1ar28@mitsgwl.ac.in" 
                  className="flex items-center gap-3 text-xs text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <div className="p-2 rounded bg-white/2 border border-white/5 group-hover:border-white/20">
                    <Icons.Mail className="h-4 w-4" />
                  </div>
                  <span>25cb1ar28@mitsgwl.ac.in</span>
                </a>
                <div className="flex items-center gap-3 text-xs text-gray-400 cursor-default">
                  <div className="p-2 rounded bg-white/2 border border-white/5">
                    <Icons.MapPin className="h-4 w-4" />
                  </div>
                  <span>Gwalior, Madhya Pradesh, India</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-6">
                <h5 className="font-sans text-[10px] font-semibold uppercase tracking-wider text-gray-500">Connect on Socials</h5>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <MagneticEffect key={social.platform}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                        title={social.platform}
                      >
                        {renderSocialIcon(social.icon)}
                      </a>
                    </MagneticEffect>
                  ))}
                </div>
              </div>
            </div>

            {/* Email form */}
            <div className="md:col-span-3">
              <SpotlightCard className="p-6">
                <div className="mb-4 pb-3.5 border-b border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h4 className="font-sans text-xs font-semibold text-white uppercase tracking-wider">Direct Message</h4>
                  <a 
                    href="mailto:25cb1ar28@mitsgwl.ac.in" 
                    className="font-mono text-[10px] text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <Icons.Mail className="h-3.5 w-3.5" /> 25cb1ar28@mitsgwl.ac.in
                  </a>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-semibold">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded bg-white/3 border border-white/5 px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-semibold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded bg-white/3 border border-white/5 px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-semibold">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      className="w-full rounded bg-white/3 border border-white/5 px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider text-gray-500 uppercase font-semibold">Message</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full rounded bg-white/3 border border-white/5 px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting || submitSuccess}
                      className={`group flex items-center gap-2 rounded px-4 py-2 font-sans text-xs font-semibold cursor-pointer transition-all duration-300 ${
                        submitSuccess
                          ? "bg-emerald-500 text-black shadow-emerald-500/10 cursor-default"
                          : bgAccent
                      }`}
                    >
                      {submitSuccess ? (
                        <>
                          <Icons.Check className="h-4 w-4" /> Message Sent
                        </>
                      ) : isSubmitting ? (
                        <>
                          <Icons.Loader2 className="h-4 w-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Icons.Send className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </SpotlightCard>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
