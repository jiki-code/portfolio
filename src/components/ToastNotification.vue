<script setup>
defineProps({
  message: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <transition name="toast-slide">
    <div v-if="message" class="toast-wrapper">
      <div class="toast-card">
        <span class="toast-icon">✨</span>
        <span class="toast-msg">{{ message }}</span>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.toast-wrapper {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  pointer-events: none;
}

.toast-card {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(6, 182, 212, 0.4);
  padding: 14px 22px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.toast-icon {
  font-size: 18px;
}

.toast-msg {
  color: #e2e8f0;
}

.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-slide-enter-from,
.toast-slide-leave-to {
  transform: translateY(30px) scale(0.9);
  opacity: 0;
}
</style>
