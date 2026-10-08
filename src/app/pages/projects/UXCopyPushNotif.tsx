import { Link } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { ProjectOverview } from "../../components/ProjectOverview";
import { projects } from "../../data/projects";

import { NotificationCard } from "../../components/NotificationCard";
import { notifications, overview, principles } from "../../data/pushData";

export function UXCopyPushNotif() {
  const project = projects.find(
    (p) => p.slug === "uxcopy-push-notif",
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
            <span>Uxcel Brief</span>
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

        <div className="mb-8 border-2 border-foreground bg-card">
          <h3 className="border-b-2 border-foreground px-6 py-3 uppercase tracking-wide">
            Principles across the set
          </h3>
          <dl className="grid divide-y-2 divide-foreground md:grid-cols-3 md:divide-x-2 md:divide-y-0">
            {principles.map(
              ({ title, description, seenIn }) => (
                <div key={title} className="p-6">
                  <dt className="mb-2 font-bold uppercase tracking-wide">
                    {title}
                  </dt>
                  <dd className="leading-relaxed">
                    {description}
                  </dd>
                  <dd className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                    {seenIn}
                  </dd>
                </div>
              ),
            )}
          </dl>
        </div>

        <div className="space-y-6">
          {notifications.map((item, i) => (
            <NotificationCard
              key={item.name}
              number={i + 1}
              item={item}
            />
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
            This project showed me that in UX writing, what you
            leave out matters as much as what you include. The
            most careful decisions were about avoiding the wrong
            words: withholding the gift title, removing false
            urgency from the playtest notification, and skipping
            a call to action on the pre-sale announcement, which
            would have had nothing to deliver. In each case,
            doing less served the user better.
          </p>
          <p>
            Steam's tone was an interesting constraint. The
            brand is not consistently light or cheerful. Its
            standard voice is functional and direct, and its
            personality shows only where it has been earned. I
            had to resist adding enthusiasm where Steam
            wouldn't, and treat clarity as the main
            consideration.
          </p>
          <p>
            I designed each notification for both iOS and
            Android while staying within the iOS character
            limit, which simplified the writing without
            compromising either platform. In production, each
            platform would need its own optimization: the extra
            characters on Android could carry added context or a
            warmer tone where the iOS version had to cut.
          </p>
          <p>
            If I returned to this project, I would look at how
            notifications vary across user groups, since a new
            Steam user and a long-time community member would
            likely react differently to the same text.
            Personalizing notification language by a user's
            history and behavior is where push notification UX
            writing becomes more complex and interesting.
          </p>
        </div>
      </section>

      <ProjectNavigation currentSlug="uxcopy-push-notif" />
    </div>
  );
}