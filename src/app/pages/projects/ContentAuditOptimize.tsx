import { useNavigate } from "react-router";
import { ProjectNavigation } from "../../components/ProjectNavigation";
import { projects } from "../../data/projects";

import { LightboxImage } from "../../components/LightboxImage";
import AuditImage1 from "../../images/audit-transport-1.png";
import AuditImage2 from "../../images/audit-transport-2.png";
import AuditImage3_1 from "../../images/audit-transport-3-no.png";
import AuditImage3_2 from "../../images/audit-transport-3-yes.png";
import AuditImage4 from "../../images/audit-transport-4.png";
import AuditImage5 from "../../images/audit-transport-5.png";

export function ContentAuditOptimize() {
  const navigate = useNavigate();
  const project = projects.find(
    (p) => p.slug === "content-audit-optimize",
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
            <span>Independent Audit</span>
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
            This is an independent content audit of Hertz's
            desktop car rental booking flow, conducted to
            identify content and copy decisions that create
            unnecessary friction, erode user trust, or obscure
            information users need to make confident decisions.
            Reducing that friction supports two outcomes: higher
            booking completion rates and stronger long term
            brand trust.
          </p>
          <p>
            Car rental platforms are a high friction category in
            travel e-commerce. Users are often navigating
            unfamiliar insurance terminology, opaque pricing
            structures, and multiple add-on decisions under time
            pressure. Content that compounds that friction
            through vague language, manipulative framing, or
            inconsistent information erodes trust and
            contributes directly to booking abandonment.
          </p>
          <p>
            This audit covers five key pages within the Hertz
            desktop booking flow: vehicle selection, protection
            coverage, protection modal, add-ons, and checkout.
            Each page is evaluated against the following
            criteria:
          </p>
          <ul className="pl-4 space-y-2 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-2">▸</span>
              <span>
                <strong>Language clarity</strong> — is the copy
                easy to understand without prior knowledge of
                rental industry terminology
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">▸</span>
              <span>
                <strong>Pricing transparency</strong> — is
                pricing information complete, consistent, and
                disclosed at the right point in the journey
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">▸</span>
              <span>
                <strong>Brand voice consistency</strong> — does
                the copy maintain a consistent tone and style
                across all pages
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">▸</span>
              <span>
                <strong>Ethical copy standards</strong> — does
                the content respect user autonomy and avoid
                manipulative persuasion patterns
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">▸</span>
              <span>
                <strong>Findability</strong> — is relevant
                information easy to locate when users need it to
                make a decision
              </span>
            </li>
          </ul>
          <p>
            Findings are labeled as Add, Remove, or Update with
            specific recommendations for each.
          </p>
        </div>
      </section>

      {/* Rationale */}
      <section className="mb-16">
        <h2 className="text-3xl uppercase tracking-wide border-l-4 border-foreground pl-4 mb-6">
          Rationale
        </h2>

        {/* Table 1: Vehicle Selection */}
        <div className="grid md:grid-cols-1 gap-6 pb-20">
          <div className="border-t-2 border-l-2 border-r-2 border-foreground bg-card">
            {/* Single grid container controlling all column widths */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_0.5fr_2fr]">
              {/* Row 1: Image spanning all 3 columns */}
              <div className="col-span-1 md:col-span-3 border-b-2 border-foreground p-6">
                <LightboxImage
                  src={AuditImage1}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6 w-full"
                />
              </div>

              {/* Row 2: Column Headers */}
              {/* Column 1 */}
              <div className="p-6 border-b-2 border-foreground md:border-r-2">
                <h3 className="uppercase tracking-wide font-bold">
                  Finding
                </h3>
              </div>

              {/* Column 2 */}
              <div className="p-6 border-b-2 border-foreground md:border-r-2">
                <h3 className="uppercase tracking-wide font-bold">
                  Status
                </h3>
              </div>

              {/* Column 3 */}
              <div className="p-6 border-b-2 border-foreground">
                <h3 className="uppercase tracking-wide font-bold">
                  Recommendation
                </h3>
              </div>

              {/* Row 3 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide">
                  1. "Don't miss out on members-only rates!"
                  banner at top creates urgency without context
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide">
                  Replace with specific value statement such as
                  "Members save up to X% — join free" to give
                  users actionable information rather than vague
                  pressure
                </p>
              </div>

              {/* Row 4 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  2. "Unlock member rates" link appears on all
                  cards without clarifying whether listed prices
                  are already member rates or standard rates
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Add clarifying label such as "Standard rate"
                  or "Member rate" next to the listed price so
                  users understand what they are comparing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Table 2: Protection Selection */}
        <div className="grid md:grid-cols-1 gap-6 pb-20">
          <div className="border-t-2 border-l-2 border-r-2 border-foreground bg-card">
            {/* Single grid container controlling all column widths */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_0.5fr_2fr]">
              {/* Row 1: Image spanning all 3 columns */}
              <div className="col-span-1 md:col-span-3 border-b-2 border-foreground p-6">
                <LightboxImage
                  src={AuditImage2}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6 w-full"
                />
              </div>

              {/* Row 2: Column Headers */}
              {/* Column 1 */}
              <div className="p-6 border-b-2 border-foreground md:border-r-2">
                <h3 className="uppercase tracking-wide font-bold">
                  Finding
                </h3>
              </div>

              {/* Column 2 */}
              <div className="p-6 border-b-2 border-foreground md:border-r-2">
                <h3 className="uppercase tracking-wide font-bold">
                  Status
                </h3>
              </div>

              {/* Column 3 */}
              <div className="p-6 border-b-2 border-foreground">
                <h3 className="uppercase tracking-wide font-bold">
                  Recommendation
                </h3>
              </div>

              {/* Row 3 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  1. "Online Only Discount" tag appears on all
                  three options, diluting its meaning as a
                  differentiator
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Reserve discount tag for options where the
                  discount is meaningful or remove entirely if
                  it applies universally
                </p>
              </div>

              {/* Row 4 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  2. "I accept responsibility for damage to or
                  theft of the vehicle and any third-party
                  claims" uses legal liability language to
                  manufacture anxiety before the user has
                  declined
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Simplify to "I understand I am not adding
                  rental protection" which is factually accurate
                  without escalating emotional stakes
                </p>
              </div>

              {/* Row 5 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  3. "It's better to have it and not need it,
                  than need it and not have it" is persuasive
                  framing disguised as wisdom in a financial
                  decision context
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Remove</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Remove entirely, it does not provide useful
                  information and uses emotional manipulation to
                  influence a financial decision
                </p>
              </div>

              {/* Row 6 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  4. "I accept the risk" as the decline CTA
                  frames a neutral user choice as dangerous and
                  irresponsible
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Replace with neutral copy such as "Continue
                  Without Protection" that describes the action
                  without loaded language
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Table 3: Protection Modal */}
        <div className="grid md:grid-cols-1 gap-6 pb-20">
          <div className="border-t-2 border-l-2 border-r-2 border-foreground bg-card">
            {/* Single grid container controlling all column widths */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_0.5fr_2fr]">
              {/* Row 1: Image spanning all 3 columns */}
              <div className="col-span-3 grid grid-cols-1 md:grid-cols-[2fr_2fr] border-b-2 border-foreground p-6">
                <LightboxImage
                  src={AuditImage3_1}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6 w-full"
                />
                <LightboxImage
                  src={AuditImage3_2}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6 w-full"
                />
              </div>

              {/* Row 2: Column Headers */}
              {/* Column 1 */}
              <div className="p-6 border-b-2 border-foreground md:border-r-2">
                <h3 className="uppercase tracking-wide font-bold">
                  Finding
                </h3>
              </div>

              {/* Column 2 */}
              <div className="p-6 border-b-2 border-foreground md:border-r-2">
                <h3 className="uppercase tracking-wide font-bold">
                  Status
                </h3>
              </div>

              {/* Column 3 */}
              <div className="p-6 border-b-2 border-foreground">
                <h3 className="uppercase tracking-wide font-bold">
                  Recommendation
                </h3>
              </div>

              {/* Row 3 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide">
                  1. Modal reappears after user has already
                  declined protection on the previous page,
                  re-prompting a decision the user already made
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide">Remove</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide">
                  Remove the modal entirely. Once a user
                  declines on the protection page their decision
                  should be respected without a secondary
                  confirmation prompt
                </p>
              </div>

              {/* Row 4 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  2. Modal headline "How will you cover damages
                  and emergencies?" uses fear framing with an
                  accident photo to reopen an already closed
                  decision
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  If modal is retained for any reason, replace
                  accident photo and fear based headline with
                  neutral informational copy that respects the
                  user's prior decision
                </p>
              </div>
              {/* Row 5 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  3. "Recommended" tag in modal applies to Basic
                  Protection, contradicting the previous page
                  where it was applied to the "Complete
                  Protection" option
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Standardize which option carries the
                  Recommended tag consistently across all
                  touchpoints
                </p>
              </div>
              {/* Row 6 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  4. Selecting "I'll cover damage on my own"
                  changes the CTA to "I'll take the risk" and
                  displays a red warning text "You are fully
                  responsible for damages and emergencies"
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Replace with neutral CTA such as "Continue"
                  and remove the red warning text which serves
                  no informational purpose beyond reinforcing
                  fear
                </p>
              </div>
              {/* Row 7 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  5. Green text "Protect the car and enjoy peace
                  of mind!" appears as a persistent nudge even
                  in the unselected state
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Remove</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Remove entirely, it is promotional copy in a
                  decision making context where neutral
                  information serves users better
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Table 4: Add-on Selection */}
        <div className="grid md:grid-cols-1 gap-6 pb-20">
          <div className="border-t-2 border-l-2 border-r-2 border-foreground bg-card">
            {/* Single grid container controlling all column widths */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_0.5fr_2fr]">
              {/* Row 1: Image spanning all 3 columns */}
              <div className="col-span-1 md:col-span-3 border-b-2 border-foreground p-6">
                <LightboxImage
                  src={AuditImage4}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6 w-full"
                />
              </div>

              {/* Row 2: Column Headers */}
              {/* Column 1 */}
              <div className="p-6 border-b-2 border-foreground md:border-r-2">
                <h3 className="uppercase tracking-wide  font-bold">
                  Finding
                </h3>
              </div>

              {/* Column 2 */}
              <div className="p-6 border-b-2 border-foreground md:border-r-2">
                <h3 className="uppercase tracking-wide  font-bold">
                  Status
                </h3>
              </div>

              {/* Column 3 */}
              <div className="p-6 border-b-2 border-foreground">
                <h3 className="uppercase tracking-wide  font-bold">
                  Recommendation
                </h3>
              </div>

              {/* Row 3 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  1. Page headline "2.5 Million + customers
                  purchased our popular add-ons in 2025!" is a
                  broad social proof that doesn't help the user
                  evaluate whether the add-on is relevant to
                  their specific trip
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Replace with trip specific context such as
                  "Here are options to manage costs on the
                  road!"
                </p>
              </div>

              {/* Row 4 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  2. "Top picked item for California renters" is
                  marketing copy without specificity about why
                  it is top picked or what it means for this
                  user
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Replace with factual context such as
                  "Recommended for trips using California toll
                  roads"
                </p>
              </div>
              {/* Row 5 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  3. Pulsing green live dot with "1.2M+ bought
                  in 2025" simulates urgency through false real
                  time social proof, a known dark pattern
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Remove</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Remove the pulsing animation and purchase
                  count. If social proof is included, use
                  verified and specific data presented as a
                  static fact rather than a simulated live
                  signal.
                </p>
              </div>
              {/* Row 6 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  4. California map showing toll roads is
                  visually engaging but the accompanying copy
                  "California has over 870 miles of toll roads,
                  bridges and more!" is vague and "and more" is
                  undefined
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Replace with specific and accurate copy that
                  explains what qualifies as a toll road for the
                  purposes of the "Unlimited Tolling" add-on
                </p>
              </div>
              {/* Row 7 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  5. "Without unlimited tolling, a fee may apply
                  plus toll charges" uses vague hedging language
                  "may apply" that doesn't help users make an
                  informed decision
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Replace with specific fee disclosure such as
                  the actual admin fee amount and per toll
                  charge so users can make a genuine cost
                  comparison
                </p>
              </div>
              {/* Row 8 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  6. Prepaid Fuel warning "Returning an empty
                  tank could result in est. $144 refueling
                  charge" uses a specific scary number without
                  context about how it was calculated
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Add brief explanation of how the estimate was
                  calculated and note that actual charges vary,
                  which is already disclosed in smaller text
                  below but should be more prominent
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Table 5: Checkout */}
        <div className="grid md:grid-cols-1 gap-6">
          <div className="border-t-2 border-l-2 border-r-2 border-foreground bg-card">
            {/* Single grid container controlling all column widths */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_0.5fr_2fr]">
              {/* Row 1: Image spanning all 3 columns */}
              <div className="col-span-1 md:col-span-3 border-b-2 border-foreground p-6">
                <LightboxImage
                  src={AuditImage5}
                  alt="Mock design of two iPhones with Steam Wishlist announcement in Collapsed and Expanded forms."
                  className="border-2 p-6 w-full"
                />
              </div>

              {/* Row 2: Column Headers */}
              {/* Column 1 */}
              <div className="p-6 border-b-2 border-foreground md:border-r-2">
                <h3 className="uppercase tracking-wide  font-bold">
                  Finding
                </h3>
              </div>

              {/* Column 2 */}
              <div className="p-6 border-b-2 border-foreground md:border-r-2">
                <h3 className="uppercase tracking-wide  font-bold">
                  Status
                </h3>
              </div>

              {/* Column 3 */}
              <div className="p-6 border-b-2 border-foreground">
                <h3 className="uppercase tracking-wide  font-bold">
                  Recommendation
                </h3>
              </div>

              {/* Row 3 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  1. Countdown timer "Best Rate held for:"
                  creates an artificial time pressure at
                  checkout without explanation of what happens
                  when it expires
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Add brief copy explaining the consequence of
                  the timer expiring such as "Rate may change if
                  session expires" so users understand the
                  actual stakes and also move the timer location
                  towards the booking options where it is more
                  visible
                </p>
              </div>

              {/* Row 4 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  2. "Book now to guarantee this rate!" creates
                  urgency without explaining what rate guarantee
                  means or when it expires
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Update</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Replace with specific information such as
                  "This rate is held until your pickup date" or
                  reference the countdown timer already visible
                  at the top of the page
                </p>
              </div>

              {/* Row 5 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  3. Only one payment option shown "Book Now and
                  Pay Later" without disclosing that a more
                  expensive pay-at-pickup option exists for
                  bookings closer to the rental date
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Add</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Disclose both payment options and their
                  respective prices at the vehicle selection
                  stage rather than revealing pricing
                  differences only at checkout
                </p>
              </div>

              {/* Row 6 */}
              {/* Column 1 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">
                  4. "Don't miss out on members-only rates!"
                  banner persists into checkout despite user
                  having already completed vehicle selection,
                  serving no useful purpose at this stage
                </p>
              </div>

              {/* Column 2 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground md:border-r-2">
                <p className="tracking-wide ">Remove</p>
              </div>

              {/* Column 3 */}
              <div className="pt-2 pl-6 pr-6 pb-2 border-b-2 border-foreground">
                <p className="tracking-wide ">
                  Remove or replace with a contextually relevant
                  message at checkout such as order summary
                  confirmation copy
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
            This audit reinforced that content problems in
            e-commerce are rarely isolated. What begins as a
            single piece of vague copy compounds across a
            multi-step flow until the cumulative effect is a
            user experience that feels adversarial rather than
            helpful. The protection page, the modal
            reappearance, the add-on pressure tactics, and the
            late pricing disclosure are each problematic on
            their own, but together they paint a picture of a
            booking flow optimized for revenue extraction rather
            than user confidence.
          </p>
          <p>
            The most significant finding was the payment option
            pricing discrepancy at checkout. Showing one price
            during vehicle selection and revealing a higher
            price for a different payment option only at
            checkout is not a copy problem — it is a structural
            transparency problem that no amount of improved
            wording can fully resolve. The fix requires
            surfacing both options earlier in the journey, which
            is a product and content strategy decision rather
            than a microcopy edit.
          </p>
          <p>
            Auditing a real platform rather than a fictional one
            made the findings more credible and the
            recommendations more grounded. Every finding is tied
            to something a real user would encounter, which
            forced a level of specificity that a hypothetical
            audit would not require. It also surfaced the
            tension between business incentives and user trust —
            Hertz's copy choices are not accidental. They
            reflect deliberate decisions about how to present
            information in ways that favor conversion. A content
            audit's value is in making those choices visible and
            arguing for alternatives that serve both the user
            and the business more sustainably.
          </p>
          <p>
            If revisiting this project, conducting the same
            audit on the mobile app version of the booking flow
            would be a natural extension. Many of the friction
            points identified here would be amplified on a
            smaller screen where cognitive load is already
            higher and users have less patience for persuasive
            tactics that slow them down.
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

      <ProjectNavigation currentSlug="content-audit-optimize" />
    </div>
  );
}