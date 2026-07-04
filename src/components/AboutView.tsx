import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, Code, Award, X, Eye, ShieldCheck } from "lucide-react";
import { personal, workExperiences, education, skills } from "../resources/content";
import SpotlightCard from "./SpotlightCard";
import certificateData from "../resources/certificates";
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
      <div className="absolute top-24 left-10 w-[350px] h-[350px] bg-white/1.5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-white/1 rounded-full filter blur-[90px] pointer-events-none" />

      <motion.div
        id="about-view-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl px-6 py-12"
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
                <div className="absolute left-[-31px] top-4 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-black border border-white/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-[rgb(var(--accent-rgb,255,255,255))] group-hover:border-[rgb(var(--accent-rgb,255,255,255))] shadow-[0_0_8px_rgba(var(--accent-rgb,255,255,255),0.4)]" />
                
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
                <div className="absolute left-[-31px] top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-black border border-white/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-white group-hover:border-white shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                
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

          <div className="grid gap-6">
            {certificateData.certificates.map((cert, idx) => (
              <SpotlightCard
                id={`certificate-card-${idx}`}
                key={idx}
                className="p-6 relative group flex flex-col md:flex-row gap-6 items-stretch justify-between overflow-hidden border border-white/5 bg-zinc-950/40 backdrop-blur-md rounded-xl"
              >
                {/* Left Side: Premium Interactive Certificate Preview Frame */}
                {cert.image && (
                  <div
                    onClick={() => {
                      setSelectedCert(cert);
                      setViewMode("preview");
                    }}
                    className="relative shrink-0 md:w-52 w-full aspect-[1.414/1] overflow-hidden rounded-lg border border-white/10 bg-zinc-900 cursor-pointer shadow-md group/preview"
                  >
                <OptimizedImage
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover grayscale brightness-[0.85] contrast-[1.05] group-hover/preview:grayscale-0 group-hover/preview:brightness-100 group-hover/preview:scale-105 group-hover/preview:rotate-0.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                    {/* Glossy Overlay effect on hover */}
                    <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-500" />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/75 opacity-0 group-hover/preview:opacity-100 backdrop-blur-[2px] transition-all duration-300">
                      <div className="flex flex-col items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCert(cert);
                            setViewMode("preview");
                          }}
                          className="p-2.5 rounded-full bg-white text-black hover:bg-zinc-200 hover:scale-110 transition-all duration-200 shadow-lg flex items-center justify-center cursor-pointer"
                          title="View Certificate Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <span className="font-mono text-[8px] text-gray-300 uppercase tracking-widest font-semibold mt-0.5">View Details</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Right Side: Certificate details and skills */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    {/* Top Issuer Badge & Status bar */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {getIssuerBadge(cert.issuer)}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[9px] font-mono font-semibold text-emerald-400">
                        <ShieldCheck className="h-3 w-3 text-emerald-400" />
                        Active
                      </span>
                    </div>

                    {/* Title & Issue Date */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h4 className="font-sans text-sm font-bold text-white leading-snug group-hover:text-white/95 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold shrink-0">
                        {cert.date}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3.5 font-sans text-xs text-gray-400 leading-relaxed font-light text-justify">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills Mastered & Actions */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Skills list */}
                    <div className="flex flex-wrap gap-1.5 max-w-md">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded bg-white/2 px-2 py-0.5 font-sans text-[9px] text-gray-400 border border-white/5 shadow-sm hover:border-white/10 hover:text-white transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button Block */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                      <button
                        id={`view-cert-details-${idx}`}
                        onClick={() => {
                          setSelectedCert(cert);
                          setViewMode("preview");
                        }}
                        className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-white/2 border border-white/10 px-3.5 py-1.5 font-sans text-[10px] font-semibold text-gray-300 hover:border-white/30 hover:bg-white/5 hover:text-white transition-all duration-300 shadow-sm"
                      >
                        View Details
                        <Eye className="h-3.5 w-3.5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors cursor-pointer shadow-md animate-fade-in"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Left Column: Metadata & Credential Details */}
              <div className="w-full md:w-[350px] shrink-0 border-r border-white/10 p-6 flex flex-col justify-between h-full bg-zinc-950 overflow-y-auto">
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
                      <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">RECIPIENT</span>
                      <p className="font-sans text-xs text-white font-medium">{selectedCert.recipient}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">ISSUE DATE</span>
                      <p className="font-sans text-xs text-white font-medium">{selectedCert.date}</p>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-semibold">ABOUT THE COURSE</span>
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
                </div>

                {/* Left col bottom actions */}
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
              <div className="flex-1 bg-black p-6 flex flex-col justify-center items-center relative min-h-[40vh] md:h-full">
                <div className="w-full h-full flex items-center justify-center">
                  <OptimizedImage
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[75vh] rounded-lg shadow-2xl object-contain border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
