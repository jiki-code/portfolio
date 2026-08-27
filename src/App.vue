<script setup>
import { ref } from 'vue'
import ParticleBackground from './components/ParticleBackground.vue'
import CustomCursor from './components/CustomCursor.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TerminalSection from './components/TerminalSection.vue'
import ContactSection from './components/ContactSection.vue'
import ProjectModal from './components/ProjectModal.vue'
import ToastNotification from './components/ToastNotification.vue'
import { personalInfo } from './data/resumeData'

const selectedProject = ref(null)
const toastMessage = ref('')
let toastTimer = null

function triggerToast(msg = 'Đã sao chép email: jikid0973@gmail.com!') {
  if (toastTimer) clearTimeout(toastTimer)
  toastMessage.value = msg
  toastTimer = setTimeout(() => {
    toastMessage.value = ''
  }, 3000)
}

function handleCopyEmail(customMsg) {
  const email = personalInfo.email
  navigator.clipboard.writeText(email)
  triggerToast(customMsg || `Đã sao chép Email (${email}) vào khay nhớ tạm!`)
}

function openModal(project) {
  selectedProject.value = project
}

function closeModal() {
  selectedProject.value = null
}
</script>

<template>
  <div class="app-root">
    <!-- Particle Background Canvas -->
    <ParticleBackground />

    <!-- Custom Glowing Cursor -->
    <CustomCursor />

    <!-- Navigation Bar -->
    <Navbar @copy-email="handleCopyEmail" />

    <!-- Main Content Stream -->
    <main class="main-content">
      <!-- 00: Hero -->
      <HeroSection @copy-email="handleCopyEmail" />

      <!-- 01: About Me -->
      <AboutSection @copy-email="handleCopyEmail" />

      <!-- 02: Skills & Tech Stack -->
      <SkillsSection />

      <!-- 03: Work Experience Timeline -->
      <ExperienceSection />

      <!-- 04: Featured Public Projects -->
      <ProjectsSection @select-project="openModal" />

      <!-- 05: Developer Hacker Terminal -->
      <TerminalSection @copy-email="triggerToast" />

      <!-- 06: Contact Form & Footer -->
      <ContactSection @copy-email="triggerToast" />
    </main>

    <!-- Modal for Project Showcase -->
    <ProjectModal :project="selectedProject" @close="closeModal" />

    <!-- Toast Notification -->
    <ToastNotification :message="toastMessage" />
  </div>
</template>

<style scoped>
.app-root {
  min-height: 100vh;
  background: #090a0f;
  color: #f8fafc;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
  overflow-x: hidden;
}

.main-content {
  position: relative;
  z-index: 1;
}
</style>
