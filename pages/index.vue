<template>
  <div>
    <!-- Hero Section avec style décontracté -->
    <section class="hero-casual section-padding flex items-center justify-center relative overflow-hidden">
      <div class="container-width">
        <div class="text-center relative z-10">
          <!-- Emoji en background plus subtils -->
          <div class="absolute -top-16 -left-16 text-6xl opacity-10 select-none">👋</div>
          <div class="absolute -top-8 -right-16 text-5xl opacity-10 select-none">💻</div>
          <div class="absolute -bottom-16 left-8 text-6xl opacity-10 select-none">☕</div>
          
          <div class="mb-4">
            <span class="accent-text text-lg">~/</span>
            <span class="font-mono text-lg text-zinc-600">alexis-cabillic</span>
          </div>
          
          <h1 class="modern-title mb-6">
            Alexis
          </h1>
          
          <div class="modern-subtitle mb-8">
            Dev fullstack qui code des trucs qui marchent
          </div>
          
          <div class="terminal mb-8 max-w-2xl mx-auto text-left">
            <div class="typing">
              Laravel + Vue.js = ❤️
            </div>
            <div class="mt-2">// Reconverti, passionné par le code propre</div>
            <div class="mt-1 text-yellow-400">➜ Bidouille des apps depuis son bureau en remote</div>
            <div class="mt-1 text-green-300">whoami: ancien-pas-dev-maintenant-si</div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projets" class="btn-funky">
              Voir mes bidouilles
            </a>
            <a href="#contact" class="btn-outline-funky">
              On discute ?
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- À propos avec plus de personnalité -->
    <section id="about" class="section section-padding bg-white">
      <div class="container-width">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold mb-6 text-zinc-900">
              Salut ! 👋
            </h2>
            <div class="prose prose-lg max-w-none text-zinc-600 space-y-6">
              <p>
                <strong>La version courte :</strong> J'ai 30 ans, j'étais pas développeur avant, maintenant je le suis. 
                Plot twist réussi ! 🎉
              </p>
              <p>
                <strong>La version un peu plus longue :</strong> Après plein de jobs différents, j'ai découvert Laravel et ça a été le coup de foudre. 
                Maintenant je passe mes journées à coder des applications web qui, miracle, fonctionnent la plupart du temps.
              </p>
              <p>
                <strong>Mon truc en plus :</strong> J'adore bidouiller des projets perso ! NutriFollow (outil pour diététiciens), Film Match (pour savoir quoi regarder en couple), et plein d'autres trucs mais chut c'est secret 🤫. 
                Ces projets m'ont énormément appris - bien plus que n'importe quel tuto. C'est comme ça que je suis devenu le dev que je suis aujourd'hui !
              </p>
            </div>
          </div>
          
          <div class="relative">
            <div class="card-weird">
              <div class="text-6xl mb-4">🧑‍💻</div>
              <h3 class="font-bold text-xl mb-4">Mes qualités & points forts</h3>
              <ul class="space-y-2 text-zinc-600">
                <li>• <strong>Adaptabilité :</strong> reconversion réussie, j'apprends vite</li>
                <li>• <strong>Autonomie :</strong> 100% remote, je gère mes projets de A à Z</li>
                <li>• <strong>Pragmatique :</strong> code propre mais qui répond au besoin</li>
                <li>• <strong>Curieux :</strong> toujours en train de tester de nouveaux trucs</li>
                <li>• <strong>Persévérant :</strong> quand ça bug, je lâche pas l'affaire</li>
              </ul>
              <p class="text-sm text-zinc-500 mt-4 italic">
                Le remote work m'a appris à être super organisé et autonome. Pas besoin de micro-management !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack technique avec style -->
    <section id="stack" class="section section-padding bg-zinc-100">
      <div class="container-width">
        <h2 class="text-4xl font-bold text-center mb-12 text-zinc-900">
          Ma boîte à outils 🧰
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Backend -->
          <div class="card-weird">
            <h3 class="font-bold text-xl mb-4 text-zinc-900">Backend</h3>
            <div class="space-y-3">
              <div class="tech-badge">🐘 PHP</div>
              <div class="tech-badge">🎯 Laravel</div>
              <div class="tech-badge">🗄️ MySQL</div>
              <div class="tech-badge">⚡ Node.js</div>
            </div>
            <p class="text-sm text-zinc-600 mt-4">
              Laravel, c'est mon doudou. Eloquent, Blade, Artisan... j'adore cet écosystème. 
              Perfect pour développer en remote avec une équipe ou en solo.
            </p>
          </div>

          <!-- Frontend -->
          <div class="card-weird">
            <h3 class="font-bold text-xl mb-4 text-zinc-900">Frontend</h3>
            <div class="space-y-3">
              <div class="tech-badge">💚 Vue.js</div>
              <div class="tech-badge">🎨 Tailwind</div>
              <div class="tech-badge">📱 Nuxt</div>
              <div class="tech-badge">🔥 Alpine.js</div>
            </div>
            <p class="text-sm text-zinc-600 mt-4">
              Vue.js pour la logique, Tailwind pour le style. Simple, efficace, et ça marche super bien en télétravail !
            </p>
          </div>

          <!-- Outils -->
          <div class="card-weird">
            <h3 class="font-bold text-xl mb-4 text-zinc-900">Mes potes du quotidien</h3>
            <div class="space-y-3">
              <div class="tech-badge">🔧 Git</div>
              <div class="tech-badge">🐳 Docker</div>
              <div class="tech-badge">✅ PHPUnit</div>
              <div class="tech-badge">🚀 GitHub Actions</div>
            </div>
            <p class="text-sm text-zinc-600 mt-4">
              Sans Git, je suis perdu. Docker me sauve la vie pour les envs de dev. 
              Et GitHub Actions, c'est magique pour déployer depuis mon salon !
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projets avec plus de fun -->
    <section id="projets" class="section section-padding bg-white">
      <div class="container-width">
        <h2 class="text-4xl font-bold text-center mb-4 text-zinc-900">
          Mes petits projets 🚀
        </h2>
        <p class="text-center text-zinc-600 mb-12 max-w-2xl mx-auto">
          Ces projets m'ont appris plus que tous les cours du monde. Chaque bug, chaque refacto, chaque "ça marche pas" m'a fait progresser.
          Voici mes principales expérimentations qui ont façonné le dev que je suis...
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- NutriFollow -->
          <div class="card-weird">
            <div class="text-4xl mb-4">🥗</div>
            <h3 class="text-xl font-bold text-zinc-900 mb-3">NutriFollow</h3>
            <p class="text-zinc-600 mb-4">
              Une app pour diététiciens-nutritionnistes : gestion patients, consultations, plans alimentaires, suivi... 
              L'idée m'est venue en discutant avec des pros de la nutrition qui galèrent avec Excel ! 
              <strong>Actuellement en étude de marché</strong> pour voir si ça vaut le coup de creuser.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-badge">Laravel</span>
              <span class="tech-badge">Vue.js</span>
              <span class="tech-badge">Market Research</span>
            </div>
            <p class="text-xs text-zinc-500">Status: En étude de marché 📊 (validation du besoin en cours)</p>
          </div>

          <!-- Projets Secrets CDI -->
          <div class="card-weird">
            <div class="text-4xl mb-4">🤐</div>
            <h3 class="text-xl font-bold text-zinc-900 mb-3">Projets secrets</h3>
            <p class="text-zinc-600 mb-4">
              Plein d'autres projets en cours... mais chut ! 🤫 
              Dans le cadre de mon CDI, je bosse sur des trucs cool que je peux pas encore dévoiler. 
              <strong>Le genre de projets qui me font kiffer le dev</strong> tous les jours !
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-badge">🔒 Confidentiel</span>
              <span class="tech-badge">Laravel</span>
              <span class="tech-badge">Vue.js</span>
            </div>
            <p class="text-xs text-zinc-500">Status: En développement actif 🚀 (mais secret défense !)</p>
          </div>

          <!-- Film Match -->
          <div class="card-weird">
            <div class="text-4xl mb-4">🎬</div>
            <h3 class="text-xl font-bold text-zinc-900 mb-3">Film Match</h3>
            <p class="text-zinc-600 mb-4">
              Le projet qui a sauvé mon couple ! 😂 
              Plus sérieusement : app pour couples qui galèrent à choisir un film. Chacun swipe ses préfs, l'algo trouve les matchs. 
              <strong>Fini les soirées perdues à scroller Netflix !</strong> Ma copine et mes potes l'utilisent vraiment, ça c'est le vrai test !
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="tech-badge">Vue.js</span>
              <span class="tech-badge">TMDB API</span>
              <span class="tech-badge">PWA</span>
            </div>
            <p class="text-xs text-zinc-500">Status: En prod chez moi ! ✅ (mes amis l'utilisent vraiment)</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-zinc-600 mb-6">
            <strong>La vraie école du dev :</strong> bidouiller, casser, réparer, refactoriser, recommencer... 
            C'est comme ça qu'on apprend vraiment ! Chaque projet m'a fait progresser de ouf. 🚀
          </p>
          <a href="https://github.com/cabalex" class="link-funky text-lg" target="_blank" rel="noopener">
            → Voir le code sur GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Blog/LinkedIn -->
    <section id="blog" class="section section-padding bg-yellow-50">
      <div class="container-width">
        <div class="card-weird max-w-4xl mx-auto text-center">
          <div class="text-6xl mb-6">📝</div>
          <h2 class="text-4xl font-bold mb-6 text-zinc-900">
            Mes réflexions en vrac
          </h2>
          <p class="text-lg text-zinc-600 mb-8">
            Je partage mes galères et mes trouvailles sur <strong>LinkedIn</strong>. 
            Entre retours d'expérience, découvertes techniques et réflexions sur le développement.
            Pas de blog fancy, juste des posts honnêtes depuis mon bureau à la maison.
          </p>
          <div class="grid md:grid-cols-2 gap-6 text-left mb-8">
            <div>
              <h4 class="font-bold mb-2">Côté technique :</h4>
              <ul class="text-zinc-600 space-y-1 text-sm">
                <li>• Comment j'ai fait foirer mon premier deploy</li>
                <li>• Laravel tips qui m'ont sauvé la vie</li>
                <li>• Pourquoi j'ai arrêté d'avoir peur des tests</li>
                <li>• Clean code vs. deadline serrée</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2">Côté lifestyle & remote :</h4>
              <ul class="text-zinc-600 space-y-1 text-sm">
                <li>• Remote work à 100% : comment bien s'organiser</li>
                <li>• Mes flops de projets et pourquoi c'est formateur</li>
                <li>• Reconversion dev : la vraie version, pas Instagram</li>
                <li>• Remote work full time : avantages et pièges</li>
                <li>• Home office : mes tips pour être productif</li>
              </ul>
            </div>
          </div>
          <a href="https://linkedin.com/in/alexiscabillic" class="btn-funky" target="_blank" rel="noopener">
            Me suivre sur LinkedIn
          </a>
        </div>
      </div>
    </section>

    <!-- Contact décontracté -->
    <section id="contact" class="section section-padding bg-zinc-900 text-white">
      <div class="container-width text-center">
        <h2 class="text-4xl font-bold mb-6">
          On se fait un café ? ☕
        </h2>
        <p class="text-xl mb-12 text-zinc-300 max-w-2xl mx-auto">
          Un projet à discuter ? Une question technique ? Envie d'échanger sur le remote work ou la reconversion dev ? 
          Ou juste un petit hello ? Écrivez-moi, je réponds toujours depuis mon bureau à la maison ! ☕
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <a href="mailto:alexis@cabillic.fr" class="btn-funky">
            📧 alexis@cabillic.fr
          </a>
          <a href="https://linkedin.com/in/alexiscabillic" class="btn-outline-funky text-white border-white" target="_blank" rel="noopener">
            💼 LinkedIn
          </a>
        </div>
        
        <div class="terminal max-w-lg mx-auto">
          <div>git clone https://github.com/cabalex</div>
          <div class="text-yellow-400 mt-2">// Ou juste un petit hello par email 👋</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Alexis Cabillic - Dev fullstack qui fait des trucs qui marchent',
  meta: [
    {
      name: 'description',
      content: 'Développeur Laravel/Vue.js reconverti. Je code des apps web en remote. Pas de jargon, juste du concret.'
    }
  ]
})
</script>