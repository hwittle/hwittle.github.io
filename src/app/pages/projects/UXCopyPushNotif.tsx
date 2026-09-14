import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

import { LightboxImage } from "../../components/LightboxImage";
import WishlistImage from "../../images/wishlist-4x3.png";
import SummerImage from "../../images/summer-sale-4x3.png";
import TradeImage from "../../images/trade-offer-4x3.png";
import GiftImage from "../../images/gift-received-4x3.png";
import PlaytestImage from "../../images/playtest-4x3.png";

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
          <p className="border-l-4 pl-4">
            View the project on{" "}
            <a
              target="_blank"
              className="hover:underline"
              href="https://www.figma.com/design/f5ycmpV7eFaxl0rZd8vRdJ/Push-Notification-for-Steam?node-id=1-3733&p=f"
            >
              <strong>Figma</strong>
            </a>
            .
          </p>
          <p>
            This project was completed as part of the Uxcel UX
            Writing certification, creating push notification
            copy for a mobile e-commerce platform. I chose
            Steam, a digital game storefront with a highly
            engaged user base, and based each notification on
            Steam's actual app functionality and platform
            constraints instead of generic e-commerce patterns.
            The set includes five notifications, each designed
            for both iOS and Android with a collapsed banner
            state and an expanded state for added context.
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
                  alt="Mock design of two iPhones with Steam Wishlist notification in Collapsed and Expanded forms."
                  className="border-2 p-1"
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
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        "Your wishlist game" replaces specific
                        titles to prevent long names from
                        truncating in the notification field
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Game title and discount lead the body
                        copy, giving users what they need to
                        decide at a glance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Specific date ("Sale ends June 25")
                        replaces vague urgency ("ends soon"),
                        respecting user autonomy over pressure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Expanded view shows cover art for
                        instant recognition without opening the
                        app
                      </span>
                    </li>
                  </ul>
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
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Playful tone (☀️ emoji) reflects the
                        Sale's cultural significance within the
                        community and breaks from Steam's usual
                        functional voice
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        "Soon" replaces "starts now" since the
                        sale hasn't begun; the full date range
                        gives users something concrete to plan
                        around
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        No action button is included because
                        this is a heads-up, not a prompt; adding
                        one would create false urgency for a
                        two-week event
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Right column - Image */}
              <div className="md:order-2 order-1">
                <LightboxImage
                  src={SummerImage}
                  alt="Mock design of an iPhone with a Steam Summer Sale notification."
                  className="border-2 p-1"
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
                  alt="Mock design of an iPhone with a Steam Trade Offer notification."
                  className="border-2 p-1"
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
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Specific username ("CloudStrife7")
                        replaces generic terms since trading
                        happens only between established
                        friends, building trust and personal
                        relevance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Includes 14-day expiry so users can
                        prioritize which offers to review first
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        No expanded view, trade contents vary
                        too much to represent meaningfully in a
                        static mockup
                      </span>
                    </li>
                  </ul>
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
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Title leads with the emotional beat (a
                        gift arrived) before the sender,
                        mirroring how people naturally react to
                        gifts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Same username convention as Trade Offer,
                        consistent with Steam's friend-based
                        social structure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Gift title is intentionally withheld
                        because revealing it in the notification
                        would spoil the moment of opening it
                        in-app
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Right column - Image */}
              <div className="md:order-2 order-1">
                <LightboxImage
                  src={GiftImage}
                  alt="Mock design of an iPhone with a Steam Gift Received notification."
                  className="border-2 p-1"
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
                  alt="Mock design of two iPhones with Steam Playtest Accepted notification in Collapsed and Expanded forms."
                  className="border-2 p-1"
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
                  <ul className="space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Leads with outcome ("Playtest access
                        granted") rather than process,
                        confirming the result immediately
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        Game title follows Steam's own playtest
                        naming convention, important since users
                        may apply to multiple playtests at once
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">▸</span>
                      <span>
                        No urgency language is used since
                        playtest access doesn't expire; "claim
                        your spot" would be inaccurate and
                        manipulative
                      </span>
                    </li>
                  </ul>
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
            The project showed that in UX writing just as much
            importance is attached to what you omit as to what
            you include. The most careful decisions made in this
            project weren't concerned with choosing the correct
            words but with avoiding inappropriate ones. Examples
            of this were not including the 'gift' title, getting
            rid of the false sense of urgency from the playtest
            notification, and avoiding a pre-sale call to action
            which offered nothing to deliver, all of which were
            instances in which doing less proved to be better
            for the user.
          </p>
          <p>
            The fact that Steam's tone was playful presented an
            interesting limitation since the brand doesn't have
            a consistently light and cheerful attitude. Its
            standard tone is functional and to the point, and
            its personality is only shown when it has been
            earned. When writing in this way it was necessary to
            resist the urge to include any enthusiasm where
            Steam wouldn't allow it and to treat clarity as the
            main consideration.
          </p>
          <p>
            Designing versions for both iOS and Android while
            staying within the iOS character limit was
            practical, as it simplified the writing process
            without compromising either platform. When it came
            to production, each platform would require separate
            optimisation. The extra characters available on
            Android could then be used to include some context
            or add a warmer tone where the more concise iOS
            version had to make cuts.
          </p>
          <p>
            If I were to return to this project, it would be
            interesting to investigate how notifications vary
            among different user groups since a new Steam user
            and a long-time member of the community would
            probably react in different ways to the same
            notification text. It is in personalising the
            notification language according to a user's history
            and behaviour that push notification UX writing
            becomes more complex and interesting.
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