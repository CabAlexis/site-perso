<template>
  <div v-if="loading" class="flex justify-center items-center flex-col min-h-screen">
    <GlobalLoader />
    <p class="text-secondary mt-12 text-xl font-bold">L'ours sort de sa tanière, veuillez patienter ...</p>
    <img class="h-48 mt-12" src="/img/ea7fb51963e57e0062d4b547254cee45.gif" alt="">
  </div>
  <div class="min-h-screen" v-else>
    <PartialsHeader />
    <main class="flex flex-col flex-grow lg:w-9/12 mb-auto ml-auto mr-auto mt-40 p-4">
      <slot />
    </main>
    <PartialsFooter />
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

<style scoped>
</style>