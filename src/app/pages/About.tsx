import { Link } from "react-router";
import { Masthead } from "../components/Masthead";

const bio = [
  "I'm a technical and UX writer with three years of experience turning complex products into documentation people actually want to use. At Epson America, I owned user guides, FAQs, and guided help for commercial and business products, collaborating closely with product managers, engineers, and localization teams.",
  "Before that, I taught K-12 students to build games and apps. I learned there that the moment someone stops feeling intimidated is worth every careful word choice. I still write with that in mind.",
  "My work sits at the intersection of function, translation, and navigation; it is clear enough to help people move forward without flattening the complexity that makes the work worthwhile. I'm now building UX writing and API documentation projects, and developing a template for The Good Docs Project.",
];

const focusAreas = [
  {
    title: "Technical writing",
    description:
      "User guides, FAQs, and API reference documentation for end users and developers.",
  },
  {
    title: "UX writing",
    description:
      "Microcopy, error states, and notification copy grounded in a product's real constraints and voice.",
  },
  {
    title: "Docs-as-code",
    description:
      "Markdown, Git, and automated publishing for documentation that stays current.",
  },
];

const currently = [
  "Expanding my unofficial Steam Web API documentation",
  "Developing a user profile template for The Good Docs Project",
];

const contacts = [
  {
    label: "Email",
    text: "whitney.tran@proton.me",
    href: "mailto:whitney.tran@proton.me",
    external: false,
  },
  {
    label: "LinkedIn",
    text: "linkedin.com/in/whitneytran",
    href: "https://www.linkedin.com/in/whitneytran/",
    external: true,
  },
  {
    label: "GitHub",
    text: "github.com/hwittle",
    href: "https://github.com/hwittle",
    external: true,
  },
];

const resumeHref = `${import.meta.env.BASE_URL}Whitney-Tran-Resume.pdf`;

export function About() {
  return (
    <div className="container mx-auto py-12">
      <header className="mb-12">
        <Masthead>The Writer</Masthead>
        <h1 className="mt-8 text-4xl uppercase tracking-tight md:text-5xl">
          About
        </h1>
      </header>

      <section className="mb-16 grid gap-8 md:grid-cols-5">
        <div className="space-y-4 md:col-span-3">
          {bio.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-prose text-base leading-relaxed lg:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-4 md:col-span-2">
          <h2 className="border-l-4 border-foreground pl-4 text-xl uppercase tracking-wide md:text-2xl">
            Contact &amp; Links
          </h2>
          <dl className="space-y-5 border-2 border-foreground bg-card p-6">
            {contacts.map(({ label, text, href, external }) => (
              <div key={label}>
                <dt className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </dt>
                <dd>
                  <a
                    href={href}
                    {...(external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="break-words underline underline-offset-4 hover:decoration-foreground/80"
                  >
                    {text}
                    {external && (
                      <span className="sr-only">
                        {" "}
                        (opens in a new tab)
                      </span>
                    )}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-foreground bg-foreground px-4 py-2 text-sm uppercase tracking-wide text-background hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Resume (PDF) ↗
            <span className="sr-only">
              {" "}
              (opens in a new tab)
            </span>
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 border-l-4 border-foreground pl-4 text-xl uppercase tracking-wide md:text-3xl">
          Focus Areas
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {focusAreas.map(({ title, description }) => (
            <li
              key={title}
              className="border-2 border-foreground bg-card"
            >
              <h3 className="border-b-2 border-foreground px-6 py-3 uppercase tracking-wide">
                {title}
              </h3>
              <p className="p-6 leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16 border-b-2 border-dashed border-foreground/30 pb-12">
        <h2 className="mb-6 border-l-4 border-foreground pl-4 text-xl uppercase tracking-wide md:text-3xl">
          Currently
        </h2>
        <ul className="space-y-2 leading-relaxed">
          {currently.map((item) => (
            <li key={item} className="flex items-start">
              <span className="mr-2">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="uppercase tracking-wide underline underline-offset-4"
          >
            See my projects →
          </Link>
        </p>
      </section>
    </div>
  );
}