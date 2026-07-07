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
  id: string;
  title: string;
  category: string; // Used as the group label (e.g. "Technical Writing", "UX Writing")
  year: number;
  description: string;
  tags: string[];
  slug: string; // Must match route path in routes.ts
}

/**
 * Returns projects sorted alphabetically by group (category), then by title within each group.
 * This is the canonical display/navigation order throughout the site.
 */
export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => {
    const catCmp = a.category.localeCompare(b.category);
    if (catCmp !== 0) return catCmp;
    return a.title.localeCompare(b.title);
  });
}

/**
 * Returns projects grouped by category, with both groups and projects within
 * each group sorted alphabetically.
 */
export function getGroupedProjects(): {
  group: string;
  projects: Project[];
}[] {
  const sorted = getSortedProjects();
  const map = new Map<string, Project[]>();
  for (const p of sorted) {
    if (!map.has(p.category)) map.set(p.category, []);
    map.get(p.category)!.push(p);
  }
  return Array.from(map.entries()).map(([group, projects]) => ({
    group,
    projects,
  }));
}

export const projects: Project[] = [
  /*{
    title: "Content Audit for Optimization",
    category: "UX Writing",
    year: 2026,
    description:
      "Conducted a content audit for a travel platform on subsections in need of improvement.",
    tags: ["Branding", "Content", "User Research"],
    slug: "content-audit-optimize",
  },*/
  {
    id: "ux-error",
    title: "Error State Page",
    category: "UX Writing",
    year: 2026,
    description:
      "Designed a connectivity error state for Chime's mobile and desktop app, crafting copy that balances Chime's friendly brand voice with the emotional weight of a finance app error.",
    tags: ["Figma", "Content Writing", "Microcopy"],
    slug: "error-state-page",
  },
  {
    id: "tech-faq",
    title: "FAQ Development",
    category: "Technical Writing",
    year: 2024,
    description:
      "Built and maintained a scalable FAQ library across multiple product lines, managing multilingual content workflows and coordinating cross-functional publishing pipelines to support product launches.",
    tags: ["Adobe Dreamweaver", "HTML", "Oxygen XML Editor"],
    slug: "faq-development",
  },
  /*{
    id: "ux-onboard",
    title: "Mobile Onboarding Flow",
    category: "UX Writing",
    year: 2026,
    description:
      "Designed a mobile onboarding flow for an app, identifing and analyzing the main friction points users encounter.",
    tags: ["Product Management", "Technical Specs"],
    slug: "mobile-onboarding-flow",
  },*/
  {
    id: "tech-online-guide",
    title: "Online User's Guide",
    category: "Technical Writing",
    year: 2025,
    description:
      "Adapted and edited a 291-page user's guide covering 12 projector models, coordinating with an overseas documentation branch to meet North American compliance standards across PDF and HTML formats.",
    tags: ["HTML", "Oxygen XML Editor", "User's Guide"],
    slug: "online-users-guide",
  },
  {
    id: "tech-printed-guide",
    title: "Printed Setup Guide",
    category: "Technical Writing",
    year: 2025,
    description:
      "Developed a bilingual print and digital setup guide for a large-format business printer, balancing cost constraints, localization requirements, and print clarity for industrial environments.",
    tags: ["Adobe InDesign", "Printed", "User's Guide"],
    slug: "printed-setup-guide",
  },
  /*{
  id: "tech-api",
    title: "Steam Web API Documenation",
    category: "Technical Writing",
    year: 2026,
    description:
      ".",
    tags: ["API", "GitHub", "MkDocs"],
    slug: "steam-web-api",
  },*/
  {
    id: "ux-push-notif",
    title: "UX Copy for Push Notifications",
    category: "UX Writing",
    year: 2026,
    description:
      "Crafted five push notification messages for Steam's mobile app, each serving a distinct purpose and grounded in realistic platform constraints, user scenarios, and Steam's brand voice.",
    tags: ["Copywriting", "Figma", "Microcopy"],
    slug: "uxcopy-push-notif",
  },
];