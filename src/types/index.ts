// ─── Artwork ──────────────────────────────────────────────────
export interface ArtworkItem {
  id: string
  title: string
  description?: string
  imageUrl: string
  year?: number
  medium?: string
}

export interface ArtworkGallery {
  id: string
  title: string
  description?: string
  coverImageUrl?: string
  items: ArtworkItem[]
}

// ─── Products ─────────────────────────────────────────────────
export type ProductCategory = 'pin' | 'print' | 'sticker' | 'bundle' | 'other'

export interface Product {
  id: string
  name: string
  description: string
  imageUrl: string
  category: ProductCategory
  price?: string          // display string e.g. "$12.00"
  buyUrl?: string         // external shop link — if present, shows "Buy Here"
  soldOut?: boolean
  tags?: string[]
}

// ─── About / Resume ───────────────────────────────────────────
export interface Skill {
  label: string
  details?: string
}

export interface SkillGroup {
  heading: string
  skills: Skill[]
}

export interface TimelineEntry {
  period: string
  role: string
  org?: string
  description: string
}

export interface Social {
  platform: string
  label: string
  url: string
  icon: string   // SVG path or simple emoji fallback
}

export interface ContactInfo {
  email?: string
  socials: Social[]
}
