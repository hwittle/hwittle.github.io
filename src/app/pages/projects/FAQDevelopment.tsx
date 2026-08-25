import { useNavigate } from "react-router";
import { projects } from "../../data/projects";
import { ProjectNavigation } from "../../components/ProjectNavigation";

export function FAQDevelopment() {
  const navigate = useNavigate();
  const project = projects.find(
    (p) => p.slug === "faq-development",
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
            View an example of a published set of{" "}
            <a
              target="_blank"
              className="hover:underline"
              href="https://epson.com/Support/Projectors/PowerLite-Series/Epson-PowerLite-EB-L265F/s/SPT_V11HA72120#faq"
            >
              <strong>FAQs</strong>
            </a>
            .
          </p>
          <p>
            To support product launches for a wide range of
            consumer printers, business printers, and
            projectors, we created and maintained a scalable FAQ
            system. Instead of starting from scratch each time,
            we built a library of reusable FAQ templates
            organized by product type. This made it easy to
            quickly publish general FAQs, while product-specific
            FAQs were developed together with the user guides.
          </p>
          <p>
            Once the FAQs go live on a product’s support page,
            they are sorted into tabs with several questions in
            each. They are also available in multiple languages
            to help customers in North America and Latin
            America.
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
                <span>
                  Categorized HTML FAQ pages with search
                  functionality
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Product-specific FAQs link to user's guide,
                  inheriting future updates
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  English, French, Spanish, Portuguese
                </span>
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
                  Commercial users for personal, creative, or
                  small-scaled events
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Business users for office, professional, or
                  large-scaled venues
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
                <span>Adobe Dreamweaver</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Contiem CMS (previously Orbis)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Oxygen XML Editor</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Publishing Workflow
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Authored in Oxygen XML Editor and output as
                  HTML
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  HTML files cleaned, formatted via script, and
                  edited in Dreamweaver if needed
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Submitted to IT for upload to the FAQ
                  database, verified on test site, then synced
                  to official site
                </span>
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
                  Assigned to both the technical documentation
                  and FAQ teams, with FAQ assignments sometimes
                  covering products whose user's guides were
                  handled by a separate writer.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Product-specific FAQs rely heavily on
                  finalized user guide content approved by
                  product management and the writing team.
                  Delays in the documentation pipeline directly
                  bottleneck FAQ delivery.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  * Shifting launch dates and product manager
                  delays created unpredictable timelines. This
                  shortened the time between receiving finalized
                  materials and the product reaching the first
                  customer.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Localization requests had to be coordinated
                  with a shared localization team responsible
                  for multiple languages and concurrent
                  projects. This added another scheduling
                  dependency to an already tight workflow.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  The HTML publishing workflow required routing
                  files through a technical intermediary who ran
                  a cleanup script before upload. This created a
                  scheduling constraint because that team member
                  ended their workday an hour earlier than the
                  writing team.{" "}
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
                  Maintained active communication during product
                  meetings to stay ahead of shifting timelines
                  and anticipate delays before they became
                  serious.{" "}
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  When delays were expected, deployed general
                  FAQs from the existing library that applied to
                  the product. This ensured the FAQ section was
                  populated with accurate baseline content while
                  product-specific FAQs were still in
                  development.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Tracked shipping dates and estimated
                  first-customer dates to establish a clear
                  deadline for when all FAQs needed to be live.
                  Worked backward from that date to manage
                  localization requests and upload schedules.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Coordinated localization requests with the
                  translation team, reviewed returned content
                  for accuracy and consistency, and managed the
                  full upload and verification process for all
                  translated FAQ versions.{" "}
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Contributed to and maintained the FAQ template
                  library, adding comments to indicate which
                  product types each template applied to. This
                  enabled faster deployment across future
                  product launches and manual uploading if the
                  database did not sync in time.
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
            The FAQ system I worked on helped support product
            launches for several product lines. For each launch,
            we used a library of reusable templates that
            included 5 to 20 general FAQs for each product type,
            plus 20 to 60 product-specific FAQs depending on the
            category.
          </p>
          <p>
            Keeping the template library organized proved
            especially helpful when launch dates were moved up.
            If the user guide wasn’t finished yet, we could
            still publish general FAQs so the support page was
            never empty at launch. Once the final materials were
            ready, we added the product-specific FAQs to keep
            everything accurate without delaying the launch.
          </p>
          <p>
            This project showed me that writing FAQs is just as
            much about managing workflows as it is about
            writing. Good content depended on working closely
            with product management, technical documentation,
            localization, and the publishing team all at once.
            Planning ahead and staying on top of these tasks was
            key to keeping launches on track.
          </p>
          <p>
            One thing I would change is the HTML publishing
            workflow. Sending files to a technical team member
            for a cleanup script created a daily scheduling
            bottleneck. If we could handle the script ourselves
            or automate it, we would remove this bottleneck from
            every publish cycle, not just during busy times.
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

      <ProjectNavigation currentSlug="faq-development" />
    </div>
  );
}