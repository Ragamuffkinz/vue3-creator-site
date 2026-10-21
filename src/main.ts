import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Apply saved/system theme before first render to prevent flash
const savedTheme = localStorage.getItem('portfolio-theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light')
document.documentElement.setAttribute('data-theme', initialTheme)

const app = createApp(App)
app.use(router)
app.mount('#app')
