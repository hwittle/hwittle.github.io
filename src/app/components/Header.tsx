/**
 * HEADER COMPONENT - SINGLE PAGE PORTFOLIO
 *
 * File: /src/app/components/Header.tsx
 * Used on: ALL pages (rendered in Root.tsx layout)
 *
 * Description:
 * Sticky header with vintage newspaper aesthetic.
 * Simple branding header for single-page portfolio (no navigation needed).
 *
 * Features:
 * - Sticky positioning (stays at top during scroll)
 * - Logo/branding with diamond symbol
 * - Clean, minimal design
 *
 * CSS/Styles:
 * - Inline Tailwind CSS v4 classes
 * - Theme colors: /src/styles/theme.css (bg-card, border-foreground, text-background)
 * - Typography: /src/styles/fonts.css (Special Elite, Courier Prime)
 * - Fixed height: ~4rem (used in Home.tsx viewport calc)
 */

import { Link } from "react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card border-b-2 border-foreground shadow-[0_2px_0_0_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Branding */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center">
              <span className="text-background">◆</span>
            </div>
            <h1 className="text-xl tracking-wide uppercase">Whitney Tran</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
