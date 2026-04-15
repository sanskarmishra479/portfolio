export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  date: string;
  location: string;
  badge?: string;
  bullets: string[];
  stack: string[];
};

export type Project = {
  num: string;
  name: string;
  desc: string;
  stack: string[];
  image: string;
  github: string;
  live: string;
};

export type Award = {
  num: string;
  title: string;
  desc: string;
  year: string;
};

export type SiteData = {
  links: SocialLink[];
  aboutParagraphs: string[];
  aboutStack: string[];
  experience: Experience[];
  projects: Project[];
  awards: Award[];
  github: { username: string }[];
};
