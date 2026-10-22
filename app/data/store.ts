import type { HeroInfo, Product, ProductCategory } from "~/types/contentTypes";

export const heroInfo: HeroInfo = {
    headline: "Shop",
    title: "Products",
    description:
        'Enamel pins, art prints, stickers, and limited-run bundles. Click any item to see details, or follow the "Buy Here" link to the shop.',
};

export const categories: { value: ProductCategory | "all"; label: string }[] = [
    { value: "all", label: "All" },
    { value: "pin", label: "Pins" },
    { value: "print", label: "Prints" },
    { value: "sticker", label: "Stickers" },
    { value: "bundle", label: "Bundles" },
    { value: "other", label: "Other" },
];

// NOTE: placeholder sunset photos from Unsplash (free to use under the Unsplash License).
// Swap in real product photos from /public/store/ when ready.
const sunset = (id: string) =>
    `https://unsplash.com/photos/${id}/download?force=true&w=600`;

const SHOP_URL = "https://www.ebay.com";
export const products: Product[] = [
    // Hard Enamel Pins
    {
        id: "pin-001",
        name: "Agumon Hard Enamel Pin",
        description:
            '1.5" hard enamel pin with rubber clutch backing. Black nickel plating.',
        imageUrl: sunset("NxEIAsIz8r8"),
        category: "pin",
        price: "$12.00",
        buyUrl: SHOP_URL,
        tags: ["digimon", "enamel pin"],
    },
    {
        id: "pin-002",
        name: "Gengar Neon Pin",
        description: '2" hard enamel pin, glow-in-the-dark fill. Gold plating.',
        imageUrl: sunset("rds4H3nIM8s"),
        category: "pin",
        price: "$14.00",
        buyUrl: SHOP_URL,
        tags: ["pokemon", "enamel pin", "glow"],
    },
    {
        id: "pin-003",
        name: "Moth Study Pin",
        description:
            '1.75" hard enamel pin. Rose gold plating, two rubber clutch backs.',
        imageUrl: sunset("sN1cOV7wfCM"),
        category: "pin",
        price: "$13.00",
        soldOut: true,
        tags: ["original", "enamel pin"],
    },
    {
        id: "pin-004",
        name: "Eevee Silhouette Pin",
        description: '1.5" soft enamel pin with epoxy coat. Silver plating.',
        imageUrl: sunset("ltqoTUOwg58"),
        category: "pin",
        price: "$11.00",
        buyUrl: SHOP_URL,
        tags: ["pokemon", "enamel pin"],
    },
    // Prints
    {
        id: "print-001",
        name: "Hollow Cartography — Art Print",
        description:
            '11x14" giclée print on 100lb matte paper. Signed and numbered edition of 50.',
        imageUrl: sunset("JfQkGucZCrg"),
        category: "print",
        price: "$28.00",
        buyUrl: SHOP_URL,
        tags: ["original", "print", "limited edition"],
    },
    {
        id: "print-002",
        name: "Omnimon Rising — Art Print",
        description: '8x10" giclée print on matte paper. Open edition.',
        imageUrl: sunset("_fUTDbq1vqo"),
        category: "print",
        price: "$18.00",
        buyUrl: SHOP_URL,
        tags: ["digimon", "print"],
    },
    // Stickers
    {
        id: "sticker-001",
        name: "Digimon Sticker Sheet",
        description:
            "Die-cut vinyl sticker sheet featuring 8 Digimon characters. Weather resistant.",
        imageUrl: sunset("6fx4MkEMPto"),
        category: "sticker",
        price: "$8.00",
        buyUrl: SHOP_URL,
        tags: ["digimon", "sticker"],
    },
    {
        id: "sticker-002",
        name: "Moth Study — Holographic Sticker",
        description: '3" holographic die-cut vinyl sticker.',
        imageUrl: sunset("NxEIAsIz8r8"),
        category: "sticker",
        price: "$5.00",
        buyUrl: SHOP_URL,
        tags: ["original", "sticker", "holographic"],
    },
    // Bundles
    {
        id: "bundle-001",
        name: "Digimon Collection Bundle",
        description:
            "Agumon Pin + Digimon Sticker Sheet + Omnimon Print. Packaged in branded kraft box.",
        imageUrl: sunset("rds4H3nIM8s"),
        category: "bundle",
        price: "$34.00",
        buyUrl: SHOP_URL,
        tags: ["digimon", "bundle"],
    },
];