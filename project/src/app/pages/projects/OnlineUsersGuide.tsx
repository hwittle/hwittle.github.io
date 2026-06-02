import { Link } from "react-router";
import { projects } from "../../data/projects";

export function OnlineUsersGuide() {
  const project = projects.find(p => p.slug === "online-users-guide")!;

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
          <p>
            Comprehensive UI component library inspired by vintage typewriters and mechanical aesthetics, 
            built with modern web technologies.
          </p>
          <p>
            This open-source design system bridges the gap between nostalgic analog aesthetics and 
            contemporary digital interfaces. It provides developers with a complete toolkit of accessible, 
            customizable components that evoke the tactile feel of mechanical devices.
          </p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">The Challenge</h3>
            <p className="leading-loose">
              Create a design system that captures the essence of vintage typewriters while meeting 
              modern standards for accessibility, performance, and developer experience. The system needed 
              to be flexible enough for various use cases.
            </p>
          </div>
          <div className="bg-card border-2 border-foreground p-8">
            <h3 className="text-2xl uppercase mb-4">The Solution</h3>
            <p className="leading-loose">
              Developed a comprehensive component library with React and TypeScript, including extensive 
              documentation, design tokens, and customization options. Built with accessibility and 
              performance as core principles.
            </p>
          </div>
        </div>
      </section>

      {/* Component Library */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Component Library
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Form Elements</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Text Inputs & Textareas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Checkboxes & Radio Buttons</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Select Dropdowns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Toggle Switches</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>File Upload</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Navigation</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Navigation Bars</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Breadcrumbs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Tabs & Accordions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Pagination</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Sidebars & Menus</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Content Display</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Cards & Panels</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Tables & Data Grids</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Lists & Timeline</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Badges & Tags</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Typography Components</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Feedback</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Alerts & Notifications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Modals & Dialogs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Tooltips & Popovers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Loading Indicators</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Progress Bars</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Media</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Image Components</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Avatar & Profile Pictures</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Icon System</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Gallery Components</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Video Players</span>
              </li>
            </ul>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">Utilities</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Layout Containers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Dividers & Separators</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Spacing Utilities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Color System</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Responsive Helpers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Technical Features
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">Accessibility First</h4>
            <p className="leading-loose">
              Every component meets WCAG 2.1 AA standards with keyboard navigation, screen reader support, 
              ARIA attributes, and focus management built-in from the ground up.
            </p>
          </div>
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">TypeScript Support</h4>
            <p className="leading-loose">
              Written entirely in TypeScript with comprehensive type definitions, providing excellent 
              IntelliSense support and catching errors at compile time rather than runtime.
            </p>
          </div>
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">Design Tokens</h4>
            <p className="leading-loose">
              Implemented a complete design token system for colors, typography, spacing, and animations. 
              Tokens can be customized globally or per-component for maximum flexibility.
            </p>
          </div>
          <div className="border-l-4 border-foreground pl-6">
            <h4 className="font-bold mb-2 uppercase">Comprehensive Documentation</h4>
            <p className="leading-loose">
              Built an interactive documentation site with live code examples, playground environments, 
              and detailed API references. Includes guidelines for patterns and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Community Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">12K+</div>
            <div className="uppercase tracking-wide">GitHub Stars</div>
          </div>
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="uppercase tracking-wide">Production Sites</div>
          </div>
          <div className="bg-card border-2 border-foreground p-6 text-center">
            <div className="text-4xl font-bold mb-2">85</div>
            <div className="uppercase tracking-wide">Contributors</div>
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
          to="/projects/printed-setup-guide"
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          ← Previous Project
        </Link>
        <Link
          to="/projects/faq-development"
          className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          Next Project →
        </Link>
      </div>
    </div>
  );
}