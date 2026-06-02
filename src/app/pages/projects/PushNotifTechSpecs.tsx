import { Link } from "react-router";
import { projects } from "../../data/projects";

export function PushNotifTechSpecs() {
  const project = projects.find(p => p.slug === "push-notif-tech-specs")!;

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
          Project {String(project.id).padStart(2, '0')} / {project.category}
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
            Built a responsive web platform for historical document archiving with advanced search 
            capabilities and document preservation tools.
          </p>
          <p>
            This platform enables researchers, historians, and the public to access thousands of 
            digitized historical documents. The system includes metadata tagging, OCR text search, 
            high-resolution image viewing, and collaborative annotation features.
          </p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">The Challenge</h3>
            <p className="leading-loose">
              Create a scalable platform that handles large volumes of high-resolution scanned documents 
              while providing intuitive search and browsing capabilities for users with varying technical 
              expertise.
            </p>
          </div>
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">The Solution</h3>
            <p className="leading-loose">
              Implemented a modern React-based frontend with TypeScript for type safety, integrated with 
              a robust backend API. Built custom search algorithms and image optimization pipelines for 
              optimal performance.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Technical Stack
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Frontend</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>React 18 with TypeScript</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>React Router for Navigation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Tailwind CSS Styling</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Progressive Image Loading</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Features</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Full-Text Search with OCR</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Advanced Filtering & Facets</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Zoomable Image Viewer</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Collaborative Annotations</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Performance</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Image CDN Integration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Lazy Loading & Code Splitting</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Responsive Design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Accessibility (WCAG 2.1 AA)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Key Features
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">Advanced Search Engine</h4>
            <p className="leading-loose">
              Implemented full-text search across OCR-processed documents with support for Boolean 
              operators, phrase matching, and fuzzy search to account for OCR errors in historical texts.
            </p>
          </div>
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">Collection Management</h4>
            <p className="leading-loose">
              Built an intuitive interface for curators to organize documents into collections, add 
              metadata, and manage access permissions for different user groups.
            </p>
          </div>
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">Interactive Document Viewer</h4>
            <p className="leading-loose">
              Developed a high-performance image viewer with pan, zoom, and rotation capabilities, 
              supporting multi-page documents and side-by-side comparison views.
            </p>
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

      {/* Navigation */}
      <div className="border-t-2 border-foreground pt-8 flex justify-between">
        <Link
          to="/projects/uxcopy-push-notif"
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          ← Previous Project
        </Link>
        <Link
          to="/projects/content-audit-optimize"
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          Next Project →
        </Link>
      </div>
    </div>
  );
}