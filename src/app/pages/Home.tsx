import { projects, getGroupedProjects } from "../data/projects";
import { Link } from "react-router";
import { Masthead } from "../components/Masthead";
import { RotatingHeadline } from "../components/RotatingHeadline";
import { useLocation } from "react-router";
import { useEffect } from "react";

export function Home() {
  const groupedProjects = getGroupedProjects();

  const location = useLocation();

  useEffect(() => {
    if (
      (location.state as { scrollTo?: string } | null)
        ?.scrollTo !== "projects"
    )
      return;
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.state]);

  return (
    <div className="container mx-auto pt-6">
      <Masthead>
        Vol. V · Issue 005 ·{" "}
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </Masthead>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center relative -mx-4 px-4 mb-8 md:mb-12">
        {/* HEADLINE */}
        <div className="max-w-4xl text-center px-4 mt-6">
          {/* DIAMOND DIVIDER */}
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <div className="border-t-2 border-foreground w-8 md:w-12"></div>
            <div className="text-xl md:text-2xl">◆</div>
            <div className="border-t-2 border-foreground w-8 md:w-12"></div>
          </div>

          {/* HERO CONTENT */}
          <div className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-4 ">
            Est. 2026
          </div>
          <h1 className="text-3xl md:text-6xl uppercase tracking-tight border-y-2 border-foreground mb-4 py-4 md:py-6">
            Whitney Tran
          </h1>
          <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed uppercase tracking-wide">
            Technical & UX Writer
          </p>
          <p className="text-sm md:text-base leading-loose max-w-2xl mx-auto">
            Turning complex products into clear experiences.
            Technical writer specializing in product docs, APIs,
            and docs-as-code—now exploring UX writing.
          </p>

          {/* ROTATING HEADLINE */}
          <RotatingHeadline />

          {/* DIAMOND DIVIDER */}
          <div className="flex items-center justify-center gap-2 mt-8 mb-6 md:mt-8 md:mb-6">
            <div className="border-t-2 border-foreground w-8 md:w-12"></div>
            <div className="text-xl md:text-2xl">◆</div>
            <div className="border-t-2 border-foreground w-8 md:w-12"></div>
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* PROJECTS */}
      <section
        id="projects"
        className="mb-16 scroll-mt-20 border-y-2 border-dashed border-foreground/30 pb-12 pt-10"
      >
        <div className="mb-8">
          <h2 className="text-xl md:text-3xl uppercase tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            A curated collection of projects with each piece
            representing a unique challenge and creative
            solution.
          </p>
        </div>

        <div className="space-y-12">
          {groupedProjects.map(
            ({ group, projects: groupProjects }) => (
              <div key={group}>
                {groupedProjects.length > 1 && (
                  <h3 className="text-xl uppercase tracking-widest text-muted-foreground mb-6 border-b border-foreground/30 pb-2">
                    {group}
                  </h3>
                )}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {groupProjects.map((project) => (
                    <article
                      key={project.slug}
                      className="group relative flex flex-col border-2 border-foreground bg-card transition-shadow hover:shadow-[4px_4px_0_0_var(--foreground)] focus-within:shadow-[4px_4px_0_0_var(--foreground)]"
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.thumbnailAlt}
                        loading="lazy"
                        className="aspect-[3/2] w-full border-b-2 border-foreground object-cover object-top"
                      />
                      <div className="space-y-3 p-4 md:p-5">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                          {project.category} · {project.year}
                        </p>
                        <h4 className="text-xl uppercase leading-tight">
                          <Link
                            to={`/projects/${project.slug}`}
                            className="after:absolute after:inset-0"
                          >
                            {project.title}
                          </Link>
                        </h4>
                        <p className="text-sm leading-relaxed">
                          {project.description}
                        </p>
                        {/* tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-foreground bg-background px-3 py-1 text-xs uppercase tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}