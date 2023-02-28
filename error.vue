<template>
    <div class="flex flex-col justify-between items-center">
        <span class="text-2xl text-secondary">404 - Page non trouvée</span>
        <div class="h-full flex justify-center items-center mb-24">
            <img src="/img/undraw_Page_not_found_re_e9o6.png" alt="">
        </div>
        <button class="bg-primary hover:bg-secondary hover:text-primary text-secondary font-bold py-2 px-4 rounded-full" aria-label="Retourner a la page d'accueil">
            <NuxtLink to="/">Retourner à la page d'accueil</NuxtLink>
        </button>
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'custom'
})
</script>