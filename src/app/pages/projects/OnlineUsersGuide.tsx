import { Link } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { ProjectOverview } from "../../components/ProjectOverview";
import { projects } from "../../data/projects";

import { ProjectScope } from "../../components/ProjectScope";
import { ProcessCards } from "../../components/ProcessCards";
import {
  overview,
  specifications,
  steps,
} from "../../data/ugData";

/* Image Imports */
import overviewImage from "../../data/images/ug-html-overview.png";

export function OnlineUsersGuide() {
  const project = projects.find(
    (p) => p.slug === "online-users-guide",
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
            This was one of the more complex projects I worked
            on. The North American team handled the in-box
            warranty, quick reference sheet, and FAQs
            separately, so the guide had to fit into a larger
            set of documents. It involved not only writing but
            also managing a documentation workflow across
            different branches, which showed me where a process
            needs clear structure. The PDF process especially
            showed me that version control and clear revision
            steps are just as important as good writing. Without
            a solid way to track edits, important changes can
            easily get lost.
          </p>
          <p>
            Proofreading and rewriting translated content showed
            me that localization is more than just translating
            words. To keep terminology consistent and the text
            easy to read, you need the same careful structure as
            in the original writing. Dealing with these issues
            helped me see how important translation memory
            systems and style guides are for global
            documentation teams.
          </p>
          <p>
            Taking on a more independent role when our team was
            reduced and the overseas writing team took on part
            of our workload meant I had to make decisions that
            usually needed senior approval. By working with my
            manager to check those choices and then training
            teammates on the HTML workflow, we turned a tough
            situation into a process improvement that helped the
            whole team.
          </p>
        </div>
      </section>
      {/* REFLECTION END */}

      <ProjectNavigation currentSlug="online-users-guide" />
    </div>
  );
}