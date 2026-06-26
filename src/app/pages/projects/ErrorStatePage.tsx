import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

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
        <div className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">
          {project.category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
          {project.title}
        </h1>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
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
            This is a spec project completed as part of the
            UXcel UX Writing certification. The brief called for
            designing a 404 error page for a finance platform
            that balances professionalism with friendliness.
          </p>
          <p>
            Chime was selected as the platform of choice. As a
            fintech company positioned against traditional
            banking, Chime's brand voice is conversational,
            empowering, and approachable. These qualities are
            rarely associated with finance but are central to
            Chime's identity. Their existing 404 page features a
            friendly message and a sad frog mascot, confirming
            that Chime embraces personality even in error
            moments.
          </p>
          <p>
            Rather than designing a traditional 404 page, this
            project focuses on a connectivity error state more
            realistic to Chime's native mobile app context. In a
            native mobile app, users cannot manually enter or
            manipulate URLs, making a traditional 404 scenario
            unlikely. A connectivity error is the more authentic
            and high stakes error a Chime user would encounter,
            particularly mid-transaction when the emotional
            weight of losing connection to a finance app is at
            its highest.
          </p>
          <p>
            The project includes both a mobile and desktop
            version of the error state, grounded in Chime's
            established brand voice and designed to reassure
            users without making promises the app cannot keep
            about transaction status.
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
            <div className="order-1">
              <img
                src={ErrorImage}
                alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                className="border-2 p-6"
              />
            </div>
            <div className="order-2 space-y-2 leading-relaxed">
              <div className="space-y-2">
                <h3 className="pt-6">
                  Choosing a Connectivity Error Over a
                  Traditional 404
                </h3>
                <p className="border-b-2 border-dashed border-foreground/30 pb-4">
                  A traditional 404 error occurs when a user
                  navigates to a page that does not exist. In a
                  native mobile app like Chime, users cannot
                  manually enter or manipulate URLs, making this
                  scenario unlikely in practice. A connectivity
                  error is the more realistic and emotionally
                  significant error a Chime user would
                  encounter, particularly when attempting to
                  check a balance, send money, or complete a
                  transaction.
                </p>
                <h3 className="pt-2">Headline</h3>
                <p className="border-b-2 border-dashed border-foreground/30 pb-4">
                  "Looks like you're offline" was chosen over
                  more alarming alternatives like "No connection
                  detected" or technical language like "Network
                  error." The conversational phrasing mirrors
                  Chime's established voice and immediately
                  communicates the problem without escalating
                  the user's anxiety. It acknowledges the
                  situation matter-of-factly, the same way a
                  trusted friend would tell you your phone lost
                  signal rather than delivering a formal error
                  report.
                </p>
                <h3 className="pt-2">Body Copy</h3>
                <p className="border-b-2 border-dashed border-foreground/30 pb-4">
                  The body copy addresses three progressive
                  recovery steps without overwhelming the user.
                  "Check your connection and try again" is the
                  first and simplest action. "Still no luck?"
                  acknowledges the frustration of repeated
                  failure in Chime's characteristically
                  conversational tone before offering a
                  fallback. "Close the app and come back once
                  you have a signal" gives a concrete
                  alternative without requiring the user to
                  navigate elsewhere. The final sentence "Your
                  transactions will show you exactly where
                  things stand" reassures the user without
                  making promises the app cannot keep about
                  whether an in-progress action was completed.
                </p>
                <h3 className="pt-2">
                  Single CTA (Call-to-Action)
                </h3>
                <p className="border-b-2 border-dashed border-foreground/30 pb-4">
                  "Try Again" is the only action on the screen.
                  In a connectivity error scenario, the user's
                  primary goal is to restore their session and
                  continue what they were doing. A single
                  focused CTA reduces cognitive load during an
                  already frustrating moment. Secondary
                  navigation options were deliberately omitted
                  since they would require an active connection
                  to be useful anyway, and presenting them
                  alongside a connectivity error would create
                  false affordance.
                </p>
                <h3 className="pt-2">Illustration</h3>
                <p className="border-b-2 border-dashed border-foreground/30 pb-4">
                  The frog illustration references Chime's 404
                  mascot while adapting it to a different error
                  context. Including the mascot to the
                  connectivity error page maintains the warmth
                  and humor Chime brings to error states. It
                  signals to the user that this is a minor
                  inconvenience rather than a serious problem.
                </p>
                <h3 className="pt-2">
                  Mobile and Desktop Versions
                </h3>
                <p className="border-b-2 border-dashed border-foreground/30 pb-4">
                  The copy is identical across both platforms
                  since the error scenario and recovery steps
                  are the same regardless of device. The layout
                  adapts to each platform: mobile uses a stacked
                  single column layout optimized for thumb
                  navigation with the illustration above the
                  copy, while desktop presents the illustration
                  and copy side by side with a larger frog given
                  the increased screen real estate.
                </p>
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
            This project reinforced that error states in finance
            apps carry more emotional weight than error states
            in most other contexts. A lost connection on a
            social media app is an inconvenience. A lost
            connection mid-transaction on a finance app raises
            immediate questions about money, security, and
            whether an action was completed. Writing copy that
            addresses that anxiety without amplifying it
            required a deliberate restraint.
          </p>
          <p>
            Choosing Chime as the platform was interesting
            because their brand voice actively works against the
            instinct to be overly formal in a financial context.
            Their existing 404 page confirmed that personality
            and warmth belong even in error moments, but
            extending that voice to a higher stakes scenario
            required calibrating how much playfulness was
            appropriate. "Still no luck?" carries Chime's
            conversational tone without trivializing a moment
            that might feel stressful to the user.
          </p>
          <p>
            The decision to design a connectivity error state
            rather than a traditional 404 page came from
            thinking about how users actually interact with a
            native mobile app. That constraint produced a more
            realistic and useful design than following the
            brief's literal prompt would have. In a production
            environment, advocating for the most realistic user
            scenario rather than the most convenient design
            assumption is part of what makes UX writing valuable
            beyond just the words themselves.
          </p>
          <p>
            If revisiting this project, exploring additional
            error states specific to finance such as a failed
            payment or an authentication error would be a
            natural extension. Each carries its own emotional
            context and copy requirements that would further
            demonstrate how Chime's voice adapts across
            different moments of friction.
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