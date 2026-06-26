/**
 * SHARED PROJECT NAVIGATION COMPONENT
 *
 * Renders Previous/Next project buttons based on the global alphabetical order
 * (sorted by group/category, then by title within each group).
 *
 * Used by every individual project detail page. Pass the current project's slug
 * and the component handles computing the neighbors automatically.
 */

import { Link } from "react-router";
import { getSortedProjects } from "../data/projects";

interface ProjectNavigationProps {
  currentSlug: string;
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const sorted = getSortedProjects();
  const currentIndex = sorted.findIndex((p) => p.slug === currentSlug);

  const prev = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const next = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  return (
    <div className="border-t-2 border-foreground pt-8 flex justify-between">
      {prev ? (
        <Link
          to={`/projects/${prev.slug}`}
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          ← Previous Project
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={`/projects/${next.slug}`}
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          Next Project →
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
