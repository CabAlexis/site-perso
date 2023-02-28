<template>
    <header class="bg-primary">
        <div class="fixed top-0 w-full m-auto z-50 shadow-2xl">
            <!-- Navbar -->
            <div class="flex justify-around flex-wrap md:flex-nowrap" @scroll="handleScroll"
                :class="changeColorOnScroll ? 'bg-primary' : 'bg-secondary'">
                <nav class="md:mr-6 md:flex md:justify-between w-full md:w-auto"
                    :class="changeColorOnScroll ? 'bg-primary' : 'bg-secondary'">
                    <div class="px-6 py-8 flex justify-between">
                        <NuxtLink class="flex items-center justify-self-start text-white mr-6" to="/">
                            <div class="tooltip-box">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-paw mr-1 h-10 w-10" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    :class="changeColorOnScroll ? 'text-secondary' : 'text-primary'">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z">
                                    </path>
                                    <path
                                        d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z">
                                    </path>
                                    <path
                                        d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z">
                                    </path>
                                    <path
                                        d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z">
                                    </path>
                                    <path
                                        d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z">
                                    </path>
                                </svg>
                                <div class="tooltip">
                                    <span class="text">Pourquoi une patte d'ours ? Car cela me correspond bien.</span>
                                </div>
                            </div>
                            <span class="font-semibold text-3xl tracking-tight link-underline"
                                :class="changeColorOnScroll ? 'text-secondary link-underline-secondary' : 'text-primary link-underline-primary'">Cabalex</span>
                        </NuxtLink>
                        <!-- Mobile menu button -->
                        <div class="md:hidden justify-self-end"
                            :class="changeColorOnScroll ? 'bg-primary text-secondary' : 'bg-secondary text-primary'"
                            @click="toggleNav">
                            <button type="button" class="hover:text-accent focus:outline-none" aria-label="Affichage navigation mobile">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
                <div :class="showMenu ? 'flex w-full' : 'hidden'"
                    class="md:flex md:flex-row md:items-center md:space-x-10 md:mt-4 justify-end md:slide-in-from-right">
                    <div class="text-sm md:flex mr-4 md:mr-0 mb-4 md:md-0">
                        <NuxtLink to="/parcours" class="block lg:inline-block lg:mt-0 mr-4 text-lg link-underline"
                            @click="showMenu = false"
                            :class="changeColorOnScroll ? 'text-secondary link-underline-secondary' : 'text-primary link-underline-primary'">
                            Mon parcours
                        </NuxtLink>
                        <NuxtLink to="/experiences" class="block lg:inline-block lg:mt-0 mr-4 text-lg link-underline"
                            @click="showMenu = false"
                            :class="changeColorOnScroll ? 'text-secondary link-underline-secondary' : 'text-primary link-underline-primary'">
                            Mes expériences
                        </NuxtLink>
                        <NuxtLink to="/contact" class="block lg:inline-block lg:mt-0 mr-4 text-lg link-underline"
                            @click="showMenu = false"
                            :class="changeColorOnScroll ? 'text-secondary link-underline-secondary' : 'text-primary link-underline-primary'">
                            Me contacter
                        </NuxtLink>
                    </div>
                    <div class="hidden md:block md:mb-4">
                        <a href="/img/CV_Alexis_Cabillic_Développeur_Web_FullStack.pdf" target="_blank" download="CV_Alexis_Cabillic_Développeur_Web_FullStack.pdf"
                            class="inline-block text-sm px-4 py-2 leading-none border-4 hover:border-transparent animate-bounce font-bold mr-4 rounded-lg"
                            :class="changeColorOnScroll ? 'text-secondary border-secondary hover:text-primary hover:bg-secondary' : 'text-primary border-primary hover:text-secondary hover:bg-primary'">Télécharger
                            mon CV</a>
                    </div>
                </div>
            </div>
            <!-- Navbar -->

        </div>
    </header>
</template>

<script setup>
const route = useRoute();
const showMenu = ref(false);
const toggleNav = () => {
    console.log(showMenu.value);
    return showMenu.value = !showMenu.value
};
const changeColorOnScroll = ref(false);
const handleScroll = () => {
    if (window.scrollY > 160) {
        changeColorOnScroll.value = true;
    } else {
        changeColorOnScroll.value = false;
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})
</script>
<style scoped>
.link-underline {
    border-bottom-width: 0 5%;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 5px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size .5s ease-in-out;
}

.link-underline-secondary {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#164E63, #164E63)
}
.link-underline-primary {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#FFF7D6, #FFF7D6)
}

.link-underline:hover {
    background-size: 100% 5px;
    background-position: 0 100%
}
.tooltip-box {
  position: relative;
  display: inline-block;
}

.tooltip-box:hover .tooltip {
  opacity: 1;
}

.tooltip {
  margin-bottom: 1rem;
  color: #164E63;
  text-align: center;
  padding: 5px 0;
  border-radius: 2px;

  width: 250px;
  bottom: -200%;
  left: 50%;
  margin-left: -60px;
  padding: 0.5rem;
  opacity: 0;
  transition: opacity 1s;

  position: absolute;
  z-index: 1;

  background: #FFF7D6;
}
</style>