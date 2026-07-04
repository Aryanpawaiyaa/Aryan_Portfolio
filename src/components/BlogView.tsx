import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, BookOpen, Calendar, Clock, Tag, Share2, Check } from "lucide-react";
import { blogPosts, personal } from "../resources/content";
import { OptimizedImage } from "./OptimizedImage";


interface BlogViewProps {
  selectedPostId: string | null;
  onSelectPost: (id: string | null) => void;
}

export default function BlogView({ selectedPostId, onSelectPost }: BlogViewProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [copied, setCopied] = useState(false);

  const categories = ["All", "Technical Articles", "Hackathons", "Learning Journey", "Tutorials", "Thoughts"];

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (selectedPostId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedPostId]);

  const activePost = blogPosts.find(p => p.id === selectedPostId);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen py-6">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-white/[0.012] rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-white/[0.008] rounded-full filter blur-[80px] pointer-events-none" />

      <div id="blog-view-container" className="relative z-10 mx-auto max-w-3xl px-6 py-12">
        <AnimatePresence mode="wait">
          {!selectedPostId ? (
            /* Article Listing Mode */
            <motion.div
              id="blog-listing-mode"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key="list"
            >
              {/* Header Title */}
              <div className="mb-12">
                <h2 className="font-sans text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Systems Writing</h2>
                <p className="mt-3 font-sans text-xs leading-relaxed text-gray-400 max-w-xl font-light">
                  Essays exploring UI architecture, spring systems engineering, and component accessibility patterns.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="mb-10 flex flex-wrap gap-2 border-b border-white/5 pb-5">
                {categories.map((cat) => (
                  <button
                    id={`blog-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative rounded-lg px-3.5 py-1.5 font-sans text-[11px] font-semibold tracking-wide transition-all duration-300 focus:outline-none cursor-pointer ${
                      activeCategory === cat ? "text-black font-semibold" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {activeCategory === cat && (
                      <motion.div
                        layoutId="active-blog-filter"
                        className="absolute inset-0 rounded-lg bg-white shadow-md shadow-white/5 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    {cat}
                  </button>
                ))}
              </div>

              {/* Article rows list */}
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    id={`blog-article-card-${post.id}`}
                    key={post.id}
                    onClick={() => onSelectPost(post.id)}
                    className="group cursor-pointer rounded-2xl glass-card p-5"
                  >
                    <div className="flex flex-col gap-6 md:flex-row md:items-start">
                      {post.coverImage && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 md:w-48 shrink-0 bg-zinc-950">
                          <OptimizedImage
                            src={post.coverImage}
                            alt={post.title}
                            referrerPolicy="no-referrer"
                            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                        </div>
                      )}
                      <div className="flex-1 py-0.5">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] uppercase tracking-wider text-gray-500 font-semibold">
                          <span>{post.date}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                          <span className="flex items-center gap-1">
                            <Tag className="h-3 w-3" />
                            {post.category}
                          </span>
                        </div>
                        <h3 className="mt-3.5 font-sans text-base font-semibold text-white transition-colors duration-300 group-hover:text-white/90">
                          {post.title}
                        </h3>
                        <p className="mt-2.5 font-sans text-xs leading-relaxed text-gray-400 font-light">
                          {post.description}
                        </p>
                        <div className="mt-5 flex items-center gap-1.5 font-sans text-[11px] font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                          <BookOpen className="h-3.5 w-3.5 text-gray-500" />
                          Read article <span className="text-gray-500 group-hover:text-gray-300 transition-colors">({post.readTime})</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Full Article Reader Mode */
            <motion.article
              id="blog-reader-mode"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key="reader"
              className="py-4"
            >
              {/* Back Nav */}
              <button
                id="back-to-blog-list-btn"
                onClick={() => onSelectPost(null)}
                className="group mb-8 flex items-center gap-1.5 font-sans text-xs font-semibold text-gray-400 transition-colors duration-300 hover:text-white focus:outline-none cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Back to articles
              </button>

              {/* Post Header */}
              <div className="border-b border-white/5 pb-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] tracking-wider text-gray-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5 text-gray-500" />
                    {activePost?.category.toUpperCase()}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-850" />
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-gray-500" />
                    {activePost?.date.toUpperCase()}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-850" />
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-gray-500" />
                    {activePost?.readTime.toUpperCase()}
                  </span>
                </div>
                <h1 className="mt-4 font-sans text-2xl font-extrabold tracking-tight text-white sm:text-4xl leading-tight">
                  {activePost?.title}
                </h1>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-6 w-6 overflow-hidden rounded-full border border-white/10 bg-zinc-900 shadow-sm">
                      <OptimizedImage
                        src={personal.avatar}
                        alt={personal.name}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="font-sans text-[11px] font-semibold text-gray-400">Written by {personal.name}</span>
                  </div>
                  <button
                    id="share-article-btn"
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/2 px-2.5 py-1.5 font-sans text-[10px] text-gray-400 hover:border-white/30 hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Share2 className="h-3 w-3" />}
                    {copied ? "Copied!" : "Share Link"}
                  </button>
                </div>
              </div>

              {/* Cover Image */}
              {activePost?.coverImage && (
                <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-950 shadow-2xl">
                  <OptimizedImage
                    src={activePost.coverImage}
                    alt={activePost.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              {/* Beautiful, Readable Content Parser */}
              <div className="mt-10 max-w-2xl mx-auto">
                <div id="blog-rich-content" className="prose prose-invert font-sans text-xs leading-relaxed text-gray-400 space-y-6">
                  {activePost?.content.split("\n\n").map((block, i) => {
                    const trimmed = block.trim();
                    
                    // Headings
                    if (trimmed.startsWith("###")) {
                      return (
                        <h3 key={i} className="font-sans text-sm font-semibold text-white mt-10 mb-3 border-l-2 border-white/25 pl-3">
                          {trimmed.replace("###", "").trim()}
                        </h3>
                      );
                    }

                    // Numbered Lists / Ordered points
                    if (trimmed.match(/^\d+\./)) {
                      return (
                        <ol key={i} className="list-decimal pl-5 space-y-2.5 my-4 text-gray-400">
                          {trimmed.split("\n").map((item, idx) => (
                            <li key={idx} className="text-gray-400 font-light leading-relaxed">
                              {item.replace(/^\d+\.\s*/, "").trim()}
                            </li>
                          ))}
                        </ol>
                      );
                    }

                    // Code Block Code snippets
                    if (trimmed.startsWith("```")) {
                      const lines = trimmed.split("\n");
                      const codeLines = lines.slice(1, lines.length - 1).join("\n");
                      return (
                        <pre key={i} className="overflow-x-auto rounded-lg border border-white/5 bg-black/60 p-4 font-mono text-[10px] text-gray-300 leading-normal my-6 shadow-inner">
                          <code>{codeLines}</code>
                        </pre>
                      );
                    }

                    // Bullet Lists
                    if (trimmed.startsWith("-")) {
                      return (
                        <ul key={i} className="list-disc pl-5 space-y-2 my-4 text-gray-400">
                          {trimmed.split("\n").map((item, idx) => (
                            <li key={idx} className="text-gray-400 font-light leading-relaxed">
                              {item.replace("-", "").trim()}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    // Standard Paragraph
                    return (
                      <p key={i} className="text-gray-400 leading-relaxed text-justify font-light">
                        {trimmed}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
