export interface Skill {
  name: string;
  level: number; // 1-10
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socials: SocialLink[];
}

export interface ResumeData {
  name: string;
  title: string;
  about: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  contact: ContactInfo;
}