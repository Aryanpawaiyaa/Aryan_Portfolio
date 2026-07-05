const certificateData = {
  student: {
    name: "Aryan Narwariya",
    email: "25cb1ar28@mitsgwl.ac.in"
  },
  certificates: [
    {
      title: "Combined Annual Training Army Camp Certification",
      issuer: "National Cadet Corps (NCC)",
      date: "2025",
      recipient: "Aryan Narwariya",
      skills: ["Weapon Handling", "Map Reading", "Military Drills", "Leadership Training", "Adventure Activities"],
      description: "Certified for successfully undergoing intensive military training, weapon handling protocols, map reading, and leadership development during the Combined Annual Training Camp (CATC) of the NCC Army Wing.",
      image: "/images/certifications/army-camp-certificate.webp",
      category: "NCC Certificates" as const,
      technologies: ["NCC Training", "CATC", "Drill & Parade"]
    },
    {
      title: "NCC Annual Training Camp (ATC) July",
      issuer: "National Cadet Corps (NCC)",
      date: "2025",
      recipient: "Aryan Narwariya",
      skills: ["Camp Administration", "Physical Fitness", "Drill & Command", "Teamwork", "Social Service"],
      description: "Awarded for active participation, training discipline, and successful completion of the NCC Annual Training Camp (ATC) curriculum, demonstrating leadership and collaborative teamwork.",
      image: "/images/certifications/ncc-camp-july-2025.webp",
      category: "NCC Certificates" as const,
      technologies: ["NCC Training", "ATC", "Physical Training"]
    },
    {
      title: "NCC Annual Training Camp (ATC) May",
      issuer: "National Cadet Corps (NCC)",
      date: "2025",
      recipient: "Aryan Narwariya",
      skills: ["Field Craft", "Weapon Training", "Discipline", "Disaster Management", "First Aid"],
      description: "Recognizes active completion of military drills, field craft training, survival tactics, and disaster response workshops at the NCC Annual Training Camp in May 2025.",
      image: "/images/certifications/ncc-camp-may-2025.webp",
      category: "NCC Certificates" as const,
      technologies: ["NCC Training", "ATC", "Survival Tactics"]
    },
    {
      title: "AI Fundamentals with IBM SkillsBuild",
      issuer: "IBM SkillsBuild / Cisco Networking Academy",
      date: "2026",
      recipient: "Aryan Narwariya",
      skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Deep Learning", "AI Ethics"],
      description: "Awarded for successfully completing the AI Fundamentals course, validating foundational knowledge in machine learning models, neural architectures, AI ethics, and cognitive computing concepts.",
      image: "/images/certifications/ai-fundamentals.png",
      category: "Academic & Course Certificates" as const,
      technologies: ["IBM SkillsBuild", "Cisco Academy", "AI Models"]
    },
    {
      title: "Advanced Diploma in Computer Applications & IT",
      issuer: "State Board of Technical Education",
      date: "2025",
      recipient: "Aryan Narwariya",
      skills: ["Computer Applications", "IT Infrastructure", "Database Management Systems", "Office Automation", "Networking Basics"],
      description: "Awarded for successfully completing the Advanced Diploma curriculum, validating skills in database administration, business applications, IT infrastructure systems, and software engineering principles.",
      image: "/images/certifications/advance-diploma-certificate.webp",
      category: "Academic & Course Certificates" as const,
      technologies: ["IT Systems", "Office Suites", "Database Management"]
    },
    {
      title: "Advanced IT Diploma Academic Transcript",
      issuer: "Board of Technical Education",
      date: "2025",
      recipient: "Aryan Narwariya",
      skills: ["System Administration", "Networking Basics", "Database Systems", "Software Design", "Data Entry"],
      description: "Academic record demonstrating superior performance and completion of core IT courses, including networking, database management, and system administration.",
      image: "/images/certifications/it-diploma-marksheet.webp",
      category: "Academic & Course Certificates" as const,
      technologies: ["Academic Transcript", "IT Evaluation", "Database Systems"]
    },
    {
      title: "Computer Hardware Basics",
      issuer: "Cisco Networking Academy",
      date: "2026",
      recipient: "Aryan Narwariya",
      skills: ["Computer Hardware", "PC Assembly", "Preventive Maintenance", "Mobile Diagnostics", "OS Installation"],
      description: "Validates proficiency in installing component architectures, building, repairing, upgrading personal computers, and configuring diagnostic hardware features.",
      image: "/images/certifications/computer-hardware-basics.png",
      category: "Academic & Course Certificates" as const,
      technologies: ["Cisco Academy", "Hardware Integration", "Diagnostics"]
    },
    {
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "2026",
      recipient: "Aryan Narwariya",
      skills: ["Cisco Packet Tracer", "Network Simulation", "Computer Networking", "Switch & Router Config"],
      description: "Validates essential configuration skills, dynamic networking modeling, and system simulation using the Cisco Packet Tracer platform.",
      image: "/images/certifications/packet-tracer.png",
      category: "Academic & Course Certificates" as const,
      technologies: ["Cisco Packet Tracer", "Networking", "Routing"]
    },
    {
      title: "Cisco Packet Tracer Advanced Routing & Switching",
      issuer: "Cisco Networking Academy",
      date: "2026",
      recipient: "Aryan Narwariya",
      skills: ["Subnetting", "Routing Protocols", "Network Design", "LAN/WAN Configuration", "IP Addressing"],
      description: "Recognizes completion of advanced simulation modules for complex wide-area network design, routing protocols, static/dynamic routing, and subnets.",
      image: "/images/certifications/packet-tracer-certificate.jpg",
      category: "Academic & Course Certificates" as const,
      technologies: ["Cisco Packet Tracer", "Routing & Switching", "Network Design"]
    },
    {
      title: "Introduction to IoT and Digital Transformation",
      issuer: "Cisco Networking Academy",
      date: "2026",
      recipient: "Aryan Narwariya",
      skills: ["Internet of Things (IoT)", "Digital Transformation", "Smart Sensors", "Automation Systems"],
      description: "Awarded for demonstrating a solid understanding of smart devices, industrial automation systems, sensor integration, and security concepts inside the IoT landscape.",
      image: "/images/certifications/introduction-to-iot.png",
      category: "Academic & Course Certificates" as const,
      technologies: ["Cisco Academy", "IoT Systems", "Automation"]
    },
    {
      title: "Basic Computer Applications Course",
      issuer: "Computer Education Council",
      date: "2024",
      recipient: "Aryan Narwariya",
      skills: ["Computer Operations", "Operating Systems", "Spreadsheets", "Internet Applications", "Word Processing"],
      description: "Validates foundational skills in computer operations, operating systems, word processing, spreadsheet modeling, and essential internet applications.",
      image: "/images/certifications/basic-computer-certificate.webp",
      category: "Academic & Course Certificates" as const,
      technologies: ["Basic IT", "Office Suites", "Windows OS"]
    },
    {
      title: "English for IT 1",
      issuer: "Cisco Networking Academy",
      date: "2026",
      recipient: "Aryan Narwariya",
      skills: ["English for IT", "Professional Communication", "Technical Terminology", "Email Correspondence"],
      description: "Awarded for completing the English for IT 1 course, validating proficiency in technical English communication, professional collaboration, and terminology tailored for the information technology industry.",
      image: "/images/certifications/english-for-it-1.png",
      category: "Academic & Course Certificates" as const,
      technologies: ["Cisco Academy", "Professional English", "Tech Communication"]
    },
    {
      title: "Professional English for IT Professionals",
      issuer: "Cisco Networking Academy",
      date: "2026",
      recipient: "Aryan Narwariya",
      skills: ["Technical Writing", "Global Communication", "IT Terminology", "Professional Collaboration", "Documentation"],
      description: "Validates advanced comprehension and communication skills required for working in global technical environments, focusing on writing, documentation, and technical team communication.",
      image: "/images/certifications/english-it-certificate.jpg",
      category: "Academic & Course Certificates" as const,
      technologies: ["Cisco Academy", "Technical English", "Global Collaboration"]
    },
    {
      title: "Aarunya National Tech Fest Event Excellence",
      issuer: "MITS Student Activity Council",
      date: "2025",
      recipient: "Aryan Narwariya",
      skills: ["Robotics Exhibition", "Technical Presentation", "Innovation", "Rapid Prototyping", "Event Coordination"],
      description: "Awarded for exceptional performance, technical innovation, and presentation in the robotics and project exhibition events during the Aarunya National Tech Fest.",
      image: "/images/certifications/aarunya-certificate.webp",
      category: "Hackathons, Competitions & Events" as const,
      technologies: ["Robotics Hardware", "Project Exhibition", "Event Coordination"]
    },
    {
      title: "Participation Certificate: Music Night Edition",
      issuer: "Google Student Ambassador Program",
      date: "2026",
      recipient: "Aryan Narwariya",
      skills: ["Creativity", "Innovation", "Event Collaboration", "Public Engagement", "Community Building"],
      description: "Recognizes active participation and outstanding creative collaboration during the Music Night under the Google Student Ambassador Program 2026.",
      image: "/images/certifications/participation-music.png",
      category: "Hackathons, Competitions & Events" as const,
      technologies: ["Google Program", "Community Engagement", "Event Coordination"]
    },
    {
      title: "Creative Media & Filmmaking Certification",
      issuer: "Film & Media Club",
      date: "2025",
      recipient: "Aryan Narwariya",
      skills: ["Videography", "Storytelling", "Video Editing", "Creative Direction", "Post-Production"],
      description: "Awarded for excellence in video production, storytelling, cinematography, and post-production editing during the filmmaking workshop and competition.",
      image: "/images/certifications/filmmaking-certificate.webp",
      category: "Hackathons, Competitions & Events" as const,
      technologies: ["Premiere Pro", "Post-Production", "Creative Direction"]
    },
    {
      title: "Academic Merit & Leadership Award",
      issuer: "MITS Gwalior Academic Council",
      date: "2025",
      recipient: "Aryan Narwariya",
      skills: ["Leadership", "Event Coordination", "Public Speaking", "Community Service", "Problem Solving"],
      description: "Awarded in recognition of outstanding academic performance, leadership within the student community, and active coordination of college technical events.",
      image: "/images/certifications/certificate-page.jpg",
      category: "Achievements & Recognition" as const,
      technologies: ["Student Council", "Event Management", "Academic Excellence"]
    }
  ]
};

export default certificateData;
export type CertificateType = typeof certificateData.certificates[number];
export type CertificateDataType = typeof certificateData;
