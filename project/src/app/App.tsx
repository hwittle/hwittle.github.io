/**
 * APP ENTRY POINT
 *
 * File: /src/app/App.tsx
 *
 * Description:
 * Main application component that initializes React Router.
 * This is the entry point for the entire portfolio application.
 *
 * Routing:
 * Uses React Router v7 with routes defined in /src/app/routes.ts
 *
 * Flow:
 * App.tsx → RouterProvider → Root.tsx (layout) → Child pages
 *
 * Related Files:
 * - Routes config: /src/app/routes.ts
 * - Root layout: /src/app/pages/Root.tsx
 * - Global styles: /src/styles/global.css
 * - Theme tokens: /src/styles/theme.css
 * - Fonts: /src/styles/fonts.css
 */

import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
