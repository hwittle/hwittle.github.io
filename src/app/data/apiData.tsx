import type {
  OverviewData,
  Specification,
  WorkflowStep,
} from "./types";

export const specifications: Specification[] = [
  {
    label: "Audience",
    values: [
      "Developers building Steam integrations or third-party applications who need detailed, tested endpoint references",
    ],
  },
  {
    label: "Distribution",
    values: [
      "Static documentation site on GitHub Pages",
      "Open source repository on GitHub",
    ],
  },
  {
    label: "Endpoints documented",
    groups: [
      {
        heading: "IPlayerService",
        values: ["GetOwnedGames", "GetRecentlyPlayedGames"],
      },
      {
        heading: "ISteamUser",
        values: ["GetFriendList", "GetPlayerSummaries"],
      },
      {
        heading: "ISteamUserStats",
        values: ["GetPlayerAchievements"],
      },
    ],
  },
  {
    label: "Tools",
    values: [
      "MkDocs Material: documentation framework",
      "Postman: API testing and response capture",
      "Python virtual environment: local development",
      "Visual Studio Code: content authoring",
      "GitHub Actions: automated deployment",
      "GitHub Pages: hosting",
    ],
  },
  {
    label: "Sources",
    values: [
      "Valve Steamworks Web API Reference",
      "Valve Developer Community wiki",
      "Responses captured in Postman",
    ],
  },
];

const endpointGroups =
  specifications.find((s) => s.label === "Endpoints documented")
    ?.groups ?? [];

export const endpointCount = endpointGroups.reduce(
  (total, group) => total + group.values.length,
  0,
);

export const interfaceCount = endpointGroups.length;

export const workflowIntro =
  "Each endpoint was documented from real API behavior, following one workflow from research through deployment.";

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Review existing documentation",
    detail:
      "Reviewed Valve's Steamworks Web API reference and the Valve Developer Community wiki to see what each endpoint documents and what it leaves out.",
  },
  {
    title: "Test each endpoint",
    detail:
      "Registered a Steam Web API key and built a Postman collection to call each endpoint, capturing real responses in JSON, XML, and VDF to confirm field names, data types, and values.",
  },
  {
    title: "Record differences and privacy behavior",
    detail:
      "Noted fields and behaviors the existing documentation does not describe, including responses that vary with a user's Steam Community privacy settings.",
  },
  {
    title: "Structure the site",
    detail:
      "Organized endpoints by interface group in MkDocs Material, with a consistent page template covering arguments, returns, example requests, and response examples.",
  },
  {
    title: "Write the pages",
    detail:
      "Authored each endpoint page in Markdown in Visual Studio Code, applying consistent terminology and parameter formatting, with admonitions for warnings, notes, and undocumented observations.",
  },
  {
    title: "Deploy",
    detail:
      "Published to GitHub Pages through a GitHub Actions workflow that builds and deploys on every push to the main branch.",
  },
];

import overviewImage from "./images/api-steam-overview.png";

export const overview: OverviewData = {
  image: {
    src: overviewImage,
    alt: "Home page of the documentation site, with the navigation menu and an introduction to the Steam Web API.",
    caption: "Home page of the documentation site",
  },
  paragraphs: [
    "I chose the Steam Web API as a real, widely used API to practice writing reference documentation. Valve publishes official references, but I wanted to test each endpoint myself and document what the responses actually look like, including formats, field types, and how a user's privacy settings change the output.",
    `The result is an unofficial reference for ${endpointCount} endpoints, written from captured responses and built with MkDocs Material and deployed with GitHub Actions in a docs-as-code workflow. This is an independent project and is not affiliated with Valve.`,
  ],
  stats: [
    { label: "Endpoints", value: String(endpointCount) },
    { label: "Interfaces", value: String(interfaceCount) },
    { label: "Response formats", value: "3" },
  ],
  links: [
    {
      href: "https://hwittle.github.io/steam-web-api-docs/",
      label: "View live documentation",
    },
  ],
};