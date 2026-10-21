<template>
  <button
    class="theme-toggle"
    :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
    :title="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
    @click="toggle"
  >
    <Transition name="icon" mode="out-in">
      <span v-if="theme === 'dark'" key="sun" class="theme-toggle__icon">
        <!-- Sun -->
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
          <circle cx="12" cy="12" r="4.5"/>
          <line x1="12" y1="2"   x2="12" y2="5"/>
          <line x1="12" y1="19"  x2="12" y2="22"/>
          <line x1="2"  y1="12"  x2="5"  y2="12"/>
          <line x1="19" y1="12"  x2="22" y2="12"/>
          <line x1="4.22" y1="4.22"  x2="6.34" y2="6.34"/>
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
          <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"/>
        </svg>
      </span>
      <span v-else key="moon" class="theme-toggle__icon">
        <!-- Moon -->
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
        </svg>
      </span>
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
const { theme, toggle } = useTheme()
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: none;
  border: 1px solid var(--border-accent);
  border-radius: 50%;
  cursor: pointer;
  color: var(--text-muted);
  transition: color 0.2s ease, border-color 0.2s ease;
  flex-shrink: 0;
}
.theme-toggle:hover {
  color: var(--rust-light);
  border-color: var(--rust);
}
.theme-toggle__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
}
.theme-toggle__icon svg {
  width: 16px;
  height: 16px;
}

/* Icon swap transition */
.icon-enter-active,
.icon-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.icon-enter-from { opacity: 0; transform: rotate(-30deg) scale(0.8); }
.icon-leave-to   { opacity: 0; transform: rotate(30deg) scale(0.8); }
</style>
