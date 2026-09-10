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
            This project was carried out as part of the UXcel UX
            Writing certification programme, the brief having
            required the design of a 404 error page for a
            finance platform that achieves a balance between
            professionalism and friendliness.
          </p>
          <p>
            Chime was chosen as the platform that was preferred.
            Since it is a fintech company operating in
            opposition to traditional banking, Chime has a brand
            voice which is conversational, empowering and
            accessible. Such characteristics are generally not
            linked with the field of finance yet they are at the
            heart of Chime's identity. The company's current 404
            page includes a friendly message together with a sad
            frog character, which shows that Chime maintains a
            personal touch even in error situations.
          </p>
          <p>
            Instead of creating a conventional 404 page, this
            project addresses a connectivity error scenario that
            is more relevant to the context of Chime's native
            mobile app. In a native mobile app, users have no
            means of manually entering or altering URLs, so a
            traditional 404 situation is unlikely to occur. A
            connectivity error is in fact the more genuine and
            serious error a Chime user would experience,
            especially during a transaction when the emotional
            impact of losing connection with a finance app is at
            its peak.
          </p>
          <p>
            The project features both a mobile and a desktop
            version of the error message, aligning with Chime's
            existing brand voice and aimed at reassuring users
            without making any assurances about transaction
            status that the app cannot fulfil.
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
              <LightboxImage
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
                  A 404 error is traditional and arises when a
                  user goes to a page that does not exist. In a
                  native mobile application such as Chime, users
                  are not able to enter or alter URLs
                  themselves, so this situation is unlikely to
                  occur in reality. Instead, a connectivity
                  error is the more realistic and emotionally
                  impactful error that a Chime user would come
                  across, especially when trying to check their
                  balance, send money, or carry out a
                  transaction.
                </p>
                <h3 className="pt-2">Headline</h3>
                <p className="border-b-2 border-dashed border-foreground/30 pb-4">
                  The message "Looks like you're offline" was
                  selected instead of more alarming options such
                  as "No connection detected" or technical terms
                  like "Network error". By using conversational
                  language, it stays in keeping with Chime's
                  usual tone and clearly explains the issue
                  without increasing the user's anxiety. It
                  states the situation plainly, just as a
                  reliable friend would tell you that your phone
                  had lost its signal rather than giving you a
                  formal error message.
                </p>
                <h3 className="pt-2">Body Copy</h3>
                <p className="border-b-2 border-dashed border-foreground/30 pb-4">
                  The body copy outlines three successive
                  recovery steps without confusing the user. The
                  first and most straightforward option is to
                  "Check your connection and try again". When
                  asked "Still no luck?", the message admits the
                  user's frustration in its typical
                  conversational style before providing an
                  alternative solution. Instead of asking the
                  user to go elsewhere, the suggestion "Close
                  the app and come back once you have a signal"
                  offers a specific alternative. The last
                  sentence, "Your transactions will show you
                  exactly where things stand", comforts the user
                  without making any promises about whether an
                  ongoing action has been completed that the app
                  cannot keep.
                </p>
                <h3 className="pt-2">
                  Single CTA (Call-to-Action)
                </h3>
                <p className="border-b-2 border-dashed border-foreground/30 pb-4">
                  The only option available on the screen is
                  "Try Again". When there is a connectivity
                  error, the user's main aim is to get their
                  session back and carry on with what they were
                  doing. By having a single, clear call to
                  action, cognitive load is reduced at a time
                  when things are already frustrating. The other
                  navigation options have been deliberately left
                  out since they would need an active connection
                  in order to be of any use, and including them
                  together with a connectivity error would
                  create a false sense of possibility.
                </p>
                <h3 className="pt-2">Illustration</h3>
                <p className="border-b-2 border-dashed border-foreground/30 pb-4">
                  The illustration of the frog refers to Chime's
                  404 mascot but adapts it to a different error
                  situation. By including the mascot on the
                  connectivity error page, the warmth and humour
                  that Chime provides in error situations is
                  retained. This tells the user that they are
                  experiencing only a minor inconvenience rather
                  than a serious problem.
                </p>
                <h3 className="pt-2">
                  Mobile and Desktop Versions
                </h3>
                <p className="pb-4">
                  The copy is the same on both platforms since
                  the error situation and the steps for recovery
                  are identical no matter what device is used;
                  the layout, however, is adapted for each
                  platform, with the mobile version employing a
                  single-column stacked layout optimised for
                  thumb navigation and having the illustration
                  above the copy, and the desktop version
                  displaying the illustration and the copy side
                  by side while using a larger frog because of
                  the greater amount of screen space.
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