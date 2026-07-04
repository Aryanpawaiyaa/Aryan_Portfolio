import aiFundamentalsPreview from "../assets/images/certifications/ai_fundamentals_preview.webp";
import computerHardwareBasicsPreview from "../assets/images/certifications/computer_hardware_basics_preview.webp";
import packetTracerPreview from "../assets/images/certifications/packet_tracer_preview.webp";
import introductionToIotPreview from "../assets/images/certifications/introduction_to_iot_preview.webp";
import englishForItPreview from "../assets/images/certifications/english_for_it_preview.webp";

const certificateData = {
  student: {
    name: "Aryan Narwariya",
    email: "25cb1ar28@mitsgwl.ac.in"
  },
  certificates: [
    {
      title: "AI Fundamentals with IBM SkillsBuild",
      issuer: "IBM SkillsBuild / Cisco Networking Academy",
      date: "June 26, 2026",
      recipient: "Aryan Narwariya",
      skills: ["Artificial Intelligence", "Machine Learning", "AI Concepts"],
      description: "Awarded for successfully completing the AI Fundamentals with IBM SkillsBuild course, validating foundational skills in artificial intelligence, deep learning architectures, and neural networks.",
      image: aiFundamentalsPreview
    },
    {
      title: "Certificate of Participation: Music Night Edition",
      issuer: "Google Student Ambassador Program",
      date: "June 25, 2026",
      recipient: "Aryan Narwariya",
      skills: ["Creativity", "Innovation", "Event Collaboration"],
      description: "Recognizes active participation and outstanding creative collaboration during the Music Night under the Google Student Ambassador Program 2026.",
      image: "/images/certifications/previews/participation_music_preview.png"
    },
    {
      title: "Computer Hardware Basics",
      issuer: "Cisco Networking Academy",
      date: "June 2, 2026",
      recipient: "Aryan Narwariya",
      skills: ["Computer Hardware", "PC Repair and Upgrade", "Preventive Maintenance", "Mobile Devices"],
      description: "Validates proficiency in installing component architectures, building, repairing, upgrading personal computers, and configuring diagnostic hardware features.",
      image: computerHardwareBasicsPreview
    },
    {
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "June 1, 2026",
      recipient: "Aryan Narwariya",
      skills: ["Cisco Packet Tracer", "Network Simulation", "Computer Networking"],
      description: "Validates essential configuration skills, dynamic networking modeling, and system simulation using the Cisco Packet Tracer platform.",
      image: packetTracerPreview
    },
    {
      title: "Introduction to IoT and Digital Transformation",
      issuer: "Cisco Networking Academy",
      date: "June 1, 2026",
      recipient: "Aryan Narwariya",
      skills: ["Internet of Things (IoT)", "Digital Transformation"],
      description: "Awarded for demonstrating a solid understanding of smart devices, industrial automation systems, and security concepts inside the IoT landscape.",
      image: introductionToIotPreview
    },
    {
      title: "English for IT 1",
      issuer: "Cisco Networking Academy",
      date: "June 15, 2026",
      recipient: "Aryan Narwariya",
      skills: ["English for IT", "Professional Communication", "Technical Terminology"],
      description: "Awarded for completing the English for IT 1 course, validating proficiency in technical English communication, professional collaboration, and terminology tailored for the information technology industry.",
      image: englishForItPreview
    }
  ]
};

export default certificateData;
export type CertificateType = typeof certificateData.certificates[number];
export type CertificateDataType = typeof certificateData;
