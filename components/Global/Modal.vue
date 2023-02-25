<template>
<div class="bg-green-100 border border-green-400 text-black px-4 py-3 rounded mx-auto fixed inset-x-0 my-auto flex flex-col justify-center items-center w-1/4" role="alert">
  <span class="font-bold">{{ title }}</span>
  <span class="block sm:inline">{{ message }}</span>
</div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})
</script>