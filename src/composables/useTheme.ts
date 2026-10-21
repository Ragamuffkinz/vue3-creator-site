import { ref, watchEffect } from 'vue'

type Theme = 'dark' | 'light'

function getInitial(): Theme {
  // 1. Persisted preference
  const stored = localStorage.getItem('portfolio-theme') as Theme | null
  if (stored === 'dark' || stored === 'light') return stored
  // 2. System preference
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return 'dark'
}

const theme = ref<Theme>(getInitial())

watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('portfolio-theme', theme.value)
})

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggle }
}
