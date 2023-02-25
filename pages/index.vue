<template>
  <div class="bg-primary p-8 m-8 rounded-xl border-2 border-accent">
    <div class="flex flex-col px-6 md:px-12 w-full items-center">
      <span class="text-5xl font-bold text-secondary title-style">Alexis Cabillic</span>
      <span class="text-2xl text-secondary title-style">Développeur Web</span>
    </div>
  </div>
  <div class="m-auto mb-12">
    <div class="flex items-center text-secondary mt-12 mb-12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
        <path fill-rule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clip-rule="evenodd" />
      </svg>


      <h2 class="text-5xl title-style underline-short-title">Qui suis-je ?</h2>
    </div>
    <div class="w-9/12 m-auto mb-24">
      <h3 class="font-bold text-xl">Bienvenue sur mon site !</h3>
      <p class="text-lg mt-4">
        Je suis un développeur avec 2 ans d'expérience, ayant fait le choix de me reconvertir dans ce domaine après
        beaucoup d'expériences différentes.
      </p>
      <p class="text-lg mt-4">
        Je travaille actuellement sur Laravel et Vue, deux technologies qui me permettent de créer des sites web
        dynamiques et performants. Cependant, je suis toujours en quête de nouvelles connaissances et de nouveaux défis,
        et j'aime explorer de nouveaux outils et langages de programmation.
      </p>
      <p class="text-lg mt-4">
        Ma reconversion réussie dans le monde du développement est l'une de mes plus grandes fiertés, et j'espère que mon
        expérience pourra inspirer ceux qui envisagent un changement de carrière.
      </p>
      <p class="text-lg mt-4">
        J'espère que vous apprécierez la visite de mon site
        web. Si vous avez des questions ou des projets sur lesquels vous souhaiteriez que je travaille, n'hésitez pas à me
        contacter. Je suis toujours prêt à relever de nouveaux défis !
      </p>
    </div>
    <div class="flex items-center justify-end text-secondary mt-12 mb-12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
        <path fill-rule="evenodd"
          d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
          clip-rule="evenodd" />
        <path
          d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
        <path fill-rule="evenodd"
          d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
          clip-rule="evenodd" />
      </svg>
      <h2 class="text-5xl title-style underline-long-title">Mes qualités techniques</h2>
    </div>
    <div class="flex justify-between items-center">
      <div class="mb-4 md:ml-8 slide-in-image w-4/12">
        <img src="/img/undraw_feeling_proud_qne1.png" alt="Photo de moi" class="w-full img-shadow-left">
      </div>
      <div class="w-full ml-24">
        <h2 class="text-2xl font-bold text-secondary mb-6">Backend</h2>
        <p>PHP (7.4 > 8.1)</p>
        <div class="container">
          <div class="skills php"></div>
        </div>
        <p>Laravel</p>
        <div class="container">
          <div class="skills laravel"></div>
        </div>
        <p>SQL</p>
        <div class="container">
          <div class="skills sql"></div>
        </div>
        <p>NodeJS (Express)</p>
        <div class="container">
          <div class="skills node"></div>
        </div>
        <h2 class="text-2xl font-bold text-secondary mb-6 mt-8">Frontend</h2>
        <p>HTML/CSS</p>
        <div class="container">
          <div class="skills html"></div>
        </div>
        <p>JavaScript</p>
        <div class="container">
          <div class="skills js"></div>
        </div>
        <p>VueJS (Nuxt)</p>
        <div class="container">
          <div class="skills vue"></div>
        </div>
        <p>Tailwind</p>
        <div class="container">
          <div class="skills tailwind"></div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center mt-24">
      <div class="w-full ml-12">
        <h2 class="text-2xl font-bold text-secondary mb-6 mt-8">Outils</h2>
        <div class="flex flex-wrap">
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Git</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Table Plus</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">PhpMyAdmin</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Méthodologie Agile</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Docker</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Postman</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Insomnia</div>
        </div>
      </div>
      <div class="mb-4 md:ml-8 slide-in-image w-4/12">
        <img src="/img/undraw_Web_developer_re_h7ie.png" alt="Photo de moi" class="w-full img-shadow-right">
      </div>
    </div>
    <div class="flex items-center text-secondary mt-12 mb-12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
        <path
          d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
      <h2 class="text-5xl title-style underline-long-title">Mes qualités humaines</h2>
    </div>
    <div class="flex justify-between items-center mt-24">
      <div class="mb-4 md:ml-8 slide-in-image w-4/12">
        <img src="/img/undraw_building_websites_i78t.png" alt="Photo de moi" class="w-full img-shadow-left">
      </div>
      <div class="w-full ml-24">
        <h2 class="text-2xl font-bold text-secondary mb-6 mt-8">Relationnel</h2>
        <div class="flex flex-wrap">
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Sociabilité</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Adaptabilité</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Relation client</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Intelligence émotionelle</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Esprit d'équipe</div>
        </div>
        <h2 class="text-2xl font-bold text-secondary mb-6 mt-8">Organisationnel</h2>
        <div class="flex flex-wrap">
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Rigoureux</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Gestion du stress</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Apprentissage rapide</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Pensée logique</div>
          <div class="rounded-xl bg-accent w-3/12 text-center m-2">Télétravail</div>
        </div>
      </div>

    </div>
  </div>
</template>
  
<script setup>
definePageMeta({
  layout: 'custom'
})
</script>

<style scoped>
* {
  box-sizing: border-box
}

.container {
  width: 100%;
  background-color: #FFF7D6;
}

.skills {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #000;
}

.html {
  width: 90%;
  background-color: #A7ACD9;
}

.php {
  width: 85%;
  background-color: #A7ACD9;
}

.sql {
  width: 75%;
  background-color: #A7ACD9;
}

.laravel {
  width: 85%;
  background-color: #A7ACD9;
}

.node {
  width: 60%;
  background-color: #A7ACD9;
}

.js {
  width: 85%;
  background-color: #A7ACD9;
}

.vue {
  width: 80%;
  background-color: #A7ACD9;
}

.tailwind {
  width: 75%;
  background-color: #A7ACD9;
}
</style>