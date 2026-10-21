<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__content">
          <p class="label hero__eyebrow">Artist · Designs · Products </p>
          <h1 class="hero__title">
            Creations that live
            <em>in your hands</em>
          </h1>
          <p class="hero__sub">
            Illustrations, enamel pins, prints, and limited-run goods — designed,
            produced, and shipped with care from first sketch to your door.
          </p>
          <div class="hero__cta">
            <RouterLink to="/about" class="btn btn--ghost">About Me</RouterLink>
            <RouterLink to="/artwork" class="btn btn--ghost">View Artwork</RouterLink>
            <RouterLink to="/products" class="btn btn--ghost">Shop Products</RouterLink>
          </div>
        </div>
        <div class="hero__visual">
          <div class="hero__frame">
            <img
              src="https://placehold.co/640x800/221e18/c0512b?text=Featured+Work"
              alt="Featured artwork"
              class="hero__img"
            />
            <div class="hero__frame-accent" />
          </div>
        </div>
      </div>
    </section>

    <!-- Quick links strip -->
    <section class="strip container">
      <RouterLink to="/about" class="strip__item">
        <span class="label">01</span>
        <span class="strip__item-title">About &amp; Resume</span>
        <span class="strip__arrow">→</span>
      </RouterLink>
      <RouterLink to="/artwork" class="strip__item">
        <span class="label">02</span>
        <span class="strip__item-title">Gallery</span>
        <span class="strip__arrow">→</span>
      </RouterLink>
      <RouterLink to="/products" class="strip__item">
        <span class="label">03</span>
        <span class="strip__item-title">Products &amp; Shop</span>
        <span class="strip__arrow">→</span>
      </RouterLink>
    </section>

    <!-- Featured Works preview -->
    <section class="featured container">
      <div class="featured__header">
        <p class="label">Selected Works</p>
        <h2>Recent Pieces</h2>
        <RouterLink to="/artwork" class="featured__see-all">See all galleries →</RouterLink>
      </div>
      <div class="featured__grid">
        <div
          v-for="(item, i) in featuredItems"
          :key="item.id"
          class="featured__card"
          :class="`featured__card--${i}`"
        >
          <div class="featured__card-img-wrap">
            <img :src="item.imageUrl" :alt="item.title" loading="lazy" />
          </div>
          <div class="featured__card-info">
            <p class="label">{{ item.gallery }}</p>
            <h4>{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { artworkGalleries } from '@/data/artwork'

// Pull a handful of pieces for the homepage preview
const featuredItems = [
  { id: 'f1', gallery: 'Digimon', title: 'Agumon Study', imageUrl: 'https://placehold.co/600x600/1a1612/c0512b?text=Agumon+Study' },
  { id: 'f2', gallery: 'Pokémon', title: 'Gengar Neon', imageUrl: 'https://placehold.co/600x700/0e0c0a/d96b42?text=Gengar+Neon' },
  { id: 'f3', gallery: 'Originals', title: 'Threshold', imageUrl: 'https://placehold.co/700x600/221e18/c8922a?text=Threshold' },
  { id: 'f4', gallery: 'Commissions', title: 'Character Portrait', imageUrl: 'https://placehold.co/600x600/2a2520/d96b42?text=Commission' },
]

// suppress unused warning
void artworkGalleries
</script>

<style scoped>
/* ── Hero ──────────────────────────────────────────────────────── */
.hero {
  min-height: calc(100dvh - var(--nav-h));
  display: flex;
  align-items: center;
  padding-block: 5rem;
}
.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.hero__eyebrow { margin-bottom: 1.25rem; }
.hero__title {
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}
.hero__title em {
  font-style: italic;
  color: var(--rust-light);
  display: block;
}
.hero__sub {
  color: var(--text-body);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

/* CTA Buttons */
.hero__cta { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.85rem 2rem;
  border-radius: 2px;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
}
.btn--primary {
  background: var(--rust);
  color: var(--text-primary);
  border: 1px solid var(--rust);
}
.btn--primary:hover {
  background: var(--rust-light);
  border-color: var(--rust-light);
}
.btn--ghost {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-mid);
}
.btn--ghost:hover {
  border-color: var(--text-primary);
}

/* Hero visual */
.hero__visual { display: flex; justify-content: flex-end; }
.hero__frame {
  position: relative;
  display: inline-block;
}
.hero__img {
  width: 100%;
  max-width: 480px;
  object-fit: cover;
  display: block;
}
.hero__frame-accent {
  position: absolute;
  inset: -12px -12px 12px 12px;
  border: 1px solid var(--border-accent);
  z-index: -1;
  pointer-events: none;
}

/* ── Quick-links strip ─────────────────────────────────────────── */
.strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--border-faint);
  border-bottom: 1px solid var(--border-faint);
  margin-block: 5rem;
}
.strip__item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.75rem 0;
  text-decoration: none;
  color: var(--text-muted);
  border-right: 1px solid var(--border-faint);
  transition: color 0.2s ease;
  padding-inline: 2rem;
}
.strip__item:last-child { border-right: none; }
.strip__item:hover { color: var(--text-primary); }
.strip__item:hover .strip__arrow { transform: translateX(4px); color: var(--rust-light); }
.strip__item-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: inherit;
  flex: 1;
}
.strip__arrow {
  font-size: 1.2rem;
  transition: transform 0.2s ease, color 0.2s ease;
}

/* ── Featured grid ─────────────────────────────────────────────── */
.featured { padding-bottom: 5rem; }
.featured__header {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.featured__header h2 { flex: 1; }
.featured__see-all {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rust-light);
  text-decoration: none;
  padding-bottom: 0.75rem;
  transition: color 0.2s ease;
  white-space: nowrap;
}
.featured__see-all:hover { color: var(--text-primary); }

.featured__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--bg-grid-line);
}
.featured__card {
  background: var(--bg);
  overflow: hidden;
}
.featured__card--1 { grid-row: span 1; }
.featured__card-img-wrap {
  overflow: hidden;
  aspect-ratio: 1 / 1;
}
.featured__card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out-expo);
}
.featured__card:hover .featured__card-img-wrap img {
  transform: scale(1.04);
}
.featured__card-info {
  padding: 1rem 1.25rem 1.25rem;
}
.featured__card-info h4 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--text-primary);
  margin-top: 0.35rem;
}

/* ── Responsive ────────────────────────────────────────────────── */
@media (max-width: 960px) {
  .hero__inner { grid-template-columns: 1fr; }
  .hero__visual { display: none; }
  .featured__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .strip { grid-template-columns: 1fr; }
  .strip__item { border-right: none; border-bottom: 1px solid var(--border-faint); }
  .strip__item:last-child { border-bottom: none; }
  .featured__grid { grid-template-columns: 1fr 1fr; }
}
</style>
