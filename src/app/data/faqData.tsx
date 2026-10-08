import type {
  OverviewData,
  ProcessStep,
  Specification,
} from "./types";

import overviewImage from "./images/faq-dev-overview.png";

export const overview: OverviewData = {
  image: {
    src: overviewImage,
    alt: "FAQ section of an Epson product support page, with questions grouped into tabs.",
    caption: "FAQ section of a live product support page",
  },
  paragraphs: [
    "To support launches across consumer printers, business printers, and projectors, our team maintained a scalable FAQ system built on a library of reusable templates organized by product type. I wrote and published the FAQs for these launches: general FAQs from the template library, and product-specific FAQs developed alongside the user guides.",
    "Once live on a product's support page, FAQs are sorted into tabs with several questions each, and are available in multiple languages for customers in North and Latin America.",
  ],
  stats: [
    { label: "Languages", value: "4" },
    { label: "Product types", value: "3" },
    { label: "Product FAQs per launch", value: "20 to 60" },
  ],
  links: [
    {
      href: "https://epson.com/Support/Projectors/PowerLite-Series/Epson-PowerLite-EB-L265F/s/SPT_V11HA72120#faq",
      label: "View Live FAQs",
    },
  ],
};

export const steps: ProcessStep[] = [
  {
    topic: "Dependence on user guides",
    challenge:
      "Product-specific FAQs rely on finalized user guide content approved by product management and the writing team, so delays in the documentation pipeline affect FAQ delivery.",
    response:
      "When delays were expected, deployed general FAQs from the existing library, so the FAQ section had accurate baseline content while product-specific FAQs were still in development.",
  },
  {
    topic: "Shifting launch dates",
    challenge:
      "Launch dates changed, which created unpredictable timelines and shortened the time between receiving finalized materials and the product reaching its first customer.",
    response:
      "Stayed active in product meetings to anticipate changes, then tracked shipping and first-customer dates and worked backward from them to set the date when all FAQs needed to be live.",
  },
  {
    topic: "Localization",
    challenge:
      "Localization requests were coordinated with a shared team handling multiple languages and concurrent projects, which added another scheduling dependency.",
    response:
      "Coordinated requests with the translation team, reviewed returned content for accuracy and consistency, and managed the upload and verification of every translated FAQ version.",
  },
  {
    topic: "HTML publishing",
    challenge:
      "The publishing workflow routed files through a team that ran a cleanup script before upload, which created a daily scheduling dependency.",
    response:
      "Planned upload schedules around that step, and kept the template library annotated so FAQs could also be uploaded manually if the database did not sync in time.",
  },
  {
    topic: "Shared ownership",
    challenge:
      "FAQ assignments sometimes covered products whose user's guides were handled by a different writer.",
    response:
      "Maintained the FAQ template library, with comments marking which product types each template applied to, so launches could be set up faster across writers and products.",
  },
];

export const specifications: Specification[] = [
  {
    label: "Format",
    values: [
      "Categorized HTML FAQ pages with search functionality",
      "Product-specific FAQs link to the user's guide, inheriting future updates",
    ],
  },
  {
    label: "Languages",
    values: ["English", "French", "Spanish", "Portuguese"],
  },
  {
    label: "Audience",
    values: [
      "Commercial users for personal, creative, or small-scale events",
      "Business users for office, professional, or large-scale venues",
    ],
  },
  {
    label: "Scale per launch",
    values: [
      "5 to 20 general FAQs per product type",
      "20 to 60 product-specific FAQs, depending on category",
    ],
  },
  {
    label: "Tools",
    values: [
      "Adobe Dreamweaver",
      "Contiem CMS (previously Orbis)",
      "Oxygen XML Editor",
    ],
  },
  {
    label: "Publishing workflow",
    values: [
      "Authored in Oxygen XML Editor and output as HTML",
      "HTML files cleaned, formatted via script, and edited in Dreamweaver if needed",
      "Submitted to IT for upload to the FAQ database, verified on a test site, then synced to the official site",
    ],
  },
];