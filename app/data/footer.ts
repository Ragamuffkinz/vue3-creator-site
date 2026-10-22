import type { NavigationMenuItem } from "@nuxt/ui";

export const footerLinks: NavigationMenuItem[] = [
    {
        label: "Source",
        to: "https://codeberg.org/Monz/nuxt-monz-site",
        target: "_blank",
    },
    {
        label: "Nuxt",
        to: "https://nuxt.com/",
        target: "_blank",
    },
    {
        label: "Nuxt UI",
        to: "https://ui.nuxt.com/",
        target: "_blank",
    },
    {
        label: "Terms of Use",
        to: "/terms",
        target: "_self",
    },
];

export const footerButtons = [
    {
        icon: "simple-icons:bluesky",
        to: "https://bsky.app/profile/monz.us",
        label: "Bluesky",
    },
    {
        icon: "simple-icons:codeberg",
        to: "https://codeberg.org/Monz?tab=overview",
        label: "Codeberg",
    },
    {
        icon: "lucide:mail",
        to: "mailto:website@monz.us",
        label: "E-Mail",
    },
    {
        icon: "simple-icons:furaffinity",
        to: "https://www.furaffinity.net/user/slimymonz",
        label: "FurAffinity",
    },
    {
        icon: "simple-icons:mastodon",
        to: "https://yiff.life/@slimymonz",
        label: "Mastodon",
    },
];
