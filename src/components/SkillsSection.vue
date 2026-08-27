<script setup>
import { ref, computed } from 'vue'
import { currentLang } from '../stores/languageStore'
import { i18nText } from '../data/bilingualData'
import { skillCategories } from '../data/resumeData'
import { playClickSound, playHoverSound } from '../utils/audio'
import { useScrollReveal } from '../utils/useScrollReveal'

useScrollReveal()

const activeCategory = ref('all')

const t = computed(() => i18nText[currentLang.value].skills)

const categories = computed(() => [
  { id: 'all', label: t.value.tabs.all },
  { id: 'frontend', label: t.value.tabs.frontend },
  { id: 'state_api', label: t.value.tabs.state_api },
  { id: 'backend_data', label: t.value.tabs.backend_data },
  { id: 'tools_workflow', label: t.value.tabs.tools_workflow },
  { id: 'ai_tools', label: t.value.tabs.ai_tools }
])

const filteredCategories = computed(() => {
  if (activeCategory.value === 'all') {
    return skillCategories
  }
  return skillCategories.filter(cat => cat.id === activeCategory.value)
})

function setCategory(id) {
  playClickSound()
  activeCategory.value = id
}
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="section-container">
      <!-- Section Header -->
      <div class="section-header text-center reveal-init">
        <span class="section-tag">{{ t.tag }}</span>
        <h2 class="section-title">
          {{ t.titlePrefix }}<span class="text-gradient">{{ t.titleHighlight }}</span>
        </h2>
        <p class="section-subtitle">
          {{ t.subtitle }}
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="tabs-wrapper reveal-init delay-100">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="tab-btn"
          :class="{ active: activeCategory === cat.id }"
          @mouseenter="playHoverSound"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills Cards Grid with Vue TransitionGroup -->
      <transition-group name="skills-list" tag="div" class="categories-grid">
        <div
          v-for="cat in filteredCategories"
          :key="cat.id"
          class="category-card glowing-card reveal-init"
          @mouseenter="playHoverSound"
        >
          <div class="category-header">
            <span class="category-icon">⚡</span>
            <h3>{{ cat.title }}</h3>
          </div>

          <div class="skills-list">
            <div v-for="skill in cat.skills" :key="skill.name" class="skill-item">
              <div class="skill-info">
                <div class="skill-name-row">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span v-if="skill.tag" class="skill-badge">{{ skill.tag }}</span>
                </div>
                <div class="skill-meta">
                  <span class="skill-exp">{{ skill.exp }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
              </div>

              <!-- Animated Progress Bar -->
              <div class="progress-bar-bg">
                <div
                  class="progress-bar-fill"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </transition-group>

      <!-- AI Tools Special Banner -->
      <div class="ai-banner glowing-card reveal-init delay-200" @mouseenter="playHoverSound">
        <div class="ai-banner-content">
          <div class="ai-badge">🤖 AI ACCELERATED WORKFLOW</div>
          <h3>{{ t.aiTitle }}</h3>
          <p>{{ t.aiDesc }}</p>
        </div>
        <div class="ai-tools-icons">
          <span class="ai-icon">✨ Gemini</span>
          <span class="ai-icon">⚡ ChatGPT</span>
          <span class="ai-icon">🧠 Claude</span>
          <span class="ai-icon">🚀 Cursor</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 100px 24px;
  position: relative;
}

.section-container {
  max-width: 1280px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
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
  background: linear-gradient(135deg, #06b6d4, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 16px;
  max-width: 650px;
  margin: 0 auto 40px;
}

.tabs-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 45px;
}

.tab-btn {
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

.tab-btn:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.08);
}

.tab-btn.active {
  color: #fff;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.35);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 24px;
  margin-bottom: 50px;
}

/* Skills Transition Group */
.skills-list-move,
.skills-list-enter-active,
.skills-list-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.skills-list-enter-from,
.skills-list-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.category-card {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  padding: 28px;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.category-icon {
  font-size: 20px;
  color: #06b6d4;
}

.category-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #f8fafc;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.skill-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.skill-name {
  font-size: 14px;
  font-weight: 600;
  color: #e2e8f0;
}

.skill-badge {
  font-size: 10px;
  padding: 2px 7px;
  background: rgba(6, 182, 212, 0.12);
  color: #06b6d4;
  border-radius: 6px;
  font-weight: 600;
}

.skill-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
  margin-bottom: 6px;
}

.skill-exp {
  color: #94a3b8;
}

.skill-level {
  font-family: 'DM Mono', monospace;
  color: #c084fc;
  font-weight: 600;
}

.progress-bar-bg {
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #8b5cf6, #06b6d4);
  border-radius: 99px;
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.ai-banner {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15));
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 30px;
  align-items: center;
  backdrop-filter: blur(16px);
}

.ai-badge {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  color: #c084fc;
  font-weight: 700;
  margin-bottom: 8px;
}

.ai-banner h3 {
  margin: 0 0 10px;
  font-size: 22px;
  font-weight: 800;
  color: #f8fafc;
}

.ai-banner p {
  margin: 0;
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.6;
  max-width: 700px;
}

.ai-tools-icons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ai-icon {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
  white-space: nowrap;
  transition: transform 0.25s, border-color 0.25s;
}

.ai-icon:hover {
  transform: translateX(4px);
  border-color: #06b6d4;
}

@media (max-width: 900px) {
  .ai-banner {
    grid-template-columns: 1fr;
  }
  .ai-tools-icons {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
