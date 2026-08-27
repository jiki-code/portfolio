<script setup>
import { computed } from 'vue'
import { currentLang } from '../stores/languageStore'
import { i18nText } from '../data/bilingualData'
import { playClickSound, playHoverSound } from '../utils/audio'

const props = defineProps({
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])
const t = computed(() => i18nText[currentLang.value].modal)

function handleClose() {
  playClickSound()
  emit('close')
}
</script>

<template>
  <transition name="modal-fade">
    <div v-if="project" class="modal-overlay" @click.self="handleClose">
      <div class="modal-card">
        <!-- Close Button -->
        <button class="close-btn" @click="handleClose" aria-label="Close modal">✕</button>

        <!-- Modal Header Banner -->
        <div class="modal-header-banner" :style="{ background: project.gradient }">
          <span class="category-badge">{{ project.category }}</span>
          <h2 class="modal-title">{{ project.name }}</h2>
          <div class="modal-meta-row">
            <span>🏢 {{ project.company }}</span>
            <span>👤 {{ project.role }}</span>
            <span>🏷️ {{ project.badge }}</span>
          </div>
        </div>

        <!-- Modal Body Content -->
        <div class="modal-body">
          <div class="body-section">
            <h4>{{ t.overview }}</h4>
            <p>{{ project.desc }}</p>
          </div>

          <div v-if="project.features" class="body-section">
            <h4>{{ t.features }}</h4>
            <ul class="feature-list">
              <li v-for="(feat, idx) in project.features" :key="idx">
                <span class="check-icon">✓</span>
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>

          <div class="body-section">
            <h4>{{ t.tech }}</h4>
            <div class="tech-tags-grid">
              <span v-for="tech in project.tech" :key="tech" class="tech-badge">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Modal Footer Actions -->
        <div class="modal-footer">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noreferrer"
            class="live-btn"
            @mouseenter="playHoverSound"
          >
            <span>{{ t.btnLive }}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          <button class="cancel-btn" @click="handleClose" @mouseenter="playHoverSound">
            {{ t.btnClose }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(9, 10, 15, 0.85);
  backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal-card {
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  max-width: 650px;
  width: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
}

.close-btn:hover {
  background: #ef4444;
  border-color: #ef4444;
}

.modal-header-banner {
  padding: 36px 30px 24px;
  position: relative;
  color: #fff;
}

.category-badge {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.3);
  padding: 3px 10px;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 8px;
}

.modal-title {
  margin: 0 0 12px;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.2;
}

.modal-meta-row {
  display: flex;
  gap: 16px;
  font-size: 12px;
  opacity: 0.9;
  flex-wrap: wrap;
}

.modal-body {
  padding: 28px 30px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.body-section h4 {
  margin: 0 0 10px;
  font-size: 15px;
  font-weight: 700;
  color: #06b6d4;
}

.body-section p {
  margin: 0;
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.7;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feature-list li {
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: #e2e8f0;
}

.check-icon {
  color: #10b981;
  font-weight: 800;
}

.tech-tags-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #c084fc;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
}

.modal-footer {
  padding: 20px 30px;
  background: rgba(10, 15, 28, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.live-btn {
  background: linear-gradient(135deg, #10b981, #059669);
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s;
}

.live-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.cancel-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
}

.cancel-btn:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
}

/* Modal Fade Animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
