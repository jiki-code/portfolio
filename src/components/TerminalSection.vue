<script setup>
import { ref, computed } from 'vue'
import { currentLang } from '../stores/languageStore'
import { i18nText } from '../data/bilingualData'
import { personalInfo, codeSnippet } from '../data/resumeData'
import { playClickSound, playHoverSound } from '../utils/audio'
import { useScrollReveal } from '../utils/useScrollReveal'

useScrollReveal()

const emit = defineEmits(['copy-email'])
const t = computed(() => i18nText[currentLang.value].terminal)

const commandInput = ref('')
const commandLogs = ref([
  { type: 'sys', text: 'TAK OS v2.5.0 (x86_64-apple-darwin)' },
  { type: 'sys', text: 'Type `help` to list available commands.' },
  { type: 'input', text: 'cat kiet_profile.json' },
  { type: 'output', text: codeSnippet }
])

function handleCommand() {
  playClickSound()
  const cmd = commandInput.value.trim().toLowerCase()
  if (!cmd) return

  commandLogs.value.push({ type: 'input', text: cmd })
  commandInput.value = ''

  if (cmd === 'help') {
    commandLogs.value.push({
      type: 'output',
      text: `Available commands:
- help           : Show command manual
- profile        : Display JSON developer profile
- skills         : List core skills & frameworks
- projects       : View highlight public projects
- contact        : Retrieve contact details (Email, Phone, LinkedIn)
- clear          : Clear terminal screen`
    })
  } else if (cmd === 'profile' || cmd === 'cat kiet_profile.json') {
    commandLogs.value.push({ type: 'output', text: codeSnippet })
  } else if (cmd === 'skills') {
    commandLogs.value.push({
      type: 'output',
      text: `Frontend : Vue.js (Nuxt.js), React.js (Next.js), TypeScript, SCSS, Tailwind CSS
State    : Pinia, Redux, Zustand, Vuex, TanStack Query
Backend  : Node.js, Express.js, MySQL, PostgreSQL, MongoDB, Supabase, Firebase
Domain   : WMS, TMS, E-Commerce, Fintech Payment Gateways, Real-time Chat`
    })
  } else if (cmd === 'projects') {
    commandLogs.value.push({
      type: 'output',
      text: `Highlight Projects:
1. 5Gao Social Network       -> https://5gaoo.com/
2. TMS Gonsa Logistics        -> https://tms-staging.gonsa.vn/
3. DMS Kim Tín               -> https://uatcontrol-dms.kimtingroup.com:44354/
4. WMS Elmich                -> Enterprise Warehouse System
5. BaoViet Payment Gateway   -> VietQR, MoMo, ZaloPay Integration`
    })
  } else if (cmd === 'contact') {
    commandLogs.value.push({
      type: 'output',
      text: `Email    : ${personalInfo.email}
Phone    : ${personalInfo.phoneFormatted}
LinkedIn : ${personalInfo.linkedin}`
    })
  } else if (cmd === 'clear') {
    commandLogs.value = [{ type: 'sys', text: 'Terminal cleared.' }]
  } else {
    commandLogs.value.push({
      type: 'error',
      text: `Command not found: '${cmd}'. Type 'help' for assistance.`
    })
  }
}

function copySnippet() {
  playClickSound()
  navigator.clipboard.writeText(codeSnippet)
  emit('copy-email', t.value.copySuccess)
}
</script>

<template>
  <section id="terminal" class="terminal-section">
    <div class="section-container">
      <div class="section-header text-center reveal-init">
        <span class="section-tag">{{ t.tag }}</span>
        <h2 class="section-title">
          {{ t.titlePrefix }}<span class="text-gradient">{{ t.titleHighlight }}</span>
        </h2>
        <p class="section-subtitle">
          {{ t.subtitle }}
        </p>
      </div>

      <!-- Terminal Box -->
      <div class="terminal-box glowing-card reveal-init delay-100">
        <div class="terminal-topbar">
          <div class="buttons-group">
            <span class="btn red"></span>
            <span class="btn yellow"></span>
            <span class="btn green"></span>
          </div>
          <span class="terminal-title">kiet@dev-macbook-pro: ~/profile</span>
          <button class="copy-json-btn" @click="copySnippet" @mouseenter="playHoverSound">
            {{ t.copyBtn }}
          </button>
        </div>

        <div class="terminal-window">
          <div v-for="(log, idx) in commandLogs" :key="idx" class="log-line" :class="log.type">
            <template v-if="log.type === 'input'">
              <span class="prompt">kiet@portfolio:~$</span>
              <span class="cmd-text">{{ log.text }}</span>
            </template>
            <template v-else-if="log.type === 'sys'">
              <span class="sys-text"># {{ log.text }}</span>
            </template>
            <template v-else-if="log.type === 'error'">
              <span class="err-text">❌ {{ log.text }}</span>
            </template>
            <template v-else>
              <pre class="json-output">{{ log.text }}</pre>
            </template>
          </div>

          <!-- Command Input Line -->
          <form class="input-line" @submit.prevent="handleCommand">
            <span class="prompt">kiet@portfolio:~$</span>
            <input
              v-model="commandInput"
              type="text"
              class="terminal-input"
              :placeholder="t.placeholder"
              spellcheck="false"
              autocomplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.terminal-section {
  padding: 100px 24px;
}

.section-container {
  max-width: 1000px;
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
  background: linear-gradient(135deg, #10b981, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 16px;
  margin-bottom: 40px;
}

.terminal-box {
  background: rgba(10, 15, 26, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.terminal-topbar {
  background: rgba(15, 23, 42, 0.95);
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.buttons-group {
  display: flex;
  gap: 8px;
}

.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.red { background: #ef4444; }
.yellow { background: #f59e0b; }
.green { background: #10b981; }

.terminal-title {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: #64748b;
}

.copy-json-btn {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #06b6d4;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-json-btn:hover {
  background: rgba(6, 182, 212, 0.15);
  transform: scale(1.05);
}

.terminal-window {
  padding: 24px;
  min-height: 320px;
  max-height: 500px;
  overflow-y: auto;
  font-family: 'DM Mono', monospace;
  font-size: 14px;
}

.log-line {
  margin-bottom: 12px;
  line-height: 1.6;
}

.prompt {
  color: #10b981;
  margin-right: 10px;
  font-weight: 700;
}

.cmd-text {
  color: #f8fafc;
}

.sys-text {
  color: #64748b;
}

.err-text {
  color: #ef4444;
}

.json-output {
  margin: 8px 0;
  color: #c084fc;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.3);
  padding: 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.input-line {
  display: flex;
  align-items: center;
  margin-top: 16px;
}

.terminal-input {
  background: none;
  border: none;
  color: #06b6d4;
  font-family: inherit;
  font-size: 14px;
  width: 100%;
  outline: none;
}
</style>
