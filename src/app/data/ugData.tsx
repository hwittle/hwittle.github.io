import type {
  OverviewData,
  ProcessStep,
  Specification,
} from "./types";

import overviewImage from "./images/ug-html-overview.png";

export const overview: OverviewData = {
  image: {
    src: overviewImage,
    alt: "Landing page of the HTML user's guide, showing one of the projector models.",
    caption: "Landing page of the HTML user's guide",
  },
  paragraphs: [
    "I wrote a single user's guide covering 12 projector models, so shared information appears once and each model's unique features and interfaces are still documented. The guide is published in two formats: a sectioned, searchable HTML version with a search bar on the North American website, and a PDF managed by the overseas team for offline access, printing, and readers who prefer that format.",
    "The project ran alongside a switch to a new template from our overseas parent company. The company chose to use the global team's HTML help format for the web version instead of building a separate North American one, so I worked with colleagues abroad to meet international formatting standards and North American legal requirements.",
  ],
  stats: [
    { label: "Models covered", value: "12" },
    { label: "Pages", value: "291" },
    { label: "Output formats", value: "2" },
  ],
  links: [
    {
      href: "https://download2.ebz.epson.net/sec_pubs_visual/eai/projectors/html/EB-L890E/useg/EN/index.html",
      label: "View HTML Guide",
    },
    {
      href: "https://download2.ebz.epson.net/sec_pubs_visual/eai/projectors/pdf/useg/EN/UsersGuide_EBL890E_EN_EAI.pdf",
      label: "View PDF Guide",
    },
  ],
};

export const steps: ProcessStep[] = [
  {
    topic: "Scope",
    challenge:
      "12 models with no unified guide. A full feature comparison was needed to separate shared content from model-specific caveats.",
    response:
      "Compared specifications in color-coded Excel tables, verified findings with my manager and team lead, and confirmed the unified-guide approach with the product manager.",
  },
  {
    topic: "Legal compliance",
    challenge:
      "North American releases require legal content that international versions do not, such as coin-battery hazard and laser-safety warnings.",
    response:
      "Made sure the North American guide included all required legal content, and reminded the Japan team to include it in future products.",
  },
  {
    topic: "Language consistency",
    challenge:
      "The English copy had inconsistent grammar and terminology.",
    response:
      "Proofread and rewrote the copy for consistency across all 291 pages.",
  },
  {
    topic: "PDF revisions",
    challenge:
      "All PDF edits had to be routed through the overseas team, which slowed revisions.",
    response:
      "Edited the North American HTML version directly in Dreamweaver, so web updates did not have to wait on the PDF revision cycle.",
  },
  {
    topic: "Version control",
    challenge:
      "Duplicate guides were sometimes created from outdated source files that lacked earlier edits.",
    response:
      "Flagged outdated source files and confirmed edits were applied to the correct version.",
  },
  {
    topic: "Team capacity",
    challenge:
      "Staffing on the North American team was reduced during the project, and the overseas writing team took on part of our workload.",
    response:
      "Checked decisions with my manager, then documented the HTML workflow and trained teammates to use it on other projects.",
  },
];

export const specifications: Specification[] = [
  {
    label: "Format",
    values: [
      "HTML (sectioned, with search bar)",
      "PDF (A4 landscape, for offline use and printing)",
    ],
  },
  {
    label: "Languages",
    values: ["English", "French"],
  },
  {
    label: "Audience",
    values: [
      "Commercial users (projection for local businesses and small events)",
      "Business users (multi-projections and large venues)",
    ],
  },
  {
    label: "Tools",
    values: [
      "Adobe Acrobat",
      "Adobe Dreamweaver",
      "Microsoft Excel",
    ],
  },
];