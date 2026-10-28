import type { ButtonProps } from "@nuxt/ui";
import type { HeroInfo } from "~/types/contentTypes";

export const heroImage =
    "https://unsplash.com/photos/6fx4MkEMPto/download?force=true&w=800";

export const heroInfo: HeroInfo = {
    headline: "Artist · Designs · Products",
    title: "Creations that live in your hands",
    description:
        "Illustrations, enamel pins, prints, and limited-run goods - designed, produced, and shipped with care from first sketch to your door.",
};

export const HeroLinks = ref<ButtonProps[]>([

    {

        label: "BlueSky",
        to: "https://bsky.app/profile/ragamuffkinz.bsky.social",
        icon: "simple-icons:bluesky",
        class:
            "bg-[#0f73ff] hover:bg-[#0f73ff] text-white rounded-full px-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    },
    {
        label: "E-Mail",
        to: "mailto:ragamuffkinz@gmail.com",
        icon: "lucide:mail",
        class:
            "bg-[#e64134] hover:bg-[#e64134] text-white rounded-full px-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    },
    {
        label: "Instagram",
        to: "https://www.instagram.com/ragamuffkinz?rpxt=ajEwNmF1bmx1OWdu&utm_source=qr",
        icon: "simple-icons:instagram",
        class:
            "bg-[#E1306C] hover:bg-[#E1306C0] text-white rounded-full px-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    },

    {
        label: "Ko-fi",
        to: "https://ko-fi.com/ragamuffkinz",
        icon: "simple-icons:kofi",
        class:
            "bg-[#E5AD76] hover:bg-[#E5AD76] text-white rounded-full px-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    },
]);



