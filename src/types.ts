export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  achievements: string[];
  category: 'marketing' | 'design' | 'freelance_streaming';
}

export interface EducationItem {
  id: string;
  title: string;
  school: string;
  period: string;
  detail?: string;
}

export interface SubstackArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  readTime: string;
  link: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}
