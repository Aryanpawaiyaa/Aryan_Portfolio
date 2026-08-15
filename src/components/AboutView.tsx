import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, Code, Award, X, Eye, ShieldCheck, ArrowUpRight, Shield, Trophy, Star, Target, Compass, Flame } from "lucide-react";
import { personal, workExperiences, education, skills, nccExperiences } from "../resources/content";
import SpotlightCard from "./SpotlightCard";
import certificateData from "../resources/certificates";
import CertificateCard from "./CertificateCard";
import { OptimizedImage } from "./OptimizedImage";


const getIssuerBadge = (issuer: string) => {
  const isIBM = issuer.toLowerCase().includes("ibm");
  const isCisco = issuer.toLowerCase().includes("cisco");
  const isGoogle = issuer.toLowerCase().includes("google");

  if (isIBM) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 font-sans text-[9px] font-bold tracking-wider text-blue-400 uppercase shadow-sm transition-transform duration-200 cursor-default">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
        IBM SkillsBuild
      </span>
    );
  }
  if (isCisco) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 font-sans text-[9px] font-bold tracking-wider text-cyan-400 uppercase shadow-sm transition-transform duration-200 cursor-default">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Cisco Academy
      </span>
    );
  }
  if (isGoogle) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 font-sans text-[9px] font-bold tracking-wider text-emerald-400 uppercase shadow-sm transition-transform duration-200 cursor-default">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Google Ambassador
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-500/10 border border-zinc-500/20 px-2.5 py-0.5 font-sans text-[9px] font-bold tracking-wider text-zinc-400 uppercase shadow-sm cursor-default">
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
      Verified
    </span>
  );
};

export default function AboutView() {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
  const [viewMode, setViewMode] = useState<"preview" | "pdf" | "details">("preview");
  const [activeNccIdx, setActiveNccIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  const academicCerts = certificateData.certificates.filter(c => c.category === "Academic & Course Certificates");
  const competitionCerts = certificateData.certificates.filter(c => c.category === "Hackathons, Competitions & Achievements");

  const getInitials = (name: string) => {
    if (name.includes("IIT")) return "IIT";
    if (name.includes("MITS")) return "MITS";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const getBgColor = (name: string) => {
    if (name.includes("IIT")) return "bg-red-950/20 text-red-400 border-red-500/20";
    if (name.includes("MITS")) return "bg-blue-950/20 text-blue-400 border-blue-500/20";
    if (name.includes("Linear")) return "bg-zinc-900/30 text-zinc-300 border-zinc-700/20";
    if (name.includes("Atmosphere")) return "bg-emerald-950/20 text-emerald-400 border-emerald-500/20";
    if (name.includes("Stripe")) return "bg-indigo-950/20 text-indigo-400 border-indigo-500/20";
    return "bg-zinc-950 text-gray-400 border-white/5";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      },
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

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen py-6">
      {/* Ambient background accent glows */}
      <div className="absolute top-24 left-10 w-350px h-350px bg-white/1.5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-400px h-400px bg-white/1 rounded-full filter blur-[90px] pointer-events-none" />

      <motion.div
        id="about-view-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 py-12"
      >
        {/* Intro section: Photo & Bio */}
        <motion.section id="about-intro" variants={itemVariants} className="mb-20 flex flex-col gap-8 md:flex-row md:items-center">
          {/* Avatar Container with Luxury Border */}
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-xl shadow-black/80 group">
            <OptimizedImage
              src={personal.avatar}
              alt={personal.name}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              containerClassName="rounded-2xl"
            />
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
          </div>
          {/* Meta details */}
          <div className="flex-1">
            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest font-semibold">{personal.role}</span>
            <h2 className="mt-2.5 font-sans text-2xl font-extrabold tracking-tight text-white sm:text-3xl">About Me</h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-gray-400 font-light text-justify">
              I specialize in designing and engineering beautiful, efficient systems. My process centers on close collaboration with cross-functional product crews, utilizing clean markup, robust tokens, and functional aesthetics.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-sans text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Current Focus: Design Systems & React Architecture
              </span>
              <span className="text-zinc-700">&bull;</span>
              <span className="flex items-center gap-1.5">
                Status: {personal.status}
              </span>
            </div>
          </div>
        </motion.section>

        {/* Experience History Timeline */}
        <motion.section id="experience-section" variants={itemVariants} className="mb-20">
          <h3 className="flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-widest text-white/95 border-b border-white/5 pb-3.5 mb-10">
            <Briefcase className="h-4 w-4 text-gray-400" />
            Professional Experience
          </h3>

          <div className="relative border-l border-white/5 pl-6 space-y-12">
            {workExperiences.map((exp, idx) => (
              <div id={`experience-block-${idx}`} key={idx} className="relative group">
                {/* Timeline Connector node with smooth hardware glowing style */}
                <div className="absolute -left-7.75 top-4 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-black border border-white/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-[rgb(var(--accent-rgb,255,255,255))] group-hover:border-[rgb(var(--accent-rgb,255,255,255))] shadow-[0_0_8px_rgba(var(--accent-rgb,255,255,255),0.4)]" />
                
                <div className="flex gap-4">
                  {/* Elegant Logo Placeholder */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-[10px] font-mono font-bold tracking-wider shadow-inner transition-transform duration-300 group-hover:scale-105 ${getBgColor(exp.company)}`}>
                    {getInitials(exp.company)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <h4 className="font-sans text-sm font-semibold text-white group-hover:text-white/90 transition-colors duration-300">
                          {exp.role}
                        </h4>
                        <div className="mt-1 font-sans text-xs text-gray-400">
                          {exp.company} <span className="text-zinc-700">&bull;</span> {exp.location}
                        </div>
                      </div>
                      <div className="font-mono text-[9px] text-gray-500 font-semibold uppercase tracking-wider">
                        {exp.period}
                      </div>
                    </div>

                    {/* Achievements details bullet points */}
                    <ul className="mt-4 list-disc pl-4 space-y-2 font-sans text-xs text-gray-400 leading-relaxed font-light">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="hover:text-gray-300 transition-colors duration-200">{bullet}</li>
                      ))}
                    </ul>

                    {/* Optional Experience Link */}
                    {exp.link && (
                      <div className="mt-4 flex">
                        <a
                          href={exp.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/20 px-3 py-1.5 font-sans text-[10px] font-semibold text-gray-300 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:text-white cursor-pointer group"
                        >
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(var(--accent-rgb,255,255,255))] opacity-75"></span>
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb,255,255,255))]"></span>
                          </span>
                          {exp.link.label}
                          <ArrowUpRight className="h-3 w-3 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        </a>
                      </div>
                    )}

                    {/* Optional Skill Badges */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded bg-white/2 px-2 py-0.5 font-sans text-[9px] text-gray-400 border border-white/5 shadow-sm hover:border-white/20 hover:text-white transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills Matrix layout */}
        <motion.section id="skills-section" variants={itemVariants} className="mb-20">
          <h3 className="flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-widest text-white/95 border-b border-white/5 pb-3.5 mb-10">
            <Code className="h-4 w-4 text-gray-400" />
            Technical Expertise
          </h3>

          <div className="grid gap-6 sm:grid-cols-3">
            {skills.map((group, idx) => (
              <SpotlightCard id={`skills-group-${idx}`} key={idx} className="p-4.5">
                <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-white/5 pb-2">
                  {group.name}
                </h4>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-white/2 px-2 py-0.5 font-sans text-[10px] text-gray-400 border border-white/5 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>

        {/* Education Timeline */}
        <motion.section id="education-section" variants={itemVariants} className="mb-20">
          <h3 className="flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-widest text-white/95 border-b border-white/5 pb-3.5 mb-10">
            <GraduationCap className="h-4 w-4 text-gray-400" />
            Education
          </h3>

          <div className="relative border-l border-white/5 pl-6 space-y-8">
            {education.map((edu, idx) => (
              <div id={`education-block-${idx}`} key={idx} className="relative group">
                <div className="absolute -left-7.75 top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-black border border-white/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-white group-hover:border-white shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-white transition-colors duration-300 group-hover:text-white/90">
                      {edu.degree}
                    </h4>
                    <div className="mt-1 font-sans text-xs text-gray-400">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="font-mono text-[9px] text-gray-500 font-semibold uppercase tracking-wider">
                    {edu.period}
                  </div>
                </div>
                {edu.description && (
                  <p className="mt-3 font-sans text-xs text-gray-400 leading-relaxed font-light">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* NCC Tactical Camps & Military Immersion Section */}
        <motion.section id="ncc-section" variants={itemVariants} className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-white/5 pb-3.5 mb-8 gap-2">
            <h3 className="flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-widest text-white/95">
              <Shield className="h-4 w-4 text-emerald-400" />
              National Cadet Corps (NCC) — Military Training & Tactical Camps
            </h3>
            <span className="font-mono text-[9px] text-emerald-400/90 font-semibold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              3 Camps Completed • Army Wing
            </span>
          </div>

          <div className="relative h-125 sm:h-125 w-full perspective-1000 mt-4">
            {nccExperiences.map((camp, idx) => {
              const isTop = activeNccIdx === idx;
              const isSecond = (activeNccIdx + 1) % nccExperiences.length === idx;
              
              let zIndex = 10;
              let yOffset = 48;
              let scale = 0.9;
              let opacity = 0.4;
              
              if (isTop) {
                zIndex = 30;
                yOffset = 0;
                scale = 1;
                opacity = 1;
              } else if (isSecond) {
                zIndex = 20;
                yOffset = 24;
                scale = 0.95;
                opacity = 0.7;
              }

              return (
                <motion.div
                  key={idx}
                  id={`ncc-camp-card-${idx}`}
                  onClick={() => setActiveNccIdx(isTop ? (activeNccIdx + 1) % nccExperiences.length : idx)}
                  animate={{ y: yOffset, scale, zIndex, opacity }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`absolute top-0 left-0 w-full rounded-xl border bg-black/90 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md cursor-pointer transition-colors ${
                    isTop ? "border-emerald-500/50 hover:border-emerald-400/80" : "border-white/10 hover:border-emerald-500/30"
                  }`}
                >
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h4 className="font-sans text-base font-bold text-white transition-colors">
                          {camp.campName}
                        </h4>
                        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 font-sans text-[10px] font-semibold text-emerald-300">
                          {camp.badge}
                        </span>
                      </div>
                      <p className="mt-1 font-sans text-xs font-medium text-gray-300">
                        {camp.headline}
                      </p>
                      <div className="mt-1 font-mono text-[10px] text-gray-400 flex items-center gap-2">
                        <span className="text-gray-400">{camp.location}</span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-wider shrink-0 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      {camp.period}
                    </span>
                  </div>

                  {/* Special Highlight Callout if available */}
                  {camp.specialHighlight && (
                    <div className="mb-4 flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-950/20 p-3.5 text-amber-200/90 shadow-sm">
                      <Target className="h-4 w-4 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
                      <div>
                        <div className="font-sans text-xs font-bold text-amber-300 uppercase tracking-wide">
                          Special Military Highlight
                        </div>
                        <div className="mt-0.5 font-sans text-xs text-amber-200/90 leading-relaxed font-medium">
                          {camp.specialHighlight}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Experience Points */}
                  <ul className="space-y-2.5 mb-5">
                    {camp.description.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 font-sans text-xs text-gray-300 leading-relaxed font-light">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills/Competencies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {camp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[9px] uppercase tracking-wider text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded transition-colors group-hover:border-emerald-500/20 group-hover:text-emerald-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Certifications & Credentials Section */}
        <motion.section id="certifications-section" variants={itemVariants} className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-white/5 pb-3.5 mb-10 gap-2">
            <h3 className="flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-widest text-white/95">
              <Award className="h-4 w-4 text-gray-400" />
              Certifications & Credentials
            </h3>
            <span className="font-mono text-[9px] text-gray-500 font-semibold tracking-wider">
              STUDENT: {certificateData.student.name} ({certificateData.student.email})
            </span>
          </div>

          <div className="space-y-16">

            {/* Category: Academic & Course Certificates */}
            {academicCerts.length > 0 && (
              <div id="academic-certificates-group" className="space-y-6">
                <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                  <GraduationCap className="h-4 w-4 text-gray-400" />
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-gray-300">
                    🎓 Academic & Course Certificates ({academicCerts.length})
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {academicCerts.map((cert, idx) => (
                    <CertificateCard
                      key={`academic-${idx}`}
                      cert={cert}
                      onClick={() => {
                        setSelectedCert(cert);
                        setViewMode("preview");
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Category: Hackathons, Competitions & Achievements */}
            {competitionCerts.length > 0 && (
              <div id="competition-certificates-group" className="space-y-6">
                <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                  <Trophy className="h-4 w-4 text-gray-400" />
                  <h4 className="font-sans text-[10px] font-bold uppercase tracking-widest text-gray-300">
                    🏆 Hackathons, Competitions & Achievements ({competitionCerts.length})
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {competitionCerts.map((cert, idx) => (
                    <CertificateCard
                      key={`comp-${idx}`}
                      cert={cert}
                      onClick={() => {
                        setSelectedCert(cert);
                        setViewMode("preview");
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {/* Aesthetic Signature block */}
        <motion.section id="signature-block" variants={itemVariants} className="mt-20 text-center sm:text-left border-t border-white/5 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-sans text-[9px] text-gray-500 uppercase tracking-widest font-semibold">PERSONAL SIGN-OFF</p>
            <div className="mt-2 font-serif text-2xl italic tracking-wider text-white/90 font-light">
              {personal.signature}
            </div>
          </div>
          <div className="text-[11px] text-gray-500 font-sans tracking-wide">
            Gwalior, Madhya Pradesh, India
          </div>
        </motion.section>
      </motion.div>

      {/* Interactive Certification Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-pointer animate-fade-in"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-[80vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="absolute top-4 right-4 z-50">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-200 cursor-pointer shadow-md"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Left Column: Metadata & Credential Details */}
              <div className="w-full md:w-95 shrink-0 border-t md:border-t-0 md:border-r border-white/10 p-6 flex flex-col justify-between h-auto md:h-full bg-zinc-950 overflow-y-auto order-2 md:order-1">
                <div className="space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-gray-400 font-mono text-[9px] uppercase tracking-wider">
                      <Award className="h-2.5 w-2.5" /> Official Certificate
                    </span>
                    <h3 className="font-sans text-base font-bold text-white mt-3 leading-snug">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium font-sans mt-1">
                      Issued by {selectedCert.issuer}
                    </p>
                  </div>

                  <div className="space-y-3.5 border-t border-b border-white/5 py-4">
                    <div>
                      <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">CATEGORY</span>
                      <p className="font-sans text-xs text-white font-medium">{selectedCert.category}</p>
                    </div>
                    <div className="flex gap-x-8">
                      <div>
                        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">RECIPIENT</span>
                        <p className="font-sans text-xs text-white font-medium">{selectedCert.recipient}</p>
                      </div>
                      <div>
                        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">COMPLETION YEAR</span>
                        <p className="font-sans text-xs text-white font-medium">{selectedCert.date}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">ABOUT THE CREDENTIAL</span>
                    <p className="mt-1 font-sans text-xs text-gray-400 leading-relaxed font-light text-justify">
                      {selectedCert.description}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">SKILLS MASTERED</span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {selectedCert.skills.map((skill: string) => (
                        <span
                          key={skill}
                          className="rounded bg-white/2 px-2 py-0.5 font-sans text-[9px] text-gray-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedCert.technologies && selectedCert.technologies.length > 0 && (
                    <div>
                      <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">ASSOCIATED TECHNOLOGIES</span>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {selectedCert.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="rounded bg-[rgba(var(--accent-rgb,255,255,255),0.03)] px-2 py-0.5 font-sans text-[9px] text-[rgb(var(--accent-rgb,255,255,255))] border border-[rgba(var(--accent-rgb,255,255,255),0.1)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievement Status */}
                  <div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">ACHIEVEMENT STATUS</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono font-semibold text-emerald-400">
                        <ShieldCheck className="h-3 w-3 text-emerald-400 animate-pulse" />
                        Completed & Verified
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-mono font-semibold text-indigo-400">
                        No Sensitive Data Excluded
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 px-4 py-2.5 font-sans text-xs font-semibold text-white transition-all duration-200 cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>

              {/* Right Column: High-Fidelity Viewer */}
              <div className="flex-1 bg-black p-6 flex flex-col relative min-h-[40vh] md:h-full order-1 md:order-2 border-b md:border-b-0 border-white/10 overflow-y-auto">
                <div className={`w-full min-h-full flex flex-col items-center gap-8 ${selectedCert.images ? 'justify-start py-4' : 'justify-center'}`}>
                  {selectedCert.images ? (
                    selectedCert.images.map((img: string, idx: number) => (
                      <OptimizedImage
                        key={idx}
                        src={img}
                        alt={`${selectedCert.title} - part ${idx + 1}`}
                        className="max-w-full rounded-lg shadow-2xl object-contain border border-white/10 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                    ))
                  ) : (
                    <OptimizedImage
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="max-w-full max-h-[35vh] md:max-h-[70vh] rounded-lg shadow-2xl object-contain border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
