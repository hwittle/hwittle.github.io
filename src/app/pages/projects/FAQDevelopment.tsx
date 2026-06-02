import { Link } from "react-router";
import { useNavigate } from "react-router";
import { projects } from "../../data/projects";

export function FAQDevelopment() {
  const navigate = useNavigate();
  const project = projects.find(
    (p) => p.slug === "faq-development",
  )!;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Navigation */}
      <Link
        to="/"
        className="inline-flex items-center mb-8 uppercase tracking-wide hover:underline"
      >
        ← Back to Home
      </Link>

      {/* Project Header */}
      <header className="mb-12 border-b-2 border-dashed border-foreground/30 pb-8">
        <div className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
          Project {String(project.id).padStart(2, "0")} /{" "}
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
        <div className="max-w-3xl space-y-4 leading-loose">
          <p>
            For a company with multiple product types (consumer
            printers, business printers, projectors, etc.), a
            general set of FAQs were created and maintained when
            and if it applies to the product, such as support or
            recycling FAQs. If the product team requests an FAQ
            to be made specifically for a product or if
            analytics show users are asking support the same
            questions, the new FAQ will be added, saved, and
            categorized for future products.
          </p>
          <p>
            Maintaining a library of FAQs became crucial when
            multiple products launch and they are have different
            categorizations and potentially newly added
            features.
          </p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">
              The Challenge
            </h3>
            <p className="leading-loose">
              I worked for two teams in the design and documents
              department, tech docs and FAQ. When a product is
              assigned a different tech writer and I am assigned
              FAQs, delay that trickles from product managers
              and moving forward of dates affect the
              deliverables. A considerable amount of FAQs rely
              on the User's Guide the tech writer produces in
              order to pull the most accurate information
              already approved by product management and the
              writing team.
            </p>
          </div>
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">
              The Solution
            </h3>
            <p className="leading-loose">
              Communication during product meetings are a must.
              Workarounds that I employed if delays are inbound
              are to upload general FAQs that we have saved in
              our library that applies to the product. This will
              ensure the FAQ section is not lacking of general
              information until I obtain finalized information
              to be used on product-specific FAQs. I get a
              shipping date and an estimated date of when the
              product will reach the first customer's hands and
              work to have all FAQs uploaded before then.
            </p>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Design Principles
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">
              Typography as Content
            </h4>
            <p className="leading-loose">
              Selected a harmonious pairing of serif and
              sans-serif typefaces optimized for screen reading.
              Established a modular scale for consistent
              hierarchy throughout articles.
            </p>
          </div>
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">
              Minimal Distraction
            </h4>
            <p className="leading-loose">
              Removed unnecessary UI elements during reading.
              Navigation and sharing tools elegantly appear only
              when needed, allowing readers to focus on the
              content.
            </p>
          </div>
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">
              Responsive Excellence
            </h4>
            <p className="leading-loose">
              Optimized reading experience for every screen
              size, from mobile phones to ultra-wide displays.
              Typography scales fluid­ly while maintaining ideal
              measure and leading.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Features & Functionality
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Content Management
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Headless CMS Integration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Rich Text Editor</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Media Library Management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Publishing Workflow</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Reader Experience
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Reading Time Estimates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Progress Indicators</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Bookmarking System</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Dark Mode Support</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Discovery
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Category & Tag System</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Related Articles</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Full-Text Search</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Newsletter Signup</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Performance
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Static Site Generation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Image Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Progressive Web App</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Offline Reading</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Impact Metrics
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">+180%</div>
            <div className="uppercase tracking-wide">
              Average Read Time
            </div>
          </div>
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">45%</div>
            <div className="uppercase tracking-wide">
              Lower Bounce Rate
            </div>
          </div>
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">95</div>
            <div className="uppercase tracking-wide">
              Lighthouse Score
            </div>
          </div>
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

      {/* Navigation - manually coded, do not sync from Figma */}
      <div className="border-t-2 border-foreground pt-8 flex justify-between">
        <Link
          to="/projects/online-users-guide"
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          ← Previous Project
        </Link>
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
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          All Projects
        </button>
      </div>
    </div>
  );
}