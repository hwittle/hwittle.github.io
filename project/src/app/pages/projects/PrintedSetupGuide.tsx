import { Link } from "react-router";
import { projects } from "../../data/projects";

export function PrintedSetupGuide() {
  const project = projects.find(p => p.slug === "printed-setup-guide")!;

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
            <span className="font-bold block mb-1">COMPANY:</span>
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
          <p><a href="https://files.support.epson.com/docid/cpd6/cpd64764.pdf">Click here to view the online PDF on the official site.</a></p>
          <p>
            The setup guide was created to provide customers an ease of assembly for a large-format printer. 
            This is a new formatted guide requested by the product manager to assist customers in setup since this printer does not need Epson-certified installers.
          </p>
          <p>
            The finalized document allowed users to print and access quick instructions when setting up the printer at industrial sites.
            Printed versions were packaged with the product box and included the warranty.
          </p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">The Challenge</h3>
            <p className="leading-loose">
              The product was sold in the United States and Canada, requiring text to be localized in English and French. 
              Cost of print had to be considered while making sure textual and visual information is clear.
            </p>
          </div>
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">The Solution</h3>
            <p className="leading-loose">
              Collaborated with product manager, large-format printer team, and localization to produce a concise setup guide. Setup instructions were combined with its warranty to save cost on printing two separate documents.
              Line arts are limited to instructions requiring location-specific actions. Communicated with French localization in making sure the English counterpart is simple since French words can be longer and run off into
              a new line.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Product Customizer</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Real-time Design Preview</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Typography Selection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Color & Paper Options</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Layout Templates</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">E-commerce Features</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Secure Payment Processing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Order Tracking System</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Customer Account Portal</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Saved Designs Library</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Design Tools</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Drag & Drop Interface</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Image Upload & Editing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Text Formatting Tools</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Alignment & Spacing Controls</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Production Integration</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Print-Ready PDF Export</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Automated Order Management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Inventory Tracking</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Proofing Workflow</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Results & Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">240%</div>
            <div className="uppercase tracking-wide">Increase in Online Sales</div>
          </div>
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">4.8/5</div>
            <div className="uppercase tracking-wide">Customer Satisfaction</div>
          </div>
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">65%</div>
            <div className="uppercase tracking-wide">Reduced Order Errors</div>
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
          to="/projects/content-audit-optimize"
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          ← Previous Project
        </Link>
        <Link
          to="/projects/online-users-guide"
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          Next Project →
        </Link>
      </div>
    </div>
  );
}