export interface HeroInfo {
    headline: string;
    title: string;
    description: string;
}

export interface Badge {
    text: string;
    img: string;
    url: string;
}

export type ProductCategory = "pin" | "print" | "sticker" | "bundle" | "other";

export interface Product {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    category: ProductCategory;
    price?: string;
    buyUrl?: string;
    soldOut?: boolean;
    tags?: string[];
}