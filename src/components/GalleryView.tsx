import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, Calendar, Play } from "lucide-react";
import { galleryItems } from "../resources/content";
import { OptimizedImage } from "./OptimizedImage";

import { GalleryItem } from "../types";

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ["All", ...Array.from(new Set(galleryItems.map(i => i.category)))];

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, filteredItems]);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen py-6">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-10 w-87.5 h-87.5 bg-white/1 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-100 h-100 bg-white/1.5 rounded-full filter blur-[90px] pointer-events-none" />

      <div id="gallery-view-container" className="relative z-10 mx-auto max-w-5xl px-6 py-12">
        {/* Title */}
        <div className="mb-12">
          <h2 className="font-sans text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Visual Gallery</h2>
          <p className="mt-3 font-sans text-xs leading-relaxed text-gray-400 max-w-xl font-light">
            A curated visual archive documenting robotics testing, hardware prototyping, circuit instrumentation, and field exploration in uniform perspective.
          </p>
        </div>

        {/* Categories Filter list */}
        {galleryItems.length > 0 && (
          <div className="mb-10 flex flex-wrap gap-2 border-b border-white/5 pb-5">
            {categories.map((cat) => (
              <button
                id={`gallery-filter-${cat.toLowerCase().replace(/[\s&]+/g, "-")}`}
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative rounded-lg px-3.5 py-1.5 font-sans text-[11px] font-semibold tracking-wide transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeFilter === cat ? "text-black font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="active-gallery-filter"
                    className="absolute inset-0 rounded-lg bg-white shadow-md shadow-white/5 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        )}

        {galleryItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center border border-white/5 bg-zinc-950/40 rounded-2xl backdrop-blur-sm shadow-xl">
            <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold mb-2">Gallery Empty</span>
            <h3 className="font-sans text-sm font-semibold text-white">No visual creations found</h3>
            <p className="mt-1.5 font-sans text-xs text-gray-400 font-light max-w-xs leading-relaxed">
              Pictures have been removed from the gallery. Feel free to explore other tabs like Work or About!
            </p>
          </div>
        ) : (
          /* Gallery Photo Grid - Equal Width & Height (Aspect Square Uniformity) */
          <motion.div
            layout
            id="gallery-grid"
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  id={`gallery-item-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-zinc-950 shadow-sm hover:border-white/20 transition-colors"
                >
                  {/* Video Badge indicator */}
                  {(item.type === "video" || item.video) && (
                    <div className="absolute top-3 left-3 z-20 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 border border-white/15 flex items-center gap-1.5 text-white shadow-lg">
                      <Play className="h-2.5 w-2.5 fill-current text-white" />
                      <span className="font-mono text-[9px] uppercase tracking-wider font-bold">Video</span>
                    </div>
                  )}

                  {item.type === "video" || item.video ? (
                    <video
                      src={item.video || item.image}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  ) : (
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  )}
                  
                  {/* Elegant Fade Overlay with Action Item */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/30 to-transparent p-4 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-semibold">
                      {item.category}
                    </span>
                    <h4 className="font-sans text-xs font-semibold text-white mt-1">
                      {item.title}
                    </h4>
                    <div className="absolute right-4 bottom-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-md border border-white/10 shadow-md">
                      <Maximize2 className="h-3 w-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Full-Screen Zoom Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              id="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md cursor-zoom-out select-none"
            >
              {/* High-Visibility Close trigger button */}
              <button
                id="lightbox-close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(null);
                }}
                className="absolute right-4 top-4 sm:right-8 sm:top-8 h-11 w-11 rounded-full bg-zinc-900/95 hover:bg-zinc-800 border border-white/25 text-white flex items-center justify-center shadow-2xl backdrop-blur-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer z-50 group"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5 text-gray-200 group-hover:text-white transition-colors" />
              </button>

              {/* Prev Trigger button */}
              <button
                id="lightbox-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-zinc-900/95 hover:bg-zinc-800 border border-white/25 text-white flex items-center justify-center shadow-2xl backdrop-blur-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer z-50 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 text-gray-200 group-hover:text-white transition-colors" />
              </button>

              {/* Next Trigger button */}
              <button
                id="lightbox-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-zinc-900/95 hover:bg-zinc-800 border border-white/25 text-white flex items-center justify-center shadow-2xl backdrop-blur-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer z-50 group"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 text-gray-200 group-hover:text-white transition-colors" />
              </button>

              {/* Lightbox Inner Container */}
              <div 
                className="flex max-h-[88vh] max-w-4xl flex-col items-center gap-5 focus:outline-none cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Main Media (Video or Image) */}
                {selectedItem.type === "video" || selectedItem.video ? (
                  <motion.div
                    key={selectedItem.id}
                    initial={{ scale: 0.96, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="max-h-[60vh] max-w-full rounded-2xl border border-white/15 overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.9)] bg-black"
                  >
                    <video
                      src={selectedItem.video || selectedItem.image}
                      controls
                      autoPlay
                      playsInline
                      loop
                      className="max-h-[60vh] max-w-full object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.img
                    key={selectedItem.id}
                    initial={{ scale: 0.96, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[60vh] max-w-full rounded-2xl border border-white/15 object-contain shadow-[0_24px_50px_rgba(0,0,0,0.9)]"
                  />
                )}

                {/* Caption details box */}
                <div className="w-full text-center sm:text-left max-w-xl bg-zinc-950/70 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl">
                  <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        {selectedItem.category}
                      </span>
                      <h3 className="font-sans text-sm font-semibold text-white mt-1.5">
                        {selectedItem.title}
                      </h3>
                    </div>
                    {selectedItem.date && (
                      <div className="flex items-center gap-1 font-mono text-[10px] text-gray-400">
                        <Calendar className="h-3.5 w-3.5 text-gray-500" />
                        {selectedItem.date}
                      </div>
                    )}
                  </div>
                  {selectedItem.description && (
                    <p className="mt-2 text-center sm:text-left font-sans text-xs text-gray-400 leading-relaxed font-light">
                      {selectedItem.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
