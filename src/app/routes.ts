/**
 * ROUTING CONFIGURATION - SINGLE PAGE PORTFOLIO
 *
 * File: /src/app/routes.ts
 *
 * Description:
 * Defines all application routes using React Router v7.
 * Single-page portfolio with individual project detail pages.
 *
 * Route Structure:
 * - / (Root layout with Header)
 *   - / → Home page (single-page with all content)
 *   - /projects/:slug → Individual project detail pages
 *
 * Important:
 * Project route paths MUST match the "slug" field in /src/app/data/projects.ts
 * When updating a project slug, update BOTH files to maintain consistency.
 *
 * Related Files:
 * - Project data: /src/app/data/projects.ts (centralized project information)
 * - Root layout: /src/app/pages/Root.tsx (wrapper with Header)
 * - Home page: /src/app/pages/Home.tsx (single-page with all sections)
 * - Project pages: /src/app/pages/projects/*.tsx
 */

import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { ContentAuditOptimize } from "./pages/projects/ContentAuditOptimize";
import { ErrorStatePage } from "./pages/projects/ErrorStatePage";
import { FAQDevelopment } from "./pages/projects/FAQDevelopment";
import { MobileOnboardFlow } from "./pages/projects/MobileOnboardFlow";
import { OnlineUsersGuide } from "./pages/projects/OnlineUsersGuide";
import { PrintedSetupGuide } from "./pages/projects/PrintedSetupGuide";
import { SteamWebAPI } from "./pages/projects/SteamWebAPI";
import { UXCopyPushNotif } from "./pages/projects/UXCopyPushNotif";

// NOTE: Project paths below should match the "slug" field from /src/app/data/projects.ts
// When you update a project slug in projects.ts, update the corresponding path here as well
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      // Individual project detail pages - paths match slugs from data/projects.ts
      {
        path: "projects/content-audit-optimize",
        Component: ContentAuditOptimize,
      },
      {
        path: "projects/error-state-page",
        Component: ErrorStatePage,
      },
      {
        path: "projects/faq-development",
        Component: FAQDevelopment,
      },
      {
        path: "projects/mobile-onboard-flow",
        Component: MobileOnboardFlow,
      },
      {
        path: "projects/online-users-guide",
        Component: OnlineUsersGuide,
      },
      {
        path: "projects/printed-setup-guide",
        Component: PrintedSetupGuide,
      },
      {
        path: "projects/steam-web-api",
        Component: SteamWebAPI,
      },
      {
        path: "projects/uxcopy-push-notif",
        Component: UXCopyPushNotif,
      },
    ],
  },
]);