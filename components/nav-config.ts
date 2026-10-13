import { SERVICES_DATA, type ServiceIconName } from "@/content/services";

export type MegaMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: ServiceIconName | "ArrowUpRight" | (string & {});
};

export type NavItem = {
  label: string;
  href: string;
  megaMenu?: MegaMenuItem[];
  variant?: "zoho";
};

export const MEGA_MENU_ITEMS: MegaMenuItem[] = SERVICES_DATA.map((service) => ({
  title: service.heroCardTitle,
  description: service.heroCardDescription,
  href: service.href,
  icon: service.iconName,
}));

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Zoho",
    href: "/zoho",
    variant: "zoho",
  },
  {
    label: "What we do",
    href: "/what-we-do",
    megaMenu: MEGA_MENU_ITEMS,
  },
  {
    label: "Industries",
    href: "/#work",
  },
  {
    label: "Our work",
    href: "/#work",
  },
  {
    label: "AI & Automation",
    href: "/#services",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const SHOW_ANNOUNCEMENT_BAR = true;

export const ANNOUNCEMENT_TEXT =
  "Now booking Q4 automation projects. Reserve your slot";

export const ANNOUNCEMENT_HREF = "/#contact";
