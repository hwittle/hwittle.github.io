import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

import WishlistImage from "../../images/Wishlist.png";
import SummerImage from "../../images/Summer Sale.png";
import TradeImage from "../../images/Trade Offer.png";
import GiftImage from "../../images/Gift Received.png";
import PlaytestImage from "../../images/Playtest.png";

export function SteamWebAPI() {
  const navigate = useNavigate();
  const project = projects.find(
    (p) => p.slug === "steam-web-api",
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
            Chime's identity. Their existing 404 page, which
            features a friendly message and a sad green 3D frog,
            confirmed that Chime embraces personality even in
            error moments.
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
            <h3 className="font-bold mb-3 uppercase">
              Notification 1 - Wishlist Sale Alert
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left column - Image */}
              <div className="order-1">
                <img
                  src={WishlistImage}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6"
                />
              </div>

              {/* Right column - Bullets */}
              <div className="order-2 space-y-2 leading-relaxed">
                <div className="border-b-2 border-dashed border-foreground/30 pb-4">
                  <p>
                    <strong>Title:</strong> "Your wishlist game
                    is on sale!"
                  </p>
                  <p>
                    <strong>Body:</strong> "Final Fantasy VII
                    Remake Intergrade is 35% off. Sale ends June
                    25."
                  </p>
                  <p>
                    <strong>Expanded:</strong> Game cover art
                    visible
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <p>
                    The title uses "your wishlist game" rather
                    than the specific game title to accommodate
                    Steam's notification system across all
                    wishlist items regardless of title length.
                    Long game titles risk truncation in the
                    notification title field, so keeping the
                    title generic ensures the message is always
                    fully readable at a glance.
                  </p>
                  <p>
                    The game title and discount appear in the
                    body where there is more room, giving the
                    user the specific details they need to make
                    a decision. "Sale ends June 25" was chosen
                    over vague urgency language like "ends soon"
                    or "limited time." A specific date respects
                    the user's ability to decide when to act
                    rather than manufacturing pressure.
                  </p>
                  <p>
                    The expanded view reveals the game's cover
                    art, providing immediate visual recognition
                    of the title on sale without requiring the
                    user to open the app first. Tapping the
                    notification takes the user directly to the
                    game's Steam store page where they can
                    complete the purchase.
                  </p>
                </div>
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
            This project reinforced that UX writing is as much
            about what you leave out as what you include. The
            most deliberate decisions in this brief were not
            about finding the right words but about resisting
            the wrong ones. Withholding the gift title, removing
            false urgency from the playtest notification, and
            avoiding a pre-sale call to action that had nothing
            to deliver yet were all cases where doing less
            served the user better.
          </p>
          <p>
            Working within Steam's voice was an interesting
            constraint because it is not a uniformly playful
            brand. Steam's default tone is functional and
            direct, with personality reserved for moments that
            earn it. Writing within that restraint meant
            resisting the temptation to add enthusiasm where the
            platform would not, and leaning into clarity as the
            primary value instead.
          </p>
          <p>
            Designing for both iOS and Android within iOS
            character limits was a practical decision that
            simplified the writing process without compromising
            either platform. In a production environment, each
            platform would warrant individual optimization, and
            Android's additional character allowance could be
            used to add context or warmth where the tighter iOS
            version had to cut.
          </p>
          <p>
            If revisiting this project, exploring how
            notifications change across different user segments
            would be an interesting extension. A new Steam user
            and a long time community member would likely
            respond differently to the same copy, and
            personalizing notification language based on user
            history and behavior is where push notification UX
            writing gets more complex and more interesting.
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

      <ProjectNavigation currentSlug="steam-web-api" />
    </div>
  );
}