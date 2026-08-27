<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref(null)
let ctx = null
let animationFrameId = null
let width = 0
let height = 0

const mouse = { x: -1000, y: -1000, radius: 180 }
const particles = []
const sparkParticles = []
const PARTICLE_COUNT = 70

class Particle {
  constructor() {
    this.reset()
  }

  reset() {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.vx = (Math.random() - 0.5) * 0.7
    this.vy = (Math.random() - 0.5) * 0.7
    this.radius = Math.random() * 2.2 + 1
    this.alpha = Math.random() * 0.5 + 0.25
    this.color = Math.random() > 0.45 ? '139, 92, 246' : '6, 182, 212' // Purple or Cyan
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > width) this.vx *= -1
    if (this.y < 0 || this.y > height) this.vy *= -1

    // Mouse push effect
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < mouse.radius) {
      const force = (mouse.radius - dist) / mouse.radius
      const angle = Math.atan2(dy, dx)
      this.x -= Math.cos(angle) * force * 3.5
      this.y -= Math.sin(angle) * force * 3.5
    }
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`
    ctx.shadowColor = `rgba(${this.color}, 0.8)`
    ctx.shadowBlur = 12
    ctx.fill()
    ctx.shadowBlur = 0
  }
}

class ClickSpark {
  constructor(x, y) {
    this.x = x
    this.y = y
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 6 + 2
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed
    this.radius = Math.random() * 3 + 2
    this.alpha = 1
    this.decay = Math.random() * 0.03 + 0.025
    this.color = ['236, 72, 153', '6, 182, 212', '139, 92, 246', '16, 185, 129'][Math.floor(Math.random() * 4)]
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.vx *= 0.94
    this.vy *= 0.94
    this.alpha -= this.decay
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${this.color}, ${Math.max(0, this.alpha)})`
    ctx.shadowColor = `rgba(${this.color}, 1)`
    ctx.shadowBlur = 15
    ctx.fill()
    ctx.shadowBlur = 0
  }
}

function resize() {
  if (!canvasRef.value) return
  width = canvasRef.value.width = window.innerWidth
  height = canvasRef.value.height = window.innerHeight
}

function onMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function onMouseLeave() {
  mouse.x = -1000
  mouse.y = -1000
}

function onClick(e) {
  for (let i = 0; i < 22; i++) {
    sparkParticles.push(new ClickSpark(e.clientX, e.clientY))
  }
}

function render() {
  ctx.clearRect(0, 0, width, height)

  // Render background particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].update()
    particles[i].draw()

    // Constellation lines
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 130) {
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        const alpha = (1 - dist / 130) * 0.25
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`
        ctx.lineWidth = 0.9
        ctx.stroke()
      }
    }

    // Connect to cursor
    const dx = mouse.x - particles[i].x
    const dy = mouse.y - particles[i].y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < mouse.radius) {
      ctx.beginPath()
      ctx.moveTo(particles[i].x, particles[i].y)
      ctx.lineTo(mouse.x, mouse.y)
      const alpha = (1 - dist / mouse.radius) * 0.4
      ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`
      ctx.lineWidth = 1.4
      ctx.stroke()
    }
  }

  // Render Click Sparks
  for (let i = sparkParticles.length - 1; i >= 0; i--) {
    const spark = sparkParticles[i]
    spark.update()
    spark.draw()
    if (spark.alpha <= 0) {
      sparkParticles.splice(i, 1)
    }
  }

  animationFrameId = requestAnimationFrame(render)
}

onMounted(() => {
  if (!canvasRef.value) return
  ctx = canvasRef.value.getContext('2d')
  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseleave', onMouseLeave)
  window.addEventListener('click', onClick)

  particles.length = 0
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle())
  }

  render()
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseleave', onMouseLeave)
  window.removeEventListener('click', onClick)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <div class="particle-container">
    <canvas ref="canvasRef" class="particle-canvas"></canvas>
    <div class="ambient-glow glow-1"></div>
    <div class="ambient-glow glow-2"></div>
    <div class="ambient-glow glow-3"></div>
    <div class="laser-beam"></div>
  </div>
</template>

<style scoped>
.particle-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.22;
  pointer-events: none;
  animation: pulseGlow 10s ease-in-out infinite alternate;
}

.glow-1 {
  top: -15%;
  left: 20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.85), transparent 70%);
}

.glow-2 {
  bottom: 5%;
  right: -5%;
  width: 650px;
  height: 650px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.75), transparent 70%);
  animation-delay: -3.5s;
}

.glow-3 {
  top: 45%;
  left: -12%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.6), transparent 70%);
  animation-delay: -7s;
}

.laser-beam {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.8), rgba(139, 92, 246, 0.8), transparent);
  animation: scanline 8s linear infinite;
  opacity: 0.5;
}

@keyframes scanline {
  0% { transform: translateY(-100px); }
  100% { transform: translateY(100vh); }
}

@keyframes pulseGlow {
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 0.18;
  }
  50% {
    transform: scale(1.2) translate(40px, -30px);
    opacity: 0.3;
  }
  100% {
    transform: scale(0.85) translate(-30px, 40px);
    opacity: 0.15;
  }
}
</style>
