import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

import { LightboxImage } from "../../components/LightboxImage";
import WishlistImage from "../../images/wishlist-1x1.png";
import SummerImage from "../../images/summer-sale-1x1.png";
import TradeImage from "../../images/trade-offer-1x1.png";
import GiftImage from "../../images/gift-received-1x1.png";
import PlaytestImage from "../../images/playtest-1x1.png";

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
            This project was carried out as part of the UXcel UX
            Writing certification, with the aim of showing off
            your UX writing abilities by writing push
            notification text for a mobile e-commerce platform.
          </p>
          <p>
            Steam was chosen as the platform to use, since it is
            a digital game distribution service with a dedicated
            and actively involved user base. Instead of
            producing standard e-commerce notifications, the
            project concentrated on creating notifications that
            match the real functionality of Steam's mobile app,
            ensuring that each decision regarding the copy was
            based on the actual limitations of the platform and
            on user situations.
          </p>
          <p>
            The project involves five push notifications, each
            having a specific purpose, and they have been
            designed for both iOS and Android in accordance with
            the guidelines of those respective platforms. Each
            notification has a collapsed state for use when
            displaying it as a banner and an expanded state for
            when interaction requires more context.
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
                    The reason the title refers to "your
                    wishlist game" rather than using the
                    specific name of the game is so that it will
                    work with Steam's notification system for
                    all items on a wishlist regardless of how
                    long the title is. If the game titles are
                    very long there is a risk that they will be
                    cut off in the notification title field,
                    hence using a general title ensures that the
                    message is always completely readable at a
                    glance.
                  </p>
                  <p>
                    The title of the game and the discount are
                    placed in the main area since there is more
                    space there, so that users can see the exact
                    information they need in order to make their
                    decision. Instead of using general urgency
                    phrases such as 'ends soon' or 'limited
                    time', 'Sale ends June 25' was selected
                    because giving a specific date allows users
                    to decide when to act rather than creating a
                    sense of pressure.
                  </p>
                  <p>
                    When you view the expanded image you can see
                    the game's cover art and thus immediately
                    recognise the title when it's on sale,
                    without having to open the app first. If you
                    tap the notification you will be taken
                    directly to the game's Steam store page from
                    where the purchase can be made.
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
                    community. To reflect Steam's communication
                    and the sale's cultural significance, the
                    announcement is written in a more playful
                    tone than their default style. The sun emoji
                    in the title nods to that personality while
                    keeping the message clear and readable.
                  </p>
                  <p>
                    Unlike other notifications in this set that
                    announce something already happened, this is
                    a pre-sale announcement. The title uses
                    "soon" rather than "starts now" because the
                    sale has not begun. The body gives the full
                    date range from June 25 to July 9 so users
                    know when it starts and ends, providing
                    concrete information to plan around.
                  </p>
                  <p>
                    No action button is included because the
                    Summer Sale announcement is a general event
                    notification, not a prompt for immediate
                    action. Adding a button would imply urgency
                    where none is needed and could feel pushy
                    for an event that runs two weeks.
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
                    Steam trading is only available to
                    established friends, which is why it's
                    appropriate to use a specific username
                    rather than a general term such as 'someone'
                    or 'a Steam user' when describing how
                    trading functions on the site. The fact that
                    you see your friend's username makes the
                    notification seem more personal and
                    trustworthy, thus making it more likely that
                    the user will respond to the offer.
                  </p>
                  <p>
                    The message should include the fourteen day
                    expiry period so that the user can decide
                    which ones to review.
                  </p>
                  <p>
                    When the user taps the notification, they
                    are taken straight to the page where they
                    can review the trade offer and choose to
                    accept or decline it. An expanded view is
                    not employed since the contents of the trade
                    offer differ greatly and would need dynamic
                    content which cannot be shown meaningfully
                    in a static mockup.
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
                    information: a gift has arrived, before
                    identifying the sender in the body. This
                    mirrors the natural emotional sequence of
                    receiving a gift, where excitement comes
                    before knowing the details.
                  </p>
                  <p>
                    CloudStrife7 appears again as the sender,
                    consistent with the Trade Offer
                    notification. Steam gifting requires an
                    existing friend connection, so using a
                    specific username reflects the platform's
                    social structure and reinforces the personal
                    nature of the interaction.
                  </p>
                  <p>
                    The gift title is deliberately withheld from
                    the notification. Steam gifts include a
                    personal message from the sender, and
                    discovering what was sent is part of the
                    experience. Revealing the game title in the
                    notification would undercut that moment
                    before the user opens the app. The
                    notification's job is to prompt action, not
                    replace it.
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
                    conveyed through the direct confirmation
                    rather than exclamatory language.
                  </p>
                  <p>
                    The game title appears in the body following
                    Steam's naming convention for playtests,
                    where the software is listed as the game
                    title followed by "Playtest." This
                    immediately tells the user which playtest
                    they were accepted into, important since
                    users may have applied to multiple playtests
                    simultaneously.
                  </p>
                  <p>
                    Urgency language was avoided. Steam playtest
                    access does not expire once granted, so copy
                    like "claim your spot" or "limited time
                    access" would be inaccurate and
                    manipulative. The body uses "download" as
                    the action word, reflecting what the user
                    does next without creating false pressure.
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