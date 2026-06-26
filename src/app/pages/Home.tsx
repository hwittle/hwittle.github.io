/**
 * HOME PAGE COMPONENT - SINGLE PAGE PORTFOLIO
 *
 * File: /src/app/pages/Home.tsx
 * Route: / (root/home - ONLY PAGE)
 *
 * Description:
 * Single-page portfolio website featuring a vintage typewriter/newspaper aesthetic.
 * All content on one scrollable page - no separate Projects page.
 * Designed to be responsive across desktop, tablet, and mobile devices.
 *
 * Sections:
 * 1. HERO - Full-viewport newspaper headline with name, title, scroll indicator
 * 2. ABOUT - Biography and portrait placeholder in two-column layout
 * 3. PROJECTS - Full project listing (6 projects total)
 * 4. CONTACT - Email and phone contact information
 * 5. FOOTER - Site tagline
 *
 * CSS/Styles:
 * - Tailwind CSS v4 (inline classes)
 * - Theme tokens: /src/styles/theme.css (colors, typography)
 * - Font imports: /src/styles/fonts.css (Special Elite, Courier Prime)
 * - Global styles: /src/styles/global.css
 *
 * Layout:
 * Rendered inside Root component (/src/app/pages/Root.tsx) which provides Header navigation
 */

import { getGroupedProjects } from "../data/projects";
import { Link } from "react-router";

export function Home() {
  const groupedProjects = getGroupedProjects();
  const showGroupHeaders = groupedProjects.length > 1;

  return (
    <div className="container mx-auto px-4">
      {/* ========================================
          SECTION 1: HERO - Full-page newspaper headline
          ======================================== */}
      {/*
        HERO SECTION - Full viewport newspaper headline (above the fold)

        Purpose: First impression with vintage newspaper aesthetic
        Layout: Full viewport height (minus header), vertically centered

        Contains:
        - Newspaper masthead (Vol. I · Issue 001 · May 2026)
        - Main headline with name (Whitney Tran)
        - Job title (Technical & UX Writer)
        - Tagline
        - Decorative borders and diamond symbols
        - Fold line (dashed divider)
        - Scroll indicator ("More Below" with down arrow)

        Responsive:
        - Mobile: Smaller font sizes, adjusted spacing
        - Desktop: Larger typography, more spacing

        Note: Height uses calc(100vh-2rem) to account for fixed header height

        Styles:
        - Typography tokens from /src/styles/theme.css
        - Inline Tailwind classes for layout and spacing
      */}
      <section className="h-[calc(100vh-2rem)]  flex flex-col items-center justify-center relative -mx-4 px-4 mb-16">
        {/* Newspaper Masthead */}
        <div className="absolute top-8 left-0 right-0 text-center border-y-4 border-double border-foreground py-3">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden md:block border-t-2 border-foreground w-16"></div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Vol. I · Issue 001 · June 2026
            </div>
            <div className="hidden md:block border-t-2 border-foreground w-16"></div>
          </div>
        </div>

        {/* Main Headline Content */}
        <div className="max-w-4xl text-center px-4 -mt-4">
          {/* Decorative Top Border */}
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <div className="border-t-2 border-foreground w-8 md:w-12"></div>
            <div className="text-xl md:text-2xl">◆</div>
            <div className="border-t-2 border-foreground w-8 md:w-12"></div>
          </div>

          <div className="mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
            Est. 2026
          </div>
          <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight border-y-2 border-foreground py-4 md:py-6">
            Whitney Tran
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 leading-relaxed uppercase tracking-wide">
            Technical & UX Writer
          </p>
          <p className="text-sm md:text-base leading-loose max-w-2xl mx-auto">
            Writing that meets people where they are. Crafting
            content that simplifies complexity, one word at a
            time.
          </p>

          {/* Decorative Bottom Border */}
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
            <div className="border-t-2 border-foreground w-8 md:w-12"></div>
            <div className="text-xl md:text-2xl">◆</div>
            <div className="border-t-2 border-foreground w-8 md:w-12"></div>
          </div>
        </div>

        {/* Fold Line and Scroll Indicator grouped together */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0">
          <div className="border-t-2 border-dashed border-foreground/20 w-full"></div>
          <div className="flex flex-col items-center animate-bounce mt-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              More Below
            </div>
            <div className="text-2xl text-foreground">↓</div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 2: ABOUT - Biography and portrait
          ======================================== */}
      {/*
        ABOUT SECTION

        Purpose: Introduce background and expertise
        Layout: Two-column grid (text left, portrait placeholder right)

        Contains:
        - Section heading with left border accent
        - Biography text (3 paragraphs)
        - Portrait placeholder image area

        Responsive:
        - Mobile: Single column, stacked layout
        - Desktop: Two columns side-by-side

        Styles:
        - border-l-4: Left accent border on heading
        - bg-card: Background color from theme tokens (/src/styles/theme.css)
        - Text styling inherits from global typography
      */}
      <section className="mb-16 border-b-2 border-dashed border-foreground/30 pb-12 mt-12">
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="min-w-0">
            <h2 className="text-3xl mb-6 uppercase tracking-wide border-l-4 border-foreground pl-4">
              About
            </h2>
            <p className="mb-4 leading-relaxed">
              I've spent three years turning technical
              complexity into content that actually makes sense
              to people. Before that, I taught K–12 students to
              build games and apps, and learned that the moment
              someone stops feeling intimidated and starts
              leaning in is worth every word you choose
              carefully.
            </p>
            <p className="mb-4 leading-relaxed">
              That experience shapes how I write. Programming
              focuses on functionality, writing on translation,
              UX on navigation. The best experiences happen when
              all three work together. That's the balance I
              bring to every project: content that's clear
              enough to move people forward without making
              complexity feel overwhelming.
            </p>
          </div>
          <div className="min-w-0">
            <h2 className="text-3xl mb-6 uppercase tracking-wide border-l-4 border-foreground pl-4">
              Contact & Links
            </h2>
            <div className="bg-card border-2 border-foreground p-8 w-full">
              <p className="mb-6 leading-loose"></p>
              <div className="space-y-3">
                <div className="flex items-center min-w-0">
                  <span className="font-bold mr-4 w-24 shrink-0">
                    EMAIL:
                  </span>
                  <a
                    target="_blank"
                    href="mailto:whitney.tran@proton.me"
                    className="underline hover:text-muted-foreground truncate min-w-0"
                  >
                    whitney.tran@proton.me
                  </a>
                </div>
                <div className="flex items-center min-w-0">
                  <span className="font-bold mr-4 w-24 shrink-0">
                    LINKEDIN:
                  </span>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/whitneytran/"
                    className="underline hover:text-muted-foreground truncate min-w-0"
                  >
                    linkedin.com/in/whitneytran/
                  </a>
                </div>
                <div className="flex items-center min-w-0">
                  <span className="font-bold mr-4 w-24 shrink-0">
                    GITHUB:
                  </span>
                  <a
                    target="_blank"
                    href="https://github.com/hwittle"
                    className="underline hover:text-muted-foreground truncate min-w-0"
                  >
                    github.com/hwittle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 3: PROJECTS - Full portfolio listing
          ======================================== */}
      {/*
        PROJECTS SECTION

        Purpose: Display full portfolio (6 projects total)
        Layout: Project grid with full details

        Contains:
        - Section heading
        - Project grid with full details
        - Links to individual project detail pages

        Features:
        - Project grid layout
        - Project numbering with leading zeros
        - Tags displayed for quick metadata reference

        Data Source:
        - All project information from /src/app/data/projects.ts

        Styles:
        - bg-foreground text-background: Inverted button colors
        - border-2 border-foreground: Bold newspaper-style borders
      */}
      <section
        id="projects"
        className="mb-16 border-b-2 border-dashed border-foreground/30 pb-12"
      >
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl uppercase tracking-tight mb-4">
            Selected Works
          </h2>
          <p className="text-base leading-relaxed">
            A curated collection of projects with each piece
            representing a unique challenge and creative
            solution.
          </p>
        </div>

        {/* Project Groups */}
        <div className="space-y-12">
          {groupedProjects.map(
            ({ group, projects: groupProjects }) => (
              <div key={group}>
                {/* Group header — only shown when there are 2+ groups */}
                {showGroupHeaders && (
                  <h3 className="text-xl uppercase tracking-widest text-muted-foreground mb-6 border-b border-foreground/30 pb-2">
                    {group}
                  </h3>
                )}
                <div className="grid gap-8 md:gap-12">
                  {groupProjects.map((project) => (
                    <article
                      key={project.id}
                      className="border-2 border-foreground bg-card p-6 md:p-8 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                    >
                      <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                        {/* Project Meta */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl uppercase leading-tight">
                              {project.title}
                            </h3>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <span className="font-bold mr-2 w-24">
                                CATEGORY:
                              </span>
                              <span>{project.category}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <span className="font-bold mr-2 w-24">
                                YEAR:
                              </span>
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
                          <p className="leading-relaxed mb-6">
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
              </div>
            ),
          )}
        </div>
      </section>

      {/* ========================================
          SECTION 4: FOOTER - Site tagline
          ======================================== */}
      {/*
        FOOTER

        Purpose: Simple site tagline and branding
        Layout: Centered text with top border

        Contains:
        - Tagline with diamond symbols

        Styles:
        - text-muted-foreground: Muted text color from /src/styles/theme.css
        - border-t: Top border separator
      */}
      <div className="text-center text-sm text-muted-foreground mt-16 pt-8 pb-12 border-t border-foreground/20">
        <p className="text-sm">
          <span className="hidden sm:inline">
            ◆{" "}
            {groupedProjects.reduce(
              (sum, g) => sum + g.projects.length,
              0,
            )}{" "}
            Projects ◆ Est. 2026 ◆ Crafted with care ◆
          </span>
          <span className="sm:hidden">◆ Est. 2026 ◆</span>
        </p>
      </div>
    </div>
  );
}