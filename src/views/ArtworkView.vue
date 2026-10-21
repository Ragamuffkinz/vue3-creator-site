<template>
  <div class="artwork">
    <!-- Header -->
    <section class="page-header container">
      <p class="label">Gallery</p>
      <h1>Artwork</h1>
      <!-- Gallery nav pills -->
      <nav class="gallery-nav" aria-label="Gallery sections">
        <a
          v-for="gallery in galleries"
          :key="gallery.id"
          :href="`#gallery-${gallery.id}`"
          class="gallery-nav__pill"
        >
          {{ gallery.title }}
        </a>
      </nav>
    </section>

    <!-- Each gallery section -->
    <section
      v-for="gallery in galleries"
      :id="`gallery-${gallery.id}`"
      :key="gallery.id"
      class="gallery-section"
    >
      <div class="container">
        <div class="gallery-section__header">
          <div class="gallery-section__meta">
            <p class="label">Series</p>
            <h2>{{ gallery.title }}</h2>
            <p v-if="gallery.description" class="gallery-section__desc">
              {{ gallery.description }}
            </p>
          </div>
          <span class="gallery-section__count">
            {{ gallery.items.length }} piece{{ gallery.items.length !== 1 ? 's' : '' }}
          </span>
        </div>

        <div class="gallery-grid">
          <button
            v-for="item in gallery.items"
            :key="item.id"
            class="gallery-item"
            @click="openLightbox(item)"
            :aria-label="`View ${item.title}`"
          >
            <div class="gallery-item__img-wrap">
              <img :src="item.imageUrl" :alt="item.title" loading="lazy" />
              <div class="gallery-item__overlay">
                <span class="gallery-item__overlay-icon">⊕</span>
              </div>
            </div>
            <div class="gallery-item__info">
              <span class="gallery-item__title">{{ item.title }}</span>
              <span v-if="item.medium" class="gallery-item__medium label">{{ item.medium }}</span>
            </div>
          </button>
        </div>
      </div>

      <div class="gallery-section__rule" />
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxItem" class="lightbox" @click.self="closeLightbox" role="dialog" aria-modal="true">
          <button class="lightbox__close" @click="closeLightbox" aria-label="Close">✕</button>
          <div class="lightbox__content">
            <img :src="lightboxItem.imageUrl" :alt="lightboxItem.title" class="lightbox__img" />
            <div class="lightbox__info">
              <h3>{{ lightboxItem.title }}</h3>
              <p v-if="lightboxItem.description" class="lightbox__desc">{{ lightboxItem.description }}</p>
              <div class="lightbox__meta">
                <span v-if="lightboxItem.medium" class="label">{{ lightboxItem.medium }}</span>
                <span v-if="lightboxItem.year" class="label">{{ lightboxItem.year }}</span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { artworkGalleries } from '@/data/artwork'
import type { ArtworkItem } from '@/types'

const galleries = artworkGalleries
const lightboxItem = ref<ArtworkItem | null>(null)

function openLightbox(item: ArtworkItem) {
  lightboxItem.value = item
  document.body.style.overflow = 'hidden'
}
function closeLightbox() {
  lightboxItem.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
/* ── Page Header ───────────────────────────────────────────────── */
.page-header {
  padding-top: 5rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid var(--border-faint);
}
.page-header .label { margin-bottom: 1rem; }
.page-header h1 { color: var(--text-primary); }

/* Gallery nav pills */
.gallery-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
}
.gallery-nav__pill {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.45rem 1rem;
  border: 1px solid var(--border-accent);
  color: var(--text-muted);
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s ease;
}
.gallery-nav__pill:hover {
  border-color: var(--rust);
  color: var(--rust-light);
}

/* ── Gallery Section ───────────────────────────────────────────── */
.gallery-section { padding-top: 5rem; }
.gallery-section__rule {
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: clamp(1.5rem, 5vw, 5rem);
  margin-top: 5rem;
  height: 1px;
  background: linear-gradient(90deg, rgba(192,81,43,0.3) 0%, transparent 80%);
}
.gallery-section:last-child .gallery-section__rule { display: none; }

.gallery-section__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}
.gallery-section__meta .label { margin-bottom: 0.5rem; }
.gallery-section__meta h2 { color: var(--text-primary); }
.gallery-section__desc {
  color: var(--text-body);
  font-size: 0.95rem;
  line-height: 1.65;
  margin-top: 0.75rem;
  max-width: 50ch;
}
.gallery-section__count {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  padding-bottom: 0.5rem;
  white-space: nowrap;
}

/* Gallery Grid — masonry-like with auto rows */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1px;
  background: var(--border-faint);
}
.gallery-item {
  background: var(--bg);
  cursor: pointer;
  border: none;
  padding: 0;
  text-align: left;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
}
.gallery-item__img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
}
.gallery-item__img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out-expo);
  display: block;
}
.gallery-item:hover .gallery-item__img-wrap img {
  transform: scale(1.05);
}
.gallery-item__overlay {
  position: absolute;
  inset: 0;
  background: var(--overlay-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s ease;
}
.gallery-item:hover .gallery-item__overlay { opacity: 1; }
.gallery-item__overlay-icon {
  font-size: 2rem;
  color: var(--text-primary);
}
.gallery-item__info {
  padding: 0.85rem 1rem 1rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.gallery-item__title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--text-primary);
}
.gallery-item__medium { color: var(--text-muted) !important; }

/* ── Lightbox ───────────────────────────────────────────────────── */
.lightbox {
  position: fixed;
  inset: 0;
  background: var(--modal-bg);
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(8px);
}
.lightbox__close {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: 1px solid var(--border-mid);
  color: var(--text-primary);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease;
  z-index: 501;
}
.lightbox__close:hover { border-color: var(--rust-light); }

.lightbox__content {
  display: flex;
  gap: 3rem;
  align-items: center;
  max-width: 1000px;
  width: 100%;
}
.lightbox__img {
  max-height: 80vh;
  max-width: 60%;
  object-fit: contain;
  display: block;
}
.lightbox__info { flex: 1; }
.lightbox__info h3 {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}
.lightbox__desc {
  color: var(--text-body);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.lightbox__meta { display: flex; gap: 1rem; }

/* Lightbox transition */
.lightbox-enter-active,
.lightbox-leave-active { transition: opacity 0.25s ease; }
.lightbox-enter-from,
.lightbox-leave-to { opacity: 0; }

/* ── Responsive ─────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .lightbox__content { flex-direction: column; }
  .lightbox__img { max-width: 100%; max-height: 50vh; }
}
</style>
