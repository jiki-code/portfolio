<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const cursorX = ref(-100)
const cursorY = ref(-100)
const dotX = ref(-100)
const dotY = ref(-100)
const isHovered = ref(false)
const isClicking = ref(false)
const isVisible = ref(false)

let animationFrame = null

function updateCursor(e) {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  isVisible.value = true

  const target = e.target
  if (
    target &&
    (target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('button') ||
      target.closest('a') ||
      target.classList.contains('interactive'))
  ) {
    isHovered.value = true
  } else {
    isHovered.value = false
  }
}

function onMouseDown() {
  isClicking.value = true
}

function onMouseUp() {
  isClicking.value = false
}

function onMouseLeave() {
  isVisible.value = false
}

function animateDot() {
  // Smooth lerp for outer ring
  dotX.value += (cursorX.value - dotX.value) * 0.18
  dotY.value += (cursorY.value - dotY.value) * 0.18
  animationFrame = requestAnimationFrame(animateDot)
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursor)
  window.addEventListener('mousedown', onMouseDown)
  window.addEventListener('mouseup', onMouseUp)
  document.addEventListener('mouseleave', onMouseLeave)
  animateDot()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor)
  window.removeEventListener('mousedown', onMouseDown)
  window.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('mouseleave', onMouseLeave)
  if (animationFrame) cancelAnimationFrame(animationFrame)
})
</script>

<template>
  <div v-if="isVisible" class="custom-cursor-wrapper">
    <div
      class="cursor-dot"
      :style="{ transform: `translate3d(${cursorX}px, ${cursorY}px, 0)` }"
      :class="{ clicking: isClicking, active: isHovered }"
    ></div>
    <div
      class="cursor-ring"
      :style="{ transform: `translate3d(${dotX}px, ${dotY}px, 0)` }"
      :class="{ clicking: isClicking, active: isHovered }"
    ></div>
  </div>
</template>

<style scoped>
.custom-cursor-wrapper {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}

.cursor-dot {
  position: absolute;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background: #06b6d4;
  border-radius: 50%;
  box-shadow: 0 0 10px #06b6d4;
  transition: transform 0.05s ease-out, width 0.2s, height 0.2s, background-color 0.2s;
  will-change: transform;
}

.cursor-ring {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  border: 1.5px solid rgba(139, 92, 246, 0.6);
  border-radius: 50%;
  transition: transform 0.08s ease-out, width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
  will-change: transform;
}

.cursor-ring.active {
  width: 60px;
  height: 60px;
  top: -30px;
  left: -30px;
  border-color: rgba(6, 182, 212, 0.9);
  background: rgba(6, 182, 212, 0.08);
}

.cursor-dot.active {
  background: #8b5cf6;
  box-shadow: 0 0 14px #8b5cf6;
}

.cursor-ring.clicking {
  transform: scale(0.8) !important;
  border-color: #ec4899;
}

@media (max-width: 768px) {
  .custom-cursor-wrapper {
    display: none;
  }
}
</style>
