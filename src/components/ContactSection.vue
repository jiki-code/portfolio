<script setup>
import { ref, computed } from 'vue'
import { currentLang } from '../stores/languageStore'
import { i18nText } from '../data/bilingualData'
import { personalInfo } from '../data/resumeData'
import { playClickSound, playHoverSound, playSuccessSound } from '../utils/audio'
import { useScrollReveal } from '../utils/useScrollReveal'

useScrollReveal()

const emit = defineEmits(['copy-email', 'navigate'])
const t = computed(() => i18nText[currentLang.value].contact)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitted = ref(false)

function copyInfo(text, type) {
  playClickSound()
  navigator.clipboard.writeText(text)
  emit('copy-email', `Copied ${type}: ${text}`)
}

function handleSubmit() {
  playSuccessSound()
  isSubmitted.value = true
  setTimeout(() => {
    isSubmitted.value = false
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 4000)
}

function scrollToTop() {
  playClickSound()
  emit('navigate', 'home')
}
</script>

<template>
  <section id="contact" class="contact-section">
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

      <div class="contact-grid">
        <!-- Direct Contact Cards Left Side -->
        <div class="contact-cards reveal-left delay-100">
          <!-- Email Card -->
          <div class="contact-card glowing-card" @mouseenter="playHoverSound">
            <div class="card-icon-box">📧</div>
            <div class="card-info">
              <span class="info-label">{{ t.emailLabel }}</span>
              <a :href="`mailto:${personalInfo.email}`" class="info-value">{{ personalInfo.email }}</a>
            </div>
            <button class="copy-btn" @click="copyInfo(personalInfo.email, 'Email')" title="Copy Email">
              📋
            </button>
          </div>

          <!-- Phone Card -->
          <div class="contact-card glowing-card" @mouseenter="playHoverSound">
            <div class="card-icon-box">📞</div>
            <div class="card-info">
              <span class="info-label">{{ t.phoneLabel }}</span>
              <a :href="`tel:${personalInfo.phone}`" class="info-value">{{ personalInfo.phoneFormatted }}</a>
            </div>
            <button class="copy-btn" @click="copyInfo(personalInfo.phone, 'Phone')" title="Copy Phone">
              📋
            </button>
          </div>

          <!-- LinkedIn Card -->
          <div class="contact-card glowing-card" @mouseenter="playHoverSound">
            <div class="card-icon-box">💼</div>
            <div class="card-info">
              <span class="info-label">{{ t.linkedinLabel }}</span>
              <a :href="personalInfo.linkedin" target="_blank" rel="noreferrer" class="info-value">
                linkedin.com/in/{{ personalInfo.linkedinHandle }} ↗
              </a>
            </div>
          </div>

          <!-- Location Card -->
          <div class="contact-card glowing-card" @mouseenter="playHoverSound">
            <div class="card-icon-box">📍</div>
            <div class="card-info">
              <span class="info-label">{{ t.locationLabel }}</span>
              <span class="info-value text-white">{{ personalInfo.location }}</span>
            </div>
          </div>
        </div>

        <!-- Interactive Form Right Side -->
        <div class="contact-form-card glowing-card reveal-right delay-200">
          <div v-if="isSubmitted" class="success-banner">
            <div class="check-circle">✓</div>
            <h3>{{ t.successTitle }}</h3>
            <p>{{ t.successDesc }}</p>
          </div>

          <form v-else class="form-body" @submit.prevent="handleSubmit">
            <h3>{{ t.formTitle }}</h3>
            
            <div class="form-group">
              <label>{{ t.nameLabel }}</label>
              <input v-model="form.name" type="text" placeholder="John Doe" required />
            </div>

            <div class="form-group">
              <label>{{ t.emailLabelInput }}</label>
              <input v-model="form.email" type="email" placeholder="email@example.com" required />
            </div>

            <div class="form-group">
              <label>{{ t.subjectLabel }}</label>
              <input v-model="form.subject" type="text" placeholder="Project Inquiry / Hiring..." />
            </div>

            <div class="form-group">
              <label>{{ t.messageLabel }}</label>
              <textarea v-model="form.message" rows="4" placeholder="Brief description of project requirements..." required></textarea>
            </div>

            <button type="submit" class="submit-btn" @mouseenter="playHoverSound">
              <span>{{ t.submitBtn }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <!-- Footer Bar -->
      <footer class="footer-bar reveal-init">
        <div class="footer-left">
          <span>{{ t.footerRights }}</span>
        </div>

        <div class="footer-links">
          <a :href="personalInfo.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          <a :href="`mailto:${personalInfo.email}`">Email</a>
          <a :href="`tel:${personalInfo.phone}`">Call</a>
        </div>

        <button class="back-to-top" @click="scrollToTop" @mouseenter="playHoverSound">
          {{ t.backToTop }}
        </button>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 100px 24px 40px;
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
  margin: 0 auto 50px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  margin-bottom: 80px;
}

.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contact-card {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 18px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 18px;
}

.card-icon-box {
  width: 46px;
  height: 46px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.info-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 1px;
  color: #64748b;
  margin-bottom: 2px;
}

.info-value {
  color: #06b6d4;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
}

.info-value.text-white {
  color: #f8fafc;
}

.copy-btn {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: rgba(6, 182, 212, 0.2);
  border-color: #06b6d4;
  transform: scale(1.1);
}

.contact-form-card {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 36px;
}

.form-body h3 {
  margin: 0 0 24px;
  font-size: 22px;
  font-weight: 800;
  color: #f8fafc;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.form-group label {
  font-size: 13px;
  font-weight: 600;
  color: #cbd5e1;
}

.form-group input,
.form-group textarea {
  background: rgba(10, 15, 28, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 16px;
  color: #fff;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.25s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #06b6d4;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s;
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.35);
}

.submit-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 25px rgba(6, 182, 212, 0.45);
}

.success-banner {
  text-align: center;
  padding: 40px 20px;
  animation: fadeIn 0.5s ease;
}

.check-circle {
  width: 60px;
  height: 60px;
  background: #10b981;
  color: #fff;
  font-size: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 0 25px rgba(16, 185, 129, 0.6);
  animation: pulseCheck 1s ease-in-out infinite alternate;
}

@keyframes pulseCheck {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

.success-banner h3 {
  font-size: 22px;
  color: #f8fafc;
  margin: 0 0 10px;
}

.success-banner p {
  color: #94a3b8;
  margin: 0;
}

.footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 12px;
  color: #64748b;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.25s;
}

.footer-links a:hover {
  color: #06b6d4;
}

.back-to-top {
  background: none;
  border: none;
  color: #06b6d4;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s;
}

.back-to-top:hover {
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .footer-bar {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
