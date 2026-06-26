import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

export function OnlineUsersGuide() {
  const navigate = useNavigate();
  const project = projects.find(
    (p) => p.slug === "online-users-guide",
  )!;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Navigation */}
      <button
        onClick={() => {
          if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
              const el = document.getElementById("projects");
              if (el) {
                const top =
                  el.getBoundingClientRect().top +
                  window.scrollY -
                  80;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }, 100);
          } else {
            const el = document.getElementById("projects");
            if (el) {
              const top =
                el.getBoundingClientRect().top +
                window.scrollY -
                80;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }
        }}
        className="inline-flex items-center mb-8 uppercase tracking-wide hover:underline"
      >
        ← Back to Home
      </button>

      {/* Project Header */}
      <header className="mb-12 border-b-2 border-dashed border-foreground/30 pb-8">
        <div className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
          {project.category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
          {project.title}
        </h1>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <span className="font-bold block mb-1">
              COMPANY:
            </span>
            <span>Epson North America</span>
          </div>
          <div>
            <span className="font-bold block mb-1">YEAR:</span>
            <span>{project.year}</span>
          </div>
          <div>
            <span className="font-bold block mb-1">ROLE:</span>
            <span>Technical Editor</span>
          </div>
        </div>
      </header>

      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Overview
        </h2>
        <div className="w-full space-y-4 leading-relaxed border-2 border-foreground bg-card p-6">
          <p className="border-l-4 pl-4">
            View the published setup guide as{" "}
            <a
              target="_blank"
              className="hover:underline"
              href="https://download2.ebz.epson.net/sec_pubs_visual/eai/projectors/html/EB-L890E/useg/EN/index.html"
            >
              <strong>HTML</strong>
            </a>{" "}
            or{" "}
            <a
              target="_blank"
              className="hover:underline"
              href="https://download2.ebz.epson.net/sec_pubs_visual/eai/projectors/pdf/useg/EN/UsersGuide_EBL890E_EN_EAI.pdf"
            >
              <strong>PDF</strong>.
            </a>
          </p>
          <p>
            This user's guide was developed to cover a family of
            12 projector models under a single unified document,
            reducing redundancy while accounting for
            model-specific features and UI differences. During
            this project, the North American documentation
            branch transitioned to a new template established by
            the parent company's overseas documentation team,
            requiring close cross-cultural collaboration to meet
            both international formatting standards and North
            American legal compliance requirements. The
            finalized document was published as both a
            navigable, searchable HTML version on the North
            American website and a PDF version managed by the
            overseas team.
          </p>
        </div>
      </section>

      {/* Document Specifications */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Document Specifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Format</h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>PDF (A4 landscape)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>English, French</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Audience
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Commercial users (projection for local
                  businesses and small events)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Business users (multi-projections and large
                  venues)
                </span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Tools Used
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Adobe Acrobat</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Adobe Dreamweaver</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Distribution
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Navigable and searchable HTML published to
                  North and Latin America websites (handled uploading for localization)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>PDF distributed by overseas team</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          The Process
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border-2 border-foreground p-8">
            {/* The Challenge */}
            <h3 className="text-2xl uppercase mb-4">
              The Challenge
            </h3>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Assigned to a 12-model projector family with
                  no existing unified guide, requiring a full
                  feature comparison across all models to
                  determine what content could be shared and
                  what required model-specific caveats
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  The overseas documentation branch was
                  designated to handle the English version of
                  the user's guide for North American markets,
                  but their output lacked required NA-specific
                  legal compliance content including coin
                  battery hazard warnings, laser safety
                  warnings, and other regulatory notices
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Translated English copy from the overseas team
                  contained inconsistent grammar and terminology
                  flow, suggesting an absence of a standardized
                  translation memory or terminology management
                  system
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  The PDF editing workflow required routing all
                  edits back through the overseas team for
                  implementation, creating a significant
                  bottleneck in the revision process
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Version control was inconsistently maintained
                  by the overseas team, resulting in duplicate
                  guides being created from outdated source
                  files that did not include previously
                  submitted edits
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Several senior writers were laid off during
                  this project, reducing team capacity during an
                  already complex cross-branch collaboration
                </span>
              </li>
            </ul>
          </div>
          {/* Solution */}
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">
              The Solution
            </h3>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Independently analyzed specifications across
                  all 12 models using color-coded Excel
                  comparisons to identify differences before any
                  writing began and verified findings with
                  manager and team lead in internal review
                  meetings before confirming the unified guide
                  approach with the product manager
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Established a collaborative working
                  relationship with the overseas documentation
                  branch to align on template standards while
                  negotiating the inclusion of NA-specific legal
                  compliance content including coin battery
                  hazard warnings and laser safety notices
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Proofread and rewrote translated English copy
                  to correct grammar inconsistencies, improve
                  flow, and ensure terminology remained
                  consistent throughout the 291-page document
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Identified and resolved version control
                  discrepancies by flagging outdated source
                  files and ensuring all edits were reapplied to
                  the correct document version
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Self-edited HTML output files in Dreamweaver
                  for the North American website publication, bypassing the
                  PDF bottleneck by managing the web version
                  independently
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Documented and trained manager and teammates
                  on the HTML editing workflow so the process
                  could be replicated across other projects
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Reflection
        </h2>
        <div className="w-full space-y-4 leading-relaxed border-2 border-foreground bg-card p-6">
          <p>
            The finalized user's guide totaled 291 pages
            covering 12 projector models, published in both a
            navigable HTML format on the North American website
            and as a PDF distributed by the overseas team. Additional in-box
            warranty, quick reference sheet, and FAQs
            were handled independently by the North American
            team.
          </p>
          <p>
            This project was one of the more complex
            collaborations I worked on, involving not just the
            writing itself but navigating a cross-branch
            documentation workflow with significant structural
            gaps. The PDF bottleneck in particular highlighted
            how version control and clear revision workflows are
            as critical to documentation quality as the writing
            itself. Without a reliable system for tracking
            edits, carefully written changes risk being lost
            entirely.
          </p>
          <p>
            Proofreading and rewriting translated content also
            reinforced how localization is more than
            word-for-word translation. Maintaining consistent
            terminology and natural reading flow requires the
            same kind of intentional structure that good source
            writing does, and working through those
            inconsistencies gave me a clearer appreciation for
            how translation memory systems and style guides
            function as essential infrastructure for global
            documentation teams.
          </p>
          <p>
            Stepping into a more autonomous role during a period
            of reduced team capacity also meant taking ownership
            of decisions that would normally involve more senior
            input. Working closely with my manager to verify
            those decisions and then training teammates on the
            HTML workflow turned an initially difficult
            situation into a process improvement that benefited
            the broader team.
          </p>
        </div>
      </section>

      {/* Tags */}
      <section className="mb-16">
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-foreground text-background uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <ProjectNavigation currentSlug="online-users-guide" />
    </div>
  );
}