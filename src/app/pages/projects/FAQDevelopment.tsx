import { Link } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { ProjectOverview } from "../../components/ProjectOverview";
import { projects } from "../../data/projects";

import { ProjectScope } from "../../components/ProjectScope";
import { ProcessCards } from "../../components/ProcessCards";
import { overview, specifications, steps } from "../../data/faqData";

/* Image Imports */
import overviewImage from "../../data/images/faq-dev-overview.png";

export function FAQDevelopment() {
  const project = projects.find(
    (p) => p.slug === "faq-development",
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
            Keeping the template library organized proved
            especially helpful when launch dates were moved up.
            If the user guide was not finished yet, we could
            still publish general FAQs, so the support page was
            never empty at launch. Once the final materials were
            ready, we added the product-specific FAQs to keep
            everything accurate without delaying the launch.
          </p>
          <p>
            This project showed me that writing FAQs is as much
            about managing workflows as it is about writing.
            Good content depended on working closely with
            product management, technical documentation,
            localization, and the publishing team at once.
            Planning ahead and staying on top of these tasks was
            key to keeping launches on track.
          </p>
          <p>
            One thing I would change is the HTML publishing
            workflow. Routing files through a separate team for
            a cleanup script created a daily scheduling
            dependency. If the script were automated or
            available to the writing team, that step would
            disappear from every publish cycle, not just during
            busy periods.
          </p>
        </div>
      </section>
      {/* REFLECTION END */}

      <ProjectNavigation currentSlug="faq-development" />
    </div>
  );
}