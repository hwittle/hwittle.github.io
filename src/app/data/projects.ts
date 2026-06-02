/**
 * PROJECT DATA - CENTRALIZED SOURCE OF TRUTH
 *
 * File: /src/app/data/projects.ts
 *
 * Description:
 * Single source of truth for all portfolio project information.
 * This data is used across multiple pages to ensure consistency.
 *
 * Used By:
 * - /src/app/pages/Projects.tsx (project listing with filtering)
 * - /src/app/pages/projects/*.tsx (individual project detail pages)
 *
 * Data Structure:
 * - id: Unique identifier, also used for project numbering (with leading zeros)
 * - title: Project name
 * - category: Project type (Brand Identity, Web Development, Guide, etc.)
 * - year: Completion year
 * - description: Short project summary
 * - tags: Array of skills/technologies used (for filtering)
 * - slug: URL-friendly identifier (must match route paths in /src/app/routes.ts)
 *
 * Important:
 * When updating project information here, changes automatically appear on:
 * 1. Projects listing page (/projects)
 * 2. Individual project detail pages (/projects/:slug)
 *
 * When adding a new project:
 * 1. Add entry to this array
 * 2. Create corresponding page component in /src/app/pages/projects/
 * 3. Add route to /src/app/routes.ts (path must match slug)
 */

export interface Project {
  id: number;
  title: string;
  category: string;
  year: number;
  description: string;
  tags: string[];
  slug: string; // Must match route path in routes.ts
}

export const projects: Project[] = [
  {
    id: 1,
    title: "UX Copy for Push Notifications",
    category: "UX Writing",
    year: 2026,
    description:
      "Wrote engaging push notification messages for an e-commerce platform, informing users about updates and relevant information.",
    tags: ["Copywriting", "Microcopy"],
    slug: "uxcopy-push-notif",
  },
  {
    id: 2,
    title: "Technical Feature Specifications",
    category: "UX Writing",
    year: 2026,
    description:
      "Drafted a technical specs for an on-demand grocery delivery app that lacked a push notification system.",
    tags: ["Product Management", "Technical Specs"],
    slug: "push-notif-tech-specs",
  },
  {
    id: 3,
    title: "Content Audit for Optimization",
    category: "UX Writing",
    year: 2026,
    description:
      "Conducted a content audit for a travel platform on subsections in need of improvement.",
    tags: ["Branding", "Content", "User Research"],
    slug: "content-audit-optimize",
  },
  {
    id: 4,
    title: "Printed Setup Guide",
    category: "Technical Writing",
    year: 2025,
    description:
      "Designed and developed a setup guide for a large-format business printer, guiding users through space requirements and installation.",
    tags: ["InDesign", "Printed", "User's Guide"],
    slug: "printed-setup-guide",
  },
  {
    id: 5,
    title: "Online User's Guide",
    category: "Technical Writing",
    year: 2024,
    description:
      "Developed and designed a user's guide for a commercial projector, outputing content into different formats for web navigation and printability.",
    tags: ["HTML", "Oxygen", "User's Guide"],
    slug: "online-users-guide",
  },
  {
    id: 6,
    title: "FAQ development",
    category: "Technical Writing",
    year: 2024,
    description:
      "The process in creating FAQs to deflect calls.",
    tags: ["FAQ", "HTML", "Oxygen"],
    slug: "faq-development",
  },
];