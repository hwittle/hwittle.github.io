import type { OverviewData, RationaleItem } from "./types";

import overviewImage from "./images/connectivity-error-state.png";

export const overview: OverviewData = {
  image: {
    src: overviewImage,
    alt: "Mobile and desktop mockup of Chime's connectivity error screen with 'Looks like you're offline' message and frog illustration.",
    caption: "Connectivity error state, mobile and desktop",
  },
  paragraphs: [
    "Completed for the Uxcel UX Writing certification: an error state for Chime, whose conversational, empowering voice stands out in a formal industry.",
    "Instead of a traditional 404, which is unlikely in a native app where users can't edit URLs, I designed for a connectivity error. It is a more realistic and emotionally charged failure point for a finance app, especially mid-transaction.",
  ],
  stats: [
    { label: "Platforms", value: "2" },
    { label: "Recovery steps", value: "3" },
    { label: "Calls to action", value: "1" },
  ],
};

export const rationale: RationaleItem[] = [
  {
    title:
      "Choosing a Connectivity Error Over a Traditional 404",
    points: [
      "Native apps don't let users manually enter or change URLs, making a 404 unlikely.",
      "A connectivity error is a more realistic, higher-stakes failure. Losing connection mid-transaction causes real anxiety about money and security.",
    ],
  },
  {
    title: "Headline",
    points: [
      `"Looks like you're offline" replaces alarming alternatives like "No connection detected" or technical terms like "Network error".`,
      "Conversational phrasing matches Chime's tone and explains the issue plainly without raising user anxiety.",
    ],
  },
  {
    title: "Body Copy",
    points: [
      `Three sequential recovery steps: check connection. "Still no luck?" acknowledges frustration before offering the next step. Then "close the app and come back" provides a concrete alternative.`,
      `Closing line ("Your transactions will show you exactly where things stand") reassures without promising a transaction outcome the app can't guarantee.`,
    ],
  },
  {
    title: "Single CTA (Call-to-Action)",
    points: [
      `Only one action, "Try Again", reduces cognitive load during an already frustrating moment.`,
      "Other navigation was deliberately omitted because it requires a connection to function. Including it would create a false sense of options.",
    ],
  },
  {
    title: "Illustration",
    points: [
      `Reuses Chime's existing 404 frog mascot in a new error context, preserving brand warmth and signaling a "minor inconvenience," not a serious problem.`,
    ],
  },
  {
    title: "Mobile and Desktop Versions",
    points: [
      "The same copy is used across both since the error and recovery steps don't change by device.",
      "Layout adapts per platform: mobile stacks illustration above copy for thumb navigation; desktop places them side by side with a larger illustration.",
    ],
  },
];