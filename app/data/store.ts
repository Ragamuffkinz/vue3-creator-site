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
];

const SHOP_URL = "https://www.ebay.com";
export const products: Product[] = [
    // Hard Enamel Pins
    {
        id: "pin-001",
        name: "Renamon: Diamond Storm",
        description:
            'This listing is a preorder for the newest series of pins, the Signature Attack pins! These pins will combine hard enamel with glass and/or epoxy to make the attack pop! ',
        imageUrl: "/store/renamon_diamond_storm.png",
        category: "pin",
        price: "$25",
        buyUrl: "https://ko-fi.com/s/84076db025",
        tags: ["digimon", "enamel pin"],
    },
    {
        id: "pin-002",
        name: "Chibi-Mon V1 Agumon",
        description: 'This listing is for a single Agumon Chibi-Mon enamel pin with the spring tail. Matching evolution sticker sheet included!',
        imageUrl: "/store/chibimon_agumon_pin.png",
        category: "pin",
        price: "$18",
        buyUrl: "https://ko-fi.com/s/495886ce49",
        tags: ["digimon", "enamel pin"],
    },
    {
        id: "pin-003",
        name: "Chibi-Mon V1 Guilmon",
        description:
            'This listing is for a single Guilmon Chibi-Mon enamel pin with the spring tail.',
        imageUrl: "/store/chibimon_guilmon_pin.jpeg",
        category: "pin",
        price: "$18",
        buyUrl: "https://ko-fi.com/s/a726efa4f5",
        tags: ["digimon", "enamel pin"],
    },
    {
        id: "pin-004",
        name: "Chibi-Mon V1 Baby Pin + Digivice Pin",
        description: 'This listing is for a pair of pins: Adventure 01 Chibi-Mon Baby pin with a Chibi-Vice (Digivice) mini pin.',
        imageUrl: "/store/chibimon_baby_pin.png",
        category: "bundle",
        price: "$20",
        buyUrl: "https://ko-fi.com/s/eb62dc3a9e",
        tags: ["bundle", "digimon", "enamel pin"],
    },
    // Prints
    {
        id: "print-001",
        name: "Adventure 01 Evolution",
        description:
            'This listing is for one "Evolution" chibi-mon stickersheets. Pick one from the selection: Agumon, Gabumon, Palmon, Tentomon, Biyomon, or Gomamon.',
        imageUrl: "/store/adventure_evolution_stickers.png",
        category: "sticker",
        price: "$5",
        buyUrl: "https://ko-fi.com/s/8d1a0bfc96",
        tags: ["digimon", "print", "sticker"],
    },
];