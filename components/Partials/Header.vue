<template>
    <header>
        <!-- Navbar -->
        <div class="w-full flex justify-between fixed top-0 h-20" @scroll="handleScroll"
            :class="changeColorOnScroll ? 'bg-cyan-900' : 'bg-amber-100'">
            <nav class="mr-6 w-full px-6 py-8 md:flex md:justify-between"
                :class="changeColorOnScroll ? 'bg-cyan-900' : 'bg-amber-100'">
                <NuxtLink class="flex items-center justify-self-start text-white mr-6" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-1"
                        :class="changeColorOnScroll ? 'bg-amber-100 text-cyan-900' : 'bg-cyan-900 text-amber-100'">
                        <path fill-rule="evenodd"
                            d="M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z"
                            clip-rule="evenodd" />
                    </svg>

                    <span class="font-semibold text-xl tracking-tight"
                        :class="changeColorOnScroll ? 'text-amber-100' : 'text-cyan-900'">Cabalex</span>
                </NuxtLink>
                <div :class="showMenu ? 'flex bg-amber-100' : 'hidden'"
                    class="mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
                    <div class="text-sm md:flex">
                        <NuxtLink to="/parcours" class="block lg:inline-block lg:mt-0 mr-4 link-underline"
                            :class="changeColorOnScroll ? 'text-amber-100 link-underline-amber hover:text-amber-400' : 'text-cyan-900 link-underline-cyan hover:text-cyan-600'">
                            Mon parcours
                        </NuxtLink>
                        <a href="#responsive-header" class="block lg:inline-block lg:mt-0 mr-4 link-underline"
                            :class="changeColorOnScroll ? 'text-amber-100 link-underline-amber hover:text-amber-400' : 'text-cyan-900 link-underline-cyan hover:text-cyan-600'">
                            Mes expériences
                        </a>
                        <a href="#responsive-header" class="block lg:inline-block lg:mt-0 mr-4 link-underline"
                            :class="changeColorOnScroll ? 'text-amber-100 link-underline-amber hover:text-amber-400' : 'text-cyan-900 link-underline-cyan hover:text-cyan-600'">
                            Mes projets en cours
                        </a>
                    </div>
                    <div class="hidden md:block lg:block">
                        <a href="/img/CV_Alexis_Cabillic.pdf" target="_blank" download="CV_Alexis_Cabillic.pdf"
                            class="inline-block text-sm px-4 py-2 leading-none border rounded hover:border-transparent mt-4 lg:mt-0 animate-bounce"
                            :class="changeColorOnScroll ? 'text-amber-100 border-amber-100 hover:text-cyan-900 hover:bg-amber-100' : 'text-cyan-900 border-cyan-900 hover:text-amber-100 hover:bg-cyan-900'">Télécharger
                            mon CV</a>
                    </div>
                </div>
            </nav>
            <!-- Mobile menu button -->
            <div class="flex md:hidden bg-amber-100" @click="toggleNav">
                <button type="button" class="text-cyan-900 hover:text-cyan-600 focus:outline-none">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                        <path fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
        <!-- Navbar -->

        <!-- Background image -->
        <div class="bg-cyan-900 h-40 mt-20" v-if="route.path == '/'" :class="showMenu ? 'mt-40' : ''">
            <div class="w-full h-full overflow-hidden bg-fixed">
                <div class="flex justify-center items-center h-full">
                    <div class="flex justify-between text-white px-6 md:px-12 w-full">
                        <h1 class="text-5xl font-bold mt-12 text-amber-100 mr-6">Alexis Cabillic</h1>
                        <div class="bg-amber-100 h-18 w-6 rounded"></div>
                        <h3 class="text-3xl font-bold text-amber-100 ml-6">Développeur Web</h3>
                    </div>
                </div>
            </div>
        </div>
        <!-- Background image -->
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
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size .5s ease-in-out;
}

.link-underline-cyan {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#164e63, #164e63)
}

.link-underline-amber {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fde68a, #fde68a)
}

.link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%
}
</style>