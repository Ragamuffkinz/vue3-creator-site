<template>
  <div class="about">
    <!-- Page Header -->
    <section class="page-header container">
      <p class="label">About</p>
      <h1 class="page-header__title">{{ artistName }}</h1>
      <p class="page-header__subtitle">{{ artistTitle }}</p>
    </section>

    <!-- Bio + Skills -->
    <section class="bio-section container">
      <div class="bio-section__grid">
        <div class="bio-section__text">
          <p class="label">Bio</p>
          <div class="bio-section__body">
            <p v-for="(para, i) in bioParagraphs" :key="i">{{ para }}</p>
          </div>
        </div>
        <aside class="bio-section__portrait">
          <div class="portrait-frame">
            <img
              src="../assets/jessie_profile.jpg"
              alt="Artist portrait"
            />
            <div class="portrait-frame__accent" />
          </div>
        </aside>
      </div>
    </section>

    <!-- Skills / Expertise -->
    <section class="skills-section container">
      <div class="skills-section__header">
        <p class="label">Expertise</p>
        <h2>What I Do</h2>
      </div>
      <div class="skills-grid">
        <div v-for="group in skillGroups" :key="group.heading" class="skills-card">
          <h3 class="skills-card__heading">{{ group.heading }}</h3>
          <ul class="skills-card__list">
            <li v-for="skill in group.skills" :key="skill.label" class="skills-card__item">
              <span class="skills-card__bullet">✦</span>
              <div>
                <strong>{{ skill.label }}</strong>
                <span v-if="skill.details" class="skills-card__detail"> — {{ skill.details }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="timeline-section container">
      <div class="timeline-section__header">
        <p class="label">Experience</p>
        <h2>Journey</h2>
      </div>
      <ol class="timeline">
        <li v-for="(entry, i) in timeline" :key="i" class="timeline__entry">
          <div class="timeline__period">
            <span class="label">{{ entry.period }}</span>
          </div>
          <div class="timeline__connector">
            <span class="timeline__dot" />
            <span v-if="i < timeline.length - 1" class="timeline__line" />
          </div>
          <div class="timeline__content">
            <h4 class="timeline__role">{{ entry.role }}</h4>
            <p v-if="entry.org" class="timeline__org">{{ entry.org }}</p>
            <p class="timeline__desc">{{ entry.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact-section container">
      <div class="contact-section__header">
        <p class="label">Get in Touch</p>
        <h2>Contact</h2>
        <p class="contact-section__intro">
          Open to commissions, collaborations, licensing inquiries, and consulting.
          Reach out through any of the channels below.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Email -->
        <a
          v-if="contactInfo.email"
          :href="`mailto:${contactInfo.email}`"
          class="contact-card contact-card--email"
        >
          <span class="contact-card__icon">✉</span>
          <div>
            <p class="label">Email</p>
            <p class="contact-card__handle">{{ contactInfo.email }}</p>
          </div>
          <span class="contact-card__arrow">→</span>
        </a>

        <!-- Socials -->
        <a
          v-for="social in contactInfo.socials"
          :key="social.platform"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <span class="contact-card__icon">{{ platformEmoji(social.icon) }}</span>
          <div>
            <p class="label">{{ social.platform }}</p>
            <p class="contact-card__handle">{{ social.label }}</p>
          </div>
          <span class="contact-card__arrow">→</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { artistName, artistTitle, artistBio, skillGroups, timeline, contactInfo } from '@/data/about'

const bioParagraphs = artistBio.split('\n\n')

function platformEmoji(icon: string): string {
  const map: Record<string, string> = {
    instagram: '◈',
    twitter: '◉',
    tiktok: '▶',
    etsy: '◆',
    kofi: '☕',
  }
  return map[icon] ?? '◎'
}
</script>

<style scoped>
/* ── Page Header ────────────────────────────────────────────────── */
.page-header {
  padding-top: 5rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--border-faint);
}
.page-header .label { margin-bottom: 1rem; }
.page-header__title { color: var(--text-primary); }
.page-header__subtitle {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-top: 0.75rem;
}

/* ── Bio ────────────────────────────────────────────────────────── */
.bio-section { padding-block: 5rem; }
.bio-section__grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 5rem;
  align-items: start;
}
.bio-section__text .label { margin-bottom: 1.5rem; }
.bio-section__body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.bio-section__body p {
  color: var(--text-body);
  font-size: 1.05rem;
  line-height: 1.75;
}

.portrait-frame {
  position: relative;
  display: inline-block;
}
.portrait-frame img {
  width: 100%;
  display: block;
}
.portrait-frame__accent {
  position: absolute;
  inset: 14px -14px -14px 14px;
  border: 1px solid var(--border-mid);
  z-index: -1;
}

/* ── Skills ─────────────────────────────────────────────────────── */
.skills-section {
  padding-bottom: 5rem;
  border-top: 1px solid var(--border-faint);
  padding-top: 4rem;
}
.skills-section__header { margin-bottom: 3rem; }
.skills-section__header .label { margin-bottom: 0.75rem; }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--bg-grid-line);
}
.skills-card {
  background: var(--bg-surface);
  padding: 2rem 1.75rem;
}
.skills-card__heading {
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-mid);
}
.skills-card__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.skills-card__item {
  display: flex;
  gap: 0.75rem;
  align-items: baseline;
  font-size: 0.92rem;
  color: var(--text-body);
  line-height: 1.4;
}
.skills-card__bullet { color: var(--rust); font-size: 0.6rem; flex-shrink: 0; }
.skills-card__item strong { color: var(--text-primary); font-weight: 500; }
.skills-card__detail { color: var(--text-muted); font-size: 0.82rem; }

/* ── Timeline ───────────────────────────────────────────────────── */
.timeline-section {
  padding-block: 4rem 5rem;
  border-top: 1px solid var(--border-faint);
}
.timeline-section__header { margin-bottom: 3rem; }
.timeline-section__header .label { margin-bottom: 0.75rem; }

.timeline { list-style: none; }
.timeline__entry {
  display: grid;
  grid-template-columns: 180px 32px 1fr;
  gap: 0 1.5rem;
  margin-bottom: 0;
}
.timeline__period {
  padding-top: 0.25rem;
  text-align: right;
}
.timeline__connector {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timeline__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--rust);
  flex-shrink: 0;
  margin-top: 0.4rem;
  box-shadow: 0 0 0 3px var(--border-faint);
}
.timeline__line {
  flex: 1;
  width: 1px;
  background: var(--border-faint);
  margin-block: 4px;
}
.timeline__content {
  padding-bottom: 3rem;
}
.timeline__role {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}
.timeline__org {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--rust-light);
  margin-bottom: 0.5rem;
}
.timeline__desc {
  color: var(--text-body);
  font-size: 0.95rem;
  line-height: 1.65;
}

/* ── Contact ────────────────────────────────────────────────────── */
.contact-section {
  padding-block: 4rem 6rem;
  border-top: 1px solid var(--border-faint);
}
.contact-section__header { margin-bottom: 3rem; }
.contact-section__header .label { margin-bottom: 0.75rem; }
.contact-section__intro {
  color: var(--text-body);
  font-size: 1rem;
  margin-top: 1rem;
  max-width: 55ch;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1px;
  background: var(--bg-grid-line);
}
.contact-card {
  background: var(--bg-surface);
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  text-decoration: none;
  color: var(--text-primary);
  transition: background 0.2s ease;
}
.contact-card:hover { background: var(--rust-muted); }
.contact-card--email { grid-column: 1 / -1; }
.contact-card__icon {
  font-size: 1.5rem;
  color: var(--rust-light);
  flex-shrink: 0;
  width: 2rem;
  text-align: center;
}
.contact-card__handle {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-primary);
  margin-top: 0.2rem;
}
.contact-card__arrow {
  margin-left: auto;
  color: var(--text-muted);
  font-size: 1.1rem;
  transition: transform 0.2s ease, color 0.2s ease;
}
.contact-card:hover .contact-card__arrow {
  transform: translateX(4px);
  color: var(--text-primary);
}

/* ── Responsive ─────────────────────────────────────────────────── */
@media (max-width: 960px) {
  .bio-section__grid { grid-template-columns: 1fr; }
  .bio-section__portrait { display: none; }
  .skills-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .timeline__entry { grid-template-columns: 0 28px 1fr; }
  .timeline__period { display: none; }
  .contact-card--email { grid-column: auto; }
}
</style>
