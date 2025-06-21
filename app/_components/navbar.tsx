import { IconHome, IconBriefcase, IconCode, IconSchool, IconAddressBook, IconTools } from "@tabler/icons-react";

export const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#home",
  },
  {
    title: "Skills",
    icon: (
      <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#skills",
  },
  {
    title: "Experience",
    icon: (
      <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#experience",
  },
  {
    title: "Projects",
    icon: (
      <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Education",
    icon: (
      <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#education",
  },
  {
    title: "Contact",
    icon: (
      <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#contact",
  }
];