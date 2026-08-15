const certificateData = {
  student: {
    name: "Aryan Narwariya",
    email: "25cb1ar28@mitsgwl.ac.in"
  },
  certificates: [
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
      skills: ["Computer Applications", "IT Infrastructure", "Database Management Systems", "Office Automation", "Networking Basics", "System Administration"],
      description: "Awarded for successfully completing the Advanced Diploma curriculum, validating skills in database administration, business applications, IT infrastructure systems, and software engineering principles. Includes academic transcript for core IT courses.",
      image: "/images/certifications/advance-diploma-certificate.webp",
      images: [
        "/images/certifications/advance-diploma-certificate.webp",
        "/images/certifications/it-diploma-marksheet.webp"
      ],
      category: "Academic & Course Certificates" as const,
      technologies: ["IT Systems", "Office Suites", "Database Management", "Academic Transcript"]
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
      title: "Aarunya Tech Fest ",
      issuer: "MITS, Gwalior",
      date: "2026",
      recipient: "Aryan Narwariya",
      skills: ["Robotics Exhibition", "Technical Presentation", "Innovation", "Rapid Prototyping", "Event Coordination"],
      description: "Awarded for exceptional performance, technical innovation, and presentation in the robotics and project exhibition events during the Aarunya National Tech Fest.",
      image: "/images/certifications/aarunya-certificate.webp",
      category: "Hackathons, Competitions & Achievements" as const,
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
      category: "Hackathons, Competitions & Achievements" as const,
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
      category: "Hackathons, Competitions & Achievements" as const,
      technologies: ["Post-Production", "Creative Direction"]
    },
    {
      title: "Academic Merit & Leadership Award",
      issuer: "MITS Gwalior Academic Council",
      date: "2025",
      recipient: "Aryan Narwariya",
      skills: ["Leadership", "Event Coordination", "Public Speaking", "Community Service", "Problem Solving"],
      description: "Awarded in recognition of outstanding academic performance, leadership within the student community, and active coordination of college technical events.",
      image: "/images/certifications/certificate-page.jpg",
      category: "Hackathons, Competitions & Achievements" as const,
      technologies: ["Event Management", "Academic Excellence"]
    }
  ]
};

export default certificateData;
export type CertificateType = typeof certificateData.certificates[number];
export type CertificateDataType = typeof certificateData;
