<template>
  <div class="mobile-terminal">
    <!-- Terminal Header -->
    <div class="terminal-header">
      <div class="terminal-controls">
        <span class="control red"></span>
        <span class="control yellow"></span>
        <span class="control green"></span>
      </div>
      <span class="terminal-title">terminal - alexis@remote:~</span>
    </div>

    <!-- Terminal Content -->
    <div class="terminal-body">
      <div class="terminal-output" ref="terminalOutput">
        <div class="line" v-for="(line, index) in displayedLines" :key="index">
          <span v-if="line.type === 'prompt'" class="prompt">alexis@remote:~$ </span>
          <span :class="line.class">{{ line.text }}</span>
          <span v-if="line.cursor" class="cursor">|</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const displayedLines = ref([])
const currentIndex = ref(0)

const terminalSequence = [
  { type: 'output', text: 'Initializing terminal...', class: 'loading', delay: 100 },
  { type: 'loading', text: '', class: 'loader', delay: 200 },
  { type: 'output', text: '✓ System ready', class: 'success', delay: 100 },
  { type: 'output', text: '', class: '', delay: 100 },
  
  { type: 'prompt', text: 'whoami', class: 'command', delay: 150 },
  { type: 'output', text: 'Alexis Cabillic - Développeur Full Stack', class: 'success', delay: 300 },
  { type: 'output', text: '', class: '', delay: 100 },
  
  { type: 'prompt', text: 'cat about.txt', class: 'command', delay: 200 },
  { type: 'loading', text: 'Loading...', class: 'loader', delay: 150 },
  { type: 'output', text: '📍 Remote depuis la France', class: 'info', delay: 150 },
  { type: 'output', text: '🔄 Reconversion réussie vers le dev', class: 'info', delay: 150 },
  { type: 'output', text: '❤️  Laravel + Vue.js = stack parfaite', class: 'info', delay: 150 },
  { type: 'output', text: '', class: '', delay: 100 },
  
  { type: 'prompt', text: 'ls skills/', class: 'command', delay: 200 },
  { type: 'output', text: 'PHP  Laravel  Vue.js  MySQL  Git  Docker', class: 'success', delay: 250 },
  { type: 'output', text: '', class: '', delay: 100 },
  
  { type: 'prompt', text: 'ls projects/', class: 'command', delay: 200 },
  { type: 'loading', text: 'Scanning projects...', class: 'loader', delay: 200 },
  { type: 'output', text: 'nutrifollow/     # App nutrition', class: 'project', delay: 150 },
  { type: 'output', text: 'film-match/      # App ciné couple', class: 'project', delay: 150 },
  { type: 'output', text: 'personal-tools/  # Scripts utiles', class: 'project', delay: 150 },
  { type: 'output', text: '', class: '', delay: 100 },
  
  { type: 'prompt', text: 'curl -s contact.json', class: 'command', delay: 200 },
  { type: 'loading', text: 'Fetching contact data...', class: 'loader', delay: 200 },
  { type: 'output', text: '{', class: 'json', delay: 100 },
  { type: 'output', text: '  "email": "alexis.cabillic@gmail.com",', class: 'json', delay: 100 },
  { type: 'output', text: '  "linkedin": "linkedin.com/in/alexis-cabillic",', class: 'json', delay: 100 },
  { type: 'output', text: '  "github": "github.com/CabAlexis",', class: 'json', delay: 100 },
  { type: 'output', text: '  "status": "available_for_work"', class: 'json', delay: 100 },
  { type: 'output', text: '}', class: 'json', delay: 100 },
  { type: 'output', text: '', class: '', delay: 200 },
  
  { type: 'prompt', text: '', class: 'command', delay: 0, cursor: true, permanent: true }
]

const typeWriter = async (text, element, speed = 30) => {
  for (let i = 0; i <= text.length; i++) {
    element.text = text.substring(0, i)
    await new Promise(resolve => setTimeout(resolve, speed))
  }
}

const progressLoader = async (element, duration = 1000) => {
  const chars = ['|', '/', '-', '\\']
  const bars = ['▱▱▱▱▱', '▰▱▱▱▱', '▰▰▱▱▱', '▰▰▰▱▱', '▰▰▰▰▱', '▰▰▰▰▰']
  let charIndex = 0
  let barIndex = 0
  
  const interval = setInterval(() => {
    charIndex = (charIndex + 1) % chars.length
    if (Math.random() > 0.7) barIndex = Math.min(barIndex + 1, bars.length - 1)
    element.text = `${bars[barIndex]} ${chars[charIndex]}`
  }, 120)
  
  setTimeout(() => {
    clearInterval(interval)
    element.text = '▰▰▰▰▰ ✓'
  }, duration)
  
  await new Promise(resolve => setTimeout(resolve, duration + 100))
}

const startTerminal = async () => {
  for (let i = 0; i < terminalSequence.length; i++) {
    const line = terminalSequence[i]
    
    if (line.permanent) {
      displayedLines.value.push({ ...line })
      break
    }
    
    // Add line
    const newLine = { ...line, text: '' }
    displayedLines.value.push(newLine)
    
    // Wait initial delay
    await new Promise(resolve => setTimeout(resolve, line.delay))
    
    // Handle different line types
    if (line.type === 'loading') {
      await progressLoader(newLine, line.delay * 3)
    } else if (line.text) {
      const speed = line.type === 'prompt' ? 60 : 20
      await typeWriter(line.text, newLine, speed)
    }
    
    // Small pause after typing
    await new Promise(resolve => setTimeout(resolve, 50))
  }
}

onMounted(() => {
  setTimeout(startTerminal, 300)
})
</script>

<style scoped>
.mobile-terminal {
  background: #000;
  color: #00ff00;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  height: 100vh;
  width: 100%;
  font-size: 14px;
  line-height: 1.4;
  overflow: hidden;
}

.terminal-header {
  background: #333;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #555;
}

.terminal-controls {
  display: flex;
  gap: 6px;
  margin-right: 12px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red { background: #ff5f56; }
.control.yellow { background: #ffbd2e; }
.control.green { background: #27ca3f; }

.terminal-title {
  color: #ccc;
  font-size: 12px;
  font-weight: 500;
}

.terminal-body {
  height: calc(100vh - 45px);
  padding: 16px;
  overflow-y: auto;
  background: #000;
}

.line {
  margin-bottom: 4px;
  word-wrap: break-word;
}

.prompt {
  color: #00ff00;
  font-weight: bold;
}

.command {
  color: #ffffff;
}

.success {
  color: #00ff00;
}

.info {
  color: #00bfff;
}

.project {
  color: #ffa500;
}

.json {
  color: #ff69b4;
}

.loading {
  color: #ffff00;
  font-style: italic;
}

.loader {
  color: #00bfff;
  font-weight: bold;
  letter-spacing: 1px;
}

.cursor {
  color: #00ff00;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Scrollbar styling */
.terminal-body::-webkit-scrollbar {
  width: 6px;
}

.terminal-body::-webkit-scrollbar-track {
  background: #111;
}

.terminal-body::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}

.terminal-body::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>