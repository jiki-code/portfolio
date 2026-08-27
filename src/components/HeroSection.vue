<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { currentLang } from '../stores/languageStore'
import { i18nText } from '../data/bilingualData'
import { playClickSound, playHoverSound } from '../utils/audio'
import { useScrollReveal } from '../utils/useScrollReveal'

useScrollReveal()

const emit = defineEmits(['navigate', 'copy-email'])

const t = computed(() => i18nText[currentLang.value].hero)
const stats = computed(() => i18nText[currentLang.value].stats)

// Typing effect states
const currentTitle = ref('')
let titleIdx = 0
let charIdx = 0
let isDeleting = false
let typingTimeout = null

function typeEffect() {
  const titles = t.value.titles
  const fullText = titles[titleIdx % titles.length]
  
  if (isDeleting) {
    currentTitle.value = fullText.substring(0, charIdx - 1)
    charIdx--
  } else {
    currentTitle.value = fullText.substring(0, charIdx + 1)
    charIdx++
  }

  let speed = isDeleting ? 35 : 75

  if (!isDeleting && charIdx === fullText.length) {
    speed = 2200
    isDeleting = true
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false
    titleIdx = (titleIdx + 1) % titles.length
    speed = 400
  }

  typingTimeout = setTimeout(typeEffect, speed)
}

watch(currentLang, () => {
  if (typingTimeout) clearTimeout(typingTimeout)
  charIdx = 0
  isDeleting = false
  typeEffect()
})

// 3D Card Tilt Effect
const cardRef = ref(null)
const tiltX = ref(0)
const tiltY = ref(0)
const mousePosX = ref(50)
const mousePosY = ref(50)

function handleMouseMove(e) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  tiltX.value = (y / (rect.height / 2)) * -14
  tiltY.value = (x / (rect.width / 2)) * 14
  
  mousePosX.value = Math.round(((e.clientX - rect.left) / rect.width) * 100)
  mousePosY.value = Math.round(((e.clientY - rect.top) / rect.height) * 100)
}

function handleMouseLeave() {
  tiltX.value = 0
  tiltY.value = 0
  mousePosX.value = 50
  mousePosY.value = 50
}

function scrollTo(id) {
  playClickSound()
  emit('navigate', id)
}

function copyEmail() {
  playClickSound()
  emit('copy-email')
}

onMounted(() => {
  typeEffect()
})

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout)
})
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-container">
      <!-- Left Copy Column -->
      <div class="hero-content reveal-left">
        <!-- Eyebrow Badge -->
        <div class="eyebrow-wrapper">
          <span class="sparkle">✦</span>
          <span class="eyebrow-text">{{ t.eyebrow }}</span>
          <span class="badge-loc">📍 HCMC, VN</span>
        </div>

        <!-- Main Heading -->
        <h1 class="hero-title">
          {{ t.greeting }}
          <span class="name-gradient">{{ t.name }}</span>
        </h1>

        <!-- Typing Title -->
        <div class="typing-container">
          <span class="role-prefix">&lt;/&gt; </span>
          <span class="typing-text">{{ currentTitle }}</span>
          <span class="cursor-blink">|</span>
        </div>

        <!-- Description -->
        <p class="hero-description">
          {{ t.desc }}
        </p>

        <!-- CTA Action Buttons -->
        <div class="hero-actions">
          <button class="btn-primary" @click="scrollTo('projects')" @mouseenter="playHoverSound">
            <span>{{ t.btnProjects }}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>

          <button class="btn-secondary" @click="copyEmail" @mouseenter="playHoverSound">
            <span>{{ t.btnCopyEmail }}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>

          <a
            href="https://linkedin.com/in/kiet-tran-819613223"
            target="_blank"
            rel="noreferrer"
            class="btn-ghost"
            @mouseenter="playHoverSound"
          >
            {{ t.btnLinkedIn }}
          </a>
        </div>

        <!-- Quick Stats Grid -->
        <div class="hero-stats">
          <div v-for="(stat, idx) in stats" :key="idx" class="stat-card">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Right 3D Interactive Spotlight Card Column -->
      <div class="hero-visual reveal-right">
        <div
          ref="cardRef"
          class="interactive-card glowing-card"
          :style="{
            transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            background: `radial-gradient(circle at ${mousePosX}% ${mousePosY}%, rgba(139, 92, 246, 0.25), rgba(15, 23, 42, 0.75) 70%)`
          }"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
        >
          <div class="card-glow"></div>

          <!-- Avatar Illustration Header -->
          <div class="card-avatar">
            <div class="avatar-ring"></div>
            <div class="avatar-inner">
              <span class="avatar-initials">TAK</span>
            </div>
            <div class="online-indicator" title="Available Online"></div>

            <!-- Orbiting Particle Dots -->
            <div class="orbit-particle p1"></div>
            <div class="orbit-particle p2"></div>
          </div>

          <!-- Card Info -->
          <div class="card-body">
            <h3>TRAN ANH KIET</h3>
            <p class="card-role">FRONTEND ENGINEER</p>
            <div class="tech-tags">
              <span class="tag tag-vue">Vue 3</span>
              <span class="tag tag-nuxt">Nuxt</span>
              <span class="tag tag-react">React</span>
              <span class="tag tag-next">Next.js</span>
              <span class="tag tag-ts">TypeScript</span>
              <span class="tag tag-pinia">Pinia</span>
            </div>
          </div>

          <!-- Floating Micro Badges -->
          <div class="floating-badge badge-top-left float-anim">
            <span class="badge-icon">⚡</span>
            <span>{{ t.badgeFast }}</span>
          </div>

          <div class="floating-badge badge-bottom-right float-anim delay-200">
            <span class="badge-icon">🛡️</span>
            <span>{{ t.badgeReady }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Down Hint -->
    <div class="scroll-indicator" @click="scrollTo('about')">
      <span>{{ t.scrollDown }}</span>
      <div class="mouse-icon">
        <div class="wheel"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  padding: 130px 24px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
}

.eyebrow-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 16px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 99px;
  margin-bottom: 24px;
}

.sparkle {
  color: #8b5cf6;
  font-size: 14px;
  animation: pulseSparkle 2s infinite alternate;
}

@keyframes pulseSparkle {
  0% { opacity: 0.4; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1.2); }
}

.eyebrow-text {
  font-size: 13px;
  font-weight: 600;
  color: #c084fc;
}

.badge-loc {
  font-size: 11px;
  color: #94a3b8;
  padding-left: 8px;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}

.hero-title {
  font-size: clamp(38px, 5.2vw, 68px);
  font-weight: 800;
  line-height: 1.1;
  color: #f8fafc;
  margin: 0 0 16px;
  letter-spacing: -1px;
}

.name-gradient {
  display: block;
  background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%);
  background-size: 200% 200%;
  animation: gradientShift 6s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 6px;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.typing-container {
  font-family: 'DM Mono', monospace;
  font-size: clamp(18px, 2.2vw, 26px);
  font-weight: 600;
  color: #06b6d4;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
}

.role-prefix {
  color: #8b5cf6;
  margin-right: 8px;
}

.cursor-blink {
  animation: blink 1s infinite;
  color: #06b6d4;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-description {
  font-size: 16px;
  line-height: 1.7;
  color: #94a3b8;
  max-width: 600px;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.btn-primary {
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  border: none;
  color: #fff;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.35);
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 12px 30px rgba(6, 182, 212, 0.45);
}

.btn-secondary {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e2e8f0;
  padding: 14px 22px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(6, 182, 212, 0.4);
  color: #06b6d4;
  transform: translateY(-2px);
}

.btn-ghost {
  color: #94a3b8;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 18px;
  border-radius: 10px;
  transition: all 0.25s;
}

.btn-ghost:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.05);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-card {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 26px;
  font-weight: 800;
  color: #f8fafc;
  background: linear-gradient(135deg, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 11px;
  color: #64748b;
  margin-top: 2px;
  font-weight: 500;
}

/* 3D Visual Card */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.interactive-card {
  width: 100%;
  max-width: 380px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  position: relative;
  transition: transform 0.15s ease-out, background 0.2s ease;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transform-style: preserve-3d;
}

.card-glow {
  position: absolute;
  inset: -1px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.4));
  border-radius: 24px;
  z-index: -1;
  opacity: 0.5;
  filter: blur(15px);
}

.card-avatar {
  position: relative;
  width: 110px;
  height: 110px;
  margin: 0 auto 20px;
}

.avatar-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4, #10b981);
  animation: spinRing 8s linear infinite;
}

@keyframes spinRing {
  100% { transform: rotate(360deg); }
}

.avatar-inner {
  position: absolute;
  inset: 0;
  background: #0f172a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-initials {
  font-size: 32px;
  font-weight: 900;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.online-indicator {
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  background: #10b981;
  border: 3px solid #0f172a;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
}

.orbit-particle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #06b6d4;
  box-shadow: 0 0 10px #06b6d4;
}

.orbit-particle.p1 {
  top: -10px;
  left: 50%;
  animation: orbit1 6s linear infinite;
}

.orbit-particle.p2 {
  bottom: -10px;
  left: 20%;
  background: #ec4899;
  box-shadow: 0 0 10px #ec4899;
  animation: orbit2 6s linear infinite;
}

@keyframes orbit1 {
  0% { transform: rotate(0deg) translate(65px) rotate(0deg); }
  100% { transform: rotate(360deg) translate(65px) rotate(-360deg); }
}

@keyframes orbit2 {
  0% { transform: rotate(180deg) translate(65px) rotate(-180deg); }
  100% { transform: rotate(540deg) translate(65px) rotate(-540deg); }
}

.card-body h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #f8fafc;
}

.card-role {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 2px;
  color: #06b6d4;
  margin: 6px 0 20px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tag {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  transition: transform 0.2s;
}

.tag:hover {
  transform: scale(1.1);
}

.tag-vue { color: #42b883; border-color: rgba(66, 184, 131, 0.3); }
.tag-nuxt { color: #00dc82; border-color: rgba(0, 220, 130, 0.3); }
.tag-react { color: #61dafb; border-color: rgba(97, 218, 251, 0.3); }
.tag-next { color: #f8fafc; border-color: rgba(248, 250, 252, 0.3); }
.tag-ts { color: #3178c6; border-color: rgba(49, 120, 198, 0.3); }
.tag-pinia { color: #ffe569; border-color: rgba(255, 229, 105, 0.3); }

/* Floating Badges */
.floating-badge {
  position: absolute;
  padding: 8px 14px;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  color: #e2e8f0;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.badge-top-left {
  top: -15px;
  left: -25px;
}

.badge-bottom-right {
  bottom: -15px;
  right: -25px;
}

/* Scroll hint */
.scroll-indicator {
  margin-top: 40px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #64748b;
  font-size: 12px;
  font-weight: 500;
  transition: color 0.25s;
}

.scroll-indicator:hover {
  color: #06b6d4;
}

.mouse-icon {
  width: 20px;
  height: 32px;
  border: 2px solid currentColor;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.wheel {
  width: 4px;
  height: 6px;
  background: currentColor;
  border-radius: 2px;
  animation: scrollWheel 1.5s infinite;
}

@keyframes scrollWheel {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-visual {
    order: -1;
  }
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
