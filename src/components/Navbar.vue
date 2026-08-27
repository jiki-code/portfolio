<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { playClickSound, playHoverSound, toggleSound } from '../utils/audio'
import { currentLang, setLanguage } from '../stores/languageStore'
import { i18nText } from '../data/bilingualData'

const emit = defineEmits(['navigate'])

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isLangOpen = ref(false)
const soundOn = ref(true)
const activeSection = ref('home')
const langBoxRef = ref(null)

const t = computed(() => i18nText[currentLang.value].nav)

const navItems = computed(() => [
  { id: 'home', label: t.value.home },
  { id: 'about', label: t.value.about },
  { id: 'skills', label: t.value.skills },
  { id: 'experience', label: t.value.experience },
  { id: 'projects', label: t.value.projects },
  { id: 'terminal', label: t.value.terminal },
  { id: 'contact', label: t.value.contact }
])

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function handleNavigate(id) {
  playClickSound()
  activeSection.value = id
  isMobileMenuOpen.value = false
  isLangOpen.value = false
  emit('navigate', id)
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

function handleToggleSound() {
  soundOn.value = toggleSound()
  if (soundOn.value) {
    playClickSound()
  }
}

function selectLang(lang) {
  playClickSound()
  setLanguage(lang)
  isLangOpen.value = false
}

function handleClickOutside(e) {
  if (langBoxRef.value && !langBoxRef.value.contains(e.target)) {
    isLangOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, { threshold: 0.35 })

  navItems.value.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header class="navbar-header" :class="{ scrolled: isScrolled }">
    <nav class="navbar-container">
      <!-- Logo -->
      <a href="#home" class="logo" @click.prevent="handleNavigate('home')" @mouseenter="playHoverSound">
        <span class="logo-box">T</span>
        <span class="logo-text">Kiet</span>
        <span class="logo-badge">FE(BE)</span>
      </a>

      <!-- Desktop Links -->
      <div class="desktop-links">
        <button
          v-for="item in navItems"
          :key="item.id"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click="handleNavigate(item.id)"
          @mouseenter="playHoverSound"
        >
          <span class="dot" v-if="activeSection === item.id"></span>
          {{ item.label }}
        </button>
      </div>

      <!-- Action Area -->
      <div class="nav-actions">
        <!-- Select-Box Language Switcher -->
        <div ref="langBoxRef" class="lang-select-box">
          <button
            class="select-trigger"
            :class="{ open: isLangOpen }"
            @click.stop="isLangOpen = !isLangOpen"
            @mouseenter="playHoverSound"
            title="Select Language"
          >
            <span class="flag-icon">{{ currentLang === 'vi' ? '🇻🇳' : '🇬🇧' }}</span>
            <span class="select-label">{{ currentLang === 'vi' ? 'VIE' : 'ENG' }}</span>
            <svg
              class="chevron-icon"
              :class="{ open: isLangOpen }"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <!-- Dropdown Menu Options -->
          <transition name="dropdown-slide">
            <div v-if="isLangOpen" class="select-dropdown">
              <button
                class="dropdown-option"
                :class="{ selected: currentLang === 'vi' }"
                @click="selectLang('vi')"
                @mouseenter="playHoverSound"
              >
                <span class="option-flag">🇻🇳</span>
                <span class="option-text">Tiếng Việt (VI)</span>
                <span v-if="currentLang === 'vi'" class="option-check">✓</span>
              </button>

              <button
                class="dropdown-option"
                :class="{ selected: currentLang === 'en' }"
                @click="selectLang('en')"
                @mouseenter="playHoverSound"
              >
                <span class="option-flag">🇬🇧</span>
                <span class="option-text">English (EN)</span>
                <span v-if="currentLang === 'en'" class="option-check">✓</span>
              </button>
            </div>
          </transition>
        </div>


        <!-- Availability Badge -->
        <div class="status-badge desktop-only">
          <span class="status-dot"></span>
          <span class="status-text">{{ t.status }}</span>
        </div>

        <!-- Hire Me CTA -->
        <button class="cta-btn desktop-only" @click="handleNavigate('contact')" @mouseenter="playHoverSound">
          {{ t.cta }}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Toggle menu">
          <span class="hamburger" :class="{ open: isMobileMenuOpen }"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer -->
    <transition name="fade">
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu-inner">
          <div class="mobile-lang-row">
            <label class="mobile-lang-label">Ngôn ngữ / Language:</label>
            <div class="mobile-select-group">
              <button
                class="mobile-lang-btn"
                :class="{ active: currentLang === 'vi' }"
                @click="selectLang('vi')"
              >
                🇻🇳 Tiếng Việt
              </button>
              <button
                class="mobile-lang-btn"
                :class="{ active: currentLang === 'en' }"
                @click="selectLang('en')"
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          <button
            v-for="item in navItems"
            :key="item.id"
            class="mobile-nav-link"
            :class="{ active: activeSection === item.id }"
            @click="handleNavigate(item.id)"
          >
            {{ item.label }}
          </button>

          <div class="mobile-menu-footer">
            <div class="status-badge">
              <span class="status-dot"></span>
              <span class="status-text">{{ t.status }}</span>
            </div>
            <button class="cta-btn full-width" @click="handleNavigate('contact')">
              {{ t.cta }} ✉️
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.navbar-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 18px 0;
}

.navbar-header.scrolled {
  padding: 12px 0;
  background: rgba(9, 10, 15, 0.82);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;
}

.logo-box {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  box-shadow: 0 0 16px rgba(139, 92, 246, 0.4);
}

.logo-text {
  font-size: 17px;
  letter-spacing: 0.5px;
  font-weight: 800;
}

.logo-badge {
  font-size: 10px;
  padding: 2px 6px;
  background: rgba(6, 182, 212, 0.15);
  color: #06b6d4;
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 6px;
  font-weight: 600;
}

.desktop-links {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(15, 23, 42, 0.6);
  padding: 6px 10px;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
}

.nav-link {
  background: none;
  border: none;
  color: #94a3b8;
  padding: 8px 14px;
  font-size: 13.5px;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-link:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.06);
}

.nav-link.active {
  color: #fff;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(6, 182, 212, 0.25));
  border: 1px solid rgba(139, 92, 246, 0.3);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #06b6d4;
  box-shadow: 0 0 8px #06b6d4;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Custom Select Box Styling */
.lang-select-box {
  position: relative;
}

.select-trigger {
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 8px 14px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.25s;
  color: #f8fafc;
  font-family: inherit;
}

.select-trigger:hover,
.select-trigger.open {
  border-color: rgba(6, 182, 212, 0.5);
  background: rgba(6, 182, 212, 0.1);
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
}

.flag-icon {
  font-size: 15px;
}

.select-label {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  font-weight: 700;
  color: #06b6d4;
  letter-spacing: 0.5px;
}

.chevron-icon {
  color: #94a3b8;
  transition: transform 0.3s ease;
}

.chevron-icon.open {
  transform: rotate(180deg);
  color: #06b6d4;
}

.select-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 170px;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  padding: 6px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dropdown-option {
  background: none;
  border: none;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.dropdown-option:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #f8fafc;
}

.dropdown-option.selected {
  background: rgba(6, 182, 212, 0.15);
  color: #06b6d4;
}

.option-flag {
  font-size: 16px;
}

.option-text {
  flex-grow: 1;
}

.option-check {
  font-weight: 800;
  color: #10b981;
}

/* Dropdown slide animation */
.dropdown-slide-enter-active,
.dropdown-slide-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-slide-enter-from,
.dropdown-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.sound-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
}

.sound-btn:hover {
  color: #06b6d4;
  border-color: rgba(6, 182, 212, 0.4);
  background: rgba(6, 182, 212, 0.1);
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 99px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
  70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.status-text {
  font-size: 12px;
  font-weight: 600;
  color: #10b981;
}

.cta-btn {
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  border: none;
  color: #fff;
  padding: 9px 20px;
  font-size: 13.5px;
  font-weight: 600;
  border-radius: 99px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(6, 182, 212, 0.4);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  position: relative;
  transition: all 0.3s;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: #fff;
  left: 0;
  transition: all 0.3s;
}

.hamburger::before { top: -7px; }
.hamburger::after { top: 7px; }

.hamburger.open { background: transparent; }
.hamburger.open::before { top: 0; transform: rotate(45deg); }
.hamburger.open::after { top: 0; transform: rotate(-45deg); }

.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(9, 10, 15, 0.96);
  backdrop-filter: blur(20px);
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.mobile-menu-inner {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-lang-row {
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-lang-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 600;
}

.mobile-select-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.mobile-lang-btn {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 10px;
  color: #94a3b8;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
}

.mobile-lang-btn.active {
  border-color: #06b6d4;
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.15);
}

.mobile-nav-link {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
}

.mobile-nav-link.active,
.mobile-nav-link:hover {
  color: #06b6d4;
  background: rgba(6, 182, 212, 0.1);
}

.mobile-menu-footer {
  margin-top: auto;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.full-width {
  width: 100%;
  justify-content: center;
}

@media (max-width: 960px) {
  .desktop-links,
  .desktop-only {
    display: none;
  }
  .mobile-toggle {
    display: block;
  }
}
</style>
