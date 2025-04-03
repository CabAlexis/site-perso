<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center flex-col min-h-screen">
      <GlobalLoader />
      <p class="text-secondary mt-12 text-xl font-bold">L'ours sort de sa tanière, veuillez patienter ...</p>
      <img class="h-48 mt-12" src="/img/ea7fb51963e57e0062d4b547254cee45.gif" alt="">
    </div>
    <!-- <div class="min-h-screen" v-else>
    <PartialsHeader />
    <main class="flex flex-col flex-grow lg:w-9/12 mb-auto ml-auto mr-auto mt-40 p-4">
      <slot />
    </main>
    <PartialsFooter />
  </div> -->
    <div class="flex justify-center items-center flex-col min-h-screen bg-[#f0f2f5] text-center px-4" v-if="!loading">
      <h1 class="text-3xl md:text-5xl font-bold text-[#333] mt-0 mb-8">
        Site en Cours de Rénovation
      </h1>
      <p class="text-xl md:text-2xl text-[#555] mb-12">
        Nous travaillons pour améliorer votre expérience. Revenez bientôt !
      </p>
      <img src="/img/8b66454b-3c31-4927-84fc-d96d65701bad.webp" alt="Rénovation en cours" class="h-48 md:h-64">
      <p class="text-secondary mt-12 text-lg font-semibold">
        Merci pour votre patience.
      </p>
    </div>
  </div>

</template>

<script setup>

const loading = ref(true);
const isMounted = ref(false);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
    isMounted.value = true;
  }, 3000);
})
</script>

<style scoped></style>