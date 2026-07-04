import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowLeft, Calendar, Tag, Layers, Globe } from "lucide-react";
import { projects } from "../resources/content";
import SpotlightCard from "./SpotlightCard";
import { OptimizedImage } from "./OptimizedImage";


interface WorkViewProps {
  selectedProjectId: string | null;
  onSelectProject: (id: string | null) => void;
}

export default function WorkView({ selectedProjectId, onSelectProject }: WorkViewProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Design System", "Development", "Design"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Auto scroll to project if selected from home view
  useEffect(() => {
    if (selectedProjectId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedProjectId]);

  const activeProject = projects.find(p => p.id === selectedProjectId);

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen py-6">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-white/[0.012] rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-white/[0.008] rounded-full filter blur-[80px] pointer-events-none" />

      <div id="work-view-container" className="relative z-10 mx-auto max-w-3xl px-6 py-12">
        <AnimatePresence mode="wait">
          {!selectedProjectId ? (
            /* Work Listing Mode */
            <motion.div
              id="work-listing-mode"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key="list"
            >
              {/* Title & Introduction */}
              <div className="mb-12">
                <h2 className="font-sans text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Selected Projects</h2>
                <p className="mt-3 font-sans text-xs leading-relaxed text-gray-400 max-w-xl font-light">
                  A structured collection of systems, design architectures, and interactive full-stack tools. Click any project to inspect.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="mb-10 flex flex-wrap gap-2 border-b border-white/5 pb-5">
                {categories.map((cat) => (
                  <button
                    id={`filter-pill-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`relative rounded-lg px-3.5 py-1.5 font-sans text-[11px] font-semibold tracking-wide transition-all duration-300 focus:outline-none cursor-pointer ${
                      activeFilter === cat ? "text-black font-semibold" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {activeFilter === cat && (
                      <motion.div
                        layoutId="active-filter-pill"
                        className="absolute inset-0 rounded-lg bg-white shadow-md shadow-white/5 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    {cat}
                  </button>
                ))}
              </div>

              {/* Projects Bento Grid */}
              <motion.div
                layout
                id="projects-grid"
                className="grid gap-6 sm:grid-cols-2"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      layout
                      id={`project-grid-card-${project.id}`}
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => onSelectProject(project.id)}
                      className="group cursor-pointer flex flex-col h-full"
                    >
                      <SpotlightCard className="p-4 h-full flex flex-col justify-between overflow-hidden">
                        {/* Thumbnail */}
                        <div>
                          <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg border border-white/5 bg-zinc-900 shadow-inner">
                            <OptimizedImage
                              src={project.image}
                              alt={project.title}
                              referrerPolicy="no-referrer"
                              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                          </div>
                          {/* Content Meta */}
                          <div className="mt-5 px-0.5">
                            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold">
                              <span>{project.category}</span>
                              <span className="h-1 w-1 rounded-full bg-zinc-800" />
                              <span>{project.date}</span>
                            </div>
                            <h3 className="mt-2.5 font-sans text-sm font-semibold text-white/95 transition-colors duration-300 group-hover:text-white flex items-center justify-between gap-1">
                              {project.title}
                              <ArrowUpRight className="h-4 w-4 text-gray-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white shrink-0" />
                            </h3>
                            <p className="mt-2 font-sans text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="mt-5 flex flex-wrap gap-1.5 px-0.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-white/3 px-2 py-0.5 font-mono text-[9px] text-gray-400 border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </SpotlightCard>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ) : (
            /* Project Detail Overlay View */
            <motion.article
              id="project-detail-mode"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key="detail"
              className="py-4"
            >
              {/* Back Nav Header */}
              <button
                id="back-to-work-btn"
                onClick={() => onSelectProject(null)}
                className="group mb-8 flex items-center gap-1.5 font-sans text-xs font-semibold text-gray-400 transition-colors duration-300 hover:text-white focus:outline-none cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Back to work
              </button>

              {/* Project Hero Title */}
              <div className="border-b border-white/5 pb-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-gray-500 font-semibold tracking-wider">
                  <span className="flex items-center gap-1">
                    <Layers className="h-3.5 w-3.5 text-gray-500" />
                    {activeProject?.category.toUpperCase()}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-gray-500" />
                    {activeProject?.date.toUpperCase()}
                  </span>
                </div>
                <h1 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {activeProject?.title}
                </h1>
                <p className="mt-4 font-sans text-sm leading-relaxed text-gray-400 font-light">
                  {activeProject?.description}
                </p>
              </div>

              {/* Main Hero Project Image */}
              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-950 shadow-2xl">
                <OptimizedImage
                  src={activeProject?.image}
                  alt={activeProject?.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Split Content: Details / Metadata Side rails */}
              <div className="mt-12 grid gap-10 md:grid-cols-3">
                {/* Left Main Case Study (2 cols) */}
                <div className="md:col-span-2 space-y-6">
                  <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-white border-b border-white/5 pb-2 mb-4">
                    Project Case Study
                  </h2>
                  <div id="project-rich-content" className="prose prose-invert max-w-none font-sans text-xs leading-relaxed space-y-6">
                    {activeProject?.content.split("\n\n").map((block, i) => {
                      if (block.startsWith("###")) {
                        return (
                          <h3 key={i} className="font-sans text-sm font-semibold text-white mt-8 mb-3 border-l-2 border-white/25 pl-3">
                            {block.replace("###", "").trim()}
                          </h3>
                        );
                      }
                      if (block.startsWith("-")) {
                        return (
                          <ul key={i} className="list-disc pl-5 space-y-2.5 my-4 text-gray-400">
                            {block.split("\n").map((li, j) => (
                              <li key={j} className="text-gray-400 font-light leading-relaxed">
                                {li.replace("-", "").trim()}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={i} className="text-gray-400 font-light leading-relaxed text-justify">
                          {block}
                        </p>
                      );
                    })}
                  </div>
                </div>

                {/* Right Meta Column (1 col) */}
                <div className="space-y-8">
                  <div>
                    <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-white border-b border-white/5 pb-2 mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject?.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/3 px-2.5 py-1 font-mono text-[10px] text-gray-400 border border-white/5 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {activeProject?.gallery && activeProject.gallery.length > 0 && (
                    <div>
                      <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-white border-b border-white/5 pb-2 mb-4">
                        Visual Artifacts
                      </h3>
                      <div className="grid gap-3.5">
                        {activeProject.gallery.map((img, idx) => (
                          <div key={idx} className="relative aspect-video overflow-hidden rounded-lg border border-white/5 bg-zinc-950 shadow-md group">
                            <OptimizedImage
                              src={img}
                              alt={`Project gallery asset ${idx + 1}`}
                              referrerPolicy="no-referrer"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-white border-b border-white/5 pb-2 mb-3">
                      Deployment
                    </h3>
                    <div>
                      <a
                        id="project-visit-link"
                        href={activeProject?.link || "#"}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3.5 py-2.5 font-sans text-xs font-semibold text-black hover:bg-gray-100 transition-all duration-300 shadow-md shadow-white/5"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Visit Prototype
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
