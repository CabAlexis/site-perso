<template>
  <div>
    <!-- Mobile Terminal (only on mobile) -->
    <div class="md:hidden">
      <MobileTerminal />
    </div>

    <!-- Desktop Version (hidden on mobile) -->
    <div class="hidden md:block">
    <!-- Hero Section avec style décontracté -->
    <section class="hero-casual section-padding flex items-center justify-center relative overflow-hidden">
      <!-- Matrix rain background -->
      <div class="matrix-rain absolute inset-0 z-0"></div>

      <!-- Étincelles qui montent -->
      <div class="sparks absolute inset-0 z-4">
        <div class="spark" v-for="n in 25" :key="'banner-spark-' + n"></div>
      </div>

      <!-- Particle system -->
      <div class="particles absolute inset-0 z-2">
        <div class="particle" v-for="n in 35" :key="n" :style="{animationDelay: (n * 0.05) + 's'}"></div>
      </div>

      <div class="container-width relative z-10">
        <div class="text-center relative z-10">
          <!-- Enhanced ASCII art background -->
          <div class="absolute -top-20 -left-20 text-8xl opacity-30 select-none font-mono text-green-400 floating matrix-char">{}</div>
          <div class="absolute -top-12 -right-20 text-6xl opacity-25 select-none font-mono text-green-400 floating-delayed matrix-char">[]</div>
          <div class="absolute -bottom-20 left-12 text-8xl opacity-30 select-none font-mono text-green-400 floating-slow matrix-char">;;</div>
          <div class="absolute top-1/2 -right-12 text-5xl opacity-20 select-none font-mono text-green-400 floating matrix-char">&lt;/&gt;</div>
          <div class="absolute top-1/4 -left-12 text-5xl opacity-20 select-none font-mono text-green-400 floating-delayed matrix-char">$</div>
          <div class="absolute top-3/4 -right-16 text-4xl opacity-15 select-none font-mono text-green-400 floating-slow matrix-char">npm</div>
          <div class="absolute bottom-1/4 -left-16 text-4xl opacity-15 select-none font-mono text-green-400 floating matrix-char">git</div>
          <div class="absolute top-1/3 right-1/4 text-3xl opacity-10 select-none font-mono text-green-400 floating-delayed matrix-char">&&</div>
          <div class="absolute bottom-1/3 left-1/4 text-3xl opacity-10 select-none font-mono text-green-400 floating-slow matrix-char">||</div>

          <div class="mb-12 terminal-path glitch-hover">
            <span class="accent-text text-2xl terminal-prompt">~/</span>
            <span class="font-mono text-4xl text-green-300 typing-username">alexis-cabillic</span>
          </div>

          <div class="modern-subtitle mb-16">
            <div class="cyber-subtitle">
              <span class="terminal-cursor text-green-400">$</span>
              <span class="text-white">dev --fullstack --remote</span>
            </div>
          </div>

          <div class="terminal mb-16 max-w-4xl mx-auto text-left terminal-glow terminal-enhanced">
            <div class="terminal-header mb-4">
              <div class="flex items-center justify-between">
                <div class="flex space-x-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span class="text-xs text-green-400 font-mono">terminal v2.1.0</span>
              </div>
            </div>
            <div class="typing-enhanced mb-3">
              <span class="text-green-300">root@alexis:~#</span> <span class="typing-text">laravel --vue --clean-code</span>
            </div>
            <div class="mt-4 text-yellow-400 font-mono typing-output" style="animation-delay: 2s">Scanning for optimal stack...</div>
            <div class="mt-2 text-green-300 font-mono typing-output" style="animation-delay: 3s">✓ Laravel framework loaded</div>
            <div class="mt-1 text-green-300 font-mono typing-output" style="animation-delay: 3.5s">✓ Vue.js components initialized</div>
            <div class="mt-1 text-green-300 font-mono typing-output" style="animation-delay: 4s">✓ Clean code principles applied</div>
            <div class="mt-3 text-gray-400 font-mono typing-output" style="animation-delay: 4.5s">/* reconversion: success ✓ */</div>
            <div class="mt-2 text-yellow-400 typing-output" style="animation-delay: 5s">~ $ whoami</div>
            <div class="mt-1 text-green-300 typing-output font-bold" style="animation-delay: 5.5s">dev_from_home 🏠</div>
            <div class="mt-3 text-green-400 blinking-cursor" style="animation-delay: 6s">│</div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a href="#projets" class="btn-funky-enhanced">
              ./projects
            </a>
            <a href="#contact" class="btn-outline-funky-enhanced">
              ./contact
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- À propos avec plus de personnalité -->
    <section id="about" class="section section-padding bg-black text-white scroll-reveal cyber-section">
      <!-- Étincelles pour cette section -->
      <div class="sparks">
        <div class="spark" v-for="n in 20" :key="'about-spark-' + n"></div>
      </div>
      <div class="container-width">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div class="terminal-content">
            <h2 class="text-4xl font-bold mb-6 text-green-400 font-mono neon-glow scroll-animate-zoom">
              $ cat about.md
            </h2>
            <div class="prose prose-lg max-w-none text-green-300 space-y-6 font-mono">
              <p class="terminal-line">
                <span class="text-yellow-400">>></span> Reconversion. Avant : pas dev. Maintenant : dev.
              </p>
              <p class="terminal-line">
                <span class="text-yellow-400">>></span> Laravel = coup de foudre. Apps web qui marchent (la plupart du temps).
              </p>
              <p class="terminal-line">
                <span class="text-yellow-400">>></span> Projets perso = vraie école. Plus efficace que les tutos.
              </p>
            </div>
          </div>

          <div class="relative">
            <div class="card-weird cyber-card">
              <div class="text-6xl mb-4 text-green-400">[DEV]</div>
              <h3 class="font-bold text-xl mb-4 text-green-400 font-mono neon-text">$ ls -la skills/</h3>
              <ul class="space-y-2 text-green-300 font-mono text-sm">
                <li class="terminal-line"><span class="text-yellow-400">></span> adaptable.exe</li>
                <li class="terminal-line"><span class="text-yellow-400">></span> autonomous_remote.sh</li>
                <li class="terminal-line"><span class="text-yellow-400">></span> clean_code.js</li>
                <li class="terminal-line"><span class="text-yellow-400">></span> curiosity_driven.py</li>
                <li class="terminal-line"><span class="text-yellow-400">></span> debug_persistent.php</li>
              </ul>
              <p class="text-sm text-gray-400 mt-4 font-mono terminal-comment">
                # remote_work: true
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack technique avec style -->
    <section id="stack" class="section section-padding bg-zinc-900 text-white scroll-reveal cyber-section">
      <!-- Étincelles pour cette section -->
      <div class="sparks">
        <div class="spark" v-for="n in 22" :key="'stack-spark-' + n"></div>
      </div>
      <div class="container-width">
        <h2 class="text-4xl font-bold text-center mb-12 text-green-400 font-mono neon-glow scroll-animate-zoom">
          $ which tools
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <!-- Backend -->
          <div class="card-weird cyber-card scroll-animate-bounce" style="animation-delay: 0.1s">
            <!-- Particules pour cette card -->
            <div class="particles">
              <div class="particle" v-for="n in 8" :key="'backend-' + n" :style="{left: (n * 12.5) + '%', animationDelay: (n * 0.15) + 's'}"></div>
            </div>
            <h3 class="font-bold text-xl mb-4 text-green-400 font-mono neon-text">./backend</h3>
            <div class="space-y-3">
              <div class="tech-badge">🐘 PHP</div>
              <div class="tech-badge">🎯 Laravel</div>
              <div class="tech-badge">🗄️ MySQL</div>
              <div class="tech-badge">⚡ Node.js</div>
            </div>
            <p class="text-sm text-gray-400 mt-4 font-mono terminal-comment">
              # Laravel ecosystem: eloquent, blade, artisan
            </p>
          </div>

          <!-- Frontend -->
          <div class="card-weird cyber-card scroll-animate-flip" style="animation-delay: 0.3s">
            <!-- Particules pour cette card -->
            <div class="particles">
              <div class="particle" v-for="n in 8" :key="'frontend-' + n" :style="{left: (n * 12.5) + '%', animationDelay: (n * 0.15) + 's'}"></div>
            </div>
            <h3 class="font-bold text-xl mb-4 text-green-400 font-mono neon-text">./frontend</h3>
            <div class="space-y-3">
              <div class="tech-badge">💚 Vue.js</div>
              <div class="tech-badge">🎨 Tailwind</div>
              <div class="tech-badge">📱 Nuxt</div>
              <div class="tech-badge">🔥 Alpine.js</div>
            </div>
            <p class="text-sm text-gray-400 mt-4 font-mono terminal-comment">
              # reactive + utility-first css
            </p>
          </div>

          <!-- Outils -->
          <div class="card-weird cyber-card scroll-animate-rotate" style="animation-delay: 0.5s">
            <!-- Particules pour cette card -->
            <div class="particles">
              <div class="particle" v-for="n in 8" :key="'tools-' + n" :style="{left: (n * 12.5) + '%', animationDelay: (n * 0.15) + 's'}"></div>
            </div>
            <h3 class="font-bold text-xl mb-4 text-green-400 font-mono neon-text">./daily_drivers</h3>
            <div class="space-y-3">
              <div class="tech-badge">🔧 Git</div>
              <div class="tech-badge">🐳 Docker</div>
              <div class="tech-badge">✅ PHPUnit</div>
              <div class="tech-badge">🚀 GitHub Actions</div>
            </div>
            <p class="text-sm text-gray-400 mt-4 font-mono terminal-comment">
              # git: version_control<br>
              # docker: env_isolation<br>
              # actions: ci/cd_pipeline
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projets avec plus de fun -->
    <section id="projets" class="section section-padding bg-black text-white scroll-reveal cyber-section">
      <!-- Étincelles pour cette section -->
      <div class="sparks">
        <div class="spark" v-for="n in 25" :key="'projets-spark-' + n"></div>
      </div>
      <div class="container-width">
        <h2 class="text-4xl font-bold text-center mb-4 text-green-400 font-mono neon-glow scroll-animate-zoom">
          $ ls projects/
        </h2>
        <p class="text-center text-gray-400 mb-12 max-w-2xl mx-auto font-mono terminal-comment">
          # learning_by_building > tutorials
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <!-- NutriFollow -->
          <div class="card-weird cyber-card scroll-animate-scale" style="animation-delay: 0.2s">
            <!-- Particules pour cette card -->
            <div class="particles">
              <div class="particle" v-for="n in 6" :key="'nutri-' + n" :style="{left: (n * 16.6) + '%', animationDelay: (n * 0.2) + 's'}"></div>
            </div>
            <div class="text-4xl mb-4 text-green-400">[APP]</div>
            <h3 class="text-xl font-bold text-green-400 mb-3 font-mono neon-text">nutrifollow/</h3>
            <p class="text-green-300 mb-4 font-mono text-xs sm:text-sm">
              <span class="text-gray-400"># nutrition_management_app</span><br>
              <span class="text-yellow-400">-</span> patient tracking<br>
              <span class="text-yellow-400">-</span> meal planning<br>
              <span class="text-yellow-400">-</span> consultation notes
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-badge">Laravel</span>
              <span class="tech-badge">Vue.js</span>
              <span class="tech-badge">MySQL</span>
            </div>
            <p class="text-xs text-gray-400 font-mono terminal-comment">status: active_development</p>
          </div>

          <!-- Personal Tools -->
          <div class="card-weird cyber-card scroll-animate-glitch" style="animation-delay: 0.4s">
            <!-- Particules pour cette card -->
            <div class="particles">
              <div class="particle" v-for="n in 6" :key="'ptools-' + n" :style="{left: (n * 16.6) + '%', animationDelay: (n * 0.2) + 's'}"></div>
            </div>
            <div class="text-4xl mb-4 text-green-400">[TOOLS]</div>
            <h3 class="text-xl font-bold text-green-400 mb-3 font-mono neon-text">personal_tools/</h3>
            <p class="text-green-300 mb-4 font-mono text-xs sm:text-sm">
              <span class="text-gray-400"># various utilities</span><br>
              <span class="text-yellow-400">-</span> cli tools<br>
              <span class="text-yellow-400">-</span> automation scripts<br>
              <span class="text-yellow-400">-</span> productivity hacks
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-badge">PHP</span>
              <span class="tech-badge">Bash</span>
              <span class="tech-badge">Python</span>
            </div>
            <p class="text-xs text-gray-400 font-mono terminal-comment">status: ongoing</p>
          </div>

          <!-- Film Match -->
          <div class="card-weird cyber-card scroll-animate-left" style="animation-delay: 0.6s">
            <!-- Particules pour cette card -->
            <div class="particles">
              <div class="particle" v-for="n in 6" :key="'film-' + n" :style="{left: (n * 16.6) + '%', animationDelay: (n * 0.2) + 's'}"></div>
            </div>
            <div class="text-4xl mb-4 text-green-400">[APP]</div>
            <h3 class="text-xl font-bold text-green-400 mb-3 font-mono neon-text">film_match/</h3>
            <p class="text-green-300 mb-4 font-mono text-xs sm:text-sm">
              <span class="text-gray-400"># couple movie picker</span><br>
              <span class="text-yellow-400">-</span> swipe preferences<br>
              <span class="text-yellow-400">-</span> match algorithm<br>
              <span class="text-yellow-400">-</span> no more netflix scrolling
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-badge">Vue.js</span>
              <span class="tech-badge">TMDB API</span>
              <span class="tech-badge">PWA</span>
            </div>
            <p class="text-xs text-gray-400 font-mono terminal-comment">status: production</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-400 mb-6 font-mono terminal-comment">
            # break.fix.learn.repeat
          </p>
          <a href="https://github.com/CabAlexis" class="link-funky text-lg font-mono text-green-400 neon-link" target="_blank" rel="noopener">
            >> github.com/CabAlexis
          </a>
        </div>
      </div>
    </section>

    <!-- Blog/LinkedIn -->
    <section id="blog" class="section section-padding bg-zinc-900 text-white scroll-reveal cyber-section">
      <!-- Étincelles pour cette section -->
      <div class="sparks">
        <div class="spark" v-for="n in 18" :key="'blog-spark-' + n"></div>
      </div>
      <div class="container-width">
        <div class="card-weird cyber-card max-w-4xl mx-auto text-center">
          <!-- Particules pour cette card -->
          <div class="particles">
            <div class="particle" v-for="n in 12" :key="'blog-card-' + n" :style="{left: (n * 8.33) + '%', animationDelay: (n * 0.1) + 's'}"></div>
          </div>
          <div class="text-6xl mb-6 text-green-400">[LOG]</div>
          <h2 class="text-4xl font-bold mb-6 text-green-400 font-mono neon-glow scroll-animate-zoom">
            $ cat thoughts.log
          </h2>
          <p class="text-sm sm:text-lg text-green-300 mb-6 sm:mb-8 font-mono">
            <span class="text-gray-400"># sharing experience on linkedin</span><br>
            <span class="text-gray-400"># no_fancy_blog, just_real_posts</span>
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left mb-8">
            <div>
              <h4 class="font-bold mb-2 font-mono text-green-400 neon-text">./tech/</h4>
              <ul class="text-green-300 space-y-1 text-xs sm:text-sm font-mono">
                <li class="terminal-line"><span class="text-yellow-400 mr-2">-</span><span>first_deploy_disaster.md</span></li>
                <li class="terminal-line"><span class="text-yellow-400 mr-2">-</span><span>laravel_lifesavers.php</span></li>
                <li class="terminal-line"><span class="text-yellow-400 mr-2">-</span><span>overcoming_test_fear.js</span></li>
                <li class="terminal-line"><span class="text-yellow-400 mr-2">-</span><span>clean_vs_deadline.md</span></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2 font-mono text-green-400 neon-text">./life/</h4>
              <ul class="text-green-300 space-y-1 text-xs sm:text-sm font-mono">
                <li class="terminal-line"><span class="text-yellow-400 mr-2">-</span><span>remote_work_100.sh</span></li>
                <li class="terminal-line"><span class="text-yellow-400 mr-2">-</span><span>failed_projects.log</span></li>
                <li class="terminal-line"><span class="text-yellow-400 mr-2">-</span><span>career_switch_real.md</span></li>
                <li class="terminal-line"><span class="text-yellow-400 mr-2">-</span><span>home_office_tips.txt</span></li>
              </ul>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/alexis-cabillic/" class="btn-funky" target="_blank" rel="noopener">
            >> linkedin
          </a>
        </div>
      </div>
    </section>

    <!-- Contact décontracté -->
    <section id="contact" class="section section-padding bg-zinc-900 text-white scroll-reveal cyber-section">
      <!-- Étincelles pour cette section -->
      <div class="sparks">
        <div class="spark" v-for="n in 20" :key="'contact-spark-' + n"></div>
      </div>
      <div class="container-width text-center">
        <h2 class="text-4xl font-bold mb-6 scroll-animate-zoom">
          $ ./contact.sh
        </h2>
        <p class="text-xl mb-12 text-black-300 max-w-2xl mx-auto font-mono">
          # questions? projects? just_say_hi?
        </p>

        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
          <a href="mailto:alexis.cabillic@gmail.com" class="btn-funky-enhanced">
            >> alexis.cabillic@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/alexis-cabillic/" class="btn-outline-funky-enhanced" target="_blank" rel="noopener">
            linkedin
          </a>
        </div>

        <div class="terminal max-w-lg mx-auto">
          <div>$ ping alexis@cabillic.fr</div>
          <div class="text-yellow-400 mt-2"># always responds</div>
          <div class="text-green-300 mt-1">connection: established</div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>
