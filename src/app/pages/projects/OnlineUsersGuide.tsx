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
              <strong>PDF</strong>
            </a>
            .
          </p>
          <p>
            I created this user guide to cover 12 projector
            models in a single document. This helped us avoid
            repeating information while still including details
            for each model and its unique interfaces. While
            working on this, our North American documentation
            team switched to a new template from our parent
            company overseas. This meant we had to work closely
            with our colleagues abroad to ensure the guide met
            both international formatting standards and North
            American legal requirements. In the end, I published
            the guide as a searchable HTML version on the North
            American website and as a PDF managed by the
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
            <h3 className="font-bold mb-3 uppercase">Format</h3>
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
            <h3 className="font-bold mb-3 uppercase">
              Audience
            </h3>
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
            <h3 className="font-bold mb-3 uppercase">
              Tools Used
            </h3>
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
            <h3 className="font-bold mb-3 uppercase">
              Distribution
            </h3>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Navigable and searchable HTML published to
                  North and Latin America websites (handled
                  uploading for localization)
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
                  no unified guide. Required a full feature
                  comparison across all models to determine
                  shared content and model-specific caveats.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  The overseas documentation branch handled the
                  English version of the user's guide for North
                  American markets, but their output lacked the
                  required NA-specific legal compliance content,
                  including coin-battery hazard warnings,
                  laser-safety warnings, and other regulatory
                  notices.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  The translated English copy from the overseas
                  team contained inconsistent grammar and
                  terminology. This suggests an absence of a
                  standardized translation memory or terminology
                  management system.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  The PDF editing workflow required routing all
                  edits back through the overseas team for
                  implementation. This created a significant
                  bottleneck in the revision process.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Version control was inconsistently maintained
                  by the overseas team. This resulted in
                  duplicate guides created from outdated source
                  files that lacked edits previously submitted.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Several senior writers were laid off during
                  this project, reducing the team's capacity
                  amid an already complex cross-branch
                  collaboration.
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
                  Analyzed specifications across all 12 models
                  using color-coded Excel comparisons to
                  identify differences before writing. Verified
                  findings with manager and team lead in
                  internal review meetings, then confirmed the
                  unified guide approach with the product
                  manager.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Established a collaborative relationship with
                  the overseas documentation branch to align on
                  template standards and negotiate the inclusion
                  of NA-specific legal compliance content,
                  including coin battery hazard warnings and
                  laser safety notices.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Proofread and rewrote translated English copy
                  to correct grammar inconsistencies, improve
                  flow, and ensure consistent terminology
                  throughout the 291-page document.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Identified and resolved version control
                  discrepancies by flagging outdated source
                  files and ensuring edits were applied to the
                  correct document version.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Edited HTML output files in Dreamweaver for
                  the North American website publication,
                  bypassing the PDF bottleneck by managing the
                  web version directly.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Documented and trained manager and teammates
                  on the HTML editing workflow to enable
                  replication across other projects.
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
            The completed user's guide was 291 pages long and
            covered 12 projector models. It was published as a
            navigable HTML on the North American website and as
            a PDF for the overseas team. The North American team
            also handled the in-box warranty, quick reference
            sheet, and FAQs separately.
          </p>
          <p>
            This was one of the more complex projects I worked
            on. It involved not only writing but also managing a
            documentation workflow across different branches,
            which had some major gaps. The PDF process
            especially showed me that version control and clear
            revision steps are just as important as good
            writing. Without a solid way to track edits,
            important changes can easily get lost.
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
            short-staffed meant I had to make decisions that
            usually needed senior approval. By working with my
            manager to check those choices and then training
            teammates on the HTML workflow, we turned a tough
            situation into a process improvement that helped the
            whole team.
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