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
            View the published setup guide as a{" "}
            <a
              target="_blank"
              className="hover:underline"
              href="https://files.support.epson.com/docid/cpd6/cpd64764.pdf"
            >
              <strong>PDF</strong>
            </a>
            .
          </p>
          <p>
            This setup guide gives customers clear, step-by-step
            instructions for assembling a large-format
            commercial printer. The product manager asked for a
            new guide so customers and their teams could put the
            printer together at industrial sites without needing
            Epson-certified installers. The final guide can be
            printed or viewed online, since assemblers might not
            always have a computer or phone nearby. Printed
            copies come with the product and include the
            warranty.
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
                  Canada, requiring localization in both English
                  and French within a single printable document.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Print cost had to be managed while ensuring
                  all text and visuals remained clear and
                  legible in black and white.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Some line art from the parent company overseas
                  did not match the assembly steps, requiring
                  coordination with in-house graphic designers
                  to produce new illustrations for complex steps
                  and location-specific actions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  A tight timeline arose when the product
                  manager needed a draft ready for a trade
                  convention where the printer would be
                  assembled and shown to buyers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Coordinating with the French localization team
                  required scheduling around their workload and
                  other assignments.
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
                  guide.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Combined the setup guide and warranty into a
                  single 64-page document to reduce print costs
                  and keep all necessary information together.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Limited line art to steps with
                  location-specific actions or complex assembly,
                  reducing illustration volume while maintaining
                  clarity.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Wrote English copy with localization in mind,
                  keeping sentences simple and concise to
                  prevent French translations from overrunning
                  line lengths or disrupting layout.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Worked with senior writers and the product
                  manager to identify content that could be
                  condensed without losing clarity.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Coordinated the timeline with the French
                  localizer to balance competing priorities and
                  meet the convention deadline.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Communicated with in-house graphic designers
                  to replace inaccurate parent company
                  illustrations with new line art that matched
                  each assembly step precisely.
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
            The final document was 64 pages long, including a
            27-page setup guide and a 5-page warranty, both in
            English and French. By combining what could have
            been two separate documents into one print-friendly
            package, we lowered production costs without losing
            clarity. This project showed how important it is to
            think about localization from the beginning, not
            just at the end. Keeping the English text short and
            simple made it easier for the French translation to
            fit the layout, which influenced every writing
            choice we made.
          </p>
          <p>
            Having a tight deadline made it clear that early
            teamwork between product management, graphic design,
            and localization was key to keeping the project
            moving. If one part was delayed, everything else
            would have been held up, so staying in touch was
            just as important as the writing. Designing for
            print first, with online access as a backup, was a
            unique challenge that made us focus on being clear
            rather than just brief. Each step needed to be
            understandable on its own, since users might not be
            able to look up extra information.
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