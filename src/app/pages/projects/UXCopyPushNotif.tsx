import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

import { LightboxImage } from "../../components/LightboxImage";
import WishlistImage from "../../images/Wishlist.png";
import SummerImage from "../../images/Summer Sale.png";
import TradeImage from "../../images/Trade Offer.png";
import GiftImage from "../../images/Gift Received.png";
import PlaytestImage from "../../images/Playtest.png";

export function UXCopyPushNotif() {
  const navigate = useNavigate();
  const project = projects.find(
    (p) => p.slug === "uxcopy-push-notif",
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
            UXcel UX Writing certification. The goal was to
            demonstrate UX writing skills by crafting push
            notification copy for a mobile e-commerce platform.
          </p>
          <p>
            Steam was selected as the platform of choice, a
            digital game distribution platform with a distinct
            and engaged user base. Rather than writing generic
            e-commerce notifications, this project focused on
            notifications that reflect Steam's actual mobile app
            functionality, grounding each copy decision in
            realistic platform constraints and user scenarios.
          </p>
          <p>
            The project covers five push notifications each
            serving a distinct purpose, designed for both iOS
            and Android following their respective platform
            guidelines. Each notification includes a collapsed
            state for banner delivery and an expanded state
            where the interaction warrants additional context.
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
                <LightboxImage
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

          <div className="border-2 border-foreground bg-card p-6">
            <h3 className="font-bold mb-3 uppercase">
              Notification 2 - Steam Summer Sale Announcement
            </h3>
            {/* Left column - Bullets */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="md:order-1 order-2 space-y-2 leading-relaxed">
                <div className="border-b-2 border-dashed border-foreground/30 pb-4">
                  <p>
                    <strong>Title:</strong> "Steam Summer Sale
                    soon! ☀️"
                  </p>
                  <p>
                    <strong>Body:</strong> "From June 25 - July
                    9, thousands of games up to 90% off. Add
                    games to your wishlist now so you're ready!"
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <p>
                    The Steam Summer Sale is one of the most
                    anticipated events in the PC gaming
                    community. To reflect Steam's own
                    communication with the cultural significance
                    of the sale, the announcement is written in
                    a more playful tone than their default
                    functional style. The inclusion of a sun
                    emoji in the title is a deliberate nod to
                    that personality while keeping the message
                    clear and readable.
                  </p>
                  <p>
                    Unlike the other notifications in this set
                    which announce something that has already
                    happened, this is a pre-sale announcement.
                    The title uses "soon" rather than "starts
                    now" because the sale has not yet begun. The
                    body delivers the full date range from June
                    25 to July 9 so users know both when it
                    starts and when it ends, giving them
                    concrete information to plan around.
                  </p>
                  <p>
                    No action button is included because the
                    Summer Sale announcement is a general event
                    notification rather than a prompt for
                    immediate action. Adding a button would
                    imply urgency where none is needed and could
                    feel pushy for an event that runs for two
                    weeks.
                  </p>
                </div>
              </div>
              {/* Right column - Image */}
              <div className="md:order-2 order-1">
                <LightboxImage
                  src={SummerImage}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6"
                />
              </div>
            </div>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h3 className="font-bold mb-3 uppercase">
              Notification 3 - Trade Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left column - Image */}
              <div className="order-1">
                <LightboxImage
                  src={TradeImage}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6"
                />
              </div>

              {/* Right column - Bullets */}
              <div className="order-2 space-y-2 leading-relaxed">
                <div className="border-b-2 border-dashed border-foreground/30 pb-4">
                  <p>
                    <strong>Title:</strong> "You have a new
                    trade offer!"
                  </p>
                  <p>
                    <strong>Body:</strong> "CloudStrife7 wants
                    to trade items with you. Review your offer
                    before it expires in 14 days."
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <p>
                    Steam trading is restricted to established
                    friends, so using a specific username rather
                    than a generic "someone" or "a Steam user"
                    accurately reflects how trading works on the
                    platform. Seeing a friend's username makes
                    the notification feel personal and
                    trustworthy, increasing the likelihood the
                    user will engage with the offer.
                  </p>
                  <p>
                    The body includes the 14 day expiry window
                    worth communicating so the user can
                    prioritize reviewing it.
                  </p>
                  <p>
                    Tapping the notification takes the user
                    directly to the trade offer review page
                    where they have full context to accept or
                    decline. No expanded view is used as trade
                    offer contents vary widely and would require
                    dynamic content that is difficult to
                    represent meaningfully in a static mockup.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-foreground bg-card p-6">
            <h3 className="font-bold mb-3 uppercase">
              Notification 4 - Gift Received
            </h3>
            {/* Left column - Bullets */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="md:order-1 order-2 space-y-2 leading-relaxed">
                <div className="border-b-2 border-dashed border-foreground/30 pb-4">
                  <p>
                    <strong>Title:</strong> "You've received a
                    Steam gift!"
                  </p>
                  <p>
                    <strong>Body:</strong> "CloudStrife7 sent
                    you a gift. Head to your library to see
                    what's waiting for you."
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <p>
                    The title leads with the most exciting
                    information, that a gift has arrived, before
                    identifying the sender in the body. This
                    mirrors the natural emotional sequence of
                    receiving a gift: the excitement of getting
                    something comes before knowing the details.
                  </p>
                  <p>
                    CloudStrife7 appears again as the sender,
                    consistent with the Trade Offer
                    notification. Steam gifting requires an
                    existing friend connection so using a
                    specific username accurately reflects the
                    platform's social structure and reinforces
                    the personal nature of the interaction.
                  </p>
                  <p>
                    The gift title is deliberately withheld from
                    the notification. Steam gifts include a
                    personal message from the sender and the
                    moment of discovering what was sent is part
                    of the experience. Revealing the game title
                    in the notification would undercut that
                    moment before the user even opens the app.
                    The notification's job is to prompt the
                    action, not replace it.
                  </p>
                </div>
              </div>
              {/* Right column - Image */}
              <div className="md:order-2 order-1">
                <LightboxImage
                  src={GiftImage}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6"
                />
              </div>
            </div>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h3 className="font-bold mb-3 uppercase">
              Notification 5 - Playtest Accepted
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left column - Image */}
              <div className="order-1">
                <LightboxImage
                  src={PlaytestImage}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6"
                />
              </div>

              {/* Right column - Bullets */}
              <div className="order-2 space-y-2 leading-relaxed">
                <div className="border-b-2 border-dashed border-foreground/30 pb-4">
                  <p>
                    <strong>Title:</strong> "Playtest access
                    granted!
                  </p>
                  <p>
                    <strong>Body:</strong> "Download The Lift
                    Playtest from your library."
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <p>
                    The title leads with the outcome rather than
                    the process. "Playtest access granted"
                    communicates the result immediately. The
                    excitement of getting in after applying is
                    conveyed through the directness of the
                    confirmation rather than through exclamatory
                    language.
                  </p>
                  <p>
                    The game title appears in the body following
                    Steam's actual naming convention for
                    playtests, where the software is listed as
                    the game title followed by "Playtest." This
                    immediately tells the user which playtest
                    they were accepted into, which is important
                    since users may have applied to multiple
                    playtests simultaneously.
                  </p>
                  <p>
                    Urgency language was intentionally avoided.
                    Steam playtest access does not expire once
                    granted, so copy like "claim your spot" or
                    "limited time access" would be inaccurate
                    and manipulative. The body instead uses
                    "download" as the action word, which
                    reflects what the user does next without
                    creating false pressure.
                  </p>
                  <p>
                    The expanded view includes the game's cover
                    art, helping the user immediately identify
                    the game visually.
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

      <ProjectNavigation currentSlug="uxcopy-push-notif" />
    </div>
  );
}