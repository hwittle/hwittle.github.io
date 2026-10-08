export interface Criterion {
  term: string;
  definition: string;
}

export interface NotificationItem {
  name: string;
  image: { src: string; alt: string };
  copy: { label: string; text: string; quoted?: boolean }[];
  rationale: string[];
}

export interface OverviewData {
  image: { src: string; alt: string; caption: string };
  imageClassName?: string;
  paragraphs: string[];
  note?: string;
  stats?: { label: string; value: string }[];
  links?: { href: string; label: string }[];
}

export interface Principle {
  title: string;
  description: string;
  seenIn: string;
}

export interface ProcessStep {
  topic: string;
  challenge: string;
  response: string;
}

export interface RationaleItem {
  title: string;
  points: string[];
}

export interface Specification {
  label: string;
  values?: string[];
  groups?: { heading: string; values: string[] }[];
}

export interface WorkflowStep {
  title: string;
  detail: string;
}