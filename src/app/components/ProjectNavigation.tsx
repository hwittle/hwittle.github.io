import { Link } from "react-router";
import { getSortedProjects, type Project } from "../data/projects";

interface ProjectNavigationProps {
  currentSlug: string;
}

function NavCard({ project, direction }: { project: Project; direction: "prev" | "next" }) {
  const isNext = direction === "next";
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`block border-2 border-foreground bg-card p-5 transition-shadow hover:shadow-[4px_4px_0_0_var(--foreground)] focus-visible:shadow-[4px_4px_0_0_var(--foreground)] ${
        isNext ? "text-right" : "text-left"
      }`}
    >
      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
        {isNext ? "Next project →" : "← Previous project"}
      </span>
      <span className="mt-1 block uppercase tracking-wide">{project.title}</span>
      <span className="mt-1 block text-xs uppercase tracking-widest text-muted-foreground">
        {project.category}
      </span>
    </Link>
  );
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const sorted = getSortedProjects();
  const currentIndex = sorted.findIndex((p) => p.slug === currentSlug);

  const prev = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const next = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  return (
    <nav aria-label="More projects" className="border-t-2 border-foreground pt-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {prev ? <NavCard project={prev} direction="prev" /> : <span className="hidden sm:block" />}
        {next ? <NavCard project={next} direction="next" /> : <span className="hidden sm:block" />}
      </div>
      <p className="mt-6 text-center">
        <Link
          to="/"
          state={{ scrollTo: "projects" }}
          className="font-typewriter uppercase tracking-widest underline-offset-4 hover:underline hover:decoration-foreground/80 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          All projects
        </Link>
      </p>
    </nav>
  );
}