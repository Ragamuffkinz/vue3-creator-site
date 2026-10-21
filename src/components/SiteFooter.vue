<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__left">
        <span class="nav__logo-mark">✦</span>
        <span class="footer__name">{{ artistName }}</span>
        <p class="footer__copy">© {{ year }} {{ artistName }}. All rights reserved.</p>
      </div>
      <nav class="footer__nav" aria-label="Footer navigation">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="footer__link">
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
    <div class="footer__rule" />
  </footer>
</template>

<script setup lang="ts">
import { artistName } from '@/data/about'
const year = new Date().getFullYear()
const links = [
  { to: '/about', label: 'About' },
  { to: '/artwork', label: 'Artwork' },
  { to: '/products', label: 'Products' },
]
</script>

<style scoped>
.footer {
  margin-top: 8rem;
  padding-block: 3rem 2rem;
  border-top: 1px solid var(--border-faint);
}
.footer__rule {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: clamp(1.5rem, 5vw, 5rem);
  margin-top: 2rem;
}
.footer__inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}
.footer__left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.nav__logo-mark {
  color: var(--rust);
  font-size: 1.5rem;
}
.footer__name {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
}
.footer__copy {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  max-width: none;
}
.footer__nav {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
}
.footer__link {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer__link:hover { color: var(--rust-light); }
</style>
