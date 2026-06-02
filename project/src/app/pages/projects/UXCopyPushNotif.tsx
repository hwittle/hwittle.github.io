import { Link } from "react-router";
import { useNavigate } from "react-router";
import { projects } from "../../data/projects";

export function UXCopyPushNotif() {
  const navigate = useNavigate();
  const project = projects.find(
    (p) => p.slug === "uxcopy-push-notif",
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
              CONTEXT:
            </span>
            <span>UXcel Brief</span>
          </div>
          <div>
            <span className="font-bold block mb-1">YEAR:</span>
            <span>{project.year}</span>
          </div>
          <div>
            <span className="font-bold block mb-1">ROLE:</span>
            <span>UX Writer (Solo)</span>
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
            Complete brand identity for a local artisan coffee
            shop, including logo design, menu layouts, and
            packaging materials. Emphasis on rustic, handcrafted
            aesthetics.
          </p>
          <p>
            The project aimed to capture the essence of
            traditional coffee culture while appealing to modern
            sensibilities. We drew inspiration from vintage
            coffee advertisements and hand-lettered signage from
            the early 20th century.
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
              Create a cohesive brand identity that stands out
              in a saturated market while maintaining
              authenticity and warmth. The café needed to appeal
              to both coffee purists and casual visitors.
            </p>
          </div>
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">
              The Solution
            </h3>
            <p className="leading-loose">
              Developed a vintage-inspired identity system
              featuring hand-drawn typography, earthy color
              palette, and tactile materials that evoke
              nostalgia while feeling fresh and contemporary.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Deliverables
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Visual Identity
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Primary & Secondary Logos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Color Palette & Typography System</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Brand Guidelines Documentation</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Print Materials
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Menu Design (In-store & Takeout)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Packaging (Cups, Bags, Boxes)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Business Cards & Stationery</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Signage
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Exterior Storefront Signage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Interior Wayfinding & Decor</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Chalkboard Menu Templates</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Digital Assets
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Social Media Templates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Website Design Mockups</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Email Newsletter Templates</span>
              </li>
            </ul>
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
        <Link
          to="/projects/push-notif-tech-specs"
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          Next Project →
        </Link>
      </div>
    </div>
  );
}