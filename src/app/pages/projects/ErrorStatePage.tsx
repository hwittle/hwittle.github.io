import { Link } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { ProjectOverview } from "../../components/ProjectOverview";
import { projects } from "../../data/projects";

import { overview, rationale } from "../../data/errorData";

import { LightboxImage } from "../../components/LightboxImage";

/* Image Imports */
import ErrorImage from "../../data/images/connectivity-error-state.png";

export function ErrorStatePage() {
  const project = projects.find(
    (p) => p.slug === "error-state-page",
  )!;

  return (
    <div className="container mx-auto py-12">
      {/* Back Navigation */}
      <Link
        to="/"
        state={{ scrollTo: "projects" }}
        className="mb-8 inline-flex items-center uppercase tracking-wide underline-offset-4 hover:underline"
      >
        ← Back to Projects
      </Link>

      {/* HEADER */}
      <header className="mb-12 border-b-2 border-dashed border-foreground/30 pb-8">
        <div className="mb-4 uppercase tracking-widest text-muted-foreground">
          {project.category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
          {project.title}
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <span className="font-bold block mb-1">
              CONTEXT:
            </span>
            <span>UXcel Brief</span>
          </div>
          <div>
            <span className="font-bold block mb-1">YEAR:</span>
            <span>{project.year}</span>
          </div>
          <div>
            <span className="font-bold block mb-1">ROLE:</span>
            <span>UX Writer</span>
          </div>

          <div className="md:col-span-3">
            <span className="mb-2 block font-bold">
              SKILLS &amp; TOOLS:
            </span>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-foreground bg-card px-3 py-1 text-xs uppercase tracking-wide"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      {/* HEADER END */}

      {/* OVERVIEW */}
      <ProjectOverview {...overview} />
      {/* OVERVIEW END */}

      {/* RATIONALE */}
      <section className="mb-16">
        <h2 className="mb-6 border-l-4 border-foreground pl-4 text-3xl uppercase tracking-wide">
          Rationale
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {rationale.map(({ title, points }) => (
            <div
              key={title}
              className="border-2 border-foreground bg-card p-6"
            >
              <h3 className="mb-3 uppercase tracking-wide">
                {title}
              </h3>
              <ul className="space-y-2 leading-relaxed">
                {points.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* RATIONALE END */}

      {/* Reflection */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Reflection
        </h2>
        <div className="w-full space-y-4 leading-relaxed border-2 border-foreground bg-card p-6">
          <p>
            The project showed that errors in finance
            applications have a greater emotional impact than
            errors in most other kinds of context. While a lost
            connection on a social media app is just an
            inconvenience, a lost connection during a
            transaction on a finance app leads immediately to
            concerns regarding money, security, and whether the
            action has actually been completed. To write the
            copy in a way that dealt with that anxiety without
            making it worse demanded a clear sense of
            self-restraint.
          </p>
          <p>
            It was interesting to choose Chime as our platform
            since their brand personality deliberately counters
            the tendency to be excessively formal in a financial
            situation. The 404 page they currently have shows
            that warmth and a friendly tone should be present
            even in an error scenario, but when applying that
            same tone to a more serious situation it was
            necessary to work out how much playfulness was
            suitable. The phrase "Still no luck?" reflects
            Chime's conversational style without downplaying a
            moment which could be stressful for the user.
          </p>
          <p>
            The choice to create a connectivity error state
            rather than a conventional 404 page was based on
            consideration of the way users really use a native
            mobile app. This approach resulted in a more
            realistic and useful design compared to what would
            have been achieved by taking the brief at face
            value. When working in a live environment, it is
            precisely by advocating for the most realistic user
            scenario rather than the most convenient design
            assumption that UX writing proves its value beyond
            simply providing the right words.
          </p>
          <p>
            If one were to return to this project, then looking
            into other error states particular to the finance
            area, such as a failed payment or an authentication
            error, would be a natural next step; each of these
            has its own emotional connotation and copy
            requirements and thus would show how Chime's voice
            adjusts throughout various moments of friction.
          </p>
        </div>
      </section>

      <ProjectNavigation currentSlug="error-state-page" />
    </div>
  );
}