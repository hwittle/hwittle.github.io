import type {
  OverviewData,
  ProcessStep,
  Specification,
} from "./types";

import overviewImage from "./images/setup-guide-overview.png";

export const overview: OverviewData = {
  image: {
    src: overviewImage,
    alt: "Cover and first assembly page of the bilingual setup guide.",
    caption: "Setup guide pages",
  },
  paragraphs: [
    "This setup guide gives customers clear, step-by-step instructions for assembling a large-format commercial printer. The product manager asked for a new guide so customers and their teams could put the printer together at industrial sites without needing Epson-certified installers. The final guide can be printed or viewed online, since assemblers might not always have a computer or phone nearby. Printed copies come with the product and include the warranty.",
  ],
  stats: [
    { label: "Total pages", value: "64" },
    { label: "Languages", value: "2" },
    { label: "Print color", value: "B&W" },
  ],
  links: [
    {
      href: "https://files.support.epson.com/docid/cpd6/cpd64764.pdf",
      label: "View PDF Guide",
    },
  ],
};

export const steps: ProcessStep[] = [
  {
    topic: "Bilingual layout",
    challenge:
      "The printer sells in the United States and Canada, so English and French had to fit in a single printable document.",
    response:
      "Wrote the English copy with localization in mind, keeping sentences simple and concise so French translations would not overrun line lengths or disrupt the layout.",
  },
  {
    topic: "Print cost and legibility",
    challenge:
      "Print cost had to be managed while keeping all text and visuals clear in black and white.",
    response:
      "Combined the setup guide and warranty into one 64-page document, and worked with senior writers and the product manager to condense content without losing clarity.",
  },
  {
    topic: "Illustrations",
    challenge:
      "Some existing line art did not match the assembly steps, and complex steps and location-specific actions needed new illustrations.",
    response:
      "Worked with in-house graphic designers to replace the line art with new illustrations that matched each step, and limited line art to complex or location-specific steps to keep illustration volume down.",
  },
  {
    topic: "Timeline",
    challenge:
      "The product manager needed a draft ready for a trade convention where the printer would be assembled and shown to buyers, and the French localization team had to be scheduled around its other assignments.",
    response:
      "Coordinated the timeline with the French localizer to balance competing priorities and meet the convention deadline.",
  },
];

export const specifications: Specification[] = [
  {
    label: "Format",
    values: [
      "Printed, black and white",
      "64 pages: a 27-page setup guide and a 5-page warranty, each in English and French",
    ],
  },
  {
    label: "Languages",
    values: [
      "English and French in a single bilingual document",
    ],
  },
  {
    label: "Audience",
    values: [
      "Business customers",
      "Assembly teams at industrial sites",
    ],
  },
  {
    label: "Tools",
    values: [
      "Adobe InDesign",
      "Adobe Acrobat for PDF/X output",
    ],
  },
  {
    label: "Distribution",
    values: [
      "Packaged with the product",
      "Available as an online PDF",
    ],
  },
  {
    label: "Collaborators",
    values: [
      "Product manager",
      "Large-format printer team",
      "In-house graphic designers",
      "French localization team",
      "Senior writers",
    ],
  },
];