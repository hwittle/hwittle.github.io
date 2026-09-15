import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

import { LightboxImage } from "../../components/LightboxImage";
import ErrorImage from "../../images/Connectivity Error State.png";

export function ErrorStatePage() {
  const navigate = useNavigate();
  const project = projects.find(
    (p) => p.slug === "error-state-page",
  )!;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Navigation */}
      <button
        onClick={() => {
          if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
              const el = document.getElementById("projects");
              if (el) {
                const top =
                  el.getBoundingClientRect().top +
                  window.scrollY -
                  80;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }, 100);
          } else {
            const el = document.getElementById("projects");
            if (el) {
              const top =
                el.getBoundingClientRect().top +
                window.scrollY -
                80;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }
        }}
        className="inline-flex items-center mb-8 uppercase tracking-wide hover:underline"
      >
        ← Back to Home
      </button>

      {/* Project Header */}
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
        </div>
      </header>

      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Overview
        </h2>
        <div className="w-full space-y-4 leading-relaxed border-2 border-foreground bg-card p-6">
          <p>
            This project was completed as part of the Uxcel UX
            Writing certification, designing a 404 error page
            for a finance platform. I chose Chime, whose
            conversational, empowering brand voice stands out in
            an industry that leans formal. Instead of a
            traditional 404, unlikely in a native app where
            users can't alter URLs, I designed for a
            connectivity error. This is a more realistic and
            emotionally charged failure point for a finance app,
            especially mid-transaction. The project includes
            both mobile and desktop versions, matching Chime's
            existing tone.
          </p>
        </div>
      </section>

      {/* Rationale */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Rationale
        </h2>
        <div className="grid md:grid-cols-1 gap-6">
          <div className="border-2 border-foreground bg-card p-6">
            <div className="order-1 flex justify-center">
              <div className="md:w-3/4">
                <LightboxImage
                  src={ErrorImage}
                  alt="Mobile and desktop mockup of Chime's connectivity error screen with 'Looks like you're offline' message and frog illustration."
                  className="border-2 p-1"
                />
              </div>
            </div>
            <div className="order-2 grid md:grid-cols-2 md:gap-6 space-y-2 leading-relaxed">
              <div className="space-y-2">
                <h3 className="pt-6">
                  Choosing a Connectivity Error Over a
                  Traditional 404
                </h3>
                <ul className="space-y-2 leading-relaxed pb-4">
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      Native apps don't let users manually enter
                      or change URLs, making a 404 unlikely.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      A connectivity error is a more realistic,
                      higher-stakes failure. Losing connection
                      mid-transaction causes real anxiety about
                      money and security.{" "}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="pt-6">Headline</h3>
                <ul className="space-y-2 leading-relaxed pb-4">
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      "Looks like you're offline" replaces
                      alarming alternatives like "No connection
                      detected" or technical terms like "Network
                      error".
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      Conversational phrasing matches Chime's
                      tone and explains the issue plainly
                      without raising user anxiety.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-t-2 border-dashed border-foreground/30 space-y-2 pr-2">
                <h3 className="pt-2">Body Copy</h3>
                <ul className="space-y-2 leading-relaxed pb-4">
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      Three sequential recovery steps: check
                      connection. "Still no luck?" acknowledges
                      frustration before offering the next step.
                      Then "close the app and come back"
                      provides a concrete alternative.{" "}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      Closing line ("Your transactions will show
                      you exactly where things stand") reassures
                      without promising a transaction outcome
                      the app can't guarantee.{" "}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-t-2 border-dashed border-foreground/30 space-y-2">
                <h3 className="pt-2">
                  Single CTA (Call-to-Action)
                </h3>
                <ul className="space-y-2 leading-relaxed pb-4">
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      Only one action, "Try Again", reduces
                      cognitive load during an already
                      frustrating moment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      Other navigation was deliberately omitted
                      because it requires a connection to
                      function. Including it would create a
                      false sense of options.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-t-2 border-dashed border-foreground/30 space-y-2 pr-2">
                <h3 className="pt-2">Illustration</h3>
                <ul className="space-y-2 leading-relaxed pb-4">
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      Reuses Chime's existing 404 frog mascot in
                      a new error context, preserving brand
                      warmth and signaling a "minor
                      inconvenience," not a serious problem.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-t-2 border-dashed border-foreground/30 space-y-2">
                <h3 className="pt-2">
                  Mobile and Desktop Versions
                </h3>
                <ul className="space-y-2 leading-relaxed pb-4">
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      The same copy is used across both since
                      the error and recovery steps don't change
                      by device.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">▸</span>
                    <span>
                      Layout adapts per platform: mobile stacks
                      illustration above copy for thumb
                      navigation; desktop places them side by
                      side with a larger illustration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Tags */}
      <section className="mb-16">
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-foreground text-background uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <ProjectNavigation currentSlug="error-state-page" />
    </div>
  );
}