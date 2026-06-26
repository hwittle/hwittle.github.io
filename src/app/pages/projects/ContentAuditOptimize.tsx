import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

export function ContentAuditOptimize() {
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === "content-audit-optimize")!;

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
            <span className="font-bold block mb-1">CONTEXT:</span>
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
            Developed an immersive portfolio website for a photographer specializing in analog 
            photography, featuring full-screen galleries and filtering.
          </p>
          <p>
            Sarah Mitchell's work with film photography required a digital showcase that honored the 
            medium's unique qualities—grain, texture, and the deliberate pace of analog capture. The site 
            needed to feel both nostalgic and contemporary, showcasing her images in their full glory.
          </p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">The Challenge</h3>
            <p className="leading-loose">
              Create a portfolio site that does justice to high-resolution scanned film photographs while 
              maintaining fast load times and smooth navigation. The interface needed to get out of the 
              way and let the work speak.
            </p>
          </div>
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">The Solution</h3>
            <p className="leading-loose">
              Built a React-based gallery with advanced image optimization, lazy loading, and smooth 
              animations. Implemented an intuitive filtering system and full-screen viewing experience 
              with keyboard navigation.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Technical Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Gallery System</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Full-Screen Lightbox</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Masonry Grid Layout</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Keyboard Navigation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Touch Gestures (Mobile)</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Image Optimization</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Responsive Image Srcsets</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Progressive JPEG Loading</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>WebP with Fallbacks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Lazy Loading & Preloading</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Filtering & Organization</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Multi-Category Filtering</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Date Range Selection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Film Type Tags</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Collection Curation</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Animation & Interaction</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Smooth Page Transitions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Parallax Effects</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Hover State Previews</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Fade-In Animations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Key Features
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">Immersive Viewing Experience</h4>
            <p className="leading-loose">
              Designed a distraction-free, full-screen viewing mode that lets visitors appreciate the 
              subtle details of analog photography. Images scale intelligently to fit any screen while 
              maintaining their aspect ratios.
            </p>
          </div>
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">Smart Loading Strategy</h4>
            <p className="leading-loose">
              Implemented intelligent image loading that prioritizes visible images while preloading 
              adjacent photos for seamless navigation. Thumbnail previews load instantly while high-res 
              versions progressively enhance.
            </p>
          </div>
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">Collections & Series</h4>
            <p className="leading-loose">
              Built a flexible system for organizing photos into themed collections and series, allowing 
              Sarah to present her work in curated narratives that tell stories through sequential images.
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Performance & Results
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">&lt;2s</div>
            <div className="uppercase tracking-wide">Initial Load Time</div>
          </div>
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">350%</div>
            <div className="uppercase tracking-wide">More Gallery Views</div>
          </div>
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">28</div>
            <div className="uppercase tracking-wide">New Client Inquiries</div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="mb-16">
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span key={tag} className="px-4 py-2 bg-foreground text-background uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <ProjectNavigation currentSlug="content-audit-optimize" />
    </div>
  );
}