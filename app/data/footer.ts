import type { NavigationMenuItem } from "@nuxt/ui";

export const footerLinks: NavigationMenuItem[] = [
    {
        label: "Source",
        to: "https://github.com/Ragamuffkinz/vue3-creator-site",
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

        label: "BlueSky",
        to: "https://bsky.app/profile/ragamuffkinz.bsky.social",
        icon: "simple-icons:bluesky",
        
    },
    {
        label: "E-Mail",
        to: "mailto:ragamuffkinz@gmail.com",
        icon: "lucide:mail",
        
    },
    {
        label: "Instagram",
        to: "https://www.instagram.com/ragamuffkinz?rpxt=ajEwNmF1bmx1OWdu&utm_source=qr",
        icon: "simple-icons:instagram",
       
    },

    {
        label: "Ko-fi",
        to: "https://ko-fi.com/ragamuffkinz",
        icon: "simple-icons:kofi",
    },
];
