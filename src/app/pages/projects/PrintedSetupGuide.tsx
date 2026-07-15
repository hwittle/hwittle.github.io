import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

export function PrintedSetupGuide() {
  const navigate = useNavigate();
  const project = projects.find(
    (p) => p.slug === "printed-setup-guide",
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
              href="https://files.support.epson.com/docid/cpd6/cpd64769/index.html"
            >
              <strong>HTML</strong>
            </a>{" "}
            or{" "}
            <a
              target="_blank"
              className="hover:underline"
              href="https://files.support.epson.com/docid/cpd6/cpd64769.pdf"
            >
              <strong>PDF</strong>.
            </a>
          </p>
          <p>
            This setup guide was created to provide customers a
            clear, step-by-step assembly process for a
            large-format commercial printer. The product manager
            requested a new formatted guide specifically
            designed for customers and their teams to
            self-assemble the printer at industrial sites
            without requiring Epson-certified installers. The
            finalized document was designed to be both printable
            and accessible online, as assemblers may not have
            convenient access to a computer or phone during
            setup. Printed versions were packaged with the
            product and included the warranty.
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
                <span>Printed</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Bilingual (English/French)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Black and white</span>
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
                <span>Business customers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Assembly teams</span>
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
                <span>Adobe InDesign</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Adobe Acrobat for PDF/X output</span>
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
                <span>Packaged with product</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Available as online PDF</span>
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
                  The printer sells in the United States and
                  Canada, requiring the document to be
                  localizedin both English and French within a
                  single printable document
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Print cost had to be carefully managed while
                  ensuring all textual and visual information
                  remained clear and legible in black and white
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Some line art provided by the parent company
                  overseas did not accurately correlate to the
                  assembly steps, requiring coordination with
                  in-house graphic designers to produce new
                  illustrations for complex steps and
                  location-specific actions
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  A tight timeline was introduced when the
                  product manager needed a draft ready for a
                  trade convention where the printer would be
                  physically assembled and presented to buyers
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Coordinating with the French localization team
                  required scheduling around their existing
                  workload and other document assignments
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
                  Collaborated with the product manager,
                  large-format printer team, in-house graphic
                  designers, and the French localization team to
                  produce a concise and print-optimized setup
                  guide
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Combined the setup guide and warranty into a
                  single 64-page document to reduce print costs
                  while keeping all necessary information
                  accessible in one place
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Limited line art to steps requiring
                  location-specific actions or complex assembly,
                  reducing illustration volume while maintaining
                  visual clarity
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Wrote English copy with localization in mind,
                  keeping sentence structure simple and concise
                  to prevent French translations from
                  overrunning line lengths or disrupting layout
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Worked with senior writers and the product
                  manager to identify content that could be
                  condensed without sacrificing clarity
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Coordinated timeline with the French localizer
                  to balance competing document priorities and
                  meet the convention deadline
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Communicated with in-house graphic designers
                  to replace inaccurate parent company
                  illustrations with new line art that precisely
                  matched each assembly step
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
            The finalized document totaled 64 pages, a 27-page
            setup guide and 5-page warranty in both English and
            French, combining what could have been two separate
            documents into a single print-optimized package that
            reduced production costs without sacrificing
            clarity. This project reinforced the importance of
            writing with localization in mind from the start
            rather than treating translation as a final step.
            Keeping English copy concise and structurally simple
            directly affected how cleanly the French translation
            fit within the existing layout, a consideration that
            shaped every writing decision throughout the
            document.
          </p>
          <p>
            Working under a convention deadline also highlighted
            how early collaboration across teams including
            product management, graphic design, and localization
            is essential to keeping a complex document on track.
            Waiting on any one dependency would have delayed the
            others, so maintaining open communication throughout
            was as important as the writing itself. The
            constraint of designing for print-first,
            internet-optional access was an interesting
            challenge that pushed toward clarity over brevity.
            Every step had to stand on its own without the
            assumption that a user could easily search for
            clarification elsewhere.
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

      <ProjectNavigation currentSlug="printed-setup-guide" />
    </div>
  );
}