/*
COMPONENT FILE
Contains header, navigation, and theme toggle scripts.
*/
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"
import { Menu, Moon, Sun, X } from "lucide-react"

interface NavItem {
  label: string
  to: string
  state?: { scrollTo: string }
  end?: boolean
}

const navItems: NavItem[] = [
  { label: "Projects", to: "/", state: { scrollTo: "projects" }, end: true },
  { label: "About", to: "/about" },
]

const resumeHref = `${import.meta.env.BASE_URL}Whitney-Tran-Resume.pdf`

const linkBase =
  "text-sm uppercase tracking-widest underline-offset-4 hover:underline hover:decoration-foreground/80 focus-visible:outline-2 focus-visible:outline-offset-4"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${linkBase} ${isActive ? "underline" : ""}`

const themeStorageKey = "whitney-portfolio-theme"

/* Function: Retrieves the current theme state of the site. */
function getInitialTheme() {
  const savedTheme = window.localStorage.getItem(themeStorageKey)

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

/* Function: Toggles the theme of the website with the current theme state and css. */
function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "light" | "dark"
  onToggle: () => void
}) {
  const nextTheme = theme === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 md:h-8 md:w-8"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {theme === "dark" ? (
        <Sun size={19} aria-hidden="true" />
      ) : (
        <Moon size={19} aria-hidden="true" />
      )}
    </button>
  )
}

/* Function: Retrieves the navigation items to be added to the header. */
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
  )
}

/* Function: Renders the header for the site with the logo, navigation, and theme toggle. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(themeStorageKey, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-card shadow-[0_2px_0_0_rgba(0,0,0,0.1)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:border-2 focus:border-foreground focus:bg-card focus:px-3 focus:py-1"
      >
        Skip to main content
      </a>

      <div className="container mx-auto px-6 pb-4 pt-12 md:px-4 md:py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span
              className="flex h-8 w-8 items-center justify-center bg-foreground text-background"
              aria-hidden="true"
            >
              ◆
            </span>
            <span className="font-headline text-xl uppercase tracking-wide">
              Whitney Tran
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            <NavItems />
            <span
              className="h-6 border-l border-foreground/30"
              aria-hidden="true"
            />
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
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
        <div
          id="mobile-nav"
          className="border-t-2 border-foreground bg-card md:hidden"
        >
          <nav
            aria-label="Mobile"
            className="flex flex-col items-center px-4 pt-8"
          >
            <div className="flex flex-col items-center gap-6">
              <NavItems onNavigate={() => setMenuOpen(false)} />
            </div>
            <div className="mt-8 flex w-full justify-center border-t border-foreground/30 py-5">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
