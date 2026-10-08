import { Link } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { ProjectOverview } from "../../components/ProjectOverview";
import { projects } from "../../data/projects";

import { ProjectScope } from "../../components/ProjectScope";
import { WorkflowSteps } from "../../components/WorkflowSteps";
import {
  endpointCount,
  interfaceCount,
  overview,
  specifications,
  workflowIntro,
  workflowSteps,
} from "../../data/apiData";

/* Image Imports */
import overviewImage from "../../data/images/api-steam-overview.png";

export function APIDocumentation() {
  const project = projects.find(
    (p) => p.slug === "api-documentation",
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
        <div className="grid md:grid-cols-3 gap-6 ">
          <div>
            <span className="font-bold block mb-1">
              CONTEXT:
            </span>
            <span>Independent Project</span>
          </div>
          <div>
            <span className="font-bold block mb-1">YEAR:</span>
            <span>{project.year}</span>
          </div>
          <div>
            <span className="font-bold block mb-1">ROLE:</span>
            <span>Technical Writer (Solo)</span>
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
      <WorkflowSteps
        intro={workflowIntro}
        steps={workflowSteps}
      />
      {/* PROCESS END */}

      {/* REFLECTION */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Reflection
        </h2>
        <div className="w-full space-y-4 leading-relaxed border-2 border-foreground bg-card p-6">
          <p>
            The project showed that the most useful
            documentation comes from testing, not from restating
            existing sources. Capturing real responses exposed
            undocumented fields, inconsistent data types, and
            privacy settings that quietly change what an
            endpoint returns, which gave the documentation a
            practical depth that reading alone would not.
          </p>
          <p>
            Working in a docs-as-code workflow made the link
            between documentation and software development
            concrete. Writing in Markdown, versioning in GitHub,
            and deploying with GitHub Actions mirrors how
            engineering teams release code, which makes
            collaborating with developers on documentation feel
            familiar.
          </p>
          <p>
            Next, I plan to expand coverage to interfaces such
            as ISteamNews and ISteamApps, and to add a
            troubleshooting section based on the error responses
            I observed during testing.
          </p>
        </div>
      </section>
      {/* REFLECTION END */}

      <ProjectNavigation currentSlug="api-documentation" />
    </div>
  );
}