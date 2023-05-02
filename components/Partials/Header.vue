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
                            <div>
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
                            </div>
                            <span class="font-semibold text-3xl tracking-tight link-underline"
                                :class="changeColorOnScroll ? 'text-secondary link-underline-secondary' : 'text-primary link-underline-primary'">Cabalex</span>
                        </NuxtLink>
                        <!-- Mobile menu button -->
                        <div class="md:hidden justify-self-end"
                            :class="changeColorOnScroll ? 'bg-primary text-secondary' : 'bg-secondary text-primary'"
                            @click="toggleNav">
                            <button type="button" class="hover:text-accent focus:outline-none"
                                aria-label="Affichage navigation mobile">
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
                        <NuxtLink to="/parcours"
                            class="block lg:inline-block lg:mt-0 mr-4 text-lg link-underline transition ease-in-out hover:-translate-y-1 hover:scale-100 menu-item"
                            @click="showMenu = false"
                            :class="changeColorOnScroll ? 'text-secondary link-underline-secondary' : 'text-primary link-underline-primary'">
                            Mon parcours
                        </NuxtLink>
                        <NuxtLink to="/experiences"
                            class="block lg:inline-block lg:mt-0 mr-4 text-lg link-underline transition ease-in-out hover:-translate-y-1 hover:scale-100 menu-item"
                            @click="showMenu = false"
                            :class="changeColorOnScroll ? 'text-secondary link-underline-secondary' : 'text-primary link-underline-primary'">
                            Mes expériences
                        </NuxtLink>
                        <NuxtLink to="/contact"
                            class="block lg:inline-block lg:mt-0 mr-4 text-lg link-underline transition ease-in-out hover:-translate-y-1 hover:scale-100 menu-item"
                            @click="showMenu = false"
                            :class="changeColorOnScroll ? 'text-secondary link-underline-secondary' : 'text-primary link-underline-primary'">
                            Me contacter
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <!-- Navbar -->
        </div>
        <div class="bg-primary p-24 mt-20 rounded-xl banner fixed top-0 w-full" v-if="route.fullPath === '/'" :class="changeColorOnScroll ? 'hidden-banner' : 'visible-banner'">
            <div class="flex flex-col w-full items-center wrapper">
                <h1 class="text-5xl font-bold text-secondary title-style swipe">Alexis Cabillic</h1>
                <h3 class="text-2xl text-secondary title-style mt-4 swipe swipe--delay">Développeur FullStack <span
                        class="hidden md:inline-block">Web et Web Mobile</span></h3>
            </div>
        </div>
    </header>
</template>

<script setup>
const route = useRoute();
const showMenu = ref(false);
const toggleNav = () => {
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
<style scoped lang="scss">
.wrapper {
  .swipe {
    position: relative;
    width: fit-content;

    &::after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 100%;
      width: 0%;
      height: 100%;
      background-color: #164E63;
      animation: swipe 1.5s ease-out 1s forwards;
    }

    &--delay {
      &::after {
        background-color: #164E63;
        animation-delay: 1.5s;
      }
    }
  }

  h1 {
    display: block;
    color: #164E63;
    font-size: 72px;
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    padding: 15px 25px;
    opacity: 0;
    animation: fade 0.01s ease-out 1.75s forwards;
  }

  h3 {
    display: block;
    color: #164E63;
    font-size: 32px;
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    padding: 10px 15px;
    opacity: 0;
    animation: fade 0.01s ease-out 2.25s forwards;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes swipe {
  0% {
    right: 100%;
    left: 0;
    width: 0%;
  }

  50% {
    right: 0;
    left: 0;
    width: 100%;
  }

  100% {
    right: 0;
    left: 100%;
    width: 0%;
  }
}

.banner {
  opacity: 0;
}
.banner.visible-banner {
  opacity: 1;
  transform: translateY(0);
  animation: appear 1s ease-out forwards;
}

.banner.hidden-banner {
  opacity: 0;
  transform: translateY(-100px);
  animation: disappear 0.2s ease-out forwards;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes disappear {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100px);
  }
}
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

.menu-item {
    opacity: 0;
    /* la div est initialement cachée */
    animation-name: apparition;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes apparition {
    0% {
        opacity: 0;
        /* la div est transparente au début de l'animation */
    }

    100% {
        opacity: 1;
        /* la div est complètement visible à la fin de l'animation */
    }
}

nav {
    transform: translateX(-100%);
    animation-name: _apparition;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes _apparition {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
}
</style>
