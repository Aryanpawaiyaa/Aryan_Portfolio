import avatar from "../assets/images/profile/avatar.webp";
import { Personal, SocialLink, WorkExperience, Education, SkillGroup, Project, BlogPost, GalleryItem, Newsletter } from "../types";

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
    role: "Technical Member",
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
    ]
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
    id: "space-telemetry-dashboard",
    title: "Orion Deep-Space Telemetry Terminal",
    category: "Development",
    tags: ["React", "D3.js", "WebSockets"],
    description: "An analytical operations console displaying real-time orbital trajectory physics, power grid vectors, and environmental telemetry indicators in a terminal environment.",
    content: `### Objective
Space missions require extremely dense, reliable, and instantaneous feedback. The objective was to replace a static monitoring console with an dynamic, web-based React dashboard capable of rendering up to 60 telemetry points per second.

### Key Contributions
- **Interactive Trajectory Visualizer**: Created a custom-rendered D3.js canvas system reflecting gravity well trajectories and fuel/burn ratios.
- **Micro-Buffered State Manager**: Avoided memory leaks by introducing a micro-buffered React state queue, keeping CPU usage below 5% even under rapid socket emissions.
- **Aesthetic Precision**: Applied dark slate layout grids with warm amber accents, prioritizing high text-background contrast and comfortable night-vision metrics.

### Results
- Handled up to **10,000 active telemetry streams** without frame drop.
- Zero layout drift on continuous use periods exceeding 48 hours.
- Drastically improved situational response time by highlighting anomaly indicators using pulsing motion cues.`,
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&h=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&h=400&q=80"
    ]
  },
  {
    id: "mouse-movement-extension",
    title: "Mouse Movement Extension",
    category: "Development",
    tags: ["Python", "Flask", "OpenCV", "MediaPipe"],
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
    readTime: "7 min read",
    category: "Hackathons",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "future-of-design-engineering",
    title: "The Future of Design Engineering",
    description: "Why design systems and product engineering are merging into a single discipline, and how to position yourself at the interface of form and function.",
    content: `We are witnessing the final decay of the traditional handoff. For years, the industry operated like a relay race: a designer creates a layout, exports a static document (or Figma links), and passes it to an engineer who recreates it from scratch. 

This process is inherently prone to visual drift, double efforts, and critical misunderstandings. 

### Enter the Design Engineer
A **Design Engineer** doesn't just draw rectangles or write CSS. They write cohesive software systems that represent visual ideas. Instead of handing off static assets, they build **living primitives**.

These primitives contain:
1. **Visual Tokens**: The pure, cross-platform definition of color, spacing, typography, and elevations.
2. **Interactive Primitives**: Complete accessibility models, focus behaviors, and animation curves.
3. **Responsive Boundaries**: Layout structures that natively adapt to anything from a 320px mobile interface to a 3440px ultrawide monitor.

### The Unified Workflow
By managing layout tokens directly in code, designers can work inside Figma using token-linked libraries that push modifications straight to the production repository via pull requests. 

When you write components as a unified layout, you remove the artificial friction between layout and implementation. Form and function merge. 

### How to Prepare
- **For Designers**: Learn the fundamentals of flexbox, grid, CSS variables, and basic component lifecycles. Think in systems, not single-screen layouts.
- **For Developers**: Learn the weight of typography, the role of deliberate whitespace, and how physical acceleration shapes animation timing. 

The future is system-driven, and it belongs to those who can build across the divide.`,
    date: "June 25, 2026",
    readTime: "4 min read",
    category: "Technical Articles",
    coverImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&h=500&q=80"
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
    readTime: "6 min read",
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
