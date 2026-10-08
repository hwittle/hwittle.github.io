import { Link } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { ProjectOverview } from "../../components/ProjectOverview";
import { projects } from "../../data/projects";

import { ProjectScope } from "../../components/ProjectScope";
import { ProcessCards } from "../../components/ProcessCards";
import { overview, specifications, steps } from "../../data/setupData";

/* Image Imports */
import overviewImage from "../../data/images/setup-guide-overview.png";

export function PrintedSetupGuide() {
  const project = projects.find(
    (p) => p.slug === "printed-setup-guide",
  )!;

  return (
    <div className="container mx-auto py-12">
      {/* Back Navigation */}
      <Link
        to="/"
        state={{ scrollTo: "projects" }}
        className="mb-8 inline-flex items-center uppercase tracking-wide underline-offset-4 hover:underline"
      >
        ← Back to Projects
      </Link>

      {/* HEADER */}
      <header className="mb-12 border-b-2 border-dashed border-foreground/30 pb-8">
        <div className="mb-4 uppercase tracking-widest text-muted-foreground">
          {project.category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
          {project.title}
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <span className="font-bold block mb-1">
              COMPANY:
            </span>
            <span>Epson America Inc.</span>
          </div>
          <div>
            <span className="font-bold block mb-1">YEAR:</span>
            <span>{project.year}</span>
          </div>
          <div>
            <span className="font-bold block mb-1">ROLE:</span>
            <span>Technical Editor</span>
          </div>

          <div className="md:col-span-3">
            <span className="mb-2 block font-bold">
              SKILLS &amp; TOOLS:
            </span>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-foreground bg-card px-3 py-1 text-xs uppercase tracking-wide"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      {/* HEADER END */}

      {/* OVERVIEW */}
      <ProjectOverview {...overview} />
      {/* OVERVIEW END */}

      {/* PROJECT SCOPE */}
      <ProjectScope specifications={specifications} />
      {/* PROJECT SCOPE END */}

      {/* PROCESS */}
      <ProcessCards steps={steps} />
      {/* PROCESS END */}

      {/* REFLECTION */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Reflection
        </h2>
        <div className="w-full space-y-4 leading-relaxed border-2 border-foreground bg-card p-6">
          <p>
            Combining what could have been two separate
            documents into one print-friendly package lowered
            production costs without losing clarity. It also
            showed me how important it is to think about
            localization from the beginning, not at the end.
            Keeping the English text short and simple made it
            easier for the French translation to fit the layout,
            and that shaped every writing choice we made.
          </p>
          <p>
            The tight deadline made clear that early teamwork
            between product management, graphic design, and
            localization was key to keeping the project moving.
            If one part was delayed, everything else would have
            been held up, so staying in touch was as important
            as the writing.
          </p>
          <p>
            Designing for print first, with online access as a
            backup, pushed me to focus on being clear and not
            just brief. Each step had to be understandable on
            its own, since users might not be able to look up
            extra information.
          </p>
        </div>
      </section>
      {/* REFLECTION END */}

      <ProjectNavigation currentSlug="printed-setup-guide" />
    </div>
  );
}