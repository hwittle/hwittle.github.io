/**
 * ROOT LAYOUT COMPONENT
 *
 * File: /src/app/pages/Root.tsx
 * Route: / (parent route for all pages)
 *
 * Description:
 * Root layout wrapper that provides consistent structure across all pages.
 * Uses React Router's Outlet to render child route components.
 *
 * Structure:
 * - Header: Sticky navigation (from /src/app/components/Header.tsx)
 * - Main: Content area where child routes render via <Outlet />
 *
 * Child Routes (defined in /src/app/routes.ts):
 * - / → Home.tsx (landing page)
 * - /projects → Projects.tsx (project listing)
 * - /projects/:slug → Individual project pages
 *
 * CSS/Styles:
 * - min-h-screen: Ensures full viewport height
 * - flex-1: Main area expands to fill available space
 * - Tailwind CSS v4 inline classes
 * - Global styles: /src/styles/global.css
 * - Theme tokens: /src/styles/theme.css
 *
 * Layout Flow:
 * Header (sticky, ~4rem) → Main content (flexible, scrollable)
 */

import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { projects } from "../data/projects";

export function Root() {
  const location = useLocation();

  // Scroll to top on route change, unless the destination handles its own scroll
  useEffect(() => {
    if (
      (location.state as { scrollTo?: string } | null)?.scrollTo
    )
      return;
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation - Sticky at top, rendered on all pages */}
      <Header />

      {/* Main Content Area - Child routes render here via Outlet */}
      <main id="main" className="flex-1 px-4 lg:px-45 xl:px-60">
        <Outlet />
      </main>
      {/* FOOTER */}
      <div className="text-center text-sm text-muted-foreground mt-16 pt-8 pb-12 border-t border-foreground/20">
        <p>
          ◆{" "}
          <span className="hidden sm:inline">
            {projects.length} Projects ◆{" "}
          </span>
          Est. 2026
          <span className="hidden sm:inline">
            {" "}
            ◆ Crafted with care
          </span>{" "}
          ◆
        </p>
      </div>
    </div>
  );
}