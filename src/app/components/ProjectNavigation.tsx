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
    <div className={`border-t-2 border-foreground pt-8 flex ${!prev ? "justify-end" : "justify-between"}`}>
      {prev && (
        <Link
          to={`/projects/${prev.slug}`}
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
        >
          ← Previous Project
        </Link>
      )}
      {next && (
        <Link
          to={`/projects/${next.slug}`}
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
        >
          Next Project →
        </Link>
      )}
    </div>
  );
}
