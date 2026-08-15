export interface Personal {
  name: string;
  role: string;
  avatar: string;
  location: string;
  bio: string;
  signature: string;
  status: string;
  email: string;
  resumeUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // lucide icon name
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
  link?: {
    label: string;
    url: string;
  };
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface NccExperience {
  campName: string;
  badge: string;
  location: string;
  period: string;
  headline: string;
  specialHighlight?: string;
  description: string[];
  skills: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  content: string; // detailed markdown text
  date: string;
  readTime?: string;
  image: string;
  link?: string;
  gallery?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string; // detailed markdown text
  date: string;
  readTime: string;
  category: string;
  coverImage?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  date?: string;
  description?: string;
}

export interface Newsletter {
  title: string;
  description: string;
  placeholder: string;
  successMessage: string;
}
