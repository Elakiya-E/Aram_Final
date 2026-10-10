export type MegaMenuItem = {
  title: string;
  description: string;
  href: string;
  icon:
    | "Bot"
    | "Cloud"
    | "Database"
    | "Workflow"
    | "Blocks"
    | "ArrowUpRight"
    | (string & {});
};

export type NavItem = {
  label: string;
  href: string;
  megaMenu?: MegaMenuItem[];
  variant?: "zoho";
};

export const MEGA_MENU_ITEMS: MegaMenuItem[] = [
  {
    title: "Automation & Workflows",
    description:
      "Well-designed flows that handle the repetitive work, so your team doesn't have to.",
    href: "#services",
    icon: "Workflow",
  },
  {
    title: "AI & Intelligent Agents",
    description:
      "Useful intelligence woven into everyday work, with people firmly in the loop.",
    href: "#services",
    icon: "Bot",
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Bring your numbers together and surface what actually deserves your attention.",
    href: "#services",
    icon: "Database",
  },
  {
    title: "Zoho & CRM Solutions",
    description:
      "A connected Zoho ecosystem, chosen and shaped around how your business really works.",
    href: "#zoho",
    icon: "Blocks",
  },
  {
    title: "Cloud & Integrations",
    description:
      "Connect the tools you already use into one calm, coordinated system.",
    href: "#services",
    icon: "Cloud",
  },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Zoho",
    href: "#zoho",
    variant: "zoho",
  },
  {
    label: "What we do",
    href: "#services",
    megaMenu: MEGA_MENU_ITEMS,
  },
  {
    label: "Industries",
    href: "#work",
  },
  {
    label: "Our work",
    href: "#work",
  },
  {
    label: "AI & Automation",
    href: "#services",
  },
  {
    label: "About",
    href: "#contact",
  },
];

export const SHOW_ANNOUNCEMENT_BAR = true;

export const ANNOUNCEMENT_TEXT =
  "Now booking Q4 automation projects. Reserve your slot";

export const ANNOUNCEMENT_HREF = "#contact";
