import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Clock, ArrowRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { personal, projects, blogPosts } from "../resources/content";
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

  // Animation variants with professional easing curves
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 28 },
    },
  };

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      {/* Background Soft Ambient Glows */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[450px] h-[450px] bg-white/1.5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[350px] h-[350px] bg-white/1 rounded-full filter blur-[80px] pointer-events-none" />

      <motion.div
        id="home-view-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl px-6 py-16 sm:py-24"
      >
        {/* Bio / Status Board */}
        <motion.section id="hero-section" variants={itemVariants} className="mb-20">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            {/* Availability tag & clock row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 text-[11px] font-mono tracking-wider text-gray-400">
              <div className="flex items-center gap-2 rounded-full bg-emerald-500/5 px-3 py-1 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400"></span>
                </span>
                {personal.status}
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 font-medium">
                <MapPin className="h-3.5 w-3.5 text-gray-500" />
                {personal.location}
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 font-medium">
                <Clock className="h-3.5 w-3.5 text-gray-500" />
                GWL: <span className="text-gray-300 font-semibold">{time || "Loading..."}</span>
              </div>
            </div>

            {/* Premium Magnetic Profile Avatar */}
            <MagneticEffect>
              <div className="relative group shrink-0">
                <div className="absolute -inset-2 rounded-full bg-linear-to-tr from-white/20 via-white/1 to-transparent opacity-60 blur-md group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border border-white/10 p-1 bg-black/50 backdrop-blur-md">
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

          {/* Dynamic Display Heading */}
          <h2 className="mt-8 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight sm:leading-tight">
            <RevealText text="Hello, I'm" delay={0.1} />{" "}
            <span className="inline-block bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-300 font-extrabold">
              <RevealText text={personal.name} delay={0.4} />
            </span>
          </h2>
          
          {/* Core Description */}
          <p className="mt-6 font-sans text-base leading-relaxed text-gray-400 sm:text-lg max-w-2xl font-light">
            {personal.bio}
          </p>

          {/* Main CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticEffect>
              <button
                id="hero-cta-work"
                onClick={() => onNavigate("work")}
                className={`group flex items-center gap-2 rounded-lg px-5 py-2.5 font-sans text-xs font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer ${
                  accentColor === "amber" ? "bg-amber-500 text-black hover:bg-amber-400 shadow-amber-500/10" :
                  accentColor === "emerald" ? "bg-emerald-500 text-black hover:bg-emerald-400 shadow-emerald-500/10" :
                  accentColor === "violet" ? "bg-violet-500 text-black hover:bg-violet-400 shadow-violet-500/10" :
                  "bg-white text-black hover:bg-gray-100 shadow-white/5"
                }`}
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </MagneticEffect>
            <MagneticEffect>
              <button
                id="hero-cta-about"
                onClick={() => onNavigate("about")}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/2 px-5 py-2.5 font-sans text-xs font-semibold text-gray-300 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Read Professional Bio
              </button>
            </MagneticEffect>
          </div>
        </motion.section>

        {/* Selected Work Section */}
        <motion.section id="featured-work-section" variants={itemVariants} className="mb-24">
          <div className="mb-10 flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-white/90">
              <Sparkles className="h-4 w-4 text-gray-400" />
              Selected Work
            </h3>
            <button
              id="navigate-to-work-btn"
              onClick={() => onNavigate("work")}
              className="group flex items-center gap-1 font-sans text-xs font-medium text-gray-400 transition-colors duration-300 hover:text-white cursor-pointer"
            >
              All Work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Selected Projects Grid */}
          <div className="grid gap-6">
            {projects.slice(0, 2).map((project) => (
              <SpotlightCard
                id={`featured-project-card-${project.id}`}
                key={project.id}
                onClick={() => onProjectSelect(project.id)}
                className="group cursor-pointer p-5"
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  {/* Project Mock Image */}
                  <div className="relative aspect-16/10 w-full shrink-0 overflow-hidden rounded-lg border border-white/5 sm:w-56 bg-zinc-900 shadow-md">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                  {/* Project Meta details */}
                  <div className="flex flex-col justify-between py-1 flex-1">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold">
                          {project.category}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-zinc-800" />
                        <span className="font-sans text-[11px] text-gray-500">{project.date}</span>
                      </div>
                      <h4 className="mt-3.5 font-sans text-base font-semibold text-white transition-colors duration-300 group-hover:text-white/90 flex items-center gap-1.5">
                        {project.title}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-white/70" />
                      </h4>
                      <p className="mt-2.5 font-sans text-xs leading-relaxed text-gray-400 font-light">
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

        {/* Recent Writing Section */}
        <motion.section id="recent-writing-section" variants={itemVariants} className="mb-24">
          <div className="mb-10 flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/90">
              Recent Writing
            </h3>
            <button
              id="navigate-to-blog-btn"
              onClick={() => onNavigate("blog")}
              className="group flex items-center gap-1 font-sans text-xs font-medium text-gray-400 transition-colors duration-300 hover:text-white cursor-pointer"
            >
              All Articles
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Blog Post List */}
          <div className="divide-y divide-white/5">
            {blogPosts.map((post) => (
              <div
                id={`recent-blog-row-${post.id}`}
                key={post.id}
                onClick={() => onPostSelect(post.id)}
                className="group cursor-pointer py-6 transition-all duration-300 hover:px-4 hover:bg-white/2 rounded-xl -mx-4"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 text-[9px] font-mono tracking-wider text-gray-500 uppercase font-semibold">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-zinc-800" />
                      <span>{post.category}</span>
                    </div>
                    <h4 className="mt-2.5 font-sans text-sm font-semibold text-white/90 transition-colors duration-300 group-hover:text-white">
                      {post.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 font-sans text-xs text-gray-500 group-hover:text-gray-300 mt-1 sm:mt-0 transition-colors duration-300">
                    <span className="font-light">{post.readTime}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
