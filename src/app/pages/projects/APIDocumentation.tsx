import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

import { LightboxImage } from "../../components/LightboxImage";

export function APIDocumentation() {
  const navigate = useNavigate();
  const project = projects.find(
    (p) => p.slug === "api-documentation",
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
        <div className="mb-4  uppercase tracking-widest text-muted-foreground">
          {project.category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6">
          {project.title}
        </h1>
        <div className="grid md:grid-cols-3 gap-6 ">
          <div>
            <span className="font-bold block mb-1">
              CONTEXT:
            </span>
            <span>Independent Project</span>
          </div>
          <div>
            <span className="font-bold block mb-1">YEAR:</span>
            <span>{project.year}</span>
          </div>
          <div>
            <span className="font-bold block mb-1">ROLE:</span>
            <span>Technical Writer (Solo)</span>
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
            View the live documentation at{" "}
            <a
              target="_blank"
              className="hover:underline"
              href="https://hwittle.github.io/steam-web-api-docs/"
            >
              <strong>
                Unofficial Steam Web API Documentation
              </strong>
            </a>
            .
          </p>
          <p>
            The Steam Web API is a set of HTTP endpoints
            provided by Valve Corporation that allows developers
            to access Steam user data, game information, and
            community features. Despite being widely used by
            third-party developers, Valve's official
            documentation is minimal. Parameter descriptions are
            inconsistent, real response examples are absent, and
            behaviors around privacy settings and undocumented
            fields go unaddressed.
          </p>
          <p>
            This project set out to create clear,
            developer-friendly reference documentation for five
            commonly used Steam Web API endpoints, grounding
            every entry in real API responses generated through
            hands-on testing rather than assumptions based on
            incomplete official sources. The documentation was
            built using MkDocs Material and deployed to GitHub
            Pages via GitHub Actions, following a docs-as-code
            workflow.
          </p>
        </div>
      </section>

      {/* Project Scope */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Project Scope
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Audience
            </h4>
            <p>
              Developers building Steam integrations or
              third-party applications who need accurate,
              detailed endpoint references beyond what Valve's
              official documentation provides.
            </p>
          </div>
          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Endpoints Documented
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <h5 className="font-bold">IPlayerService:</h5>
              <li className="flex items-start pl-4">
                <span className="mr-2">▸</span>
                <span>GetOwnedGames</span>
              </li>
              <li className="flex items-start pl-4">
                <span className="mr-2">▸</span>
                <span>GetRecentlyPlayedGames</span>
              </li>
            </ul>
            <ul className="space-y-2 leading-relaxed">
              <h5 className="font-bold mt-3">ISteamUser:</h5>
              <li className="flex items-start pl-4">
                <span className="mr-2">▸</span>
                <span>GetFriendList</span>
              </li>
              <li className="flex items-start pl-4">
                <span className="mr-2">▸</span>
                <span>GetPlayerSummaries</span>
              </li>
            </ul>
            <ul className="space-y-2 leading-relaxed">
              <h5 className="font-bold mt-3">ISteamUserStats:</h5>
              <li className="flex items-start pl-4">
                <span className="mr-2">▸</span>
                <span>GetPlayerAchievements</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Tools Used
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  MkDocs Material — documentation framework
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Postman — API testing and response generation
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Python virtual environment — local development
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  Visual Studio Code — content authoring
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>
                  GitHub Actions — automated deployment
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>GitHub Pages — hosting</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-foreground bg-card p-6">
            <h4 className="font-bold mb-3 uppercase">
              Distribution
            </h4>
            <p>
              Publicly available as a static documentation site
              at{" "}
              <a
                target="_blank"
                className="hover:underline"
                href="https://hwittle.github.io/steam-web-api-docs/"
              >
                <strong>
                  Unofficial Steam Web API Documentation
                </strong>
              </a>{" "}
              and maintained as an open source repository on
              GitHub.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Process
        </h2>
        <div className="w-full space-y-4 leading-relaxed border-2 border-foreground bg-card p-6">
          <p>
            The documentation process followed a structured
            workflow from research through deployment, ensuring
            each endpoint was accurately documented and grounded
            in real API behavior.
          </p>
          <ol className="space-y-2 leading-relaxed list-decimal pl-6">
            <li>
              <strong>
                Reviewed Valve's official documentation
              </strong>{" "}
              to identify gaps in parameter descriptions,
              missing response examples, and undocumented
              behaviors
            </li>
            <li>
              <strong>Registered a Steam Web API key</strong>{" "}
              through the Steam developer portal and configured
              a <strong>Postman</strong> collection to test each
              endpoint, generating real API responses in JSON,
              XML, and VDF formats to capture accurate field
              names, data types, and values.
            </li>
            <li>
              <strong>
                Identified undocumented fields and privacy
                behaviors
              </strong>{" "}
              through testing, including fields absent from
              official documentation and endpoint responses that
              vary based on a user's Steam Community privacy
              settings.
            </li>
            <li>
              <strong>Structured the documentation site</strong>{" "}
              using <strong>MkDocs Material</strong>, organizing
              endpoints by interface group and establishing a
              consistent page template covering arguments,
              returns, example requests, and response examples.
            </li>
            <li>
              <strong>Authored all endpoint pages</strong> in{" "}
              <strong>Markdown</strong> using{" "}
              <strong>Visual Studio Code</strong>, applying
              consistent terminology, parameter formatting, and
              admonition callouts for warnings, notes, and
              undocumented observations.
            </li>
            <li>
              <strong>Deployed the documentation</strong> to{" "}
              <strong>GitHub Pages</strong> via a{" "}
              <strong>GitHub Actions</strong> workflow,
              automating the build and publish process on every
              push to the main branch.
            </li>
          </ol>
        </div>
      </section>

      {/* Reflection */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Reflection
        </h2>
        <div className="w-full space-y-4 leading-relaxed border-2 border-foreground bg-card p-6">
          <p>
            This project reinforced that good documentation
            fills the gaps that official sources leave behind.
            Valve's existing Steam Web API documentation
            provides a functional but minimal baseline, and the
            most valuable contributions came from hands-on
            testing rather than transcribing what was already
            written. Discovering undocumented fields,
            inconsistent data types, and privacy behaviors that
            silently affect responses gave the documentation a
            practical depth that developers would not find
            elsewhere.
          </p>
          <p>
            Working with a docs-as-code workflow for the first
            time made the connection between documentation and
            software development tangible. Writing in Markdown,
            managing versions through GitHub, and automating
            deployment through GitHub Actions mirrors how
            engineering teams ship code, and understanding that
            workflow firsthand makes collaborating with
            developers on documentation projects more
            meaningful.
          </p>
          <p>
            Future additions include expanding endpoint coverage
            to interfaces such as ISteamNews or ISteamApps, and
            incorporating a dedicated troubleshooting section
            based on common error responses observed during
            testing.
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

      <ProjectNavigation currentSlug="api-documentation" />
    </div>
  );
}