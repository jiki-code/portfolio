<script setup>
import { computed } from 'vue'
import { currentLang } from '../stores/languageStore'
import { i18nText } from '../data/bilingualData'
import { personalInfo } from '../data/resumeData'
import { playClickSound, playHoverSound } from '../utils/audio'
import { useScrollReveal } from '../utils/useScrollReveal'

useScrollReveal()

const emit = defineEmits(['navigate', 'copy-email'])
const t = computed(() => i18nText[currentLang.value].about)

function scrollTo(id) {
  playClickSound()
  emit('navigate', id)
}
</script>

<template>
  <section id="about" class="about-section">
    <div class="section-container">
      <!-- Section Header -->
      <div class="section-header reveal-init">
        <span class="section-tag">{{ t.tag }}</span>
        <h2 class="section-title">
          {{ t.titlePrefix }}<span class="text-highlight">{{ t.titleHighlight }}</span>
        </h2>
      </div>

      <div class="about-grid">
        <!-- Main Bio Card -->
        <div class="bio-card glowing-card reveal-left delay-100">
          <div class="card-header-line">
            <span class="dot-red"></span>
            <span class="dot-yellow"></span>
            <span class="dot-green"></span>
            <span class="file-name">about_kiet.md</span>
          </div>

          <div class="bio-content">
            <p class="lead-text">
              {{ t.lead }}
            </p>

            <p>
              {{ t.p1 }}
            </p>

            <p>
              {{ t.p2 }}
            </p>

            <div class="info-chips">
              <div class="chip" @mouseenter="playHoverSound">
                <span class="chip-label">{{ t.labels.fullName }}</span>
                <span class="chip-val">{{ personalInfo.name }} ({{ personalInfo.englishName }})</span>
              </div>
              <div class="chip" @mouseenter="playHoverSound">
                <span class="chip-label">{{ t.labels.dob }}</span>
                <span class="chip-val">{{ personalInfo.dob }}</span>
              </div>
              <div class="chip" @mouseenter="playHoverSound">
                <span class="chip-label">{{ t.labels.location }}</span>
                <span class="chip-val">{{ personalInfo.location }}</span>
              </div>
              <div class="chip" @mouseenter="playHoverSound">
                <span class="chip-label">{{ t.labels.education }}</span>
                <span class="chip-val">{{ t.degree }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Education & Core Strengths Right Side -->
        <div class="side-cards reveal-right delay-200">
          <!-- Education Card -->
          <div class="feature-card edu-card glowing-card" @mouseenter="playHoverSound">
            <div class="card-icon">🎓</div>
            <div class="card-info">
              <h3>{{ t.eduTitle }}</h3>
              <p class="school-name">{{ t.school }}</p>
              <p class="edu-detail">{{ t.degree }} ({{ t.period }})</p>
              <div class="cert-badge">
                <span>🌐 {{ t.cert }}</span>
              </div>
            </div>
          </div>

          <!-- Key Strengths Card -->
          <div class="feature-card strengths-card glowing-card" @mouseenter="playHoverSound">
            <div class="card-icon">🚀</div>
            <div class="card-info">
              <h3>{{ t.strengthsTitle }}</h3>
              <ul class="strengths-list">
                <li v-for="(str, idx) in t.strengths" :key="idx">
                  <span class="check-icon">✓</span>
                  <span>{{ str }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Quick Action CTA -->
          <div class="about-actions">
            <button class="action-btn contact-btn" @click="scrollTo('contact')" @mouseenter="playHoverSound">
              {{ t.actionBtn }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 100px 24px;
  position: relative;
}

.section-container {
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 50px;
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
  margin-top: 10px;
  line-height: 1.2;
}

.text-highlight {
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
}

.bio-card {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.card-header-line {
  background: rgba(10, 15, 28, 0.8);
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.dot-red, .dot-yellow, .dot-green {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.dot-red { background: #ef4444; }
.dot-yellow { background: #f59e0b; }
.dot-green { background: #10b981; }

.file-name {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: #64748b;
  margin-left: 10px;
}

.bio-content {
  padding: 30px;
  color: #94a3b8;
  font-size: 15px;
  line-height: 1.8;
}

.lead-text {
  font-size: 17px;
  color: #e2e8f0;
  margin-top: 0;
}

.lead-text strong {
  color: #06b6d4;
}

.info-chips {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.chip {
  background: rgba(255, 255, 255, 0.03);
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 13px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.25s, border-color 0.25s;
}

.chip:hover {
  transform: translateY(-2px);
  border-color: rgba(6, 182, 212, 0.3);
}

.chip-label {
  color: #64748b;
  display: block;
  font-size: 11px;
  font-weight: 500;
}

.chip-val {
  color: #f8fafc;
  font-weight: 600;
}

.side-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-card {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  gap: 18px;
}

.card-icon {
  font-size: 32px;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-info h3 {
  margin: 0 0 8px;
  font-size: 17px;
  font-weight: 700;
  color: #f8fafc;
}

.school-name {
  margin: 0;
  font-weight: 700;
  color: #06b6d4;
  font-size: 14px;
}

.edu-detail {
  margin: 4px 0 10px;
  font-size: 13px;
  color: #94a3b8;
}

.cert-badge {
  font-size: 12px;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 4px 10px;
  border-radius: 8px;
  display: inline-block;
  font-weight: 600;
}

.strengths-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.strengths-list li {
  font-size: 13px;
  color: #cbd5e1;
  display: flex;
  gap: 10px;
  line-height: 1.5;
}

.check-icon {
  color: #10b981;
  font-weight: 800;
}

.about-actions {
  margin-top: 10px;
}

.action-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
  border: 1px solid rgba(139, 92, 246, 0.4);
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.action-btn:hover {
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.35);
  transform: translateY(-2px) scale(1.02);
}

@media (max-width: 960px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .info-chips {
    grid-template-columns: 1fr;
  }
}
</style>
