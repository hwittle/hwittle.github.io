import type {
  NotificationItem,
  OverviewData,
  Principle,
} from "./types";

import WishlistImage from "./images/push-wishlist.png";
import SummerImage from "./images/push-summer-sale.png";
import TradeImage from "./images/push-trade-offer.png";
import GiftImage from "./images/push-gift-received.png";
import PlaytestImage from "./images/push-playtest.png";

export const notifications: NotificationItem[] = [
  {
    name: "Wishlist Sale Alert",
    image: {
      src: WishlistImage,
      alt: "Mock design of two iPhones with Steam Wishlist notification in collapsed and expanded forms.",
    },
    copy: [
      {
        label: "Title",
        text: "Your wishlist game is on sale!",
      },
      {
        label: "Body",
        text: "Final Fantasy VII Remake Intergrade is 35% off. Sale ends June 25.",
      },
      {
        label: "Expanded",
        text: "Game cover art visible",
        quoted: false,
      },
    ],
    rationale: [
      `"Your wishlist game" replaces specific titles to prevent long names from truncating in the notification field`,
      `Game title and discount lead the body copy, giving users what they need to decide at a glance`,
      `Specific date ("Sale ends June 25") replaces vague urgency ("ends soon"), respecting user autonomy over pressure`,
      `Expanded view shows cover art for instant recognition without opening the app`,
    ],
  },
  {
    name: "Steam Summer Sale Announcement",
    image: {
      src: SummerImage,
      alt: "Mock design of an iPhone with a Steam Summer Sale notification.",
    },
    copy: [
      { label: "Title", text: "Steam Summer Sale soon! ☀️" },
      {
        label: "Body",
        text: "From June 25 - July 9, thousands of games up to 90% off. Add games to your wishlist now so you're ready!",
      },
    ],
    rationale: [
      `Playful tone (☀️ emoji) reflects the Sale's cultural significance within the community and breaks from Steam's usual functional voice`,
      `"Soon" replaces "starts now" since the sale hasn't begun; the full date range gives users something concrete to plan around`,
      `No action button is included because this is a heads-up, not a prompt; adding one would create false urgency for a two-week event`,
    ],
  },
  {
    name: "Trade Offer",
    image: {
      src: TradeImage,
      alt: "Mock design of an iPhone with a Steam Trade Offer notification.",
    },
    copy: [
      { label: "Title", text: "You have a new trade offer!" },
      {
        label: "Body",
        text: "CloudStrife7 wants to trade items with you. Review your offer before it expires in 14 days.",
      },
    ],
    rationale: [
      `Specific username ("CloudStrife7") replaces generic terms since trading happens only between established friends, building trust and personal relevance`,
      `Includes 14-day expiry so users can prioritize which offers to review first`,
      `No expanded view: trade contents vary too much to represent meaningfully in a static mockup`,
    ],
  },
  {
    name: "Gift Received",
    image: {
      src: GiftImage,
      alt: "Mock design of an iPhone with a Steam Gift Received notification.",
    },
    copy: [
      { label: "Title", text: "You've received a Steam gift!" },
      {
        label: "Body",
        text: "CloudStrife7 sent you a gift. Head to your library to see what's waiting for you.",
      },
    ],
    rationale: [
      `Title leads with the emotional beat (a gift arrived) before the sender, mirroring how people naturally react to gifts`,
      `Same username convention as Trade Offer, consistent with Steam's friend-based social structure`,
      `Gift title is intentionally withheld because revealing it in the notification would spoil the moment of opening it in-app`,
    ],
  },
  {
    name: "Playtest Accepted",
    image: {
      src: PlaytestImage,
      alt: "Mock design of two iPhones with Steam Playtest Accepted notification in collapsed and expanded forms.",
    },
    copy: [
      { label: "Title", text: "Playtest access granted!" },
      {
        label: "Body",
        text: "Download The Lift Playtest from your library.",
      },
    ],
    rationale: [
      `Leads with outcome ("Playtest access granted") rather than process, confirming the result immediately`,
      `Game title follows Steam's own playtest naming convention, which matters since users may apply to multiple playtests at once`,
      `No urgency language is used since playtest access doesn't expire; "claim your spot" would be inaccurate and manipulative`,
    ],
  },
];

export const overview: OverviewData = {
  image: {
    src: WishlistImage,
    alt: "Mock design of two iPhones showing the Steam wishlist sale notification in collapsed and expanded forms.",
    caption:
      "Steam wishlist notification, collapsed and expanded",
  },
  imageClassName: "aspect-[4/3] w-full object-cover object-top",
  paragraphs: [
    "Completed for the Uxcel UX Writing certification: push notification copy for a mobile e-commerce platform. I chose Steam, a digital game storefront with a highly engaged user base, and based each notification on the app's actual functionality and platform constraints instead of generic e-commerce patterns.",
    "The set includes five notifications, each designed for iOS and Android, with an expanded state where extra context helps.",
  ],
  stats: [
    { label: "Notifications", value: "5" },
    { label: "Platforms", value: "2" },
  ],
  links: [
    {
      href: "https://www.figma.com/design/f5ycmpV7eFaxl0rZd8vRdJ/Push-Notification-for-Steam?node-id=1-3733&p=f",
      label: "View on Figma",
    },
  ],
};

export const principles: Principle[] = [
  {
    title: "Specific over vague",
    description:
      'Exact dates, usernames, and expiry windows replace phrases like "ends soon" or generic labels, so users can decide at a glance.',
    seenIn: "Notifications 1, 2, 3, 5",
  },
  {
    title: "No false urgency",
    description:
      "Pressure language and unneeded action buttons are left out when nothing is actually about to expire or start.",
    seenIn: "Notifications 1, 2, 5",
  },
  {
    title: "Withhold what the app does better",
    description:
      "The gift title stays out of the notification so opening it keeps its moment, and trades have no expanded view because their contents vary too much to show meaningfully.",
    seenIn: "Notifications 3, 4",
  },
];