<template>
    <header class="bg-primary z-50">
        <div class="fixed top-0 w-full m-auto z-50 shadow-2xl">
        <!-- Navbar -->
        <div class="flex justify-around flex-wrap md:flex-nowrap" @scroll="handleScroll"
            :class="changeColorOnScroll ? 'bg-primary' : 'bg-secondary'">
            <nav class="md:mr-6 md:flex md:justify-between w-full md:w-auto"
                :class="changeColorOnScroll ? 'bg-primary' : 'bg-secondary'">
                <div class="px-6 py-8 flex justify-between">
                    <NuxtLink class="flex items-center justify-self-start text-white mr-6" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            class="w-10 h-10 mr-1"
                            :class="changeColorOnScroll ? 'text-secondary' : 'text-primary'">
                            <path fill-rule="evenodd"
                                d="M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z"
                                clip-rule="evenodd" />
                        </svg>

                        <span class="font-semibold text-3xl tracking-tight link-underline"
                            :class="changeColorOnScroll ? 'text-secondary link-underline-tertiary' : 'text-primary link-underline-tertiary'">Cabalex</span>
                    </NuxtLink>
                    <!-- Mobile menu button -->
                    <div class="md:hidden justify-self-end" :class="changeColorOnScroll ? 'bg-primary text-secondary' : 'bg-secondary text-primary'" @click="toggleNav">
                        <button type="button" class="hover:text-accent focus:outline-none">
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
                        :class="changeColorOnScroll ? 'text-secondary link-underline-tertiary hover:text-accent' : 'text-primary link-underline-tertiary hover:text-accent'">
                        Mon parcours
                    </NuxtLink>
                    <NuxtLink to="/experiences" class="block lg:inline-block lg:mt-0 mr-4 text-lg link-underline"
                        @click="showMenu = false"
                        :class="changeColorOnScroll ? 'text-secondary link-underline-tertiary hover:text-accent' : 'text-primary link-underline-tertiary hover:text-accent'">
                        Mes expériences
                    </NuxtLink>
                    <NuxtLink to="/contact" class="block lg:inline-block lg:mt-0 mr-4 text-lg link-underline"
                        @click="showMenu = false"
                        :class="changeColorOnScroll ? 'text-secondary link-underline-tertiary hover:text-accent' : 'text-primary link-underline-tertiary hover:text-accent'">
                        Me contacter
                    </NuxtLink>
                </div>
                <div class="hidden md:block md:mb-4">
                    <a href="/img/CV_Alexis_Cabillic.pdf" target="_blank" download="CV_Alexis_Cabillic.pdf"
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
.link-underline-tertiary {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#A7ACD9, #A7ACD9)
}

.link-underline:hover {
    background-size: 100% 5px;
    background-position: 0 100%
}
</style>