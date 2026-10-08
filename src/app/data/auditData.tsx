import type { Criterion, OverviewData } from "./types";

import type { Finding } from "../components/FindingsTable";

import overviewImage from "./images/audit-transport-2.png";

export const criteria: Criterion[] = [
  {
    term: "Language clarity",
    definition:
      "Understandable without rental industry knowledge",
  },
  {
    term: "Pricing transparency",
    definition:
      "Complete, consistent, disclosed at the right point",
  },
  {
    term: "Brand voice consistency",
    definition: "Consistent tone and style across pages",
  },
  {
    term: "Ethical copy standards",
    definition:
      "Respects autonomy, avoids manipulative patterns",
  },
  {
    term: "Findability",
    definition:
      "Relevant information easy to locate when needed",
  },
];

export const vehicleFindings: Finding[] = [
  {
    finding: `"Don't miss out on members-only rates!" banner at top creates urgency without context`,
    status: "Update",
    recommendation: `Replace with specific value statement such as "Members save up to X%. Join free. to give users actionable information rather than vague pressure`,
  },
  {
    finding: `"Unlock member rates" link appears on all cards without clarifying whether listed prices are already member rates or standard rates`,
    status: "Update",
    recommendation: `Add clarifying label such as "Standard rate" or "Member rate" next to the listed price so users understand what they are comparing`,
  },
];

export const protectionFindings: Finding[] = [
  {
    finding: `"Online Only Discount" tag appears on all three options, diluting its meaning as a differentiator`,
    status: "Update",
    recommendation: `Reserve discount tag for options where the discount is meaningful or remove entirely if it applies universally`,
  },
  {
    finding: `"I accept responsibility for damage to or theft of the vehicle and any third-party claims" uses legal liability language to manufacture anxiety before the user has declined`,
    status: "Update",
    recommendation: `Simplify to "I understand I am not adding rental protection" which is factually accurate without escalating emotional stakes`,
  },
  {
    finding: `"It's better to have it and not need it, than need it and not have it" is persuasive framing disguised as wisdom in a financial decision context`,
    status: "Remove",
    recommendation: `Remove entirely, it does not provide useful information and uses emotional manipulation to influence a financial decision`,
  },
  {
    finding: `"I accept the risk" as the decline CTA frames a neutral user choice as dangerous and irresponsible`,
    status: "Update",
    recommendation: `Replace with neutral copy such as "Continue Without Protection" that describes the action without loaded language`,
  },
];

export const modalFindings: Finding[] = [
  {
    finding: `Modal reappears after user has already declined protection on the previous page, re-prompting a decision the user already made`,
    status: "Remove",
    recommendation: `Remove the modal entirely. Once a user declines on the protection page their decision should be respected without a secondary confirmation prompt`,
  },
  {
    finding: `Modal headline "How will you cover damages and emergencies?" uses fear framing with an accident photo to reopen an already closed decision`,
    status: "Update",
    recommendation: `If modal is retained for any reason, replace accident photo and fear based headline with neutral informational copy that respects the user's prior decision`,
  },
  {
    finding: `"Recommended" tag in modal applies to Basic Protection, contradicting the previous page where it was applied to the "Complete Protection" option`,
    status: "Update",
    recommendation: `Standardize which option carries the Recommended tag consistently across all touchpoints`,
  },
  {
    finding: `Selecting "I'll cover damage on my own" changes the CTA to "I'll take the risk" and displays a red warning text "You are fully responsible for damages and emergencies"`,
    status: "Update",
    recommendation: `Replace with neutral CTA such as "Continue" and remove the red warning text which serves no informational purpose beyond reinforcing fear`,
  },
  {
    finding: `Green text "Protect the car and enjoy peace of mind!" appears as a persistent nudge even in the unselected state`,
    status: "Remove",
    recommendation: `Remove entirely, it is promotional copy in a decision making context where neutral information serves users better`,
  },
];

export const addonFindings: Finding[] = [
  {
    finding: `Page headline "2.5 Million + customers purchased our popular add-ons in 2025!" is a broad social proof that doesn't help the user evaluate whether the add-on is relevant to their specific trip`,
    status: "Update",
    recommendation: `Replace with trip specific context such as "Here are options to manage costs on the road!"`,
  },
  {
    finding: `"Top picked item for California renters" is marketing copy without specificity about why it is top picked or what it means for this user`,
    status: "Update",
    recommendation: `Replace with factual context such as "Recommended for trips using California toll roads"`,
  },
  {
    finding: `Pulsing green live dot with "1.2M+ bought in 2025" simulates urgency through false real time social proof, a known dark pattern`,
    status: "Remove",
    recommendation: `Remove the pulsing animation and purchase count. If social proof is included, use verified and specific data presented as a static fact rather than a simulated live signal.`,
  },
  {
    finding: `California map showing toll roads is visually engaging but the accompanying copy "California has over 870 miles of toll roads, bridges and more!" is vague and "and more" is undefined`,
    status: "Update",
    recommendation: `Replace with specific and accurate copy that explains what qualifies as a toll road for the purposes of the "Unlimited Tolling" add-on`,
  },
  {
    finding: `"Without unlimited tolling, a fee may apply plus toll charges" uses vague hedging language "may apply" that doesn't help users make an informed decision`,
    status: "Update",
    recommendation: `Replace with specific fee disclosure such as the actual admin fee amount and per toll charge so users can make a genuine cost comparison`,
  },
  {
    finding: `Prepaid Fuel warning "Returning an empty tank could result in est. $144 refueling charge" uses a specific scary number without context about how it was calculated`,
    status: "Update",
    recommendation: `Add brief explanation of how the estimate was calculated and note that actual charges vary, which is already disclosed in smaller text below but should be more prominent`,
  },
];

export const checkoutFindings: Finding[] = [
  {
    finding: `Countdown timer "Best Rate held for:" creates an artificial time pressure at checkout without explanation of what happens when it expires`,
    status: "Update",
    recommendation: `Add brief copy explaining the consequence of the timer expiring such as "Rate may change if session expires" so users understand the actual stakes and also move the timer location towards the booking options where it is more visible`,
  },
  {
    finding: `"Book now to guarantee this rate!" creates urgency without explaining what rate guarantee means or when it expires`,
    status: "Update",
    recommendation: `Replace with specific information such as "This rate is held until your pickup date" or reference the countdown timer already visible at the top of the page`,
  },
  {
    finding: `Only one payment option shown "Book Now and Pay Later" without disclosing that a more expensive pay-at-pickup option exists for bookings closer to the rental date`,
    status: "Add",
    recommendation: `Disclose both payment options and their respective prices at the vehicle selection stage rather than revealing pricing differences only at checkout`,
  },
  {
    finding: `"Don't miss out on members-only rates!" banner persists into checkout despite user having already completed vehicle selection, serving no useful purpose at this stage`,
    status: "Remove",
    recommendation: `Remove or replace with a contextually relevant message at checkout such as order summary confirmation copy`,
  },
];

export const pagesAudited = [
  "Vehicle selection",
  "Protection coverage",
  "Protection modal",
  "Add-ons",
  "Checkout",
];

export const allFindings: Finding[] = [
  ...vehicleFindings,
  ...protectionFindings,
  ...modalFindings,
  ...addonFindings,
  ...checkoutFindings,
];

export const findingCounts = {
  total: allFindings.length,
  Add: allFindings.filter((f) => f.status === "Add").length,
  Remove: allFindings.filter((f) => f.status === "Remove")
    .length,
  Update: allFindings.filter((f) => f.status === "Update")
    .length,
};

export const overview: OverviewData = {
  image: {
    src: overviewImage,
    alt: "Screenshot of Hertz's protection plan page with 4 red boxes highlighting areas of concern.",
    caption: "Hertz protection page with annotated findings",
  },
  paragraphs: [
    "Car rental booking is high-friction: unfamiliar insurance terms, opaque pricing, and add-on decisions under time pressure. This independent audit examines how Hertz's desktop booking flow uses copy in that environment, and where it adds friction or pressure.",
    "Each finding is classified as Add, Remove, or Update, with a specific recommendation.",
  ],
  note: `Pages: ${pagesAudited.join(", ")}.`,
  stats: [
    {
      label: "Pages audited",
      value: String(pagesAudited.length),
    },
    { label: "Findings", value: String(findingCounts.total) },
    { label: "Criteria", value: String(criteria.length) },
  ],
};