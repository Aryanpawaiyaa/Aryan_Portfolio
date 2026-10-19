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
    role: "Technical Coordinator",
    location: "Chennai, TN (Hybrid)",
    period: "2025 — Present",
    description: [
      "Collaborated with multidisciplinary teams on robotics and embedded systems projects.",
      "Participated in technical workshops, hands-on development, and research-oriented activities.",
      "Contributed to problem-solving, prototyping, and testing of robotic systems.",
      "Gained practical experience in robotics software, hardware integration, and engineering design."
    ],
    skills: [
      "Event Leadership",
      "Autonomous Mobile Robots (AMR)",
      "ROS 2 Jazzy",
      "Gazebo Harmonic",
      "C++",
      "Python",
      "Colcon Workspace",
      "Path Planning & Navigation",
      "Dynamic Obstacle Avoidance",
      "Safety Critical Nodes",
      "Robotics",
      "Embedded Systems",
      "Technical Documentation"
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
    campName: "Advanced Leadership Camp (ALC)",
    badge: "National Leadership",
    location: "Lakholi, Raipur, Chhattisgarh",
    period: "2025",
    headline: "National-Level Leadership Conditioning, Crisis Management & Tactical Decisions",
    specialHighlight: "Selected for National-Level Advanced Leadership Conditioning under Indian Army Officers",
    description: [
      "Selected for National-level advanced leadership conditioning focused on crisis management, group dynamics, and decision-making under intense pressure.",
      "Participated in strategic problem-solving simulations, officer-like qualities (OLQ) development sessions by Army Officers, and public speaking evaluations.",
      "Led multi-directorate teams in competitive outdoor leadership tasks, tactical group exercises, and cross-cultural integration activities."
    ],
    skills: [
      "Crisis Management",
      "Strategic Decision Making",
      "Officer-Like Qualities (OLQ)",
      "Multi-Directorate Leadership",
      "Group Dynamics",
      "Public Speaking",
      "Tactical Exercises"
    ]
  },
  {
    campName: "Army Attachment Camp (AAC)",
    badge: "Indian Army Attachment",
    location: "Babina Military Station, Jhansi",
    period: "Feb 2026",
    headline: "High-Discipline Military Immersion & Armored Warfare Tactical Exposure",
    specialHighlight: "Main Battle Tank (MBT) Tactical Ride & High-Security Military Logistics Depot Overhauls",
    description: [
      "Completed high-discipline military training attached directly to active Indian Army combat units at Babina Army Cantt.",
      "Gained hands-on tactical exposure to armored warfare, including turret control and dynamic field maneuvers aboard an active Main Battle Tank (MBT).",
      "Inspected high-security military logistics depots and heavy vehicle warehouses, learning combat vehicle maintenance systems, technical overhauls, and supply chain management.",
      "Trained in live weapon handling protocols, firing range safety procedures, combat obstacle courses, and defensive perimeter tactics under regular army instructors."
    ],
    skills: [
      "Armored Warfare Exposure",
      "Main Battle Tank (MBT)",
      "Weapon Handling Protocols",
      "Military Logistics & Depots",
      "Firing Range Procedures",
      "Perimeter Tactics",
      "Obstacle Navigation"
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
    id: "navigrid-adaptive-path-challenge",
    title: "NaviGrid: The Adaptive Path Challenge",
    category: "Robotics & Simulation",
    tags: ["ROS 2 Jazzy", "Gazebo Harmonic", "AMR Navigation", "C++", "Python", "Colcon", "Path Planning"],
    readTime: "4 min read",
    description: "Led and engineered an autonomous mobile robot (AMR) simulation gauntlet in Gazebo Harmonic & ROS 2 Jazzy for 427 registered participants with Yantra Robotics Society, IIT Madras.",
    content: `### Executive Summary & Event Leadership
As **Event Head**, I led the conception, engineering, and execution of **NaviGrid: The Adaptive Path Challenge** alongside the **Yantra - Robotics Society IITM BS** and the **IIT Madras BS Degree Program**. Building this high-stakes technical platform from the ground up, we welcomed an overwhelming response of **427 registered solo participants** competing for a competitive prize pool (₹4,000 for 1st, ₹3,000 for 2nd, and ₹1,500 for 3rd place).

NaviGrid pushed competitors through a rigorous multi-stage engineering gauntlet spanning September 24th to September 27th, 2026. The competition evaluated autonomous mobile robot (AMR) navigation within a custom-built, constrained **Gazebo Harmonic** environment utilizing a standard **Colcon workspace**, **C++ / Python**, and **ROS 2 Jazzy**.

### Architectural & Simulation Overview
- **Simulation Engine:** Gazebo Harmonic with high-fidelity physics, ray-traced sensor plugins, and laser scan simulation.
- **Middleware & Ecosystem:** ROS 2 Jazzy, standard Colcon build workspaces, RViz 2 telemetry mapping.
- **Language Nodes:** Modern C++ (performance-critical control nodes) and Python (rapid prototyping and automated test harnesses).
- **Robot Platform:** Differential-drive Autonomous Mobile Robot (AMR) equipped with 2D/3D LiDAR, wheel odometry, and IMU sensor suites.
- **Anti-Vibe Coding Policy:** Enforced strict algorithmic determinism, clean logic pipelines, and real-time computation constraints rather than fragile heuristic hacks.

### Key Simulation Challenges Designed for Competitors

**1. Dual-Path Topology & Elevation Costing**
- Competitors faced a bifurcated environment requiring intelligent path selection.
- **Incline Ramp Path:** A steep 3D incline ramp testing elevation terrain cost calculation against motor torque limits.
- **Corridor Path:** A longer, flat zig-zag corridor requiring rapid turn execution and tight clearance navigation.
- Participants had to dynamically balance elevation energy expenditure against travel distance.

**2. Dynamic Obstacles & Reactive Replanning**
- The arena featured moving pedestrians and cross-traffic AMRs simulated in real time.
- Standard static global path planners failed; participants engineered reactive local trajectory planners capable of avoiding dynamic collisions at run-time.

**3. Safety Overrides & Emergency Stop System**
- Safety in autonomous robotics is paramount. Competitors were mandated to develop a dedicated safety watchdog node.
- If linear or angular velocity crossed critical safety thresholds or if dynamic obstacles breached the safety bubble, the node triggered deterministic emergency stops, overriding navigation goals.

**4. Multi-Stage Evaluation Pipeline**
- **Stage 1 (Theoretical Mastery):** Comprehensive ROS 2 architectural quiz testing node lifecycles, QoS policies, and publisher/subscriber pipelines.
- **Stage 2 (Algorithmic Logic Test):** Real-time problem-solving evaluating mathematical planning and data structures.
- **Stage 3 (Full Simulation Gauntlet):** Autonomous deployment through the NaviGrid arena under unpredictable obstacle spawns.

### Global Industry Mentors & Judging Panel
We were honored to collaborate with world-class robotics industry leaders who elevated the competition for every participant:
- **Princy Mariam Jacob:** Graduate Control Systems Software Engineer at **UKAEA** (Oxford, UK), who kicked off the event with an inspiring masterclass on control systems.
- **Finny Varghese:** Lead Robotics Engineer and Co-founder (Edinburgh, UK), who brought invaluable industry expertise as our official Judge.
- **Anirban Mandal:** Event Co-Head, who partnered closely with me across technical problem design, platform infrastructure, and flawless event execution.

### Official Recognition & Open-Source Artifacts
In recognition of building and heading this event, I was awarded the official **Certificate of Recognition** by Ms. Kothainayaki SK (Head, Student Affairs, IIT Madras BS Degree Program).

All simulation world models, robot URDF/SDF assets, launch files, and starter codebases are open-sourced on GitHub: [https://github.com/Aryanpawaiyaa/navigrid_ws](https://github.com/Aryanpawaiyaa/navigrid_ws).`,
    date: "Sept 2026 (Event Head)",
    image: "/images/certifications/navigrid-simulation-banner.jpg",
    link: "https://github.com/Aryanpawaiyaa/navigrid_ws",
    gallery: [
      "/images/certifications/navigrid-certificate.png",
      "/images/certifications/navigrid-simulation-banner.jpg"
    ]
  },
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
    id: "pcb-design-engineering",
    title: "Advanced PCB Design & Engineering",
    category: "Hardware Engineering",
    tags: ["KiCad 10.0", "Manual Routing", "Programmatic PCB", "Power Distribution"],
    readTime: "2 min read",
    description: "Intermediate-level PCB designing featuring complex routing, custom power distribution boards, and programmatically generated layouts using KiCad 10.0.",
    content: `### Overview
As an embedded systems engineer, I have developed intermediate skills in PCB designing, bridging the gap between hardware prototyping and production-ready boards. My workflow heavily utilizes **KiCad 10.0**.

### Design Methodology
- **Manual Routing:** I excel at manual trace routing for complex mixed-signal boards, ensuring signal integrity, proper grounding, and efficient component placement.
- **Programmatic Design (Coding Way):** Beyond manual drafting, I leverage KiCad's scripting and coding capabilities to programmatically generate PCB layouts, automate repetitive tasks, and design complex geometric board patterns.

### Key Projects & Capabilities
- **Complex Custom PCBs:** Designed customized PCBs tailored for highly specific tasks that cannot be solved using off-the-shelf market solutions.
- **Power Distribution Boards (PDBs):** Created reliable basic and intermediate PDBs for drones and robotic systems, safely managing high current draws and multiple voltage regulators.

### Image Gallery
*(Empty boxes reserved below for future PCB renders and photos)*
`,
    date: "2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&h=400&q=80"
    ]
  },
  {
    id: "cad-3d-modeling-robotics",
    title: "3D Modeling & CAD Design for Robotics",
    category: "Hardware Engineering",
    tags: ["Fusion 360", "AutoCAD", "3D Printing", "Robotics", "Rapid Prototyping"],
    readTime: "4 min read",
    description: "Narrative journey of designing custom robotic parts, drone chassis, and toy cars using Fusion 360 and AutoCAD, brought to life through 3D printing.",
    content: `### Introduction: The Shift from Screen to Physical Reality
My journey into 3D modeling and Computer-Aided Design (CAD) began out of sheer necessity. While working on various robotics and embedded systems projects, I constantly ran into the same roadblock: off-the-shelf parts never quite fit the specific dimensions or functional requirements of my custom builds. I realized that if I wanted to build truly integrated systems, I needed the ability to fabricate my own custom hardware. That realization pushed me to master tools like **Fusion 360** and **AutoCAD**.

### Mastering the Tools: Fusion 360 & AutoCAD
I started by learning the core principles of parametric modeling. In **Fusion 360**, I discovered the power of timeline-based design, allowing me to iterate on complex geometries without breaking the entire model. I learned how to sketch precisely, extrude with purpose, and apply constraints that mirrored real-world physics. **AutoCAD** became my go-to for precise 2D drafting and layout planning before translating concepts into three dimensions.

### Designing for Drones and Robotics
One of my first major challenges was designing parts for custom drones. A drone chassis needs to be incredibly lightweight yet rigid enough to withstand the forces of brushless motors and inevitable hard landings. I spent hours in Fusion 360 running stress simulations and hollowing out non-critical sections of the frame. 

I designed custom motor mounts, aerodynamic canopies to protect sensitive flight controllers, and specialized landing gear. Beyond drones, I expanded into robotics, drafting structural brackets, sensor enclosures, and custom gears. Each design required meticulous attention to tolerances, ensuring that moving parts meshed perfectly without friction or play.

### The Magic of 3D Printing
Designing a part on a screen is deeply satisfying, but holding that part in your hands a few hours later is pure magic. I integrated a **3D printer** directly into my workflow, turning my digital CAD files into physical reality. 

Learning to design for 3D printing (DFM - Design for Manufacturing) was a steep but rewarding learning curve. I had to understand how filament behaves, how to design without needing excessive support structures, and how to orient parts on the print bed for maximum structural strength. I learned to factor in shrinkage and layer adhesion, iterating rapidly—sometimes going from a rough sketch to a functional, printed prototype in a single afternoon.

### Personal Projects: Toy Cars and Micro Drones
While a lot of my CAD work was for serious robotics projects, I also applied these skills to personal passion projects. I designed entirely custom toy cars, meticulously modeling the chassis, wheels, and snap-fit body panels. I also engineered micro toy drones, pushing the limits of my 3D printer's resolution to create tiny, ultra-lightweight propeller guards and battery clips.

These personal projects were my sandbox. They allowed me to experiment with organic shapes, complex surface modeling, and creative mechanical assemblies without the strict constraints of a formal engineering project.

### Conclusion: The Full-Stack Hardware Engineer
Today, CAD design and 3D printing are fundamental pillars of my skill set. They allow me to be a truly "full-stack" hardware engineer—someone who can write the firmware, design the PCB, and then draft and manufacture the physical enclosure that holds it all together. From the first digital sketch to the final printed prototype, the ability to manifest ideas into the physical world remains one of the most rewarding aspects of my engineering journey.`,
    date: "2026 ",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&h=500&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&h=400&q=80",
      "https://images.unsplash.com/photo-1517055729445-fa7d27394b48?auto=format&fit=crop&w=600&h=400&q=80"
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
Designed and built a custom personal portfolio showcasing robotics, embedded systems, and full-stack software engineering.

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
    id: "navigrid-adaptive-path-challenge-event-head",
    title: "Heading NaviGrid: The Adaptive Path Challenge — 427 Participants, ROS 2 Jazzy & Gazebo Harmonic",
    description: "Reflections as Event Head of NaviGrid alongside Yantra Robotics Society (IIT Madras BS) — architecting dual-path AMR simulation topologies, dynamic obstacle gauntlets, and global industry judging.",
    content: `### Leading NaviGrid: The Adaptive Path Challenge
Organizing and executing **NaviGrid: The Adaptive Path Challenge** as **Event Head** alongside the **Yantra - Robotics Society IITM BS** has been one of the most rewarding leadership and systems-engineering milestones of my journey. 

When we first pitched the concept, our vision was clear: move beyond simple line-following or generic coding rounds, and plunge students directly into realistic Autonomous Mobile Robot (AMR) navigation problems faced in modern industrial automation.

The community response was overwhelming: **427 registered participants** stepped up for this rigorous solo-participation competition, competing for a ₹8,500 prize pool (₹4,000 for 1st, ₹3,000 for 2nd, and ₹1,500 for 3rd place).

### Designing the Simulation Platform from the Ground Up
Building the competition platform required end-to-end systems architecture:
- **Gazebo Harmonic & ROS 2 Jazzy:** Migrated away from deprecated ROS distributions to bring participants the latest industry-standard tooling.
- **Colcon Workspace Setup:** Provided reproducible build artifacts and containerized development setups ensuring participants on varying machines experienced deterministic physics and sensor feeds.
- **Dual-Path Arena Topology:** Engineered a custom 3D world featuring a challenging incline ramp with elevation terrain penalties alongside a longer, flat zig-zag corridor. Participants had to program their global path planners to evaluate cost vs. safety in real time.
- **Dynamic Obstacles:** Implemented moving pedestrian models and cross-traffic AMRs to evaluate reactive local trajectory replanning.
- **Watchdog Safety Node:** Required participants to write emergency stop logic responding instantly to velocity threshold violations.

### High Stakes & Strict Evaluation
To ensure engineering excellence, we implemented a strict "anti-vibe coding" policy. Submissions had to pass:
1. A foundational ROS 2 architecture and node-lifecycle quiz.
2. An algorithmic problem-solving test.
3. The live Gazebo simulation benchmark evaluated against path efficiency, collision avoidance, and safety override compliance.

### Global Mentorship & Collaboration
None of this would have reached this level of polish without our phenomenal team and guests:
- **Princy Mariam Jacob** (Graduate Control Systems Software Engineer at UKAEA, Oxford, UK) kicked off NaviGrid with an inspiring guest session on control systems.
- **Finny Varghese** (Lead Robotics Engineer & Co-founder, Edinburgh, UK) joined us as our official Judge, holding participant code to real industrial robotics standards.
- **Anirban Mandal**, my Event Co-Head, worked shoulder-to-shoulder with me to tackle every technical hurdle, logistics challenge, and live participant support query.
- A huge shoutout to the entire **Yantra Robotics Society** team for the endless hours behind the scenes!

### Reflections & Official Recognition
Seeing 427 students grapple with costmaps, odometry drift, and laser scan subscriber queues proved that simulation-based robotics competitions are the most effective bridge between classroom theory and real-world autonomy. 

I was deeply honored to receive an official **Certificate of Recognition** from Ms. Kothainayaki SK (Head, Student Affairs, IIT Madras BS Degree Program) acknowledging my contribution as Event Head.

All technical documentation, world models, and competition files are published on GitHub: [https://github.com/Aryanpawaiyaa/navigrid_ws](https://github.com/Aryanpawaiyaa/navigrid_ws).`,
    date: "September 2026",
    readTime: "4 min read",
    category: "Competitions",
    coverImage: "/images/certifications/navigrid-simulation-banner.jpg"
  },
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
- Streamlined state management so AI review reports rendered seamlessly without BLOCKING UI threads.
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
    id: "suas-2026-competition-trinetra",
    title: "SUAS 2026 USA — Building an Autonomous AI Drone with Team Trinetra",
    description: "An inside look at our journey to the international SUAS 2026 competition in Oklahoma, building a fully AI-automated self-navigating drone and representing India on the global stage.",
    content: `### Overview & Event Background
As an official member of **Team Trinetra** (which operates under the DroneX Club of MITS Gwalior), I had the incredible opportunity to participate in the prestigious **Student Unmanned Aerial Systems (SUAS) 2026** competition. Held internationally in Tulsa, Oklahoma, USA from September 14 to 17, 2026, SUAS is one of the world's most demanding aerial robotics competitions.

### The Mission: AI-Automated Self-Navigating Drone
The core challenge of SUAS is not just to build a drone, but to engineer an intelligent system capable of autonomous flight. We built a **fully AI-automated, self-navigating drone**.

Every single team member actively participated, pooling our diverse skills in embedded systems, mechanical design, computer vision, and flight control. The drone had to navigate complex waypoints without human intervention, avoid obstacles dynamically, and execute precision tasks using advanced AI and computer vision algorithms. I am immensely proud of the collective effort; it truly was a massive undertaking where every person played a critical role.

### International Stage & India's Representation
Participating in an international competition of this scale is a massive achievement. Out of all the global entries, **only two teams from India** are participating in SUAS 2026:
- **Team Trinetra (MITS Gwalior):** Currently ranked **17th** on the flight order ranking!
- **IIT Madras:** Ranked **31st**.

Competing at this level, and seeing our ranking up against some of the top technical institutions in the world, is an incredibly proud moment for all of us.

### Funding & Industry Support
Building a competition-grade autonomous drone and handling international logistics requires significant resources. We are immensely grateful to **Vyom Drones Private Limited**, a pioneering startup based out of Gwalior. Under the leadership of their CEO, **Santosh Sharma**, Vyom Drones completely funded our project expenses. Their belief in our vision and their financial support were instrumental in turning our designs into reality and getting us to Oklahoma.

### Key Takeaways
Building for SUAS tested our engineering mettle under strict deadlines and complex international rules. It pushed our AI, robotics, and teamwork skills to the absolute limit. It was not just a competition, but a masterclass in autonomous systems engineering.`,
    date: "September 2026",
    readTime: "4 min read",
    category: "Competitions",
    coverImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "mov-filmmaking-HAPPENING",
    title: "Beyond Engineering: Winning the .MOV Filmmaking Competition",
    description: "Stepping outside the technical domain to direct, shoot, and act in a 22-minute short film, 'HAPPENING', which secured 1st position in a university-level movie-making competition.",
    content: `### Overview & The Creative Shift
While my primary domain lies in robotics and embedded systems, I firmly believe that engineering and storytelling share the same creative DNA. Recently, I collaborated with Nishant Singh Kushwah on the **.MOV Movie Making Competition** at the university level. It was an opportunity to step entirely out of my comfort zone and dive into the fast-paced world of cinematography, direction, and acting.

### The Challenge: A 4-Day Sprint
The competition format was incredibly demanding: we had exactly four days to conceptualize, shoot, act, and edit a complete short film. 

Our team consisted of six students pulled from various technical departments, including Computer Science (CST), Information Technology (IT), and Electronics (ECE). Managing a multidisciplinary team under a tight deadline was remarkably similar to managing a hackathon, but instead of compiling code, we were framing shots and managing lighting. We successfully produced a 22-minute short film titled **HAPPENING**.

### The Victory
The intense collaboration paid off beautifully. *HAPPENING* secured the **1st Position** in the university-level competition. 

Working in this entirely new field—handling cameras, coordinating actor movements, and editing timelines—provided a refreshing perspective on project management and creative execution. The precision required to edit video matched the rigor of debugging a software project, but with an entirely different creative output.

### Continuing the Journey
Following the success of *HAPPENING*, our team to work on another short film project titled **BLOCKING**. Both projects have been published on Instagram (where I am tagged), showcasing our journey from engineering students to amateur filmmakers. 

Stepping out of the engineering lab and looking through a camera lens was an invaluable experience. It reinforced the importance of cross-disciplinary collaboration and proved that the problem-solving skills learned in engineering can be successfully applied to any creative medium.`,
    date: "2026",
    readTime: "3 min read",
    category: "Creative",
    coverImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&h=500&q=80"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-navigrid-cert",
    title: "NaviGrid Event Head — Official Certificate of Recognition",
    category: "Academic & Achievements",
    image: "/images/certifications/navigrid-certificate.png",
    description: "Official Certificate of Recognition awarded by the Head of Student Affairs, IIT Madras BS Degree Program, recognizing invaluable contribution and leadership as Event Head for NaviGrid: The Adaptive Path Challenge.",
    date: "Sept 2026"
  },
  {
    id: "gal-navigrid-sim",
    title: "NaviGrid AMR Autonomous Simulation Gauntlet",
    category: "Robotics & Hardware",
    image: "/images/gallery/navigrid-simulation-banner.jpg",
    description: "High-fidelity Gazebo Harmonic simulation arena featuring dual-path topology, 3D incline ramp, LiDAR sensor scans, and dynamic pedestrian obstacle avoidance nodes.",
    date: "Sept 2026"
  },
  {
    id: "gal-vid-1",
    title: "Flight Dynamics & Prototype Telemetry Demo",
    category: "Robotics & Hardware",
    image: "/images/gallery/drone-telemetry-demo-video.mp4",
    video: "/images/gallery/drone-telemetry-demo-video.mp4",
    type: "video",
    description: "Live prototype demonstration capturing real-time actuator testing, flight dynamics, and payload control verification.",
    date: "Jun 2026"
  },
  {
    id: "gal-photo-1",
    title: "Field Deployment & Tactical Scouting",
    category: "Field & Exploration",
    image: "/images/gallery/tactical-field-scouting.webp",
    description: "Ground-level telemetry review and tactical site inspection during outdoor environmental testing drills.",
    date: "Jun 2026"
  },
  {
    id: "gal-photo-2",
    title: "Embedded Workbench & Circuit Assembly",
    category: "Lab & Prototyping",
    image: "/images/gallery/embedded-circuit-assembly.webp",
    description: "Microcontroller circuit assembly, logic analyzer probing, and multi-sensor bus integration.",
    date: "Jun 2026"
  },
  {
    id: "gal-photo-3",
    title: "Sensor Bus Calibration & Telemetry Probe",
    category: "Lab & Prototyping",
    image: "/images/gallery/sensor-calibration-workbench.webp",
    description: "Oscilloscope diagnostics and serial signal analysis for low-latency feedback control loops.",
    date: "Jun 2026"
  },
  {
    id: "gal-photo-4",
    title: "High-Current Power Distribution Unit",
    category: "Lab & Prototyping",
    image: "/images/gallery/power-distribution-testing.webp",
    description: "Thermal profiling and transient load testing of the dual-rail power regulation subsystem.",
    date: "Jun 2026"
  },
  {
    id: "gal-photo-5",
    title: "Carbon-Fiber Airframe Structural Check",
    category: "Robotics & Hardware",
    image: "/images/gallery/carbon-fiber-airframe-check.webp",
    description: "Torsional stiffness inspection and motor mount alignment on the custom multi-rotor carbon airframe.",
    date: "Jun 2026"
  },
  {
    id: "gal-photo-6",
    title: "Avionics Core & IMU Sensor Mount",
    category: "Robotics & Hardware",
    image: "/images/gallery/avionics-core-imu-mount.webp",
    description: "Vibration-damped mounting and 6-DOF IMU sensor calibration for autonomous stabilization.",
    date: "Jun 2026"
  },
  {
    id: "gal-photo-7",
    title: "Hardware Telemetry Workshop Analysis",
    category: "Lab & Prototyping",
    image: "/images/gallery/hardware-telemetry-analysis.webp",
    description: "In-situ hardware benchmarking, firmware flashing, and radio link latency optimization.",
    date: "Jul 2026"
  },
  {
    id: "gal-photo-8",
    title: "National Tech Exhibition Showcase",
    category: "Academic & Achievements",
    image: "/images/gallery/tech-exhibition-showcase.webp",
    description: "Live prototype demonstration and system architecture breakdown at the university technology exhibition.",
    date: "Jul 2026"
  },
  {
    id: "gal-photo-9",
    title: "Team Collaborative Engineering Workshop",
    category: "Academic & Achievements",
    image: "/images/gallery/engineering-workshop-collaboration.webp",
    description: "Joint cross-functional review of flight telemetry code, PCB schematics, and mechanical assemblies.",
    date: "Jun 2026"
  },
  {
    id: "gal-photo-10",
    title: "Avionics Diagnostic Matrix",
    category: "Robotics & Hardware",
    image: "/images/gallery/avionics-diagnostic-matrix.webp",
    description: "Bench-scale signal integrity verification and hardware fail-safe threshold configuration.",
    date: "Aug 2026"
  },
  {
    id: "gal-photo-11",
    title: "Tactical Field Operations & Ground Station",
    category: "Field & Exploration",
    image: "/images/gallery/ground-station-field-ops.webp",
    description: "Field deployment of mobile ground control station antennas and long-range telemetry link.",
    date: "Aug 2026"
  },
  {
    id: "gal-photo-12",
    title: "Robotics & Innovation Showcase Display",
    category: "Academic & Achievements",
    image: "/images/gallery/robotics-showcase-display.webp",
    description: "Official presentation of autonomous rover platforms and embedded computer vision modules.",
    date: "2026"
  },
  {
    id: "gal-photo-13",
    title: "Computational Systems Architecture",
    category: "Lab & Prototyping",
    image: "/images/gallery/computational-architecture-diagram.webp",
    description: "Modular software block diagrams and embedded communication pipeline topology.",
    date: "2026"
  },
  {
    id: "gal-photo-14",
    title: "National Defence Academy (NDA) Examination Merit",
    category: "Academic & Achievements",
    image: "/images/gallery/nda-merit-record.webp",
    description: "Official UPSC National Defence Academy (NDA) examination score verification and national competitive merit record.",
    date: "2025"
  }
];

export const newsletter: Newsletter = {
  title: "Systems & Aesthetics",
  description: "A monthly, highly condensed brief detailing design token architectures, spring physics parameters, and front-end craftsmanship. No spam.",
  placeholder: "Your email address",
  successMessage: "Subscription request received. Welcome to the loop!"
};
