<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation avec style terminal (hidden on mobile) -->
    <nav class="hidden md:block fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-md border-b-6 border-black" style="box-shadow: 0 6px 0px #22c55e;">
      <div class="container-width section-padding">
        <div class="flex items-center justify-between py-3">
          <div class="flex items-center space-x-3">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div class="w-3 h-3 bg-green-400 rounded-full"></div>
            <a href="#" class="text-xl font-mono font-bold text-green-400 ml-4 glitch">
              alexis@remote:~$
            </a>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-6">
            <a href="#about" class="text-green-400 font-mono hover:text-yellow-400 transition-colors">ls about</a>
            <a href="#stack" class="text-green-400 font-mono hover:text-yellow-400 transition-colors">cat stack</a>
            <a href="#projets" class="text-green-400 font-mono hover:text-yellow-400 transition-colors">./projets</a>
            <a href="#blog" class="text-green-400 font-mono hover:text-yellow-400 transition-colors">tail blog</a>
            <a href="#contact" class="px-3 py-1 bg-yellow-400 text-zinc-900 font-mono font-bold border border-yellow-400 hover:bg-transparent hover:text-yellow-400 transition-all">ping contact</a>
          </div>

          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 border border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 transition-colors font-mono text-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-show="mobileMenuOpen" class="md:hidden py-4 border-t border-yellow-400 bg-zinc-900">
          <div class="flex flex-col space-y-3">
            <a href="#about" @click="mobileMenuOpen = false" class="text-green-400 font-mono hover:text-yellow-400 transition-colors">ls about</a>
            <a href="#stack" @click="mobileMenuOpen = false" class="text-green-400 font-mono hover:text-yellow-400 transition-colors">cat stack</a>
            <a href="#projets" @click="mobileMenuOpen = false" class="text-green-400 font-mono hover:text-yellow-400 transition-colors">./projets</a>
            <a href="#blog" @click="mobileMenuOpen = false" class="text-green-400 font-mono hover:text-yellow-400 transition-colors">tail blog</a>
            <a href="#contact" @click="mobileMenuOpen = false" class="px-3 py-1 bg-yellow-400 text-zinc-900 font-mono font-bold inline-block text-center border border-yellow-400 hover:bg-transparent hover:text-yellow-400 transition-all">ping contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer avec personnalité (hidden on mobile) -->
    <footer class="hidden md:block bg-zinc-900 text-white section-padding py-12">
      <div class="container-width">
        <div class="text-center mb-8">
          <div class="terminal inline-block mb-6">
            <div class="font-mono">
              console.log("Merci d'être passé ! 👋");
            </div>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <h3 class="text-xl font-bold mb-2 font-mono">Alexis.exe</h3>
            <p class="text-zinc-400">Dev fullstack remote & bidouilleur d'apps</p>
          </div>
          
          <div class="flex space-x-6">
            <a href="mailto:alexis.cabillic@gmail.com" class="text-zinc-400 hover:text-yellow-400 transition-colors text-2xl" title="Email">
              📧
            </a>
            <a href="https://www.linkedin.com/in/alexis-cabillic/" target="_blank" rel="noopener" class="text-zinc-400 hover:text-blue-400 transition-colors text-2xl" title="LinkedIn">
              💼
            </a>
            <a href="https://github.com/CabAlexis" target="_blank" rel="noopener" class="text-zinc-400 hover:text-green-400 transition-colors text-2xl" title="GitHub">
              🐙
            </a>
          </div>
        </div>
        
        <div class="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400">
          <p class="font-mono text-sm">
            © 2025 - Codé avec ❤️, Laravel et beaucoup de ☕
          </p>
          <p class="text-xs mt-2 opacity-75">
            PS: Ce site ne collecte aucune donnée. Promis juré. 🤞
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)

// Fermer le menu mobile au scroll
onMounted(() => {
  window.addEventListener('scroll', () => {
    if (mobileMenuOpen.value) {
      mobileMenuOpen.value = false
    }
  })
})
</script>