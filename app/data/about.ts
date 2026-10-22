import type { TimelineItem } from "@nuxt/ui";
import type { HeroInfo } from "~/types/contentTypes";

export const artistPortrait = "/about/jessica_profile.jpg";

export const heroInfo: HeroInfo = {
    headline: "About",
    title: "Jessica Lovett",
    description: "Business Owner · Product Designer · Creative Director",
};

export const artistBio = `
I am an independent owner, designer, and creator with over a decade of
end-to-end experience bringing creative products to market. Since the early 2010s,
I've independently managed every stage of the product lifecycle: from initial
concept and illustration to manufacturing, fulfillment, customer support, and
community growth.

My work spans original characters, fan-inspired artwork, collectible merchandise,
poseable dolls, enamel pins, prints, stickers, packaging, and other limited-run
products. Using a creative workflow with tools like Procreate and
Photoshop, I create production-ready artwork, branding, and promotional assets
designed for both digital campaigns and physical manufacturing.

In addition to the creative process, I oversee the operational and business side
of every release. This includes manufacturer sourcing, overseas factory communication,
production oversight, proof approvals, pricing negotiation, budgeting, logistics,
inventory planning, crowdfunding campaign management, fulfillment coordination,
and post-sale customer support. I've successfully launched and fulfilled multiple
profitable campaigns, shipping thousands of products internationally while building
loyal online communities around each release.

I also manage my own social media presence and community spaces across platforms
including Discord, Bluesky, Instagram, and TikTok, maintaining direct engagement
with customers and supporters throughout each project's lifecycle.

If you're looking for a collaborator who understands both the creative and operational
realities of bringing independent products into the world, let's talk.
`.trim();

export const skillGroups = [
    {
        heading: "Creative",
        skills: [
            {
                label: "Digital Illustration & Design",
                details: "Procreate, Photoshop",
            },
            {
                label: "Character Art & Visual Development",
                details:
                    "Original characters, Digimon-inspired, Pokemon-inspired, collectible-focused designs",
            },
            {
                label: "Product Design & Merch Development",
                details:
                    "Poseable dolls, enamel pins, prints, stickers, packaging, production-ready assets",
            },
            {
                label: "End-to-End Creative Direction",
                details:
                    "Concept development, branding, campaign visuals, promotional content",
            },
        ],
    },
    {
        heading: "Production",
        skills: [
            {
                label: "Manufacturer Sourcing & Vendor Relations",
                details:
                    "Coordinating with overseas and domestic production partners",
            },
            {
                label: "Production Management",
                details:
                    "Factory communication, proof approvals, revisions, production timelines",
            },
            {
                label: "Contract Negotiation & Cost Management",
                details:
                    "Pricing negotiations, budgeting, shipping coordination, margin planning",
            },
            {
                label: "Quality Control & Proofing",
                details:
                    "Pre-production samples, product consistency, packaging verification",
            },
            {
                label: "Fulfillment & Logistics",
                details:
                    "Domestic and international shipping coordination for crowdfunding campaigns",
            },
            {
                label: "Inventory & Order Management",
                details:
                    "Stock tracking, order organization, campaign fulfillment planning",
            },
        ],
    },
    {
        heading: "Business",
        skills: [
            {
                label: "Crowdfunding Campaign Management",
                details:
                    "Multiple successful Kickstarter campaigns from concept to fulfillment",
            },
            {
                label: "Independent Business Operations",
                details:
                    "Managing product lifecycles from initial concept through profitable release",
            },
            {
                label: "Financial Planning & Budget Management",
                details:
                    "Production budgeting, campaign forecasting, expense tracking",
            },
            {
                label: "E-commerce Operations",
                details:
                    "Online storefront management, order processing, customer communications",
            },
            {
                label: "Customer Service & Community Support",
                details:
                    "Pre-order updates, post-sale support, campaign communication",
            },
            {
                label: "Social Media & Community Building",
                details: "Discord, Bluesky, Instagram, TikTok",
            },
            {
                label: "Brand & Audience Development",
                details:
                    "Building and maintaining an engaged community around original and fan-inspired products",
            },
        ],
    },
];

// Oldest first, so the last item is the current one
export const timelineItems = ref<TimelineItem[]>([
    {
        date: "2017 - 2019",
        title: "AA, Illustration",
        description:
            "Your University. Focused on character design, sequential art, and concept development. Senior thesis explored narrative illustration in merchandise design.",
        icon: "lucide:graduation-cap",
    },
    {
        date: "2019 - 2020",
        title: "Production Assistant",
        description:
            "Creative Goods Studio. Assisted in production coordination, vendor communication, and fulfillment operations for a boutique merchandise studio.",
        icon: "lucide:package",
    },
    {
        date: "2020 - 2022",
        title: "Freelance Illustrator",
        description:
            "Took on commission and licensing work for indie game studios, small brands, and individual clients. Developed strong project management and client communication practices.",
        icon: "lucide:pen-tool",
    },
    {
        date: "2022 - Present",
        title: "Independent Artist & Product Creator",
        description:
            "Launched and managed multiple successful product lines including enamel pins, art prints, and sticker sheets. Handled all stages from design through delivery.",
        icon: "lucide:store",
    },
]);

export const contactInfo = {
    socials: [
        {
            platform: "Bluesky",
            label: "@yourhandle",
            url: "https://x.com/yourhandle",
            icon: "simple-icons:bluesky",
        },
        {
            platform: "E-Mail",
            label: "ragamuffkinz@gmail.com",
            url: "mailto:ragamuffkinz@gmail.com",
            icon: "lucide:mail"
        },
        {
            platform: "Etsy",
            label: "yourshop",
            url: "https://etsy.com/shop/yourshop",
            icon: "simple-icons:etsy",
        },
        {
            platform: "Instagram",
            label: "@yourhandle",
            url: "https://instagram.com/yourhandle",
            icon: "simple-icons:instagram",
        },

        {
            platform: "Ko-fi",
            label: "ko-fi.com/yourname",
            url: "https://ko-fi.com/yourname",
            icon: "simple-icons:kofi",
        },
        {
            platform: "TikTok",
            label: "@yourhandle",
            url: "https://tiktok.com/@yourhandle",
            icon: "simple-icons:tiktok",
        },
    ],
};
