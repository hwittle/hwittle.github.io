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

import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation - Sticky at top, rendered on all pages */}
      <Header />

      {/* Main Content Area - Child routes render here via Outlet */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
