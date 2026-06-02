/**
 * PROJECTS LISTING PAGE
 *
 * File: /src/app/pages/Projects.tsx
 * Route: /projects
 *
 * Description:
 * Portfolio projects listing page with tag-based filtering system.
 * Displays all projects in a grid layout with ability to filter by technology/skill tags.
 *
 * Features:
 * - Tag-based filtering (multi-select)
 * - Project grid with preview images
 * - Project numbering with leading zeros (01, 02, etc.)
 * - Links to individual project detail pages
 * - Dynamic tag collection from project data
 *
 * Data Source:
 * All project information comes from /src/app/data/projects.ts
 *
 * Sections:
 * 1. PAGE HEADER - Title and description
 * 2. FILTER SECTION - Tag buttons for filtering projects
 * 3. PROJECT GRID - Filtered project cards with links
 *
 * Related Files:
 * - Project data: /src/app/data/projects.ts (centralized project info)
 * - Individual project pages: /src/app/pages/projects/*.tsx
 * - Routes: /src/app/routes.ts
 *
 * State:
 * - selectedTags: Array of currently active filter tags
 *
 * CSS/Styles:
 * - Tailwind CSS v4 inline classes
 * - Theme tokens: /src/styles/theme.css
 * - Typography: /src/styles/fonts.css
 */

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState, useMemo } from "react";
import { projects, type Project } from "../data/projects";

export function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from all projects
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects;
    }
    return projects.filter(project => 
      selectedTags.some(selectedTag => project.tags.includes(selectedTag))
    );
  }, [selectedTags]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* ========================================
          SECTION 1: PAGE HEADER
          ======================================== */}
      {/*
        Header with page title and description
      */}
      <section className="mb-12 border-b-2 border-dashed border-foreground/30 pb-8">
        <div className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
          Portfolio Archive
        </div>
        <h1 className="text-4xl md:text-5xl uppercase tracking-tight mb-4">
          Selected Works
        </h1>
        <p className="text-lg max-w-3xl leading-relaxed">
          A curated collection of projects spanning brand identity, web development, and editorial design. 
          Each piece represents a unique challenge and creative solution.
        </p>
      </section>

      {/* ========================================
          SECTION 2: FILTER SECTION
          ======================================== */}
      {/*
        Tag-based filtering system

        Features:
        - Multi-select tag buttons
        - Active tags highlighted with inverted colors
        - "Clear All" button (shows when filters active)
        - Tags dynamically collected from all projects

        Logic:
        - allTags: Collected from all project.tags, sorted alphabetically
        - toggleTag: Add/remove tag from selectedTags array
        - filteredProjects: Shows projects matching ANY selected tag
      */}
      <section className="mb-8 bg-card border-2 border-foreground p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h3 className="uppercase tracking-wide font-bold">Filter by Tags</h3>
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 border border-foreground uppercase tracking-wide text-sm hover:bg-foreground hover:text-background transition-colors self-start md:self-auto"
            >
              Clear All ({selectedTags.length})
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 border-2 border-foreground uppercase tracking-wide text-sm transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-foreground text-background"
                  : "bg-background hover:bg-foreground hover:text-background"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        {selectedTags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-foreground/20">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        )}
      </section>

      {/* ========================================
          SECTION 3: PROJECT GRID
          ======================================== */}
      {/*
        Filtered project cards grid

        Features:
        - Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
        - Each card shows: project number, image placeholder, title, category, year
        - Links to individual project pages (/projects/:slug)
        - Project numbering with leading zeros (id 1 → "01", id 10 → "10")
        - Empty state when no projects match filters

        Data:
        - Displays filteredProjects (filtered by selected tags)
        - Project info from /src/app/data/projects.ts
      */}
      <section className="mb-16">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 border-2 border-dashed border-foreground/30">
            <p className="text-xl mb-2">No projects found</p>
            <p className="text-muted-foreground mb-6">
              Try selecting different tags or clear the filters
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <article 
                key={project.id} 
                className="border-2 border-foreground bg-card p-6 md:p-8 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
              >
                <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                  {/* Project Meta */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-2xl md:text-3xl uppercase leading-tight">
                        {project.title}
                      </h2>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-bold mr-2 w-24">CATEGORY:</span>
                        <span>{project.category}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-bold mr-2 w-24">YEAR:</span>
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-background border border-foreground text-xs uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="flex flex-col justify-between">
                    <p className="leading-loose mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-4">
                      <Link 
                        to={`/projects/${project.slug}`}
                        className="px-6 py-2 border-2 border-foreground uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer Note */}
      <div className="text-center text-sm text-muted-foreground mt-16 pt-8 border-t border-foreground/20">
        <p>◆ {projects.length} Projects ◆ More to come ◆</p>
      </div>
    </div>
  );
}