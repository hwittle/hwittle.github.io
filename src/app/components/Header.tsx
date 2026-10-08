import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  to: string;
  state?: { scrollTo: string };
  end?: boolean;
}

const navItems: NavItem[] = [
  { label: "Projects", to: "/", state: { scrollTo: "projects" }, end: true },
  { label: "About", to: "/about" },
];

const resumeHref = "/resume.pdf";

const linkBase =
  "text-sm uppercase tracking-widest underline-offset-4 hover:underline hover:decoration-foreground/80 focus-visible:outline-2 focus-visible:outline-offset-4";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${linkBase} ${isActive ? "underline" : ""}`;

function NavItems({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {navItems.map(({ label, to, state, end }) => (
        <NavLink
          key={label}
          to={to}
          state={state}
          end={end}
          onClick={onNavigate}
          className={navLinkClass}
        >
          {label}
        </NavLink>
      ))}
      <a
        href={resumeHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={linkBase}
      >
        Resume (PDF)
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-card shadow-[0_2px_0_0_rgba(0,0,0,0.1)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:border-2 focus:border-foreground focus:bg-card focus:px-3 focus:py-1"
      >
        Skip to main content
      </a>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <span className="flex h-8 w-8 items-center justify-center bg-foreground text-background" aria-hidden="true">
              ◆
            </span>
            <span className="font-headline text-xl uppercase tracking-wide">Whitney Tran</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            <NavItems />
          </nav>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="border-t-2 border-foreground bg-card md:hidden">
          <nav aria-label="Mobile" className="flex flex-col items-center gap-6 py-8">
            <NavItems onNavigate={() => setMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}