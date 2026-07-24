/**
 * PROJECT DATA — single source of truth for all portfolio projects.
 *
 * Used by: Home.tsx (grouped listing) and each project detail page.
 *
 * When adding a new project:
 * 1. Add an entry to the `projects` array below
 * 2. Create the page component in /src/app/pages/projects/
 * 3. Register its route in /src/app/routes.ts (path must match slug)
 */

export interface Project {
  title: string;
  category: string; // Group label shown in Selected Works (e.g. "Technical Writing", "UX Writing")
  year: number;
  description: string;
  tags: string[];
  slug: string; // Must match route path in routes.ts; also used as React key
}

export const projects: Project[] = [
  {
    title: "Content Audit for Optimization",
    category: "UX Writing",
    year: 2026,
    description:
      "Conducted an independent content audit of Hertz's desktop car rental booking flow, identifying friction points, manipulative copy patterns, and pricing transparency issues across five key pages.",
    tags: ["Content Audit", "Content Strategy", "Copywriting"],
    slug: "content-audit-optimize",
  },
  {
    title: "Error State Page",
    category: "UX Writing",
    year: 2026,
    description:
      "Designed a connectivity error state for Chime's mobile and desktop app, crafting copy that balances Chime's friendly brand voice with the emotional weight of a finance app error.",
    tags: ["Figma", "Content Writing", "Microcopy"],
    slug: "error-state-page",
  },
  {
    title: "FAQ Development",
    category: "Technical Writing",
    year: 2024,
    description:
      "Built and maintained a scalable FAQ library across multiple product lines, managing multilingual content workflows and coordinating cross-functional publishing pipelines to support product launches.",
    tags: ["Adobe Dreamweaver", "HTML", "Oxygen XML Editor"],
    slug: "faq-development",
  },
  {
    title: "Online User's Guide",
    category: "Technical Writing",
    year: 2025,
    description:
      "Adapted and edited a 291-page user's guide covering 12 projector models, coordinating with an overseas documentation branch to meet North American compliance standards across PDF and HTML formats.",
    tags: ["HTML", "Oxygen XML Editor", "User's Guide"],
    slug: "online-users-guide",
  },
  {
    title: "Printed Setup Guide",
    category: "Technical Writing",
    year: 2025,
    description:
      "Developed a bilingual print and digital setup guide for a large-format business printer, balancing cost constraints, localization requirements, and print clarity for industrial environments.",
    tags: ["Adobe InDesign", "Printed", "User's Guide"],
    slug: "printed-setup-guide",
  },
  {
    title: "UX Copy for Push Notifications",
    category: "UX Writing",
    year: 2026,
    description:
      "Crafted five push notification messages for Steam's mobile app, each serving a distinct purpose and grounded in realistic platform constraints, user scenarios, and Steam's brand voice.",
    tags: ["Copywriting", "Figma", "Microcopy"],
    slug: "uxcopy-push-notif",
  },
];

// Sorted and grouped once at module load — O(1) for all callers.
const _sorted = [...projects].sort((a, b) => {
  const c = a.category.localeCompare(b.category);
  return c !== 0 ? c : a.title.localeCompare(b.title);
});

const _grouped = (() => {
  const map = new Map<string, Project[]>();
  for (const p of _sorted) {
    const bucket = map.get(p.category) ?? [];
    bucket.push(p);
    map.set(p.category, bucket);
  }
  return Array.from(map.entries()).map(([group, projects]) => ({ group, projects }));
})();

export const getSortedProjects = (): Project[] => _sorted;
export const getGroupedProjects = (): { group: string; projects: Project[] }[] => _grouped;
