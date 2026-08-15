import avatar from "../assets/images/profile/avatar.webp";
import { Personal, SocialLink, WorkExperience, Education, NccExperience, SkillGroup, Project, BlogPost, GalleryItem, Newsletter } from "../types";

export const personal: Personal = {
  name: "Aryan",
  role: "Front-End, Robotics & Systems Engineer",
  avatar: avatar,
  location: "Gwalior, Madhya Pradesh, India",
  bio: "Building modular web applications, programming embedded systems for UAVs and robotics, and applying data science to create interconnected platforms.",
  signature: "Aryan Narwariya",
  status: "Available for contract roles",
  email: "25cb1ar28@mitsgwl.ac.in",
  resumeUrl: "#", // Replace with hosted resume PDF URL
};

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Aryanpawaiyaa", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/aryan-n-3b8322388?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "Linkedin" },
  { platform: "Instagram", url: "https://www.instagram.com/aryan_pawaiyaa?igsh=ZjcwbmxkZHVod2Vn", icon: "Instagram" }
];

export const workExperiences: WorkExperience[] = [
  {
    company: "Yantra Robotics Society, IIT Madras",
    role: "Core Technical Member",
    location: "Chennai, TN",
    period: "2025 — Present",
    description: [
      "Collaborated with multidisciplinary teams on robotics and embedded systems projects.",
      "Participated in technical workshops, hands-on development, and research-oriented activities.",
      "Contributed to problem-solving, prototyping, and testing of robotic systems.",
      "Gained practical experience in robotics software, hardware integration, and engineering design."
    ],
    skills: [
      "Robotics",
      "Embedded Systems",
      "Autonomous Systems",
      "Control Systems",
      "Sensor Integration",
      "Microcontrollers",
      "Arduino",
      "Raspberry Pi",
      "C/C++",
      "Python",
      "ROS (Robot Operating System)",
      "Electronics",
      "PCB Basics",
      "Team Collaboration",
      "Technical Documentation",
      "Problem Solving"
    ],
    link: {
      label: "View Team Profile",
      url: "https://yantraiitm.netlify.app/team"
    }
  },
  {
    company: "DroneX Aerotech Club, MITS",
    role: "Technical Co-Lead",
    location: "Gwalior, MP",
    period: "2025 — Present",
    description: [
      "Contributed to the design, development, and testing of UAV and drone systems.",
      "Worked on drone electronics, flight controllers, propulsion systems, and sensor integration.",
      "Assisted in drone assembly, calibration, troubleshooting, and flight testing.",
      "Participated in research, technical discussions, and collaborative engineering projects.",
      "Explored autonomous flight, navigation systems, and aerial robotics."
    ],
    skills: [
      "UAV Development",
      "Drone Technology",
      "Flight Controllers",
      "ArduPilot",
      "Mission Planner",
      "MAVLink",
      "Drone Assembly",
      "Electronics",
      "ESC & BLDC Motors",
      "GPS Integration",
      "Telemetry Systems",
      "Embedded Systems",
      "Python",
      "C++",
      "Sensor Fusion",
      "Autonomous Navigation",
      "Teamwork",
      "Technical Research"
    ],
    link: {
      label: "Visit Club Website",
      url: "https://www.dronexaerotech.club/"
    }
  }
];

export const education: Education[] = [
  {
    institution: "Indian Institute of Technology and Science",
    degree: "B.S. in Data Science and Applications",
    period: "2025 — Present",
    description: "Specialized in data analysis, machine learning algorithms, statistical modeling, and cloud computing applications."
  },
  {
    institution: "Madhav Institute of Technology and Science",
    degree: "B.Tech. in Computer Science and Business Systems",
    period: "2025 — Present",
    description: "Dual degree program specializing in computational mathematics, database management systems, software engineering, and core business operations."
  }
];

export const nccExperiences: NccExperience[] = [
  {
    campName: "Army Attachment Camp (AAC)",
    badge: "Indian Army Attachment",
    location: "Babina Military Station, Jhansi, M.P.",
    period: "Feb 2026",
    headline: "High-Discipline Military Immersion & Armored Warfare Exposure",
    specialHighlight: "Main Battle Tank (War Tank) Tactical Ride & Military Vehicle Depot Logistics",
    description: [
      "Underwent comprehensive military training and operational immersion attached directly with active Indian Army combat units at Babina Army Cantt.",
      "Granted the rare distinction to ride an active Main Battle Tank (War Tank), experiencing firsthand armored combat dynamics, turret control, and tactical field maneuvers.",
      "Toured and inspected high-security military warehouses housing hundreds of combat tanks and heavy military vehicles, learning comprehensive maintenance systems, technical overhauls, and supply-chain logistics.",
      "Trained in live weapon handling protocols, firing range safety, combat obstacle courses, and defensive perimeter tactics under regular army instructors."
    ],
    skills: [
      "Armored Vehicle Logistics",
      "Battle Tank Maneuvers",
      "Weapon Handling Protocols",
      "Tactical Range Drills",
      "Military Discipline",
      "Physical Endurance"
    ]
  },
  {
    campName: "Combined Annual Training Camp (CATC - I)",
    badge: "CATC Training",
    location: "NCC Training Center, MP",
    period: "2025",
    headline: "Squad Drill Precision, Guard of Honor & Night Operations",
    description: [
      "Mastered squad drill synchrony, rifle drill ceremonies, and Guard of Honor protocol under rigorous NCC instructors.",
      "Executed high-tempo night drills, tactical perimeter guard duties, and sudden night alarm mobilization drills.",
      "Navigated demanding physical obstacle courses, building high physical stamina and rapid agility under pressure.",
      "Fostered deep camaraderie, unit cohesion, and memorable bonding with peers and seniors through intense collective training and camp traditions."
    ],
    skills: [
      "Squad Drill Precision",
      "Guard of Honor",
      "Night Patrols & Guard Duty",
      "Obstacle Course Navigation",
      "Leadership Under Pressure",
      "Team Morale"
    ]
  },
  {
    campName: "Combined Annual Training Camp (CATC - II)",
    badge: "ATC",
    location: "NCC Training Center, MP",
    period: "2025",
    headline: "Battle Craft, Field Navigation & Crisis Leadership",
    description: [
      "Trained in Field Craft (FC) & Battle Craft (BC), camouflage, target indication, ground appreciation, and prismatic compass map navigation.",
      "Participated in disaster management drills, basic tactical triage, and field survival conditioning.",
      "Organized and led squad performances during high-morale campfire nights, inter-company drill events, and cultural symposiums."
    ],
    skills: [
      "Field Craft & Battle Craft",
      "Map Reading & Navigation",
      "Survival Tactics",
      "Disaster Response",
      "Crisis Leadership",
      "Unit Coordination"
    ]
  }
];

export const skills: SkillGroup[] = [
  {
    name: "Software Development",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Responsive Design", "UI/UX", "API Integration", "Performance Optimization"]
  },
  {
    name: "CAD & Product Design",
    skills: ["CAD Modeling", "3D Product Design", "Parametric Modeling", "Mechanical Design", "Design for Manufacturing (DFM)", "STL Preparation", "3D Printing Workflow", "Rapid Prototyping", "Fusion 360", "AutoCAD", "FreeCAD"]
  },
  {
    name: "PCB & Electronics",
    skills: ["Basic PCB Design", "PCB Layout", "Circuit Design", "Electronic Prototyping", "Schematic Design", "Embedded Electronics", "KiCad", "EasyEDA", "Arduino", "ESP32"]
  },
  {
    name: "Robotics & Hardware",
    skills: ["Robotics", "Automation", "Sensors", "Microcontrollers", "Embedded Systems", "IoT", "CNC Fundamentals"]
  },
  {
    name: "Programming",
    skills: ["C", "C++", "Python", "JavaScript", "Data Structures", "Algorithms", "Object-Oriented Programming"]
  },
  {
    name: "Design & Creativity",
    skills: ["UI Design", "Portfolio Design", "Graphic Editing", "Motion Graphics", "Documentation", "Technical Writing"]
  },
  {
    name: "Professional Skills",
    skills: ["Leadership", "Problem Solving", "Innovation", "Research", "Public Speaking", "Presentation", "Project Management", "Team Collaboration", "Rapid Learning", "Time Management", "Critical Thinking"]
  }
];

export const projects: Project[] = [
  {
    id: "esp-drone-project",
    title: "ESP-Drone",
    category: "Robotics",
    tags: ["ESP32", "ESP-IDF", "IoT", "C/C++"],
    readTime: "2 min read",
    description: "An open-source drone project built around the Espressif ESP32 family, designed for control via mobile app or gamepad and ideal for STEAM education.",
    content: `### Overview
**ESP-Drone** is an open-source drone project built around the Espressif ESP32, ESP32-S2, and ESP32-S3 Wi-Fi chips. It is designed to be controlled through a mobile application or gamepad over a Wi-Fi connection. With its simple hardware layout and a clean, extensible codebase, this project is well-suited for STEAM education and hobbyist development. The main flight control code is ported from the popular **Crazyflie** open-source project.

### Key Technologies & Frameworks
- **Microcontroller Platform:** Espressif ESP32, ESP32-S2, ESP32-S3
- **Framework:** ESP-IDF (Espressif IoT Development Framework) release/v5.0
- **Communication Protocols:** Wi-Fi, ESP-NOW
- **Core Logic:** Ported from Crazyflie (GPL3.0)
- **Libraries:** Includes ESP-DSP library (by WhyEngineer) for digital signal processing

### Features

**1. Flight Modes**
- **Stabilize Mode:** Keeps the drone leveled during flight.
- **Height-hold Mode:** Maintains a consistent altitude (requires additional hardware extensions).
- **Position-hold Mode:** Maintains a consistent 3D position in the air (requires additional hardware extensions).

**2. Control Systems**
- **Mobile App Control:** Dedicated iOS and Android applications are available for piloting over Wi-Fi.
- **cfclient Support:** Compatible with the Crazyflie Python-based desktop client.
- **ESP-BOX3 Joystick Control:** Enables direct control using the ESP-BOX3 joystick through the low-latency ESP-NOW protocol.

### Code Architecture
- Uses a modular, component-based structure typical of ESP-IDF projects.
- Contains directories such as \`core/\` for flight algorithms, \`drivers/\` for hardware interfacing, \`lib/\` for DSP and other utilities, and \`platform/\`.

### Use Cases
- **STEAM Education:** A great hands-on platform for learning embedded systems, control theory, and IoT development.
- **Custom Drone Builds:** The extensible architecture allows developers to add custom sensors or navigation algorithms.`,
    date: "2026 (Personel interest)",
    image: "https://images.unsplash.com/photo-1579822989269-e70a1a0f5fc0?auto=format&fit=crop&w=800&h=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527453303861-1c3f25d978a3?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1629813257579-2efd02a55ea8?auto=format&fit=crop&w=600&h=400&q=80"
    ]
  },
  {
    id: "faculty-portfolio-uiux-design",
    title: "Freelance UI/UX & Academic Web Design",
    category: "Design & Development",
    tags: ["UI/UX Design", "React", "TypeScript", "Tailwind CSS", "Figma", "Client Work"],
    readTime: "3 min read",
    description: "Commercial web design and UI/UX engineering for college faculty research portals and custom personal portfolio platforms, delivered as paid freelance commissions.",
    content: `### Overview & Client Context
As a design-focused front-end engineer, I specialize in crafting bespoke, high-performance web platforms and intuitive user experiences. This project encapsulates my commercial freelance work designing and developing custom academic websites for college faculty members, alongside engineering my own advanced personal portfolio ecosystem. These engagements were delivered as paid client commissions, bridging the gap between elegant UI/UX design, accessible information architecture, and scalable web engineering.

### 1. College Faculty Academic Portfolios
College professors and academic researchers often struggle with outdated, clunky departmental web portals that fail to effectively showcase their research contributions, published papers, and pedagogical achievements.

**Key Design & Development Deliverables:**
- **Information Architecture:** Structured multi-tier hierarchies organizing research papers, journal publications, conference proceedings, patent filings, and teaching curriculum.
- **Academic Research Hub:** Integrated searchable publication lists, DOI citation links, and downloadable lecture notes and lab syllabi for university students.
- **Visual Dignity & Legibility:** Implemented clean, distraction-free typography with high contrast ratios, refined serif/sans-serif font pairings, and accessible color palettes suitable for institutional review.
- **Client Satisfaction & Monetization:** Delivered on paid milestones with 100% faculty client satisfaction, providing easy content management workflows so professors can update publications independently.

### 2. Personal Portfolio & Design System Architecture
Designed and built a state-of-the-art personal portfolio showcasing robotics, embedded systems, and full-stack software engineering.

**Core Architectural Features:**
- **Dark-Mode First Aesthetics:** Engineered an immersive dark UI incorporating subtle grid overlays, glassmorphic cards, and customizable ambient accent themes (Emerald, Amber, Violet, White).
- **Kinetic Micro-Interactions:** Utilized spring physics and smooth transitions for magnetic buttons, spotlight hover effects, and fluid tab switching without layout shifts.
- **Responsive Layout Engineering:** Crafted responsive Bento-grid layouts that dynamically reorganize for seamless browsing across mobile viewports, tablets, and ultrawide displays.

### 3. Freelance Workflow & Client Collaboration
- **Discovery & Requirements Gathering:** Conducted 1-on-1 discovery sessions with faculty clients to understand their academic branding goals, student engagement needs, and publication volume.
- **Figma Prototyping & Wireframing:** Built high-fidelity interactive Figma wireframes and design tokens, ensuring clients reviewed and approved the visual direction before implementation.
- **Production Engineering & QA:** Developed modular, type-safe components using React, TypeScript, and Tailwind CSS. Conducted rigorous cross-browser testing and mobile responsiveness audits.
- **SEO & Performance Optimization:** Configured metadata, Open Graph preview tags, and asset compression, consistently achieving 95+ Lighthouse performance scores with sub-second initial load times.

### Key Outcomes & Commercial Impact
- **Paid Client Deliverables:** Successfully completed and monetized multiple custom faculty profile projects with positive academic client feedback.
- **Enhanced Academic Reach:** Dramatically increased student engagement and research visibility for client professors.
- **Reusability & Speed:** Created a reusable, modular component design system that cut development time for subsequent web builds by over 40%.`,
    date: "2025 — 2026 (Client Work)",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&h=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80"
    ]
  },
  {
    id: "mouse-movement-extension",
    title: "Mouse Movement Extension",
    category: "Development",
    tags: ["Python", "Flask", "OpenCV", "MediaPipe"],
    readTime: "2 min read",
    description: "A computer vision-based web application that allows users to control their computer mouse cursor completely hands-free using hand gestures and eye tracking.",
    content: `### Overview
**Mouse Movement Extension** is a computer vision-based web application built with Flask that allows users to control their computer mouse cursor completely hands-free. It utilizes a regular webcam and AI-driven tracking to map human movements directly to screen coordinates.

### Key Technologies & Tech Stack
- **Backend / Server:** Python, Flask (Web framework)
- **Computer Vision & AI:** OpenCV, MediaPipe (Face and Hand Landmark Tracking)
- **System Automation:** PyAutoGUI (Mouse simulation)
- **Frontend:** HTML5, CSS3 (Glassmorphism & Cyberpunk-inspired styling), Vanilla JavaScript

### Features

**1. Multi-Modal Tracking**
- ✋ **Hand Gesture Tracking:** 
  - Index finger location controls the mouse cursor position.
  - Pinching thumb and index finger triggers a Left Click (and allows dragging).
  - Pinching thumb and middle finger triggers a Right Click (and dragging).
- 👁️ **Iris Tracking:**
  - Iris position controls the cursor on screen, mapping the eye gaze to screen coordinates.
  - Eye blinking mechanism triggers a Left Click (includes a cooldown to prevent double clicks).

**2. Live Configuration Dashboard**
- **Glassmorphic Web UI:** A sleek, modern control panel to manage the system.
- **Tracking Mode Toggle:** Seamlessly switch between Hand and Iris tracking on the fly.
- **Dynamic Smoothing Adjuster:** A "Pointer Dynamics" slider allows the user to balance cursor responsiveness (raw) vs. stability (smoothed out).
- **Live Feed Display:** Provides real-time video feedback of the tracking markers superimposed on the user.

### Project Structure Highlights
- \`server.py\`: Contains the core Flask server routes, MediaPipe integration logic, mathematical calculations for cursor mapping, and the PyAutoGUI state machine.
- \`templates/index.html\`: The HTML layout for the Control Dashboard.
- \`static/css/style.css\` & \`static/js/app.js\`: Frontend logic for UI interactions and API calls to control the backend engine.

### Use Cases
- Accessibility tool for users with motor impairments.
- Touchless control system for public kiosks or sterile environments.
- General ergonomic alternative to traditional hardware mice.`,
    date: "2025 ( 2nd sem micro project )",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400&q=80"
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "black-box-protocol-hackathon",
    title: "Black Box Protocol — Building an Automated Creator Intelligence Platform in 12 Hours",
    description: "Inside our 12-hour sprint at MITS Gwalior: building Black Box Protocol, an all-in-one automated AI analysis and trend intelligence app for content creators that advanced to the final stage.",
    content: `### Overview & Problem Statement
During a fast-paced 12-hour hackathon held at the **Madhav Institute of Technology and Science (MITS), Gwalior**, our team of four set out to tackle a major bottleneck in digital media: the fragmented workflow of modern content creators. 

Creators constantly juggle separate platforms to discover trending topics, evaluate engagement metrics, and audit video performance. Our mission was to engineer **Black Box Protocol**—a unified, fully automated web application that empowers creators to analyze their profiles, detect emerging viral trends, and receive instant, actionable AI-generated reviews on their content in one streamlined dashboard.

### The Team & Core Architecture
Our 4-member team operated in parallel execution across a 12-hour clock:
- **Frontend & UI/UX:** Rapidly designed a dark-mode, high-density dashboard with intuitive analytics cards, submission modals, and real-time scorecards.
- **Automation & AI Pipeline:** Built prompt parsing engines and automated review routines to deliver instant, structured feedback on creator profiles.
- **Analytics & Trend Scraper:** Integrated trend tracking algorithms to surface topic momentum and engagement opportunities.
- **Version Control & Collaboration:** Managed our modular codebase on GitHub ([Repository Link](https://github.com/Aryanpawaiyaa/Black-Box-Protocol-Hackathon-..git)).

### Key Features Built
1. **Automated Content Critique:** Instant AI review evaluating hooks, pacing, audience retention potential, and copy optimization.
2. **Real-Time Trend Radar:** Surfacing niche-specific viral vectors and high-growth hashtags.
3. **Creator Profile Diagnostic:** Comprehensive audit scoring engagement ratios, consistency, and growth areas.
4. **Actionable Suggestions Engine:** Direct step-by-step guidance on script modifications and visual hooks to maximize reach.

### The 12-Hour Sprint & Challenges
With only 12 hours on the clock, time management was ruthless:
- Rapidly resolved API rate limits and response formatting to ensure zero latency during live evaluations.
- Streamlined state management so AI review reports rendered seamlessly without blocking UI threads.
- Iterated from blank repository to a fully functional interactive prototype in under 10 hours, dedicating the final 2 hours to pitch rehearsal and edge-case testing.

### Final Stage & Takeaways
Our project was **selected for the final judging stage**, presenting in the last evaluation round before industry mentors and faculty judges. 

Although we didn't take the top podium spot, pushing a complete automation ecosystem from concept to a working live demo in just 12 hours was an incredible milestone. It reinforced the power of rapid prototyping, agile team alignment, and building real-world software under extreme constraints.`,
    date: "May 2026",
    readTime: "3 min read",
    category: "Hackathons",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "my-first-hackathon-experience",
    title: "My First Hackathon Experience — From Idea to Prototype",
    description: "An immersive look behind the scenes of my first major 48-hour build at the Smart India Hackathon (SIH) during my 1st year and 1st semester: team formation, brainstorming, 3 AM debugging, and pitching to industry judges.",
    content: `### Introduction
It started with a mixture of nervousness and sheer curiosity. When sign-ups opened for the Smart India Hackathon (SIH) during my 1st year and 1st semester of college, my immediate instinct was to hesitate. I questioned whether my skills were ready. But I clicked "Register" anyway—a decision that would completely reshape my approach to product engineering.

### Background
Smart India Hackathon (SIH) is a prestigious national-level hackathon charged with high-frequency creative friction. Over 200 developers, designers, and systems architects packed into our regional nodal center, surrounded by monitors, microcontrollers, and coffee thermoses. The theme we selected was ambitious: "Interoperable Systems for Smart Habitats." We had exactly 36 to 48 hours to design, develop, and present a working prototype.

### The Team
A hackathon is as much about people as it is about software. Within the first hour, I teamed up with three incredible peers: a hardware engineer with deep microcontroller expertise, a designer who could map user psychology in her sleep, and a backend developer who specialized in robust real-time synchronization. Together, we had the perfect cross-disciplinary blend.

### Brainstorming & The Problem
We spent our first six hours doing nothing but arguing, sketching, and refining. We wanted to tackle a real-world friction point: the fragmentation of environmental telemetry and haptic controls in shared technical workspaces. People shouldn't have to navigate seven different proprietary dashboards just to manage local illumination, fan-curves, and workspace occupancy indicators. We framed our problem statement: "How might we unify sensory inputs and physical actuators into a single, zero-friction interface for collaborative workspaces?"

### Our Approach
Our designer sketched clean wireframes prioritizing accessibility, dark-mode ergonomics, and tight touch targets. Meanwhile, we mapped out a fast, lightweight tech stack:
1. **Frontend**: React and Tailwind CSS with Motion for spring physics haptics.
2. **Backend**: Express.js server with WebSockets for instantaneous, low-overhead event distribution.
3. **Hardware Simulation**: ESP32 microcontroller acting as a physical telemetry beacon, publishing data via MQTT.

### The Implementation
The build was an absolute flow state. I was responsible for crafting the interface system and connecting it to the real-time sockets. We focused on extreme visual precision—using JetBrains Mono for clean data densities and designing customized SVG trajectory charts that updated smoothly with every sensory pulse.

### Sleepless Nights & Challenges
By 3 AM on night two, the adrenaline had faded, replaced by cold exhaustion. We ran into a massive block: our WebSocket connection kept resetting every time the ESP32 entered deep sleep mode, causing severe layout shifts in our React dashboard. We were stuck in a loop of late-night debugging and git merge conflicts.

### The Solution
After two hours of tracing logs, we resolved the issue by introducing a micro-buffered, server-authoritative state cache. Instead of binding the frontend directly to raw physical connection cycles, the server acted as a persistent telemetry twin, ensuring the frontend never suffered layout jitter, even during hardware sleep cycles.

### Presentation & Judging
With 30 minutes left, we polished our pitch slide deck and recorded our live demo. Presenting to the panel of veteran engineering judges was exhilarating. We had exactly three minutes to demonstrate our prototype, explain our architectural decisions, and prove market viability. Seeing the ESP32 light up in response to our interface's real-time sliders during the live demo was an unforgettable feeling.

### Lessons Learned
The most valuable skill I learned wasn't a syntax pattern or a design tool—it was **ruthless scope-prioritization**. In a 48-hour window, you cannot build everything. You must identify the "magic core" of your product, build that with absolute polish, and let go of the secondary noise.

### Conclusion
We walked away from the event with a shared sense of pride, some valuable mentor feedback, and a deeper appreciation for rapid, multi-disciplinary prototyping. Hackathons strip away the artificial boundaries between design, hardware, and code, proving that when form and function collaborate from hour one, you can build anything.`,
    date: "July 2, 2026",
    readTime: "3 min read",
    category: "Hackathons",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "HackIgnite-drone-hackathon",
    title: "HackIgnite Hackathon — Building My First Quadcopter Drone from Scratch",
    description: "Inside the HackIgnite Hackathon: How my team of 6 built an X-configuration quadcopter drone from raw components, pushed through an intensive 8 AM to 9 PM sprint, and reached the top finalist stage.",
    content: `### Overview & Event Background
In December 2025 (during my 2nd semester of college), I participated in the **HackIgnite Hackathon**. It was an intense, high-energy event that marked a monumental milestone in my engineering journey: designing and constructing my very first custom UAV drone.

### Multidisciplinary Teamwork
A total of six students from various engineering departments came together to form our team. Combining expertise from electronics, mechanical design, and software systems allowed us to divide and conquer complex hardware assembly and flight control configuration under strict event constraints.

### Hardware Architecture & Specifications
We engineered a custom **Quadcopter Drone in an X-Configuration** using affordable, carefully sourced hardware components:
- **Frame**: A light ₹600 plastic quadcopter frame in X-configuration.
- **Propulsion**: 4 high-RPM brushless DC motors (~₹450 per motor).
- **Speed Controllers**: 4 Electronic Speed Controllers (ESCs) for precise motor synchronization.
- **Flight Controller**: A DJI Flight Computer integrated with a Battery Management System (BMS) for flight stability and telemetry monitoring.
- **Remote Transmitter**: An 8-to-9 channel FlySky transmitter remote control system.

### The Intensive 8 AM to 9 PM Build Sprint
The hackathon schedule was demanding. From 8:00 AM in the morning until 9:00 PM at night, our team worked relentlessly at the venue:
1. **Physical Assembly & Soldering**: Mounting the brushless motors to the X-frame arms and wiring the ESCs to the power distribution board.
2. **Flight Control Calibration**: Tuning the gyro parameters, accelerometer axes, and transmitter channel mappings on the DJI flight computer.
3. **Troubleshooting & Testing**: Balancing prop thrust ratios and diagnosing ESC signal communication over hours of intense hands-on iteration.

### Finalist Presentation & Key Reflections
Our hard work paid off when we **advanced to the top finalist evaluation stage**! We presented our drone, demonstrated the hardware assembly, and defended our engineering choices before the judging panel right up until the final round of the competition.

While the drone didn't complete a full untethered hover during the tight final flight test window (preventing a podium win), the experience was immensely rewarding. HackIgnite proved to be the ultimate catalyst—igniting my passion for robotics, embedded systems, and autonomous aerial vehicles.`,
    date: "December 2025",
    readTime: "3 min read",
    category: "Hackathons",
    coverImage: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "micro-interactions-and-motion",
    title: "Crafting Micro-interactions with Spring Physics",
    description: "Ditch simple ease-in-out CSS animations. Learn how to program high-performance physical acceleration curves that mimic real-world kinetic inertia.",
    content: `### The Problem with CSS Transition Curves
Standard CSS transitions are based on cubic-bezier curves (like \`ease-in-out\`). While functional, these curves are strictly deterministic based on time. A button slide takes exactly 300ms, accelerating and decelerating along an artificial path.

In the real world, nothing moves like this. Objects have mass, tension, and kinetic friction. 

### Spring Physics to the Rescue
By replacing time-based curves with spring physics (tension, friction, mass), we create interactions that respond dynamically:
- **Velocity Preservation**: If a user drags an item and releases it, the speed of their finger is preserved in the spring's launch momentum.
- **No Jerky Stops**: If an animation is interrupted (e.g. hovering off a button before it finishes expanding), a spring transition seamlessly changes direction without an awkward skip.

### How to Implement in React
With libraries like \`motion\` (formerly Framer Motion), you can easily declare physical physics:

\`\`\`typescript
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
/>
\`\`\`

Here:
- **Stiffness (Tension)**: Controls the bounce force. Higher values make it snappier.
- **Damping (Friction)**: Opposes the motion. Lower values cause more oscillation; higher values bring it to a gradual halt.

### Three Rules of Great UI Motion
1. **Keep it Subdued**: Large-scale layout shifts should be fast (<200ms) and highly dampened.
2. **Add Haptic Feedbacks**: Small buttons can afford a bit more stiffness to feel springy and responsive to the cursor.
3. **Respect user settings**: Always query \`prefers-reduced-motion\` and disable animations gracefully for users who request it.`,
    date: "May 14, 2026",
    readTime: "2 min read",
    category: "Tutorials",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&h=500&q=80"
  }
];

export const galleryItems: GalleryItem[] = [];

export const newsletter: Newsletter = {
  title: "Systems & Aesthetics",
  description: "A monthly, highly condensed brief detailing design token architectures, spring physics parameters, and front-end craftsmanship. No spam.",
  placeholder: "Your email address",
  successMessage: "Subscription request received. Welcome to the loop!"
};
