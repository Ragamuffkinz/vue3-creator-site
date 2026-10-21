<template>
  <nav class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav__inner container">
      <RouterLink to="/" class="nav__logo" aria-label="Home">
        <span class="nav__logo-mark">✦</span>
        <span class="nav__logo-name">{{ artistName }}</span>
      </RouterLink>

      <ul class="nav__links">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink :to="link.to" class="nav__link">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <div class="nav__right">
        <ThemeToggle />
        <button
          class="nav__hamburger"
          :aria-expanded="mobileOpen"
          aria-label="Toggle navigation"
          @click="mobileOpen = !mobileOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <div v-if="mobileOpen" class="nav__drawer" @click.self="mobileOpen = false">
        <ul class="nav__drawer-links">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="nav__drawer-link"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { artistName } from '@/data/about'
import ThemeToggle from '@/components/ThemeToggle.vue'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/artwork', label: 'Artwork' },
  { to: '/products', label: 'Products' },
]

const isScrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  z-index: 100;
  transition: background 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-color: var(--border-faint);
}

.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.nav__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.nav__logo-mark {
  color: var(--rust);
  font-size: 1.2rem;
  line-height: 1;
}
.nav__logo-name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}

/* Desktop links */
.nav__links {
  display: flex;
  list-style: none;
  gap: 0.25rem;
}
.nav__link {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 0.5rem 1rem;
  border-radius: 2px;
  transition: color 0.2s ease;
  text-decoration: none;
}
.nav__link:hover,
.nav__link.router-link-active {
  color: var(--text-primary);
}
.nav__link.router-link-active {
  color: var(--rust-light);
}

/* Right cluster */
.nav__right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Hamburger */
.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}
.nav__hamburger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--text-primary);
  transition: transform 0.2s ease;
}

/* Mobile drawer */
.nav__drawer {
  position: fixed;
  inset: var(--nav-h) 0 0 0;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav__drawer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
}
.nav__drawer-link {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s ease;
  display: block;
  padding: 0.5rem 2rem;
}
.nav__drawer-link:hover { color: var(--rust-light); }

/* Drawer transition */
.drawer-enter-active,
.drawer-leave-active { transition: opacity 0.25s ease; }
.drawer-enter-from,
.drawer-leave-to { opacity: 0; }

@media (max-width: 640px) {
  .nav__links { display: none; }
  .nav__hamburger { display: flex; }
}
</style>
