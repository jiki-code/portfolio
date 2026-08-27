<script setup>
import { ref, computed } from 'vue'
import { currentLang } from '../stores/languageStore'
import { i18nText } from '../data/bilingualData'
import { publicProjects } from '../data/resumeData'
import { playClickSound, playHoverSound } from '../utils/audio'
import { useScrollReveal } from '../utils/useScrollReveal'

useScrollReveal()

const activeFilter = ref('all')

const t = computed(() => i18nText[currentLang.value].projects)
const modalT = computed(() => i18nText[currentLang.value].modal)

const categories = computed(() => [
  { id: 'all', label: t.value.tabs.all },
  { id: 'Logistics', label: t.value.tabs.Logistics },
  { id: 'Social', label: t.value.tabs.Social },
  { id: 'Fintech', label: t.value.tabs.Fintech },
  { id: 'Enterprise', label: t.value.tabs.Enterprise }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return publicProjects
  return publicProjects.filter(p => p.category === activeFilter.value)
})

function setFilter(id) {
  playClickSound()
  activeFilter.value = id
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="section-container">
      <!-- Section Header -->
      <div class="section-header reveal-init">
        <span class="section-tag">{{ t.tag }}</span>
        <h2 class="section-title">
          {{ t.titlePrefix }}<span class="text-gradient">{{ t.titleHighlight }}</span>
        </h2>
        <p class="section-subtitle">
          {{ t.subtitle }}
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="filter-tabs reveal-init delay-100">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="filter-btn"
          :class="{ active: activeFilter === cat.id }"
          @click="setFilter(cat.id)"
          @mouseenter="playHoverSound"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Projects Grid with TransitionGroup -->
      <transition-group name="project-list" tag="div" class="projects-grid">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card glowing-card reveal-init"
          @mouseenter="playHoverSound"
        >
          <!-- Card Header Visual Banner -->
          <div class="card-visual" :style="{ background: project.gradient }">
            <div class="visual-pattern"></div>
            <div class="visual-content">
              <span class="badge-tag">{{ project.badge }}</span>
              <span class="company-tag">🏢 {{ project.company }}</span>
            </div>
            <div class="role-badge-floating">👤 {{ project.role }}</div>
            <div class="visual-icon">🚀</div>
          </div>

          <!-- Card Body -->
          <div class="card-body">
            <div class="category-pill">{{ project.category }}</div>
            <h3 class="project-name">{{ project.name }}</h3>
            <p class="project-desc">{{ project.desc }}</p>

            <!-- Inline Features Highlights List (ALWAYS & PERMANENTLY VISIBLE!) -->
            <div v-if="project.features" class="features-preview">
              <h4 class="preview-title">🌟 {{ modalT.features }}</h4>
              <ul class="preview-list">
                <li v-for="(feat, idx) in project.features" :key="idx">
                  <span class="check-icon">✓</span>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>

            <!-- Full Tech Stack Tags Grid -->
            <div class="tech-row">
              <span v-for="t in project.tech" :key="t" class="tech-tag">
                {{ t }}
              </span>
            </div>

            <!-- Footer Actions -->
            <div class="card-actions">
              <div class="status-chip">
                <span>✨ Auto</span>
              </div>

              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noreferrer"
                class="live-link"
                title="Live Demo"
                @mouseenter="playHoverSound"
              >
                <span>{{ t.btnLive }}</span>
              </a>
            </div>
          </div>
        </article>
      </transition-group>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 100px 24px;
  position: relative;
}

.section-container {
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 40px;
}

.section-tag {
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  letter-spacing: 2px;
  color: #06b6d4;
  text-transform: uppercase;
  font-weight: 600;
}

.section-title {
  font-size: clamp(28px, 3.8vw, 48px);
  font-weight: 800;
  color: #f8fafc;
  margin: 10px 0;
}

.text-gradient {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 16px;
  max-width: 650px;
}

.filter-tabs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 45px;
}

.filter-btn {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.filter-btn:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.08);
}

.filter-btn.active {
  color: #fff;
  background: linear-gradient(135deg, #06b6d4, #10b981);
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.35);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

/* Project Transition Group */
.project-list-move,
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(25px) scale(0.94);
}

.project-card {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.35s, box-shadow 0.35s;
}

.card-visual {
  height: 160px;
  padding: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.visual-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 16px 16px;
  opacity: 0.4;
}

.visual-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.badge-tag {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  padding: 4px 10px;
  border-radius: 8px;
}

.company-tag {
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  background: rgba(0, 0, 0, 0.25);
  padding: 4px 10px;
  border-radius: 8px;
}

.role-badge-floating {
  position: relative;
  z-index: 1;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.2);
  padding: 3px 8px;
  border-radius: 6px;
  align-self: flex-start;
  margin-top: 4px;
}

.visual-icon {
  position: relative;
  z-index: 1;
  font-size: 40px;
  align-self: flex-end;
  transition: transform 0.3s ease;
}

.project-card:hover .visual-icon {
  transform: scale(1.2) rotate(10deg);
}

.card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.category-pill {
  font-size: 11px;
  font-weight: 700;
  color: #06b6d4;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.project-name {
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 800;
  color: #f8fafc;
  line-height: 1.3;
}

.project-desc {
  margin: 0 0 16px;
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.6;
}

/* Features List directly on card! */
.features-preview {
  background: rgba(10, 15, 28, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 18px;
}

.preview-title {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 700;
  color: #06b6d4;
}

.preview-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.preview-list li {
  font-size: 13px;
  color: #cbd5e1;
  display: flex;
  gap: 8px;
  line-height: 1.4;
}

.check-icon {
  color: #10b981;
  font-weight: 800;
}

.tech-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.tech-tag {
  font-size: 11px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  padding: 3px 10px;
  border-radius: 6px;
  font-weight: 500;
}

.card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: auto;
}

.status-chip {
  font-size: 11px;
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.1);
  padding: 4px 10px;
  border-radius: 99px;
  border: 1px solid rgba(6, 182, 212, 0.25);
  font-weight: 600;
}

.live-link {
  font-size: 13px;
  font-weight: 700;
  color: #10b981;
  text-decoration: none;
  background: rgba(16, 185, 129, 0.1);
  padding: 6px 14px;
  border-radius: 99px;
  border: 1px solid rgba(16, 185, 129, 0.25);
  transition: all 0.25s;
}

.live-link:hover {
  background: #10b981;
  color: #fff;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
}
</style>
