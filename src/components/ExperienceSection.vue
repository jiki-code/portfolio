<script setup>
import { computed } from 'vue'
import { currentLang } from '../stores/languageStore'
import { i18nText } from '../data/bilingualData'
import { experiences } from '../data/resumeData'
import { playHoverSound } from '../utils/audio'
import { useScrollReveal } from '../utils/useScrollReveal'

useScrollReveal()

const t = computed(() => i18nText[currentLang.value].experience)
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="section-container">
      <!-- Section Header -->
      <div class="section-header reveal-init">
        <span class="section-tag">{{ t.tag }}</span>
        <h2 class="section-title">
          {{ t.titlePrefix }}<span class="text-glow">{{ t.titleHighlight }}</span>
        </h2>
        <p class="section-subtitle">
          {{ t.subtitle }}
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="timeline-container">
        <div class="timeline-line"></div>

        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          class="timeline-item reveal-init"
          :class="`delay-${(index + 1) * 100}`"
        >
          <!-- Timeline Node Marker -->
          <div class="node-wrapper" @mouseenter="playHoverSound">
            <div class="node-dot" :style="{ backgroundColor: exp.color, boxShadow: `0 0 15px ${exp.color}` }">
              <span class="node-number">0{{ experiences.length - index }}</span>
            </div>
          </div>

          <!-- Timeline Content Card -->
          <div class="exp-card glowing-card">
            <!-- Header (Always Open & Interactive) -->
            <div class="exp-card-header" @mouseenter="playHoverSound">
              <div class="header-main">
                <span class="company-badge" :style="{ borderColor: exp.color, color: exp.color }">
                  {{ exp.company }}
                </span>
                <span class="type-tag">{{ exp.type }}</span>
                <span class="period-tag">📅 {{ exp.period }}</span>
              </div>

              <div class="role-row">
                <h3 class="role-title">{{ exp.role }}</h3>
                <span class="active-badge">✨ Auto</span>
              </div>

              <p class="exp-summary">{{ exp.summary }}</p>
            </div>

            <!-- Details Body (PERMANENTLY & AUTOMATICALLY SHOWN AT ALL TIMES!) -->
            <div class="exp-details">
              <!-- Highlights List if present -->
              <div v-if="exp.highlights" class="details-block">
                <h4 class="block-title">{{ t.contributions }}</h4>
                <ul class="bullet-list">
                  <li v-for="(hl, i) in exp.highlights" :key="i">{{ hl }}</li>
                </ul>
              </div>

              <!-- Specific Projects Grid if present -->
              <div v-if="exp.projects" class="details-block">
                <h4 class="block-title">💻 {{ t.projectsHeader }} {{ exp.company }}:</h4>
                <div class="projects-subgrid">
                  <div v-for="proj in exp.projects" :key="proj.name" class="subproject-card">
                    <div class="subproj-header">
                      <h5>{{ proj.name }}</h5>
                      <a
                        v-if="proj.link"
                        :href="proj.link"
                        target="_blank"
                        rel="noreferrer"
                        class="link-badge"
                        @mouseenter="playHoverSound"
                      >
                        Live Demo ↗
                      </a>
                    </div>
                    <p class="subproj-desc">{{ proj.desc }}</p>
                    <div class="subproj-tags">
                      <span v-for="t in proj.tech" :key="t" class="mini-tag">{{ t }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Global Tech Badge Row -->
              <div class="tech-stack-row">
                <span class="stack-label">{{ t.techUsed }}</span>
                <div class="tags-flex">
                  <span v-for="tech in exp.tech" :key="tech" class="tech-pill">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 100px 24px;
  position: relative;
}

.section-container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 60px;
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

.text-glow {
  color: #8b5cf6;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 16px;
  max-width: 650px;
}

/* Timeline */
.timeline-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.timeline-line {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 24px;
  width: 2px;
  background: linear-gradient(180deg, #8b5cf6, #06b6d4 50%, rgba(255, 255, 255, 0.1));
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 24px;
}

.node-wrapper {
  z-index: 2;
  display: flex;
  justify-content: center;
}

.node-dot {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #0f172a;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.timeline-item:hover .node-dot {
  transform: scale(1.2);
}

.node-number {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  font-weight: 800;
  color: #fff;
}

.exp-card {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  overflow: hidden;
}

.exp-card-header {
  padding: 24px 24px 12px;
}

.header-main {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.company-badge {
  font-size: 14px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 8px;
  border: 1px solid;
  background: rgba(255, 255, 255, 0.04);
}

.type-tag {
  font-size: 12px;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.05);
  padding: 3px 10px;
  border-radius: 6px;
}

.period-tag {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: #64748b;
  margin-left: auto;
}

.role-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.role-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #f8fafc;
}

.active-badge {
  font-size: 11px;
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.1);
  padding: 3px 10px;
  border-radius: 99px;
  border: 1px solid rgba(6, 182, 212, 0.25);
  font-weight: 600;
}

.exp-summary {
  margin: 12px 0 0;
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.6;
}

.exp-details {
  padding: 0 24px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 16px;
}

.details-block {
  margin-top: 20px;
}

.block-title {
  margin: 0 0 12px;
  font-size: 14px;
  color: #c084fc;
  font-weight: 700;
}

.bullet-list {
  padding-left: 20px;
  margin: 0;
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.7;
}

.projects-subgrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.subproject-card {
  background: rgba(10, 15, 28, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 16px;
  transition: transform 0.25s, border-color 0.25s;
}

.subproject-card:hover {
  transform: translateY(-2px);
  border-color: rgba(6, 182, 212, 0.3);
}

.subproj-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.subproj-header h5 {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: #f8fafc;
}

.link-badge {
  font-size: 11px;
  color: #10b981;
  text-decoration: none;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(16, 185, 129, 0.15);
  border-radius: 6px;
  transition: background-color 0.2s;
}

.link-badge:hover {
  background: #10b981;
  color: #fff;
}

.subproj-desc {
  margin: 0 0 12px;
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.5;
}

.subproj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.mini-tag {
  font-size: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #cbd5e1;
  padding: 2px 6px;
  border-radius: 4px;
}

.tech-stack-row {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.stack-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 600;
}

.tags-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-pill {
  font-size: 11px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.25);
  color: #c084fc;
  padding: 3px 10px;
  border-radius: 99px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .timeline-line {
    left: 18px;
  }
  .timeline-item {
    grid-template-columns: 36px 1fr;
    gap: 14px;
  }
  .node-dot {
    width: 34px;
    height: 34px;
  }
  .role-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .period-tag {
    margin-left: 0;
  }
}
</style>
