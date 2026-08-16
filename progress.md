# Codebase Status & Progress Report

**Date:** July 20, 2026  
**Last Updated:** August 16, 2026  
**Active Branch:** `main`  

---

## 🛠️ Technology Stack

- **Framework:** React 18 + TypeScript (TSX)
- **Bundler & Build Tool:** Vite 6.4
- **Styling:** Tailwind CSS (v4) + Custom CSS Variables
- **Animations:** Motion (`motion/react` — spring physics, 3D perspective)
- **Iconography:** Lucide React
- **Fonts:** Inter, JetBrains Mono, Space Grotesk (Google Fonts)

---

## 📂 Codebase Structure & Components

The portfolio is structured as a modular single-page-routing application where tabs switch active views dynamically:

- **`src/App.tsx`:** Coordinates active navigation state, dynamically updates accent color themes (`white`, `amber`, `emerald`, `violet`), and renders backgrounds.
- **`src/components/HomeView.tsx`:** Compact, recruiter-optimized landing page. Features availability banner, local time clock, hero panel, achievements strip, 6-column expertise grid, featured project cards, and CTA strip.
- **`src/components/AboutView.tsx`:** Detailed profile description, education records, work experiences, 3D stacked NCC Tactical Camps deck, and searchable/filterable certifications viewer with multi-image lightbox modals.
- **`src/components/WorkView.tsx`:** Lists all projects, supporting detailed project readouts and mock galleries.
- **`src/components/BlogView.tsx`:** Lists technical articles and hackathon summaries.
- **`src/components/Header.tsx` & `src/components/Footer.tsx`:** Main navigation elements styled with high-end glassmorphism and magnetic cursor effects. Both are now fully light/dark adaptive.
- **`src/resources/content.ts` & `src/resources/certificates.ts`:** Central data storage for all text content, projects, NCC experiences, and verified certifications.
- **`src/types.ts`:** TypeScript interfaces.

---

## 📈 Feature Progress & Status

| Section / Feature | Status | Description |
| :--- | :---: | :--- |
| **Home Page (Recruiter-Optimized)** | **Completed** | Complete redesign from 729-line resume-style page to compact landing. Removed timeline, tech stack badges, non-functional contact form, RevealText animation, and progress bar skills. |
| **Achievements Strip** | **Completed** | Tight 4-card horizontal strip: Dual Degree, 2 Tech Clubs, 3+ Builds, N Certs (dynamic count). |
| **Core Expertise Grid** | **Completed** | 8 expertise domains in 6-column grid (desktop), compact pills replacing skill bars. |
| **Featured Projects** | **Completed** | Top 2 projects as vertical image-preview cards. "All Projects" navigates to Work tab. |
| **CTA Strip** | **Completed** | "Let's work together" card with direct mailto, GitHub, LinkedIn, Instagram. |
| **Aesthetics Panel** | **Completed** | White, amber, emerald, violet accent colors + grid, particles, dots, glow strength sliders + presets. |
| **Light / Dark Mode Toggle** | **Completed** | Full site-wide light mode. Persisted to `localStorage`. All components adapted. |
| **Certifications Detail Modal** | **Completed** | Full viewer in About view (IBM AI, Cisco, NCC, filmmaking, etc.) with light mode. |
| **Technical Blog** | **Completed** | SUAS 2026, HackKnight hackathon, filmmaking competition entries. |
| **PCB Design Project** | **Completed** | KiCad 10.0, manual & programmatic routing, PDB design. |
| **CAD & 3D Modeling Project** | **Completed** | Fusion 360, AutoCAD, 3D printing, robotics — 4-minute narrative write-up. |
| **Production Build** | **Verified** | `npm run build` exits 0. Chunked output: index 138 kB, vendor 149 kB, react 193 kB. |

---

## 🗑️ Removed

| Removed Section | Reason | Where It Lives Now |
| :--- | :--- | :--- |
| Growth & Milestones Timeline | Duplicated content from About page | About page (WorkExperience + Education) |
| Technologies & Tools Badges | Redundant with About page skills section | About page |
| Contact Form (non-functional) | `handleFormSubmit` was a mock `setTimeout` | Replaced by direct `mailto:` CTA |
| RevealText Animation | Added load time without value | Removed entirely |
| Skill Progress Bars | Self-assessed percentages are an anti-pattern | Replaced by compact expertise pills |
| Blog Post: "Crafting Micro-interactions with Spring Physics" | Irrelevant to engineering portfolio focus | Deleted |

---

## 🆕 Session Updates — August 16, 2026

### New Content Added

| Content | Type | Details |
| :--- | :--- | :--- |
| PCB Design & Engineering | Project | KiCad 10.0, manual routing, programmatic PCB design, PDBs |
| CAD & 3D Modeling — Robotics | Project | Fusion 360, AutoCAD, 3D printing, robotics — 4-min narrative |
| SUAS 2026 — Team Trinetra | Blog | Tulsa Oklahoma competition, rank 17 flight order, funded by Vyom Drones Pvt Ltd |
| Filmmaking — HAPPENING & BLOCKING | Blog | .MOV competition, 22-min film, 1st position, collab with Nishant Singh Kushwah |

### Light Mode — Full Implementation

**Theme Architecture:**
- `.light-mode` class applied to `#app-root-container` on toggle
- `data-theme` attribute set on `<html>` for CSS variable scoping
- Preference persisted in `localStorage` key `portfolio_theme`

**Components fixed for Light Mode:**

| Component | Changes |
| :--- | :--- |
| `Header.tsx` | Nav pills, logo text, mobile menu, scroll-state background all adapt |
| `Footer.tsx` | Semantic helper classes: `footer-adaptive`, `footer-brand`, `footer-sub`, `footer-social-link` |
| `CertificateCard.tsx` | White card surface, no image dimming, light badge/tag overrides |
| `AboutView.tsx` | Certificate modal dialog, sidebar, viewer all adapted |
| `OptimizedImage.tsx` | `cert-fallback-box` class for light-mode placeholder styling |
| `AtmosphericBackground.tsx` | Bug fix: `themeMode` added to dep array so particles re-render on theme switch |
| `InteractiveGrid.tsx` | Bug fix: `themeMode` added to dep array so grid color updates on theme switch |

**CSS additions in `index.css`:**
- `.light-mode .certificate-card` — white surface, soft shadows, neutral borders
- `.light-mode .cert-img-container` — slate-50 bg instead of zinc-900
- `.light-mode .cert-tag` — slate-100 bg, slate-600 text
- `.light-mode .cert-status-badge` — emerald-50 bg, emerald-700 text
- `.light-mode .cert-modal-dialog / sidebar / viewer` — full modal adaptation
- `.light-mode .footer-*` — footer element overrides
- `.light-mode #blog-rich-content` and `#project-rich-content` — prose colors
- `.light-mode .bg-zinc-950` — converted to slate-100
- `.light-mode .bg-zinc-800` separators adapted

### Bug Fixes (Codebase Audit)

| # | File | Bug | Fix |
| --- | --- | --- | --- |
| 1 | `AtmosphericBackground.tsx` | `themeMode` missing from `useEffect` dep array — particles never re-rendered on theme change | Added `themeMode` to dep array |
| 2 | `InteractiveGrid.tsx` | Same dep array bug — grid color/opacity didn't update on theme switch | Added `themeMode` to dep array |
| 3 | `WorkView.tsx` | "Visit Prototype" link opened in same tab | Added `target="_blank"` + `rel="noreferrer noopener"` |
| 4 | `AboutView.tsx` | `viewMode` state declared & set but never read (dead code) | Removed unused state variable |
| 5 | `AboutView.tsx` | `Eye` icon imported but never used in JSX | Removed unused import |
| 6 | `App.tsx` | `themeMode` prop not forwarded to `Header` | Added `themeMode={themeMode}` prop |

### Build Optimisation

- Bundle split from monolithic **1,304 kB** to chunked output:
  - `index.js` — 138 kB (gzip: 37 kB)
  - `vendor.js` — 149 kB (gzip: 47 kB)
  - `vendor-react.js` — 193 kB (gzip: 60 kB)
- Achieved via `vite.config.ts` `manualChunks` separating React and vendor libs
- Build time: ~13 s, exit code 0

---

## 🗺️ Roadmap & Next Steps

- [ ] Add hosted resume PDF URL to `personal.resumeUrl` in `src/resources/content.ts`.
- [ ] Replace placeholder gallery images in PCB and CAD projects with real renders/photos.
- [ ] Add PDF export / print layout for Home Page as a resume format.
- [ ] Further optimize bundle — consider lazy-loading lucide-react icons.
- [ ] Add real photos for the SUAS 2026 and filmmaking blog posts.
