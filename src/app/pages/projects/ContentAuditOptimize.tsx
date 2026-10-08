import { Link } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { ProjectOverview } from "../../components/ProjectOverview";
import { projects } from "../../data/projects";

import { FindingsTable } from "../../components/FindingsTable";
import {
  criteria,
  vehicleFindings,
  protectionFindings,
  modalFindings,
  addonFindings,
  checkoutFindings,
  pagesAudited,
  findingCounts,
  overview,
} from "../../data/auditData";

/* Image Imports */
import AuditImage1 from "../../data/images/audit-transport-1.png";
import AuditImage2 from "../../data/images/audit-transport-2.png";
import AuditImage3_1 from "../../data/images/audit-transport-3-no.png";
import AuditImage3_2 from "../../data/images/audit-transport-3-yes.png";
import AuditImage4 from "../../data/images/audit-transport-4.png";
import AuditImage5 from "../../data/images/audit-transport-5.png";

export function ContentAuditOptimize() {
  const project = projects.find(
    (p) => p.slug === "content-audit-optimize",
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
        <h1 className="mb-6 text-4xl uppercase tracking-tight md:text-5xl lg:text-6xl">
          {project.title}
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <span className="mb-1 block font-bold">
              CONTEXT:
            </span>
            <span>Independent Audit</span>
          </div>
          <div>
            <span className="mb-1 block font-bold">YEAR:</span>
            <span>{project.year}</span>
          </div>
          <div>
            <span className="mb-1 block font-bold">ROLE:</span>
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
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Rationale
        </h2>

        {/* SUMMARY OF FINDINGS */}
        <div className="mb-12 border-2 border-foreground bg-card">
          <dl className="grid grid-cols-3 divide-x-2 divide-foreground text-center border-b-2 border-foreground">
            {(["Add", "Remove", "Update"] as const).map(
              (status) => (
                <div key={status} className="p-4">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    {status}
                  </dt>
                  <dd className="text-2xl md:text-3xl">
                    {findingCounts[status]}
                  </dd>
                </div>
              ),
            )}
          </dl>

          <p className="px-6 py-4 text-sm leading-relaxed text-muted-foreground">
            <span className="font-bold uppercase tracking-wide text-foreground">
              How to read:{" "}
            </span>
            Red boxes in each screenshot mark the areas of
            concern. Numbered findings in the table below each
            screenshot describe them.
          </p>
        </div>
        {/* SUMMARY OF FINDINGS END */}

        {/* TABLE OF FINDINGS */}
        <div className="space-y-16">
          <FindingsTable
            title="Vehicle Selection"
            narrowImage
            images={[
              {
                src: AuditImage1,
                alt: "Screenshot of Hertz's vehicle selection page with 2 red boxes highlighting areas of concern.",
                caption:
                  "Fig.2 Vehicle selection page with annotated findings",
              },
            ]}
            findings={vehicleFindings}
          />
          <FindingsTable
            title="Protection Selection"
            images={[
              {
                src: AuditImage2,
                alt: "Screenshot of Hertz's protection plan page with 4 red boxes highlighting areas of concern.",
                caption:
                  "Fig.3 Protection selection page with annotated findings",
              },
            ]}
            findings={protectionFindings}
          />
          <FindingsTable
            title="Protection Modal"
            images={[
              {
                src: AuditImage3_1,
                alt: "Screenshot of Hertz's protection plan modal with 3 red boxes highlighting areas of concern.",
                caption:
                  "Fig.4 Protection modal before a choice is made",
              },
              {
                src: AuditImage3_2,
                alt: "Screenshot of Hertz's protection plan modal with 1 red box highlighting an area of concern.",
                caption:
                  "Fig.5 Protection modal after declining protection",
              },
            ]}
            findings={modalFindings}
          />
          <FindingsTable
            title="Add-on Selection"
            images={[
              {
                src: AuditImage4,
                alt: "Screenshot of Hertz's add-on selection page with 6 red boxes highlighting areas of concern.",
                caption:
                  "Fig.6 Add-on selection page with annotated findings",
              },
            ]}
            findings={addonFindings}
          />
          <FindingsTable
            title="Checkout"
            images={[
              {
                src: AuditImage5,
                alt: "Screenshot of Hertz's checkout page with 2 red boxes highlighting areas of concern.",
                caption:
                  "Fig.7 Checkout page with annotated findings",
              },
            ]}
            findings={checkoutFindings}
          />
        </div>
        {/* TABLE OF FINDINGS END */}
      </section>
      {/* RATIONALE END */}

      {/* Reflection */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Reflection
        </h2>
        <div className="w-full space-y-4 leading-relaxed border-2 border-foreground bg-card p-6">
          <p>
            This audit has shown that content issues in
            e-commerce are seldom limited to one instance; a
            piece of vague copy tends to spread throughout a
            multi-step process until the overall result is a
            user experience which seems adversarial rather than
            helpful. Although the protection page, the modal
            reappearing, the pressure tactics used to encourage
            add-ons, and the late disclosure of prices are each
            problematic in themselves, taken together they give
            the impression that the booking process has been
            designed primarily to extract revenue rather than to
            build user confidence.
          </p>
          <p>
            The key discovery was the discrepancy in the pricing
            of the payment options when checking out. The fact
            that a single price is displayed during the stage of
            selecting a vehicle but a higher price is shown only
            at checkout for a different payment option is not
            merely a problem with the wording. It is a
            fundamental issue relating to transparency in the
            product's structure, something that no amount of
            better wording will be able to overcome. The
            solution involves showing both options earlier in
            the process, and this is a decision that pertains to
            product and content strategy rather than a small
            adjustment to the microcopy.
          </p>
          <p>
            Carrying out the audit on an actual platform rather
            than a fictitious one made the results more credible
            and the suggestions more reliable. Since each
            finding is based on something that a real user
            actually experiences, this demanded a greater degree
            of specificity than a hypothetical audit would.
            Moreover, it highlighted the conflict between
            business incentives and user trust. Hertz's
            selection of copy is not random; it shows deliberate
            choices regarding how to present the information in
            a way that promotes conversion. The value of a
            content audit lies in making these choices visible
            and in advocating for alternatives that benefit both
            the user and the business in a more sustainable
            manner.
          </p>
          <p>
            If I ever return to this project, it would be only
            natural to carry out the same audit on the mobile
            app version of the booking process, since a number
            of the friction points identified here would be even
            more pronounced on a smaller screen where the
            cognitive load is already greater and users have
            less tolerance for persuasive techniques that delay
            them.
          </p>
        </div>
      </section>

      <ProjectNavigation currentSlug="content-audit-optimize" />
    </div>
  );
}