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
        icon: "simple-icons:bandcamp",
        to: "https://bandcamp.com/slimymonz",
        label: "Bandcamp",
        class:
            "bg-[#007C9E] hover:bg-[#007C9E] text-white rounded-full px-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    },
    {
        icon: "simple-icons:bluesky",
        to: "https://bsky.app/profile/monz.us",
        label: "Bluesky",
        class:
            "bg-[#0f73ff] hover:bg-[#0f73ff] text-white rounded-full px-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    },
    {
        icon: "simple-icons:codeberg",
        to: "https://codeberg.org/Monz?tab=overview",
        label: "Codeberg",
        class:
            "bg-[#2185d0] hover:bg-[#2185d0] text-white rounded-full px-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    },
    {
        icon: "lucide:mail",
        to: "mailto:website@monz.us",
        label: "E-Mail",
        class:
            "bg-[#e64134] hover:bg-[#e64134] text-white rounded-full px-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    },
    {
        icon: "simple-icons:furaffinity",
        to: "https://www.furaffinity.net/user/slimymonz",
        label: "FurAffinity",
        class:
            "bg-[#faaf3a] hover:bg-[#faaf3a] text-ink-950 rounded-full px-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    },
    {
        icon: "simple-icons:mastodon",
        to: "https://yiff.life/@slimymonz",
        label: "Mastodon",
        class:
            "bg-[#6260fa] hover:bg-[#6260fa] text-white rounded-full px-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    },
]);



